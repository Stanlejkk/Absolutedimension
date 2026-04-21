import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";

export default function NewsletterConfirmed() {
  const { t } = useLocale();
  const [params] = useSearchParams();
  const status = params.get("status") ?? "ok";

  const title =
    status === "ok"
      ? t("newsletterStatus.confirmedTitle")
      : status === "error"
        ? t("newsletterStatus.confirmedErrorTitle")
        : t("newsletterStatus.confirmedInvalidTitle");
  const body =
    status === "ok"
      ? t("newsletterStatus.confirmedBody")
      : status === "error"
        ? t("newsletterStatus.confirmedErrorBody")
        : t("newsletterStatus.confirmedInvalidBody");

  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
      <div className="container-x text-center max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          {t("newsletterStatus.confirmedEyebrow")}
        </motion.p>
        <h1 className="font-display text-5xl md:text-6xl font-light">{title}</h1>
        <p className="mt-6 text-muted">{body}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
          >
            {t("newsletterStatus.backHome")}
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-3 text-sm tracking-wider2 uppercase hover:bg-ink/[0.03] transition"
          >
            {t("newsletterStatus.browseShop")}
          </Link>
        </div>
      </div>
    </section>
  );
}
