import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { forwardRef, useCallback, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  strength?: number;
} & HTMLMotionProps<"div">;

/**
 * Cursor-magnetic wrapper — the element drifts toward the pointer when near,
 * then springs back when the cursor leaves. A staple of premium sites.
 */
const MagneticButton = forwardRef<HTMLDivElement, Props>(function MagneticButton(
  { children, strength = 0.35, className, ...rest },
  _ref,
) {
  const reduced = useReducedMotion();
  const localRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.4 });

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = localRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX * strength);
      y.set(relY * strength);
    },
    [strength, x, y, reduced],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={localRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduced ? undefined : { x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

export default MagneticButton;
