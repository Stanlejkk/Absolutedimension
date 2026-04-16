/**
 * English UI dictionary. Keep the key tree stable — it is the source of
 * `DictionaryKey` in ./index.ts. Polish (pl.ts) must mirror this structure.
 */

export const en = {
  nav: {
    shop: "Shop",
    collections: "Collections",
    atelier: "Atelier",
    editorial: "Editorial",
    searchAria: "Search",
    menuAria: "Menu",
    shopAria: "Shop",
    bagAria: "Bag",
    switchLanguageAria: "Switch language",
  },

  cart: {
    title: "Your bag",
    empty: "Your bag is empty.",
    emptyBody: "Add a piece from the wardrobe — every garment is kept for you once it lands here.",
    continueShopping: "Continue shopping",
    sizeLabel: "Size",
    quantityLabel: "Quantity",
    remove: "Remove",
    increase: "Increase quantity",
    decrease: "Decrease quantity",
    subtotal: "Subtotal",
    shippingNote: "Shipping and duties calculated at checkout.",
    checkout: "Checkout",
    viewBag: "View bag",
    addedToast: "Added to bag",
    closeAria: "Close bag",
    itemsCount: {
      one: "{count} item",
      other: "{count} items",
    },
    lineTotalAria: "Line total",
  },

  checkout: {
    title: "Checkout",
    summary: "Order summary",
    payWithStripe: "Pay with Stripe",
    preparing: "Preparing your secure checkout…",
    comingSoon: "Stripe checkout is coming soon",
    comingSoonBody:
      "We are finalising the secure payment integration. In the meantime, write to atelier@absolutdimension.com and we will arrange your order by correspondence.",
    errorTitle: "Checkout could not start",
    errorBody: "Something went wrong on our side. Please try again in a moment.",
    backToBag: "Back to bag",
    emptyTitle: "Your bag is empty",
    emptyBody: "There is nothing to check out yet. Add a piece from the wardrobe first.",
    browseShop: "Browse the shop",
    total: "Total",
  },

  hero: {
    eyebrow: "Autumn / Winter 2025",
    title: "Absolut Dimension",
    subtitle: "Considered tailoring, made to be lived in.",
    ctaShop: "Discover",
    ctaStory: "Our atelier",
    scroll: "Scroll",
    goToSlide: "Go to slide {n}",
  },

  marquee: {
    tagline: "Made in Poland — considered, quiet, uncompromising.",
    separator: "·",
    eyebrow: "Absolute Dimension",
    headline: "Harmony of Luxury",
    phrase1: "Harmony of Luxury",
    phrase2: "SM.ART Wardrobe",
    phrase3: "Timeless silhouettes",
    phrase4: "Made in Poland",
    phrase5: "Sublime aesthetics",
    phrase6: "Designed to endure",
  },

  sections: {
    featuredEyebrow: "Selected pieces",
    featuredTitle: "From the atelier",
    featuredLink: "View the full collection",

    collectionsEyebrow: "Collections",
    collectionsTitle: "Eight cities, eight moods",
    collectionsLink: "Browse all collections",
    collectionsHeadline1: "Collections",
    collectionsHeadline2: "without season.",
    collectionsBody:
      "We resist trends. Our garments are conceived as long companions — cut once, considered twice, and rendered in materials that soften with time.",
    collectionsExploreAll: "Explore all collections",

    newArrivalsEyebrow: "New arrivals",
    newArrivalsTitle: "Fresh to the floor",

    storyEyebrow: "Our atelier",
    storyTitle: "Cut, drape, finish — in that order",
    storyHeadline1: "An",
    storyHeadlineItalic: "orderly",
    storyHeadline2: "way of dressing.",
    storyBody:
      "Every piece begins on the table. We cut natural cloth with hand patterns, drape it until the silhouette settles, and finish by hand in our Warsaw atelier. No shortcuts, no quiet compromises — only garments that improve as you wear them.",
    storyLead:
      "Absolut Dimension is a study in restraint — a house dedicated to the idea that a wardrobe should be composed like a library, each piece chosen with intent and kept for its own sake.",
    storyPara2:
      "We work with small Polish ateliers to cut silhouettes that honour the human form. Fabrics are sourced in Italy and France; finishing is done by hand. Nothing in our house is rushed.",
    storyStat1Value: "14",
    storyStat1Label: "Years of atelier",
    storyStat2Value: "100%",
    storyStat2Label: "Made in Poland",
    storyStat3Value: "07",
    storyStat3Label: "Editions released",
    storyStat4Value: "48h",
    storyStat4Label: "Hand-finishing",
    storyLink: "Inside the atelier",

    editorialEyebrow: "Journal",
    editorialTitle: "Letters from the studio",
    editorialLink: "All letters",
    editorialHeadline1: "Words &",
    editorialHeadline2: "images.",
    editorialAllEntries: "All entries",
    editorialReadAction: "Read",
    editorialTagEditorial: "Editorial",
    editorialTagLookbook: "Lookbook",
    editorialTagHouse: "House",
    editorialTagStyling: "Styling",
  },

  newsletter: {
    eyebrow: "The letter",
    titleLine1: "Correspondence,",
    titleLine2: "quietly delivered.",
    body:
      "Four letters a year. New editions, early access, and occasional notes from the atelier. No noise.",
    placeholder: "your@address.com",
    submit: "Subscribe",
    success: "Merci. Your first letter will arrive soon.",
    error: "Something went wrong. Please try again.",
    privacy: "By subscribing you accept our privacy policy.",
  },

  footer: {
    tagline: "Considered tailoring from Warsaw.",
    headline1: "A wardrobe,",
    headline2: "designed",
    headlineItalic: "to endure.",
    colShop: "Shop",
    colHouse: "House",
    colCare: "Care",
    links: {
      shopAll: "All pieces",
      newArrivals: "New arrivals",
      collections: "Collections",
      ourStory: "Our story",
      journal: "Editorial",
      atelier: "Atelier",
      sustainability: "Sustainability",
      madeInPoland: "Made in Poland",
      press: "Press",
      contact: "Contact",
      shipping: "Shipping",
      returns: "Returns",
      sizeGuide: "Size guide",
      care: "Garment care",
    },
    social: "Follow",
    rights: "All rights reserved.",
    company: "Absolut Dimension Sp. z o.o.",
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
    },
  },

  shop: {
    eyebrow: "The collection",
    title: "Shop",
    subtitle: "All pieces. Sorted by arrival.",
    filters: {
      all: "All",
      new: "New",
      featured: "Featured",
      collection: "Collection",
      category: "Category",
      sort: "Sort",
      sortOptions: {
        newest: "Newest",
        priceAsc: "Price — low to high",
        priceDesc: "Price — high to low",
      },
      clear: "Clear filters",
    },
    empty: "Nothing matches these filters yet.",
    count: {
      one: "{count} piece",
      other: "{count} pieces",
    },
    badges: {
      new: "New",
      featured: "Featured",
    },
  },

  product: {
    backToShop: "Back to shop",
    details: "Details",
    description: "Description",
    size: "Size",
    selectSize: "Select a size",
    addToBag: "Add to bag",
    adding: "Adding…",
    added: "Added to bag ✓",
    notify: "Notify me when available",
    soldOut: "Sold out",
    care: "Care",
    shippingReturns: "Shipping & returns",
    sharedCollection: "From the {collection} collection",
    recommended: "You may also like",
    materials: "Materials & craft",
    madeIn: "Made in Poland",
    priceFrom: "from",
    outOfStock: "Currently unavailable",
    saveForLater: "Save for later",
    materialsBody:
      "Fabric sourced in Italy and France. Cut and finished by hand in our Warsaw atelier. Reinforced seams, bound edges, and solid brass hardware.",
    shippingTitle: "Shipping",
    shippingBody:
      "Complimentary shipping on orders above 500 zł. Dispatched within 3–5 working days.",
    returnsTitle: "Returns",
    returnsBody:
      "14 days to return, unused and with original tags. Bespoke and final-sale pieces excluded.",
    notFoundTitle: "Piece not found.",
    collectionSuffix: "collection",
    fromSameCollection: "From the same",
    fromSameCollectionItalic: "collection",
    viewCollection: "View {collection}",
    breadcrumbHome: "Home",
  },

  collections: {
    eyebrow: "Collections",
    title: "Eight cities, eight moods",
    subtitle: "Each collection is a chapter — a city, a season, a way of dressing.",
    pieceCount: {
      one: "{count} piece",
      few: "{count} pieces",
      many: "{count} pieces",
      other: "{count} pieces",
    },
    view: "View the collection",
    emptyState: "This chapter is still being written.",
    indexEyebrow: "Destinations",
    indexHeadline1: "Eight cities,",
    indexHeadlineItalic: "one wardrobe.",
    indexBody:
      "Each collection begins with a place — its colours, its cadence, its quiet hours. The result is clothing that travels, and that you keep returning to.",
    indexNumberSuffix: "Collection",
    piecesArrow: "pieces →",
  },

  collection: {
    back: "All collections",
    pieces: "Pieces",
    explore: "Explore",
    notFoundTitle: "Collection not found.",
    singular: "Collection",
    emptyState: "This collection is being composed. Check back soon.",
    continueHeadline: "Continue",
    continueItalic: "exploring.",
  },

  blog: {
    eyebrow: "Journal",
    title: "Letters from the studio",
    subtitle:
      "Four letters a year. Editorials from the atelier, notes on our collections, and the occasional correspondence with the people we dress.",
    readMore: "Read the letter",
    readingTime: "{minutes} min read",
    byAuthor: "by {author}",
    empty: "The journal is quiet for now.",
    backToJournal: "Back to the journal",
    shareHeading: "Share",
    nextLetter: "Next letter",
    prevLetter: "Previous letter",
    notFoundTitle: "Letter not found.",
    moreLettersHeadline: "More",
    moreLettersItalic: "letters.",
  },

  about: {
    eyebrow: "Atelier",
    title: "Cut, drape, finish.",
    lede:
      "Absolut Dimension is a tailoring house based in Warsaw. We design and make clothes for a life lived with intention — on the square, in the restaurant, in the car, on the jet.",
    storyHeading: "Our story",
    storyBody:
      "We started with a simple conviction: that a wardrobe should feel like a long conversation, not a series of impulses. Every piece is pattern-drawn by hand, cut from mills we know by name, and finished with hand stitches at the hem, the collar, and the lining.",
    valuesHeading: "How we work",
    values: {
      cloth: {
        title: "Cloth first",
        body: "We choose the mill before we choose the silhouette. Wool from Biella, silk from Como, linen from the north.",
      },
      hand: {
        title: "Hand-finished",
        body: "Hems, collars, buttonholes — every garment carries the hand of the person who finished it.",
      },
      slow: {
        title: "Small runs",
        body: "Nothing is made in large volume. If a piece sells out, it often returns, quietly, the next season.",
      },
    },
    visitHeading: "Visit the atelier",
    visitBody:
      "By appointment, Tuesday through Saturday. Mokotów, Warsaw. Write to us at atelier@absolutdimension.com.",
    heroEyebrow: "The House",
    heroTitle1: "About",
    heroTitleItalic: "us.",
    heroSubtitle:
      "A Polish house of thoughtful clothing — composed like a library, cut like architecture, worn like a second skin.",
    philosophyEyebrow: "Philosophy",
    philosophyTitle1: "An",
    philosophyTitleItalic: "orderly",
    philosophyTitle2: "way of dressing.",
    philosophyBody1:
      "Absolut Dimension is a Polish house of luxury clothing, creating unique garments inspired by the most beautiful metropolises in the world. From Monaco to Bali, each collection tells the story of a place that inspired it.",
    philosophyBody2:
      "Our pieces are made in a Polish atelier from the finest materials — silk, cashmere, merino wool, and organic cotton. Every element is hand-finished with devotion to the smallest detail. We believe that fashion is a form of artistic expression — so each of our collections joins the tradition of tailoring to contemporary design, creating pieces that are timeless and singular.",
    stats: {
      uniquePieces: { value: "108+", label: "Unique pieces" },
      collections: { value: "8", label: "Collections" },
      yearsOfAtelier: { value: "14", label: "Years of atelier" },
      madeInPoland: { value: "100%", label: "Made in Poland" },
    },
    pillarsEyebrow: "What we keep",
    pillarsTitle1: "Four things we",
    pillarsTitleItalic: "hold to.",
    pillars: {
      restraint: {
        title: "Restraint",
        body: "We cut once and consider twice. Fewer pieces, chosen with intent — a library of a wardrobe.",
      },
      craft: {
        title: "Craft",
        body: "Every seam is hand-finished in our Warsaw atelier. Reinforced edges, solid-brass hardware, and a patience that machines cannot replicate.",
      },
      provenance: {
        title: "Provenance",
        body: "Silks from Como, cottons from Puglia, wools from Biella. Fabrics sourced in Italy and France, travelling short distances before they reach our hands.",
      },
      endurance: {
        title: "Endurance",
        body: "We design for a decade, not a season. Our pieces are made to soften with time — and to be kept.",
      },
    },
    atelierEyebrow: "The atelier",
    atelierTitle1: "Warsaw,",
    atelierTitle2: "Okopowa street.",
    atelierBody:
      "A small workshop on a quiet street, where every garment is cut, assembled, and finished by hand. Our team of six has worked together for over a decade.",
    discoverCollections: "Discover collections",
    shopTheWardrobe: "Shop the wardrobe",
  },

  notFound: {
    code: "404",
    title: "This page slipped through the pattern.",
    body: "The page you are looking for no longer exists, or perhaps never did. Let us walk you back.",
    cta: "Return home",
    shop: "Shop",
    eyebrow: "404 — Off the path",
    headline1: "This page is",
    headlineItalic: "out of season.",
    longBody:
      "The address you tried doesn't match any piece in our archive. Let us walk you back to the wardrobe.",
    ctaHome: "Back to home",
    ctaShop: "Browse the shop",
  },

  price: {
    currency: "PLN",
    /** Intl locale code used for price formatting in en mode. */
    localeCode: "en-GB",
  },

  common: {
    loading: "Loading…",
    close: "Close",
    open: "Open",
    readMore: "Read more",
    back: "Back",
    view: "View",
    viewAll: "View all",
    required: "required",
    optional: "optional",
  },
} as const;

/**
 * Recursively widen all string literal leaves to `string` so that the PL
 * dictionary (which must *mirror the shape*, not match the exact English
 * values) can satisfy this type. Non-leaf nodes preserve their key structure
 * so that dotted-path types in ./index.ts continue to work.
 */
type DeepStringShape<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly DeepStringShape<U>[]
  : { [K in keyof T]: DeepStringShape<T[K]> };

export type EnDictionary = DeepStringShape<typeof en>;
