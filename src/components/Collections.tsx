import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useCollections, useProductsByCollection } from "../lib/useCatalog";
import { useLocale } from "../i18n";

export default function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const { t } = useLocale();
  const collections = useCollections();

  return (
    <section id="collections" ref={ref} className="relative py-24 md:py-36 bg-ink text-bone overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 font-display italic text-[40vw] leading-none text-bone">
          AD
        </div>
      </motion.div>

      <div className="container-x relative">
        <div className="grid md:grid-cols-2 items-end gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-light leading-[1]"
          >
            {t("sections.collectionsHeadline1")} <br />
            <span className="italic text-gold">{t("sections.collectionsHeadline2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-bone/70 max-w-md text-base md:text-lg leading-relaxed"
          >
            {t("sections.collectionsBody")}
          </motion.p>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {collections.map((c, i) => (
            <CollectionRow key={c.slug} slug={c.slug} name={c.name} tagline={c.description} i={i} />
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-bone/70 hover:text-bone group"
          >
            {t("sections.collectionsExploreAll")}
            <span className="block h-px w-10 bg-bone/30 group-hover:w-16 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CollectionRow({
  slug,
  name,
  tagline,
  i,
}: {
  slug: string;
  name: string;
  tagline: string;
  i: number;
}) {
  const pieceCount = useProductsByCollection(slug).length;
  const { t, plural } = useLocale();
  const pieceLabel = t(`collections.pieceCount.${plural(pieceCount)}` as "collections.pieceCount.other", {
    count: pieceCount,
  });

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/collections/${slug}`}
        className="group relative grid grid-cols-12 items-center gap-6 py-8 md:py-10"
      >
        <span className="col-span-1 text-xs tracking-wider2 text-bone/50">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="col-span-8 md:col-span-6 font-display text-3xl md:text-6xl font-light transition-all duration-500 group-hover:translate-x-2">
          {name}
        </h3>
        <p className="hidden md:block col-span-3 text-sm text-bone/60 italic">
          {tagline}
        </p>
        <span className="col-span-3 md:col-span-2 justify-self-end text-xs tracking-wider2 text-bone/60">
          {pieceLabel}
        </span>

        <motion.span
          aria-hidden
          className="absolute left-0 right-0 -bottom-px h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-bone/60 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </Link>
    </motion.li>
  );
}
