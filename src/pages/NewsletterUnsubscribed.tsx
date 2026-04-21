import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";

export default function NewsletterUnsubscribed() {
  const { t } = useLocale();
  const [params] = useSearchParams();
  const status = params.get("status") ?? "ok";

  const title =
    status === "ok"
      ? t("newsletterStatus.unsubscribedTitle")
      : t("newsletterStatus.unsubscribedInvalidTitle");
  const body =
    status === "ok"
      ? t("newsletterStatus.unsubscribedBody")
      : t("newsletterStatus.unsubscribedInvalidBody");

  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
      <div className="container-x text-center max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          {t("newsletterStatus.unsubscribedEyebrow")}
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
        </div>
      </div>
    </section>
  );
}
