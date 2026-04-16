import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { collections, getProductsByCollection } from "../lib/data";

export default function CollectionsIndex() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="eyebrow mb-4">Destinations</p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1]">
            Eight cities, <br />
            <span className="italic text-gold">one wardrobe.</span>
          </h1>
          <p className="mt-6 text-muted max-w-xl leading-relaxed">
            Each collection begins with a place — its colours, its cadence, its
            quiet hours. The result is clothing that travels, and that you keep
            returning to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link to={`/collections/${c.slug}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddcb]">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-bone">
                    <p className="eyebrow text-bone/70">
                      {String(i + 1).padStart(2, "0")} — Collection
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl mt-1 mb-2">{c.name}</h2>
                    <p className="text-sm text-bone/80 leading-relaxed max-w-xs">
                      {c.description}
                    </p>
                    <p className="mt-4 text-[10px] tracking-wider2 uppercase text-bone/60">
                      {getProductsByCollection(c.slug).length} pieces →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
