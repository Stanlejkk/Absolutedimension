/**
 * GET /api/newsletter/unsubscribe?token=<uuid>
 *
 * One-click unsubscribe via the token embedded in every campaign email.
 */

export const config = { runtime: "edge" };

import { getSupabaseAdmin } from "../_lib/supabaseAdmin";
import { siteUrl } from "../_lib/env";

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const origin = siteUrl();

  if (!token) {
    return Response.redirect(`${origin}/newsletter/unsubscribed?status=invalid`, 302);
  }

  try {
    const supabase = getSupabaseAdmin();
    const upd = await supabase
      .from("newsletter_subscribers")
      .update({ status: "unsubscribed" })
      .eq("unsubscribe_token", token)
      .select("id")
      .maybeSingle();

    if (upd.error) throw upd.error;
    if (!upd.data) {
      return Response.redirect(`${origin}/newsletter/unsubscribed?status=invalid`, 302);
    }

    return Response.redirect(`${origin}/newsletter/unsubscribed?status=ok`, 302);
  } catch (err) {
    console.error("unsubscribe: unexpected", err);
    return Response.redirect(`${origin}/newsletter/unsubscribed?status=error`, 302);
  }
}
