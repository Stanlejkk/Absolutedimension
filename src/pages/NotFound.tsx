import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="pt-40 pb-24 min-h-[70svh] flex items-center">
      <div className="container-x text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6"
        >
          {t("notFound.eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl font-light"
        >
          {t("notFound.headline1")} <span className="italic text-gold">{t("notFound.headlineItalic")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-muted max-w-md mx-auto"
        >
          {t("notFound.longBody")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wide"
          >
            {t("notFound.ctaHome")}
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition"
          >
            {t("notFound.ctaShop")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
