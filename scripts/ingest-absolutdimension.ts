/**
 * One-off catalog ingestion — pulls the live Absolut Dimension Shopify storefront
 * and regenerates `src/lib/catalog.generated.ts` plus the local product images
 * under `public/img/products/`.
 *
 * Run with:  npm run ingest      (→ npx tsx scripts/ingest-absolutdimension.ts)
 *
 * Why a script and not hand-authored data: the real shop has 128 products across
 * ~17 collections, each bilingual (PL primary, EN secondary) with multiple photos.
 * Shopify exposes structured JSON (`/products.json`, `/collections/<h>/products.json`)
 * which is far more reliable than scraping HTML. The public endpoint does not expose
 * exact inventory counts (only per-variant `available`), so per-size seed stock is a
 * deterministic spread for available sizes and 0 for sold-out ones — the admin panel
 * is the source of truth for real numbers thereafter.
 *
 * Idempotent: re-running overwrites the generated file and re-downloads only missing
 * images.
 */

import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ORIGIN = "https://www.absolutdimension.com";
const UA = { "User-Agent": "Mozilla/5.0 (catalog-ingest)" };

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_IMG = join(ROOT, "public", "img");
const OUT_FILE = join(ROOT, "src", "lib", "catalog.generated.ts");
const CACHE_DIR = join(ROOT, ".ingest-tmp");

// ─── Collections we keep, in primary-assignment priority order ────────────────
// A product belongs to several Shopify collections; we assign it to the single
// highest-priority line here. `frontpage` is excluded (it is the home curation,
// used below only as a `featured` hint).
const COLLECTION_ORDER = [
  "monaco", "paris", "cannes", "st-tropez", "monte-carlo", "melbourne",
  "new-york-city", "bali", "iq-atar", "say-shell", "deep-ly-me", "poza-murem",
  "new-chapter", "lou-vre", "new-business-look", "sukienki-event", "sukienki-cocktail",
];

// Display names (plain, brand-styled — the catalog keeps `name` locale-neutral).
const COLLECTION_NAMES: Record<string, string> = {
  monaco: "Monaco", paris: "Paris", cannes: "Cannes", "st-tropez": "St. Tropez",
  "monte-carlo": "Monte Carlo", melbourne: "Me.Bourn", "new-york-city": "New.City",
  bali: "Coco.Bali", "iq-atar": "IQ.atar", "say-shell": "Say.Shell",
  "deep-ly-me": "Deep.ly Me", "poza-murem": "Beyond Limits", "new-chapter": "New Chapter",
  "lou-vre": "Lou.Vre", "new-business-look": "New Business Look",
  "sukienki-event": "Event Dresses", "sukienki-cocktail": "Cocktail Dresses",
};

