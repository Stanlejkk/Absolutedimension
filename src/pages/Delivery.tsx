import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** Delivery / shipping information. */
export default function Delivery() {
  const { pick } = useLocale();
  return (
    <ContentPage
      eyebrow={pick({ en: "Help", pl: "Pomoc" })}
      title={pick({ en: "Delivery", pl: "Dostawa" })}
      intro={pick({
        en: "Most pieces are made to order. Shipping time is up to 4 days; in-stock items leave the same or next business day.",
        pl: "Większość projektów powstaje na zamówienie. Czas wysyłki to do 4 dni; produkty dostępne wysyłamy tego samego lub następnego dnia roboczego.",
      })}
    >
      <Section heading={pick({ en: "Poland", pl: "Polska" })}>
        <p>{pick({
          en: "Free shipping on orders above 250 zł. Otherwise DHL courier — 17 zł.",
          pl: "Darmowa wysyłka przy zamówieniach powyżej 250 zł. W innym razie kurier DHL — 17 zł.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "European Union", pl: "Unia Europejska" })}>
        <p>{pick({
          en: "Selected EU countries (Austria, France, Germany, Italy, Spain and more): free above 700 zł, otherwise 50 zł. DHL delivery in 3–5 business days. DHL Express: 160 zł, 2–3 business days.",
          pl: "Wybrane kraje UE (Austria, Francja, Niemcy, Włochy, Hiszpania i inne): za darmo powyżej 700 zł, w innym razie 50 zł. Dostawa DHL w 3–5 dni roboczych. DHL Express: 160 zł, 2–3 dni robocze.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Worldwide", pl: "Cały świat" })}>
        <p>{pick({
          en: "DHL courier — 80 zł, 4–5 business days. Customs clearance outside the EU is covered by the customer.",
          pl: "Kurier DHL — 80 zł, 4–5 dni roboczych. Odprawę celną poza UE pokrywa klient.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Help", pl: "Pomoc" })}>
        <p>{pick({
          en: "Questions? Call +48 732 808 804, weekdays 10:00–18:00.",
          pl: "Pytania? Zadzwoń +48 732 808 804, dni robocze 10:00–18:00.",
        })}</p>
      </Section>
    </ContentPage>
  );
}
