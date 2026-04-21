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
 * Journal / Blog index — matches ad-collection.jsx → JournalPage. One big
 * italic headline and a 3-column grid of cards. No feature post, no bone
 * chip on the image; the tag+date reads inline under the image with a
 * small gold accent on the tag, like a newsprint caption.
 */
export default function Blog() {
  const blogPosts = useBlogPosts();
  const { t, formatDate } = useLocale();

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
            {t("blog.eyebrow")}
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
                {t("sections.editorialHeadline1")}
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
                {t("sections.editorialHeadline2")}
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, i) => {
            const tagKey = TAG_KEYS[post.slug];
            const tagLabel = tagKey ? t(tagKey) : t("blog.eyebrow");
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-bone-2 mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] tracking-wider2 uppercase font-medium text-muted mb-3">
                    <span className="text-gold">{tagLabel}</span>
                    <span aria-hidden>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h2 className="font-display font-normal text-[1.75rem] md:text-[1.875rem] leading-[1.1] tracking-[-0.01em] mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
