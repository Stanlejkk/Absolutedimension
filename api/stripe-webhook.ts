/**
 * POST /api/stripe-webhook
 *
 * Stripe hits this endpoint after every relevant payment event. We care about
 * `checkout.session.completed`: that's when we persist the order and its line
 * items to Supabase. The raw request body is verified against
 * `STRIPE_WEBHOOK_SECRET`; any tampered request is rejected.
 *
 * Edge runtime gives us direct access to the raw body via `req.text()`, which
 * the Node runtime in @vercel/node cannot currently guarantee.
 */

export const config = { runtime: "edge" };

import type Stripe from "stripe";
import { getStripe } from "./_lib/stripe";
import { getSupabaseAdmin } from "./_lib/supabaseAdmin";
import { requiredEnv } from "./_lib/env";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("method not allowed", { status: 405, headers: { allow: "POST" } });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) return new Response("missing signature", { status: 400 });

  const rawBody = await req.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      requiredEnv("STRIPE_WEBHOOK_SECRET"),
    );
  } catch (err) {
    console.error("stripe-webhook: signature", err);
    return new Response(`webhook signature failed`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "charge.refunded":
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;
      default:
        // Unhandled events are fine — Stripe retries only 4xx/5xx.
        break;
    }
    return new Response(null, { status: 200 });
  } catch (err) {
    console.error("stripe-webhook: handler", err);
    return new Response("handler failed", { status: 500 });
  }
}

async function handleSessionCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const supabase = getSupabaseAdmin();
  const stripe = getStripe();

  // Idempotency: refuse to duplicate an order for the same session.
  const existing = await supabase
    .from("orders")
    .select("id")
    .eq("stripe_session_id", session.id)
    .maybeSingle();
  if (existing.data) return;

  const customer = session.customer;
  const customerEmail =
    customer && typeof customer !== "string" && !("deleted" in customer)
      ? customer.email ?? null
      : null;
  const email =
    session.customer_details?.email ??
    session.customer_email ??
    customerEmail ??
    "unknown@unknown";

  const locale = (session.metadata?.locale === "en" ? "en" : "pl") as "pl" | "en";
  const amount = session.amount_total ?? 0;
  const currency = session.currency ?? "pln";
  const shipping = session.shipping_details
    ? {
        name: session.shipping_details.name,
        phone: session.customer_details?.phone ?? null,
        address: session.shipping_details.address,
      }
    : null;

  // Pull user_id by matching the email back to profiles. Guest purchases stay
  // unlinked (user_id = null) but still appear in the admin dashboard.
  const profile = await supabase
    .from("profiles")
    .select("id")
    .eq("email", email)
    .maybeSingle<{ id: string }>();

  const orderInsert = await supabase
    .from("orders")
    .insert({
      stripe_session_id: session.id,
      stripe_payment_intent:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : session.payment_intent?.id ?? null,
      user_id: profile.data?.id ?? null,
      email,
      amount,
      currency,
      status: session.payment_status === "paid" ? "paid" : "pending",
      shipping,
      locale,
    })
    .select("id")
    .single<{ id: string }>();

  if (orderInsert.error || !orderInsert.data) {
    throw new Error(`order insert failed: ${orderInsert.error?.message}`);
  }
  const orderId = orderInsert.data.id;

  // Expand line items — Checkout Session's `line_items` field is lazy.
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 100,
    expand: ["data.price.product"],
  });

  const rows = lineItems.data.map((li) => {
    const product = li.price?.product as Stripe.Product | undefined;
    const metadata = product?.metadata ?? {};
    return {
      order_id: orderId,
      product_id: metadata.productId ?? null,
      name: product?.name ?? li.description ?? "Item",
      size: metadata.size ?? "",
      quantity: li.quantity ?? 1,
      unit_amount: li.price?.unit_amount ?? 0,
      image: Array.isArray(product?.images) && product?.images[0] ? product.images[0] : "",
    };
  });

  if (rows.length > 0) {
    const itemsInsert = await supabase.from("order_items").insert(rows);
    if (itemsInsert.error) {
      throw new Error(`order_items insert failed: ${itemsInsert.error.message}`);
    }
  }
}

async function handleChargeRefunded(charge: Stripe.Charge): Promise<void> {
  const pi = typeof charge.payment_intent === "string" ? charge.payment_intent : null;
  if (!pi) return;
  const supabase = getSupabaseAdmin();
  await supabase
    .from("orders")
    .update({ status: "refunded" })
    .eq("stripe_payment_intent", pi);
}
