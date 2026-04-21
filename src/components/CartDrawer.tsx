import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCart, type CartItem } from "../lib/CartContext";
import { useLocale } from "../i18n";
import { useFormatPrice } from "../lib/useCatalog";
import SpringNumber from "./motion/SpringNumber";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, count } = useCart();
  const { t } = useLocale();
  const formatPrice = useFormatPrice();

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const countLabel = count === 1 ? t("cart.itemsCount.one", { count }) : t("cart.itemsCount.other", { count });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={t("cart.title")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-bone text-ink shadow-xl flex flex-col"
          >
            <header className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <div>
                <p className="eyebrow text-muted">{t("cart.title")}</p>
                {items.length > 0 && (
                  <p className="text-xs tracking-wide text-muted mt-1">{countLabel}</p>
                )}
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label={t("cart.closeAria")}
                className="grid place-items-center h-9 w-9 rounded-full hover:bg-ink/5 transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            {items.length === 0 ? (
              <EmptyState onClose={closeCart} />
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto divide-y divide-ink/10">
                  {items.map((item) => (
                    <CartLine key={item.key} item={item} />
                  ))}
                </ul>
                <footer className="border-t border-ink/10 px-6 py-5 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm tracking-wider2 uppercase">{t("cart.subtotal")}</span>
                    <SpringNumber
                      value={subtotal}
                      format={formatPrice}
                      className="text-lg tabular-nums"
                    />
                  </div>
                  <p className="text-xs text-muted">{t("cart.shippingNote")}</p>
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-sm tracking-wider2 uppercase hover:bg-ink/90 transition"
                  >
                    {t("cart.checkout")}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="block text-center text-xs tracking-wider2 uppercase text-muted hover:text-ink transition"
                  >
                    {t("cart.viewBag")}
                  </Link>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  const { t } = useLocale();
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-16">
      <div className="h-14 w-14 rounded-full border border-ink/15 grid place-items-center mb-6 text-muted">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 8h14l-1.2 12.1a1.5 1.5 0 0 1-1.5 1.4H7.7a1.5 1.5 0 0 1-1.5-1.4L5 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
        </svg>
      </div>
      <h2 className="font-display text-3xl font-light mb-3">{t("cart.empty")}</h2>
      <p className="text-muted max-w-xs mb-8">{t("cart.emptyBody")}</p>
      <Link
        to="/shop"
        onClick={onClose}
        className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wider2 uppercase"
      >
        {t("cart.continueShopping")}
      </Link>
    </div>
  );
}

function CartLine({ item }: { item: CartItem }) {
  const { setQuantity, removeItem } = useCart();
  const { t } = useLocale();
  const formatPrice = useFormatPrice();
  const lineTotal = item.price * item.quantity;

  return (
    <li className="flex gap-4 px-6 py-5">
      <Link
        to={`/product/${item.productId}`}
        className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-bone-2"
      >
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${item.productId}`}
              className="block font-display text-base leading-snug truncate hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
            <p className="mt-1 text-xs tracking-wide text-muted">
              {t("cart.sizeLabel")}: <span className="text-ink">{item.size}</span>
            </p>
          </div>
          <SpringNumber
            value={lineTotal}
            format={formatPrice}
            className="text-sm tabular-nums"
          />
          <span className="sr-only">{t("cart.lineTotalAria")}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="inline-flex items-center border border-ink/15 rounded-full">
            <button
              type="button"
              onClick={() => setQuantity(item.key, item.quantity - 1)}
              aria-label={t("cart.decrease")}
              className="h-8 w-8 grid place-items-center text-muted hover:text-ink transition"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
            <motion.span
              key={item.quantity}
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[2rem] text-center text-xs tabular-nums"
            >
              {item.quantity}
            </motion.span>
            <button
              type="button"
              onClick={() => setQuantity(item.key, item.quantity + 1)}
              aria-label={t("cart.increase")}
              className="h-8 w-8 grid place-items-center text-muted hover:text-ink transition"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.key)}
            className="link-rule text-xs tracking-wide text-muted hover:text-ink"
          >
            {t("cart.remove")}
          </button>
        </div>
      </div>
    </li>
  );
}
