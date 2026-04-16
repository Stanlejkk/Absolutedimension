import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useAuth, type AuthError } from "../lib/AuthContext";

export default function Login() {
  const { t } = useLocale();
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorKey, setErrorKey] = useState<AuthError | null>(null);

  const redirectTo =
    (location.state as { from?: string } | null)?.from ?? "/account";

  if (user) return <Navigate to={redirectTo} replace />;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorKey(null);
    setSubmitting(true);
    const result = await login(email, password);
    setSubmitting(false);
    if (!result.ok) {
      setErrorKey(result.error);
      return;
    }
    navigate(redirectTo, { replace: true });
  }

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-32 min-h-[70svh]">
      <div className="container-x max-w-xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12"
        >
          <p className="eyebrow mb-3">{t("auth.login.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.login.title")}
          </h1>
          <p className="mt-4 text-muted max-w-md">{t("auth.login.subtitle")}</p>
        </motion.header>

        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs tracking-wider2 uppercase text-muted">
              {t("auth.login.emailLabel")}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-ink/20 bg-transparent py-2 text-base text-ink focus:border-ink outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-xs tracking-wider2 uppercase text-muted">
              {t("auth.login.passwordLabel")}
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-ink/20 bg-transparent py-2 text-base text-ink focus:border-ink outline-none transition-colors"
            />
          </div>

          {errorKey && (
            <p className="text-sm text-[#9a4a3a]" role="alert">
              {t(`auth.errors.${errorKey}`)}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-10 py-4 text-sm tracking-wider2 uppercase transition-colors ${
              submitting
                ? "bg-ink/30 text-bone cursor-wait"
                : "bg-ink text-bone hover:bg-ink/90"
            }`}
          >
            {submitting ? t("auth.login.submitting") : t("auth.login.submit")}
          </button>

          <p className="text-center text-sm text-muted">
            {t("auth.login.newPrompt")}{" "}
            <Link to="/register" className="text-ink underline-offset-4 hover:underline">
              {t("auth.login.newLink")}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
