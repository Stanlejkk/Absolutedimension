import { motion } from "framer-motion";
import { useState } from "react";

type Product = {
  name: string;
  category: string;
  price: string;
  palette: [string, string, string];
  silhouette: "dress" | "top" | "coat" | "trousers";
  image?: string;
  href: string;
};

const products: Product[] = [
  {
    name: "Absolut Paris",
    category: "Cocktail Dress",
    price: "€ 680",
    palette: ["#d9c9b2", "#8a7456", "#1a1a1a"],
    silhouette: "dress",
    href: "https://www.absolutdimension.com/en/products/sukienka-coctail-absolut",
  },
  {
    name: "21_Top Absolut",
    category: "Silk Satin Top",
    price: "€ 320",
    palette: ["#f4ece0", "#c6b091", "#6b5c46"],
    silhouette: "top",
    href: "https://www.absolutdimension.com/en/products/top-absolut",
  },
  {
    name: "16_Coat Meisei",
    category: "Hand-woven Fur Coat",
    price: "€ 1 240",
    palette: ["#2a2a2a", "#525252", "#0d0d0d"],
    silhouette: "coat",
    href: "https://www.absolutdimension.com/en/products/set-maturite-1",
  },
  {
    name: "37.Dress ICON",
    category: "Velvet Dress",
    price: "€ 860",
    palette: ["#ece5d8", "#b8936a", "#433423"],
    silhouette: "dress",
    href: "https://www.absolutdimension.com/en/products/37-sukienka-icon",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4">Selected pieces</p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1]">
              The <span className="italic">Edition</span>
            </h2>
          </motion.div>
          <motion.a
            href="https://www.absolutdimension.com/en/collections/all"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden sm:inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-ink group"
          >
            View all
            <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = product.image && !imgFailed;

  return (
    <motion.a
      href={product.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddcb]">
        {showImage ? (
          <motion.img
            src={product.image}
            alt={product.name}
            onError={() => setImgFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <GarmentSVG palette={product.palette} silhouette={product.silhouette} />
        )}
        <motion.div
          aria-hidden
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 bg-ink/90 text-bone backdrop-blur-sm px-4 py-3 flex items-center justify-between"
        >
          <span className="text-xs tracking-wider2 uppercase">Add to bag</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <div className="absolute top-3 right-3 flex gap-1.5">
          {product.palette.map((c, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full ring-1 ring-bone/40"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-muted/80">{product.category}</p>
          <h3 className="font-display text-xl md:text-2xl mt-1">{product.name}</h3>
        </div>
        <p className="text-sm tracking-wide mt-1 shrink-0">{product.price}</p>
      </div>
    </motion.a>
  );
}

function GarmentSVG({
  palette,
  silhouette,
}: {
  palette: [string, string, string];
  silhouette: Product["silhouette"];
}) {
  const [bg, mid, ink] = palette;
  return (
    <motion.svg
      viewBox="0 0 600 800"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id={`bg-${silhouette}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor={mid} />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill={`url(#bg-${silhouette})`} />
      <g fill={ink} opacity="0.9">
        {silhouette === "dress" && (
          <>
            <ellipse cx="300" cy="180" rx="42" ry="52" />
            <path d="M258 260 L342 260 L372 360 Q300 380 228 360 Z" />
            <path d="M228 360 Q300 340 372 360 L410 700 Q300 740 190 700 Z" />
          </>
        )}
        {silhouette === "top" && (
          <>
            <ellipse cx="300" cy="200" rx="40" ry="50" />
            <path d="M250 280 L350 280 L400 340 L380 500 L220 500 L200 340 Z" />
            <path d="M200 340 L150 420 L170 460 L210 420 Z" />
            <path d="M400 340 L450 420 L430 460 L390 420 Z" />
          </>
        )}
        {silhouette === "coat" && (
          <>
            <ellipse cx="300" cy="170" rx="40" ry="50" />
            <path d="M240 250 L360 250 L410 360 L400 720 L200 720 L190 360 Z" />
            <path d="M300 260 L300 720" stroke={bg} strokeWidth="3" />
            <path d="M160 360 L200 360 L200 620 L160 620 Z" />
            <path d="M440 360 L400 360 L400 620 L440 620 Z" />
          </>
        )}
        {silhouette === "trousers" && (
          <>
            <ellipse cx="300" cy="200" rx="36" ry="46" />
            <path d="M258 270 L342 270 L360 360 L240 360 Z" />
            <path d="M240 360 L360 360 L350 780 L300 780 L296 460 L292 780 L250 780 Z" />
          </>
        )}
      </g>
    </motion.svg>
  );
}
