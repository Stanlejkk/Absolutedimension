import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../lib/CartContext";
import { useLocale } from "../i18n";
import { useFormatPrice } from "../lib/useCatalog";

export default function Cart() {
  const { items, subtotal, count, setQuantity, removeItem } = useCart();
  const { t } = useLocale();
  const formatPrice = useFormatPrice();

  const countLabel = count === 1 ? t("cart.itemsCount.one", { count }) : t("cart.itemsCount.other", { count });

  if (items.length === 0) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x text-center max-w-lg mx-auto">
          <p className="eyebrow mb-4">{t("cart.title")}</p>
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
      <div className="container-x">
        <header className="mb-10 md:mb-14">
          <p className="eyebrow mb-3">{t("cart.title")}</p>
          <h1 className="font-display text-5xl md:text-6xl font-light">{countLabel}</h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ul className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item, i) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 py-6"
              >
                <Link
                  to={`/product/${item.productId}`}
                  className="relative h-32 w-24 md:h-40 md:w-32 flex-shrink-0 overflow-hidden bg-[#e8ddcb]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Link
                        to={`/product/${item.productId}`}
                        className="font-display text-xl md:text-2xl leading-tight hover:underline underline-offset-4"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-2 text-xs tracking-wide text-muted">
                        {t("cart.sizeLabel")}: <span className="text-ink">{item.size}</span>
                      </p>
                    </div>
                    <span className="text-lg tabular-nums whitespace-nowrap">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center border border-ink/15 rounded-full">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        aria-label={t("cart.decrease")}
                        className="h-9 w-9 grid place-items-center text-muted hover:text-ink transition"
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14" strokeLinecap="round" />
                        </svg>
                      </button>
                      <span className="min-w-[2.5rem] text-center text-sm tabular-nums">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        aria-label={t("cart.increase")}
                        className="h-9 w-9 grid place-items-center text-muted hover:text-ink transition"
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs tracking-wider2 uppercase text-muted hover:text-ink underline underline-offset-4"
                    >
                      {t("cart.remove")}
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="border border-ink/10 p-6 md:p-8 bg-bone">
              <p className="eyebrow mb-4">{t("checkout.summary")}</p>
              <div className="flex items-baseline justify-between py-3 border-t border-ink/10">
                <span className="text-sm tracking-wider2 uppercase">{t("cart.subtotal")}</span>
                <span className="text-lg tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted mt-2">{t("cart.shippingNote")}</p>
              <Link
                to="/checkout"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-sm tracking-wider2 uppercase hover:bg-ink/90 transition"
              >
                {t("cart.checkout")}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/shop"
                className="mt-3 block text-center text-xs tracking-wider2 uppercase text-muted hover:text-ink transition"
              >
                {t("cart.continueShopping")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
