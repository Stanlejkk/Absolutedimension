/**
 * Emit a Supabase seed SQL file from the bundled catalog.
 *
 * Run with: `npx tsx supabase/seed.ts > supabase/seed.sql`
 *
 * The output upserts every collection, product, and blog post from
 * `src/lib/data.ts` into the matching public tables. Re-running it is safe —
 * every statement uses `on conflict (id) do update`.
 */

import { blogPosts, collections, products } from "../src/lib/data";

function sql(strings: TemplateStringsArray, ...values: unknown[]): string {
  return strings.reduce((acc, part, i) => acc + part + (i < values.length ? String(values[i]) : ""), "");
}

function escape(value: unknown): string {
  if (value === null || value === undefined) return "null";
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  if (Array.isArray(value)) {
    const inner = value.map((v) => `"${String(v).replace(/"/g, '\\"')}"`).join(",");
    return `'{${inner}}'`;
  }
  return `'${String(value).replace(/'/g, "''")}'`;
}

function jsonLiteral(value: unknown): string {
  return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
}

const lines: string[] = [
  "-- Absolut Dimension — catalog seed (auto-generated from src/lib/data.ts)",
  "begin;",
  "",
];

lines.push("-- Collections");
for (const c of collections) {
  lines.push(
    sql`insert into public.collections (id, name, slug, image, description_en, description_pl) values (${escape(c.id)}, ${escape(c.name)}, ${escape(c.slug)}, ${escape(c.image)}, ${escape(c.description.en)}, ${escape(c.description.pl)}) on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;`,
  );
}
lines.push("");

lines.push("-- Products");
for (const p of products) {
  lines.push(
    sql`insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values (${escape(p.id)}, ${escape(p.name)}, ${escape(p.price)}, ${escape(p.category)}, ${escape(p.collection)}, ${escape(p.image)}, ${escape(p.images ?? [p.image])}, ${escape(p.description.en)}, ${escape(p.description.pl)}, ${escape(p.sizes)}, ${escape(Boolean(p.featured))}, ${escape(Boolean(p.newArrival))}, ${escape(p.materials?.en ?? null)}, ${escape(p.materials?.pl ?? null)}, ${escape(p.color?.en ?? null)}, ${escape(p.color?.pl ?? null)}) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;`,
  );
}
lines.push("");

lines.push("-- Product variants (per-size stock). The trigger keeps");
lines.push("-- products.stock_quantity in sync as these rows land.");
for (const p of products) {
  for (const size of p.sizes) {
    const qty = p.stockBySize?.[size] ?? 0;
    lines.push(
      sql`insert into public.product_variants (product_id, size, stock_quantity) values (${escape(p.id)}, ${escape(size)}, ${escape(qty)}) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;`,
    );
  }
}
lines.push("");

lines.push("-- Blog posts");
for (const b of blogPosts) {
  lines.push(
    sql`insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values (${escape(b.id)}, ${escape(b.slug)}, ${escape(b.title.en)}, ${escape(b.title.pl)}, ${escape(b.excerpt.en)}, ${escape(b.excerpt.pl)}, ${escape(b.image)}, ${escape(b.date)}, ${escape(b.author)}, ${jsonLiteral(b.body)}) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;`,
  );
}
lines.push("");
lines.push("commit;");

process.stdout.write(lines.join("\n") + "\n");
