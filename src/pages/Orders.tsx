import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../i18n";
import { useAuth } from "../lib/AuthContext";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { useFormatPrice } from "../lib/useCatalog";

type OrderStatus = "pending" | "paid" | "fulfilled" | "shipped" | "refunded" | "canceled";

interface OrderItemRow {
  id: string;
  name: string;
  size: string;
  quantity: number;
  unit_amount: number;
  image: string;
}

interface OrderRow {
  id: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  created_at: string;
  tracking_number: string | null;
  stripe_session_id: string;
  order_items: OrderItemRow[];
}

export default function Orders() {
  const { t, formatDate } = useLocale();
  const formatPrice = useFormatPrice();
  const { user, isReady } = useAuth();
  const [orders, setOrders] = useState<OrderRow[] | null>(null);

  useEffect(() => {
    if (!user || !isSupabaseConfigured || !supabase) {
      setOrders([]);
      return;
    }
    let cancelled = false;
    (async () => {
      const res = await supabase!
        .from("orders")
        .select("id, amount, currency, status, created_at, tracking_number, stripe_session_id, order_items(*)")
        .order("created_at", { ascending: false })
        .returns<OrderRow[]>();
      if (cancelled) return;
      if (res.error) {
        console.error(res.error);
        setOrders([]);
      } else {
        setOrders(res.data ?? []);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (!isReady) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x text-center text-muted">{t("common.loading")}</div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x max-w-lg mx-auto text-center">
          <p className="eyebrow mb-3">{t("ordersPage.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("ordersPage.notSignedInTitle")}
          </h1>
          <p className="mt-4 text-muted">{t("ordersPage.notSignedInBody")}</p>
          <Link
            to="/login"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink text-bone px-8 py-3 text-sm tracking-wider2 uppercase"
          >
            {t("ordersPage.signIn")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-32 pb-24 md:pb-32 min-h-[70svh]">
      <div className="container-x max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3">{t("ordersPage.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("ordersPage.title")}
          </h1>
        </motion.header>

        {orders === null ? (
          <p className="text-muted">{t("common.loading")}</p>
        ) : orders.length === 0 ? (
          <div className="text-center py-16 border border-ink/10">
            <p className="text-muted mb-6">{t("ordersPage.empty")}</p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wider2 uppercase"
            >
              {t("ordersPage.emptyCta")}
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((o) => (
              <article key={o.id} className="border border-ink/10 p-5 md:p-6">
                <header className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-ink/10">
                  <div>
                    <p className="text-xs tracking-wider2 uppercase text-muted">
                      {t("ordersPage.orderNumber")} · <span className="text-ink">{o.stripe_session_id.slice(-10)}</span>
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {t("ordersPage.placedOn", { date: formatDate(o.created_at) })}
                    </p>
                  </div>
                  <span className="text-xs tracking-wider2 uppercase text-ink border border-ink/20 rounded-full px-3 py-1">
                    {t(`ordersPage.statuses.${o.status}` as "ordersPage.statuses.paid")}
                  </span>
                </header>
                <ul className="mt-4 divide-y divide-ink/5">
                  {o.order_items.map((it) => (
                    <li key={it.id} className="flex items-center gap-4 py-3">
                      <div className="h-16 w-12 bg-bone-2 overflow-hidden flex-shrink-0">
                        {it.image ? (
                          <img
                            src={it.image}
                            alt={it.name}
                            className="h-full w-full object-cover object-top"
                          />
                        ) : null}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-base truncate">{it.name}</p>
                        <p className="text-xs text-muted mt-1">
                          {it.size ? `${it.size} · ` : ""}
                          {it.quantity} × {formatPrice(it.unit_amount)}
                        </p>
                      </div>
                      <span className="text-sm tabular-nums">
                        {formatPrice(it.unit_amount * it.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>
                <footer className="mt-4 pt-4 border-t border-ink/10 flex items-baseline justify-between">
                  <span className="text-xs tracking-wider2 uppercase text-muted">
                    {t("ordersPage.total")}
                  </span>
                  <span className="text-lg tabular-nums">{formatPrice(o.amount)}</span>
                </footer>
                {o.tracking_number ? (
                  <p className="mt-3 text-xs text-muted">
                    {t("ordersPage.trackingLabel")}: <span className="text-ink">{o.tracking_number}</span>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
