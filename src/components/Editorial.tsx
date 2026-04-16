import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useBlogPosts } from "../lib/useCatalog";
import { useLocale } from "../i18n";
import type { DictionaryKey } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

const TAG_KEYS: Record<string, DictionaryKey> = {
  "sztuka-ubioru": "sections.editorialTagEditorial",
  "monaco-collection-story": "sections.editorialTagLookbook",
  "sustainable-luxury": "sections.editorialTagHouse",
  "evening-styling-guide": "sections.editorialTagStyling",
};

const HUES: Record<string, string> = {
  "sztuka-ubioru": "#e9dfcf",
  "monaco-collection-story": "#c8b496",
  "sustainable-luxury": "#4c4237",
  "evening-styling-guide": "#d9c9b2",
};

export default function Editorial() {
  const entries = useBlogPosts().slice(0, 3);
  const { t } = useLocale();

  return (
    <section id="editorial" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="eyebrow mb-4">{t("sections.editorialEyebrow")}</p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.09 }}
              className="font-display text-5xl md:text-7xl font-light leading-[1]"
            >
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: 0, transition: { duration: 0.95, ease: EASE } },
                  }}
                  className="inline-block"
                >
                  {t("sections.editorialHeadline1")}
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: 0, transition: { duration: 0.95, ease: EASE } },
                  }}
                  className="inline-block italic"
                >
                  {t("sections.editorialHeadline2")}
                </motion.span>
              </span>
            </motion.h2>
          </motion.div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-ink"
          >
            {t("sections.editorialAllEntries")}
            <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {entries.map((e, i) => {
            const tagKey = TAG_KEYS[e.slug];
            return (
              <motion.div
                key={e.slug}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              >
                <Link to={`/blog/${e.slug}`} className="group block">
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{ backgroundColor: HUES[e.slug] ?? "#e9dfcf" }}
                  >
                    {/* Clip-path reveal — image unveils from top to bottom */}
                    <motion.img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      initial={{ clipPath: "inset(100% 0 0 0)" }}
                      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.2, delay: i * 0.12 + 0.1, ease: EASE }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                        {tagKey ? t(tagKey) : t("sections.editorialEyebrow")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-2xl md:text-3xl font-light">
                      <span className="relative inline-block">
                        <span className="relative">{e.title}</span>
                        <span
                          aria-hidden
                          className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-ink/40 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{e.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider2 uppercase">
                      {t("sections.editorialReadAction")}
                      <span className="block h-px w-6 bg-ink/50 group-hover:w-10 transition-all" />
                    </span>
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
