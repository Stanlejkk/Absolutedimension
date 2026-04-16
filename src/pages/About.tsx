import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { k: "108+", v: "Unique pieces" },
  { k: "8", v: "Collections" },
  { k: "14", v: "Years of atelier" },
  { k: "100%", v: "Made in Poland" },
];

const pillars = [
  {
    t: "Restraint",
    d: "We cut once and consider twice. Fewer pieces, chosen with intent — a library of a wardrobe.",
  },
  {
    t: "Craft",
    d: "Every seam is hand-finished in our Warsaw atelier. Reinforced edges, solid-brass hardware, and a patience that machines cannot replicate.",
  },
  {
    t: "Provenance",
    d: "Silks from Como, cottons from Puglia, wools from Biella. Fabrics sourced in Italy and France, travelling short distances before they reach our hands.",
  },
  {
    t: "Endurance",
    d: "We design for a decade, not a season. Our pieces are made to soften with time — and to be kept.",
  },
];

export default function About() {
  return (
    <article>
      {/* Hero */}
      <section className="relative h-[70svh] overflow-hidden">
        <img
          src="/img/hero/hero-3.png"
          alt="Absolut Dimension atelier"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/30 to-ink/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-14 md:pb-20 text-bone">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow text-bone/70 mb-4">The House</p>
              <h1 className="font-display text-6xl md:text-8xl font-light leading-none">
                About <span className="italic text-gold">us.</span>
              </h1>
              <p className="mt-6 max-w-xl text-bone/80 text-lg leading-relaxed">
                A Polish house of thoughtful clothing — composed like a library,
                cut like architecture, worn like a second skin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky top-28 self-start"
          >
            <p className="eyebrow mb-4">Philosophy</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              An <span className="italic text-gold">orderly</span> way of dressing.
            </h2>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-lg md:text-xl leading-relaxed text-ink/85"
            >
              Absolut Dimension is a Polish house of luxury clothing, creating
              unique garments inspired by the most beautiful metropolises in
              the world. From Monaco to Bali, each collection tells the story
              of a place that inspired it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-muted"
            >
              Our pieces are made in a Polish atelier from the finest
              materials — silk, cashmere, merino wool, and organic cotton.
              Every element is hand-finished with devotion to the smallest
              detail. We believe that fashion is a form of artistic
              expression — so each of our collections joins the tradition of
              tailoring to contemporary design, creating pieces that are
              timeless and singular.
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-ink/10"
            >
              {stats.map((s) => (
                <motion.li
                  key={s.v}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-4xl md:text-5xl font-light text-gold">{s.k}</p>
                  <p className="eyebrow mt-2">{s.v}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 bg-ink text-bone">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-16"
          >
            <p className="eyebrow text-bone/60 mb-4">What we keep</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              Four things we <span className="italic text-gold">hold to.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-bone/15 pt-8"
              >
                <p className="eyebrow text-bone/50 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4">
                  {p.t}
                </h3>
                <p className="text-bone/75 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier photo */}
      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden bg-[#e9dfcf]"
          >
            <img src="/img/hero/hero-2.jpg" alt="" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="eyebrow mb-4">The atelier</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1]">
              Warsaw, <br />
              Okopowa street.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              A small workshop on a quiet street, where every garment is cut,
              assembled, and finished by hand. Our team of six has worked
              together for over a decade.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Discover collections</span>
                <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute inset-0 -z-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition"
              >
                Shop the wardrobe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
