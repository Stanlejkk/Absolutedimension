import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline progress bar that tracks page scroll. Gold on bone — reads as
 * a reading indicator rather than a video seek bar.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-gold to-bone/60"
    />
  );
}
