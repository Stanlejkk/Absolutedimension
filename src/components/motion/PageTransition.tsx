import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

/**
 * Route-level curtain: page fades + slides in while a sheer bone overlay
 * sweeps out. Sits under <Routes> so every navigation feels intentional.
 */
export default function PageTransition({ children }: Props) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none fixed inset-0 z-[55] origin-top bg-bone"
      />
      {children}
    </motion.div>
  );
}
