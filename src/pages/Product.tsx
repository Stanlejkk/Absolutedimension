import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useProduct,
  useCollection,
  useProductsByCollection,
  useFormatPrice,
} from "../lib/useCatalog";
import ProductCard from "../components/ProductCard";
import { useLocale } from "../i18n";
import { useCart } from "../lib/CartContext";
import { useProductTransition } from "../components/motion/ProductTransition";
import { useFlyToCart } from "../components/motion/FlyToCart";
import { useToast } from "../components/motion/Toast";
import SpringNumber from "../components/motion/SpringNumber";
import Grain from "../components/motion/Grain";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = useProduct(id);
  const { t } = useLocale();
  const formatPrice = useFormatPrice();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const reduced = useReducedMotion();
  const { consume } = useProductTransition();
  const { fly } = useFlyToCart();
  const toast = useToast();

  const imageWrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });
  const heroScale = useTransform(smooth, [0, 1], [1, 1.22]);
  const heroY = useTransform(smooth, [0, 1], ["0%", "-6%"]);
  const heroX = useTransform(smooth, [0, 1], ["0%", "4%"]);
  const caption1 = useTransform(smooth, [0, 0.33, 0.5], [1, 1, 0]);
  const caption2 = useTransform(smooth, [0.25, 0.5, 0.75], [0, 1, 0]);
  const caption3 = useTransform(smooth, [0.5, 0.72, 1], [0, 1, 1]);

  // Consume a pending card→page shared-element animation once the image
  // has a real on-screen rect to land on. We use a rAF to avoid measuring
  // before layout stabilises.
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

  if (!product) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">{t("notFound.code")}</p>
          <h1 className="font-display text-5xl font-light mb-6">{t("product.notFoundTitle")}</h1>
          <Link to="/shop" className="underline underline-offset-4">
            {t("product.backToShop")}
          </Link>
        </div>
      </section>
    );
  }

  const related = collectionProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    if (!selectedSize || !product) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);

    const rect = imageWrapRef.current?.getBoundingClientRect();
    if (rect) {
      fly({ from: rect, image: product.image });
    }
    toast.push({
      kind: "success",
      title: t("cart.addedToast"),
      body: `${product.name} — ${selectedSize}`,
      image: product.image,
    });
  };

  return (
    <article className="pb-24 md:pb-32">
      <div className="container-x pt-28 md:pt-32">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 text-xs tracking-wide text-muted mb-8">
          <Link to="/" className="link-rule hover:text-ink">{t("product.breadcrumbHome")}</Link>
          <span>/</span>
          <Link to="/shop" className="link-rule hover:text-ink">{t("nav.shop")}</Link>
          <span>/</span>
          {collection && (
            <>
              <Link to={`/collections/${collection.slug}`} className="link-rule hover:text-ink">
                {collection.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image column — a tall scroll-pinned canvas that scrubs
              through three "chapters" as the shopper reads the details. */}
          <div ref={galleryRef} className="lg:col-span-7 lg:h-[220vh] relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-24"
            >
              <div
                ref={imageWrapRef}
                className="relative aspect-[3/4] overflow-hidden bg-[#e8ddcb]"
              >
                {!imgFailed ? (
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    onError={() => setImgFailed(true)}
                    style={reduced ? undefined : { scale: heroScale, y: heroY, x: heroX }}
                    className="absolute inset-0 h-full w-full object-cover object-top will-change-transform"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-muted italic">
                    {product.name}
                  </div>
                )}

                <Grain opacity={0.14} />

                {product.newArrival && (
                  <span className="absolute top-4 left-4 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                    {t("shop.badges.new")}
                  </span>
                )}

                {/* Scroll-linked chapter captions — sweep across the image */}
                {!reduced && (
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 hidden md:flex items-end justify-between text-bone">
                    <motion.div style={{ opacity: caption1 }} className="max-w-[14rem]">
                      <p className="eyebrow text-bone/70">01 — {t("product.details")}</p>
                      <p className="font-display text-lg leading-snug mt-2">
                        {product.name}
                      </p>
                    </motion.div>
                    <motion.div
                      style={{ opacity: caption2 }}
                      className="max-w-[14rem] text-right"
                    >
                      <p className="eyebrow text-bone/70">
                        02 — {t("product.materials")}
                      </p>
                      <p className="font-display italic text-lg leading-snug mt-2">
                        {t("product.madeIn")}
                      </p>
                    </motion.div>
                    <motion.div
                      style={{ opacity: caption3 }}
                      className="absolute inset-x-0 -bottom-1 text-center"
                    >
                      <p className="eyebrow text-bone/70">
                        03 — {collection?.name ?? t("product.collectionSuffix")}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Progress rail for the chapter scroll */}
                {!reduced && (
                  <div className="pointer-events-none absolute top-0 right-0 h-full w-0.5 bg-bone/10">
                    <motion.div
                      style={{ scaleY: smooth }}
                      className="h-full w-full origin-top bg-bone/80"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col lg:sticky lg:top-28 self-start"
          >
            {collection && (
              <Link
                to={`/collections/${collection.slug}`}
                className="link-rule eyebrow text-muted hover:text-ink mb-3 self-start"
              >
                {collection.name} {t("product.collectionSuffix")}
              </Link>
            )}
            <h1 className="font-display text-4xl md:text-5xl font-light leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-4 text-xl tracking-wide text-ink tabular-nums">
              <SpringNumber value={product.price} format={formatPrice} />
            </p>
            <p className="mt-6 text-muted leading-relaxed">{product.description}</p>

            {/* Sizes */}
            <div className="mt-10">
              <p className="eyebrow mb-3">{t("product.size")}</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                    className={`min-w-[3rem] px-4 py-2 text-xs tracking-wider2 uppercase border transition-colors ${
                      selectedSize === size
                        ? "border-ink bg-ink text-bone"
                        : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <motion.button
                onClick={handleAdd}
                disabled={!selectedSize}
                whileHover={selectedSize ? { scale: 1.01 } : undefined}
                whileTap={selectedSize ? { scale: 0.985 } : undefined}
                animate={added ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm tracking-wider2 uppercase overflow-hidden transition-colors ${
                  !selectedSize
                    ? "bg-ink/20 text-ink/40 cursor-not-allowed"
                    : added
                    ? "bg-gold text-ink"
                    : "bg-ink text-bone"
                }`}
              >
                <span className="relative z-10">
                  {!selectedSize ? t("product.selectSize") : added ? t("product.added") : t("product.addToBag")}
                </span>
                {selectedSize && !added && (
                  <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {added && (
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    viewBox="0 0 24 24"
                    className="relative z-10 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      d="M5 12l5 5L20 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </motion.button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition">
                {t("product.saveForLater")}
              </button>
            </div>

            {/* Accordion details */}
            <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              <Section title={t("product.details")}>{product.description}</Section>
              <Section title={t("product.materials")}>
                {t("product.materialsBody")}
              </Section>
              <Section title={t("product.shippingTitle")}>
                {t("product.shippingBody")}
              </Section>
              <Section title={t("product.returnsTitle")}>
                {t("product.returnsBody")}
              </Section>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="flex items-end justify-between mb-10 gap-6">
              <h2 className="font-display text-3xl md:text-5xl font-light">
                {t("product.fromSameCollection")}{" "}
                <span className="italic">{t("product.fromSameCollectionItalic")}</span>
              </h2>
              {collection && (
                <Link
                  to={`/collections/${collection.slug}`}
                  className="hidden sm:inline-flex items-center gap-2 text-sm text-muted hover:text-ink group"
                >
                  {t("product.viewCollection", { collection: collection.name })}
                  <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} dense />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-wider2 uppercase"
        aria-expanded={open}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex h-4 w-4 items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-muted leading-relaxed">{children}</p>
      </motion.div>
    </div>
  );
}
