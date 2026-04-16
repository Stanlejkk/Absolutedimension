import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image: "/img/hero/hero-1.png",
    eyebrow: "Spring / Summer — Edition 07",
    title: "Sublime silhouettes,\ndesigned to endure.",
  },
  {
    image: "/img/hero/hero-2.jpg",
    eyebrow: "The Monaco Chapter",
    title: "Harmony of\nluxury.",
  },
  {
    image: "/img/hero/hero-3.png",
    eyebrow: "Made in Poland",
    title: "An orderly wardrobe,\nworn for years.",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1 flex items-center">
          <div className="container-x w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <p className="eyebrow text-bone/80 mb-6">{slide.eyebrow}</p>
                <h1 className="font-display text-[12vw] leading-[0.95] md:text-[8vw] lg:text-[6.5rem] xl:text-[7.5rem] font-light tracking-tight whitespace-pre-line">
                  {slide.title}
                </h1>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/shop"
                    className="group relative inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-3 text-sm tracking-wide overflow-hidden"
                  >
                    <span className="relative z-10">Discover</span>
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
                    className="inline-flex items-center gap-2 rounded-full border border-bone/40 text-bone px-7 py-3 text-sm tracking-wide hover:bg-bone hover:text-ink transition"
                  >
                    Our atelier
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="container-x pb-10 md:pb-14 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative h-[2px] w-10 md:w-14 overflow-hidden bg-bone/25"
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-bone transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
            <span className="ml-4 eyebrow text-bone/70">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="eyebrow text-bone/70">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="block h-6 w-px bg-bone/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
