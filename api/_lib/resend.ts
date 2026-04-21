/**
 * Resend client singleton + shared email templates.
 */

import { Resend } from "resend";
import { requiredEnv, optionalEnv } from "./env";

let cached: Resend | null = null;

export function getResend(): Resend {
  if (cached) return cached;
  cached = new Resend(requiredEnv("RESEND_API_KEY"));
  return cached;
}

export function getFromAddress(): string {
  return (
    optionalEnv("RESEND_FROM") ??
    "Absolut Dimension <onboarding@resend.dev>"
  );
}

/* ─── Email templates ─────────────────────────────────────────────────────── */

const BRAND_HEADER = `
  <div style="font-family: Georgia, 'Times New Roman', serif; text-align: center; padding: 32px 0 16px; letter-spacing: 0.2em; text-transform: uppercase; font-size: 12px; color: #111;">
    Absolut Dimension
  </div>`;

function wrap(bodyHtml: string, footerHtml = ""): string {
  return `<!doctype html>
<html><head><meta charset="utf-8" /><title>Absolut Dimension</title></head>
<body style="margin:0; background:#f7f3ec; color:#111; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif;">
  <div style="max-width: 560px; margin: 0 auto; background:#fbf8f2; border: 1px solid #eee7d9;">
    ${BRAND_HEADER}
    <div style="padding: 16px 40px 40px; line-height: 1.7; font-size: 15px;">
      ${bodyHtml}
    </div>
    ${footerHtml ? `<div style="padding: 24px 40px; border-top: 1px solid #eee7d9; font-size: 12px; color: #888; line-height: 1.6;">${footerHtml}</div>` : ""}
  </div>
</body></html>`;
}

export interface ConfirmSubscriptionParams {
  confirmUrl: string;
  locale: "pl" | "en";
}

export function confirmSubscriptionEmail({
  confirmUrl,
  locale,
}: ConfirmSubscriptionParams): { subject: string; html: string; text: string } {
  const copy =
    locale === "pl"
      ? {
          subject: "Potwierdź zapis do newslettera Absolut Dimension",
          h1: "Jeszcze jeden krok",
          lede:
            "Dziękujemy za zainteresowanie naszym atelier. Kliknij poniższy link, aby potwierdzić zapis do newslettera.",
          cta: "Potwierdź zapis",
          foot: "Jeśli to nie Ty zapisałeś się na naszą listę, po prostu zignoruj tę wiadomość.",
        }
      : {
          subject: "Confirm your Absolut Dimension newsletter signup",
          h1: "One more step",
          lede:
            "Thank you for your interest in our atelier. Click the link below to confirm your newsletter subscription.",
          cta: "Confirm subscription",
          foot: "If you did not sign up, you can safely ignore this email.",
        };

  const html = wrap(
    `
    <h2 style="font-family: Georgia, serif; font-weight: 400; font-size: 24px; margin: 0 0 16px;">${copy.h1}</h2>
    <p style="margin:0 0 24px; color:#3a3a3a;">${copy.lede}</p>
    <p style="text-align:center; margin: 32px 0;">
      <a href="${confirmUrl}" style="display:inline-block; background:#111; color:#fbf8f2; text-decoration:none; padding: 14px 28px; letter-spacing: 0.15em; text-transform: uppercase; font-size: 12px;">${copy.cta}</a>
    </p>
    <p style="font-size:12px; color:#888; word-break: break-all;">${confirmUrl}</p>
    `,
    copy.foot,
  );
  const text = `${copy.h1}\n\n${copy.lede}\n\n${confirmUrl}\n\n${copy.foot}`;
  return { subject: copy.subject, html, text };
}

export interface CampaignEmailParams {
  subject: string;
  body: string;
  unsubscribeUrl: string;
  locale: "pl" | "en";
}

export function campaignEmail({
  subject,
  body,
  unsubscribeUrl,
  locale,
}: CampaignEmailParams): { subject: string; html: string; text: string } {
  const unsubLabel =
    locale === "pl"
      ? "Nie chcesz już otrzymywać listów? Wypisz się."
      : "No longer wish to receive letters? Unsubscribe.";

  // Preserve line breaks in the body.
  const paragraphs = body
    .split(/\n{2,}/)
    .map(
      (p) =>
        `<p style="margin:0 0 20px; color:#1a1a1a;">${escapeHtml(p).replace(/\n/g, "<br />")}</p>`,
    )
    .join("");

  const html = wrap(
    paragraphs,
    `<a href="${unsubscribeUrl}" style="color:#888; text-decoration: underline;">${unsubLabel}</a>`,
  );
  const text = `${body}\n\n— ${unsubLabel}\n${unsubscribeUrl}`;
  return { subject, html, text };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
