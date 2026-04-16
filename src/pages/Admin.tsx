import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useAuth } from "../lib/AuthContext";

export default function Admin() {
  const { t, formatDate } = useLocale();
  const { user, accounts, deleteAccount } = useAuth();

  if (!user || user.role !== "admin") {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x max-w-lg mx-auto text-center">
          <p className="eyebrow mb-3">{t("auth.admin.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.admin.deniedTitle")}
          </h1>
          <p className="mt-4 text-muted">{t("auth.admin.deniedBody")}</p>
          <Link
            to="/login"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
          >
            {t("auth.navSignIn")}
          </Link>
        </div>
      </section>
    );
  }

  function handleDelete(id: string) {
    if (typeof window !== "undefined" && !window.confirm(t("auth.admin.deleteConfirm"))) return;
    deleteAccount(id);
  }

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-32 min-h-[70svh]">
      <div className="container-x max-w-5xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3">{t("auth.admin.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("auth.admin.title")}
          </h1>
          <p className="mt-4 text-muted">{t("auth.admin.subtitle")}</p>
        </motion.header>

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
    </section>
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
