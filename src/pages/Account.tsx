import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useAuth } from "../lib/AuthContext";

export default function Account() {
  const { t, formatDate } = useLocale();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x max-w-lg mx-auto text-center">
          <p className="eyebrow mb-3">{t("auth.account.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.account.notSignedInTitle")}
          </h1>
          <p className="mt-4 text-muted">{t("auth.account.notSignedInBody")}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
            >
              {t("auth.navSignIn")}
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full border border-ink text-ink px-8 py-3 text-sm tracking-wider2 uppercase hover:bg-ink hover:text-bone transition-colors"
            >
              {t("auth.navRegister")}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  function onSignOut() {
    logout();
    navigate("/", { replace: true });
  }

  const roleLabel =
    user.role === "admin" ? t("auth.account.roleAdmin") : t("auth.account.roleClient");

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-32 min-h-[70svh]">
      <div className="container-x max-w-2xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3">{t("auth.account.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.account.title")}
          </h1>
          <p className="mt-4 text-muted">
            {t("auth.account.greeting", { name: user.name })}
          </p>
        </motion.header>

        <dl className="border border-ink/10 divide-y divide-ink/10">
          <Row label={t("auth.account.emailLabel")} value={user.email} />
          <Row label={t("auth.account.roleLabel")} value={roleLabel} />
          <Row
            label={t("auth.account.memberSince", { date: formatDate(user.createdAt) })}
            value=""
            hideValue
          />
        </dl>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {user.role === "admin" && (
            <Link
              to="/admin"
              className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
            >
              {t("auth.account.adminPanel")}
            </Link>
          )}
          <Link
            to="/account/orders"
            className="inline-flex items-center justify-center rounded-full border border-ink text-ink px-8 py-3 text-sm tracking-wider2 uppercase hover:bg-ink hover:text-bone transition-colors"
          >
            {t("ordersPage.title")}
          </Link>
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex items-center justify-center rounded-full border border-ink text-ink px-8 py-3 text-sm tracking-wider2 uppercase hover:bg-ink hover:text-bone transition-colors"
          >
            {t("auth.account.signOut")}
          </button>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, hideValue }: { label: string; value: string; hideValue?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-6 p-5">
      <dt className="text-xs tracking-wider2 uppercase text-muted">{label}</dt>
      {!hideValue && <dd className="text-sm text-ink">{value}</dd>}
    </div>
  );
}
