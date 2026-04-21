import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../lib/CartContext";
import { useLocale } from "../i18n";
import { useFormatPrice } from "../lib/useCatalog";
import { initiateCheckout, isCheckoutConfigured } from "../lib/checkout";

type Status = "idle" | "preparing" | "pending" | "error";

export default function Checkout() {
  const { items, subtotal } = useCart();
  const { t, locale } = useLocale();
  const formatPrice = useFormatPrice();

  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  useEffect(() => {
    if (!isCheckoutConfigured()) setStatus("pending");
  }, []);

  const handlePay = async () => {
    if (items.length === 0) return;
    setStatus("preparing");
    setErrorKey(null);
    const result = await initiateCheckout(items, locale);
    if (result.status === "redirect") {
      window.location.assign(result.url);
      return;
    }
    if (result.status === "pending") {
      setStatus("pending");
      return;
    }
    setStatus("error");
    setErrorKey(result.message);
  };

  if (items.length === 0) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x text-center max-w-lg mx-auto">
          <p className="eyebrow mb-4">{t("checkout.title")}</p>
          <h1 className="font-display text-5xl md:text-6xl font-light">
            {t("checkout.emptyTitle")}
          </h1>
          <p className="mt-6 text-muted">{t("checkout.emptyBody")}</p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wider2 uppercase"
          >
            {t("checkout.browseShop")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="container-x max-w-3xl mx-auto">
        <header className="mb-10 md:mb-14">
          <p className="eyebrow mb-3">{t("checkout.title")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">{t("checkout.summary")}</h1>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-ink/10 divide-y divide-ink/10"
        >
          {items.map((item) => (
            <div key={item.key} className="flex items-center gap-4 p-5">
              <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden bg-bone-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-base truncate">{item.name}</p>
                <p className="mt-1 text-xs tracking-wide text-muted">
                  {t("cart.sizeLabel")}: <span className="text-ink">{item.size}</span>
                  <span className="mx-2">·</span>
                  {t("cart.quantityLabel")}: <span className="text-ink">{item.quantity}</span>
                </p>
              </div>
              <span className="text-sm tabular-nums whitespace-nowrap">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
          <div className="flex items-baseline justify-between p-5 bg-ink/[0.02]">
            <span className="text-sm tracking-wider2 uppercase">{t("checkout.total")}</span>
            <span className="text-xl tabular-nums">{formatPrice(subtotal)}</span>
          </div>
        </motion.div>

        <p className="mt-6 text-xs text-muted text-center">{t("cart.shippingNote")}</p>

        {status === "pending" ? (
          <div className="mt-10 border border-ink/10 bg-ink/[0.02] p-6 md:p-8 text-center">
            <p className="eyebrow text-muted mb-3">Stripe</p>
            <h2 className="font-display text-2xl md:text-3xl font-light mb-3">
              {t("checkout.comingSoon")}
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">{t("checkout.comingSoonBody")}</p>
          </div>
        ) : status === "error" ? (
          <div className="mt-10 border border-ink/20 p-6 md:p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-light mb-3">
              {t("checkout.errorTitle")}
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              {t("checkout.errorBody")}
              {errorKey ? <span className="block mt-2 text-muted/70 text-xs">[{errorKey}]</span> : null}
            </p>
            <button
              type="button"
              onClick={handlePay}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wider2 uppercase"
            >
              {t("checkout.payWithStripe")}
            </button>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              disabled={status === "preparing"}
              onClick={handlePay}
              className={`inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full px-10 py-4 text-sm tracking-wider2 uppercase transition-colors ${
                status === "preparing"
                  ? "bg-ink/30 text-bone cursor-wait"
                  : "bg-ink text-bone hover:bg-ink/90"
              }`}
            >
              {status === "preparing" ? t("checkout.preparing") : t("checkout.payWithStripe")}
              {status !== "preparing" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <Link
              to="/cart"
              className="text-xs tracking-wider2 uppercase text-muted hover:text-ink transition"
            >
              {t("checkout.backToBag")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
