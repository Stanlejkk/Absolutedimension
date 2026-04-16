import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  type Locale,
  type LocalizedString,
} from "./types";
import { dictionaries, type Dictionary, type DictionaryKey } from "./locales";

/* -----------------------------------------------------------------------------
 * Context shape
 * ---------------------------------------------------------------------------*/

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  /** Toggle PL ⇄ EN in one call. Used by the navbar switcher. */
  toggle: () => void;
  /** The resolved UI dictionary for the current locale. */
  dict: Dictionary;
  /**
   * Translate a dotted key from the UI dictionary, e.g. `t("nav.shop")`.
   * Falls back to the key itself if the path does not resolve — this keeps
   * the site usable even during development when a translation is missing.
   */
  t: (key: DictionaryKey, vars?: Record<string, string | number>) => string;
  /** Pick the correct side of a LocalizedString for the current locale. */
  pick: (ls: LocalizedString | string) => string;
  /** Locale-aware number/date formatting helpers. */
  formatDate: (input: Date | string) => string;
  /** Polish plural rules resolver ("one" | "few" | "many" | "other"). */
  plural: (n: number) => Intl.LDMLPluralRule;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/* -----------------------------------------------------------------------------
 * Initial locale — read synchronously so the first paint never flashes EN.
 * ---------------------------------------------------------------------------*/

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && (LOCALES as readonly string[]).includes(stored)) {
      return stored as Locale;
    }
  } catch {
    /* access denied (private mode, etc.) — fall through to default */
  }
  return DEFAULT_LOCALE;
}

/* -----------------------------------------------------------------------------
 * Dotted-path lookup into the dictionary tree.
 * ---------------------------------------------------------------------------*/

function lookup(dict: Dictionary, key: string): string | undefined {
  const segments = key.split(".");
  let node: unknown = dict;
  for (const seg of segments) {
    if (node && typeof node === "object" && seg in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[seg];
    } else {
      return undefined;
    }
  }
  return typeof node === "string" ? node : undefined;
}

/**
 * Very small `{var}` interpolator. Supports pluralization via a pipe-delimited
 * suffix, e.g. "{count, one|few|many|other}" — but for the common case we
 * rely on the `plural()` helper in consumer code instead.
 */
function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name) => {
    const v = vars[name];
    return v === undefined || v === null ? `{${name}}` : String(v);
  });
}

/* -----------------------------------------------------------------------------
 * Provider
 * ---------------------------------------------------------------------------*/

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  // Keep <html lang> in sync so screen readers, hyphenation, and browser
  // translation heuristics all behave correctly.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* swallow write failures — we still update in-memory state */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "pl" ? "en" : "pl";
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = dictionaries[locale];

    const t: LocaleContextValue["t"] = (key, vars) => {
      const found = lookup(dict, key);
      if (found === undefined) {
        // Fall back to the other locale before giving up on the key.
        const other = dictionaries[locale === "pl" ? "en" : "pl"];
        const fallback = lookup(other, key);
        return interpolate(fallback ?? key, vars);
      }
      return interpolate(found, vars);
    };

    const pick: LocaleContextValue["pick"] = (ls) => {
      if (typeof ls === "string") return ls;
      return ls[locale] ?? ls.pl ?? ls.en ?? "";
    };

    const dateFormatter = new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const formatDate: LocaleContextValue["formatDate"] = (input) => {
      const d = typeof input === "string" ? new Date(input) : input;
      if (Number.isNaN(d.getTime())) return typeof input === "string" ? input : "";
      return dateFormatter.format(d);
    };

    const pluralRules = new Intl.PluralRules(locale === "pl" ? "pl-PL" : "en-GB");
    const plural: LocaleContextValue["plural"] = (n) => pluralRules.select(n);

    return { locale, setLocale, toggle, dict, t, pick, formatDate, plural };
  }, [locale, setLocale, toggle]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

/* -----------------------------------------------------------------------------
 * Hooks
 * ---------------------------------------------------------------------------*/

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside a <LocaleProvider>.");
  }
  return ctx;
}

/** Shorthand for components that only need the `t()` function. */
export function useT(): LocaleContextValue["t"] {
  return useLocale().t;
}
