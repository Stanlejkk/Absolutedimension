import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../lib/useCatalog";
import { useT } from "../i18n";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  // Show the first 8 pieces flagged `featured` in the catalog.
  const featured = useFeaturedProducts().slice(0, 8);
  const t = useT();

  return (
    <section id="featured" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4">{t("sections.featuredEyebrow")}</p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1]">
              {t("sections.featuredTitle")}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-ink group"
            >
              {t("common.viewAll")}
              <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
