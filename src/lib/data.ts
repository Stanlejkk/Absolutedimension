// ─── Types ───────────────────────────────────────────────────────────────────
//
// The catalog is fully bilingual (Polish is the primary locale, English is
// secondary). Translated fields use `LocalizedString` from the i18n module so
// they carry both languages side-by-side. The view layer resolves them to a
// plain string at render time via the `useCatalog` hooks (see ./useCatalog.ts).
//
// Fields that stay as plain strings:
//   • `name`      — brand-style names (e.g. "Sukienka Monaco") read the same in
//                   both languages and are part of the brand's visual identity.
//   • `collection.name` — city names: Monaco, Paris, New York… locale-neutral.
//   • `blog.author`     — "Absolut Dimension" — a name, not a translation.
//
// Everything else that a user can read on the page is bilingual.

import type { LocalizedString } from "../i18n";
import { blogBodies, type BlogBlock } from "./blog-bodies";

export type { BlogBlock };

export type ProductCategory =
  | "dress"
  | "coat"
  | "bag"
  | "set"
  | "skirt"
  | "top"
  | "blazer"
  | "kimono"
  | "scarf"
  | "pants"
  | "cardigan"
  | "poncho"
  | "body"
  | "blouse";

export interface Product {
  id: string;
  name: string;
  price: number; // in PLN grosze (1/100)
  category: ProductCategory;
  collection: string;
  image: string;
  description: LocalizedString;
  sizes: string[];
  featured?: boolean;
  newArrival?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  image: string;
  date: string;
  author: string;
  body: BlogBlock[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: LocalizedString;
}

// ─── Collections ─────────────────────────────────────────────────────────────

export const collections: Collection[] = [
  {
    id: "monaco",
    name: "Monaco",
    slug: "monaco",
    image: "/img/collections/col-4.jpg",
    description: {
      en: "Riviera elegance — flowing silhouettes and sun-kissed hues.",
      pl: "Elegancja Riwiery – płynne sylwetki i tony nasycone słońcem.",
    },
  },
  {
    id: "paris",
    name: "Paris",
    slug: "paris",
    image: "/img/products/paris-absolut.jpg",
    description: {
      en: "Timeless Parisian sophistication in every stitch.",
      pl: "Ponadczasowa paryska finezja w każdym ściegu.",
    },
  },
  {
    id: "melbourne",
    name: "Melbourne",
    slug: "melbourne",
    image: "/img/products/sukienka-melbourne.png",
    description: {
      en: "Bold, modern, and effortlessly cool.",
      pl: "Odważna, nowoczesna, z naturalną swobodą.",
    },
  },
  {
    id: "new-york",
    name: "New York",
    slug: "new-york",
    image: "/img/products/set-manhattan.png",
    description: {
      en: "Metropolitan power dressing, redefined.",
      pl: "Metropolitalny power dressing w nowej odsłonie.",
    },
  },
  {
    id: "st-tropez",
    name: "St. Tropez",
    slug: "st-tropez",
    image: "/img/collections/col-1.png",
    description: {
      en: "Seaside glamour with a luxurious edge.",
      pl: "Nadmorski szyk z luksusowym wykończeniem.",
    },
  },
  {
    id: "bali",
    name: "Bali",
    slug: "bali",
    image: "/img/products/sukienka-bali.png",
    description: {
      en: "Tropical artistry meets haute couture.",
      pl: "Tropikalna sztuka rzemiosła spotyka się z haute couture.",
    },
  },
  {
    id: "qatar",
    name: "Qatar",
    slug: "qatar",
    image: "/img/products/sukienka-qatar.png",
    description: {
      en: "Opulent textures and regal silhouettes.",
      pl: "Bogate faktury i dostojne sylwetki.",
    },
  },
  {
    id: "cannes",
    name: "Cannes",
    slug: "cannes",
    image: "/img/products/sukienka-belledejour.png",
    description: {
      en: "Red carpet glamour, everyday luxury.",
      pl: "Blask czerwonego dywanu, codzienny luksus.",
    },
  },
];

// ─── Products ────────────────────────────────────────────────────────────────

const IMG = "/img/products";

/** Terse helper so the product array below stays readable. */
const d = (en: string, pl: string): LocalizedString => ({ en, pl });

export const products: Product[] = [
  { id: "p1",  name: "Ana Absolut",               price: 280000, category: "set",    collection: "cannes",    image: `${IMG}/ana-absolut.png`,           description: d("Signature two-piece set — a statement of refined luxury.",              "Firmowy komplet dwuczęściowy – manifest wyrafinowanego luksusu."),                          sizes: ["XS","S","M","L"], featured: true, newArrival: true },
  { id: "p2",  name: "Bag Bali",                  price:  70000, category: "bag",    collection: "bali",      image: `${IMG}/bag-bali.png`,              description: d("Handwoven bag inspired by Balinese craftsmanship.",                     "Ręcznie pleciona torebka inspirowana balijskim rzemiosłem."),                               sizes: ["ONE SIZE"] },
  { id: "p3",  name: "Torebka Shinrein",          price:  95000, category: "bag",    collection: "cannes",    image: `${IMG}/torebka-shinrein.png`,      description: d("Architectural evening bag in metallic leather.",                        "Architektoniczna torebka wieczorowa z metalizowanej skóry."),                               sizes: ["ONE SIZE"] },
  { id: "p4",  name: "Torebka Génie",             price:  44000, category: "bag",    collection: "paris",     image: `${IMG}/torebka-genie.png`,         description: d("Compact crossbody in textured calfskin leather.",                       "Kompaktowa torebka crossbody z fakturowanej skóry cielęcej."),                              sizes: ["ONE SIZE"], newArrival: true },
  { id: "p5",  name: "Sukienka Paradajsu",        price: 210000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-paradajsu.png`,    description: d("Sun-drenched dress with hand-painted botanical motifs.",                "Nasycona słońcem sukienka z ręcznie malowanymi motywami botanicznymi."),                    sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p6",  name: "Sukienka Bali",             price: 220000, category: "dress",  collection: "bali",      image: `${IMG}/sukienka-bali.png`,         description: d("Batik-inspired wrap dress in flowing viscose.",                         "Kopertowa sukienka inspirowana batikiem, z płynnej wiskozy."),                              sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p7",  name: "Sukienka Kanga.Roo",        price: 360000, category: "dress",  collection: "melbourne", image: `${IMG}/sukienka-kangaroo.png`,     description: d("Bold graphic print on luxurious crepe de chine.",                       "Wyrazisty nadruk graficzny na luksusowej krepie de chine."),                                sizes: ["S","M","L"], featured: true },
  { id: "p8",  name: "Sukienka Kusō",             price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-kuso.png`,         description: d("Japanese-inspired silhouette with flowing drapes.",                     "Sylwetka inspirowana japońską estetyką, z płynnym drapowaniem."),                           sizes: ["S","M","L"] },
  { id: "p9",  name: "Sukienka Matopos",          price: 210000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-matopos.png`,      description: d("Elegant day dress with delicate detailing.",                            "Elegancka sukienka dzienna z subtelnymi detalami."),                                        sizes: ["XS","S","M","L"] },
  { id: "p10", name: "Sukienka Qatar",            price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-qatar.png`,        description: d("Regal column dress with gold beadwork.",                                "Dostojna sukienka o prostym kroju ze złotymi zdobieniami."),                                sizes: ["XS","S","M","L"], featured: true },
  { id: "p11", name: "Sukienka Say.Shell",        price: 440000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-sayshell.png`,     description: d("Sculptural shell-inspired gown in iridescent fabric.",                  "Rzeźbiarska suknia inspirowana muszlą, z mieniącej się tkaniny."),                          sizes: ["S","M","L"], featured: true },
  { id: "p12", name: "Suknia Desse Pele",         price: 380000, category: "dress",  collection: "cannes",    image: `${IMG}/suknia-desse-pele.png`,     description: d("Ethereal layered tulle gown with hand-sewn crystal accents.",           "Eteryczna suknia z warstwowego tiulu z ręcznie naszywanymi kryształami."),                  sizes: ["S","M","L"], newArrival: true },
  { id: "p13", name: "Suknia Henriqua Amour",     price: 800000, category: "dress",  collection: "qatar",     image: `${IMG}/suknia-henriqua-amour.png`, description: d("Show-stopping evening gown — hand-embellished with crystals.",          "Imponująca suknia wieczorowa – ręcznie zdobiona kryształami."),                             sizes: ["S","M","L"], featured: true },
  { id: "p14", name: "Płaszcz Meisei M.M",        price: 850000, category: "coat",   collection: "cannes",    image: `${IMG}/plaszcz-meisei.png`,        description: d("Dramatic floor-length coat — double-faced wool with silk lining.",      "Efektowny płaszcz do ziemi – wełna dwustronna z jedwabną podszewką."),                      sizes: ["S","M","L"], featured: true },
  { id: "p15", name: "Podomka Mona.Lisa",         price: 250000, category: "dress",  collection: "paris",     image: `${IMG}/podomka-monalisa.png`,      description: d("Artistic robe-dress inspired by Renaissance elegance.",                 "Artystyczna suknia-szlafrok inspirowana elegancją Renesansu."),                             sizes: ["S","M","L"] },
  { id: "p16", name: "Sukienka Free.Dom",         price: 280000, category: "dress",  collection: "new-york",  image: `${IMG}/sukienka-freedom.png`,      description: d("Modern freedom — flowing lines, bold statement.",                       "Nowoczesna wolność – płynne linie, wyrazisty charakter."),                                  sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p17", name: "Set ADAMA",                 price: 350000, category: "set",    collection: "bali",      image: `${IMG}/set-adama.png`,             description: d("Earth-toned two-piece set with natural textures.",                      "Komplet w ziemistych tonach, z naturalnymi fakturami."),                                    sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p18", name: "Set Amey",                  price: 320000, category: "set",    collection: "monaco",    image: `${IMG}/set-amey.png`,              description: d("Riviera-inspired set with relaxed sophistication.",                     "Komplet w duchu Riwiery, ze swobodną finezją."),                                            sizes: ["XS","S","M","L"] },
  { id: "p19", name: "Set Kioto",                 price: 380000, category: "set",    collection: "qatar",     image: `${IMG}/set-kioto.png`,             description: d("Japanese-inspired coordinated set with obi detail.",                    "Komplet inspirowany Japonią, z detalem obi."),                                              sizes: ["S","M","L"] },
  { id: "p20", name: "Set Oasis",                 price: 300000, category: "set",    collection: "bali",      image: `${IMG}/set-oasis.png`,             description: d("Tropical comfort meets haute couture.",                                 "Tropikalny komfort spotyka się z haute couture."),                                          sizes: ["XS","S","M","L"] },
  { id: "p21", name: "Set Soul.Light",            price: 340000, category: "set",    collection: "paris",     image: `${IMG}/set-soulight.png`,          description: d("Luminous set with ethereal draping.",                                   "Rozświetlony komplet z eterycznym drapowaniem."),                                           sizes: ["S","M","L"], newArrival: true },
  { id: "p22", name: "Set Turks & Cacios",        price: 360000, category: "set",    collection: "st-tropez", image: `${IMG}/set-turks.png`,             description: d("Island luxe — breezy set with Caribbean flair.",                        "Wyspiarski luksus – zwiewny komplet z karaibską nutą."),                                    sizes: ["S","M","L"] },
  { id: "p23", name: "Set White House",           price: 400000, category: "set",    collection: "new-york",  image: `${IMG}/set-whitehouse.png`,        description: d("Power set with sharp lines and clean silhouettes.",                     "Dominujący komplet z ostrymi liniami i czystą sylwetką."),                                  sizes: ["XS","S","M","L"], featured: true },
  { id: "p24", name: "Pulli Cloudy Monaco",       price: 180000, category: "top",    collection: "monaco",    image: `${IMG}/pulli-cloudy.png`,          description: d("Soft cloud-knit pullover with Monaco-inspired tones.",                  "Miękki pulower chmurkowy w tonach inspirowanych Monako."),                                  sizes: ["S","M","L"] },
  { id: "p25", name: "Top Monaco",                price: 160000, category: "top",    collection: "monaco",    image: `${IMG}/top-monaco.png`,            description: d("Refined cut top with Mediterranean elegance.",                          "Top o dopracowanym kroju z śródziemnomorską elegancją."),                                   sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p26", name: "Top Japan Absolut",         price: 170000, category: "top",    collection: "qatar",     image: `${IMG}/top-japan-absolut.png`,     description: d("Minimalist Japanese-style top in premium cotton.",                      "Minimalistyczny top w japońskim stylu z bawełny premium."),                                 sizes: ["XS","S","M","L"] },
  { id: "p27", name: "Top Absolut",               price: 150000, category: "top",    collection: "monaco",    image: `${IMG}/top-absolut.png`,           description: d("Signature brand top — versatile and elegant.",                          "Firmowy top marki – wszechstronny i elegancki."),                                           sizes: ["XS","S","M","L"] },
  { id: "p28", name: "Top Jour.y Monaco",         price: 160000, category: "top",    collection: "monaco",    image: `${IMG}/top-joury-monaco.png`,      description: d("Journey-inspired top with artisanal finishes.",                         "Top z ducha podróży, z rzemieślniczymi wykończeniami."),                                    sizes: ["S","M","L"] },
  { id: "p29", name: "Top Sydney",                price: 170000, category: "top",    collection: "melbourne", image: `${IMG}/top-sydney.png`,            description: d("Australian-inspired modern top.",                                       "Nowoczesny top inspirowany Australią."),                                                    sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p30", name: "Top Unique Kogo",           price: 180000, category: "top",    collection: "cannes",    image: `${IMG}/top-unique-kogo.png`,       description: d("One-of-a-kind top with artisanal details.",                             "Niepowtarzalny top z rzemieślniczymi detalami."),                                           sizes: ["S","M","L"] },
  { id: "p31", name: "Top Angel",                 price: 150000, category: "top",    collection: "paris",     image: `${IMG}/top-angel.png`,             description: d("Delicate angelic draping in the finest fabric.",                        "Delikatne, anielskie drapowanie w najlepszej tkaninie."),                                   sizes: ["XS","S","M","L"] },
  { id: "p32", name: "Top G22",                   price: 190000, category: "top",    collection: "new-york",  image: `${IMG}/top-g22.png`,               description: d("Urban edge meets refined taste.",                                       "Miejska surowość spotyka się z wyrafinowanym smakiem."),                                    sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p33", name: "Top L'Arte",                price: 160000, category: "top",    collection: "paris",     image: `${IMG}/top-larte.png`,             description: d("Wearable art — inspired by Parisian galleries.",                        "Sztuka do noszenia – inspirowana paryskimi galeriami."),                                    sizes: ["S","M","L"] },
  { id: "p34", name: "Top My.Way 2",              price: 140000, category: "top",    collection: "monaco",    image: `${IMG}/top-myway2.png`,            description: d("Casual elegance — your way, elevated.",                                 "Swobodna elegancja – na twój sposób, w wyższej klasie."),                                   sizes: ["XS","S","M","L"] },
  { id: "p35", name: "Spódnica Japan",            price: 200000, category: "skirt",  collection: "qatar",     image: `${IMG}/spodnica-japan.png`,        description: d("Japanese-inspired pleated skirt.",                                      "Plisowana spódnica inspirowana japońskim krojem."),                                         sizes: ["XS","S","M","L"] },
  { id: "p36", name: "Spódnica Japan Monaco",     price: 220000, category: "skirt",  collection: "monaco",    image: `${IMG}/spodnica-japan-monaco.png`, description: d("East meets West — pleated skirt with a Riviera palette.",               "Wschód spotyka Zachód – plisowana spódnica w palecie Riwiery."),                            sizes: ["S","M","L"] },
  { id: "p37", name: "Spódnica Ver.Sale",         price: 240000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-versale.png`,      description: d("Versailles-inspired skirt with luxurious draping.",                     "Spódnica inspirowana Wersalem, z luksusowym drapowaniem."),                                 sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p38", name: "Spódnica Ballet's (Black)", price: 260000, category: "skirt",  collection: "cannes",    image: `${IMG}/spodnica-ballets-black.jpg`,description: d("Ballet-inspired black skirt with flowing movement.",                    "Czarna spódnica inspirowana baletem, z płynnym ruchem."),                                   sizes: ["XS","S","M","L"] },
  { id: "p39", name: "Spódnica Ballet's (White)", price: 260000, category: "skirt",  collection: "cannes",    image: `${IMG}/spodnica-ballets-white.png`,description: d("Ballet-inspired white skirt — pure elegance.",                          "Biała spódnica inspirowana baletem – czysta elegancja."),                                   sizes: ["XS","S","M","L"] },
  { id: "p40", name: "Spódnica Da.Nuta",          price: 220000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-danuta.jpg`,       description: d("Musical inspiration in every fold.",                                    "Muzyczna inspiracja w każdej fałdzie."),                                                    sizes: ["S","M","L"] },
  { id: "p41", name: "Spódnica Ver.Sale II",      price: 250000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-versale2.png`,     description: d("Versailles collection — structured midi skirt.",                        "Kolekcja Wersal – strukturalna spódnica midi."),                                            sizes: ["XS","S","M","L"] },
  { id: "p42", name: "Bluzka Black & White",      price: 190000, category: "blouse", collection: "new-york",  image: `${IMG}/bluzka-blackwhite.png`,     description: d("Timeless monochrome blouse.",                                           "Ponadczasowa bluzka w monochromacie."),                                                     sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p43", name: "Bluzka Ver.Sale",           price: 200000, category: "blouse", collection: "paris",     image: `${IMG}/bluzka-versale.png`,        description: d("Palace-inspired blouse with regal detailing.",                          "Bluzka inspirowana pałacem, z dostojnymi detalami."),                                       sizes: ["S","M","L"] },
  { id: "p44", name: "Bluzka Golden Age",         price: 210000, category: "blouse", collection: "cannes",    image: `${IMG}/bluzka-goldenage.png`,      description: d("Golden-era glamour in a modern silhouette.",                            "Blask złotej ery w nowoczesnej sylwetce."),                                                 sizes: ["XS","S","M","L"] },
  { id: "p45", name: "Koszulka Calmea",           price: 130000, category: "top",    collection: "bali",      image: `${IMG}/koszulka-calmea.png`,       description: d("Calm and serene — lightweight organic top.",                            "Spokój i cisza – lekki, organiczny top."),                                                  sizes: ["XS","S","M","L"] },
  { id: "p46", name: "Spódnica Furansu",          price: 230000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-furansu.png`,      description: d("French-inspired skirt with flowing movement.",                          "Spódnica w duchu francuskim, z płynnym ruchem."),                                           sizes: ["XS","S","M","L"] },
  { id: "p47", name: "Spódnica Josepha",          price: 240000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-josepha.png`,      description: d("Named after Empress Joséphine — timeless grace.",                       "Nazwana na cześć cesarzowej Józefiny – ponadczasowa gracja."),                              sizes: ["S","M","L"], newArrival: true },
  { id: "p48", name: "Suknia Absolut Monaco",     price: 500000, category: "dress",  collection: "monaco",    image: `${IMG}/suknia-absolut-monaco.png`, description: d("Signature Monaco gown — the crown jewel of the collection.",            "Firmowa suknia Monaco – klejnot koronny kolekcji."),                                        sizes: ["S","M","L"], featured: true },
  { id: "p49", name: "Suknia Valentine Opera",    price: 480000, category: "dress",  collection: "cannes",    image: `${IMG}/suknia-valentine.png`,      description: d("Opera-night glamour with romantic detailing.",                          "Blask operowego wieczoru z romantycznymi detalami."),                                       sizes: ["XS","S","M","L"], featured: true },
  { id: "p50", name: "Set M'Antoine",             price: 350000, category: "set",    collection: "paris",     image: `${IMG}/set-mantoine.png`,          description: d("Royal-inspired set with hand-finished accents.",                        "Komplet z królewską inspiracją, z ręcznie wykończonymi akcentami."),                        sizes: ["S","M","L"] },
  { id: "p51", name: "Suknia D'OR 52",            price: 600000, category: "dress",  collection: "paris",     image: `${IMG}/suknia-dor52.jpg`,          description: d("Golden-thread evening gown — luxury personified.",                      "Suknia wieczorowa ze złotą nicią – uosobienie luksusu."),                                   sizes: ["S","M","L"] },
  { id: "p52", name: "Pulli Arte Maturite",       price: 180000, category: "top",    collection: "monaco",    image: `${IMG}/pulli-arte-maturite.png`,   description: d("Art-inspired knit pullover.",                                           "Dzianinowy pulower z inspiracją sztuką."),                                                  sizes: ["S","M","L","XL"] },
  { id: "p53", name: "Bluzka AIX'A",              price: 190000, category: "blouse", collection: "st-tropez", image: `${IMG}/bluzka-aixa.jpg`,           description: d("Provençal elegance in a relaxed blouse.",                               "Prowansalska elegancja w swobodnej bluzce."),                                               sizes: ["XS","S","M","L"] },
  { id: "p54", name: "Bluzka Jour.y",             price: 180000, category: "blouse", collection: "monaco",    image: `${IMG}/bluzka-joury.png`,          description: d("Journey-inspired blouse with artisan finishes.",                        "Bluzka w duchu podróży, z rzemieślniczymi wykończeniami."),                                 sizes: ["S","M","L"] },
  { id: "p55", name: "Kimono Dan.y",              price: 280000, category: "kimono", collection: "bali",      image: `${IMG}/kimono-dany.png`,           description: d("Japanese-Balinese fusion kimono.",                                      "Kimono w fuzji japońsko-balijskiej."),                                                      sizes: ["S","M","L","XL"] },
  { id: "p56", name: "Szal NU",                   price: 150000, category: "scarf",  collection: "paris",     image: `${IMG}/szal-nu.png`,               description: d("Minimalist scarf-wrap in luxurious wool.",                              "Minimalistyczny szal-narzuta z luksusowej wełny."),                                         sizes: ["ONE SIZE"] },
  { id: "p57", name: "Szal M'Antoine NU",         price: 170000, category: "scarf",  collection: "paris",     image: `${IMG}/szal-mantoine-nu.png`,      description: d("Royal-inspired scarf with subtle pattern.",                             "Szal z królewską inspiracją, z subtelnym wzorem."),                                         sizes: ["ONE SIZE"] },
  { id: "p58", name: "Płaszcz Shinrein",          price: 750000, category: "coat",   collection: "cannes",    image: `${IMG}/plaszcz-shinrein.png`,      description: d("Sculptural coat with Japanese-inspired silhouette.",                    "Rzeźbiarski płaszcz o sylwetce inspirowanej Japonią."),                                     sizes: ["S","M","L"] },
  { id: "p59", name: "Płaszcz Imper",             price: 680000, category: "coat",   collection: "paris",     image: `${IMG}/plaszcz-imper.png`,         description: d("Imperial coat — structured and commanding.",                            "Płaszcz imperialny – strukturalny i władczy."),                                             sizes: ["S","M","L"] },
  { id: "p60", name: "Sukienka Belle de Jour",    price: 320000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-belledejour.png`,  description: d("Day-to-evening dress inspired by French cinema.",                       "Sukienka na dzień i wieczór, inspirowana francuskim kinem."),                               sizes: ["XS","S","M","L"], featured: true },
  { id: "p61", name: "Sukienka Cœur",             price: 290000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-coeur.png`,        description: d("Heart-shaped neckline, Parisian romance.",                              "Dekolt w kształcie serca – paryski romantyzm."),                                            sizes: ["S","M","L"] },
  { id: "p62", name: "Sukienka ICON",             price: 420000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-icon.png`,         description: d("Iconic silhouette — a modern classic.",                                 "Ikoniczna sylwetka – nowoczesna klasyka."),                                                 sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p63", name: "Sukienka Kioto",            price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-kioto.png`,        description: d("Kyoto-inspired dress with an obi waist detail.",                        "Sukienka inspirowana Kioto, z detalem obi w talii."),                                       sizes: ["S","M","L"] },
  { id: "p64", name: "Sukienka Hawaii",           price: 280000, category: "dress",  collection: "bali",      image: `${IMG}/sukienka-hawaii.png`,       description: d("Tropical paradise in flowing fabric.",                                  "Tropikalny raj w płynnej tkaninie."),                                                       sizes: ["XS","S","M","L"] },
  { id: "p65", name: "Sukienka Je Bilionera",     price: 520000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-jebilionera.jpg`,  description: d("Billionaire's dress — luxury without limits.",                          "Sukienka miliarderki – luksus bez granic."),                                                sizes: ["S","M","L"] },
  { id: "p66", name: "Sukienka Milano",           price: 380000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-milano.png`,       description: d("Italian design DNA — sharp and sensual.",                               "DNA włoskiego designu – ostre i zmysłowe."),                                                sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p67", name: "Sukienka Naiss.ance",       price: 340000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-naissiance.png`,   description: d("Rebirth — flowing silhouette with new energy.",                         "Odrodzenie – płynna sylwetka z nową energią."),                                             sizes: ["S","M","L"], newArrival: true },
  { id: "p68", name: "Sukienka NUèe Monaco",      price: 300000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-nuee-monaco.png`,  description: d("Cloud-like Monaco dress in nude tones.",                                "Chmurkowa sukienka Monaco w tonach nude."),                                                 sizes: ["XS","S","M","L"] },
  { id: "p69", name: "Sukienka Slawa.X",          price: 360000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-slawax.png`,       description: d("Slavic-inspired modern dress.",                                         "Nowoczesna sukienka inspirowana motywami słowiańskimi."),                                   sizes: ["S","M","L"] },
  { id: "p70", name: "Sukienka Voixa",            price: 310000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-voixa.png`,        description: d("Voice of elegance — a statement dress.",                                "Głos elegancji – sukienka z charakterem."),                                                 sizes: ["XS","S","M","L"] },
  { id: "p71", name: "Suknia Impératrice",        price: 650000, category: "dress",  collection: "paris",     image: `${IMG}/suknia-imperatrice.png`,    description: d("Empress gown — regal grandeur for special occasions.",                  "Suknia cesarzowej – królewski majestat na wyjątkowe okazje."),                              sizes: ["S","M","L"], featured: true },
  { id: "p72", name: "Paris Absolut",             price: 420000, category: "dress",  collection: "paris",     image: `${IMG}/paris-absolut.jpg`,         description: d("Quintessentially Parisian — the Absolut Paris dress.",                  "Kwintesencja Paryża – sukienka Absolut Paris."),                                            sizes: ["XS","S","M","L"] },
  { id: "p73", name: "Set Gorudo NY",             price: 380000, category: "set",    collection: "new-york",  image: `${IMG}/set-gorudo-ny.png`,         description: d("Golden New York set — power dressing redefined.",                       "Złoty komplet Nowy Jork – power dressing w nowej odsłonie."),                               sizes: ["S","M","L"] },
  { id: "p74", name: "Set ICann.SSS",             price: 340000, category: "set",    collection: "cannes",    image: `${IMG}/set-icansss.png`,           description: d("Cannes-inspired set with cinematic flair.",                             "Komplet inspirowany Cannes, z filmową nutą."),                                              sizes: ["XS","S","M","L"] },
  { id: "p75", name: "Set Manhattan",             price: 400000, category: "set",    collection: "new-york",  image: `${IMG}/set-manhattan.png`,         description: d("Manhattan skyline energy in a tailored set.",                           "Energia panoramy Manhattanu w krawieckim komplecie."),                                      sizes: ["S","M","L"], newArrival: true },
  { id: "p76", name: "Sukienka Amey 53'",         price: 350000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-amey53.png`,       description: d("Retro-inspired Monaco dress with '53 flair.",                           "Sukienka Monaco w retro-klimacie roku '53."),                                               sizes: ["XS","S","M","L"] },
  { id: "p77", name: "Sukienka Côte d'Azur",      price: 340000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-cotedazur.png`,    description: d("Azure coast elegance in flowing form.",                                 "Elegancja Lazurowego Wybrzeża w płynnej formie."),                                          sizes: ["S","M","L"] },
  { id: "p78", name: "Sukienka Lux.URY",          price: 450000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-luxury.png`,       description: d("Pure luxury — no compromise.",                                          "Czysty luksus – bez kompromisów."),                                                         sizes: ["XS","S","M","L"] },
  { id: "p79", name: "Sukienka Melbourne",        price: 320000, category: "dress",  collection: "melbourne", image: `${IMG}/sukienka-melbourne.png`,    description: d("Modern Melbourne style — bold and refined.",                            "Nowoczesny styl Melbourne – odważny i wyrafinowany."),                                      sizes: ["S","M","L"] },
  { id: "p80", name: "Sukienka Nice",             price: 290000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-nice.png`,         description: d("Nice by name, nicer by nature.",                                        "Nicea z nazwy, jeszcze milsza z natury."),                                                  sizes: ["XS","S","M","L"] },
  { id: "p81", name: "Upper East Side",           price: 380000, category: "dress",  collection: "new-york",  image: `${IMG}/upper-east-side.png`,       description: d("Manhattan's finest — sophisticated and sharp.",                         "Kwiat Manhattanu – wyrafinowany i ostry."),                                                 sizes: ["S","M","L"] },
  { id: "p82", name: "Bluzka Monte Carlo",        price: 190000, category: "blouse", collection: "monaco",    image: `${IMG}/bluzka-montecarlo.png`,     description: d("Casino-chic blouse with luxurious detailing.",                          "Casino-chic w bluzce z luksusowymi detalami."),                                             sizes: ["XS","S","M","L"] },
  { id: "p83", name: "Kardigan 44",               price: 280000, category: "cardigan",collection:"paris",     image: `${IMG}/kardigan-44.jpg`,           description: d("Oversized cardigan — cozy Parisian luxury.",                            "Oversize'owy kardigan – przytulny paryski luksus."),                                        sizes: ["S","M","L","XL"] },
  { id: "p84", name: "Bluzka Vienna",             price: 180000, category: "blouse", collection: "paris",     image: `${IMG}/bluzka-vienna.png`,         description: d("Viennese elegance — waltz-inspired blouse.",                            "Wiedeńska elegancja – bluzka w duchu walca."),                                              sizes: ["XS","S","M","L"] },
  { id: "p85", name: "Bluzka Work Premiere",      price: 170000, category: "blouse", collection: "cannes",    image: `${IMG}/bluzka-work-premiere.png`,  description: d("Red carpet meets boardroom.",                                           "Czerwony dywan spotyka salę konferencyjną."),                                               sizes: ["S","M","L"] },
  { id: "p86", name: "Spodnie Doru",              price: 250000, category: "pants",  collection: "paris",     image: `${IMG}/spodnie-doru.png`,          description: d("Wide-leg trousers with couture finish.",                                "Spodnie z szeroką nogawką, z wykończeniem couture."),                                       sizes: ["XS","S","M","L"] },
  { id: "p87", name: "Kardigan Ocean",            price: 260000, category: "cardigan",collection:"bali",      image: `${IMG}/kardigan-ocean.png`,        description: d("Ocean-blue knit cardigan in merino wool.",                              "Kardigan w oceanicznym błękicie, z wełny merino."),                                         sizes: ["S","M","L"] },
  { id: "p88", name: "Sukienka Monaco",           price: 380000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-monaco.jpg`,       description: d("The signature Monaco dress — timeless Riviera glamour.",                "Firmowa sukienka Monaco – ponadczasowy blask Riwiery."),                                    sizes: ["XS","S","M","L"], featured: true },
  { id: "p89", name: "Sukienka Megami",           price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-megami.png`,       description: d("Japanese goddess-inspired evening dress.",                              "Wieczorowa sukienka inspirowana japońską boginią."),                                        sizes: ["S","M","L"] },
  { id: "p90", name: "Poncho Absolut",            price: 320000, category: "poncho", collection: "monaco",    image: `${IMG}/poncho-absolut.png`,        description: d("Luxurious oversized poncho in a cashmere blend.",                       "Luksusowe oversize'owe ponczo z mieszanki kaszmiru."),                                      sizes: ["ONE SIZE"], newArrival: true },
  { id: "p91", name: "Żakiet Jour.y (White)",     price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-white.png`,    description: d("White journey blazer — summer elegance.",                               "Biały żakiet Jour.y – letnia elegancja."),                                                  sizes: ["S","M","L"] },
  { id: "p92", name: "Żakiet Jour.y (Chocolate)", price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-choco.png`,    description: d("Rich chocolate blazer with satin lining.",                              "Głęboko-czekoladowy żakiet z satynową podszewką."),                                         sizes: ["S","M","L"] },
  { id: "p93", name: "Żakiet Jour.y (Burgundy)",  price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-burg.png`,     description: d("Brand-signature burgundy blazer.",                                      "Firmowy żakiet w kolorze bordo."),                                                          sizes: ["S","M","L"], newArrival: true },
  { id: "p94", name: "Żakiet M'Antoine",          price: 380000, category: "blazer", collection: "paris",     image: `${IMG}/zakiet-mantoine.png`,       description: d("Royal-inspired structured blazer.",                                     "Strukturalny żakiet z królewską inspiracją."),                                              sizes: ["XS","S","M","L"] },
  { id: "p95", name: "Żakiet Seiko",              price: 360000, category: "blazer", collection: "qatar",     image: `${IMG}/zakiet-seiko.png`,          description: d("Precision-tailored blazer with Japanese influence.",                    "Precyzyjnie skrojony żakiet z japońskim wpływem."),                                         sizes: ["S","M","L"] },
  { id: "p96", name: "Żakiet M'Antoine II",       price: 370000, category: "blazer", collection: "paris",     image: `${IMG}/zakiet-mantoine2.png`,      description: d("Gold-beige toned blazer with regal detailing.",                         "Żakiet w tonach złoto-beżowych z dostojnymi detalami."),                                    sizes: ["S","M","L"] },
  { id: "p97", name: "Żakiet Melbourne",          price: 340000, category: "blazer", collection: "melbourne", image: `${IMG}/zakiet-melbourne.png`,      description: d("Australian-inspired relaxed blazer.",                                   "Rozluźniony żakiet inspirowany Australią."),                                                sizes: ["S","M","L"] },
  { id: "p98", name: "Body Maturite",             price: 150000, category: "body",   collection: "monaco",    image: `${IMG}/body-maturite.png`,         description: d("Sculpted bodysuit in premium jersey.",                                  "Modelujące body z dżerseju premium."),                                                      sizes: ["XS","S","M","L"] },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "sztuka-ubioru",
    title: {
      en: "The Art of Dressing",
      pl: "Sztuka ubioru",
    },
    excerpt: {
      en: "Clothing is more than fabric — it is an expression of identity, a canvas of self. Discover how Absolut Dimension approaches the philosophy of dressing.",
      pl: "Ubiór to coś więcej niż tkanina – to wyraz tożsamości, płótno Ciebie. Poznaj, jak Absolut Dimension podchodzi do filozofii ubierania się.",
    },
    image: "/img/blog/blog-1.jpg",
    date: "2026-03-15",
    author: "Absolut Dimension",
    body: blogBodies["sztuka-ubioru"],
  },
  {
    id: "b2",
    slug: "monaco-collection-story",
    title: {
      en: "Behind the Monaco Collection",
      pl: "Za kulisami kolekcji Monaco",
    },
    excerpt: {
      en: "From the azure waters of the Mediterranean to the atelier — the creative journey behind our latest Riviera-inspired pieces.",
      pl: "Od lazurowych wód Morza Śródziemnego po pracownię – twórcza podróż za naszymi najnowszymi modelami inspirowanymi Riwierą.",
    },
    image: "/img/blog/blog-2.png",
    date: "2026-02-28",
    author: "Absolut Dimension",
    body: blogBodies["monaco-collection-story"],
  },
  {
    id: "b3",
    slug: "sustainable-luxury",
    title: {
      en: "Sustainable Luxury: Our Commitment",
      pl: "Zrównoważony luksus: nasze zobowiązanie",
    },
    excerpt: {
      en: "How we source ethically, produce responsibly, and craft garments designed to last a lifetime.",
      pl: "Jak etycznie pozyskujemy materiały, odpowiedzialnie produkujemy i tworzymy ubrania zaprojektowane na całe życie.",
    },
    image: "/img/blog/blog-3.jpg",
    date: "2026-01-20",
    author: "Absolut Dimension",
    body: blogBodies["sustainable-luxury"],
  },
  {
    id: "b4",
    slug: "evening-styling-guide",
    title: {
      en: "The Evening Styling Guide",
      pl: "Przewodnik stylizacji wieczorowej",
    },
    excerpt: {
      en: "From cocktail hour to the gala — master the art of evening dressing with our styling tips.",
      pl: "Od godziny koktajlowej po galę – opanuj sztukę wieczorowego ubioru z naszymi wskazówkami.",
    },
    image: "/img/blog/blog-4.png",
    date: "2025-12-10",
    author: "Absolut Dimension",
    body: blogBodies["evening-styling-guide"],
  },
];

// ─── Category labels (bilingual) ─────────────────────────────────────────────

export const categoryLabels: Record<ProductCategory, LocalizedString> = {
  dress:    { en: "Dresses",    pl: "Sukienki" },
  coat:     { en: "Coats",      pl: "Płaszcze" },
  bag:      { en: "Bags",       pl: "Torebki" },
  set:      { en: "Sets",       pl: "Komplety" },
  skirt:    { en: "Skirts",     pl: "Spódnice" },
  top:      { en: "Tops",       pl: "Topy" },
  blazer:   { en: "Blazers",    pl: "Żakiety" },
  kimono:   { en: "Kimonos",    pl: "Kimona" },
  scarf:    { en: "Scarves",    pl: "Szale" },
  pants:    { en: "Trousers",   pl: "Spodnie" },
  cardigan: { en: "Cardigans",  pl: "Kardigany" },
  poncho:   { en: "Ponchos",    pl: "Ponczo" },
  body:     { en: "Bodysuits",  pl: "Body" },
  blouse:   { en: "Blouses",    pl: "Bluzki" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Format a price stored in PLN grosze as a locale-aware string:
 *   pl → "2 800 zł"
 *   en → "2,800 zł"
 *
 * Currency suffix stays "zł" in both languages — the brand sells exclusively
 * in PLN and a customer using the English UI is still seeing a Polish price.
 */
export function formatPrice(priceInGrosze: number, locale: "pl" | "en" = "pl"): string {
  const zloty = Math.round(priceInGrosze / 100);
  const intlLocale = locale === "pl" ? "pl-PL" : "en-GB";
  const formatted = zloty.toLocaleString(intlLocale).replace(/\u00A0/g, " ");
  return `${formatted} zł`;
}

export function getProductsByCollection(slug: string): Product[] {
  return products.filter((p) => p.collection === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
