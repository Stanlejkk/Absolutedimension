import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client singleton.
 *
 * When `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are provided at build
 * time, this module exports a live client and the rest of the app reads its
 * catalog and accounts from Supabase. Without those env vars the export is
 * `null` and the app transparently falls back to the bundled seed data in
 * `./data.ts` — this keeps local dev and static previews working without any
 * cloud setup.
 */

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          storageKey: "ad.auth.supabase.v1",
        },
      })
    : null;

export const isSupabaseConfigured = supabase !== null;

/* ─── Row shapes ──────────────────────────────────────────────────────────── */

export interface ProductRow {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  image: string;
  description_en: string;
  description_pl: string;
  sizes: string[];
  featured: boolean;
  new_arrival: boolean;
  stock_quantity: number;
}

export interface CollectionRow {
  id: string;
  name: string;
  slug: string;
  image: string;
  description_en: string;
  description_pl: string;
}

export interface BlogPostRow {
  id: string;
  slug: string;
  title_en: string;
  title_pl: string;
  excerpt_en: string;
  excerpt_pl: string;
  image: string;
  date: string;
  author: string;
  body: unknown;
}

export interface ProfileRow {
  id: string;
  name: string;
  email: string;
  role: "client" | "admin";
  created_at: string;
}
