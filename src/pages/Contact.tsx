import { useLocale } from "../i18n";
import Newsletter from "../components/Newsletter";
import ContentPage, { Section } from "../components/ContentPage";

/** Contact page — addresses, email, phones, opening hours, socials. */
export default function Contact() {
  const { pick } = useLocale();

  return (
    <>
      <ContentPage
        eyebrow={pick({ en: "Contact", pl: "Kontakt" })}
        title={pick({ en: "Talk to the atelier", pl: "Napisz do atelier" })}
        intro={pick({
          en: "For orders, personalisation, and appointments — we answer with care.",
          pl: "W sprawie zamówień, personalizacji i spotkań — odpowiadamy z uwagą.",
        })}
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <Section heading={pick({ en: "Write & call", pl: "Napisz i zadzwoń" })}>
            <p>
              <a href="mailto:info@absolutdimension.com" className="underline underline-offset-4 hover:text-gold">
                info@absolutdimension.com
              </a>
            </p>
            <p>
              <a href="tel:+48732808804" className="hover:text-gold">+48 732 808 804</a>
              <br />
              <a href="tel:+33685940600" className="hover:text-gold">+33 6 85 94 06 00</a>
            </p>
            <p className="text-muted">
              {pick({
                en: "Phone support: weekdays 10:00–18:00 (CET).",
                pl: "Wsparcie telefoniczne: dni robocze 10:00–18:00 (CET).",
              })}
            </p>
          </Section>

          <Section heading={pick({ en: "Visit", pl: "Odwiedź" })}>
            <p>
              88 Boulevard Raspail
              <br />
              75006 Paris, France
            </p>
            <p>
              Absolut Dimension sp. z o.o.
              <br />
              Jasnodworska 3b/270
              <br />
              {pick({ en: "Warsaw, Poland", pl: "Warszawa, Polska" })}
            </p>
            <p className="flex gap-4 pt-2">
              {[
                ["Instagram", "https://www.instagram.com/absolutdimension/"],
                ["Facebook", "https://www.facebook.com/absolutdimension/"],
                ["TikTok", "https://www.tiktok.com/@absolutdimension"],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                   className="text-xs tracking-wider2 uppercase underline underline-offset-4 hover:text-gold">
                  {label}
                </a>
              ))}
            </p>
          </Section>
        </div>
      </ContentPage>

      <Newsletter />
    </>
  );
}