// Poetic intro copy gathered from the live collection pages (research). PL primary.
const COLLECTION_COPY: Record<string, { en: string; pl: string }> = {
  monaco: {
    en: "A line that answers to southern light, the movement of the body, and the shift from day to evening — not to overwhelm, but to be visible; not to decorate, but to build personality.",
    pl: "Linia, która odpowiada na południowe światło, ruch ciała i zmianę dnia w wieczór — nie po to, by przytłaczać, lecz by być widoczną; nie by zdobić, lecz by budować osobowość.",
  },
  paris: {
    en: "The Core of the SM.ART Wardrobe. Paris does not react to the season — it organises Composition, Comfort, and Creativity into one timeless language.",
    pl: "Rdzeń Garderoby SM.ART. Paris nie reaguje na sezon — porządkuje Kompozycję, Komfort i Kreatywność w jeden ponadczasowy język.",
  },
  cannes: {
    en: "A line of light on the body — silk and breath, for women who are visible because they simply are. The aesthetic of elegance: bright, calm, sovereign.",
    pl: "Linia światła na ciele — jedwab i oddech, dla kobiet, które są widoczne, bo po prostu są. Estetyka elegancji: jasnej, spokojnej, suwerennej.",
  },
  "st-tropez": {
    en: "The line of the body in freedom — breathable structures and the soft rhythm of silk. The Aesthetics of Pleasure: live freely within yourself, in the sun, in movement, in lightness.",
    pl: "Linia ciała w wolności — oddychające struktury i miękki rytm jedwabiu. Estetyka Przyjemności: żyj swobodnie w sobie, w słońcu, w ruchu, w lekkości.",
  },
  "monte-carlo": {
    en: "A line of visible presence, where form creates the message — the aesthetic of an authority full of energy that becomes the Manifesto of the Person.",
    pl: "Linia widocznej obecności, w której forma tworzy przekaz — estetyka autorytetu pełnego energii, który staje się Manifestem Osoby.",
  },
  melbourne: {
    en: "A line of internal autonomy — for a woman who lives in her own form and gives herself the consent to be 'different'. Power without demonstration.",
    pl: "Linia wewnętrznej autonomii — dla kobiety, która żyje we własnej formie i daje sobie zgodę, by być „inną”. Siła bez demonstracji.",
  },
  "new-york-city": {
    en: "A line of functional strength for women who build, decide, and move intensely — where form is a tool of agency. It does not tell a story; it creates it.",
    pl: "Linia funkcjonalnej siły dla kobiet, które intensywnie budują, decydują i poruszają się — gdzie forma jest narzędziem sprawczości. Nie opowiada historii; ją tworzy.",
  },
  bali: {
    en: "The body's breathing line — silks and linens, forms that do not restrict movement. The aesthetic of grounded freedom, where the wardrobe stops ruling the body and starts supporting it.",
    pl: "Linia oddechu ciała — jedwabie i lny, formy, które nie ograniczają ruchu. Estetyka ugruntowanej wolności, w której garderoba przestaje rządzić ciałem, a zaczyna je wspierać.",
  },
  "iq-atar": {
    en: "A small, sovereign line — sculptural silk and scarves for moments that ask for quiet intensity.",
    pl: "Mała, suwerenna linia — rzeźbiarski jedwab i szale na chwile, które proszą o cichą intensywność.",
  },
  "say-shell": {
    en: "A line of deep relaxation — a state in which one simply is. A wardrobe for women who need to live with themselves; here the wardrobe becomes a shelter and luxury means I AM MYSELF.",
    pl: "Linia głębokiego relaksu — stanu, w którym po prostu się jest. Garderoba dla kobiet, które potrzebują żyć ze sobą; tu garderoba staje się schronieniem, a luksus znaczy JESTEM SOBĄ.",
  },
  "deep-ly-me": {
    en: "An intimate line that turns inward — soft forms for the return to oneself.",
    pl: "Intymna linia zwrócona do wewnątrz — miękkie formy na powrót do siebie.",
  },
  "poza-murem": {
    en: "Beyond Limits — forms for stepping past the wall of expectation into a freer, fuller presence.",
    pl: "Poza Murem — formy, by przekroczyć mur oczekiwań i wejść w wolniejszą, pełniejszą obecność.",
  },
  "new-chapter": {
    en: "Each Absolut Dimension design is unique, so subtle differences may occur. In line with our philosophy of conscious luxury, each garment is made individually only after an order is placed.",
    pl: "Każdy projekt Absolut Dimension jest niepowtarzalny, dlatego mogą wystąpić subtelne różnice. Zgodnie z naszą filozofią świadomego luksusu każda rzecz powstaje indywidualnie dopiero po złożeniu zamówienia.",
  },
  "lou-vre": {
    en: "Lou.Vre — wearable art, where each form is composed like a piece in a gallery.",
    pl: "Lou.Vre — sztuka do noszenia, w której każda forma jest skomponowana jak dzieło w galerii.",
  },
  "new-business-look": {
    en: "A line of composed authority for the working day — structure, ease, and quiet confidence.",
    pl: "Linia opanowanego autorytetu na dzień pracy — struktura, swoboda i cicha pewność.",
  },
  "sukienki-event": {
    en: "Event dresses for the moments that ask to be remembered — silk, presence, and ceremony.",
    pl: "Sukienki na wielkie wydarzenia — jedwab, obecność i ceremonia chwil, które chce się zapamiętać.",
  },
  "sukienki-cocktail": {
    en: "Cocktail dresses — lighter forms for evenings that move between conversation and dance.",
    pl: "Sukienki koktajlowe — lżejsze formy na wieczory między rozmową a tańcem.",
  },
};

