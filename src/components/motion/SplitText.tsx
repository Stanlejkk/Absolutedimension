import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  delay?: number;
  stagger?: number;
  by?: "char" | "word" | "line";
  className?: string;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Line/word/char reveal for editorial headlines.
 * Each segment rides in on a 3D-like y translation with a short stagger — the
 * kind of micro-choreography motion.dev is built for.
 */
export default function SplitText({
  text,
  delay = 0,
  stagger = 0.04,
  by = "word",
  className,
  once = true,
  as: Tag = "span",
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag];

  if (reduced) {
    return <MotionTag className={className}>{text}</MotionTag>;
  }

  const lines = text.split("\n");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {lines.map((line, li) => {
        if (by === "line") {
          return (
            <span
              key={li}
              className="block overflow-hidden"
              style={{ perspective: "800px" }}
            >
              <motion.span
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: "110%", opacity: 0, rotateX: 24 },
                  show: {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    transition: { duration: 0.9, ease: EASE },
                  },
                }}
                aria-hidden
              >
                {line || "\u00A0"}
              </motion.span>
            </span>
          );
        }

        const parts = by === "char" ? Array.from(line) : line.split(" ");
        return (
          <span key={li} className="block overflow-hidden" style={{ perspective: "800px" }}>
            {parts.map((part, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline">
                <motion.span
                  className="inline-block will-change-transform"
                  variants={{
                    hidden: { y: "110%", opacity: 0, rotateX: 18 },
                    show: {
                      y: 0,
                      opacity: 1,
                      rotateX: 0,
                      transition: { duration: 0.8, ease: EASE },
                    },
                  }}
                  aria-hidden
                >
                  {part === "" ? "\u00A0" : part}
                </motion.span>
                {by === "word" && i < parts.length - 1 ? "\u00A0" : null}
              </span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}
