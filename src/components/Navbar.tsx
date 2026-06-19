import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../i18n";
import { useCart } from "../lib/CartContext";
import { useAuth } from "../lib/AuthContext";
import { useFlyToCart } from "./motion/FlyToCart";
import SpringNumber from "./motion/SpringNumber";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, locale, toggle } = useLocale();
  const { count: cartCount, openCart } = useCart();
  const { user } = useAuth();
  const { registerTarget } = useFlyToCart();
  const cartBtnRef = useRef<HTMLButtonElement>(null);
  const accountHref = user ? "/account" : "/login";

  // The nav needs to read against whatever sits behind it. The home route
  // is the only one with a dark hero image — every other route lives on
  // the bone-light page body. So the palette is driven by the route, and
  // only the translucent background tint depends on scroll.
  const isHome = pathname === "/";
  const darkNav = isHome;

  const links = useMemo(
    () => [
      { label: t("nav.shop"), to: "/shop" },
      { label: t("nav.collections"), to: "/collections" },
      { label: t("nav.atelier"), to: "/about" },
      { label: t("nav.editorial"), to: "/blog" },
      { label: t("nav.contact"), to: "/contact" },
    ],
    [t],
  );

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

  useEffect(() => {
    registerTarget(cartBtnRef.current);
    return () => registerTarget(null);
  }, [registerTarget]);

  const background = scrolled
    ? darkNav
      ? "bg-ink/75 backdrop-blur-md border-b border-bone/10"
      : "bg-bone/85 backdrop-blur-md border-b border-ink/10"
    : "bg-transparent";
  const textClass = darkNav ? "text-bone" : "text-ink";
  const mutedTextClass = darkNav ? "text-bone/90 hover:text-bone" : "text-ink/85 hover:text-ink";
  const hoverRing = darkNav ? "hover:bg-bone/10" : "hover:bg-ink/5";
  const underlineColor = darkNav ? "bg-bone" : "bg-ink";

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${background} ${textClass}`}
    >
      <motion.nav
        animate={{ height: scrolled ? 60 : 80 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container-x flex items-center justify-between"
      >
        <Link to="/" className={`flex items-center gap-2 ${textClass}`}>
          <Logo invert={!darkNav} />
          <span className="sr-only">Absolut Dimension</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to} className="relative">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `group relative inline-block text-sm font-medium tracking-wide transition-colors ${
                    isActive ? textClass : mutedTextClass
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative inline-block overflow-hidden">
                      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                        {l.label}
                      </span>
                      <span
                        aria-hidden
                        className="absolute inset-0 inline-block translate-y-full text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                      >
                        {l.label}
                      </span>
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-px ${underlineColor}`}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 ${textClass}`}>
          <button
            type="button"
            onClick={toggle}
            aria-label={t("nav.switchLanguageAria")}
            aria-pressed={locale === "en"}
            title={t("nav.switchLanguageAria")}
            className={`hidden md:block text-xs font-medium uppercase tracking-wider2 ${mutedTextClass} transition-colors`}
          >
            <span className={locale === "pl" ? textClass : "opacity-60"}>PL</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={locale === "en" ? textClass : "opacity-60"}>EN</span>
          </button>
          <button
            aria-label={t("nav.searchAria")}
            className={`hidden md:grid place-items-center h-9 w-9 rounded-full ${textClass} ${hoverRing} transition`}
          >
            <SearchIcon />
          </button>
          <Link
            to={accountHref}
            aria-label={t("auth.navAria")}
            title={user ? t("auth.navAccount") : t("auth.navSignIn")}
            className={`relative grid place-items-center h-9 w-9 rounded-full ${textClass} ${hoverRing} transition`}
          >
            <AccountIcon />
            {user?.role === "admin" && (
              <span
                aria-hidden="true"
                className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold"
              />
            )}
          </Link>
          <button
            ref={cartBtnRef}
            type="button"
            onClick={openCart}
            aria-label={t("nav.bagAria")}
            className={`relative grid place-items-center h-9 w-9 rounded-full ${textClass} ${hoverRing} transition`}
          >
            <BagIcon />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key="cart-badge"
                  aria-hidden="true"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 520, damping: 22 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[1.1rem] h-[1.1rem] px-1 rounded-full bg-gold text-ink text-[10px] font-medium leading-none grid place-items-center tabular-nums overflow-hidden"
                >
                  <SpringNumber
                    value={cartCount > 99 ? 99 : cartCount}
                    duration={0.6}
                    format={(v) => (cartCount > 99 ? "99+" : String(Math.round(v)))}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            aria-label={t("nav.menuAria")}
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden grid place-items-center h-9 w-9 rounded-full ${textClass} ${hoverRing} transition`}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </motion.nav>

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
                  <Link to={l.to} className="block font-display text-3xl text-ink">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * links.length, duration: 0.4 }}
                className="pt-4 border-t border-ink/10"
              >
                {user ? (
                  <Link to="/account" className="block font-display text-2xl text-ink">
                    {t("auth.navAccount")}
                  </Link>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link to="/login" className="block font-display text-2xl text-ink">
                      {t("auth.navSignIn")}
                    </Link>
                    <Link
                      to="/register"
                      className="block text-sm tracking-wider2 uppercase text-ink/70 hover:text-ink"
                    >
                      {t("auth.navRegister")}
                    </Link>
                  </div>
                )}
                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    className="mt-2 block text-sm tracking-wider2 uppercase text-ink/70 hover:text-ink"
                  >
                    {t("auth.account.adminPanel")}
                  </Link>
                )}
              </motion.li>
              <motion.li
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * (links.length + 1), duration: 0.4 }}
                className="pt-4 border-t border-ink/10"
              >
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={t("nav.switchLanguageAria")}
                  className="text-xs font-medium uppercase tracking-wider2 text-ink/70 hover:text-ink transition-colors"
                >
                  <span className={locale === "pl" ? "text-ink" : "text-ink/50"}>PL</span>
                  <span className="mx-1 text-ink/30">/</span>
                  <span className={locale === "en" ? "text-ink" : "text-ink/50"}>EN</span>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo({ invert = false }: { invert?: boolean }) {
  // The source PNG isn't pure white — it carries warm tones, so CSS
  // `invert(1)` shifts the hue to a blueish-green that reads as a
  // coloured logo on light pages. `brightness(0)` collapses every
  // opaque pixel to pure black while keeping the transparent canvas,
  // giving a clean ink-coloured mark on the bone body without any
  // filter-based flashes.
  return (
    <img
      src="https://www.absolutdimension.com/cdn/shop/files/logo_www_transparent.png?v=1760455149&width=400"
      alt="Absolut Dimension"
      width={400}
      height={69}
      className={`h-6 md:h-7 w-auto ${invert ? "brightness-0" : ""}`}
    />
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

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
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
