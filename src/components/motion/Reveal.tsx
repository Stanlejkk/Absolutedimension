import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition">;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  as = "div",
  ...rest
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}
