import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "Atelier", to: "/about" },
  { label: "Editorial", to: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 text-bone transition-colors duration-500 ${
        scrolled ? "bg-ink/70 backdrop-blur-md border-b border-bone/10" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-bone">
          <Logo />
          <span className="sr-only">Absolut Dimension</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `group relative text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-bone" : "text-bone/90 hover:text-bone"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-bone transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-bone">
          <button className="hidden md:block text-xs font-medium uppercase tracking-wider2 text-bone/90 hover:text-bone">
            EN / PL
          </button>
          <button
            aria-label="Search"
            className="hidden md:grid place-items-center h-9 w-9 rounded-full text-bone hover:bg-bone/10 transition"
          >
            <SearchIcon />
          </button>
          <Link
            to="/shop"
            aria-label="Shop"
            className="relative grid place-items-center h-9 w-9 rounded-full text-bone hover:bg-bone/10 transition"
          >
            <BagIcon />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-9 w-9 rounded-full text-bone hover:bg-bone/10 transition"
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
                  key={l.to}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link to={l.to} className="block font-display text-3xl">
                    {l.label}
                  </Link>
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
        fontWeight="600"
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
        fontWeight="400"
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
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 8h14l-1.2 12.1a1.5 1.5 0 0 1-1.5 1.4H7.7a1.5 1.5 0 0 1-1.5-1.4L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <motion.path
        animate={{ d: open ? "M6 6l12 12" : "M4 8h16" }}
        transition={{ duration: 0.3 }}
        strokeLinecap="round"
      />
      <motion.path
        animate={{ d: open ? "M18 6l-12 12" : "M4 16h16" }}
        transition={{ duration: 0.3 }}
        strokeLinecap="round"
      />
    </svg>
  );
}
