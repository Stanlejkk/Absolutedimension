import { motion } from "framer-motion";

const stats = [
  { k: "14", v: "Years of atelier" },
  { k: "100%", v: "Made in Poland" },
  { k: "07", v: "Editions released" },
  { k: "48h", v: "Hand-finishing" },
];

export default function Story() {
  return (
    <section id="story" className="relative py-24 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:sticky top-24"
        >
          <p className="eyebrow mb-5">Our atelier</p>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.02]">
            An <span className="italic text-gold">orderly</span> way of dressing.
          </h2>
        </motion.div>

        <div className="lg:col-span-7 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-ink/80"
          >
            Absolut Dimension is a study in restraint — a house dedicated to the
            idea that a wardrobe should be composed like a library, each piece
            chosen with intent and kept for its own sake.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed text-muted"
          >
            We work with small Polish ateliers to cut silhouettes that honour the
            human form. Fabrics are sourced in Italy and France; finishing is done
            by hand. Nothing in our house is rushed.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-ink/10"
          >
            {stats.map((s) => (
              <motion.li
                key={s.k}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-4xl md:text-5xl font-light">{s.k}</p>
                <p className="eyebrow mt-2">{s.v}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
