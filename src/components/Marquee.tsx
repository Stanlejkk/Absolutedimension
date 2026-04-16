import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { useLocale } from "../i18n";
import SplitText from "./motion/SplitText";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Marquee() {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const phrases = useMemo(
    () => [
      t("marquee.phrase1"),
      t("marquee.phrase2"),
      t("marquee.phrase3"),
      t("marquee.phrase4"),
      t("marquee.phrase5"),
      t("marquee.phrase6"),
    ],
    [t],
  );

  return (
    <section
      aria-label={t("marquee.headline")}
      className="relative overflow-hidden bg-bordeaux text-bone py-20 md:py-28"
    >
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="eyebrow text-bone/70 mb-6"
        >
          {t("marquee.eyebrow")}
        </motion.span>
        <SplitText
          as="h2"
          text={t("marquee.headline")}
          by="word"
          stagger={0.08}
          className="block font-display italic text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
        />
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-8 block h-px w-24 bg-gold origin-center"
        />
      </div>

      <motion.div
        aria-hidden
        className="mt-16 flex whitespace-nowrap gap-14 will-change-transform opacity-30"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {[...phrases, ...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl text-bone italic flex items-center gap-14"
          >
            {p}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
