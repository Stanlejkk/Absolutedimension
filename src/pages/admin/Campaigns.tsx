import { useEffect, useMemo, useState } from "react";
import { useLocale } from "../../i18n";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";
import { useToast } from "../../components/motion/Toast";
import { apiPost } from "../../lib/api";
import { useAuth } from "../../lib/AuthContext";

interface CampaignRow {
  id: string;
  subject_en: string;
  subject_pl: string;
  body_en: string;
  body_pl: string;
  status: "draft" | "sending" | "sent";
  sent_at: string | null;
  sent_to_count: number;
  created_at: string;
}

interface FormState {
  id: string | null;
  subject_en: string;
  subject_pl: string;
  body_en: string;
  body_pl: string;
}

const EMPTY_FORM: FormState = {
  id: null,
  subject_en: "",
  subject_pl: "",
  body_en: "",
  body_pl: "",
};

export default function AdminCampaigns() {
  const { t, formatDate } = useLocale();
  const { user } = useAuth();
  const { push } = useToast();
  const [rows, setRows] = useState<CampaignRow[] | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);

  const refresh = useMemo(
    () => async () => {
      if (!supabase) return;
      const res = await supabase
        .from("newsletter_campaigns")
        .select("*")
        .order("created_at", { ascending: false })
        .returns<CampaignRow[]>();
      setRows(res.data ?? []);
    },
    [],
  );

  useEffect(() => {
    if (isSupabaseConfigured) refresh();
    else setRows([]);
  }, [refresh]);

  function openNew() {
    setForm(EMPTY_FORM);
    setShowForm(true);
  }

  function openEdit(c: CampaignRow) {
    setForm({
      id: c.id,
      subject_en: c.subject_en,
      subject_pl: c.subject_pl,
      body_en: c.body_en,
      body_pl: c.body_pl,
    });
    setShowForm(true);
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setSaving(true);
    const payload = {
      subject_en: form.subject_en,
      subject_pl: form.subject_pl,
      body_en: form.body_en,
      body_pl: form.body_pl,
      created_by: user?.id ?? null,
    };
    const res = form.id
      ? await supabase.from("newsletter_campaigns").update(payload).eq("id", form.id)
      : await supabase.from("newsletter_campaigns").insert({ ...payload, status: "draft" });
    setSaving(false);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    push({ title: t("adminPanel.products.savedToast"), kind: "success" });
    setShowForm(false);
    await refresh();
  }

  async function handleDelete(id: string) {
    if (!supabase) return;
    if (!window.confirm(t("adminPanel.campaigns.deleteConfirm"))) return;
    const res = await supabase.from("newsletter_campaigns").delete().eq("id", id);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    await refresh();
  }

  async function send(id: string) {
    if (!window.confirm(t("adminPanel.campaigns.sendConfirm"))) return;
    setSending(true);
    const res = await apiPost<{ ok: true; sent: number; total: number }>(
      "/api/admin/send-campaign",
      { campaignId: id },
    );
    setSending(false);
    if (!res.ok) {
      alert(`${t("adminPanel.campaigns.errorSending")} [${res.error.message}]`);
      return;
    }
    push({ title: t("adminPanel.campaigns.sentToast"), kind: "success" });
    await refresh();
  }

  return (
    <div>
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-light">{t("adminPanel.campaigns.title")}</h2>
          <p className="text-muted mt-2 text-sm">{t("adminPanel.campaigns.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-xs tracking-wider2 uppercase"
        >
          + {t("adminPanel.campaigns.new")}
        </button>
      </header>

      {rows === null ? (
        <p className="text-muted">{t("common.loading")}</p>
      ) : rows.length === 0 ? (
        <p className="text-muted">{t("adminPanel.campaigns.empty")}</p>
      ) : (
        <div className="border border-ink/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink/[0.02] text-left">
              <tr>
                <Th>{t("adminPanel.campaigns.tableSubject")}</Th>
                <Th>{t("adminPanel.campaigns.tableStatus")}</Th>
                <Th>{t("adminPanel.campaigns.tableSent")}</Th>
                <Th className="text-right">{t("auth.admin.tableActions")}</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {rows.map((c) => (
                <tr key={c.id}>
                  <Td>
                    <button
                      type="button"
                      onClick={() => openEdit(c)}
                      className="text-ink underline underline-offset-2 text-left"
                    >
                      {c.subject_en || c.subject_pl || "(untitled)"}
                    </button>
                  </Td>
                  <Td className="text-xs tracking-wider2 uppercase text-muted">
                    {t(
                      `adminPanel.campaigns.status.${c.status}` as
                        | "adminPanel.campaigns.status.draft"
                        | "adminPanel.campaigns.status.sending"
                        | "adminPanel.campaigns.status.sent",
                    )}
                    {c.status === "sent"
                      ? ` · ${t("adminPanel.campaigns.sentCount", { count: c.sent_to_count })}`
                      : ""}
                  </Td>
                  <Td className="text-muted">
                    {c.sent_at ? formatDate(c.sent_at) : "—"}
                  </Td>
                  <Td className="text-right space-x-3">
                    {c.status === "draft" && (
                      <button
                        type="button"
                        disabled={sending}
                        onClick={() => send(c.id)}
                        className="text-xs tracking-wider2 uppercase text-ink hover:underline disabled:opacity-40"
                      >
                        {sending ? t("adminPanel.campaigns.sending") : t("adminPanel.campaigns.send")}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(c.id)}
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
        <div
          className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm flex items-start md:items-center justify-center overflow-y-auto py-6 px-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-bone border border-ink/10 w-full max-w-2xl p-6 md:p-8 shadow-xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={save} className="space-y-5">
              <h3 className="font-display text-2xl font-light mb-2">
                {form.id
                  ? t("adminPanel.campaigns.formEditTitle")
                  : t("adminPanel.campaigns.formNewTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label={t("adminPanel.campaigns.subjectPl")}>
                  <input
                    required
                    value={form.subject_pl}
                    onChange={(e) => setForm({ ...form, subject_pl: e.target.value })}
                    className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                  />
                </Field>
                <Field label={t("adminPanel.campaigns.subjectEn")}>
                  <input
                    required
                    value={form.subject_en}
                    onChange={(e) => setForm({ ...form, subject_en: e.target.value })}
                    className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
                  />
                </Field>
              </div>
              <Field label={t("adminPanel.campaigns.bodyPl")}>
                <textarea
                  required
                  rows={6}
                  value={form.body_pl}
                  onChange={(e) => setForm({ ...form, body_pl: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm font-mono"
                />
              </Field>
              <Field label={t("adminPanel.campaigns.bodyEn")}>
                <textarea
                  required
                  rows={6}
                  value={form.body_en}
                  onChange={(e) => setForm({ ...form, body_en: e.target.value })}
                  className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm font-mono"
                />
              </Field>
              <p className="text-xs text-muted">{t("adminPanel.campaigns.bodyHint")}</p>
              <div className="flex justify-end gap-3 pt-4 border-t border-ink/10">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-xs tracking-wider2 uppercase text-muted px-4 py-2 hover:text-ink"
                >
                  {t("adminPanel.campaigns.cancel")}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-6 py-2.5 text-xs tracking-wider2 uppercase disabled:opacity-60"
                >
                  {saving ? t("adminPanel.campaigns.saving") : t("adminPanel.campaigns.save")}
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

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
