import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts, getBlogPost } from "../lib/data";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-5xl font-light mb-6">Letter not found.</h1>
          <Link to="/blog" className="underline underline-offset-4">
            Back to the journal
          </Link>
        </div>
      </section>
    );
  }

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="container-x">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-wider2 uppercase text-muted hover:text-ink">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Journal
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl"
        >
          <p className="eyebrow text-muted">
            {formatDate(post.date)} — {post.author}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mt-4">
            {post.title}
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 md:mt-16 aspect-[16/9] overflow-hidden bg-[#e9dfcf]"
        >
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl mt-14 md:mt-20 text-lg leading-relaxed text-ink/85 space-y-6"
        >
          <p className="font-display text-2xl md:text-3xl font-light italic text-ink/90">
            {post.excerpt}
          </p>

          <p>
            At Absolut Dimension we believe that fashion is a form of art —
            every piece of a wardrobe tells a story, carries emotion, and
            quietly builds identity. Our collections take inspiration from the
            world's most beautiful corners, joining craft tradition to
            contemporary design.
          </p>

          <p>
            Every garment is made in our atelier from the finest materials —
            chosen with care for detail and for comfort. The process of
            creation is a journey — from the first sketch to the final stitch —
            in which every moment matters.
          </p>

          <blockquote className="border-l-2 border-gold pl-6 my-10 italic text-muted text-xl font-display">
            “True elegance is not what you wear, but how you feel wearing it.”
          </blockquote>

          <p>
            We invite you to explore our world — a world where fashion meets
            art, and every day is an occasion to express oneself.
          </p>

          <p className="text-muted italic">— The atelier</p>
        </motion.div>

        {/* More */}
        {more.length > 0 && (
          <section className="mt-24 md:mt-32 pt-12 border-t border-ink/10">
            <h2 className="font-display text-3xl md:text-5xl font-light mb-10">
              More <span className="italic">letters.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {more.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfcf]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="eyebrow text-muted">{formatDate(p.date)}</p>
                    <h3 className="font-display text-xl md:text-2xl mt-1">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
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
