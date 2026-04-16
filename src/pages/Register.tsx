import { useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useAuth, type AuthError, type UserRole } from "../lib/AuthContext";

export default function Register() {
  const { t } = useLocale();
  const { user, register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState<UserRole>("client");
  const [adminCode, setAdminCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorKey, setErrorKey] = useState<AuthError | "password-mismatch" | null>(null);

  if (user) return <Navigate to="/account" replace />;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorKey(null);
    if (password !== confirm) {
      setErrorKey("password-mismatch");
      return;
    }
    setSubmitting(true);
    const result = await register({
      name,
      email,
      password,
      role,
      adminInviteCode: role === "admin" ? adminCode : undefined,
    });
    setSubmitting(false);
    if (!result.ok) {
      setErrorKey(result.error);
      return;
    }
    navigate(role === "admin" ? "/admin" : "/account", { replace: true });
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
          <p className="eyebrow mb-3">{t("auth.register.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.register.title")}
          </h1>
          <p className="mt-4 text-muted max-w-md">{t("auth.register.subtitle")}</p>
        </motion.header>

        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          <Field
            id="name"
            label={t("auth.register.nameLabel")}
            value={name}
            onChange={setName}
            autoComplete="name"
            required
          />

          <Field
            id="email"
            type="email"
            label={t("auth.register.emailLabel")}
            value={email}
            onChange={setEmail}
            autoComplete="email"
            required
          />

          <Field
            id="password"
            type="password"
            label={t("auth.register.passwordLabel")}
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
            hint={t("auth.register.passwordHint")}
            required
          />

          <Field
            id="confirm"
            type="password"
            label={t("auth.register.confirmLabel")}
            value={confirm}
            onChange={setConfirm}
            autoComplete="new-password"
            required
          />

          <fieldset className="space-y-2">
            <legend className="text-xs tracking-wider2 uppercase text-muted">
              {t("auth.register.roleLabel")}
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <RoleOption
                checked={role === "client"}
                onSelect={() => setRole("client")}
                label={t("auth.register.roleClient")}
              />
              <RoleOption
                checked={role === "admin"}
                onSelect={() => setRole("admin")}
                label={t("auth.register.roleAdmin")}
              />
            </div>
          </fieldset>

          {role === "admin" && (
            <Field
              id="admin-code"
              label={t("auth.register.adminCodeLabel")}
              value={adminCode}
              onChange={setAdminCode}
              autoComplete="one-time-code"
              hint={t("auth.register.adminCodeHint")}
              required
            />
          )}

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
            {submitting ? t("auth.register.submitting") : t("auth.register.submit")}
          </button>

          <p className="text-center text-sm text-muted">
            {t("auth.register.alreadyPrompt")}{" "}
            <Link to="/login" className="text-ink underline-offset-4 hover:underline">
              {t("auth.register.alreadyLink")}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
  hint,
}: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs tracking-wider2 uppercase text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="w-full border-b border-ink/20 bg-transparent py-2 text-base text-ink focus:border-ink outline-none transition-colors"
      />
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}

function RoleOption({
  checked,
  onSelect,
  label,
}: {
  checked: boolean;
  onSelect: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={checked}
      className={`border px-4 py-3 text-sm tracking-wider2 uppercase transition-colors ${
        checked
          ? "border-ink bg-ink text-bone"
          : "border-ink/20 text-ink hover:border-ink/60"
      }`}
    >
      {label}
    </button>
  );
}
