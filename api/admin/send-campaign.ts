/**
 * POST /api/admin/send-campaign
 * Body: { campaignId: string }
 *
 * Admin-only. Loads a draft campaign, resolves confirmed subscribers by
 * locale, dispatches emails via Resend in small batches (respecting the
 * unsubscribe link), and records the final sent_to_count on the campaign.
 */

export const config = { runtime: "edge" };

import { getSupabaseAdmin } from "../_lib/supabaseAdmin";
import { requireAdmin, AuthError } from "../_lib/requireAdmin";
import { getResend, getFromAddress, campaignEmail } from "../_lib/resend";
import { siteUrl } from "../_lib/env";
import { json, badRequest, methodNotAllowed, readJson, serverError, unauthorized, forbidden } from "../_lib/json";

interface CampaignRow {
  id: string;
  subject_en: string;
  subject_pl: string;
  body_en: string;
  body_pl: string;
  status: "draft" | "sending" | "sent";
}

interface SubscriberRow {
  id: string;
  email: string;
  locale: "pl" | "en";
  unsubscribe_token: string;
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

  const payload = await readJson<{ campaignId?: string }>(req);
  const campaignId = payload?.campaignId;
  if (!campaignId) return badRequest("missing-campaignId");

  try {
    const supabase = getSupabaseAdmin();
    const camp = await supabase
      .from("newsletter_campaigns")
      .select("id, subject_en, subject_pl, body_en, body_pl, status")
      .eq("id", campaignId)
      .maybeSingle<CampaignRow>();

    if (camp.error || !camp.data) return badRequest("campaign-not-found");
    if (camp.data.status === "sent") return badRequest("already-sent");

    await supabase
      .from("newsletter_campaigns")
      .update({ status: "sending" })
      .eq("id", campaignId);

    const subs = await supabase
      .from("newsletter_subscribers")
      .select("id, email, locale, unsubscribe_token")
      .eq("status", "confirmed")
      .returns<SubscriberRow[]>();

    if (subs.error) throw subs.error;

    const origin = siteUrl();
    const resend = getResend();
    const from = getFromAddress();
    const list = subs.data ?? [];
    let sent = 0;

    // Small synchronous batches — keeps us well under Resend's rate limits and
    // avoids one failure taking down the whole send.
    const batchSize = 50;
    for (let i = 0; i < list.length; i += batchSize) {
      const batch = list.slice(i, i + batchSize);
      const payloads = batch.map((s) => {
        const locale: "pl" | "en" = s.locale === "en" ? "en" : "pl";
        const subject = locale === "en" ? camp.data!.subject_en : camp.data!.subject_pl;
        const body = locale === "en" ? camp.data!.body_en : camp.data!.body_pl;
        const tpl = campaignEmail({
          subject,
          body,
          unsubscribeUrl: `${origin}/api/newsletter/unsubscribe?token=${s.unsubscribe_token}`,
          locale,
        });
        return {
          from,
          to: s.email,
          subject: tpl.subject,
          html: tpl.html,
          text: tpl.text,
          headers: {
            "List-Unsubscribe": `<${origin}/api/newsletter/unsubscribe?token=${s.unsubscribe_token}>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        };
      });

      try {
        const res = await resend.batch.send(payloads);
        if (res.error) {
          console.error("send-campaign: batch", res.error);
        } else {
          sent += payloads.length;
        }
      } catch (err) {
        console.error("send-campaign: batch exception", err);
      }
    }

    await supabase
      .from("newsletter_campaigns")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
        sent_to_count: sent,
      })
      .eq("id", campaignId);

    return json({ ok: true, sent, total: list.length });
  } catch (err) {
    console.error("send-campaign: unexpected", err);
    return serverError("campaign-send-failed");
  }
}
