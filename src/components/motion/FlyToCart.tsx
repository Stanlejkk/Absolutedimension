import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

interface Flight {
  id: number;
  image: string;
  from: { x: number; y: number; w: number; h: number };
  to: { x: number; y: number };
  arcX: number;
}

interface FlyToCartContextValue {
  /** Register the element (typically the cart button) that flights land on. */
  registerTarget: (el: HTMLElement | null) => void;
  /** Emit a flight from a source rect to the registered target. */
  fly: (opts: { from: DOMRect; image: string }) => void;
}

const FlyToCartContext = createContext<FlyToCartContextValue | null>(null);

/**
 * Portal-based fly-to-cart overlay. Callers register a target element (e.g.
 * the navbar bag icon); any piece of UI can then `fly()` an image from a
 * source rect along a soft arc that lands on that target with a little scale
 * pop. The arc is achieved with keyframed `x` + a single-dip `y`.
 */
export function FlyToCartProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const targetRef = useRef<HTMLElement | null>(null);
  const [flights, setFlights] = useState<Flight[]>([]);
  const idRef = useRef(0);

  const registerTarget = useCallback((el: HTMLElement | null) => {
    targetRef.current = el;
  }, []);

  const fly = useCallback<FlyToCartContextValue["fly"]>(
    ({ from, image }) => {
      if (reduced) return;
      const target = targetRef.current;
      if (!target) return;
      const tRect = target.getBoundingClientRect();
      const id = ++idRef.current;
      const flight: Flight = {
        id,
        image,
        from: { x: from.left, y: from.top, w: from.width, h: from.height },
        to: { x: tRect.left + tRect.width / 2, y: tRect.top + tRect.height / 2 },
        arcX: (from.left + from.width / 2 + tRect.left) / 2,
      };
      setFlights((prev) => [...prev, flight]);
    },
    [reduced],
  );

  const remove = useCallback((id: number) => {
    setFlights((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // Light cleanup in case a flight stalls.
  useEffect(() => {
    if (!flights.length) return;
    const ids = flights.map((f) => f.id);
    const t = window.setTimeout(() => {
      setFlights((prev) => prev.filter((f) => !ids.includes(f.id)));
    }, 1600);
    return () => window.clearTimeout(t);
  }, [flights]);

  const value = useMemo(() => ({ registerTarget, fly }), [registerTarget, fly]);

  const portal =
    typeof document !== "undefined"
      ? createPortal(
          <div className="pointer-events-none fixed inset-0 z-[90]">
            <AnimatePresence>
              {flights.map((f) => {
                const duration = 0.95;
                return (
                  <motion.img
                    key={f.id}
                    src={f.image}
                    alt=""
                    aria-hidden
                    initial={{
                      x: f.from.x,
                      y: f.from.y,
                      width: f.from.w,
                      height: f.from.h,
                      borderRadius: 0,
                      opacity: 1,
                      rotate: 0,
                    }}
                    animate={{
                      x: [f.from.x, f.arcX, f.to.x - 16],
                      y: [f.from.y, (f.from.y + f.to.y) / 2 - 140, f.to.y - 16],
                      width: [f.from.w, f.from.w * 0.4, 32],
                      height: [f.from.h, f.from.h * 0.4, 32],
                      borderRadius: [0, 6, 999],
                      rotate: [0, -8, 6],
                      opacity: [1, 1, 0.9],
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      duration,
                      times: [0, 0.55, 1],
                      ease: [0.55, 0.05, 0.2, 1],
                    }}
                    onAnimationComplete={() => remove(f.id)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      objectFit: "cover",
                      objectPosition: "top",
                      boxShadow: "0 18px 40px -12px rgba(0,0,0,0.35)",
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </div>,
          document.body,
        )
      : null;

  return (
    <FlyToCartContext.Provider value={value}>
      {children}
      {portal}
    </FlyToCartContext.Provider>
  );
}

export function useFlyToCart() {
  const ctx = useContext(FlyToCartContext);
  if (!ctx) throw new Error("useFlyToCart must be used inside <FlyToCartProvider>.");
  return ctx;
}
