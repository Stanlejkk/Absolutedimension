import { useEffect, useMemo, useState } from "react";
import { useLocale } from "../../i18n";
import {
  supabase,
  isSupabaseConfigured,
  type ProductRow,
  type CollectionRow,
  type ProductVariantRow,
} from "../../lib/supabase";
import { useFormatPrice } from "../../lib/useCatalog";
import { useToast } from "../../components/motion/Toast";
import ImageUpload from "../../components/admin/ImageUpload";

/** Split a comma/whitespace/newline list into trimmed, de-duped size codes. */
function parseSizes(raw: string): string[] {
  const seen = new Set<string>();
  return raw
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter((s) => s && !seen.has(s) && (seen.add(s), true));
}

const CATEGORIES = [
  "dress",
  "coat",
  "bag",
  "set",
  "skirt",
  "top",
  "blazer",
  "kimono",
  "scarf",
  "pants",
  "cardigan",
  "poncho",
  "body",
  "blouse",
] as const;

interface FormState {
  id: string;
  name: string;
  priceZl: string;
  category: string;
  collection: string;
  image: string;
  imagesExtra: string; // additional gallery image URLs, one per line
  sizes: string;
  stockBySize: Record<string, string>; // size → stock (string for input binding)
  description_en: string;
  description_pl: string;
  materials_en: string;
  materials_pl: string;
  color_en: string;
  color_pl: string;
  featured: boolean;
  new_arrival: boolean;
}

const EMPTY_FORM: FormState = {
  id: "",
  name: "",
  priceZl: "",
  category: CATEGORIES[0],
  collection: "",
  image: "",
  imagesExtra: "",
  sizes: "",
  stockBySize: {},
  description_en: "",
  description_pl: "",
  materials_en: "",
  materials_pl: "",
  color_en: "",
  color_pl: "",
  featured: false,
  new_arrival: false,
};

