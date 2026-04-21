import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  useProduct,
  useCollection,
  useProductsByCollection,
  useFormatPrice,
  useCategoryLabel,
} from "../lib/useCatalog";
import ProductCard from "../components/ProductCard";
import { useLocale } from "../i18n";
import { useCart } from "../lib/CartContext";
import { useProductTransition } from "../components/motion/ProductTransition";
import { useFlyToCart } from "../components/motion/FlyToCart";
import { useToast } from "../components/motion/Toast";
import SpringNumber from "../components/motion/SpringNumber";

/**
 * Product detail — matches ad-product.jsx → ProductPage. A 1.2fr/1fr split:
 * left is the gallery (80px sticky thumbnail rail + main image + stacked
 * secondary image), right is a sticky info column with eyebrow, name,
 * price, description, size buttons, full-width pill CTA, and 3 accordions.
 * Keeps the repo's FlyToCart / SpringNumber / toast wiring intact.
 */
export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = useProduct(id);
  const { t } = useLocale();
  const formatPrice = useFormatPrice();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const reduced = useReducedMotion();
  const { consume } = useProductTransition();
  const { fly } = useFlyToCart();
  const toast = useToast();

  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedSize("");
    setAdded(false);
    setActiveImg(0);
  }, [id]);

  useEffect(() => {
    if (!product || reduced) return;
    const raf = window.requestAnimationFrame(() => {
      const rect = imageWrapRef.current?.getBoundingClientRect() ?? null;
      consume(product.id, rect);
    });
    return () => window.cancelAnimationFrame(raf);
  }, [product, consume, reduced]);

  const collection = useCollection(product?.collection);
  const collectionProducts = useProductsByCollection(product?.collection);
  const categoryLabel = useCategoryLabel(product?.category ?? ("dresses" as never));

  if (!product) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">{t("notFound.code")}</p>
          <h1 className="font-display text-5xl font-light mb-6">
            {t("product.notFoundTitle")}
          </h1>
          <Link to="/shop" className="underline underline-offset-4">
            {t("product.backToShop")}
          </Link>
        </div>
      </section>
    );
  }

  const related = collectionProducts.filter((p) => p.id !== product.id).slice(0, 4);
  // Until products carry multiple photos, repeat the hero asset for the
  // thumbnail rail + stacked gallery. When data grows, swap `gallery` for
  // `product.images`.
  const gallery = [product.image, product.image, product.image];

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    const rect = imageWrapRef.current?.getBoundingClientRect();
    if (rect) fly({ from: rect, image: product.image });

    toast.push({
      kind: "success",
      title: t("cart.addedToast"),
      body: `${product.name} — ${selectedSize}`,
      image: product.image,
    });
  };

  return (
    <article className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="container-x">
        {/* Breadcrumb — all-caps dot-separated, editorial */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center gap-2 text-[11px] tracking-wider2 uppercase font-medium text-muted"
        >
          <Link to="/shop" className="hover:text-ink transition-colors">
            {t("nav.shop")}
          </Link>
          <span aria-hidden>·</span>
          {collection && (
            <>
              <Link
                to={`/collections/${collection.slug}`}
                className="hover:text-ink transition-colors"
              >
                {collection.name}
              </Link>
              <span aria-hidden>·</span>
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="grid lg:grid-cols-[80px_1fr] gap-5 items-start">
            {/* Thumbnail rail */}
            <div className="flex lg:flex-col gap-2.5 lg:sticky lg:top-32 overflow-x-auto lg:overflow-visible">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative w-20 aspect-[3/4] shrink-0 overflow-hidden bg-bone-2 transition-opacity duration-300 ${
                    activeImg === i ? "opacity-100" : "opacity-70 hover:opacity-90"
                  }`}
                  style={{
                    outline:
                      activeImg === i ? "1px solid #0d0d0d" : "1px solid transparent",
                    outlineOffset: 3,
                  }}
                >
                  <img
                    src={g}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Main + stacked secondary */}
            <div>
              <motion.div
                ref={imageWrapRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] overflow-hidden bg-bone-2"
              >
                <motion.img
                  key={activeImg}
                  src={gallery[activeImg]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                {product.newArrival && (
                  <span className="absolute top-5 left-5 bg-bone text-ink text-[10px] tracking-wider2 uppercase font-medium px-3 py-1.5 rounded-full">
                    {t("shop.badges.new")}
                  </span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 relative aspect-[3/4] overflow-hidden bg-bone-2"
              >
                <img
                  src={product.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <p className="eyebrow mb-4">
              {categoryLabel}
              {collection && (
                <>
                  {" "}· {t("product.sharedCollection", { collection: collection.name })}
                </>
              )}
            </p>
            <h1 className="font-display font-light text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[1] tracking-[-0.02em] mb-5">
              {product.name}
            </h1>
            <p className="tabular-nums text-[22px] font-normal tracking-[0.02em] mb-8">
              <SpringNumber value={product.price} format={formatPrice} />
            </p>
            <p className="text-[15px] leading-[1.75] text-muted mb-10 max-w-[30rem]">
              {product.description}
            </p>

            {/* Size */}
            <div className="mb-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="eyebrow">{t("product.size")}</span>
                {!selectedSize && (
                  <span className="text-[11px] tracking-[0.1em] uppercase text-muted font-medium">
                    {t("product.selectSize")}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => {
                  const isSelected = selectedSize === s;
                  return (
                    <motion.button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className={`min-w-14 h-[46px] px-4 text-[13px] font-medium tracking-[0.05em] transition-colors ${
                        isSelected
                          ? "bg-ink text-bone border border-ink"
                          : "bg-transparent text-ink border border-ink/20 hover:border-ink"
                      }`}
                    >
                      {s}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={handleAdd}
              disabled={!selectedSize}
              whileHover={selectedSize ? { scale: 1.01 } : undefined}
              whileTap={selectedSize ? { scale: 0.985 } : undefined}
              animate={added ? { scale: [1, 1.015, 1] } : { scale: 1 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className={`group relative w-full inline-flex items-center justify-center gap-2.5 px-7 py-[18px] rounded-full text-xs tracking-wider2 uppercase font-medium overflow-hidden transition-colors duration-300 ${
                !selectedSize
                  ? "bg-ink/40 text-bone cursor-not-allowed"
                  : added
                  ? "bg-gold text-ink"
                  : "bg-ink text-bone"
              }`}
            >
              {added ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t("product.added")}
                </>
              ) : (
                t("product.addToBag")
              )}
            </motion.button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title={t("product.materials")}>
                <p>{t("product.materialsBody")}</p>
                <p className="mt-2 text-[12px] tracking-[0.15em] uppercase text-muted font-medium">
                  {t("product.madeIn")}
                </p>
              </Accordion>
              <Accordion title={t("product.shippingTitle")}>
                <p>{t("product.shippingBody")}</p>
              </Accordion>
              <Accordion title={t("product.returnsTitle")}>
                <p>{t("product.returnsBody")}</p>
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-32 md:mt-40">
            <div className="flex items-baseline justify-between mb-12 gap-6 flex-wrap">
              <h2 className="font-display italic font-light text-[clamp(2rem,4vw,3rem)] leading-[0.98] tracking-[-0.02em]">
                {t("product.recommended")}
              </h2>
              {collection && (
                <Link
                  to={`/collections/${collection.slug}`}
                  className="inline-flex items-center gap-3 text-xs tracking-wider2 uppercase font-medium text-muted hover:text-ink transition-colors"
                >
                  {t("common.viewAll")}
                  <span className="block h-px w-8 bg-ink/30 transition-all" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ink/15">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-5 flex items-center justify-between text-xs tracking-[0.18em] uppercase font-medium text-ink"
      >
        <span>{title}</span>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-sm leading-[1.7] text-muted space-y-2">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
