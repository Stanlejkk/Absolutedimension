/**
 * GET /api/newsletter/confirm?token=<uuid>
 *
 * Validates a confirmation token, flips the subscriber to 'confirmed', and
 * redirects to the public "subscription confirmed" page.
 */

export const config = { runtime: "edge" };

import { getSupabaseAdmin } from "../_lib/supabaseAdmin";
import { siteUrl } from "../_lib/env";

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const origin = siteUrl();

  if (!token) {
    return Response.redirect(`${origin}/newsletter/confirmed?status=invalid`, 302);
  }

  try {
    const supabase = getSupabaseAdmin();
    const found = await supabase
      .from("newsletter_subscribers")
      .select("id, status, locale")
      .eq("confirm_token", token)
      .maybeSingle<{ id: string; status: string; locale: string }>();

    if (!found.data) {
      return Response.redirect(`${origin}/newsletter/confirmed?status=invalid`, 302);
    }

    if (found.data.status === "confirmed") {
      return Response.redirect(`${origin}/newsletter/confirmed?status=ok`, 302);
    }

    const upd = await supabase
      .from("newsletter_subscribers")
      .update({
        status: "confirmed",
        confirmed_at: new Date().toISOString(),
        confirm_token: null,
      })
      .eq("id", found.data.id);
    if (upd.error) throw upd.error;

    return Response.redirect(`${origin}/newsletter/confirmed?status=ok`, 302);
  } catch (err) {
    console.error("confirm: unexpected", err);
    return Response.redirect(`${origin}/newsletter/confirmed?status=error`, 302);
  }
}
