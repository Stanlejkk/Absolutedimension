/**
 * POST /api/admin/refund
 * Body: { orderId: string }
 *
 * Admin-only. Initiates a Stripe refund against the order's payment_intent.
 * The follow-up `charge.refunded` webhook is what actually flips
 * `orders.status` to 'refunded' — we intentionally do not update the row
 * here, keeping the webhook as the single source of truth for status.
 */

export const config = { runtime: "edge" };

import { getStripe } from "../_lib/stripe";
import { getSupabaseAdmin } from "../_lib/supabaseAdmin";
import { requireAdmin, AuthError } from "../_lib/requireAdmin";
import {
  json,
  badRequest,
  methodNotAllowed,
  readJson,
  serverError,
  unauthorized,
  forbidden,
} from "../_lib/json";

interface OrderRow {
  id: string;
  stripe_payment_intent: string | null;
  status: "pending" | "paid" | "fulfilled" | "shipped" | "refunded" | "canceled";
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return methodNotAllowed("POST");

  try {
    await requireAdmin(req);
  } catch (err) {
    if (err instanceof AuthError) {
      return err.status === 403 ? forbidden(err.message) : unauthorized(err.message);
    }
    throw err;
  }

  const payload = await readJson<{ orderId?: string }>(req);
  const orderId = payload?.orderId;
  if (!orderId) return badRequest("missing-orderId");

  try {
    const supabase = getSupabaseAdmin();
    const order = await supabase
      .from("orders")
      .select("id, stripe_payment_intent, status")
      .eq("id", orderId)
      .maybeSingle<OrderRow>();

    if (order.error || !order.data) return badRequest("order-not-found");
    if (order.data.status === "refunded") return badRequest("already-refunded");
    if (!order.data.stripe_payment_intent) return badRequest("no-payment-intent");

    const stripe = getStripe();
    const refund = await stripe.refunds.create({
      payment_intent: order.data.stripe_payment_intent,
    });

    return json({ ok: true, refundId: refund.id, status: refund.status });
  } catch (err) {
    console.error("refund: unexpected", err);
    return serverError("refund-failed");
  }
}
