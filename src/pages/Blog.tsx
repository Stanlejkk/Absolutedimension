import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../lib/data";

const TAGS: Record<string, string> = {
  "sztuka-ubioru": "Editorial",
  "monaco-collection-story": "Lookbook",
  "sustainable-luxury": "House",
  "evening-styling-guide": "Styling",
};

export default function Blog() {
  const [feature, ...rest] = blogPosts;

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="eyebrow mb-4">Journal</p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1]">
            Words &amp; <span className="italic">images.</span>
          </h1>
          <p className="mt-6 text-muted max-w-xl leading-relaxed">
            Four letters a year. Editorials from the atelier, notes on our
            collections, and the occasional correspondence with the people we
            dress.
          </p>
        </motion.div>

        {/* Feature */}
        {feature && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <Link to={`/blog/${feature.slug}`} className="group grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#e9dfcf]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                  {TAGS[feature.slug] ?? "Journal"}
                </span>
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow text-muted mb-4">
                  {formatDate(feature.date)} — {feature.author}
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.05]">
                  {feature.title}
                </h2>
                <p className="mt-5 text-muted leading-relaxed">{feature.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-wider2 uppercase">
                  Read the letter
                  <span className="block h-px w-8 bg-ink/50 group-hover:w-14 transition-all" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-12 border-t border-ink/10">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfcf]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-4 left-4 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                      {TAGS[post.slug] ?? "Journal"}
                    </span>
                  </div>
                  <div className="mt-5">
                    <p className="eyebrow text-muted mb-2">{formatDate(post.date)}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-light">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
