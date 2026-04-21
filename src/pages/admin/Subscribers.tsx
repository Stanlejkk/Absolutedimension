import { useEffect, useState } from "react";
import { useLocale } from "../../i18n";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";

interface SubscriberRow {
  id: string;
  email: string;
  locale: string;
  status: "pending" | "confirmed" | "unsubscribed";
  created_at: string;
  confirmed_at: string | null;
}

export default function AdminSubscribers() {
  const { t, formatDate } = useLocale();
  const [rows, setRows] = useState<SubscriberRow[] | null>(null);

  async function refresh() {
    if (!supabase) return;
    const res = await supabase
      .from("newsletter_subscribers")
      .select("id, email, locale, status, created_at, confirmed_at")
      .order("created_at", { ascending: false })
      .returns<SubscriberRow[]>();
    setRows(res.data ?? []);
  }

  useEffect(() => {
    if (isSupabaseConfigured) refresh();
    else setRows([]);
  }, []);

  async function handleDelete(id: string) {
    if (!supabase) return;
    if (!window.confirm(t("adminPanel.subscribers.deleteConfirm"))) return;
    const res = await supabase.from("newsletter_subscribers").delete().eq("id", id);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    await refresh();
  }

  function exportCsv() {
    if (!rows) return;
    const header = ["email", "status", "locale", "created_at", "confirmed_at"];
    const lines = [header.join(",")];
    for (const r of rows) {
      lines.push(
        [r.email, r.status, r.locale, r.created_at, r.confirmed_at ?? ""]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(","),
      );
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-light">
            {t("adminPanel.subscribers.title")}
          </h2>
          <p className="text-muted mt-2 text-sm">{t("adminPanel.subscribers.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={exportCsv}
          disabled={!rows || rows.length === 0}
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-xs tracking-wider2 uppercase hover:bg-ink/[0.03] disabled:opacity-40"
        >
          {t("adminPanel.subscribers.exportCsv")}
        </button>
      </header>

      {rows === null ? (
        <p className="text-muted">{t("common.loading")}</p>
      ) : rows.length === 0 ? (
        <p className="text-muted">{t("adminPanel.subscribers.empty")}</p>
      ) : (
        <div className="border border-ink/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink/[0.02] text-left">
              <tr>
                <Th>{t("adminPanel.subscribers.tableEmail")}</Th>
                <Th>{t("adminPanel.subscribers.tableStatus")}</Th>
                <Th>{t("adminPanel.subscribers.tableLocale")}</Th>
                <Th>{t("adminPanel.subscribers.tableJoined")}</Th>
                <Th className="text-right">{t("adminPanel.subscribers.tableActions")}</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {rows.map((s) => (
                <tr key={s.id}>
                  <Td>{s.email}</Td>
                  <Td>
                    <span
                      className={`text-xs tracking-wider2 uppercase ${
                        s.status === "confirmed" ? "text-ink" : "text-muted"
                      }`}
                    >
                      {t(
                        `adminPanel.subscribers.statuses.${s.status}` as
                          | "adminPanel.subscribers.statuses.confirmed"
                          | "adminPanel.subscribers.statuses.pending"
                          | "adminPanel.subscribers.statuses.unsubscribed",
                      )}
                    </span>
                  </Td>
                  <Td className="text-muted uppercase text-xs">{s.locale}</Td>
                  <Td className="text-muted">{formatDate(s.created_at)}</Td>
                  <Td className="text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(s.id)}
                      className="text-xs tracking-wider2 uppercase text-[#9a4a3a] hover:underline"
                    >
                      {t("adminPanel.subscribers.delete")}
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
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
