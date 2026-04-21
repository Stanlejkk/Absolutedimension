import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCollections, useProducts } from "../lib/useCatalog";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Collections index page — matches ad-collection.jsx → CollectionsIndexPage.
 * A single editorial heading followed by a 3-column grid of image tiles;
 * each tile carries the collection name, piece count, and a tabular index
 * in the bottom-right corner over a dark-to-clear gradient.
 */
export default function CollectionsIndex() {
  const collections = useCollections();
  const products = useProducts();
  const { t, plural } = useLocale();

  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32">
      <div className="container-x">
        <div className="mb-16 md:mb-20 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow mb-5"
          >
            {t("collections.indexEyebrow")}
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.14 }}
            className="font-display font-light text-[clamp(3rem,8vw,7rem)] leading-[0.94] tracking-[-0.025em]"
          >
            <span className="inline-block overflow-hidden align-baseline">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 1, ease: EASE } },
                }}
                className="inline-block"
              >
                {t("collections.indexHeadline1")}
              </motion.span>
            </span>{" "}
            <span className="inline-block overflow-hidden align-baseline">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 1, ease: EASE } },
                }}
                className="inline-block italic text-muted"
              >
                {t("collections.indexHeadlineItalic")}
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, i) => {
            const count = products.filter((p) => p.collection === c.slug).length;
            const pieceLabel = t(
              `collections.pieceCount.${plural(count)}` as "collections.pieceCount.other",
              { count },
            );
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                className="group"
              >
                <Link
                  to={`/collections/${c.slug}`}
                  className="block relative text-bone"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-bone-2">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

                    <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-[-0.02em]">
                          {c.name}
                        </h2>
                        <p className="mt-1.5 text-[10px] tracking-wider2 uppercase font-medium opacity-90">
                          {pieceLabel}
                        </p>
                      </div>
                      <span className="eyebrow text-bone/90 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
