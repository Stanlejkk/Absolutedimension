/**
 * i18n barrel. Import everything from "@/i18n" (or relative path) — all the
 * surface area that the rest of the app needs lives here.
 */

export { LocaleProvider, useLocale, useT } from "./LocaleContext";
export {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_STORAGE_KEY,
  type Locale,
  type LocalizedString,
} from "./types";
export { dictionaries, type Dictionary, type DictionaryKey } from "./locales";
