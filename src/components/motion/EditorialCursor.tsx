import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Site-wide editorial cursor. Renders a tiny centred dot that trails a larger
 * soft ring; when the pointer crosses an interactive element the ring inflates
 * and reveals an optional word label from `data-cursor`. Hidden on coarse
 * pointers and when the user prefers reduced motion.
 */
export default function EditorialCursor() {
  const reduced = useReducedMotion();
  const [supported, setSupported] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.3 });
  const rx = useSpring(x, { stiffness: 170, damping: 22, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 170, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setSupported(fine);
  }, []);

  useEffect(() => {
    if (!supported || reduced) return;

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const isInteractive = (el: Element | null): HTMLElement | null => {
      let node = el as HTMLElement | null;
      while (node && node !== document.body) {
        if (node.matches?.("a,button,[data-cursor],[role='button'],input,select,textarea,label")) {
          return node;
        }
        node = node.parentElement;
      }
      return null;
    };

    const handleOver = (e: PointerEvent) => {
      const hit = isInteractive(e.target as Element);
      if (hit) {
        setActive(true);
        setLabel(hit.getAttribute("data-cursor"));
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
    };
  }, [supported, reduced, x, y, visible]);

  useEffect(() => {
    if (!supported || reduced) return;
    document.documentElement.classList.add("editorial-cursor");
    return () => {
      document.documentElement.classList.remove("editorial-cursor");
    };
  }, [supported, reduced]);

  if (!supported || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        style={{ x: sx, y: sy }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-[3px] -left-[3px]"
      >
        <span className="block h-1.5 w-1.5 rounded-full bg-ink mix-blend-difference" />
      </motion.div>
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{
          scale: active ? 2.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="absolute -top-5 -left-5"
      >
        <span
          className={`relative block h-10 w-10 rounded-full border border-ink/60 mix-blend-difference ${
            label ? "bg-ink/10" : ""
          }`}
        >
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 grid place-items-center text-[9px] uppercase tracking-wider2 text-bone"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.div>
    </div>
  );
}
