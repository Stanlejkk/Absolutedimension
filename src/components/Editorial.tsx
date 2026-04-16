import { motion } from "framer-motion";

type Entry = {
  tag: string;
  title: string;
  excerpt: string;
  hue: string;
  image?: string;
  href: string;
};

const entries: Entry[] = [
  {
    tag: "Lookbook",
    title: "Ready to Fly",
    excerpt:
      "The Summer edition — silk, cotton velvet and hand-finished silhouettes, photographed on the move.",
    hue: "#e9dfcf",
    href: "https://www.absolutdimension.com/en/collections/all",
  },
  {
    tag: "Editorial",
    title: "SM.ART Wardrobe",
    excerpt:
      "A thoughtful wardrobe, orderly and sublime — cut once, considered twice, and made to serve for years.",
    hue: "#c8b496",
    href: "https://www.absolutdimension.com/en",
  },
  {
    tag: "Atelier",
    title: "Made in Warsaw",
    excerpt:
      "Fabrics sourced in Italy and France, cut and hand-finished by a small atelier on Okopowa, Warsaw.",
    hue: "#4c4237",
    href: "https://www.absolutdimension.com/en",
  },
];

export default function Editorial() {
  return (
    <section id="editorial" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-4">Journal</p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1]">
              Words &amp; <span className="italic">images.</span>
            </h2>
          </motion.div>
          <a
            href="https://www.absolutdimension.com/en/collections/all"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-ink"
          >
            All entries
            <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {entries.map((e, i) => (
            <motion.a
              key={e.title}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ backgroundColor: e.hue }}
              >
                {e.image ? (
                  <img
                    src={e.image}
                    alt={e.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <motion.div
                    className="absolute inset-0 grid place-items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <svg viewBox="0 0 200 250" className="h-2/3 w-auto opacity-60" aria-hidden>
                      <rect x="20" y="20" width="160" height="210" fill="none" stroke="currentColor" strokeOpacity="0.25" />
                      <path
                        d="M40 200 Q100 120 160 200"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.35"
                        strokeWidth="1"
                      />
                      <circle cx="100" cy="90" r="26" fill="none" stroke="currentColor" strokeOpacity="0.35" />
                    </svg>
                  </motion.div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                    {e.tag}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-2xl md:text-3xl font-light">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{e.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider2 uppercase">
                  Read
                  <span className="block h-px w-6 bg-ink/50 group-hover:w-10 transition-all" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
