import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice, getProduct } from "../lib/data";

// Headline product shown in the hero — the signature Monaco gown.
const HERO_PRODUCT_ID = "p48"; // Suknia Absolut Monaco

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const [imgFailed, setImgFailed] = useState(false);
  const [bgFailed, setBgFailed] = useState(false);

  const heroProduct = getProduct(HERO_PRODUCT_ID)!;
  const title = ["Sublime", "silhouettes,", "designed", "to", "endure."];

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden pt-20 md:pt-24">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-bone via-bone to-[#ece5da]"
      />
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10"
      >
        {!bgFailed && (
          <img
            src="/img/hero/hero-1.png"
            alt=""
            aria-hidden
            onError={() => setBgFailed(true)}
            className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply"
          />
        )}
        <div className="absolute -top-20 -right-24 h-[70vh] w-[70vh] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-[50vh] w-[50vh] rounded-full bg-ink/5 blur-3xl" />
      </motion.div>

      <div className="container-x grid lg:grid-cols-12 gap-10 pt-10 md:pt-16">
        <motion.div style={{ opacity }} className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            Spring / Summer — Edition 07
          </motion.p>

          <h1 className="font-display text-[13vw] leading-[0.95] lg:text-[8.5vw] xl:text-[7.5rem] font-light tracking-tight">
            {title.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${i === 2 ? "italic text-gold" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-lg text-base md:text-lg text-muted leading-relaxed"
          >
            A thoughtful wardrobe — orderly, sublime, and made to serve for years.
            Each garment is an expression of identity, cut with restraint and crafted
            without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/shop"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wide overflow-hidden"
            >
              <span className="relative z-10">Shop the edition</span>
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute inset-0 -z-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition"
            >
              Our atelier
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero visual — real product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <Link
            to={`/product/${heroProduct.id}`}
            className="block relative aspect-[3/4] rounded-[2px] overflow-hidden bg-[#d9cfc0] group"
          >
            {!imgFailed ? (
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                onError={() => setImgFailed(true)}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
            ) : (
              <HeroSVG />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent" />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-bone"
            >
              <div>
                <p className="eyebrow text-bone/70">Look 01</p>
                <p className="font-display text-2xl">{heroProduct.name}</p>
              </div>
              <p className="text-sm tracking-wider2">{formatPrice(heroProduct.price)}</p>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hidden md:flex items-center gap-4 mt-6"
          >
            <div className="rule flex-1" />
            <p className="eyebrow">Made in Poland</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}

/** Fallback illustration when the hero image fails to load */
function HeroSVG() {
  return (
    <svg viewBox="0 0 600 800" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e9dfcf" />
          <stop offset="60%" stopColor="#c9b79a" />
          <stop offset="100%" stopColor="#8a7456" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#g1)" />
      <g fill="#1a1a1a" opacity="0.82">
        <ellipse cx="300" cy="200" rx="58" ry="70" />
        <path d="M230 300 Q300 260 370 300 L388 520 Q360 560 300 560 Q240 560 212 520 Z" />
        <path d="M300 560 L282 780 L268 780 L262 560 Z" />
        <path d="M300 560 L318 780 L332 780 L338 560 Z" />
      </g>
      <rect width="600" height="800" fill="url(#g2)" />
    </svg>
  );
}
