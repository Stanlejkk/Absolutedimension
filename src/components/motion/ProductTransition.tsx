import { motion } from "framer-motion";
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

interface CaptureInput {
  productId: string;
  image: string;
  rect: DOMRect;
}

interface Stored extends CaptureInput {
  ts: number;
}

interface ProductTransitionContextValue {
  /** Call from a product card on click — records the source rect + image. */
  capture: (input: CaptureInput) => void;
  /** Called by the product page to consume a pending capture for that id. */
  consume: (productId: string, targetRect: DOMRect | null) => void;
}

const ProductTransitionContext =
  createContext<ProductTransitionContextValue | null>(null);

interface ActiveFlight {
  id: number;
  image: string;
  from: DOMRect;
  to: DOMRect;
}

/**
 * Manual shared-element transition for the product card → product page
 * hero image. Because `<AnimatePresence mode="wait">` swaps the old route
 * out before the new one mounts, `layoutId` can't do it across routes.
 * Instead we record the clicked card's image rect at click time, and when
 * the product page mounts, an overlay image FLIPs from that rect to the
 * target rect before fading out.
 */
export function ProductTransitionProvider({ children }: { children: ReactNode }) {
  const stored = useRef<Stored | null>(null);
  const [flight, setFlight] = useState<ActiveFlight | null>(null);
  const idRef = useRef(0);

  const capture = useCallback<ProductTransitionContextValue["capture"]>(
    ({ productId, image, rect }) => {
      stored.current = {
        productId,
        image,
        rect,
        ts: Date.now(),
      };
    },
    [],
  );

  const consume = useCallback<ProductTransitionContextValue["consume"]>(
    (productId, targetRect) => {
      const s = stored.current;
      if (!s || s.productId !== productId || !targetRect) return;
      if (Date.now() - s.ts > 1500) {
        stored.current = null;
        return;
      }
      stored.current = null;
      setFlight({
        id: ++idRef.current,
        image: s.image,
        from: s.rect,
        to: targetRect,
      });
    },
    [],
  );

  useEffect(() => {
    if (!flight) return;
    const t = window.setTimeout(() => setFlight(null), 850);
    return () => window.clearTimeout(t);
  }, [flight]);

  const value = useMemo(() => ({ capture, consume }), [capture, consume]);

  const portal =
    flight && typeof document !== "undefined"
      ? createPortal(
          <motion.div
            key={flight.id}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[85]"
          >
            <motion.img
              src={flight.image}
              alt=""
              initial={{
                x: flight.from.left,
                y: flight.from.top,
                width: flight.from.width,
                height: flight.from.height,
                opacity: 1,
              }}
              animate={{
                x: flight.to.left,
                y: flight.to.top,
                width: flight.to.width,
                height: flight.to.height,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
                opacity: { duration: 0.7, times: [0, 0.82, 1], ease: "easeOut" },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </motion.div>,
          document.body,
        )
      : null;

  return (
    <ProductTransitionContext.Provider value={value}>
      {children}
      {portal}
    </ProductTransitionContext.Provider>
  );
}

export function useProductTransition() {
  const ctx = useContext(ProductTransitionContext);
  if (!ctx)
    throw new Error(
      "useProductTransition must be used inside <ProductTransitionProvider>.",
    );
  return ctx;
}
