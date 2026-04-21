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

/**
 * Editorial / Journal band — matches ad-home.jsx → JournalBand.
 * Dark ink background, bone type, gold italic accent on the headline, and a
 * 3-column grid of blog cards with gold tags + date beneath each cover.
 */
export default function Editorial() {
  const entries = useBlogPosts().slice(0, 3);
  const { t, pick } = useLocale();
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section id="editorial" className="relative bg-ink text-bone py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="eyebrow text-bone/70 mb-5">
              {t("sections.editorialEyebrow")}
            </p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.1 }}
              className="font-display font-light text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]"
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
                  className="inline-block italic text-gold"
                >
                  {t("sections.editorialHeadline2")}
                </motion.span>
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-3 text-xs tracking-wider2 uppercase text-bone/80 hover:text-bone font-medium"
            >
              {t("sections.editorialAllEntries")}
              <span className="block h-px w-10 bg-bone/40 group-hover:w-16 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {entries.map((e, i) => {
            const tagKey = TAG_KEYS[e.slug];
            const tagLabel = tagKey ? t(tagKey) : pick({ en: "Editorial", pl: "Editorial" });
            return (
              <motion.article
                key={e.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.14, ease: EASE }}
              >
                <Link to={`/blog/${e.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-bone/5 mb-5">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] tracking-wider2 uppercase font-medium text-bone/65 mb-3">
                    <span className="text-gold">{tagLabel}</span>
                    <span aria-hidden>·</span>
                    <span>{formatDate(e.date)}</span>
                  </div>
                  <h3 className="font-display font-normal text-[1.875rem] leading-[1.1] tracking-[-0.01em] mb-3.5">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-bone/70 max-w-[28rem] mb-5">
                    {e.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-wider2 uppercase font-medium text-bone">
                    {t("sections.editorialReadAction")}
                    <span className="block h-px w-6 bg-bone/60 group-hover:w-10 transition-all duration-500" />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
