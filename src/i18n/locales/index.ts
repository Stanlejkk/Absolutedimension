/**
 * Locale barrel.
 *
 * `Dictionary` is inferred from the English tree so TypeScript will catch any
 * Polish translation that drifts out of structural sync.
 *
 * `DictionaryKey` is a generated union of every valid dotted path (up to a
 * reasonable depth) — that gives `t()` typeahead + compile-time safety.
 */

import { en, type EnDictionary } from "./en";
import { pl } from "./pl";
import type { Locale } from "../types";

export type Dictionary = EnDictionary;

/* -----------------------------------------------------------------------------
 * Dotted-path type — limited to a depth of 4 to keep the compiler quick.
 * Generates keys like "nav.shop", "footer.links.shopAll", etc.
 * ---------------------------------------------------------------------------*/

type Prev = [never, 0, 1, 2, 3, 4];

type Join<A extends string, B extends string> = A extends "" ? B : `${A}.${B}`;

type Paths<T, D extends number = 4> = D extends 0
  ? never
  : T extends string
    ? ""
    : {
        [K in Extract<keyof T, string>]: T[K] extends string
          ? K
          : Join<K, Paths<T[K], Prev[D]>>;
      }[Extract<keyof T, string>];

export type DictionaryKey = Paths<Dictionary>;

export const dictionaries: Record<Locale, Dictionary> = { en, pl };

export { en, pl };
