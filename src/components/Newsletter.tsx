import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocale } from "../i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

type FormState = "idle" | "submitting" | "sent" | "error";

/**
 * Newsletter — matches ad-home.jsx → Newsletter. A quiet centered block on
 * the bone body: eyebrow, 2-line italic title, body copy, and an underlined
 * inline email form (no coloured blobs, no card, no gradient).
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const { t, locale } = useLocale();
  const sent = state === "sent";

  return (
    <section className="relative bg-bone border-t border-ink/10 py-28 md:py-36">
      <div className="container-x max-w-[60rem] text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="eyebrow mb-6"
        >
          {t("newsletter.eyebrow")}
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.14 }}
          className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.02em]"
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
              className="inline-block italic"
            >
              {t("newsletter.titleLine2")}
            </motion.span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-6 text-base md:text-[17px] leading-relaxed text-muted max-w-[34rem] mx-auto"
        >
          {t("newsletter.body")}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || state === "submitting") return;
            setState("submitting");
            try {
              const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, locale }),
              });
              if (res.ok) setState("sent");
              else setState("error");
            } catch {
              setState("error");
            }
          }}
          className="mt-11 max-w-[32.5rem] mx-auto"
        >
          <div className="flex items-center border-b border-ink pb-1.5">
            <input
              type="email"
              required
              disabled={sent || state === "submitting"}
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-base py-3.5 text-ink placeholder:text-ink/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sent || state === "submitting"}
              className="group shrink-0 inline-flex items-center gap-2.5 pl-4 py-3.5 text-xs tracking-wider2 uppercase font-medium text-ink disabled:opacity-60"
            >
              {sent ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <>
                  <span>{t("newsletter.submit")}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-4 text-[13px] tracking-[0.05em] text-gold"
              >
                {t("newsletter.success")}
              </motion.p>
            )}
            {state === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-4 text-[13px] tracking-[0.05em] text-[#9a4a3a]"
              >
                {t("newsletter.error")}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
