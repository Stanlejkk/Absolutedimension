import { motion } from "framer-motion";

const phrases = [
  "Harmony of Luxury",
  "SM.ART Wardrobe",
  "Timeless silhouettes",
  "Made in Poland",
  "Sublime aesthetics",
  "Designed to endure",
];

export default function Marquee() {
  return (
    <section
      aria-label="Harmony of Luxury"
      className="relative overflow-hidden bg-bordeaux text-bone py-20 md:py-28"
    >
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-bone/70 mb-6"
        >
          Absolute Dimension
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
        >
          Harmony of Luxury
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 block h-px w-24 bg-gold origin-center"
        />
      </div>

      <motion.div
        aria-hidden
        className="mt-16 flex whitespace-nowrap gap-14 will-change-transform opacity-30"
        animate={{ x: ["0%", "-50%"] }}
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
