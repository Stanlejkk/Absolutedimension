import { useLocale } from "../../i18n";
import { useAuth } from "../../lib/AuthContext";

export default function AdminUsers() {
  const { t, formatDate } = useLocale();
  const { user, accounts, deleteAccount } = useAuth();
  if (!user) return null;

  function handleDelete(id: string) {
    if (typeof window !== "undefined" && !window.confirm(t("auth.admin.deleteConfirm"))) return;
    deleteAccount(id);
  }

  return (
    <div>
      <header className="mb-8">
        <h2 className="font-display text-3xl font-light">{t("adminPanel.nav.users")}</h2>
        <p className="text-muted mt-2 text-sm">{t("auth.admin.subtitle")}</p>
      </header>

      {accounts.length === 0 ? (
        <p className="text-muted">{t("auth.admin.empty")}</p>
      ) : (
        <div className="border border-ink/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink/[0.02] text-left">
              <tr>
                <Th>{t("auth.admin.tableName")}</Th>
                <Th>{t("auth.admin.tableEmail")}</Th>
                <Th>{t("auth.admin.tableRole")}</Th>
                <Th>{t("auth.admin.tableCreated")}</Th>
                <Th className="text-right">{t("auth.admin.tableActions")}</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {accounts.map((a) => {
                const isSelf = a.id === user.id;
                const roleLabel =
                  a.role === "admin"
                    ? t("auth.account.roleAdmin")
                    : t("auth.account.roleClient");
                return (
                  <tr key={a.id}>
                    <Td>
                      <span className="text-ink">{a.name}</span>
                      {isSelf && (
                        <span className="ml-2 text-[10px] tracking-wider2 uppercase text-muted border border-ink/20 px-1.5 py-0.5 rounded">
                          {t("auth.admin.youBadge")}
                        </span>
                      )}
                    </Td>
                    <Td className="text-muted">{a.email}</Td>
                    <Td>
                      <span
                        className={`text-xs tracking-wider2 uppercase ${
                          a.role === "admin" ? "text-ink" : "text-muted"
                        }`}
                      >
                        {roleLabel}
                      </span>
                    </Td>
                    <Td className="text-muted">{formatDate(a.createdAt)}</Td>
                    <Td className="text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(a.id)}
                        className="text-xs tracking-wider2 uppercase text-[#9a4a3a] hover:underline"
                      >
                        {t("auth.admin.delete")}
                      </button>
                    </Td>
                  </tr>
                );
              })}
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
