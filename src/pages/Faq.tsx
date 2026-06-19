import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** Frequently asked questions — payment, fulfilment, shipping, returns. */
export default function Faq() {
  const { pick } = useLocale();

  const qa: { q: { en: string; pl: string }; a: { en: string; pl: string } }[] = [
    {
      q: { en: "How can I pay?", pl: "Jak mogę zapłacić?" },
      a: {
        en: "Online card payment, BLIK and Przelewy24, fast bank transfer / PayPal, and Apple Pay. Made-to-order pieces are confirmed once payment is received.",
        pl: "Płatność kartą online, BLIK i Przelewy24, szybki przelew / PayPal oraz Apple Pay. Projekty szyte na zamówienie potwierdzamy po otrzymaniu płatności.",
      },
    },
    {
      q: { en: "How long do I have to pay?", pl: "Ile mam czasu na płatność?" },
      a: {
        en: "Up to 5 days. After that the order is treated as withdrawn and the piece returns to the shop.",
        pl: "Do 5 dni. Po tym czasie zamówienie traktujemy jako wycofane, a produkt wraca do sklepu.",
      },
    },
    {
      q: { en: "When will my order be made?", pl: "Kiedy zamówienie zostanie wykonane?" },
      a: {
        en: "You can order 24/7. Processing takes up to 14 days; in-stock pieces are usually shipped the same or next business day.",
        pl: "Zamawiać można 24/7. Realizacja trwa do 14 dni; dostępne egzemplarze wysyłamy zwykle tego samego lub następnego dnia roboczego.",
      },
    },
    {
      q: { en: "What about shipping?", pl: "A wysyłka?" },
      a: {
        en: "Poland: free above 250 zł, otherwise DHL 17 zł. Selected EU: free above 700 zł, otherwise 50 zł. DHL Express worldwide: 160 zł, 2–3 business days.",
        pl: "Polska: za darmo powyżej 250 zł, w innym razie DHL 17 zł. Wybrane kraje UE: za darmo powyżej 700 zł, w innym razie 50 zł. DHL Express na świecie: 160 zł, 2–3 dni robocze.",
      },
    },
    {
      q: { en: "Can I return or exchange?", pl: "Czy mogę zwrócić lub wymienić?" },
      a: {
        en: "Tailor-made pieces are non-returnable. Exchanges are possible within 14 days with the seller’s approval. Differences in screen colour are not grounds for complaint.",
        pl: "Produkty szyte na miarę nie podlegają zwrotowi. Wymiana możliwa w ciągu 14 dni za zgodą sprzedawcy. Różnice w odwzorowaniu koloru na monitorze nie są podstawą reklamacji.",
      },
    },
  ];

  return (
    <ContentPage
      eyebrow={pick({ en: "Help", pl: "Pomoc" })}
      title={pick({ en: "Frequently asked questions", pl: "Najczęstsze pytania" })}
    >
      {qa.map((item, i) => (
        <Section key={i} heading={pick(item.q)}>
          <p>{pick(item.a)}</p>
        </Section>
      ))}
    </ContentPage>
  );
}
