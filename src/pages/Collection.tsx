import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  useCollection,
  useCollections,
  useProducts,
  useProductsByCollection,
} from "../lib/useCatalog";
import ProductCard from "../components/ProductCard";
import { useLocale } from "../i18n";

export default function Collection() {
  const { slug } = useParams<{ slug: string }>();
  const collection = useCollection(slug);
  const allCollections = useCollections();
  const pieces = useProductsByCollection(slug);
  const allProducts = useProducts();
  const { t, plural } = useLocale();

  if (!collection) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">{t("notFound.code")}</p>
          <h1 className="font-display text-5xl font-light mb-6">{t("collection.notFoundTitle")}</h1>
          <Link to="/collections" className="underline underline-offset-4">
            {t("collection.back")}
          </Link>
        </div>
      </section>
    );
  }

  const others = allCollections.filter((c) => c.slug !== collection.slug).slice(0, 3);

  const pieceLabel = t(
    `collections.pieceCount.${plural(pieces.length)}` as "collections.pieceCount.other",
    { count: pieces.length },
  );

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-36">
      {/* Masthead */}
      <div className="relative h-[60svh] md:h-[70svh] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-10 md:pb-16 text-bone">
            <nav className="flex flex-wrap gap-2 text-xs tracking-wide text-bone/70 mb-4">
              <Link to="/" className="hover:text-bone">{t("product.breadcrumbHome")}</Link>
              <span>/</span>
              <Link to="/collections" className="hover:text-bone">{t("nav.collections")}</Link>
              <span>/</span>
              <span className="text-bone">{collection.name}</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow text-bone/70 mb-3">{t("collection.singular")}</p>
              <h1 className="font-display text-6xl md:text-8xl font-light leading-none">
                {collection.name}
              </h1>
              <p className="mt-6 max-w-lg text-bone/80 leading-relaxed">
                {collection.description}
              </p>
              <p className="mt-4 text-xs tracking-wider2 uppercase text-bone/60">
                {pieceLabel}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container-x mt-16 md:mt-20">
        {pieces.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
            {pieces.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} dense />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted italic py-12">
            {t("collection.emptyState")}
          </p>
        )}
      </div>

      {/* Other collections */}
      <div className="container-x mt-24 md:mt-32 pt-12 border-t border-ink/10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <h2 className="font-display text-3xl md:text-5xl font-light">
            {t("collection.continueHeadline")} <span className="italic">{t("collection.continueItalic")}</span>
          </h2>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink group"
          >
            {t("collection.back")}
            <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {others.map((c) => {
            const cPieceCount = allProducts.filter((p) => p.collection === c.slug).length;
            const cPieceLabel = t(
              `collections.pieceCount.${plural(cPieceCount)}` as "collections.pieceCount.other",
              { count: cPieceCount },
            );
            return (
              <Link
                key={c.slug}
                to={`/collections/${c.slug}`}
                className="group block relative aspect-[4/3] overflow-hidden bg-[#e8ddcb]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                  <h3 className="font-display text-2xl md:text-3xl">{c.name}</h3>
                  <p className="text-xs tracking-wider2 uppercase text-bone/70 mt-1">
                    {cPieceLabel} →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
