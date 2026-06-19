import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** Returns & exchanges policy. */
export default function Returns() {
  const { pick } = useLocale();
  return (
    <ContentPage
      eyebrow={pick({ en: "Help", pl: "Pomoc" })}
      title={pick({ en: "Returns & exchanges", pl: "Zwroty i wymiany" })}
      intro={pick({
        en: "Each piece is made consciously, individually, and often to measure — please choose with care.",
        pl: "Każdy egzemplarz powstaje świadomie, indywidualnie i często na miarę — prosimy o uważny wybór.",
      })}
    >
      <Section heading={pick({ en: "Made-to-measure", pl: "Szyte na miarę" })}>
        <p>{pick({
          en: "Custom-made products are non-returnable, as they are created individually for you.",
          pl: "Produkty szyte na miarę nie podlegają zwrotowi, ponieważ powstają indywidualnie dla Ciebie.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Exchanges", pl: "Wymiany" })}>
        <p>{pick({
          en: "Exchanges are possible within 14 days of receipt, with the seller’s consent. Write to info@absolutdimension.com with your order number, and include the sales document. The original price is credited toward the new piece; any difference is charged or refunded via the original payment method.",
          pl: "Wymiana możliwa w ciągu 14 dni od otrzymania, za zgodą sprzedawcy. Napisz na info@absolutdimension.com z numerem zamówienia i dołącz dokument sprzedaży. Pierwotna cena jest zaliczana na poczet nowego egzemplarza; różnicę dopłacasz lub zwracamy ją oryginalną metodą płatności.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Return address", pl: "Adres do zwrotu" })}>
        <p>
          Absolut Dimension sp. z o.o.
          <br />
          Jasnodworska 3b/270
          <br />
          {pick({ en: "Warsaw, Poland", pl: "Warszawa, Polska" })}
        </p>
      </Section>
      <Section heading={pick({ en: "Good to know", pl: "Warto wiedzieć" })}>
        <p>{pick({
          en: "Differences in how colour appears on your screen are not grounds for complaint.",
          pl: "Różnice w odwzorowaniu koloru na ekranie nie stanowią podstawy do reklamacji.",
        })}</p>
      </Section>
    </ContentPage>
  );
}
