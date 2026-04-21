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

export interface OrderReceiptItem {
  name: string;
  size: string;
  quantity: number;
  unit_amount: number;
}

export interface OrderReceiptShipping {
  name?: string | null;
  phone?: string | null;
  address?: {
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    postal_code?: string | null;
    state?: string | null;
    country?: string | null;
  } | null;
}

export interface OrderReceiptParams {
  orderId: string;
  locale: "pl" | "en";
  items: OrderReceiptItem[];
  amount: number;
  currency: string;
  shipping: OrderReceiptShipping | null;
}

export function orderReceiptEmail({
  orderId,
  locale,
  items,
  amount,
  currency,
  shipping,
}: OrderReceiptParams): { subject: string; html: string; text: string } {
  const copy =
    locale === "pl"
      ? {
          subject: `Zamówienie #${short(orderId)} — dziękujemy`,
          h1: "Dziękujemy za zamówienie",
          lede:
            "Otrzymaliśmy Twoją płatność. Poniżej znajdziesz podsumowanie zamówienia. Wyślemy osobny e-mail z numerem śledzenia, gdy paczka wyjdzie z atelier.",
          orderLabel: "Numer zamówienia",
          itemsHeader: "Zamówienie",
          totalLabel: "Suma",
          shippingLabel: "Wysyłka",
          foot: "Masz pytania? Odpisz na tę wiadomość.",
        }
      : {
          subject: `Order #${short(orderId)} — thank you`,
          h1: "Thank you for your order",
          lede:
            "We have received your payment. Your order summary is below. We will send a separate email with tracking once it leaves the atelier.",
          orderLabel: "Order number",
          itemsHeader: "Order",
          totalLabel: "Total",
          shippingLabel: "Shipping to",
          foot: "Questions? Just reply to this email.",
        };

  const itemsRows = items
    .map(
      (it) => `
      <tr>
        <td style="padding:10px 0; border-bottom:1px solid #eee7d9; color:#1a1a1a;">
          ${escapeHtml(it.name)}${it.size ? ` <span style="color:#888;">— ${escapeHtml(it.size)}</span>` : ""}
          <div style="color:#888; font-size:12px; margin-top:2px;">× ${it.quantity}</div>
        </td>
        <td style="padding:10px 0; border-bottom:1px solid #eee7d9; text-align:right; color:#1a1a1a; white-space:nowrap;">
          ${formatAmount(it.unit_amount * it.quantity, currency)}
        </td>
      </tr>`,
    )
    .join("");

  const shippingBlock = renderShipping(shipping, copy.shippingLabel);

  const html = wrap(
    `
    <h2 style="font-family: Georgia, serif; font-weight: 400; font-size: 24px; margin: 0 0 16px;">${copy.h1}</h2>
    <p style="margin:0 0 24px; color:#3a3a3a;">${copy.lede}</p>
    <p style="margin:0 0 16px; font-size:12px; letter-spacing:0.15em; text-transform:uppercase; color:#888;">
      ${copy.orderLabel}: <span style="color:#111;">#${escapeHtml(short(orderId))}</span>
    </p>
    <h3 style="font-family: Georgia, serif; font-weight: 400; font-size: 16px; margin: 24px 0 8px; letter-spacing:0.1em; text-transform:uppercase; color:#111;">${copy.itemsHeader}</h3>
    <table style="width:100%; border-collapse:collapse; font-size:14px;">
      <tbody>${itemsRows}</tbody>
      <tfoot>
        <tr>
          <td style="padding:14px 0 0; color:#111; font-weight:600;">${copy.totalLabel}</td>
          <td style="padding:14px 0 0; text-align:right; color:#111; font-weight:600;">${formatAmount(amount, currency)}</td>
        </tr>
      </tfoot>
    </table>
    ${shippingBlock}
    `,
    copy.foot,
  );

  const textLines = [
    copy.h1,
    "",
    copy.lede,
    "",
    `${copy.orderLabel}: #${short(orderId)}`,
    "",
    copy.itemsHeader + ":",
    ...items.map(
      (it) =>
        `  • ${it.name}${it.size ? ` — ${it.size}` : ""} × ${it.quantity}   ${formatAmount(it.unit_amount * it.quantity, currency)}`,
    ),
    "",
    `${copy.totalLabel}: ${formatAmount(amount, currency)}`,
  ];
  if (shipping?.address) {
    textLines.push("", `${copy.shippingLabel}:`, shippingTextLines(shipping).join("\n"));
  }
  textLines.push("", copy.foot);

  return { subject: copy.subject, html, text: textLines.join("\n") };
}

function short(id: string): string {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase();
}

function formatAmount(amountInMinor: number, currency: string): string {
  const cur = (currency || "pln").toUpperCase();
  const major = amountInMinor / 100;
  try {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: cur,
      minimumFractionDigits: 2,
    }).format(major);
  } catch {
    return `${major.toFixed(2)} ${cur}`;
  }
}

function renderShipping(shipping: OrderReceiptShipping | null, label: string): string {
  if (!shipping?.address) return "";
  const lines = shippingTextLines(shipping).map((l) => escapeHtml(l)).join("<br />");
  if (!lines) return "";
  return `
    <h3 style="font-family: Georgia, serif; font-weight: 400; font-size: 16px; margin: 28px 0 8px; letter-spacing:0.1em; text-transform:uppercase; color:#111;">${label}</h3>
    <p style="margin:0; color:#3a3a3a; font-size:14px; line-height:1.6;">${lines}</p>
  `;
}

function shippingTextLines(shipping: OrderReceiptShipping): string[] {
  const a = shipping.address ?? {};
  const lines: string[] = [];
  if (shipping.name) lines.push(shipping.name);
  if (a.line1) lines.push(a.line1);
  if (a.line2) lines.push(a.line2);
  const cityLine = [a.postal_code, a.city].filter(Boolean).join(" ");
  if (cityLine) lines.push(cityLine);
  if (a.state) lines.push(a.state);
  if (a.country) lines.push(a.country);
  if (shipping.phone) lines.push(shipping.phone);
  return lines.filter((l): l is string => Boolean(l));
}
