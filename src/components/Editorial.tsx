import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../lib/data";

const TAGS: Record<string, string> = {
  "sztuka-ubioru": "Editorial",
  "monaco-collection-story": "Lookbook",
  "sustainable-luxury": "House",
  "evening-styling-guide": "Styling",
};

const HUES: Record<string, string> = {
  "sztuka-ubioru": "#e9dfcf",
  "monaco-collection-story": "#c8b496",
  "sustainable-luxury": "#4c4237",
  "evening-styling-guide": "#d9c9b2",
};

export default function Editorial() {
  // Use first three posts on the homepage — matches the 3-column layout
  const entries = blogPosts.slice(0, 3);

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
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-ink"
          >
            All entries
            <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {entries.map((e, i) => (
            <motion.div
              key={e.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/blog/${e.slug}`} className="group block">
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ backgroundColor: HUES[e.slug] ?? "#e9dfcf" }}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                      {TAGS[e.slug] ?? "Journal"}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl md:text-3xl font-light">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{e.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider2 uppercase">
                    Read
                    <span className="block h-px w-6 bg-ink/50 group-hover:w-10 transition-all" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
