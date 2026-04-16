/**
 * i18n core types.
 *
 * The entire site operates in exactly two locales. Polish is the default
 * (shown on first visit, stored under "locale" in localStorage). English
 * is the secondary locale, available via the EN/PL switcher in the navbar.
 *
 * `LocalizedString` is the shape used everywhere inside the product / blog /
 * collection data so that a single source of truth carries both translations.
 * Resolving to a plain string happens at the view layer through the
 * `useCatalog` hooks, which read the current locale from `LocaleContext`.
 */

export type Locale = "pl" | "en";

export const LOCALES: readonly Locale[] = ["pl", "en"] as const;

export const DEFAULT_LOCALE: Locale = "pl";

/**
 * A piece of user-visible text that must appear in both languages.
 * Authors fill both fields; the view layer picks one based on current locale.
 */
export interface LocalizedString {
  en: string;
  pl: string;
}

/** localStorage key used to persist the user's choice across visits. */
export const LOCALE_STORAGE_KEY = "locale";
