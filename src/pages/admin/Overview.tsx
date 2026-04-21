import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../i18n";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";
import { useFormatPrice } from "../../lib/useCatalog";

interface RecentOrder {
  id: string;
  email: string;
  amount: number;
  status: string;
  created_at: string;
  stripe_session_id: string;
}

interface Counts {
  products: number | null;
  collections: number | null;
  ordersToday: number | null;
  subscribers: number | null;
  recent: RecentOrder[];
}

export default function AdminOverview() {
  const { t, formatDate } = useLocale();
  const formatPrice = useFormatPrice();
  const [counts, setCounts] = useState<Counts>({
    products: null,
    collections: null,
    ordersToday: null,
    subscribers: null,
    recent: [],
  });

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    let cancelled = false;
    (async () => {
      const client = supabase!;
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const [products, collections, ordersToday, subs, recent] = await Promise.all([
        client.from("products").select("id", { count: "exact", head: true }),
        client.from("collections").select("id", { count: "exact", head: true }),
        client
          .from("orders")
          .select("id", { count: "exact", head: true })
          .gte("created_at", startOfDay.toISOString()),
        client
          .from("newsletter_subscribers")
          .select("id", { count: "exact", head: true })
          .eq("status", "confirmed"),
        client
          .from("orders")
          .select("id, email, amount, status, created_at, stripe_session_id")
          .order("created_at", { ascending: false })
          .limit(5)
          .returns<RecentOrder[]>(),
      ]);
      if (cancelled) return;
      setCounts({
        products: products.count ?? null,
        collections: collections.count ?? null,
        ordersToday: ordersToday.count ?? null,
        subscribers: subs.count ?? null,
        recent: recent.data ?? [],
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <header className="mb-8">
        <h2 className="font-display text-3xl font-light">{t("adminPanel.overview.title")}</h2>
        <p className="text-muted mt-2 text-sm">{t("adminPanel.overview.subtitle")}</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Stat label={t("adminPanel.overview.productsCount")} value={counts.products} />
        <Stat label={t("adminPanel.overview.collectionsCount")} value={counts.collections} />
        <Stat label={t("adminPanel.overview.ordersToday")} value={counts.ordersToday} />
        <Stat label={t("adminPanel.overview.subscribersCount")} value={counts.subscribers} />
      </div>

      <h3 className="eyebrow mb-4">{t("adminPanel.overview.recentOrders")}</h3>
      {counts.recent.length === 0 ? (
        <p className="text-muted text-sm">{t("adminPanel.overview.noRecentOrders")}</p>
      ) : (
        <div className="border border-ink/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink/[0.02] text-left">
              <tr>
                <Th>{t("adminPanel.orders.tableNumber")}</Th>
                <Th>{t("adminPanel.orders.tableEmail")}</Th>
                <Th>{t("adminPanel.orders.tableTotal")}</Th>
                <Th>{t("adminPanel.orders.tableStatus")}</Th>
                <Th>{t("adminPanel.orders.tableCreated")}</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {counts.recent.map((o) => (
                <tr key={o.id}>
                  <Td>
                    <Link
                      to={`/admin/orders/${o.id}`}
                      className="text-ink underline underline-offset-2"
                    >
                      {o.stripe_session_id.slice(-10)}
                    </Link>
                  </Td>
                  <Td className="text-muted">{o.email}</Td>
                  <Td className="tabular-nums">{formatPrice(o.amount)}</Td>
                  <Td className="text-xs tracking-wider2 uppercase text-muted">{o.status}</Td>
                  <Td className="text-muted">{formatDate(o.created_at)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="border border-ink/10 p-5">
      <p className="text-[10px] tracking-wider2 uppercase text-muted">{label}</p>
      <p className="mt-2 font-display text-4xl font-light">
        {value === null ? "—" : value}
      </p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-xs tracking-wider2 uppercase text-muted font-medium">
      {children}
    </th>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-middle ${className}`}>{children}</td>;
}