export default function AdminProducts() {
  const { t } = useLocale();
  const formatPrice = useFormatPrice();
  const { push } = useToast();
  const [rows, setRows] = useState<ProductRow[] | null>(null);
  const [collections, setCollections] = useState<CollectionRow[]>([]);
  const [variantsByProduct, setVariantsByProduct] = useState<Record<string, Record<string, number>>>({});
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSupabase = isSupabaseConfigured && supabase;

  const refresh = useMemo(
    () => async () => {
      if (!supabase) return;
      const [p, c, v] = await Promise.all([
        supabase.from("products").select("*").order("name").returns<ProductRow[]>(),
        supabase.from("collections").select("*").order("name").returns<CollectionRow[]>(),
        supabase.from("product_variants").select("*").returns<ProductVariantRow[]>(),
      ]);
      setRows(p.data ?? []);
      setCollections(c.data ?? []);
      const byProduct: Record<string, Record<string, number>> = {};
      for (const row of v.data ?? []) {
        (byProduct[row.product_id] ??= {})[row.size] = row.stock_quantity;
      }
      setVariantsByProduct(byProduct);
    },
    [],
  );

  useEffect(() => {
    if (isSupabase) refresh();
    else setRows([]);
  }, [isSupabase, refresh]);

  function openNew() {
    setEditing(null);
    setForm({
      ...EMPTY_FORM,
      collection: collections[0]?.slug ?? "",
    });
    setError(null);
    setShowForm(true);
  }

  function openEdit(p: ProductRow) {
    setEditing(p);
    const variants = variantsByProduct[p.id] ?? {};
    const stockBySize: Record<string, string> = {};
    for (const s of p.sizes ?? []) stockBySize[s] = String(variants[s] ?? 0);
    const extra = (p.images ?? []).filter((u) => u && u !== p.image);
    setForm({
      id: p.id,
      name: p.name,
      priceZl: (p.price / 100).toFixed(2),
      category: p.category,
      collection: p.collection,
      image: p.image,
      imagesExtra: extra.join("\n"),
      sizes: (p.sizes ?? []).join(", "),
      stockBySize,
      description_en: p.description_en,
      description_pl: p.description_pl,
      materials_en: p.materials_en ?? "",
      materials_pl: p.materials_pl ?? "",
      color_en: p.color_en ?? "",
      color_pl: p.color_pl ?? "",
      featured: p.featured,
      new_arrival: p.new_arrival,
    });
    setError(null);
    setShowForm(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setSaving(true);
    setError(null);
    try {
      const priceGrosze = Math.round(parseFloat(form.priceZl) * 100);
      if (!Number.isFinite(priceGrosze) || priceGrosze < 0) {
        setError(t("adminPanel.products.errorSaving"));
        setSaving(false);
        return;
      }
      const sizes = parseSizes(form.sizes);
      const extra = form.imagesExtra
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      const images = [form.image, ...extra].filter(Boolean);
      const payload = {
        id: form.id,
        name: form.name,
        price: priceGrosze,
        category: form.category,
        collection: form.collection,
        image: form.image,
        images,
        sizes,
        description_en: form.description_en,
        description_pl: form.description_pl,
        materials_en: form.materials_en || null,
        materials_pl: form.materials_pl || null,
        color_en: form.color_en || null,
        color_pl: form.color_pl || null,
        featured: form.featured,
        new_arrival: form.new_arrival,
        // stock_quantity is recomputed by the product_variants trigger.
      };
      const res = editing
        ? await supabase.from("products").update(payload).eq("id", editing.id)
        : await supabase.from("products").insert(payload);
      if (res.error) throw res.error;

      // Sync per-size inventory: remove dropped sizes, upsert the current set.
      const del = await supabase
        .from("product_variants")
        .delete()
        .eq("product_id", form.id)
        .not("size", "in", `(${sizes.map((s) => `"${s.replace(/"/g, '""')}"`).join(",") || '""'})`);
      if (del.error) throw del.error;
      if (sizes.length > 0) {
        const variantRows = sizes.map((s) => ({
          product_id: form.id,
          size: s,
          stock_quantity: Math.max(0, Math.floor(Number(form.stockBySize[s] ?? 0)) || 0),
        }));
        const up = await supabase
          .from("product_variants")
          .upsert(variantRows, { onConflict: "product_id,size" });
        if (up.error) throw up.error;
      }

      push({ title: t("adminPanel.products.savedToast"), kind: "success" });
      setShowForm(false);
      await refresh();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : t("adminPanel.products.errorSaving"));
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!supabase) return;
    if (!window.confirm(t("adminPanel.products.deleteConfirm"))) return;
    const res = await supabase.from("products").delete().eq("id", id);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    push({ title: t("adminPanel.products.deletedToast"), kind: "success" });
    await refresh();
  }

  return (
    <div>
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-light">{t("adminPanel.products.title")}</h2>
          <p className="text-muted mt-2 text-sm">{t("adminPanel.products.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-xs tracking-wider2 uppercase"
        >
          + {t("adminPanel.products.new")}
        </button>
      </header>

      {rows === null ? (
        <p className="text-muted">{t("common.loading")}</p>
      ) : rows.length === 0 ? (
        <p className="text-muted">{t("adminPanel.products.empty")}</p>
      ) : (
        <div className="border border-ink/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink/[0.02] text-left">
              <tr>
                <Th></Th>
                <Th>{t("adminPanel.products.fieldName")}</Th>
                <Th>{t("adminPanel.products.fieldCategory")}</Th>
                <Th>{t("adminPanel.products.fieldCollection")}</Th>
                <Th>{t("adminPanel.products.fieldPrice")}</Th>
                <Th className="text-right">{t("auth.admin.tableActions")}</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {rows.map((p) => (
                <tr key={p.id}>
                  <Td>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        className="h-12 w-9 object-cover object-top"
                      />
                    ) : null}
                  </Td>
                  <Td>
                    <button
                      type="button"
                      className="text-ink underline underline-offset-2 text-left"
                      onClick={() => openEdit(p)}
                    >
                      {p.name}
                    </button>
                    <p className="text-xs text-muted">{p.id}</p>
                  </Td>
                  <Td className="text-muted">{p.category}</Td>
                  <Td className="text-muted">{p.collection}</Td>
                  <Td className="tabular-nums">{formatPrice(p.price)}</Td>
                  <Td className="text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(p.id)}
                      className="text-xs tracking-wider2 uppercase text-[#9a4a3a] hover:underline"
                    >
                      {t("adminPanel.products.delete")}
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <FormOverlay onClose={() => setShowForm(false)}>
          <form onSubmit={handleSave} className="space-y-5">
            <h3 className="font-display text-2xl font-light mb-2">
              {editing
                ? t("adminPanel.products.formEditTitle")
                : t("adminPanel.products.formNewTitle")}
            </h3>

            <Field label={t("adminPanel.products.fieldId")}>
              <input
                required
                disabled={!!editing}
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm disabled:opacity-60"
              />
              <p className="text-xs text-muted mt-1">{t("adminPanel.products.fieldIdHint")}</p>
            </Field>

            <Field label={t("adminPanel.products.fieldName")}>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label={t("adminPanel.products.fieldPrice")}>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.priceZl}
                  onChange={(e) => setForm({ ...form, priceZl: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
                <p className="text-xs text-muted mt-1">{t("adminPanel.products.fieldPriceHint")}</p>
              </Field>
              <Field label={t("adminPanel.products.fieldCategory")}>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={t("adminPanel.products.fieldCollection")}>
              <select
                required
                value={form.collection}
                onChange={(e) => setForm({ ...form, collection: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              >
                <option value="">—</option>
                {collections.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.slug})
                  </option>
                ))}
              </select>
            </Field>

            <ImageUpload
              value={form.image}
              onChange={(url) => setForm({ ...form, image: url })}
              urlLabel={t("adminPanel.products.fieldImageUrl")}
              uploadLabel={t("adminPanel.products.uploadImage")}
            />

            <Field label={t("adminPanel.products.fieldImagesExtra")}>
              <textarea
                rows={2}
                value={form.imagesExtra}
                onChange={(e) => setForm({ ...form, imagesExtra: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              />
              <p className="text-xs text-muted mt-1">
                {t("adminPanel.products.fieldImagesExtraHint")}
              </p>
            </Field>

            <Field label={t("adminPanel.products.fieldSizes")}>
              <input
                value={form.sizes}
                onChange={(e) => setForm({ ...form, sizes: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              />
              <p className="text-xs text-muted mt-1">
                {t("adminPanel.products.fieldSizesHint")}
              </p>
            </Field>

            {/* Per-size inventory editor */}
            <div>
              <span className="text-[10px] tracking-wider2 uppercase text-muted block mb-2">
                {t("adminPanel.products.fieldStockPerSize")}
              </span>
              {parseSizes(form.sizes).length === 0 ? (
                <p className="text-xs text-muted">
                  {t("adminPanel.products.fieldStockPerSizeHint")}
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {parseSizes(form.sizes).map((size) => (
                    <label key={size} className="flex items-center gap-2 text-sm">
                      <span className="min-w-12 font-medium">{size}</span>
                      <input
                        type="number"
                        step="1"
                        min="0"
                        value={form.stockBySize[size] ?? "0"}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            stockBySize: { ...form.stockBySize, [size]: e.target.value },
                          })
                        }
                        className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm tabular-nums"
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>

            <Field label={t("adminPanel.products.fieldDescriptionEn")}>
              <textarea
                required
                rows={3}
                value={form.description_en}
                onChange={(e) => setForm({ ...form, description_en: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              />
            </Field>
            <Field label={t("adminPanel.products.fieldDescriptionPl")}>
              <textarea
                required
                rows={3}
                value={form.description_pl}
                onChange={(e) => setForm({ ...form, description_pl: e.target.value })}
                className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label={t("adminPanel.products.fieldMaterialsEn")}>
                <input
                  value={form.materials_en}
                  onChange={(e) => setForm({ ...form, materials_en: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
              <Field label={t("adminPanel.products.fieldMaterialsPl")}>
                <input
                  value={form.materials_pl}
                  onChange={(e) => setForm({ ...form, materials_pl: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
              <Field label={t("adminPanel.products.fieldColorEn")}>
                <input
                  value={form.color_en}
                  onChange={(e) => setForm({ ...form, color_en: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
              <Field label={t("adminPanel.products.fieldColorPl")}>
                <input
                  value={form.color_pl}
                  onChange={(e) => setForm({ ...form, color_pl: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                />
                {t("adminPanel.products.fieldFeatured")}
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.new_arrival}
                  onChange={(e) => setForm({ ...form, new_arrival: e.target.checked })}
                />
                {t("adminPanel.products.fieldNewArrival")}
              </label>
            </div>

            {error ? <p className="text-sm text-[#9a4a3a]">{error}</p> : null}

            <div className="flex justify-end gap-3 pt-4 border-t border-ink/10">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-xs tracking-wider2 uppercase text-muted px-4 py-2 hover:text-ink"
              >
                {t("adminPanel.products.cancel")}
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-6 py-2.5 text-xs tracking-wider2 uppercase disabled:opacity-60"
              >
                {saving ? t("adminPanel.products.saving") : t("adminPanel.products.save")}
              </button>
            </div>
          </form>
        </FormOverlay>
      )}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-wider2 uppercase text-muted block mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}

function FormOverlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm flex items-start md:items-center justify-center overflow-y-auto py-6 px-4"
      onClick={onClose}
    >
      <div
        className="bg-bone border border-ink/10 w-full max-w-2xl p-6 md:p-8 shadow-xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

function Th({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-4 py-3 text-xs tracking-wider2 uppercase text-muted font-medium ${className}`}
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-middle ${className}`}>{children}</td>;
}
