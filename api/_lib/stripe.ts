/**
 * Stripe client singleton. We use the fetch-based HTTP client so the same
 * module works in Edge runtime (required for webhook raw-body handling).
 */

import Stripe from "stripe";
import { requiredEnv } from "./env";

let cached: Stripe | null = null;

export function getStripe(): Stripe {
  if (cached) return cached;
  cached = new Stripe(requiredEnv("STRIPE_SECRET_KEY"), {
    httpClient: Stripe.createFetchHttpClient(),
  });
  return cached;
}
