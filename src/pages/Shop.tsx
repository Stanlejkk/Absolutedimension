import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categoryLabels, type ProductCategory } from "../lib/data";
import {
  useProducts,
  useCollections,
  useCategoryLabels,
} from "../lib/useCatalog";
import ProductCard from "../components/ProductCard";
import { useLocale } from "../i18n";

type SortMode = "default" | "price-asc" | "price-desc" | "name";
type StatusFilter = "all" | "new" | "featured";

const CATEGORY_KEYS = Object.keys(categoryLabels) as ProductCategory[];
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Shop — matches ad-shop.jsx → ShopPage. Sticky left sidebar with three
 * filter groups (status, collections, categories), 3-column grid on the
 * right, count pill + sort dropdown above the grid.
 */
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, plural } = useLocale();
  const products = useProducts();
  const collections = useCollections();
  const resolvedCategoryLabels = useCategoryLabels();

  const [category, setCategory] = useState<string>(searchParams.get("cat") ?? "all");
  const [collection, setCollection] = useState<string>(searchParams.get("col") ?? "all");
  const [sort, setSort] = useState<SortMode>((searchParams.get("sort") as SortMode) ?? "default");
  const [status, setStatus] = useState<StatusFilter>(
    searchParams.get("view") === "new" ? "new" : "all",
  );

  // Keep URL in sync so filters are sharable
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    category === "all" ? next.delete("cat") : next.set("cat", category);
    collection === "all" ? next.delete("col") : next.set("col", collection);
    sort === "default" ? next.delete("sort") : next.set("sort", sort);
    status === "new" ? next.set("view", "new") : next.delete("view");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, collection, sort, status]);

  const filtered = useMemo(() => {
    let list = products;
    if (status === "new") list = list.filter((p) => p.newArrival);
    else if (status === "featured") list = list.filter((p) => p.featured);
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (collection !== "all") list = list.filter((p) => p.collection === collection);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, category, collection, sort, status]);

  const countLabel = t(
    `shop.count.${plural(filtered.length)}` as "shop.count.other",
    { count: filtered.length },
  );

  const activeCollection = collections.find((c) => c.slug === collection);
  const headingEyebrow = activeCollection
    ? `${t("nav.collections")} — ${activeCollection.name}`
    : t("shop.eyebrow");
  const headingText = activeCollection ? activeCollection.name : t("shop.title");

  const clearAll = () => {
    setCategory("all");
    setCollection("all");
    setStatus("all");
  };

  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 md:mb-16"
        >
          <p className="eyebrow mb-5">{headingEyebrow}</p>
          <div className="flex items-baseline gap-6 flex-wrap">
            <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              {headingText}
            </h1>
            <span className="text-[13px] tracking-[0.1em] text-muted tabular-nums">
              ({String(filtered.length).padStart(2, "0")})
            </span>
          </div>
          {activeCollection?.description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {activeCollection.description}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 pt-1.5">
            <FilterGroup title={t("shop.eyebrow")}>
              {([
                { key: "all", label: t("shop.filters.all") },
                { key: "new", label: t("shop.filters.new") },
                { key: "featured", label: t("shop.filters.featured") },
              ] as { key: StatusFilter; label: string }[]).map((opt) => (
                <FilterButton
                  key={opt.key}
                  active={status === opt.key}
                  onClick={() => setStatus(opt.key)}
                >
                  {opt.label}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup title={t("shop.filters.collection")}>
              <FilterButton
                active={collection === "all"}
                onClick={() => setCollection("all")}
              >
                {t("shop.filters.all")}
              </FilterButton>
              {collections.map((c) => (
                <FilterButton
                  key={c.slug}
                  active={collection === c.slug}
                  onClick={() => setCollection(c.slug)}
                >
                  {c.name}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup title={t("shop.filters.category")}>
              <FilterButton
                active={category === "all"}
                onClick={() => setCategory("all")}
              >
                {t("shop.filters.all")}
              </FilterButton>
              {CATEGORY_KEYS.map((c) => (
                <FilterButton
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                >
                  {resolvedCategoryLabels[c]}
                </FilterButton>
              ))}
            </FilterGroup>
          </aside>

          {/* Grid */}
          <div>
            <div className="flex items-center justify-between gap-3 flex-wrap pb-5 mb-8 border-b border-ink/10">
              <span className="eyebrow">{countLabel}</span>
              <label className="inline-flex items-center gap-2.5 text-xs tracking-wider2 uppercase font-medium text-muted">
                {t("shop.filters.sort")}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortMode)}
                  className="bg-transparent border-none text-xs tracking-wider2 uppercase text-ink font-medium cursor-pointer outline-none"
                >
                  <option value="default">{t("shop.filters.sortOptions.newest")}</option>
                  <option value="price-asc">{t("shop.filters.sortOptions.priceAsc")}</option>
                  <option value="price-desc">{t("shop.filters.sortOptions.priceDesc")}</option>
                  <option value="name">{t("common.view")}</option>
                </select>
              </label>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display italic text-[1.75rem] text-muted">
                  {t("shop.empty")}
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 inline-block text-xs tracking-wider2 uppercase text-ink font-medium border-b border-ink/60 hover:border-ink transition-colors"
                >
                  {t("shop.filters.clear")} →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <h4 className="eyebrow mb-4 pb-2.5 border-b border-ink/10">{title}</h4>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left text-sm py-1 transition-colors ${
        active ? "text-ink font-medium" : "text-muted font-normal hover:text-ink"
      }`}
    >
      <span className="inline-flex items-center gap-2.5">
        {active && (
          <span aria-hidden className="inline-block w-2 h-px bg-current" />
        )}
        {children}
      </span>
    </button>
  );
}
