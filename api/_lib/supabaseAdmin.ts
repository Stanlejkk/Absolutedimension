/**
 * Service-role Supabase singleton for server-only code. Never import this
 * from /src — it holds a key that bypasses row-level security.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { requiredEnv, optionalEnv } from "./env";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;
  const url = optionalEnv("SUPABASE_URL") ?? requiredEnv("VITE_SUPABASE_URL");
  const serviceRole = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  cached = createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

/** Anon client used to verify a user's access token (no elevated privileges). */
export function getSupabaseAnon(): SupabaseClient {
  const url = optionalEnv("SUPABASE_URL") ?? requiredEnv("VITE_SUPABASE_URL");
  const anon = optionalEnv("VITE_SUPABASE_ANON_KEY") ?? requiredEnv("SUPABASE_ANON_KEY");
  return createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
