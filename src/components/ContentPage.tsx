import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared editorial layout for the brand-story and legal/info pages (Contact,
 * FAQ, Delivery, Returns, Privacy, Terms, SM.ART Wardrobe, Source). Keeps a
 * consistent eyebrow + display title header and a centred prose column so each
 * page reads like the rest of the site without bespoke layout per page.
 */
export default function ContentPage({
  eyebrow,
  title,
  intro,
  children,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <article className="pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="container-x">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${wide ? "" : "max-w-3xl"} mb-12 md:mb-16`}
        >
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-display font-light leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,5vw,4.25rem)]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
              {intro}
            </p>
          )}
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={wide ? "" : "max-w-3xl"}
        >
          {children}
        </motion.div>
      </div>
    </article>
  );
}

/** A titled prose block — heading + paragraphs. */
export function Section({ heading, children }: { heading?: string; children: ReactNode }) {
  return (
    <section className="mb-12 last:mb-0">
      {heading && (
        <h2 className="font-display text-2xl md:text-3xl font-light mb-4">{heading}</h2>
      )}
      <div className="space-y-4 text-[15px] md:text-base leading-[1.8] text-ink/80">
        {children}
      </div>
    </section>
  );
}
