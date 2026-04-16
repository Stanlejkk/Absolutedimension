/**
 * Stripe checkout hand-off.
 *
 * The frontend never talks to Stripe directly — it hands the current cart to a
 * serverless endpoint (configured via `VITE_STRIPE_CHECKOUT_URL`) that creates
 * a Stripe Checkout Session server-side and returns its `url`. The browser is
 * then redirected there.
 *
 * Until that endpoint is wired up, `initiateCheckout` resolves in a
 * dev-friendly "pending" state so the UI can show a message without crashing.
 *
 * The expected server contract:
 *   POST  { items: CheckoutLineItem[], currency: "pln", locale: "pl" | "en" }
 *   200 → { url: string }   // Stripe-hosted Checkout URL
 *   4xx → { error: string }
 */

import type { CartItem } from "./CartContext";

export interface CheckoutLineItem {
  productId: string;
  name: string;
  size: string;
  /** In PLN grosze — Stripe's smallest-unit convention. */
  unitAmount: number;
  quantity: number;
  image: string;
}

export interface CheckoutRequest {
  items: CheckoutLineItem[];
  currency: "pln";
  locale: "pl" | "en";
}

export type CheckoutResult =
  | { status: "redirect"; url: string }
  | { status: "pending"; reason: "unconfigured" }
  | { status: "error"; message: string };

const CHECKOUT_URL = import.meta.env.VITE_STRIPE_CHECKOUT_URL as string | undefined;

export function toCheckoutLineItems(items: CartItem[]): CheckoutLineItem[] {
  return items.map((i) => ({
    productId: i.productId,
    name: i.name,
    size: i.size,
    unitAmount: i.price,
    quantity: i.quantity,
    image: i.image,
  }));
}

export async function initiateCheckout(
  items: CartItem[],
  locale: "pl" | "en",
): Promise<CheckoutResult> {
  if (items.length === 0) {
    return { status: "error", message: "empty-cart" };
  }
  if (!CHECKOUT_URL) {
    return { status: "pending", reason: "unconfigured" };
  }

  const payload: CheckoutRequest = {
    items: toCheckoutLineItems(items),
    currency: "pln",
    locale,
  };

  try {
    const res = await fetch(CHECKOUT_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      return { status: "error", message: body.error ?? `http_${res.status}` };
    }
    const body = (await res.json()) as { url?: string };
    if (!body.url) return { status: "error", message: "missing-url" };
    return { status: "redirect", url: body.url };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "network",
    };
  }
}

export function isCheckoutConfigured(): boolean {
  return Boolean(CHECKOUT_URL);
}
