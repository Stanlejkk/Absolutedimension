import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCollections, useProducts } from "../lib/useCatalog";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Home-page Collections band — editorial 3-column image grid on a warm bone
 * tint (matches the design prototype in ad-home.jsx → CollectionsBand). The
 * first card uses a taller 4:5 aspect as the visual anchor; siblings use 3:4
 * so the row reads as a magazine spread rather than a uniform card wall.
 */
export default function Collections() {
  const { t } = useLocale();
  const collections = useCollections().slice(0, 6);
  const products = useProducts();

  return (
    <section
      id="collections"
      className="relative bg-bone-2 text-ink py-24 md:py-36 overflow-hidden"
    >
      <div className="container-x">
        <div className="grid md:grid-cols-2 items-end gap-10 md:gap-12 mb-16 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="eyebrow mb-5"
            >
              {t("sections.collectionsEyebrow")}
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.14 }}
              className="font-display text-5xl md:text-7xl lg:text-[5rem] font-light leading-[0.95] tracking-[-0.02em]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: 0, transition: { duration: 1, ease: EASE } },
                  }}
                  className="inline-block"
                >
                  {t("sections.collectionsHeadline1")}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: 0, transition: { duration: 1, ease: EASE } },
                  }}
                  className="inline-block italic text-muted"
                >
                  {t("sections.collectionsHeadline2")}
                </motion.span>
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="text-muted max-w-md text-base leading-relaxed"
          >
            {t("sections.collectionsBody")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, i) => {
            const count = products.filter((p) => p.collection === c.slug).length;
            return (
              <CollectionCard
                key={c.slug}
                slug={c.slug}
                name={c.name}
                image={c.image}
                index={i}
                count={count}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 md:mt-16 flex justify-center"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 text-xs tracking-wider2 uppercase text-ink/80 hover:text-ink"
          >
            {t("sections.collectionsExploreAll")}
            <span className="block h-px w-10 bg-ink/40 group-hover:w-16 transition-all duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  slug,
  name,
  image,
  index,
  count,
}: {
  slug: string;
  name: string;
  image: string;
  index: number;
  count: number;
}) {
  const { t, plural } = useLocale();
  const pieceLabel = t(
    `collections.pieceCount.${plural(count)}` as "collections.pieceCount.other",
    { count },
  );
  // The first tile anchors the row with a taller 4:5 portrait; siblings
  // use 3:4 so the line reads like a magazine spread.
  const aspect = index === 0 ? "aspect-[4/5]" : "aspect-[3/4]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      className="group"
    >
      <Link to={`/collections/${slug}`} className="block relative text-bone">
        <div className={`relative overflow-hidden bg-bone ${aspect}`}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />

          <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-normal tracking-[-0.02em]">
                {name}
              </h3>
              <p className="mt-1.5 text-[10px] tracking-wider2 uppercase font-medium opacity-90">
                {pieceLabel}
              </p>
            </div>
            <span className="eyebrow text-bone/90 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
