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

interface Ripple {
  id: number;
  x: number;
  y: number;
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
  const [ripples, setRipples] = useState<Ripple[]>([]);
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

  const remove = useCallback((flight: Flight) => {
    setFlights((prev) => prev.filter((f) => f.id !== flight.id));
    setRipples((prev) => [
      ...prev,
      { id: flight.id, x: flight.to.x, y: flight.to.y },
    ]);
  }, []);

  const dismissRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  // Light cleanup in case a flight stalls.
  useEffect(() => {
    if (!flights.length) return;
    const ids = flights.map((f) => f.id);
    const t = window.setTimeout(() => {
      setFlights((prev) => prev.filter((f) => !ids.includes(f.id)));
    }, 1400);
    return () => window.clearTimeout(t);
  }, [flights]);

  const value = useMemo(() => ({ registerTarget, fly }), [registerTarget, fly]);

  const portal =
    typeof document !== "undefined"
      ? createPortal(
          <div className="pointer-events-none fixed inset-0 z-[90]">
            <AnimatePresence>
              {flights.map((f) => {
                const duration = 0.72;
                const endSize = 24;
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
                      borderRadius: 2,
                      opacity: 1,
                    }}
                    animate={{
                      x: [f.from.x, f.arcX, f.to.x - endSize / 2],
                      y: [
                        f.from.y,
                        (f.from.y + f.to.y) / 2 - 70,
                        f.to.y - endSize / 2,
                      ],
                      width: [f.from.w, f.from.w * 0.45, endSize],
                      height: [f.from.h, f.from.h * 0.45, endSize],
                      borderRadius: [2, 4, 999],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration,
                      times: [0, 0.55, 1],
                      ease: [0.32, 0.72, 0, 1],
                      opacity: {
                        duration,
                        times: [0, 0.7, 1],
                        ease: "easeOut",
                      },
                    }}
                    onAnimationComplete={() => remove(f)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      objectFit: "cover",
                      objectPosition: "top",
                      boxShadow: "0 12px 28px -14px rgba(0,0,0,0.25)",
                    }}
                  />
                );
              })}
            </AnimatePresence>
            <AnimatePresence>
              {ripples.map((r) => (
                <motion.span
                  key={`ripple-${r.id}`}
                  aria-hidden
                  initial={{ opacity: 0.5, scale: 0.25 }}
                  animate={{ opacity: 0, scale: 1.8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={() => dismissRipple(r.id)}
                  style={{
                    position: "absolute",
                    left: r.x - 22,
                    top: r.y - 22,
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    border: "1px solid rgba(13,13,13,0.55)",
                  }}
                />
              ))}
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
