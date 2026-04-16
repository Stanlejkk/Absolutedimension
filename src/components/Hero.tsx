import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocale, type LocalizedString } from "../i18n";
import MagneticButton from "./motion/MagneticButton";
import SplitText from "./motion/SplitText";

interface Slide {
  image: string;
  eyebrow: LocalizedString;
  title: LocalizedString;
}

const SLIDES: Slide[] = [
  {
    image: "/img/hero/hero-1.png",
    eyebrow: {
      en: "Spring / Summer — Edition 07",
      pl: "Wiosna / Lato — Edycja 07",
    },
    title: {
      en: "Sublime silhouettes,\ndesigned to endure.",
      pl: "Szlachetne sylwetki,\nzaprojektowane na lata.",
    },
  },
  {
    image: "/img/hero/hero-2.jpg",
    eyebrow: {
      en: "The Monaco Chapter",
      pl: "Rozdział Monaco",
    },
    title: {
      en: "Harmony of\nluxury.",
      pl: "Harmonia\nluksusu.",
    },
  },
  {
    image: "/img/hero/hero-3.png",
    eyebrow: {
      en: "Made in Poland",
      pl: "Szyte w Polsce",
    },
    title: {
      en: "An orderly wardrobe,\nworn for years.",
      pl: "Uporządkowana garderoba,\nnoszona przez lata.",
    },
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { t, pick } = useLocale();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax depth — the image drifts down as the viewer scrolls past,
  // while text lifts slightly, creating a shallow 3D hierarchy.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const smoothTextY = useSpring(textY, { stiffness: 110, damping: 22 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{ y: imageY, scale: imageScale }}
        >
          {/* Ken Burns slow drift */}
          <motion.img
            src={slide.image}
            alt=""
            aria-hidden
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/70" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        style={{ y: smoothTextY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col"
      >
        <div className="flex-1 flex items-center">
          <div className="container-x w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="eyebrow text-bone/80 mb-6"
                >
                  {pick(slide.eyebrow)}
                </motion.p>

                <SplitText
                  key={`${index}-${pick(slide.title)}`}
                  text={pick(slide.title)}
                  by="word"
                  stagger={0.06}
                  delay={0.1}
                  as="h1"
                  className="block font-display text-[12vw] leading-[0.95] md:text-[8vw] lg:text-[6.5rem] xl:text-[7.5rem] font-light tracking-tight"
                />

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-wrap gap-3"
                >
                  <MagneticButton strength={0.3} className="inline-block">
                    <Link
                      to="/shop"
                      className="group relative inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-3 text-sm tracking-wide overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-bone">
                        {t("hero.ctaShop")}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className="relative z-10 h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-bone"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="absolute inset-0 -z-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.25} className="inline-block">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-full border border-bone/40 text-bone px-7 py-3 text-sm tracking-wide hover:bg-bone hover:text-ink transition"
                    >
                      {t("hero.ctaStory")}
                    </Link>
                  </MagneticButton>
                </motion.div>
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
                aria-label={t("hero.goToSlide", { n: i + 1 })}
                className="group relative h-[2px] w-10 md:w-14 overflow-hidden bg-bone/25"
              >
                <motion.span
                  key={`${i}-${i === index}`}
                  className="absolute inset-y-0 left-0 bg-bone"
                  initial={{ width: i === index ? "0%" : "0%" }}
                  animate={{ width: i === index ? "100%" : "0%" }}
                  transition={{
                    duration: i === index ? INTERVAL / 1000 : 0.6,
                    ease: i === index ? "linear" : [0.22, 1, 0.36, 1],
                  }}
                />
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 bg-bone/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index ? "w-0" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
            <span className="ml-4 eyebrow text-bone/70 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="eyebrow text-bone/70">{t("hero.scroll")}</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="block h-6 w-px bg-bone/50"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
