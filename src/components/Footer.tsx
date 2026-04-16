import { motion } from "framer-motion";

const columns = [
  {
    title: "Shop",
    items: ["New arrivals", "Dresses", "Tops", "Trousers", "Coats", "Archive"],
  },
  {
    title: "House",
    items: ["Atelier", "Sustainability", "Made in Poland", "Editorial", "Press"],
  },
  {
    title: "Care",
    items: ["Contact", "Shipping", "Returns", "Size guide", "Garment care"],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-ink text-bone overflow-hidden">
      <div className="container-x pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-10 pb-16 border-b border-bone/10"
        >
          <div className="md:col-span-5">
            <p className="font-display italic text-gold text-sm tracking-wider2 mb-4">
              Absolut Dimension
            </p>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-[1.1]">
              A wardrobe, <br />
              designed <span className="italic">to endure.</span>
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Instagram", "Pinterest", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-bone/20 px-4 py-2 text-xs tracking-wider2 uppercase hover:bg-bone hover:text-ink transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-bone/60 mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-bone/80 hover:text-bone transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative -mx-6 md:-mx-10 overflow-hidden py-10">
          <motion.div
            className="flex whitespace-nowrap gap-14 font-display italic text-[16vw] leading-none text-bone/90"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            <span>Absolut Dimension</span>
            <span className="text-gold not-italic">—</span>
            <span>SM.ART Wardrobe</span>
            <span className="text-gold not-italic">—</span>
            <span>Absolut Dimension</span>
            <span className="text-gold not-italic">—</span>
            <span>SM.ART Wardrobe</span>
            <span className="text-gold not-italic">—</span>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-bone/10 text-xs tracking-wide text-bone/60">
          <p>© {new Date().getFullYear()} Absolut Dimension Sp. z o.o. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-bone">Privacy</a>
            <a href="#" className="hover:text-bone">Terms</a>
            <a href="#" className="hover:text-bone">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
