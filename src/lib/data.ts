// ─── Types ───────────────────────────────────────────────────────────────────

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
  description: string;
  sizes: string[];
  featured?: boolean;
  newArrival?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

// ─── Collections ─────────────────────────────────────────────────────────────

export const collections: Collection[] = [
  { id: "monaco",    name: "Monaco",     slug: "monaco",    image: "/img/collections/col-4.jpg",                 description: "Riviera elegance — flowing silhouettes and sun-kissed hues." },
  { id: "paris",     name: "Paris",      slug: "paris",     image: "/img/products/paris-absolut.jpg",            description: "Timeless Parisian sophistication in every stitch." },
  { id: "melbourne", name: "Melbourne",  slug: "melbourne", image: "/img/products/sukienka-melbourne.png",       description: "Bold, modern, and effortlessly cool." },
  { id: "new-york",  name: "New York",   slug: "new-york",  image: "/img/products/set-manhattan.png",            description: "Metropolitan power dressing, redefined." },
  { id: "st-tropez", name: "St. Tropez", slug: "st-tropez", image: "/img/collections/col-1.png",                 description: "Seaside glamour with a luxurious edge." },
  { id: "bali",      name: "Bali",       slug: "bali",      image: "/img/products/sukienka-bali.png",            description: "Tropical artistry meets haute couture." },
  { id: "qatar",     name: "Qatar",      slug: "qatar",     image: "/img/products/sukienka-qatar.png",           description: "Opulent textures and regal silhouettes." },
  { id: "cannes",    name: "Cannes",     slug: "cannes",    image: "/img/products/sukienka-belledejour.png",     description: "Red carpet glamour, everyday luxury." },
];

// ─── Products ────────────────────────────────────────────────────────────────

const IMG = "/img/products";

