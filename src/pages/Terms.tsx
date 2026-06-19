import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** Terms & conditions (the shop "Statute"/Regulamin). */
export default function Terms() {
  const { pick } = useLocale();
  return (
    <ContentPage
      eyebrow={pick({ en: "Legal", pl: "Informacje prawne" })}
      title={pick({ en: "Terms & conditions", pl: "Regulamin" })}
      intro={pick({
        en: "The rules of sale for the Absolut Dimension online store.",
        pl: "Zasady sprzedaży w sklepie internetowym Absolut Dimension.",
      })}
    >
      <Section heading={pick({ en: "Seller", pl: "Sprzedawca" })}>
        <p>
          Absolut Dimension sp. z o.o., ul. Leśna 12, 06-200 Maków Mazowiecki, Polska.
          <br />
          NIP 7571482496 · REGON 363708545 · info@absolutdimension.com · +48 732 808 804
        </p>
      </Section>
      <Section heading={pick({ en: "Orders & contract", pl: "Zamówienia i umowa" })}>
        <p>{pick({
          en: "Orders can be placed 24/7. A sales contract is concluded when the order is confirmed. All prices are in PLN and include VAT. Many pieces are made individually to order after payment is received.",
          pl: "Zamówienia można składać 24/7. Umowa sprzedaży zostaje zawarta w chwili potwierdzenia zamówienia. Wszystkie ceny są w PLN i zawierają VAT. Wiele projektów powstaje indywidualnie na zamówienie po otrzymaniu płatności.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Right of withdrawal", pl: "Prawo odstąpienia" })}>
        <p>{pick({
          en: "Consumers may withdraw from the contract within 14 days, except for goods made to the customer’s specification or clearly personalised, which are not returnable.",
          pl: "Konsument może odstąpić od umowy w ciągu 14 dni, z wyjątkiem towarów wykonanych według specyfikacji klienta lub wyraźnie spersonalizowanych, które nie podlegają zwrotowi.",
        })}</p>
      </Section>
      <Section heading={pick({ en: "Warranty & complaints", pl: "Rękojmia i reklamacje" })}>
        <p>{pick({
          en: "Statutory warranty applies for two years. Complaints can be sent to info@absolutdimension.com and are handled in line with the full Regulations available on request.",
          pl: "Obowiązuje dwuletnia rękojmia ustawowa. Reklamacje można kierować na info@absolutdimension.com; rozpatrujemy je zgodnie z pełnym Regulaminem dostępnym na życzenie.",
        })}</p>
      </Section>
    </ContentPage>
  );
}
