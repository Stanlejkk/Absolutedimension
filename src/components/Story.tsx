import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import Grain from "./motion/Grain";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Story band — matches ad-home.jsx → StoryBand. A 2-column editorial spread:
 * portrait photograph on the left, headline + two paragraphs + a 4-column
 * stats rail on the right. The italic middle segment of the headline is
 * intentionally muted (not gold) so the whole band feels like newsprint.
 */
export default function Story() {
  const { t } = useLocale();
  const stats = [
    { k: t("sections.storyStat1Value"), v: t("sections.storyStat1Label") },
    { k: t("sections.storyStat2Value"), v: t("sections.storyStat2Label") },
    { k: t("sections.storyStat3Value"), v: t("sections.storyStat3Label") },
    { k: t("sections.storyStat4Value"), v: t("sections.storyStat4Label") },
  ];

  return (
    <section id="story" className="relative py-24 md:py-40">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden bg-bone-2"
          >
            <img
              src="/img/hero/hero-2.jpg"
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Grain opacity={0.2} />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="eyebrow mb-6"
            >
              {t("sections.storyEyebrow")}
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
              className="font-display font-light text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]"
            >
              {[
                { text: t("sections.storyHeadline1"), italic: false },
                { text: t("sections.storyHeadlineItalic"), italic: true },
                { text: t("sections.storyHeadline2"), italic: false },
              ].map((segment, i, arr) => (
                <span key={i} className="inline-block overflow-hidden align-baseline">
                  <motion.span
                    variants={{
                      hidden: { y: "110%", opacity: 0 },
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.9, ease: EASE },
                      },
                    }}
                    className={`inline-block ${segment.italic ? "italic text-muted" : ""}`}
                  >
                    {segment.text}
                  </motion.span>
                  {i < arr.length - 1 ? "\u00A0" : null}
                </span>
              ))}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="mt-10 max-w-lg space-y-5 text-[15px] md:text-base leading-relaxed text-muted"
            >
              <p>{t("sections.storyLead")}</p>
              <p>{t("sections.storyPara2")}</p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
              }}
              className="mt-14 pt-8 border-t border-ink/10 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <motion.li
                  key={s.k}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <p className="font-display font-light text-[2.75rem] md:text-[2.75rem] leading-none tracking-[-0.02em] tabular-nums">
                    {s.k}
                  </p>
                  <p className="mt-2 eyebrow">{s.v}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