// Shopify product_type → existing ProductCategory union.
const CATEGORY_MAP: Record<string, string> = {
  "sukienka": "dress", "sukienki": "dress", "suknia": "dress", "suknia wieczór": "dress",
  "dress": "dress", "set": "set", "top": "top", "żakiet": "blazer", "spódnica": "skirt",
  "spódnice do kolan": "skirt", "bluzka": "blouse", "płaszcz": "coat", "szal": "scarf",
  "sweter": "cardigan", "kardigan": "cardigan", "poncho": "poncho", "body": "body",
  "torebka": "bag", "torba": "bag", "spodnie": "pants",
};

// The public collection-membership endpoint under-reports (it omits products
// that are unpublished on that channel), leaving ~25 products with no collection.
// Their brand names almost always name the line ("Top Monaco", "Żakiet Melbourne",
// "Bluzka Monte Carlo", "Set Gorudo NY"…), so we recover the intended placement
// by keyword; the genuinely ambiguous remainder is spread across the artistic lines
// so no collection is dumped on.
const NAME_TO_COLLECTION: [RegExp, string][] = [
  [/monte.?carlo/i, "monte-carlo"],
  [/monaco/i, "monaco"],
  [/melbourne|me\.?bourn|sydney/i, "melbourne"],
  [/\bny\b|new.?york|new\.?city|gorudo/i, "new-york-city"],
  [/tropez/i, "st-tropez"],
  [/cannes|ballet/i, "cannes"],
  [/paris|furansu|ver\.?sale|versa/i, "paris"],
  [/bali|oasis|coco/i, "bali"],
  [/qatar|atar|doha/i, "iq-atar"],
  [/say.?shell|shell/i, "say-shell"],
  [/opera|valentine|maturite|henriqua|desse|gala/i, "sukienki-event"],
];
const ORPHAN_SPREAD = ["lou-vre", "new-chapter", "deep-ly-me", "poza-murem", "say-shell"];
let orphanCounter = 0;
function inferCollection(name: string): string {
  for (const [re, slug] of NAME_TO_COLLECTION) if (re.test(name)) return slug;
  return ORPHAN_SPREAD[orphanCounter++ % ORPHAN_SPREAD.length];
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchRetry(url: string, tries = 5): Promise<Response> {
  let lastErr: unknown;
  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      const res = await fetch(url, { headers: UA });
      if (res.ok) return res;
      if (res.status === 429 || res.status >= 500) {
        lastErr = new Error(`${res.status} ${url}`);
      } else {
        throw new Error(`${res.status} ${url}`);
      }
    } catch (err) {
      lastErr = err;
    }
    await sleep(800 * (attempt + 1));
  }
  throw lastErr instanceof Error ? lastErr : new Error(`failed ${url}`);
}

async function getJson(url: string): Promise<any> {
  return (await fetchRetry(url)).json();
}

// Disk-cached JSON GET → avoids re-hitting the throttle-happy storefront on re-runs.
async function cachedJson(url: string, cacheName: string): Promise<any> {
  const path = join(CACHE_DIR, cacheName);
  if (await exists(path)) {
    return JSON.parse(await readFile(path, "utf8"));
  }
  await mkdir(CACHE_DIR, { recursive: true });
  const data = await getJson(url);
  await writeFile(path, JSON.stringify(data), "utf8");
  await sleep(400); // be polite between live hits
  return data;
}

