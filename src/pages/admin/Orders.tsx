import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocale } from "../../i18n";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";
import { useFormatPrice } from "../../lib/useCatalog";
import { useToast } from "../../components/motion/Toast";

type OrderStatus = "pending" | "paid" | "fulfilled" | "shipped" | "refunded" | "canceled";

interface OrderRow {
  id: string;
  stripe_session_id: string;
  stripe_payment_intent: string | null;
  email: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  tracking_number: string | null;
  notes: string | null;
  shipping: { name?: string; phone?: string | null; address?: Record<string, string | null> } | null;
  locale: string;
  created_at: string;
}

interface OrderItemRow {
  id: string;
  name: string;
  size: string;
  quantity: number;
  unit_amount: number;
  image: string;
}

const STATUSES: OrderStatus[] = ["pending", "paid", "fulfilled", "shipped", "refunded", "canceled"];

export default function AdminOrders() {
  const { orderId } = useParams();
  if (orderId) return <OrderDetailView id={orderId} />;
  return <OrderList />;
}

function OrderList() {
  const { t, formatDate } = useLocale();
  const formatPrice = useFormatPrice();
  const [rows, setRows] = useState<OrderRow[] | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setRows([]);
      return;
    }
    supabase
      .from("orders")
      .select("id, stripe_session_id, email, amount, status, created_at")
      .order("created_at", { ascending: false })
      .returns<OrderRow[]>()
      .then((r) => setRows(r.data ?? []));
  }, []);

  return (
    <div>
      <header className="mb-8">
        <h2 className="font-display text-3xl font-light">{t("adminPanel.orders.title")}</h2>
        <p className="text-muted mt-2 text-sm">{t("adminPanel.orders.subtitle")}</p>
      </header>

      {rows === null ? (
        <p className="text-muted">{t("common.loading")}</p>
      ) : rows.length === 0 ? (
        <p className="text-muted">{t("adminPanel.orders.empty")}</p>
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
              {rows.map((o) => (
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

function OrderDetailView({ id }: { id: string }) {
  const { t, formatDate } = useLocale();
  const formatPrice = useFormatPrice();
  const nav = useNavigate();
  const { push } = useToast();
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [items, setItems] = useState<OrderItemRow[]>([]);
  const [status, setStatus] = useState<OrderStatus>("pending");
  const [tracking, setTracking] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useMemo(
    () => async () => {
      if (!supabase) return;
      const [o, it] = await Promise.all([
        supabase.from("orders").select("*").eq("id", id).maybeSingle<OrderRow>(),
        supabase.from("order_items").select("*").eq("order_id", id).returns<OrderItemRow[]>(),
      ]);
      if (o.data) {
        setOrder(o.data);
        setStatus(o.data.status);
        setTracking(o.data.tracking_number ?? "");
        setNotes(o.data.notes ?? "");
      }
      setItems(it.data ?? []);
    },
    [id],
  );

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    if (!supabase) return;
    setSaving(true);
    const res = await supabase
      .from("orders")
      .update({
        status,
        tracking_number: tracking || null,
        notes: notes || null,
      })
      .eq("id", id);
    setSaving(false);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    push({ title: t("adminPanel.orders.savedToast"), kind: "success" });
    await load();
  }

  if (!order) return <p className="text-muted">{t("common.loading")}</p>;

  const addressLines = order.shipping?.address
    ? [
        order.shipping.address.line1,
        order.shipping.address.line2,
        [order.shipping.address.postal_code, order.shipping.address.city]
          .filter(Boolean)
          .join(" "),
        order.shipping.address.country,
      ].filter(Boolean)
    : [];

  return (
    <div>
      <button
        type="button"
        onClick={() => nav("/admin/orders")}
        className="text-xs tracking-wider2 uppercase text-muted hover:text-ink mb-6"
      >
        ← {t("adminPanel.orders.backToList")}
      </button>
      <header className="mb-8">
        <p className="eyebrow mb-2">{t("adminPanel.orders.detailTitle")}</p>
        <h2 className="font-display text-3xl font-light">
          {t("adminPanel.orders.tableNumber")} · {order.stripe_session_id.slice(-10)}
        </h2>
        <p className="text-muted mt-2 text-sm">
          {order.email} · {formatDate(order.created_at)}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section className="border border-ink/10">
            <h3 className="eyebrow p-4 border-b border-ink/10">
              {t("adminPanel.orders.itemsLabel")}
            </h3>
            <ul className="divide-y divide-ink/10">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-4 p-4">
                  <div className="h-16 w-12 bg-bone-2 overflow-hidden flex-shrink-0">
                    {it.image ? (
                      <img
                        src={it.image}
                        alt=""
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
            <div className="flex justify-between items-baseline p-4 border-t border-ink/10 bg-ink/[0.02]">
              <span className="text-xs tracking-wider2 uppercase text-muted">
                {t("ordersPage.total")}
              </span>
              <span className="text-lg tabular-nums">{formatPrice(order.amount)}</span>
            </div>
          </section>

          {addressLines.length > 0 && (
            <section className="border border-ink/10 p-4">
              <h3 className="eyebrow mb-3">{t("adminPanel.orders.shippingLabel")}</h3>
              <p className="text-sm text-ink">{order.shipping?.name}</p>
              {order.shipping?.phone ? (
                <p className="text-sm text-muted">{order.shipping.phone}</p>
              ) : null}
              <div className="text-sm text-muted mt-2 space-y-0.5">
                {addressLines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <Field label={t("adminPanel.orders.statusLabel")}>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as OrderStatus)}
              className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("adminPanel.orders.trackingLabel")}>
            <input
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
            />
          </Field>
          <Field label={t("adminPanel.orders.notesLabel")}>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
            />
          </Field>
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="w-full inline-flex items-center justify-center rounded-full bg-ink text-bone px-6 py-2.5 text-xs tracking-wider2 uppercase disabled:opacity-60"
          >
            {saving ? t("adminPanel.products.saving") : t("adminPanel.orders.save")}
          </button>
          {order.stripe_payment_intent ? (
            <a
              href={`https://dashboard.stripe.com/payments/${order.stripe_payment_intent}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center text-xs tracking-wider2 uppercase text-muted hover:text-ink"
            >
              {t("adminPanel.orders.viewOnStripe")} ↗
            </a>
          ) : null}
        </aside>
      </div>
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
