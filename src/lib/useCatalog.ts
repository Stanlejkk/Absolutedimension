/**
 * Locale-resolved catalog hooks.
 *
 * The raw catalog in ./data.ts carries `LocalizedString` on every translated
 * field. Components never want to deal with that — they want a plain object
 * with `description: string` for the current locale. These hooks do that
 * resolution once per render, memoised against the locale.
 *
 * Pattern:
 *   const products = useProducts();      // Product[]  (with plain-string fields)
 *   const labels   = useCategoryLabels();// Record<ProductCategory, string>
 *   const price    = useFormatPrice();   // (grosze: number) => "2 800 zł"
 */

import { useMemo } from "react";
import { useLocale } from "../i18n";
import {
  blogPosts as blogPostsSource,
  categoryLabels as categoryLabelsSource,
  collections as collectionsSource,
  formatPrice,
  products as productsSource,
  type BlogBlock,
  type BlogPost as BlogPostSource,
  type Collection as CollectionSource,
  type Product as ProductSource,
  type ProductCategory,
} from "./data";

/* ─── Resolved types (plain strings for translated fields) ────────────────── */

export interface ResolvedProduct extends Omit<ProductSource, "description"> {
  description: string;
}

export interface ResolvedCollection extends Omit<CollectionSource, "description"> {
  description: string;
}

export type ResolvedBlogBlock =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "h2"; text: string }
  | { type: "signoff"; text: string };

export interface ResolvedBlogPost extends Omit<BlogPostSource, "title" | "excerpt" | "body"> {
  title: string;
  excerpt: string;
  body: ResolvedBlogBlock[];
}

/* ─── Internal: translate one item ───────────────────────────────────────── */

function resolveProduct(p: ProductSource, pick: (ls: { en: string; pl: string }) => string): ResolvedProduct {
  return { ...p, description: pick(p.description) };
}

function resolveCollection(c: CollectionSource, pick: (ls: { en: string; pl: string }) => string): ResolvedCollection {
  return { ...c, description: pick(c.description) };
}

function resolveBlogBlock(block: BlogBlock, pick: (ls: { en: string; pl: string }) => string): ResolvedBlogBlock {
  switch (block.type) {
    case "p":
    case "lead":
    case "h2":
    case "signoff":
      return { type: block.type, text: pick(block.text) };
    case "quote":
      return {
        type: "quote",
        text: pick(block.text),
        cite: block.cite ? pick(block.cite) : undefined,
      };
  }
}

function resolveBlogPost(
  b: BlogPostSource,
  pick: (ls: { en: string; pl: string }) => string,
): ResolvedBlogPost {
  return {
    ...b,
    title: pick(b.title),
    excerpt: pick(b.excerpt),
    body: b.body.map((block) => resolveBlogBlock(block, pick)),
  };
}

/* ─── Hooks ──────────────────────────────────────────────────────────────── */

export function useProducts(): ResolvedProduct[] {
  const { pick, locale } = useLocale();
  return useMemo(() => productsSource.map((p) => resolveProduct(p, pick)), [pick, locale]);
}

export function useProduct(id: string | undefined): ResolvedProduct | undefined {
  const { pick, locale } = useLocale();
  return useMemo(() => {
    if (!id) return undefined;
    const p = productsSource.find((x) => x.id === id);
    return p ? resolveProduct(p, pick) : undefined;
  }, [id, pick, locale]);
}

export function useProductsByCollection(slug: string | undefined): ResolvedProduct[] {
  const { pick, locale } = useLocale();
  return useMemo(() => {
    if (!slug) return [];
    return productsSource.filter((p) => p.collection === slug).map((p) => resolveProduct(p, pick));
  }, [slug, pick, locale]);
}

export function useFeaturedProducts(): ResolvedProduct[] {
  const { pick, locale } = useLocale();
  return useMemo(
    () => productsSource.filter((p) => p.featured).map((p) => resolveProduct(p, pick)),
    [pick, locale],
  );
}

export function useNewArrivals(): ResolvedProduct[] {
  const { pick, locale } = useLocale();
  return useMemo(
    () => productsSource.filter((p) => p.newArrival).map((p) => resolveProduct(p, pick)),
    [pick, locale],
  );
}

export function useCollections(): ResolvedCollection[] {
  const { pick, locale } = useLocale();
  return useMemo(
    () => collectionsSource.map((c) => resolveCollection(c, pick)),
    [pick, locale],
  );
}

export function useCollection(slug: string | undefined): ResolvedCollection | undefined {
  const { pick, locale } = useLocale();
  return useMemo(() => {
    if (!slug) return undefined;
    const c = collectionsSource.find((x) => x.slug === slug);
    return c ? resolveCollection(c, pick) : undefined;
  }, [slug, pick, locale]);
}

export function useBlogPosts(): ResolvedBlogPost[] {
  const { pick, locale } = useLocale();
  return useMemo(
    () => blogPostsSource.map((b) => resolveBlogPost(b, pick)),
    [pick, locale],
  );
}

export function useBlogPost(slug: string | undefined): ResolvedBlogPost | undefined {
  const { pick, locale } = useLocale();
  return useMemo(() => {
    if (!slug) return undefined;
    const b = blogPostsSource.find((x) => x.slug === slug);
    return b ? resolveBlogPost(b, pick) : undefined;
  }, [slug, pick, locale]);
}

export function useCategoryLabels(): Record<ProductCategory, string> {
  const { pick, locale } = useLocale();
  return useMemo(() => {
    const out = {} as Record<ProductCategory, string>;
    (Object.keys(categoryLabelsSource) as ProductCategory[]).forEach((key) => {
      out[key] = pick(categoryLabelsSource[key]);
    });
    return out;
  }, [pick, locale]);
}

export function useCategoryLabel(cat: ProductCategory): string {
  return useCategoryLabels()[cat];
}

/**
 * Returns a locale-bound price formatter.
 * Use this rather than calling `formatPrice` directly in components so that a
 * language switch re-renders prices with the new separator.
 */
export function useFormatPrice(): (grosze: number) => string {
  const { locale } = useLocale();
  return useMemo(() => (grosze: number) => formatPrice(grosze, locale), [locale]);
}

/* Re-export types so consumers can import Product from useCatalog without
 * having to also import from data.ts. */
export type { ProductCategory };
