import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "../i18n";

/**
 * Infinite marquee — matches ad-home.jsx → InfiniteMarquee. A single italic
 * editorial phrase scrolls horizontally on the bone body, separated by small
 * gold dots. Quiet and on-brand; no bordeaux block, no competing phrases.
 */
export default function Marquee() {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const headline = t("marquee.headline");
  const eyebrow = t("marquee.eyebrow");
  // Repeat enough times that the -50% translate always covers the viewport.
  const repeats = 6;

  return (
    <section
      aria-label={headline}
      className="relative bg-bone text-ink border-b border-ink/10 pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden"
    >
      <div className="container-x mb-7">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
      </div>

      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          aria-hidden
          className="flex shrink-0 items-center gap-[60px] pr-[60px] will-change-transform"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: repeats }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-[60px] font-display italic font-light leading-none tracking-[-0.02em] text-[clamp(4rem,11vw,11rem)]"
            >
              {headline}
              <span
                aria-hidden
                className="inline-block h-3 w-3 shrink-0 rounded-full bg-gold"
              />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
