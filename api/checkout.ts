/**
 * POST /api/checkout
 *
 * Turns the browser's cart into a Stripe Checkout Session.
 *
 * Request body:
 *   { items: { productId, size, quantity }[], currency: "pln", locale: "pl"|"en" }
 *
 * Security: prices are re-read from Supabase before being handed to Stripe —
 * never trust the unit_amount the browser sends. The session id is returned
 * alongside `url` so the client can poll for order status if it wants to.
 *
 * Runs on Edge so Request/Response plumbing stays straightforward.
 */

export const config = { runtime: "edge" };

import { getStripe } from "./_lib/stripe";
import { getSupabaseAdmin } from "./_lib/supabaseAdmin";
import { json, badRequest, methodNotAllowed, readJson, serverError } from "./_lib/json";
import { siteUrl } from "./_lib/env";

interface IncomingItem {
  productId: string;
  size: string;
  quantity: number;
}

interface ProductRow {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  stock_quantity: number;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return methodNotAllowed("POST");

  const payload = await readJson<{
    items?: unknown;
    currency?: unknown;
    locale?: unknown;
  }>(req);
  if (!payload) return badRequest("invalid-json");

  const locale = payload.locale === "en" ? "en" : "pl";
  const rawItems = Array.isArray(payload.items) ? payload.items : [];
  if (rawItems.length === 0) return badRequest("empty-cart");

  const items: IncomingItem[] = [];
  for (const raw of rawItems) {
    if (!raw || typeof raw !== "object") return badRequest("invalid-item");
    const r = raw as Record<string, unknown>;
    const productId = typeof r.productId === "string" ? r.productId : null;
    const size = typeof r.size === "string" ? r.size : "";
    const quantity = Number(r.quantity);
    if (!productId || !Number.isFinite(quantity) || quantity <= 0) {
      return badRequest("invalid-item");
    }
    items.push({ productId, size, quantity: Math.min(Math.floor(quantity), 10) });
  }

  try {
    const supabase = getSupabaseAdmin();
    const ids = Array.from(new Set(items.map((i) => i.productId)));
    const { data: products, error } = await supabase
      .from("products")
      .select("id, name, price, image, sizes, stock_quantity")
      .in("id", ids)
      .returns<ProductRow[]>();
    if (error) {
      console.error("checkout: products fetch", error);
      return serverError("catalog-unavailable");
    }
    const byId = new Map<string, ProductRow>();
    for (const p of products ?? []) byId.set(p.id, p);

    // Aggregate requested quantity per product (same product could appear as
    // multiple size variants in the cart).
    const requestedById = new Map<string, number>();
    for (const item of items) {
      requestedById.set(item.productId, (requestedById.get(item.productId) ?? 0) + item.quantity);
    }

    for (const item of items) {
      const p = byId.get(item.productId);
      if (!p) return badRequest(`unknown-product:${item.productId}`);
      if (item.size && Array.isArray(p.sizes) && p.sizes.length > 0 && !p.sizes.includes(item.size)) {
        return badRequest(`invalid-size:${item.productId}`);
      }
      const wanted = requestedById.get(item.productId) ?? 0;
      if (wanted > (p.stock_quantity ?? 0)) {
        return badRequest(`out-of-stock:${item.productId}`);
      }
    }

    const stripe = getStripe();
    const origin = siteUrl();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "p24", "blik"],
      locale: locale === "pl" ? "pl" : "en",
      line_items: items.map((i) => {
        const p = byId.get(i.productId)!;
        return {
          quantity: i.quantity,
          price_data: {
            currency: "pln",
            unit_amount: p.price,
            product_data: {
              name: p.name + (i.size ? ` — ${i.size}` : ""),
              images: p.image ? [absoluteImage(p.image, origin)] : undefined,
              metadata: { productId: p.id, size: i.size },
            },
          },
        };
      }),
      shipping_address_collection: {
        allowed_countries: ["PL", "DE", "FR", "GB", "IT", "ES", "NL", "BE", "AT", "CZ", "SK", "US"],
      },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: { locale },
    });

    return json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("checkout: unexpected", err);
    return serverError("checkout-failed");
  }
}

function absoluteImage(src: string, origin: string): string {
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith("/")) return `${origin}${src}`;
  return `${origin}/${src}`;
}
