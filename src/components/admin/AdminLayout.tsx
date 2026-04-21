import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useLocale } from "../../i18n";
import { useAuth } from "../../lib/AuthContext";
import type { ReactNode } from "react";

/**
 * Shell for every page under /admin/*. Enforces the admin role gate and
 * renders a side navigation that the nested routes slot into via <Outlet />.
 */
export default function AdminLayout() {
  const { t } = useLocale();
  const { user, isReady } = useAuth();

  if (!isReady) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x text-center text-muted">{t("common.loading")}</div>
      </section>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70svh]">
        <div className="container-x max-w-lg mx-auto text-center">
          <p className="eyebrow mb-3">{t("adminPanel.panelTitle")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light">
            {t("adminPanel.deniedTitle")}
          </h1>
          <p className="mt-4 text-muted">{t("adminPanel.deniedBody")}</p>
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

  return (
    <section className="pt-28 md:pt-32 pb-24 min-h-[80svh]">
      <div className="container-x max-w-[80rem] mx-auto">
        <header className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">{t("adminPanel.panelTitle")}</p>
            <h1 className="font-display text-3xl md:text-4xl font-light">
              {t("auth.account.greeting", { name: user.name })}
            </h1>
          </div>
          <Link
            to="/"
            className="text-xs tracking-wider2 uppercase text-muted hover:text-ink transition"
          >
            ← {t("adminPanel.backToSite")}
          </Link>
        </header>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          <nav className="md:w-56 md:flex-shrink-0">
            <ul className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-ink/10 md:pr-6 -mx-4 px-4 md:mx-0 md:px-0">
              <SidebarLink to="/admin" end>
                {t("adminPanel.nav.overview")}
              </SidebarLink>
              <SidebarLink to="/admin/products">
                {t("adminPanel.nav.products")}
              </SidebarLink>
              <SidebarLink to="/admin/collections">
                {t("adminPanel.nav.collections")}
              </SidebarLink>
              <SidebarLink to="/admin/orders">
                {t("adminPanel.nav.orders")}
              </SidebarLink>
              <SidebarLink to="/admin/subscribers">
                {t("adminPanel.nav.subscribers")}
              </SidebarLink>
              <SidebarLink to="/admin/campaigns">
                {t("adminPanel.nav.campaigns")}
              </SidebarLink>
              <SidebarLink to="/admin/users">
                {t("adminPanel.nav.users")}
              </SidebarLink>
            </ul>
          </nav>

          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

function SidebarLink({
  to,
  end,
  children,
}: {
  to: string;
  end?: boolean;
  children: ReactNode;
}) {
  const location = useLocation();
  return (
    <li key={`${to}-${location.pathname}`} className="md:w-full">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          [
            "block whitespace-nowrap px-3 py-2 text-xs tracking-wider2 uppercase transition-colors rounded-sm",
            isActive
              ? "text-ink bg-ink/[0.04]"
              : "text-muted hover:text-ink hover:bg-ink/[0.02]",
          ].join(" ")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
