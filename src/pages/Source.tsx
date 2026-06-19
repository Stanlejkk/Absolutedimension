import { useLocale } from "../i18n";
import ContentPage, { Section } from "../components/ContentPage";

/** "Source of Creation" — the brand's origin and creative roots. */
export default function Source() {
  const { pick } = useLocale();

  const pillars: { t: { en: string; pl: string }; d: { en: string; pl: string } }[] = [
    {
      t: { en: "Art & Craftsmanship", pl: "Sztuka i rzemiosło" },
      d: {
        en: "Form is not decoration — but a carrier of emotion, atmosphere, and meaning.",
        pl: "Forma nie jest dekoracją — lecz nośnikiem emocji, atmosfery i znaczenia.",
      },
    },
    {
      t: { en: "Structure", pl: "Struktura" },
      d: {
        en: "Precision, patience, and conscious design.",
        pl: "Precyzja, cierpliwość i świadome projektowanie.",
      },
    },
    {
      t: { en: "Movement & Space", pl: "Ruch i przestrzeń" },
      d: {
        en: "A life lived between places, cultures, and travel.",
        pl: "Życie toczące się między miejscami, kulturami i podróżą.",
      },
    },
  ];

  return (
    <ContentPage
      eyebrow={pick({ en: "About us", pl: "O nas" })}
      title={pick({ en: "Source of Creation", pl: "Źródło tworzenia" })}
      intro={pick({
        en: "Form as a way of experiencing the world.",
        pl: "Forma jako sposób doświadczania świata.",
      })}
    >
      <Section heading={pick({ en: "Where it all began", pl: "Gdzie się wszystko zaczęło" })}>
        <p>
          {pick({
            en: "Absolut Dimension was born from a multigenerational presence of art, creation, and movement. The brand grew in a world where form was a natural language for expressing emotion. Women in the family created fabrics, clothing, paintings, spaces and stages; the men sculpted forms from wood, built, and gave shape to matter. Opera, theatre, craftsmanship, travel, and functional art became the natural foundation of their aesthetic language.",
            pl: "Absolut Dimension narodził się z wielopokoleniowej obecności sztuki, tworzenia i ruchu. Marka wyrosła w świecie, w którym forma była naturalnym językiem wyrażania emocji. Kobiety w rodzinie tworzyły tkaniny, ubrania, obrazy, przestrzenie i scenografie; mężczyźni rzeźbili formy z drewna, budowali i nadawali kształt materii. Opera, teatr, rzemiosło, podróże i sztuka użytkowa stały się naturalnym fundamentem ich języka estetycznego.",
          })}
        </p>
        <p>
          {pick({
            en: "The turning point was Africa. There, among vast spaces, light, and freedom of movement, the first forms of Absolut Dimension were born — and the understanding that clothing could be something more than fashion. Clothing can become presence, movement, atmosphere, and the experience of oneself.",
            pl: "Punktem zwrotnym była Afryka. Tam, pośród rozległych przestrzeni, światła i swobody ruchu, narodziły się pierwsze formy Absolut Dimension — i zrozumienie, że ubranie może być czymś więcej niż modą. Ubranie może stać się obecnością, ruchem, atmosferą i doświadczeniem samej siebie.",
          })}
        </p>
        <blockquote className="border-l-2 border-gold pl-5 italic text-muted">
          {pick({
            en: "“Absolut Dimension was not created from the need to follow trends. It was created from the need to build a space where a woman can feel herself — lightly, authentically, and without struggle.”",
            pl: "„Absolut Dimension nie powstał z potrzeby podążania za trendami. Powstał z potrzeby zbudowania przestrzeni, w której kobieta może czuć siebie — lekko, autentycznie i bez walki.”",
          })}
        </blockquote>
      </Section>

      <Section heading={pick({ en: "Three roots", pl: "Trzy korzenie" })}>
        <div className="grid sm:grid-cols-3 gap-8 not-prose">
          {pillars.map((p, i) => (
            <div key={i} className="border-t border-ink/15 pt-5">
              <p className="eyebrow text-muted mb-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-xl font-light mb-2">{pick(p.t)}</h3>
              <p className="text-sm leading-relaxed text-muted">{pick(p.d)}</p>
            </div>
          ))}
        </div>
      </Section>
    </ContentPage>
  );
}