// Fetch every product from a `…/products.json` endpoint, following pagination (cached).
async function allProducts(base: string, cacheKey: string): Promise<any[]> {
  const out: any[] = [];
  for (let page = 1; page <= 20; page++) {
    const j = await cachedJson(`${base}?limit=250&page=${page}`, `${cacheKey}-p${page}.json`);
    const items = j.products ?? [];
    if (items.length === 0) break;
    out.push(...items);
    if (items.length < 250) break;
  }
  return out;
}

function stripHtmlToParas(html: string): string[] {
  // Split on block boundaries, strip tags, decode a few common entities.
  const blocks = html
    .replace(/<\/(p|h\d|li|div|br)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ")
    .split(/\n+/)
    .map((b) =>
      b
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
        .replace(/&hellip;/g, "…")
        .replace(/&oacute;/g, "ó")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean);
  return blocks;
}

/** Poetic description = paragraphs before the technical "details/materials" block. */
function description(html: string): string {
  const paras = stripHtmlToParas(html);
  const stop = /^(szczegóły|details|materiał|material|skład|composition)\b/i;
  const kept: string[] = [];
  for (const p of paras) {
    if (stop.test(p)) break;
    kept.push(p);
  }
  return (kept.length ? kept : paras.slice(0, 3)).join("\n\n");
}

/** Pull a "Materiał: …" / "Material: …" line out of the body if present. */
function materialsFrom(html: string): string | null {
  const paras = stripHtmlToParas(html);
  for (const p of paras) {
    const m = p.match(/^(?:materiał|material|skład|composition)\s*:?\s*(.+)$/i);
    if (m && m[1].trim()) return m[1].trim();
  }
  return null;
}

function findOption(p: any, re: RegExp): { position: number; values: string[] } | null {
  const opt = (p.options ?? []).find((o: any) => re.test(String(o.name).trim()));
  return opt ? { position: opt.position, values: opt.values ?? [] } : null;
}

function deterministicStock(id: string, size: string): number {
  let seed = 0;
  const s = `${id}|${size}`;
  for (let i = 0; i < s.length; i++) seed = (seed + s.charCodeAt(i)) % 9973;
  return 2 + (seed % 7); // 2..8
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

// Download → resize to a web-appropriate size → re-encode to WebP. The source
// CDN images are 2048px PNGs (~3.6 MB each); optimised WebP keeps them crisp at
// a fraction of the weight so the repo and the deploy stay sane.
async function downloadImage(src: string, destRel: string): Promise<void> {
  const dest = join(PUBLIC_IMG, destRel);
  if (await exists(dest)) return;
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetchRetry(src);
  const buf = Buffer.from(await res.arrayBuffer());
  const optimised = await sharp(buf)
    .rotate()
    .resize({ width: 1400, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  await writeFile(dest, optimised);
}

async function pool<T>(items: T[], n: number, fn: (t: T) => Promise<void>): Promise<void> {
  let i = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        await fn(items[idx]);
      } catch (err) {
        console.warn("  ! skip:", (err as Error).message);
      }
    }
  });
  await workers;
  await Promise.all(workers);
}

function tsLiteral(v: unknown): string {
  return JSON.stringify(v);
}

