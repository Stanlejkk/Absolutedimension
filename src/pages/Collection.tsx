import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  useCollection,
  useProductsByCollection,
} from "../lib/useCatalog";
import ProductCard from "../components/ProductCard";
import Grain from "../components/motion/Grain";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Collection detail — matches ad-collection.jsx → CollectionPage.
 * Full-bleed 80svh cover with a Ken-Burns image, tall italic name, and a
 * 3-column grid of pieces beneath a bordered section header. The page ends
 * on a quiet centered outro instead of a grid of "other" collections.
 */
export default function Collection() {
  const { slug } = useParams<{ slug: string }>();
  const collection = useCollection(slug);
  const pieces = useProductsByCollection(slug);
  const { t } = useLocale();

  if (!collection) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">{t("notFound.code")}</p>
          <h1 className="font-display text-5xl font-light mb-6">
            {t("collection.notFoundTitle")}
          </h1>
          <Link to="/collections" className="underline underline-offset-4">
            {t("collection.back")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article>
      {/* Cover */}
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden bg-ink text-bone">
        <motion.img
          src={collection.image}
          alt=""
          aria-hidden
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/15 to-ink/70" />
        <Grain opacity={0.2} />

        <div className="relative h-full flex items-end pb-16 md:pb-20">
          <div className="container-x">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="eyebrow text-bone/80 mb-5"
            >
              {t("nav.collections")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="font-display italic font-light text-[clamp(4rem,12vw,11rem)] leading-[0.92] tracking-[-0.025em]"
            >
              {collection.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-bone/85"
            >
              {collection.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pieces */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-baseline justify-between pb-5 mb-10 border-b border-ink/10">
            <span className="eyebrow">{t("collection.pieces")}</span>
            <span className="text-xs tracking-[0.1em] text-muted tabular-nums">
              ({String(pieces.length).padStart(2, "0")})
            </span>
          </div>

          {pieces.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {pieces.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted italic py-12">
              {t("collection.emptyState")}
            </p>
          )}

          <div className="mt-24 pt-14 border-t border-ink/10 text-center">
            <h3 className="font-display font-light text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em]">
              {t("collection.continueHeadline")}{" "}
              <span className="italic text-muted">
                {t("collection.continueItalic")}
              </span>
            </h3>
            <Link
              to="/collections"
              className="mt-6 inline-block text-xs tracking-wider2 uppercase font-medium text-ink border-b border-ink/60 pb-0.5 hover:border-ink transition-colors"
            >
              {t("collection.back")} →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
