import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative py-24 md:py-36 bg-[#ece5d8] overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -right-40 h-[60vh] w-[60vh] rounded-full bg-gold/25 blur-3xl"
      />
      <div className="container-x relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">The letter</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.05]">
            Correspondence, <br />
            <span className="italic text-gold">quietly delivered.</span>
          </h2>
          <p className="mt-6 text-muted max-w-md leading-relaxed">
            Four letters a year. New editions, early access, and occasional
            notes from the atelier. No noise.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="w-full"
        >
          <div className="relative flex items-center gap-3 border-b border-ink/30 pb-3 focus-within:border-ink transition-colors">
            <input
              type="email"
              required
              placeholder="your@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-ink/40"
            />
            <button
              type="submit"
              className="group shrink-0 inline-flex items-center gap-2 text-sm tracking-wider2 uppercase"
            >
              Subscribe
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="mt-4 text-xs tracking-wide text-muted">
            By subscribing you accept our privacy policy.
          </p>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm italic text-ink"
            >
              Merci. Your first letter will arrive soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
