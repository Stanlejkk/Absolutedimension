import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.15]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["12%", "-18%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#ece5d8] overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: orbY, scale: orbScale }}
        className="absolute -top-32 -right-40 h-[60vh] w-[60vh] rounded-full bg-gold/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        style={{ y: orb2Y }}
        className="absolute -bottom-40 -left-32 h-[45vh] w-[45vh] rounded-full bg-bordeaux/15 blur-3xl"
      />
      <div className="container-x relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="eyebrow mb-5">{t("newsletter.eyebrow")}</p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.16 }}
            className="font-display text-5xl md:text-6xl font-light leading-[1.05]"
          >
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 1, ease: EASE } },
                }}
                className="inline-block"
              >
                {t("newsletter.titleLine1")}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 1, ease: EASE } },
                }}
                className="inline-block italic text-gold"
              >
                {t("newsletter.titleLine2")}
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="mt-6 text-muted max-w-md leading-relaxed"
          >
            {t("newsletter.body")}
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="w-full"
        >
          <div className="relative flex items-center gap-3 border-b border-ink/30 pb-3 focus-within:border-ink transition-colors">
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
              className="absolute left-0 right-0 bottom-0 h-px origin-left bg-ink/50"
            />
            <input
              type="email"
              required
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-ink/40"
            />
            <button
              type="submit"
              className="group shrink-0 inline-flex items-center gap-2 text-sm tracking-wider2 uppercase relative"
            >
              <span className="relative block overflow-hidden">
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  {t("newsletter.submit")}
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 translate-y-full text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                >
                  {t("newsletter.submit")}
                </span>
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="mt-4 text-xs tracking-wide text-muted">
            {t("newsletter.privacy")}
          </p>
          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mt-4 text-sm italic text-ink"
              >
                {t("newsletter.success")}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
