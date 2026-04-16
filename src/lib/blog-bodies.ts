/**
 * Full editorial body content for each Journal letter, in both languages.
 *
 * The bodies live here (rather than inside data.ts) so that the catalog file
 * stays focused on metadata. Each block is rendered by <BlogPost> via a
 * small switch on `type`.
 */

import type { LocalizedString } from "../i18n";

export type BlogBlock =
  | { type: "p"; text: LocalizedString }
  | { type: "lead"; text: LocalizedString }
  | { type: "quote"; text: LocalizedString; cite?: LocalizedString }
  | { type: "h2"; text: LocalizedString }
  | { type: "signoff"; text: LocalizedString };

export const blogBodies: Record<string, BlogBlock[]> = {
  /* ─────────────────────────── The Art of Dressing ───────────────────────── */
  "sztuka-ubioru": [
    {
      type: "lead",
      text: {
        en: "Clothing is more than fabric. It is the first sentence you write each morning — quiet or emphatic, borrowed or original — before any word leaves your mouth.",
        pl: "Ubiór to coś więcej niż tkanina. To pierwsze zdanie, które piszesz każdego ranka – ciche lub wyraziste, pożyczone lub własne – zanim padnie pierwsze słowo.",
      },
    },
    {
      type: "p",
      text: {
        en: "At Absolut Dimension we treat dressing as a discipline, not a decoration. We are less interested in trend than in tone: what does the cloth want to do, how does a shoulder sit when the person inside it relaxes, what happens to a hem after a hundred wearings. Those are the questions that begin every piece we make.",
        pl: "W Absolut Dimension traktujemy ubieranie się jak dyscyplinę, nie jak dekorację. Mniej zajmuje nas trend, bardziej ton: do czego dąży tkanina, jak układa się rami gdy osoba w środku się odpręża, co dzieje się z rąbkiem po stu noszeniach. Od tych pytań zaczyna się każdy nasz model.",
      },
    },
    {
      type: "p",
      text: {
        en: "A well-made garment is a quiet kind of confidence. It does not shout to be noticed — it holds its shape, holds your shape, and gives the person wearing it room to think about something other than their clothes. That is the greatest luxury we know.",
        pl: "Dobrze uszyte ubranie jest cichą formą pewności siebie. Nie krzyczy, aby je zauważono – trzyma swoją formę, trzyma Twoją sylwetkę, i daje osobie, która je nosi, przestrzeń by myśleć o czymś innym niż o ubraniu. To największy luksus, jaki znamy.",
      },
    },
    {
      type: "h2",
      text: {
        en: "The wardrobe as a conversation",
        pl: "Garderoba jako rozmowa",
      },
    },
    {
      type: "p",
      text: {
        en: "We build our collections as chapters. Monaco leans into summer light; New York into structure; Paris into the elegance of a long afternoon. Together they form a wardrobe that speaks in a consistent voice — adaptable across climates, seasons, and the small ceremonies of daily life.",
        pl: "Budujemy nasze kolekcje jak rozdziały. Monaco skłania się ku letniemu światłu; Nowy Jork ku strukturze; Paryż ku elegancji długiego popołudnia. Razem tworzą garderobę, która mówi jednym, konsekwentnym głosem – dopasowuje się do klimatów, sezonów, i drobnych ceremonii codzienności.",
      },
    },
    {
      type: "quote",
      text: {
        en: "True elegance is not what you wear, but how you feel wearing it.",
        pl: "Prawdziwa elegancja to nie to, co nosisz, ale jak się w tym czujesz.",
      },
    },
    {
      type: "p",
      text: {
        en: "If our clothes do their work, you will forget they are there. And when you come back to them, season after season, they will still be ready — slightly softer at the edges, more themselves, more yours.",
        pl: "Jeśli nasze ubrania wykonują swoją pracę, przestajesz zauważać, że je masz na sobie. A gdy wracasz do nich, sezon po sezonie, wciąż będą gotowe – delikatnie zmiękczone na brzegach, bardziej sobą, bardziej Twoje.",
      },
    },
    {
      type: "signoff",
      text: { en: "— The atelier", pl: "— Atelier" },
    },
  ],

  /* ─────────────────────── Behind the Monaco Collection ──────────────────── */
  "monaco-collection-story": [
    {
      type: "lead",
      text: {
        en: "The Monaco Collection began as a photograph — bright blue sea, a limestone wall, and the blur of a linen jacket crossing the frame at four in the afternoon.",
        pl: "Kolekcja Monaco zaczęła się od fotografii – błękit morza, mur z wapienia i rozmyta sylwetka lnianej marynarki przecinającej kadr o czwartej po południu.",
      },
    },
    {
      type: "p",
      text: {
        en: "Before a single pattern was cut we spent two weeks on the Riviera, looking. Not shopping — looking. How do women carry themselves on the Cap after lunch? What colour does ivory take on at five in the afternoon, against weathered stone? Where do shoulders settle when the air is warm and the evening is still unwritten?",
        pl: "Zanim narysowaliśmy pierwszy wykrój, spędziliśmy dwa tygodnie na Riwierze, obserwując. Nie robiąc zakupów – patrząc. Jak kobiety noszą się na Cap po lunchu? Jaki kolor przyjmuje kość słoniowa o piątej po południu, na tle poszarzałego kamienia? Gdzie opadają ramiona, gdy powietrze jest ciepłe, a wieczór jest jeszcze nienapisany?",
      },
    },
    {
      type: "h2",
      text: { en: "From observation to cloth", pl: "Od obserwacji do tkaniny" },
    },
    {
      type: "p",
      text: {
        en: "We returned to Warsaw with a folder of photographs, a dozen swatches, and the conviction that Monaco had to be built around four fabrics: a milk-coloured silk crêpe, a dry cotton-linen from Biella, a heavier ivory twill for tailoring, and a single feather-weight knit for the evenings when the wind turns.",
        pl: "Wróciliśmy do Warszawy z teczką zdjęć, tuzinem próbek i przekonaniem, że Monaco musi opierać się na czterech tkaninach: jedwabnej krepie w kolorze mleka, suchej bawełnie z lnem z Bielli, cięższym diagonalu w odcieniu kości słoniowej na modele krawieckie oraz jednej, lekkiej jak pióro dzianinie na wieczory, gdy wiatr się zmienia.",
      },
    },
    {
      type: "p",
      text: {
        en: "The palette followed. Ivory and milk and gold — the colours of limestone at different hours — with a single accent of dark bordeaux for the evening pieces. Nothing loud. Nothing that apologises for itself, either.",
        pl: "Paleta wyłoniła się naturalnie. Kość słoniowa, mleko, złoto – kolory wapienia o różnych porach dnia – z jednym akcentem ciemnego bordo na modelach wieczorowych. Nic krzykliwego. I nic, co tłumaczyłoby się ze swojej obecności.",
      },
    },
    {
      type: "quote",
      text: {
        en: "Monaco taught us that luxury is mostly about what you choose to leave out.",
        pl: "Monaco nauczyło nas, że luksus w większości polega na tym, co postanawiasz pominąć.",
      },
    },
    {
      type: "p",
      text: {
        en: "Some of the pieces arrived quickly — the Monaco blouse was cut in a single afternoon. Others took months. The Suknia Absolut Monaco went through eleven toiles before the neckline settled. We only release a piece when it has stopped arguing with us.",
        pl: "Niektóre modele powstały szybko – bluzka Monaco została skrojona w ciągu jednego popołudnia. Inne zajęły miesiące. Suknia Absolut Monaco przeszła jedenaście próbnych wersji, zanim dekolt wreszcie się ułożył. Wypuszczamy model dopiero wtedy, gdy przestaje się z nami spierać.",
      },
    },
    {
      type: "signoff",
      text: { en: "— The atelier", pl: "— Atelier" },
    },
  ],

  /* ───────────────────────── Sustainable Luxury ─────────────────────────── */
  "sustainable-luxury": [
    {
      type: "lead",
      text: {
        en: "Sustainability, for us, is not a marketing claim. It is a series of practical choices, made every day, about where the cloth comes from, who sews it, and how long it will last.",
        pl: "Zrównoważony rozwój nie jest dla nas hasłem marketingowym. To seria praktycznych decyzji podejmowanych każdego dnia – o tym, skąd pochodzi tkanina, kto ją zszywa i jak długo posłuży.",
      },
    },
    {
      type: "p",
      text: {
        en: "We make small runs. Nothing is mass-produced. A typical piece is made in between forty and two hundred units — sometimes fewer. If a model sells out, we often bring it back the following season, quietly, in the same cut.",
        pl: "Szyjemy w krótkich seriach. Nic nie powstaje masowo. Typowy model to od czterdziestu do dwustu sztuk – czasem mniej. Jeśli coś się wyprzedaje, często wracamy do tego modelu w kolejnym sezonie, w tym samym kroju, bez rozgłosu.",
      },
    },
    {
      type: "h2",
      text: {
        en: "Mills we know by name",
        pl: "Tkalnie, które znamy z nazwy",
      },
    },
    {
      type: "p",
      text: {
        en: "Our wool comes from Biella, where the families who weave it have been doing so for generations. Our silk is milled in Como. Our linen is grown in the north — in Normandy and Belgium. We visit these mills, we know their managers, and we understand how the cloth is finished before it ever reaches our cutting table.",
        pl: "Nasza wełna pochodzi z Bielli, gdzie rodziny tkaczy prowadzą swoje zakłady od pokoleń. Jedwab tkany jest w Como. Len uprawiany na północy – w Normandii i Belgii. Odwiedzamy te tkalnie, znamy ich właścicieli i rozumiemy, jak wykończona jest tkanina, zanim trafi na nasz stół krojczy.",
      },
    },
    {
      type: "p",
      text: {
        en: "The garments are cut and sewn in our Warsaw atelier. Our seamstresses are employed, paid fairly, and work in daylight rooms. This is unspectacular to say out loud — and that is precisely the point.",
        pl: "Modele krojone i szyte są w naszym warszawskim atelier. Nasze krawcowe są zatrudnione na stałe, wynagradzane uczciwie i pracują w jasnych, przeszklonych salach. Mówienie o tym głośno jest mało efektowne – i właśnie o to nam chodzi.",
      },
    },
    {
      type: "quote",
      text: {
        en: "The most sustainable garment is the one you wear for thirty years.",
        pl: "Najbardziej zrównoważone ubranie to takie, które nosisz przez trzydzieści lat.",
      },
    },
    {
      type: "p",
      text: {
        en: "Care is part of the design. Our pieces come with instructions that assume you intend to keep them. Hems can be adjusted. Linings can be replaced. If something tears at the shoulder, bring it back — we will repair it. A wardrobe should grow old with you, not be replaced around you.",
        pl: "Pielęgnacja jest częścią projektu. Każdy model przychodzi z instrukcjami, które zakładają, że zamierzasz go zachować. Rąbki można poprawić. Podszewki wymienić. Jeśli coś rozedrze się na ramieniu, przynieś to do nas – naprawimy. Garderoba powinna starzeć się razem z Tobą, a nie być co chwilę wymieniana.",
      },
    },
    {
      type: "signoff",
      text: { en: "— The atelier", pl: "— Atelier" },
    },
  ],

  /* ────────────────────── The Evening Styling Guide ──────────────────────── */
  "evening-styling-guide": [
    {
      type: "lead",
      text: {
        en: "Evening dressing begins, counter-intuitively, in the afternoon. The light is gentler, the choices are slower, and a piece that will be worn under chandeliers benefits from an hour of daylight on its skin.",
        pl: "Wieczorowe ubieranie się zaczyna się – paradoksalnie – po południu. Światło jest łagodniejsze, decyzje powolniejsze, a model, który będzie noszony pod żyrandolami, skorzysta z godziny dziennego światła na swojej tkaninie.",
      },
    },
    {
      type: "p",
      text: {
        en: "Lay the garment flat. Look at it without jewellery, without shoes, without the rest of the outfit. Is the silhouette what you remembered? Has the hem dropped? Does the collar still break cleanly? These are the quiet questions that separate a good evening from a long one.",
        pl: "Rozłóż model płasko. Popatrz na niego bez biżuterii, bez butów, bez reszty stroju. Czy sylwetka jest taka, jak ją pamiętasz? Czy rąbek nie opadł? Czy kołnierz wciąż układa się równo? To są te ciche pytania, które odróżniają udany wieczór od długiego.",
      },
    },
    {
      type: "h2",
      text: { en: "Cocktail hour", pl: "Godzina koktajlowa" },
    },
    {
      type: "p",
      text: {
        en: "For a drinks-party or private gallery opening, lean into tailoring rather than decoration. A Żakiet M'Antoine over a Body Maturite, a high trouser, a low shoe. Keep the jewellery to a single earring or a single bracelet — the piece that catches the light when you raise a glass.",
        pl: "Na przyjęcie koktajlowe lub prywatny wernisaż postaw na krawiectwo, nie dekorację. Żakiet M'Antoine na Body Maturite, wysokie spodnie, niski but. Biżuterię ogranicz do jednego kolczyka lub jednej bransoletki – tej jednej, która chwyci światło, gdy podniesiesz kieliszek.",
      },
    },
    {
      type: "h2",
      text: { en: "The gala", pl: "Gala" },
    },
    {
      type: "p",
      text: {
        en: "Here you can let a piece do the work. A full gown — the Suknia Henriqua Amour, the Impératrice — needs almost nothing around it. A bag that carries a lipstick and nothing else. A clean sweep of hair. Perfume applied once, in the morning, to the inside of the wrist and left to settle.",
        pl: "Tutaj możesz pozwolić, by to model wykonał całą pracę. Pełna suknia – Henriqua Amour, Impératrice – prawie niczego wokół siebie nie potrzebuje. Torebka na pomadkę i nic więcej. Spokojnie upięte włosy. Perfumy nałożone raz, rano, na wewnętrzną stronę nadgarstka i pozostawione, by się ułożyły.",
      },
    },
    {
      type: "quote",
      text: {
        en: "Dress for the room you are entering, not the one you are leaving.",
        pl: "Ubieraj się do pokoju, do którego wchodzisz, nie do tego, z którego wychodzisz.",
      },
    },
    {
      type: "p",
      text: {
        en: "A last note. Evening dressing is a form of hospitality. You are making the room easier to be in for everyone else in it. That is the kindest thing an outfit can do.",
        pl: "Ostatnia uwaga. Wieczorowe ubieranie się jest formą gościnności. Sprawiasz, że pokój, w którym się znajdujesz, staje się przyjemniejszy dla wszystkich innych. To najmilsza rzecz, jaką strój może zrobić.",
      },
    },
    {
      type: "signoff",
      text: { en: "— The atelier", pl: "— Atelier" },
    },
  ],
};
