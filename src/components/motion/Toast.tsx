import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type ToastKind = "success" | "info";

interface ToastItem {
  id: number;
  title: string;
  body?: string;
  kind: ToastKind;
  image?: string;
}

interface ToastContextValue {
  push: (toast: Omit<ToastItem, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const idRef = useRef(0);
  const timeouts = useRef<Map<number, number>>(new Map());

  const dismiss = useCallback((id: number) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
    const timer = timeouts.current.get(id);
    if (timer) {
      window.clearTimeout(timer);
      timeouts.current.delete(id);
    }
  }, []);

  const push = useCallback<ToastContextValue["push"]>(
    (toast) => {
      const id = ++idRef.current;
      setItems((prev) => [...prev, { id, ...toast }]);
      const timer = window.setTimeout(() => dismiss(id), 3200);
      timeouts.current.set(id, timer);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ push }), [push]);

  const portal =
    typeof document !== "undefined"
      ? createPortal(
          <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[80] flex flex-col items-center gap-2 px-4">
            <AnimatePresence>
              {items.map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-auto relative flex w-full max-w-sm items-center gap-3 border border-ink/10 bg-bone/95 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur"
                  role="status"
                >
                  {t.image ? (
                    <motion.img
                      src={t.image}
                      alt=""
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-12 w-10 flex-shrink-0 object-cover object-top"
                    />
                  ) : (
                    <motion.span
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full ${
                        t.kind === "success" ? "bg-ink text-bone" : "bg-ink/10 text-ink"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          d={
                            t.kind === "success"
                              ? "M5 12l5 5L20 7"
                              : "M12 8v5M12 16v.01"
                          }
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-wider2 text-ink">
                      {t.title}
                    </p>
                    {t.body && (
                      <p className="mt-0.5 truncate text-xs text-muted">{t.body}</p>
                    )}
                  </div>
                  <motion.span
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 3.2, ease: "linear" }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-ink/40"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>,
          document.body,
        )
      : null;

  return (
    <ToastContext.Provider value={value}>
      {children}
      {portal}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>.");
  return ctx;
}
