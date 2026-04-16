import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  products,
  collections,
  categoryLabels,
  type ProductCategory,
} from "../lib/data";
import ProductCard from "../components/ProductCard";

type SortMode = "default" | "price-asc" | "price-desc" | "name";

const CATEGORY_KEYS = Object.keys(categoryLabels) as ProductCategory[];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState<string>(searchParams.get("cat") ?? "all");
  const [collection, setCollection] = useState<string>(searchParams.get("col") ?? "all");
  const [sort, setSort] = useState<SortMode>((searchParams.get("sort") as SortMode) ?? "default");
  const onlyNew = searchParams.get("view") === "new";

  // Keep URL in sync so filters are sharable
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    category === "all" ? next.delete("cat") : next.set("cat", category);
    collection === "all" ? next.delete("col") : next.set("col", collection);
    sort === "default" ? next.delete("sort") : next.set("sort", sort);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, collection, sort]);

  const filtered = useMemo(() => {
    let list = products;
    if (onlyNew) list = list.filter((p) => p.newArrival);
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (collection !== "all") list = list.filter((p) => p.collection === collection);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, collection, sort, onlyNew]);

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">
            {onlyNew ? "New arrivals" : "The wardrobe"}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1]">
            {onlyNew ? (
              <>
                Just <span className="italic">arrived.</span>
              </>
            ) : (
              <>
                All <span className="italic">pieces.</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-muted max-w-xl">
            {filtered.length} pieces, cut once and considered twice. Sort, filter,
            and linger — nothing in our house is in a hurry.
          </p>
        </motion.div>

        {/* Filter bar */}
        <div className="mt-14 flex flex-wrap items-center gap-3 pb-6 border-b border-ink/10">
          <Select
            label="Category"
            value={category}
            onChange={setCategory}
            options={[{ value: "all", label: "All" }, ...CATEGORY_KEYS.map((k) => ({ value: k, label: categoryLabels[k] }))]}
          />
          <Select
            label="Collection"
            value={collection}
            onChange={setCollection}
            options={[
              { value: "all", label: "All collections" },
              ...collections.map((c) => ({ value: c.slug, label: c.name })),
            ]}
          />
          <Select
            label="Sort"
            value={sort}
            onChange={(v) => setSort(v as SortMode)}
            options={[
              { value: "default", label: "Curator's pick" },
              { value: "price-asc", label: "Price — low to high" },
              { value: "price-desc", label: "Price — high to low" },
              { value: "name", label: "Name" },
            ]}
          />
          <p className="ml-auto text-xs tracking-wider2 uppercase text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} dense />
            ))}
          </div>
        ) : (
          <p className="mt-24 text-center text-muted italic">
            Nothing matches this combination — try a different category.
          </p>
        )}
      </div>
    </section>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="group relative inline-flex items-center gap-3 rounded-full border border-ink/15 bg-bone px-4 py-2 hover:border-ink transition-colors">
      <span className="eyebrow text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent text-sm tracking-wide pr-5 outline-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 24 24" className="absolute right-3 h-3 w-3 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
