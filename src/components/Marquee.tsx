import { motion } from "framer-motion";

const phrases = [
  "SM.ART Wardrobe",
  "Timeless silhouettes",
  "Made in Poland",
  "Sublime aesthetics",
  "Designed to endure",
  "Edition 07",
];

export default function Marquee() {
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-ink/10 bg-bone py-6">
      <motion.div
        className="flex whitespace-nowrap gap-14 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...phrases, ...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl text-ink/90 italic flex items-center gap-14"
          >
            {p}
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
