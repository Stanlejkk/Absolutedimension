/**
 * Full editorial body content for each Journal letter, in both languages.
 *
 * The bodies live here (rather than inside data.ts) so that the catalog file
 * stays focused on metadata. Each block is rendered by <BlogPost> via a
 * small switch on `type`. These mirror the real "The Art of Refined Dressing"
 * journal at absolutdimension.com — poetic, fragmentary, intentionally quiet.
 */

import type { LocalizedString } from "../i18n";

export type BlogBlock =
  | { type: "p"; text: LocalizedString }
  | { type: "lead"; text: LocalizedString }
  | { type: "quote"; text: LocalizedString; cite?: LocalizedString }
  | { type: "h2"; text: LocalizedString }
  | { type: "signoff"; text: LocalizedString };

export const blogBodies: Record<string, BlogBlock[]> = {
  /* ───────────────────────────── . S i l e n t . ─────────────────────────── */
  "s-i-l-e-n-t": [
    {
      type: "lead",
      text: {
        en: "Silence. This is where you are born. The right one. You don’t scream. You don’t have to. What is yours simply flows out.",
        pl: "Cisza. To tutaj się rodzisz. Ta właściwa. Nie krzyczysz. Nie musisz. To, co Twoje, po prostu wypływa.",
      },
    },
    {
      type: "p",
      text: {
        en: "Before the day asks anything of you, there is a quiet hour that belongs only to you. No noise, no audience — just the body waking and the slow decision of who you will be today.",
        pl: "Zanim dzień czegokolwiek od Ciebie zażąda, istnieje cicha godzina, która należy tylko do Ciebie. Bez hałasu, bez widowni — tylko budzące się ciało i powolna decyzja, kim dziś będziesz.",
      },
    },
    {
      type: "p",
      text: {
        en: "We dress from that silence, not against it. A form that does not perform. A fabric that lets you breathe. Presence rather than display — the truth of a feeling instead of a trend.",
        pl: "Ubieramy się z tej ciszy, a nie wbrew niej. Forma, która nie odgrywa roli. Tkanina, która pozwala oddychać. Obecność zamiast pokazu — prawda uczucia zamiast trendu.",
      },
    },
    {
      type: "quote",
      text: {
        en: "Paradise exists within you.",
        pl: "Raj istnieje w Tobie.",
      },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],

  /* ───────────────────────── . LIFE is about STYLE . ─────────────────────── */
  "life-is-about-style": [
    {
      type: "lead",
      text: {
        en: "Our dreams are worthy. Our value is meaningful. Life is about your style.",
        pl: "Nasze marzenia są wartościowe. Nasza wartość ma znaczenie. Życie jest o Twoim stylu.",
      },
    },
    {
      type: "p",
      text: {
        en: "Style is not what others approve of. It is what happens when you stop asking. When you connect with your own self, you synchronise with the living, creative element of life.",
        pl: "Styl to nie to, co inni akceptują. To, co dzieje się, gdy przestajesz pytać. Kiedy łączysz się z własnym „ja”, synchronizujesz się z żywym, twórczym pierwiastkiem życia.",
      },
    },
    {
      type: "p",
      text: {
        en: "So we invite ourselves back to ourselves. We choose forms that hold this invitation open — light, free, unmistakably our own.",
        pl: "Więc zapraszamy siebie z powrotem do siebie. Wybieramy formy, które utrzymują to zaproszenie otwartym — lekkie, wolne, niewątpliwie własne.",
      },
    },
    {
      type: "quote",
      text: { en: "I invite my Self to me.", pl: "Zapraszam moje „Ja” do siebie." },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],

  /* ──────────────────── Journey . The Way to Yourself ────────────────────── */
  "journey-droga-do-siebie": [
    {
      type: "lead",
      text: {
        en: "SM.ART Wardrobe — Winter in Paris. A journey is not only a place; it is a way back to yourself.",
        pl: "Garderoba SM.ART — Zima w Paryżu. Podróż to nie tylko miejsce; to droga powrotna do siebie.",
      },
    },
    {
      type: "p",
      text: {
        en: "This season turns to dark chocolate brown — a colour that grounds and envelops, opulent and understated at once. It is the palette of a long winter afternoon spent unhurried.",
        pl: "Ten sezon zwraca się ku ciemnemu czekoladowemu brązowi — kolorowi, który uziemia i otula, jednocześnie wystawnemu i powściągliwemu. To paleta długiego, zimowego popołudnia spędzonego bez pośpiechu.",
      },
    },
    {
      type: "h2",
      text: { en: "A journal of eight moments", pl: "Dziennik ośmiu chwil" },
    },
    {
      type: "p",
      text: {
        en: "Walking. The library. Café de Flore. The Hotel Bvlgari. The Hemingway Bar. Each moment asks for the same wardrobe worn differently — layered, re-proportioned, never repeated.",
        pl: "Spacer. Biblioteka. Café de Flore. Hotel Bvlgari. Hemingway Bar. Każda z tych chwil prosi o tę samą garderobę noszoną inaczej — warstwowo, w zmienionych proporcjach, nigdy tak samo.",
      },
    },
    {
      type: "quote",
      text: {
        en: "The same wardrobe, eight lives. That is the whole idea.",
        pl: "Ta sama garderoba, osiem żyć. Na tym polega cała idea.",
      },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],

  /* ───────────────────────────── . WomenWorld . ─────────────────────────── */
  "womenworld": [
    {
      type: "lead",
      text: {
        en: "A woman creates. Produces. Begets. She stands in true power.",
        pl: "Kobieta tworzy. Wytwarza. Rodzi. Stoi w prawdziwej sile.",
      },
    },
    {
      type: "p",
      text: {
        en: "This letter is personal. It carries a mother’s dream once set aside, and the long, quiet survival that women so often hold without being seen.",
        pl: "Ten list jest osobisty. Niesie marzenie matki kiedyś odłożone na bok oraz długie, ciche przetrwanie, które kobiety tak często dźwigają niezauważone.",
      },
    },
    {
      type: "p",
      text: {
        en: "It was in Africa that the first dresses were knitted by hand — creations turned into garments. “I put on these dresses, and I felt myself.” The brand was born from that sentence.",
        pl: "To w Afryce pierwsze sukienki powstały, dziergane ręcznie — twórczość zamieniona w ubranie. „Założyłam te sukienki i poczułam siebie.” Z tego zdania narodziła się marka.",
      },
    },
    {
      type: "quote",
      text: {
        en: "I put on these dresses, and I felt myself.",
        pl: "Założyłam te sukienki i poczułam siebie.",
      },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],

  /* ─────────────────── The Art of Coherence = TOTAL LOOK ─────────────────── */
  "sztuka-spojnosci-total-look": [
    {
      type: "lead",
      text: {
        en: "In the world of luxury fashion, consistency isn’t a limitation — it’s a strength. A total look is a statement.",
        pl: "W świecie luksusowej mody spójność nie jest ograniczeniem — jest siłą. Total look to manifest.",
      },
    },
    {
      type: "p",
      text: {
        en: "Dress, accessories, jacket, jewellery — when each element answers to the same idea, the whole becomes quieter and more powerful than any single piece. Nothing competes. Everything agrees.",
        pl: "Sukienka, dodatki, żakiet, biżuteria — gdy każdy element odpowiada tej samej idei, całość staje się cichsza i mocniejsza niż jakikolwiek pojedynczy element. Nic nie rywalizuje. Wszystko się zgadza.",
      },
    },
    {
      type: "p",
      text: {
        en: "This is the principle behind the SM.ART Wardrobe: pieces designed to coexist, so that building a complete look is a matter of composition, not compromise.",
        pl: "To zasada stojąca za Garderobą SM.ART: elementy zaprojektowane, by współistnieć, tak by zbudowanie pełnej stylizacji było kwestią kompozycji, a nie kompromisu.",
      },
    },
    {
      type: "quote",
      text: {
        en: "A total look is not more. It is coherent.",
        pl: "Total look to nie więcej. To spójność.",
      },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],

  /* ─────────────────── Packing — the nightmare of travel ─────────────────── */
  "doha": [
    {
      type: "lead",
      text: {
        en: "There is no emergency closet on the road. You only have a suitcase — and beside it, you can feel naked.",
        pl: "W podróży nie ma awaryjnej szafy. Masz tylko walizkę — a obok niej można poczuć się nago.",
      },
    },
    {
      type: "p",
      text: {
        en: "Packing anxiety is real. It was, in fact, the problem that led to the SM.ART Wardrobe: a small set of forms that combine endlessly, so a single case can hold a whole life of occasions.",
        pl: "Lęk przed pakowaniem jest prawdziwy. To właśnie ten problem doprowadził do Garderoby SM.ART: niewielkiego zestawu form, które łączą się bez końca, tak by jedna walizka pomieściła całe życie okazji.",
      },
    },
    {
      type: "h2",
      text: { en: "Six questions before you pack", pl: "Sześć pytań przed pakowaniem" },
    },
    {
      type: "p",
      text: {
        en: "Intention. Destination. Temperature. Duration. Where you’ll stay. What you’ll do. Answer these, and the suitcase almost packs itself — Walk-On-My.Self, Break-Coffee, Diary Time.",
        pl: "Intencja. Cel. Temperatura. Czas trwania. Gdzie zamieszkasz. Co będziesz robić. Odpowiedz na nie, a walizka spakuje się niemal sama — Walk-On-My.Self, Break-Coffee, Diary Time.",
      },
    },
    {
      type: "quote",
      text: {
        en: "Travel light, arrive yourself.",
        pl: "Podróżuj lekko, przybądź sobą.",
      },
    },
    { type: "signoff", text: { en: "— Absolut Dimension", pl: "— Absolut Dimension" } },
  ],
};
