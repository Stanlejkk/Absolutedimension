/**
 * POST /api/newsletter/subscribe
 *
 * Public double-opt-in endpoint. Inserts (or re-activates) a row in
 * newsletter_subscribers with status='pending' and a fresh confirm_token,
 * then emails the confirmation link via Resend.
 */

export const config = { runtime: "edge" };

import { getSupabaseAdmin } from "../_lib/supabaseAdmin";
import { getResend, getFromAddress, confirmSubscriptionEmail } from "../_lib/resend";
import { siteUrl } from "../_lib/env";
import { json, badRequest, methodNotAllowed, readJson, serverError } from "../_lib/json";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return methodNotAllowed("POST");

  const payload = await readJson<{ email?: string; locale?: string }>(req);
  if (!payload) return badRequest("invalid-json");
  const email = (payload.email ?? "").trim().toLowerCase();
  const locale: "pl" | "en" = payload.locale === "en" ? "en" : "pl";

  if (!EMAIL_RE.test(email)) return badRequest("invalid-email");

  try {
    const supabase = getSupabaseAdmin();
    const confirmToken = cryptoUuid();

    // Upsert by email. If the row exists and is already confirmed, short-circuit
    // with a friendly response rather than resending.
    const existing = await supabase
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("email", email)
      .maybeSingle<{ id: string; status: "pending" | "confirmed" | "unsubscribed" }>();

    if (existing.data?.status === "confirmed") {
      return json({ ok: true, alreadyConfirmed: true });
    }

    if (existing.data) {
      const upd = await supabase
        .from("newsletter_subscribers")
        .update({ status: "pending", confirm_token: confirmToken, locale })
        .eq("id", existing.data.id);
      if (upd.error) throw upd.error;
    } else {
      const ins = await supabase
        .from("newsletter_subscribers")
        .insert({ email, locale, status: "pending", confirm_token: confirmToken });
      if (ins.error) throw ins.error;
    }

    const confirmUrl = `${siteUrl()}/api/newsletter/confirm?token=${confirmToken}`;
    const { subject, html, text } = confirmSubscriptionEmail({ confirmUrl, locale });

    const resend = getResend();
    const sent = await resend.emails.send({
      from: getFromAddress(),
      to: email,
      subject,
      html,
      text,
    });

    if (sent.error) {
      console.error("subscribe: resend", sent.error);
      // The row is saved; user can request a resend. Still report ok to caller
      // so they don't know whether the email is valid (avoid enumeration).
      return json({ ok: true, emailQueued: false });
    }

    return json({ ok: true, emailQueued: true });
  } catch (err) {
    console.error("subscribe: unexpected", err);
    return serverError("subscribe-failed");
  }
}

function cryptoUuid(): string {
  return crypto.randomUUID();
}