async function main() {
  console.log("Fetching catalog…");
  const plList = await allProducts(`${ORIGIN}/products.json`, "products-pl");
  const enList = await allProducts(`${ORIGIN}/en/products.json`, "products-en");
  const colList = (await cachedJson(`${ORIGIN}/collections.json?limit=250`, "collections.json")).collections ?? [];
  const enByHandle = new Map<string, any>(enList.map((p: any) => [p.handle, p]));
  console.log(`  ${plList.length} products (PL), ${enList.length} (EN), ${colList.length} collections`);

  // Build product → collection membership.
  console.log("Fetching collection membership…");
  const membership = new Map<string, string[]>(); // handle → [collection slugs]
  for (const slug of COLLECTION_ORDER) {
    try {
      const items = await allProducts(`${ORIGIN}/collections/${slug}/products.json`, `col-${slug}`);
      for (const it of items) {
        const arr = membership.get(it.handle) ?? [];
        arr.push(slug);
        membership.set(it.handle, arr);
      }
      console.log(`  ${slug}: ${items.length}`);
    } catch (err) {
      console.warn(`  ! ${slug}: ${(err as Error).message}`);
    }
  }
  // frontpage → featured hint
  let frontpage: Set<string> = new Set();
  try {
    const fp = await allProducts(`${ORIGIN}/collections/frontpage/products.json`, "col-frontpage");
    frontpage = new Set(fp.map((p: any) => p.handle));
  } catch {
    /* none */
  }

  const SIZE_RE = /^(rozmiar|size)\b|szyty na miarę|made-to-measure|tailor-made/i;
  const COLOR_RE = /^(kolor|color)\b/i;
  const MAT_RE = /^(materiał|material|tkanina|fabric)\b/i;

  // Newest 12 → newArrival.
  const newestHandles = new Set(
    [...plList]
      .sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)))
      .slice(0, 12)
      .map((p) => p.handle),
  );

  type Built = {
    id: string; name: string; price: number; category: string; collection: string;
    image: string; images: string[]; description: { en: string; pl: string };
    sizes: string[]; stockBySize: Record<string, number>;
    featured: boolean; newArrival: boolean;
    materials?: { en: string; pl: string }; color?: { en: string; pl: string };
    createdAt: string;
  };

  const built: Built[] = [];
  const imageJobs: { src: string; dest: string }[] = [];

  for (const p of plList) {
    const en = enByHandle.get(p.handle);
    const id = p.handle;
    const ptype = String(p.product_type || "").trim().toLowerCase();
    const category = CATEGORY_MAP[ptype] ?? "dress";

    // Primary collection = highest-priority membership; infer from the name when
    // the storefront reported no membership for this product.
    const mem = membership.get(p.handle) ?? [];
    const collection =
      COLLECTION_ORDER.find((c) => mem.includes(c)) ?? inferCollection(p.title);

    // Price (sizes share a price → take the first variant).
    const price = Math.round(parseFloat(p.variants?.[0]?.price ?? "0") * 100);

    // Sizes + per-size availability.
    const sizeOpt = findOption(p, SIZE_RE);
    let sizes: string[];
    const availBySize = new Map<string, boolean>();
    if (sizeOpt) {
      const pos = sizeOpt.position;
      for (const v of p.variants ?? []) {
        const size = String(v[`option${pos}`] ?? "").trim();
        if (!size) continue;
        availBySize.set(size, (availBySize.get(size) ?? false) || !!v.available);
      }
      sizes = sizeOpt.values.map((s) => String(s).trim()).filter(Boolean);
      if (sizes.length === 0) sizes = [...availBySize.keys()];
    } else {
      sizes = ["One size"];
      const anyAvail = (p.variants ?? []).some((v: any) => v.available);
      availBySize.set("One size", anyAvail);
    }
    const stockBySize: Record<string, number> = {};
    for (const s of sizes) {
      stockBySize[s] = availBySize.get(s) ? deterministicStock(id, s) : 0;
    }

    // Color (option) bilingual.
    const colPl = findOption(p, COLOR_RE)?.values?.[0];
    const colEn = en ? findOption(en, COLOR_RE)?.values?.[0] : undefined;
    const color = colPl ? { pl: String(colPl), en: String(colEn ?? colPl) } : undefined;

    // Materials — prefer the body line, fall back to the option values.
    const matPlBody = materialsFrom(p.body_html ?? "");
    const matEnBody = en ? materialsFrom(en.body_html ?? "") : null;
    const matPlOpt = findOption(p, MAT_RE)?.values?.join(", ");
    const matEnOpt = en ? findOption(en, MAT_RE)?.values?.join(", ") : undefined;
    const matPl = matPlBody ?? matPlOpt;
    const matEn = matEnBody ?? matEnOpt ?? matPl;
    const materials = matPl ? { pl: matPl, en: String(matEn) } : undefined;

    // Images → optimised local WebP paths (max 4 per product).
    const imgs: string[] = [];
    const rawImgs = (p.images ?? []).slice(0, 4);
    rawImgs.forEach((im: any, i: number) => {
      const rel = `products/${id}/${i}.webp`;
      imgs.push(`/img/${rel}`);
      imageJobs.push({ src: im.src, dest: rel });
    });
    const fallback = "/img/products/_placeholder.svg";

    built.push({
      id,
      name: p.title,
      price,
      category,
      collection,
      image: imgs[0] ?? fallback,
      images: imgs.length ? imgs : [fallback],
      description: {
        pl: description(p.body_html ?? ""),
        en: description(en?.body_html ?? p.body_html ?? ""),
      },
      sizes,
      stockBySize,
      featured: false,
      newArrival: newestHandles.has(p.handle),
      materials,
      color,
      createdAt: String(p.created_at ?? ""),
    });
  }

  // Featured: one representative per hero collection (first product found), plus frontpage members.
  const heroCollections = ["monaco", "paris", "cannes", "st-tropez", "say-shell", "bali", "new-york-city", "monte-carlo"];
  for (const c of heroCollections) {
    const first = built.find((b) => b.collection === c);
    if (first) first.featured = true;
  }
  for (const b of built) if (frontpage.has(b.id)) b.featured = true;

  // Download images (skip existing).
  console.log(`Downloading ${imageJobs.length} images…`);
  await pool(imageJobs, 8, (job) => downloadImage(job.src, job.dest));

  // Collections list (only those that ended up with products), with derived images.
  const usedCollections = new Set(built.map((b) => b.collection));
  const collections = COLLECTION_ORDER.filter((slug) => usedCollections.has(slug)).map((slug) => {
    const rep = built.find((b) => b.collection === slug);
    const copy = COLLECTION_COPY[slug] ?? { en: "", pl: "" };
    return {
      id: slug,
      name: COLLECTION_NAMES[slug] ?? slug,
      slug,
      image: rep?.image ?? "/img/products/_placeholder.svg",
      description: copy,
    };
  });

  // Emit generated module.
  const productsLiteral = built
    .map((b) => {
      const o: any = {
        id: b.id, name: b.name, price: b.price, category: b.category, collection: b.collection,
        image: b.image, images: b.images, description: b.description, sizes: b.sizes,
        stockBySize: b.stockBySize,
      };
      if (b.featured) o.featured = true;
      if (b.newArrival) o.newArrival = true;
      if (b.materials) o.materials = b.materials;
      if (b.color) o.color = b.color;
      return "  " + tsLiteral(o) + ",";
    })
    .join("\n");

  const collectionsLiteral = collections.map((c) => "  " + tsLiteral(c) + ",").join("\n");

  const header = `/**
 * AUTO-GENERATED by scripts/ingest-absolutdimension.ts — DO NOT EDIT BY HAND.
 * Regenerate with:  npm run ingest
 *
 * Mirrors the live absolutdimension.com catalog (${built.length} products,
 * ${collections.length} collections). Prices are PLN grosze (1/100). Per-size
 * stock is a deterministic seed for available sizes (0 = sold out); manage real
 * inventory in the admin panel / Supabase thereafter.
 */
import type { Product, Collection } from "./data";

export const generatedCollections: Collection[] = [
${collectionsLiteral}
];

export const generatedProducts: Product[] = [
${productsLiteral}
];
`;

  await writeFile(OUT_FILE, header, "utf8");
  console.log(`Wrote ${OUT_FILE}`);
  console.log(`  ${built.length} products, ${collections.length} collections`);
  const featured = built.filter((b) => b.featured).length;
  const newArr = built.filter((b) => b.newArrival).length;
  console.log(`  featured: ${featured}, newArrival: ${newArr}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
