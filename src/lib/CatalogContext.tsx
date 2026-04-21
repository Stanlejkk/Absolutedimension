import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  blogPosts as seedBlogPosts,
  collections as seedCollections,
  products as seedProducts,
  type BlogPost,
  type Collection,
  type Product,
  type ProductCategory,
} from "./data";
import {
  isSupabaseConfigured,
  supabase,
  type BlogPostRow,
  type CollectionRow,
  type ProductRow,
} from "./supabase";
import type { BlogBlock } from "./blog-bodies";

/**
 * Catalog context.
 *
 * Holds the three top-level catalog collections (products, collections, blog
 * posts) for the whole app. State is initialised synchronously from the seed
 * bundled in `./data.ts` so the UI renders immediately. If a Supabase client
 * is configured, we kick off fetches in parallel and replace the seeded state
 * once the server responds. Any error leaves the seed in place — the UI never
 * flips to an empty catalog.
 */

export interface CatalogState {
  products: Product[];
  collections: Collection[];
  blogPosts: BlogPost[];
  /** True once Supabase has responded (or immediately, in seed-only mode). */
  isReady: boolean;
  /** True while the initial Supabase fetch is in flight. */
  isLoading: boolean;
}

const CatalogContext = createContext<CatalogState | null>(null);

function productFromRow(r: ProductRow): Product {
  return {
    id: r.id,
    name: r.name,
    price: r.price,
    category: r.category as ProductCategory,
    collection: r.collection,
    image: r.image,
    description: { en: r.description_en, pl: r.description_pl },
    sizes: r.sizes ?? [],
    featured: r.featured || undefined,
    newArrival: r.new_arrival || undefined,
    stockQuantity: typeof r.stock_quantity === "number" ? r.stock_quantity : undefined,
  };
}

function collectionFromRow(r: CollectionRow): Collection {
  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    image: r.image,
    description: { en: r.description_en, pl: r.description_pl },
  };
}

function blogPostFromRow(r: BlogPostRow): BlogPost {
  return {
    id: r.id,
    slug: r.slug,
    title: { en: r.title_en, pl: r.title_pl },
    excerpt: { en: r.excerpt_en, pl: r.excerpt_pl },
    image: r.image,
    date: r.date,
    author: r.author,
    body: Array.isArray(r.body) ? (r.body as BlogBlock[]) : [],
  };
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [collections, setCollections] = useState<Collection[]>(seedCollections);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(seedBlogPosts);
  const [isReady, setIsReady] = useState(!isSupabaseConfigured);
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    let cancelled = false;

    const client = supabase;
    (async () => {
      const [productsRes, collectionsRes, blogRes] = await Promise.all([
        client.from("products").select("*").returns<ProductRow[]>(),
        client.from("collections").select("*").returns<CollectionRow[]>(),
        client
          .from("blog_posts")
          .select("*")
          .order("date", { ascending: false })
          .returns<BlogPostRow[]>(),
      ]);

      if (cancelled) return;

      if (!productsRes.error && productsRes.data && productsRes.data.length > 0) {
        setProducts(productsRes.data.map(productFromRow));
      }
      if (!collectionsRes.error && collectionsRes.data && collectionsRes.data.length > 0) {
        setCollections(collectionsRes.data.map(collectionFromRow));
      }
      if (!blogRes.error && blogRes.data && blogRes.data.length > 0) {
        setBlogPosts(blogRes.data.map(blogPostFromRow));
      }

      setIsLoading(false);
      setIsReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<CatalogState>(
    () => ({ products, collections, blogPosts, isReady, isLoading }),
    [products, collections, blogPosts, isReady, isLoading],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalogState(): CatalogState {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalogState must be used inside a <CatalogProvider>.");
  return ctx;
}