export const products: Product[] = [
  { id: "p1",  name: "Ana Absolut",               price: 280000, category: "set",    collection: "cannes",    image: `${IMG}/ana-absolut.png`,           description: "Signature two-piece set — a statement of refined luxury.",              sizes: ["XS","S","M","L"], featured: true, newArrival: true },
  { id: "p2",  name: "Bag Bali",                  price:  70000, category: "bag",    collection: "bali",      image: `${IMG}/bag-bali.png`,              description: "Handwoven bag inspired by Balinese craftsmanship.",                     sizes: ["ONE SIZE"] },
  { id: "p3",  name: "Torebka Shinrein",          price:  95000, category: "bag",    collection: "cannes",    image: `${IMG}/torebka-shinrein.png`,      description: "Architectural evening bag in metallic leather.",                        sizes: ["ONE SIZE"] },
  { id: "p4",  name: "Torebka Génie",             price:  44000, category: "bag",    collection: "paris",     image: `${IMG}/torebka-genie.png`,         description: "Compact crossbody in textured calfskin leather.",                       sizes: ["ONE SIZE"], newArrival: true },
  { id: "p5",  name: "Sukienka Paradajsu",        price: 210000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-paradajsu.png`,    description: "Sun-drenched dress with hand-painted botanical motifs.",                sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p6",  name: "Sukienka Bali",             price: 220000, category: "dress",  collection: "bali",      image: `${IMG}/sukienka-bali.png`,         description: "Batik-inspired wrap dress in flowing viscose.",                         sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p7",  name: "Sukienka Kanga.Roo",        price: 360000, category: "dress",  collection: "melbourne", image: `${IMG}/sukienka-kangaroo.png`,     description: "Bold graphic print on luxurious crepe de chine.",                       sizes: ["S","M","L"], featured: true },
  { id: "p8",  name: "Sukienka Kusō",             price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-kuso.png`,         description: "Japanese-inspired silhouette with flowing drapes.",                     sizes: ["S","M","L"] },
  { id: "p9",  name: "Sukienka Matopos",          price: 210000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-matopos.png`,      description: "Elegant day dress with delicate detailing.",                            sizes: ["XS","S","M","L"] },
  { id: "p10", name: "Sukienka Qatar",            price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-qatar.png`,        description: "Regal column dress with gold beadwork.",                                sizes: ["XS","S","M","L"], featured: true },
  { id: "p11", name: "Sukienka Say.Shell",        price: 440000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-sayshell.png`,     description: "Sculptural shell-inspired gown in iridescent fabric.",                  sizes: ["S","M","L"], featured: true },
  { id: "p12", name: "Suknia Desse Pele",         price: 380000, category: "dress",  collection: "cannes",    image: `${IMG}/suknia-desse-pele.png`,     description: "Ethereal layered tulle gown with hand-sewn crystal accents.",           sizes: ["S","M","L"], newArrival: true },
  { id: "p13", name: "Suknia Henriqua Amour",     price: 800000, category: "dress",  collection: "qatar",     image: `${IMG}/suknia-henriqua-amour.png`, description: "Show-stopping evening gown — hand-embellished with crystals.",          sizes: ["S","M","L"], featured: true },
  { id: "p14", name: "Płaszcz Meisei M.M",        price: 850000, category: "coat",   collection: "cannes",    image: `${IMG}/plaszcz-meisei.png`,        description: "Dramatic floor-length coat — double-faced wool with silk lining.",      sizes: ["S","M","L"], featured: true },
  { id: "p15", name: "Podomka Mona.Lisa",         price: 250000, category: "dress",  collection: "paris",     image: `${IMG}/podomka-monalisa.png`,      description: "Artistic robe-dress inspired by Renaissance elegance.",                 sizes: ["S","M","L"] },
  { id: "p16", name: "Sukienka Free.Dom",         price: 280000, category: "dress",  collection: "new-york",  image: `${IMG}/sukienka-freedom.png`,      description: "Modern freedom — flowing lines, bold statement.",                       sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p17", name: "Set ADAMA",                 price: 350000, category: "set",    collection: "bali",      image: `${IMG}/set-adama.png`,             description: "Earth-toned two-piece set with natural textures.",                      sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p18", name: "Set Amey",                  price: 320000, category: "set",    collection: "monaco",    image: `${IMG}/set-amey.png`,              description: "Riviera-inspired set with relaxed sophistication.",                     sizes: ["XS","S","M","L"] },
  { id: "p19", name: "Set Kioto",                 price: 380000, category: "set",    collection: "qatar",     image: `${IMG}/set-kioto.png`,             description: "Japanese-inspired coordinated set with obi detail.",                    sizes: ["S","M","L"] },
  { id: "p20", name: "Set Oasis",                 price: 300000, category: "set",    collection: "bali",      image: `${IMG}/set-oasis.png`,             description: "Tropical comfort meets haute couture.",                                 sizes: ["XS","S","M","L"] },
  { id: "p21", name: "Set Soul.Light",            price: 340000, category: "set",    collection: "paris",     image: `${IMG}/set-soulight.png`,          description: "Luminous set with ethereal draping.",                                   sizes: ["S","M","L"], newArrival: true },
  { id: "p22", name: "Set Turks & Cacios",        price: 360000, category: "set",    collection: "st-tropez", image: `${IMG}/set-turks.png`,             description: "Island luxe — breezy set with Caribbean flair.",                        sizes: ["S","M","L"] },
  { id: "p23", name: "Set White House",           price: 400000, category: "set",    collection: "new-york",  image: `${IMG}/set-whitehouse.png`,        description: "Power set with sharp lines and clean silhouettes.",                     sizes: ["XS","S","M","L"], featured: true },
  { id: "p24", name: "Pulli Cloudy Monaco",       price: 180000, category: "top",    collection: "monaco",    image: `${IMG}/pulli-cloudy.png`,          description: "Soft cloud-knit pullover with Monaco-inspired tones.",                  sizes: ["S","M","L"] },
  { id: "p25", name: "Top Monaco",                price: 160000, category: "top",    collection: "monaco",    image: `${IMG}/top-monaco.png`,            description: "Refined cut top with Mediterranean elegance.",                          sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p26", name: "Top Japan Absolut",         price: 170000, category: "top",    collection: "qatar",     image: `${IMG}/top-japan-absolut.png`,     description: "Minimalist Japanese-style top in premium cotton.",                      sizes: ["XS","S","M","L"] },
  { id: "p27", name: "Top Absolut",               price: 150000, category: "top",    collection: "monaco",    image: `${IMG}/top-absolut.png`,           description: "Signature brand top — versatile and elegant.",                          sizes: ["XS","S","M","L"] },
  { id: "p28", name: "Top Jour.y Monaco",         price: 160000, category: "top",    collection: "monaco",    image: `${IMG}/top-joury-monaco.png`,      description: "Journey-inspired top with artisanal finishes.",                         sizes: ["S","M","L"] },
  { id: "p29", name: "Top Sydney",                price: 170000, category: "top",    collection: "melbourne", image: `${IMG}/top-sydney.png`,            description: "Australian-inspired modern top.",                                       sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p30", name: "Top Unique Kogo",           price: 180000, category: "top",    collection: "cannes",    image: `${IMG}/top-unique-kogo.png`,       description: "One-of-a-kind top with artisanal details.",                             sizes: ["S","M","L"] },
  { id: "p31", name: "Top Angel",                 price: 150000, category: "top",    collection: "paris",     image: `${IMG}/top-angel.png`,             description: "Delicate angelic draping in the finest fabric.",                        sizes: ["XS","S","M","L"] },
  { id: "p32", name: "Top G22",                   price: 190000, category: "top",    collection: "new-york",  image: `${IMG}/top-g22.png`,               description: "Urban edge meets refined taste.",                                       sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p33", name: "Top L'Arte",                price: 160000, category: "top",    collection: "paris",     image: `${IMG}/top-larte.png`,             description: "Wearable art — inspired by Parisian galleries.",                        sizes: ["S","M","L"] },
  { id: "p34", name: "Top My.Way 2",              price: 140000, category: "top",    collection: "monaco",    image: `${IMG}/top-myway2.png`,            description: "Casual elegance — your way, elevated.",                                 sizes: ["XS","S","M","L"] },
  { id: "p35", name: "Spódnica Japan",            price: 200000, category: "skirt",  collection: "qatar",     image: `${IMG}/spodnica-japan.png`,        description: "Japanese-inspired pleated skirt.",                                      sizes: ["XS","S","M","L"] },
  { id: "p36", name: "Spódnica Japan Monaco",     price: 220000, category: "skirt",  collection: "monaco",    image: `${IMG}/spodnica-japan-monaco.png`, description: "East meets West — pleated skirt with a Riviera palette.",               sizes: ["S","M","L"] },
  { id: "p37", name: "Spódnica Ver.Sale",         price: 240000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-versale.png`,      description: "Versailles-inspired skirt with luxurious draping.",                     sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p38", name: "Spódnica Ballet's (Black)", price: 260000, category: "skirt",  collection: "cannes",    image: `${IMG}/spodnica-ballets-black.jpg`,description: "Ballet-inspired black skirt with flowing movement.",                    sizes: ["XS","S","M","L"] },
  { id: "p39", name: "Spódnica Ballet's (White)", price: 260000, category: "skirt",  collection: "cannes",    image: `${IMG}/spodnica-ballets-white.png`,description: "Ballet-inspired white skirt — pure elegance.",                          sizes: ["XS","S","M","L"] },
  { id: "p40", name: "Spódnica Da.Nuta",          price: 220000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-danuta.jpg`,       description: "Musical inspiration in every fold.",                                    sizes: ["S","M","L"] },
  { id: "p41", name: "Spódnica Ver.Sale II",      price: 250000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-versale2.png`,     description: "Versailles collection — structured midi skirt.",                        sizes: ["XS","S","M","L"] },
  { id: "p42", name: "Bluzka Black & White",      price: 190000, category: "blouse", collection: "new-york",  image: `${IMG}/bluzka-blackwhite.png`,     description: "Timeless monochrome blouse.",                                           sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p43", name: "Bluzka Ver.Sale",           price: 200000, category: "blouse", collection: "paris",     image: `${IMG}/bluzka-versale.png`,        description: "Palace-inspired blouse with regal detailing.",                          sizes: ["S","M","L"] },
  { id: "p44", name: "Bluzka Golden Age",         price: 210000, category: "blouse", collection: "cannes",    image: `${IMG}/bluzka-goldenage.png`,      description: "Golden-era glamour in a modern silhouette.",                            sizes: ["XS","S","M","L"] },
  { id: "p45", name: "Koszulka Calmea",           price: 130000, category: "top",    collection: "bali",      image: `${IMG}/koszulka-calmea.png`,       description: "Calm and serene — lightweight organic top.",                            sizes: ["XS","S","M","L"] },
  { id: "p46", name: "Spódnica Furansu",          price: 230000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-furansu.png`,      description: "French-inspired skirt with flowing movement.",                          sizes: ["XS","S","M","L"] },
  { id: "p47", name: "Spódnica Josepha",          price: 240000, category: "skirt",  collection: "paris",     image: `${IMG}/spodnica-josepha.png`,      description: "Named after Empress Joséphine — timeless grace.",                       sizes: ["S","M","L"], newArrival: true },
  { id: "p48", name: "Suknia Absolut Monaco",     price: 500000, category: "dress",  collection: "monaco",    image: `${IMG}/suknia-absolut-monaco.png`, description: "Signature Monaco gown — the crown jewel of the collection.",            sizes: ["S","M","L"], featured: true },
  { id: "p49", name: "Suknia Valentine Opera",    price: 480000, category: "dress",  collection: "cannes",    image: `${IMG}/suknia-valentine.png`,      description: "Opera-night glamour with romantic detailing.",                          sizes: ["XS","S","M","L"], featured: true },
  { id: "p50", name: "Set M'Antoine",             price: 350000, category: "set",    collection: "paris",     image: `${IMG}/set-mantoine.png`,          description: "Royal-inspired set with hand-finished accents.",                        sizes: ["S","M","L"] },
  { id: "p51", name: "Suknia D'OR 52",            price: 600000, category: "dress",  collection: "paris",     image: `${IMG}/suknia-dor52.jpg`,          description: "Golden-thread evening gown — luxury personified.",                      sizes: ["S","M","L"] },
  { id: "p52", name: "Pulli Arte Maturite",       price: 180000, category: "top",    collection: "monaco",    image: `${IMG}/pulli-arte-maturite.png`,   description: "Art-inspired knit pullover.",                                           sizes: ["S","M","L","XL"] },
  { id: "p53", name: "Bluzka AIX'A",              price: 190000, category: "blouse", collection: "st-tropez", image: `${IMG}/bluzka-aixa.jpg`,           description: "Provençal elegance in a relaxed blouse.",                               sizes: ["XS","S","M","L"] },
  { id: "p54", name: "Bluzka Jour.y",             price: 180000, category: "blouse", collection: "monaco",    image: `${IMG}/bluzka-joury.png`,          description: "Journey-inspired blouse with artisan finishes.",                        sizes: ["S","M","L"] },
  { id: "p55", name: "Kimono Dan.y",              price: 280000, category: "kimono", collection: "bali",      image: `${IMG}/kimono-dany.png`,           description: "Japanese-Balinese fusion kimono.",                                      sizes: ["S","M","L","XL"] },
  { id: "p56", name: "Szal NU",                   price: 150000, category: "scarf",  collection: "paris",     image: `${IMG}/szal-nu.png`,               description: "Minimalist scarf-wrap in luxurious wool.",                              sizes: ["ONE SIZE"] },
  { id: "p57", name: "Szal M'Antoine NU",         price: 170000, category: "scarf",  collection: "paris",     image: `${IMG}/szal-mantoine-nu.png`,      description: "Royal-inspired scarf with subtle pattern.",                             sizes: ["ONE SIZE"] },
  { id: "p58", name: "Płaszcz Shinrein",          price: 750000, category: "coat",   collection: "cannes",    image: `${IMG}/plaszcz-shinrein.png`,      description: "Sculptural coat with Japanese-inspired silhouette.",                    sizes: ["S","M","L"] },
  { id: "p59", name: "Płaszcz Imper",             price: 680000, category: "coat",   collection: "paris",     image: `${IMG}/plaszcz-imper.png`,         description: "Imperial coat — structured and commanding.",                            sizes: ["S","M","L"] },
  { id: "p60", name: "Sukienka Belle de Jour",    price: 320000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-belledejour.png`,  description: "Day-to-evening dress inspired by French cinema.",                       sizes: ["XS","S","M","L"], featured: true },
  { id: "p61", name: "Sukienka Cœur",             price: 290000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-coeur.png`,        description: "Heart-shaped neckline, Parisian romance.",                              sizes: ["S","M","L"] },
  { id: "p62", name: "Sukienka ICON",             price: 420000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-icon.png`,         description: "Iconic silhouette — a modern classic.",                                 sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p63", name: "Sukienka Kioto",            price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-kioto.png`,        description: "Kyoto-inspired dress with an obi waist detail.",                        sizes: ["S","M","L"] },
  { id: "p64", name: "Sukienka Hawaii",           price: 280000, category: "dress",  collection: "bali",      image: `${IMG}/sukienka-hawaii.png`,       description: "Tropical paradise in flowing fabric.",                                  sizes: ["XS","S","M","L"] },
  { id: "p65", name: "Sukienka Je Bilionera",     price: 520000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-jebilionera.jpg`,  description: "Billionaire's dress — luxury without limits.",                          sizes: ["S","M","L"] },
  { id: "p66", name: "Sukienka Milano",           price: 380000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-milano.png`,       description: "Italian design DNA — sharp and sensual.",                               sizes: ["XS","S","M","L"], newArrival: true },
  { id: "p67", name: "Sukienka Naiss.ance",       price: 340000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-naissiance.png`,   description: "Rebirth — flowing silhouette with new energy.",                         sizes: ["S","M","L"], newArrival: true },
  { id: "p68", name: "Sukienka NUèe Monaco",      price: 300000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-nuee-monaco.png`,  description: "Cloud-like Monaco dress in nude tones.",                                sizes: ["XS","S","M","L"] },
  { id: "p69", name: "Sukienka Slawa.X",          price: 360000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-slawax.png`,       description: "Slavic-inspired modern dress.",                                         sizes: ["S","M","L"] },
  { id: "p70", name: "Sukienka Voixa",            price: 310000, category: "dress",  collection: "paris",     image: `${IMG}/sukienka-voixa.png`,        description: "Voice of elegance — a statement dress.",                                sizes: ["XS","S","M","L"] },
  { id: "p71", name: "Suknia Impératrice",        price: 650000, category: "dress",  collection: "paris",     image: `${IMG}/suknia-imperatrice.png`,    description: "Empress gown — regal grandeur for special occasions.",                  sizes: ["S","M","L"], featured: true },
  { id: "p72", name: "Paris Absolut",             price: 420000, category: "dress",  collection: "paris",     image: `${IMG}/paris-absolut.jpg`,         description: "Quintessentially Parisian — the Absolut Paris dress.",                  sizes: ["XS","S","M","L"] },
  { id: "p73", name: "Set Gorudo NY",             price: 380000, category: "set",    collection: "new-york",  image: `${IMG}/set-gorudo-ny.png`,         description: "Golden New York set — power dressing redefined.",                       sizes: ["S","M","L"] },
  { id: "p74", name: "Set ICann.SSS",             price: 340000, category: "set",    collection: "cannes",    image: `${IMG}/set-icansss.png`,           description: "Cannes-inspired set with cinematic flair.",                             sizes: ["XS","S","M","L"] },
  { id: "p75", name: "Set Manhattan",             price: 400000, category: "set",    collection: "new-york",  image: `${IMG}/set-manhattan.png`,         description: "Manhattan skyline energy in a tailored set.",                           sizes: ["S","M","L"], newArrival: true },
  { id: "p76", name: "Sukienka Amey 53'",         price: 350000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-amey53.png`,       description: "Retro-inspired Monaco dress with '53 flair.",                           sizes: ["XS","S","M","L"] },
  { id: "p77", name: "Sukienka Côte d'Azur",      price: 340000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-cotedazur.png`,    description: "Azure coast elegance in flowing form.",                                 sizes: ["S","M","L"] },
  { id: "p78", name: "Sukienka Lux.URY",          price: 450000, category: "dress",  collection: "cannes",    image: `${IMG}/sukienka-luxury.png`,       description: "Pure luxury — no compromise.",                                          sizes: ["XS","S","M","L"] },
  { id: "p79", name: "Sukienka Melbourne",        price: 320000, category: "dress",  collection: "melbourne", image: `${IMG}/sukienka-melbourne.png`,    description: "Modern Melbourne style — bold and refined.",                            sizes: ["S","M","L"] },
  { id: "p80", name: "Sukienka Nice",             price: 290000, category: "dress",  collection: "st-tropez", image: `${IMG}/sukienka-nice.png`,         description: "Nice by name, nicer by nature.",                                        sizes: ["XS","S","M","L"] },
  { id: "p81", name: "Upper East Side",           price: 380000, category: "dress",  collection: "new-york",  image: `${IMG}/upper-east-side.png`,       description: "Manhattan's finest — sophisticated and sharp.",                         sizes: ["S","M","L"] },
  { id: "p82", name: "Bluzka Monte Carlo",        price: 190000, category: "blouse", collection: "monaco",    image: `${IMG}/bluzka-montecarlo.png`,     description: "Casino-chic blouse with luxurious detailing.",                          sizes: ["XS","S","M","L"] },
  { id: "p83", name: "Kardigan 44",               price: 280000, category: "cardigan",collection:"paris",     image: `${IMG}/kardigan-44.jpg`,           description: "Oversized cardigan — cozy Parisian luxury.",                            sizes: ["S","M","L","XL"] },
  { id: "p84", name: "Bluzka Vienna",             price: 180000, category: "blouse", collection: "paris",     image: `${IMG}/bluzka-vienna.png`,         description: "Viennese elegance — waltz-inspired blouse.",                            sizes: ["XS","S","M","L"] },
  { id: "p85", name: "Bluzka Work Premiere",      price: 170000, category: "blouse", collection: "cannes",    image: `${IMG}/bluzka-work-premiere.png`,  description: "Red carpet meets boardroom.",                                           sizes: ["S","M","L"] },
  { id: "p86", name: "Spodnie Doru",              price: 250000, category: "pants",  collection: "paris",     image: `${IMG}/spodnie-doru.png`,          description: "Wide-leg trousers with couture finish.",                                sizes: ["XS","S","M","L"] },
  { id: "p87", name: "Kardigan Ocean",            price: 260000, category: "cardigan",collection:"bali",      image: `${IMG}/kardigan-ocean.png`,        description: "Ocean-blue knit cardigan in merino wool.",                              sizes: ["S","M","L"] },
  { id: "p88", name: "Sukienka Monaco",           price: 380000, category: "dress",  collection: "monaco",    image: `${IMG}/sukienka-monaco.jpg`,       description: "The signature Monaco dress — timeless Riviera glamour.",                sizes: ["XS","S","M","L"], featured: true },
  { id: "p89", name: "Sukienka Megami",           price: 350000, category: "dress",  collection: "qatar",     image: `${IMG}/sukienka-megami.png`,       description: "Japanese goddess-inspired evening dress.",                              sizes: ["S","M","L"] },
  { id: "p90", name: "Poncho Absolut",            price: 320000, category: "poncho", collection: "monaco",    image: `${IMG}/poncho-absolut.png`,        description: "Luxurious oversized poncho in a cashmere blend.",                       sizes: ["ONE SIZE"], newArrival: true },
  { id: "p91", name: "Żakiet Jour.y (White)",     price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-white.png`,    description: "White journey blazer — summer elegance.",                               sizes: ["S","M","L"] },
  { id: "p92", name: "Żakiet Jour.y (Chocolate)", price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-choco.png`,    description: "Rich chocolate blazer with satin lining.",                              sizes: ["S","M","L"] },
  { id: "p93", name: "Żakiet Jour.y (Burgundy)",  price: 350000, category: "blazer", collection: "monaco",    image: `${IMG}/zakiet-joury-burg.png`,     description: "Brand-signature burgundy blazer.",                                      sizes: ["S","M","L"], newArrival: true },
  { id: "p94", name: "Żakiet M'Antoine",          price: 380000, category: "blazer", collection: "paris",     image: `${IMG}/zakiet-mantoine.png`,       description: "Royal-inspired structured blazer.",                                     sizes: ["XS","S","M","L"] },
  { id: "p95", name: "Żakiet Seiko",              price: 360000, category: "blazer", collection: "qatar",     image: `${IMG}/zakiet-seiko.png`,          description: "Precision-tailored blazer with Japanese influence.",                    sizes: ["S","M","L"] },
  { id: "p96", name: "Żakiet M'Antoine II",       price: 370000, category: "blazer", collection: "paris",     image: `${IMG}/zakiet-mantoine2.png`,      description: "Gold-beige toned blazer with regal detailing.",                         sizes: ["S","M","L"] },
  { id: "p97", name: "Żakiet Melbourne",          price: 340000, category: "blazer", collection: "melbourne", image: `${IMG}/zakiet-melbourne.png`,      description: "Australian-inspired relaxed blazer.",                                   sizes: ["S","M","L"] },
  { id: "p98", name: "Body Maturite",             price: 150000, category: "body",   collection: "monaco",    image: `${IMG}/body-maturite.png`,         description: "Sculpted bodysuit in premium jersey.",                                  sizes: ["XS","S","M","L"] },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "sztuka-ubioru",
    title: "The Art of Dressing",
    excerpt:
      "Clothing is more than fabric — it is an expression of identity, a canvas of self. Discover how Absolut Dimension approaches the philosophy of dressing.",
    image: "/img/blog/blog-1.jpg",
    date: "2026-03-15",
    author: "Absolut Dimension",
  },
  {
    id: "b2",
    slug: "monaco-collection-story",
    title: "Behind the Monaco Collection",
    excerpt:
      "From the azure waters of the Mediterranean to the atelier — the creative journey behind our latest Riviera-inspired pieces.",
    image: "/img/blog/blog-2.png",
    date: "2026-02-28",
    author: "Absolut Dimension",
  },
  {
    id: "b3",
    slug: "sustainable-luxury",
    title: "Sustainable Luxury: Our Commitment",
    excerpt:
      "How we source ethically, produce responsibly, and craft garments designed to last a lifetime.",
    image: "/img/blog/blog-3.jpg",
    date: "2026-01-20",
    author: "Absolut Dimension",
  },
  {
    id: "b4",
    slug: "evening-styling-guide",
    title: "The Evening Styling Guide",
    excerpt:
      "From cocktail hour to the gala — master the art of evening dressing with our styling tips.",
    image: "/img/blog/blog-4.png",
    date: "2025-12-10",
    author: "Absolut Dimension",
  },
];

// ─── Category labels (EN) ─────────────────────────────────────────────────────

export const categoryLabels: Record<ProductCategory, string> = {
  dress: "Dresses",
  coat: "Coats",
  bag: "Bags",
  set: "Sets",
  skirt: "Skirts",
  top: "Tops",
  blazer: "Blazers",
  kimono: "Kimonos",
  scarf: "Scarves",
  pants: "Trousers",
  cardigan: "Cardigans",
  poncho: "Ponchos",
  body: "Bodysuits",
  blouse: "Blouses",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Format a price stored in PLN grosze as "2 800 zł".
 * Uses Polish thousands-separator, no decimals (all products are whole-zł).
 */
export function formatPrice(priceInGrosze: number): string {
  const zloty = Math.round(priceInGrosze / 100);
  const withSpaces = zloty.toLocaleString("pl-PL").replace(/\u00A0/g, " ");
  return `${withSpaces} zł`;
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
