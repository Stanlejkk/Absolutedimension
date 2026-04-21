import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useFormatPrice, type ResolvedProduct } from "../lib/useCatalog";
import { useT } from "../i18n";
import TiltCard from "./motion/TiltCard";
import { useProductTransition } from "./motion/ProductTransition";

type Props = {
  product: ResolvedProduct;
  index?: number;
  /** Render with a denser layout (used on shop/collection grids) */
  dense?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProductCard({ product, index = 0, dense = false }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const formatPrice = useFormatPrice();
  const t = useT();
  const reduced = useReducedMotion();
  const { capture } = useProductTransition();
  const imgWrapRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    const el = imgWrapRef.current;
    if (!el || reduced) return;
    capture({
      productId: product.id,
      image: product.image,
      rect: el.getBoundingClientRect(),
    });
  };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: Math.min(index, 6) * 0.06, ease: EASE }}
      className="group"
    >
      <Link
        to={`/product/${product.id}`}
        onClick={handleLinkClick}
        className="block"
      >
        <TiltCard
          max={4}
          className="relative aspect-[3/4] overflow-hidden bg-bone-2 will-change-transform"
        >
          <div ref={imgWrapRef} className="absolute inset-0">
            {!imgFailed ? (
              <motion.img
                src={product.image}
                alt={product.name}
                onError={() => setImgFailed(true)}
                loading="lazy"
                initial={reduced ? undefined : { scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.4, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-muted/60 text-xs tracking-wider2 uppercase">
                {product.name}
              </div>
            )}
          </div>

          {/* Soft vignette that deepens on hover — adds weight to the tile */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {product.newArrival && (
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="absolute top-3 left-3 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1"
            >
              {t("shop.badges.new")}
            </motion.span>
          )}

          {product.stockQuantity === 0 && (
            <span className="absolute top-3 right-3 bg-ink text-bone text-[10px] tracking-wider2 uppercase px-2.5 py-1">
              {t("adminPanel.products.soldOut")}
            </span>
          )}

          <motion.div
            aria-hidden
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute inset-x-0 bottom-0 bg-ink/90 text-bone backdrop-blur-sm px-4 py-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="text-xs tracking-wider2 uppercase">{t("common.view")}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </TiltCard>

        <div className={`mt-4 flex items-start justify-between gap-4 ${dense ? "mt-3" : ""}`}>
          <div>
            <p className="eyebrow text-muted/80 capitalize">{product.collection.replace("-", " ")}</p>
            <h3
              className={`font-display mt-1 relative inline-block ${dense ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}
            >
              <span className="relative">
                {product.name}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-ink/40 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </span>
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-1 shrink-0 tabular-nums">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
