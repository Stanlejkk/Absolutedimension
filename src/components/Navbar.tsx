import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "New", href: "#featured" },
  { label: "Collections", href: "#collections" },
  { label: "Atelier", href: "#story" },
  { label: "Editorial", href: "#editorial" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">Absolut Dimension</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm tracking-wide text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-xs uppercase tracking-wider2 text-ink/70 hover:text-ink">
            EN / PL
          </button>
          <button
            aria-label="Search"
            className="hidden md:grid place-items-center h-9 w-9 rounded-full hover:bg-ink/5 transition"
          >
            <SearchIcon />
          </button>
          <button
            aria-label="Cart"
            className="relative grid place-items-center h-9 w-9 rounded-full hover:bg-ink/5 transition"
          >
            <BagIcon />
            <span className="absolute -top-0.5 -right-0.5 grid place-items-center h-4 w-4 rounded-full bg-ink text-bone text-[10px] font-medium">
              0
            </span>
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-9 w-9 rounded-full hover:bg-ink/5 transition"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-ink/10 bg-bone/95 backdrop-blur"
          >
            <ul className="container-x py-6 space-y-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-3xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo() {
  return (
    <svg viewBox="0 0 220 40" className="h-6 md:h-7 w-auto" fill="none">
      <text
        x="0"
        y="28"
        fontFamily="Cormorant Garamond, serif"
        fontSize="26"
        fontWeight="500"
        letterSpacing="4"
        fill="currentColor"
      >
        ABSOLUT
      </text>
      <text
        x="124"
        y="28"
        fontFamily="Cormorant Garamond, serif"
        fontSize="26"
        fontWeight="300"
        fontStyle="italic"
        letterSpacing="2"
        fill="currentColor"
      >
        dimension
      </text>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 8h14l-1.2 12.1a1.5 1.5 0 0 1-1.5 1.4H7.7a1.5 1.5 0 0 1-1.5-1.4L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <motion.path
        animate={{ d: open ? "M6 6l12 12" : "M4 8h16" }}
        transition={{ duration: 0.3 }}
        strokeLinecap="round"
      />
      <motion.path
        animate={{ d: open ? "M18 6l-12 12" : "M4 16h16", opacity: open ? 1 : 1 }}
        transition={{ duration: 0.3 }}
        strokeLinecap="round"
      />
    </svg>
  );
}
