import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { collections, categoryLabels } from "../lib/data";

const careLinks = [
  { label: "Contact", to: "/about" },
  { label: "Shipping", to: "/about" },
  { label: "Returns", to: "/about" },
  { label: "Size guide", to: "/about" },
  { label: "Garment care", to: "/about" },
];

const houseLinks = [
  { label: "Atelier", to: "/about" },
  { label: "Sustainability", to: "/about" },
  { label: "Made in Poland", to: "/about" },
  { label: "Editorial", to: "/blog" },
];

// A short, curated set of category links for the footer
const shopCategoryKeys = ["dress", "coat", "top", "skirt", "set", "blazer"] as const;

export default function Footer() {
  const shopLinks = [
    { label: "New arrivals", to: "/shop?view=new" },
    ...shopCategoryKeys.map((k) => ({ label: categoryLabels[k], to: `/shop?cat=${k}` })),
  ];

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

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
              {collections.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  to={`/collections/${c.slug}`}
                  className="text-xs tracking-wide text-bone/70 hover:text-bone transition-colors"
                >
                  → {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="eyebrow text-bone/60 mb-4">Shop</p>
              <ul className="space-y-2.5">
                {shopLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/shop" className="text-sm text-bone italic hover:text-gold transition-colors">
                    All pieces
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-bone/60 mb-4">House</p>
              <ul className="space-y-2.5">
                {houseLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-bone/60 mb-4">Care</p>
              <ul className="space-y-2.5">
                {careLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
