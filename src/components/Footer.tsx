import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCategoryLabels, useCollections } from "../lib/useCatalog";
import { useLocale } from "../i18n";

// A short, curated set of category links for the footer
const shopCategoryKeys = ["dress", "coat", "top", "skirt", "set", "blazer"] as const;

export default function Footer() {
  const { t } = useLocale();
  const collections = useCollections();
  const categoryLabels = useCategoryLabels();

  const shopLinks = [
    { label: t("footer.links.newArrivals"), to: "/shop?view=new" },
    ...shopCategoryKeys.map((k) => ({ label: categoryLabels[k], to: `/shop?cat=${k}` })),
  ];

  const houseLinks = [
    { label: t("footer.links.atelier"), to: "/about" },
    { label: t("footer.links.smartWardrobe"), to: "/smart-wardrobe" },
    { label: t("footer.links.source"), to: "/source" },
    { label: t("footer.links.journal"), to: "/blog" },
  ];

  const careLinks = [
    { label: t("footer.links.contact"), to: "/contact" },
    { label: t("footer.links.faq"), to: "/faq" },
    { label: t("footer.links.shipping"), to: "/delivery" },
    { label: t("footer.links.returns"), to: "/returns" },
  ];

  const socials = [
    ["Instagram", "https://www.instagram.com/absolutdimension/"],
    ["Facebook", "https://www.facebook.com/absolutdimension/"],
    ["TikTok", "https://www.tiktok.com/@absolutdimension"],
  ];

  return (
    <footer id="footer" className="relative bg-ink text-bone overflow-hidden">
      <div className="container-x pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-10 pb-16 border-b border-bone/10"
        >
          <div className="md:col-span-5">
            <img
              src="https://www.absolutdimension.com/cdn/shop/files/logo_www_transparent.png?v=1760455149&width=400"
              alt="Absolut Dimension"
              width={400}
              height={69}
              className="h-6 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="font-display text-4xl md:text-5xl font-light leading-[1.1]">
              {t("footer.headline1")} <br />
              {t("footer.headline2")}{" "}
              <span className="italic">{t("footer.headlineItalic")}</span>
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bone/20 px-4 py-2 text-xs tracking-wider2 uppercase hover:bg-bone hover:text-ink transition"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
              {collections.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  to={`/collections/${c.slug}`}
                  className="text-xs tracking-wide text-bone/70 hover:text-bone transition-colors"
                >
                  → {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="eyebrow text-bone/60 mb-4">{t("footer.colShop")}</p>
              <ul className="space-y-2.5">
                {shopLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/shop" className="text-sm text-bone italic hover:text-gold transition-colors">
                    {t("footer.links.shopAll")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-bone/60 mb-4">{t("footer.colHouse")}</p>
              <ul className="space-y-2.5">
                {houseLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-bone/60 mb-4">{t("footer.colCare")}</p>
              <ul className="space-y-2.5">
                {careLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-10 mt-10 border-t border-bone/10 text-xs tracking-wide text-bone/60">
          <p>© {new Date().getFullYear()} {t("footer.company")} {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-bone">{t("footer.legal.privacy")}</Link>
            <Link to="/terms" className="hover:text-bone">{t("footer.legal.terms")}</Link>
            <Link to="/faq" className="hover:text-bone">{t("footer.legal.cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
