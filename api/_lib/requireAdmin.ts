/**
 * Authorization helper. The client must send a Supabase access token as
 * `Authorization: Bearer <token>`. We ask Supabase to identify the user, then
 * look up their role in `public.profiles`. Only rows with role='admin' pass.
 */

import { getSupabaseAdmin, getSupabaseAnon } from "./supabaseAdmin";

export interface AdminContext {
  userId: string;
  email: string;
}

export async function requireAdmin(req: Request): Promise<AdminContext> {
  const header = req.headers.get("authorization") ?? req.headers.get("Authorization");
  if (!header || !header.toLowerCase().startsWith("bearer ")) {
    throw new AuthError(401, "missing-bearer");
  }
  const token = header.slice(7).trim();
  if (!token) throw new AuthError(401, "missing-bearer");

  const anon = getSupabaseAnon();
  const { data, error } = await anon.auth.getUser(token);
  if (error || !data.user) throw new AuthError(401, "invalid-token");

  const admin = getSupabaseAdmin();
  const profile = await admin
    .from("profiles")
    .select("role, email")
    .eq("id", data.user.id)
    .maybeSingle<{ role: "client" | "admin"; email: string }>();

  if (profile.error || !profile.data || profile.data.role !== "admin") {
    throw new AuthError(403, "not-admin");
  }

  return { userId: data.user.id, email: profile.data.email };
}

export class AuthError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
