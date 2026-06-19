import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** Privacy policy — summary of the brand's GDPR-compliant practice. */
export default function Privacy() {
  const { pick } = useLocale();
  return (
    <ContentPage
      eyebrow={pick({ en: "Legal", pl: "Informacje prawne" })}
      title={pick({ en: "Privacy policy", pl: "Polityka prywatności" })}
    >
      <Section heading={pick({ en: "Data controller", pl: "Administrator danych" })}>
        <p>
          Absolut Dimension sp. z o.o., ul. Leśna 12, 06-200 Maków Mazowiecki, Polska.
          <br />
          NIP 7571482496 · REGON 363708545 · info@absolutdimension.com
        </p>
      </Section>
      <Section heading={pick({ en: "What we collect & why", pl: "Co zbieramy i po co" })}>
        <p>{pick({
          en: "We process personal data you provide when registering an account, placing an order, subscribing to the newsletter, or contacting us — solely to fulfil orders, answer enquiries, and (with consent) send marketing. Data is kept only as long as necessary for these purposes and legal obligations.",
          pl: "Przetwarzamy dane osobowe podane przy zakładaniu konta, składaniu zamówienia, zapisie do newslettera lub kontakcie z nami — wyłącznie w celu realizacji zamówień, odpowiedzi na zapytania oraz (za zgodą) wysyłki marketingu. Dane przechowujemy tylko tak długo, jak to konieczne dla tych celów i obowiązków prawnych.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Your rights", pl: "Twoje prawa" })}>
        <p>{pick({
          en: "Under the GDPR you may access, correct, delete, or restrict the processing of your data, object to processing, and withdraw consent at any time. Newsletter emails always include a one-click unsubscribe link.",
          pl: "Zgodnie z RODO masz prawo dostępu, sprostowania, usunięcia lub ograniczenia przetwarzania danych, wniesienia sprzeciwu oraz wycofania zgody w każdej chwili. Każdy newsletter zawiera link do wypisania się jednym kliknięciem.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Security & partners", pl: "Bezpieczeństwo i partnerzy" })}>
        <p>{pick({
          en: "Connections are secured with SSL. The store runs on Shopify infrastructure; we use analytics and payment partners (e.g. Stripe, Przelewy24) bound by their own privacy and security terms. Server logs are retained for up to 24 months.",
          pl: "Połączenia są zabezpieczone SSL. Sklep działa na infrastrukturze Shopify; korzystamy z partnerów analitycznych i płatniczych (np. Stripe, Przelewy24) związanych własnymi warunkami prywatności i bezpieczeństwa. Logi serwera przechowujemy do 24 miesięcy.",
        })}</p>
      </Section>
    </ContentPage>
  );
}
