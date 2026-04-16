import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCollections, useProductsByCollection } from "../lib/useCatalog";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const { t } = useLocale();
  const collections = useCollections();

  return (
    <section id="collections" ref={ref} className="relative py-24 md:py-36 bg-ink text-bone overflow-hidden">
      <motion.div style={{ y, rotate }} className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 font-display italic text-[40vw] leading-none text-bone">
          AD
        </div>
      </motion.div>

      <div className="container-x relative">
        <div className="grid md:grid-cols-2 items-end gap-10 mb-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.14 }}
            className="font-display text-5xl md:text-7xl font-light leading-[1]"
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
                className="inline-block italic text-gold"
              >
                {t("sections.collectionsHeadline2")}
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
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
  const products = useProductsByCollection(slug);
  const pieceCount = products.length;
  const preview = products[0]?.image;
  const { t, plural } = useLocale();
  const pieceLabel = t(`collections.pieceCount.${plural(pieceCount)}` as "collections.pieceCount.other", {
    count: pieceCount,
  });
  const reduced = useReducedMotion();

  const [hovered, setHovered] = useState(false);
  const rowRef = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 260, damping: 28, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const el = rowRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
    >
      <Link
        ref={rowRef}
        to={`/collections/${slug}`}
        data-cursor="Explore"
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative grid grid-cols-12 items-center gap-6 py-8 md:py-10"
      >
        <span className="col-span-1 text-xs tracking-wider2 text-bone/50 tabular-nums">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="col-span-8 md:col-span-6 font-display text-3xl md:text-6xl font-light transition-all duration-500 group-hover:translate-x-3">
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

        {/* Cursor-following preview — the signature collections-index move */}
        {preview && !reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute z-20 hidden md:block"
            style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
          >
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="h-48 w-36 overflow-hidden rounded-sm shadow-2xl shadow-ink/60"
                >
                  <img src={preview} alt="" className="h-full w-full object-cover" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </Link>
    </motion.li>
  );
}
