import { Link } from "react-router-dom";
import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** The SM.ART Garderobe concept page — the brand's core idea. */
export default function SmartWardrobe() {
  const { pick } = useLocale();

  const letters: { k: string; en: string; pl: string }[] = [
    { k: "S", en: "Spirit · authentic self-expression", pl: "Spirit · autentyczna ekspresja siebie" },
    { k: "M", en: "Mixture · harmony and composition", pl: "Mixture · harmonia i kompozycja" },
    { k: "A", en: "Amenability · freedom and functionality", pl: "Amenability · swoboda i funkcjonalność" },
    { k: "R", en: "Resourcefulness · intelligent simplicity", pl: "Resourcefulness · inteligentna prostota" },
    { k: "T", en: "Taste · nobility of form", pl: "Taste · szlachetność formy" },
  ];

  return (
    <ContentPage
      eyebrow={pick({ en: "About us", pl: "O nas" })}
      title={pick({ en: "SM.ART Garderobe", pl: "Garderoba SM.ART" })}
      intro={pick({
        en: "A form that allows you to live in harmony with yourself.",
        pl: "Forma, która pozwala żyć w zgodzie ze sobą.",
      })}
    >
      <Section>
        <p>
          {pick({
            en: "An original clothing system created from the need to combine aesthetics, freedom, and everyday life — for women who don’t want to choose between beauty and comfort, between expression and serenity, between femininity and freedom of movement. A wardrobe that doesn’t dominate a person, but supports their presence.",
            pl: "Autorski system ubioru stworzony z potrzeby połączenia estetyki, wolności i codzienności — dla kobiet, które nie chcą wybierać między pięknem a komfortem, między ekspresją a spokojem, między kobiecością a swobodą ruchu. Garderoba, która nie dominuje nad człowiekiem, lecz wspiera jego obecność.",
          })}
        </p>
        <p>
          {pick({
            en: "Each element has been designed to coexist with other forms. To layer. To flow. To change proportion, rhythm, and character — depending on the place, emotion, and moment in life. These are not fixed styles. It is a living system of forms.",
            pl: "Każdy element zaprojektowano tak, by współistniał z innymi formami. By się warstwił. By płynął. By zmieniał proporcje, rytm i charakter — w zależności od miejsca, emocji i momentu w życiu. To nie są ustalone style. To żywy system form.",
          })}
        </p>
      </Section>

      <Section heading={pick({ en: "What SM.ART means", pl: "Co znaczy SM.ART" })}>
        <ul className="space-y-3">
          {letters.map((l) => (
            <li key={l.k} className="flex gap-4">
              <span className="font-display text-2xl text-gold w-6 shrink-0">{l.k}</span>
              <span>{pick({ en: l.en, pl: l.pl })}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2 font-medium">
          {pick({ en: "Creativity · Composition · Comfort.", pl: "Kreatywność · Kompozycja · Komfort." })}
        </p>
      </Section>

      <Section heading={pick({ en: "44 forms, one wardrobe", pl: "44 formy, jedna garderoba" })}>
        <p>
          {pick({
            en: "The SM.ART Wardrobe is a carefully curated set of 44 combinable garments and accessories, handcrafted and made to order. Each piece is personalised — fabric colours, beadwork, coordinated jewellery and handbags — so a single wardrobe becomes a complete total look that grows with you over time.",
            pl: "Garderoba SM.ART to starannie skomponowany zestaw 44 łączalnych ubrań i akcesoriów, wykonywanych ręcznie i na zamówienie. Każdy element jest personalizowany — kolory tkanin, zdobienia, dobrana biżuteria i torebki — tak że jedna garderoba staje się kompletnym total lookiem, który rośnie razem z Tobą.",
          })}
        </p>
        <p className="italic text-muted">
          {pick({
            en: "Conscious production: each form is made only after an order is placed.",
            pl: "Świadoma produkcja: każda forma powstaje dopiero po złożeniu zamówienia.",
          })}
        </p>
      </Section>

      <div className="pt-4 flex flex-wrap gap-3">
        <Link to="/shop" className="rounded-full bg-ink text-bone px-6 py-3 text-sm tracking-wide hover:bg-ink/90 transition">
          {pick({ en: "Explore the wardrobe", pl: "Odkryj garderobę" })}
        </Link>
        <Link to="/source" className="rounded-full border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition">
          {pick({ en: "Source of creation", pl: "Źródło tworzenia" })}
        </Link>
      </div>
    </ContentPage>
  );
}
