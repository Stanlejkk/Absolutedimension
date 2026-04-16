import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatPrice, type Product } from "../lib/data";

type Props = {
  product: Product;
  index?: number;
  /** Render with a denser layout (used on shop/collection grids) */
  dense?: boolean;
};

export default function ProductCard({ product, index = 0, dense = false }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: Math.min(index, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddcb]">
          {!imgFailed ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgFailed(true)}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-muted/60 text-xs tracking-wider2 uppercase">
              {product.name}
            </div>
          )}

          {product.newArrival && (
            <span className="absolute top-3 left-3 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
              New
            </span>
          )}

          <motion.div
            aria-hidden
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 bg-ink/90 text-bone backdrop-blur-sm px-4 py-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="text-xs tracking-wider2 uppercase">View</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        <div className={`mt-4 flex items-start justify-between gap-4 ${dense ? "mt-3" : ""}`}>
          <div>
            <p className="eyebrow text-muted/80 capitalize">{product.collection.replace("-", " ")}</p>
            <h3
              className={`font-display mt-1 ${dense ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}
            >
              {product.name}
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-1 shrink-0">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
