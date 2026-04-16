import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  value: number;
  format?: (v: number) => string;
  className?: string;
  /** When the display should round — defaults to integer. */
  precision?: number;
  duration?: number;
};

/**
 * Animates a number between values with a soft spring — for prices, totals,
 * cart counts. Defers to `prefers-reduced-motion` and simply sets the final
 * value without transitioning.
 */
export default function SpringNumber({
  value,
  format,
  className,
  precision = 0,
  duration = 0.9,
}: Props) {
  const reduced = useReducedMotion();
  const mv = useMotionValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const factor = Math.pow(10, precision);
        setDisplay(Math.round(latest * factor) / factor);
      },
    });
    return () => controls.stop();
  }, [value, mv, precision, duration, reduced]);

  return (
    <span className={className}>
      {format ? format(display) : display.toLocaleString()}
    </span>
  );
}
