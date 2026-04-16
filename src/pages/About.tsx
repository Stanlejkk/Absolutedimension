import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocale } from "../i18n";
import type { DictionaryKey } from "../i18n";

const STAT_KEYS = ["uniquePieces", "collections", "yearsOfAtelier", "madeInPoland"] as const;
const PILLAR_KEYS = ["restraint", "craft", "provenance", "endurance"] as const;

export default function About() {
  const { t } = useLocale();

  const stats = STAT_KEYS.map((key) => ({
    k: t(`about.stats.${key}.value` as DictionaryKey),
    v: t(`about.stats.${key}.label` as DictionaryKey),
  }));

  const pillars = PILLAR_KEYS.map((key) => ({
    t: t(`about.pillars.${key}.title` as DictionaryKey),
    d: t(`about.pillars.${key}.body` as DictionaryKey),
  }));

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
              <p className="eyebrow text-bone/70 mb-4">{t("about.heroEyebrow")}</p>
              <h1 className="font-display text-6xl md:text-8xl font-light leading-none">
                {t("about.heroTitle1")} <span className="italic text-gold">{t("about.heroTitleItalic")}</span>
              </h1>
              <p className="mt-6 max-w-xl text-bone/80 text-lg leading-relaxed">
                {t("about.heroSubtitle")}
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
            <p className="eyebrow mb-4">{t("about.philosophyEyebrow")}</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              {t("about.philosophyTitle1")}{" "}
              <span className="italic text-gold">{t("about.philosophyTitleItalic")}</span>{" "}
              {t("about.philosophyTitle2")}
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
              {t("about.philosophyBody1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-muted"
            >
              {t("about.philosophyBody2")}
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
            <p className="eyebrow text-bone/60 mb-4">{t("about.pillarsEyebrow")}</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              {t("about.pillarsTitle1")} <span className="italic text-gold">{t("about.pillarsTitleItalic")}</span>
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
            <p className="eyebrow mb-4">{t("about.atelierEyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1]">
              {t("about.atelierTitle1")} <br />
              {t("about.atelierTitle2")}
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              {t("about.atelierBody")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wide overflow-hidden"
              >
                <span className="relative z-10">{t("about.discoverCollections")}</span>
                <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute inset-0 -z-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition"
              >
                {t("about.shopTheWardrobe")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
