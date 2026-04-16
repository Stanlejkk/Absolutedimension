import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  formatPrice,
  getProduct,
  getCollection,
  products,
} from "../lib/data";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  if (!product) {
    return (
      <section className="pt-40 pb-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-5xl font-light mb-6">Piece not found.</h1>
          <Link to="/shop" className="underline underline-offset-4">
            Back to the shop
          </Link>
        </div>
      </section>
    );
  }

  const collection = getCollection(product.collection);
  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  return (
    <article className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="container-x">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 text-xs tracking-wide text-muted mb-8">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          {collection && (
            <>
              <Link to={`/collections/${collection.slug}`} className="hover:text-ink">
                {collection.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddcb]">
              {!imgFailed ? (
                <img
                  src={product.image}
                  alt={product.name}
                  onError={() => setImgFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-muted italic">
                  {product.name}
                </div>
              )}
              {product.newArrival && (
                <span className="absolute top-4 left-4 bg-bone/90 text-ink text-[10px] tracking-wider2 uppercase px-2.5 py-1">
                  New
                </span>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col lg:sticky lg:top-28 self-start"
          >
            {collection && (
              <Link to={`/collections/${collection.slug}`} className="eyebrow text-muted hover:text-ink mb-3">
                {collection.name} collection
              </Link>
            )}
            <h1 className="font-display text-4xl md:text-5xl font-light leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-4 text-xl tracking-wide text-ink">{formatPrice(product.price)}</p>
            <p className="mt-6 text-muted leading-relaxed">{product.description}</p>

            {/* Sizes */}
            <div className="mt-10">
              <p className="eyebrow mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-4 py-2 text-xs tracking-wider2 uppercase border transition-colors ${
                      selectedSize === size
                        ? "border-ink bg-ink text-bone"
                        : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleAdd}
                disabled={!selectedSize}
                className={`group relative inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm tracking-wider2 uppercase overflow-hidden transition-colors ${
                  !selectedSize
                    ? "bg-ink/20 text-ink/40 cursor-not-allowed"
                    : added
                    ? "bg-gold text-ink"
                    : "bg-ink text-bone"
                }`}
              >
                <span className="relative z-10">
                  {!selectedSize ? "Select a size" : added ? "Added to bag ✓" : "Add to bag"}
                </span>
                {selectedSize && !added && (
                  <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition">
                Save for later
              </button>
            </div>

            {/* Accordion details */}
            <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              <Section title="Details">{product.description}</Section>
              <Section title="Materials &amp; craft">
                Fabric sourced in Italy and France. Cut and finished by hand in our Warsaw atelier.
                Reinforced seams, bound edges, and solid brass hardware.
              </Section>
              <Section title="Shipping">
                Complimentary shipping on orders above 500&nbsp;zł. Dispatched within 3–5 working days.
              </Section>
              <Section title="Returns">
                14 days to return, unused and with original tags. Bespoke and final-sale pieces excluded.
              </Section>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="flex items-end justify-between mb-10 gap-6">
              <h2 className="font-display text-3xl md:text-5xl font-light">
                From the same <span className="italic">collection</span>
              </h2>
              {collection && (
                <Link
                  to={`/collections/${collection.slug}`}
                  className="hidden sm:inline-flex items-center gap-2 text-sm text-muted hover:text-ink group"
                >
                  View {collection.name}
                  <span className="block h-px w-10 bg-ink/30 group-hover:w-16 transition-all" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} dense />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-wider2 uppercase"
        aria-expanded={open}
      >
        <span dangerouslySetInnerHTML={{ __html: title }} />
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex h-4 w-4 items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-muted leading-relaxed">{children}</p>
      </motion.div>
    </div>
  );
}
