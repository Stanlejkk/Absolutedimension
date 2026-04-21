/**
 * Thin wrapper for authenticated calls to /api/*. Injects the Supabase access
 * token as a Bearer so server-side `requireAdmin()` can verify the caller.
 */

import { supabase } from "./supabase";

export interface ApiError {
  status: number;
  message: string;
}

async function authHeaders(): Promise<Record<string, string>> {
  if (!supabase) return {};
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiPost<T = unknown>(
  path: string,
  body: unknown,
): Promise<{ ok: true; data: T } | { ok: false; error: ApiError }> {
  try {
    const headers = {
      "content-type": "application/json",
      ...(await authHeaders()),
    };
    const res = await fetch(path, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string };
    if (!res.ok) {
      return {
        ok: false,
        error: { status: res.status, message: data.error ?? `http_${res.status}` },
      };
    }
    return { ok: true, data };
  } catch (err) {
    return {
      ok: false,
      error: {
        status: 0,
        message: err instanceof Error ? err.message : "network",
      },
    };
  }
}
