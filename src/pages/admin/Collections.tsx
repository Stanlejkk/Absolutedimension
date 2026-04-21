import { useEffect, useMemo, useState } from "react";
import { useLocale } from "../../i18n";
import { supabase, isSupabaseConfigured, type CollectionRow } from "../../lib/supabase";
import { useToast } from "../../components/motion/Toast";
import ImageUpload from "../../components/admin/ImageUpload";

interface FormState {
  id: string;
  name: string;
  slug: string;
  image: string;
  description_en: string;
  description_pl: string;
}

const EMPTY_FORM: FormState = {
  id: "",
  name: "",
  slug: "",
  image: "",
  description_en: "",
  description_pl: "",
};

export default function AdminCollections() {
  const { t } = useLocale();
  const { push } = useToast();
  const [rows, setRows] = useState<CollectionRow[] | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<CollectionRow | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useMemo(
    () => async () => {
      if (!supabase) return;
      const res = await supabase.from("collections").select("*").order("name").returns<CollectionRow[]>();
      setRows(res.data ?? []);
    },
    [],
  );

  useEffect(() => {
    if (isSupabaseConfigured) refresh();
    else setRows([]);
  }, [refresh]);

  function openNew() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setError(null);
    setShowForm(true);
  }

  function openEdit(c: CollectionRow) {
    setEditing(c);
    setForm({ ...c });
    setError(null);
    setShowForm(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setSaving(true);
    setError(null);
    try {
      const payload = {
        id: form.id,
        name: form.name,
        slug: form.slug,
        image: form.image,
        description_en: form.description_en,
        description_pl: form.description_pl,
      };
      const res = editing
        ? await supabase.from("collections").update(payload).eq("id", editing.id)
        : await supabase.from("collections").insert(payload);
      if (res.error) throw res.error;
      push({ title: t("adminPanel.products.savedToast"), kind: "success" });
      setShowForm(false);
      await refresh();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!supabase) return;
    if (!window.confirm(t("adminPanel.collections.deleteConfirm"))) return;
    const res = await supabase.from("collections").delete().eq("id", id);
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
          <h2 className="font-display text-3xl font-light">
            {t("adminPanel.collections.title")}
          </h2>
          <p className="text-muted mt-2 text-sm">{t("adminPanel.collections.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-xs tracking-wider2 uppercase"
        >
          + {t("adminPanel.collections.new")}
        </button>
      </header>

      {rows === null ? (
        <p className="text-muted">{t("common.loading")}</p>
      ) : rows.length === 0 ? (
        <p className="text-muted">{t("adminPanel.collections.empty")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rows.map((c) => (
            <article key={c.id} className="border border-ink/10 bg-bone">
              {c.image ? (
                <img
                  src={c.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="aspect-[4/3] w-full bg-ink/[0.04]" />
              )}
              <div className="p-4">
                <p className="text-[10px] tracking-wider2 uppercase text-muted">{c.slug}</p>
                <h3 className="font-display text-xl font-light mt-1">{c.name}</h3>
                <p className="mt-2 text-xs text-muted line-clamp-2">{c.description_en}</p>
                <div className="mt-4 flex gap-3 text-xs tracking-wider2 uppercase">
                  <button
                    type="button"
                    onClick={() => openEdit(c)}
                    className="text-ink underline underline-offset-2"
                  >
                    {t("common.view")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(c.id)}
                    className="text-[#9a4a3a] hover:underline"
                  >
                    {t("adminPanel.collections.delete")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {showForm && (
        <div
          className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm flex items-start md:items-center justify-center overflow-y-auto py-6 px-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-bone border border-ink/10 w-full max-w-xl p-6 md:p-8 shadow-xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSave} className="space-y-5">
              <h3 className="font-display text-2xl font-light mb-2">
                {editing
                  ? t("adminPanel.collections.formEditTitle")
                  : t("adminPanel.collections.formNewTitle")}
              </h3>
              <Field label={t("adminPanel.collections.fieldId")}>
                <input
                  required
                  disabled={!!editing}
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm disabled:opacity-60"
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label={t("adminPanel.collections.fieldName")}>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                  />
                </Field>
                <Field label={t("adminPanel.collections.fieldSlug")}>
                  <input
                    required
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                  />
                </Field>
              </div>
              <ImageUpload
                value={form.image}
                onChange={(url) => setForm({ ...form, image: url })}
                urlLabel={t("adminPanel.collections.fieldImageUrl")}
                uploadLabel={t("adminPanel.products.uploadImage")}
              />
              <Field label={t("adminPanel.collections.fieldDescriptionEn")}>
                <textarea
                  required
                  rows={2}
                  value={form.description_en}
                  onChange={(e) => setForm({ ...form, description_en: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
              <Field label={t("adminPanel.collections.fieldDescriptionPl")}>
                <textarea
                  required
                  rows={2}
                  value={form.description_pl}
                  onChange={(e) => setForm({ ...form, description_pl: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                />
              </Field>
              {error ? <p className="text-sm text-[#9a4a3a]">{error}</p> : null}
              <div className="flex justify-end gap-3 pt-4 border-t border-ink/10">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-xs tracking-wider2 uppercase text-muted px-4 py-2 hover:text-ink"
                >
                  {t("adminPanel.collections.cancel")}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-6 py-2.5 text-xs tracking-wider2 uppercase disabled:opacity-60"
                >
                  {saving ? t("adminPanel.collections.saving") : t("adminPanel.collections.save")}
                </button>
              </div>
            </form>
          </div>
        </div>
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
