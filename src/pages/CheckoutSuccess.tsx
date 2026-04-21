import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useCart } from "../lib/CartContext";

/**
 * Customer lands here after Stripe Checkout succeeds. The webhook is what
 * actually persists the order, so this page is purely a "thank you" surface —
 * we clear the local cart and link onwards.
 */
export default function CheckoutSuccess() {
  const { t } = useLocale();
  const { clear } = useCart();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
      <div className="container-x text-center max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          {t("checkoutSuccess.eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl font-light"
        >
          {t("checkoutSuccess.title")}
        </motion.h1>
        <p className="mt-6 text-muted">{t("checkoutSuccess.body")}</p>
        {sessionId ? (
          <p className="mt-6 text-xs tracking-wider2 uppercase text-muted">
            {t("checkoutSuccess.orderNumber")} · <span className="text-ink">{sessionId.slice(-10)}</span>
          </p>
        ) : null}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/account/orders"
            className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
          >
            {t("checkoutSuccess.viewOrders")}
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-3 text-sm tracking-wider2 uppercase hover:bg-ink/[0.03] transition"
          >
            {t("checkoutSuccess.continueShopping")}
          </Link>
        </div>
      </div>
    </section>
  );
}
