export const site = {
  name: "Budget Plant ID",
  tagline: "ID plants without a subscription",
  developer: "BitLion, LLC",
  url: "https://budget-plant-id.com",
  appStoreUrl: "https://apps.apple.com/us/app/budget-plant-id/id6747782540",
  privacyUrl: "https://sites.google.com/thebitlion.com/privacy/home",
  eulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  supportEmail: "grant@thebitlion.com",
  category: "Education",
  ageRating: "4+",
  platforms: "iPhone · iPad · Mac · Vision Pro",
} as const;

export type Pack = {
  credits: number;
  price: number;
  label: string;
  note: string;
  best?: boolean;
};

/** In-app purchases exactly as they are listed on the App Store. */
export const packs: Pack[] = [
  { credits: 2, price: 0.99, label: "2 Pack", note: "Try it out" },
  { credits: 5, price: 1.99, label: "5 Pack", note: "A walk in the park" },
  { credits: 10, price: 2.99, label: "10 Pack", note: "A whole garden bed" },
  { credits: 20, price: 4.99, label: "20 Pack", note: "A season of questions" },
  {
    credits: 50,
    price: 9.99,
    label: "50 Pack",
    note: "For the plant obsessed",
    best: true,
  },
];

export const perCredit = (p: Pack) => p.price / p.credits;

export const faqs = [
  {
    q: "Is there really no subscription?",
    a: "None. Budget Plant ID is a free download with one-time credit packs. There is no recurring charge, no trial that quietly converts, and no paywall that grows over time. Buy a pack, use it whenever you like.",
  },
  {
    q: "What exactly is a credit?",
    a: "One credit is one identification. You get the ranked species matches, the care guide, the health check and everything else on the result — all of it, for that single credit. Nothing else in the app costs credits.",
  },
  {
    q: "Do credits expire?",
    a: "No. Credits sit in your account until you spend them. There is no clock, no monthly reset and no use-it-or-lose-it balance.",
  },
  {
    q: "How accurate is it?",
    a: "Every photo is analysed against leaf shape, venation and arrangement, flower structure, stem and bark texture, and overall growth habit, then returned as three to five ranked candidates with a confidence score on each — so you can see when the app is certain and when it is guessing between close relatives. Clear, well-lit photos of leaves and flowers give the best results.",
  },
  {
    q: "Can it tell me if my plant is sick?",
    a: "Yes. Alongside the species match, each identification is screened for spots, mildew, rust, chewed or curling leaves, discolouration and wilting. If something looks wrong you get the likely diagnosis, its cause, and both organic and chemical treatment options.",
  },
  {
    q: "Do I need an account?",
    a: "Yes — sign in with Apple, Google or an email address. The account is what holds your credits and your identification history, so a new phone picks up exactly where the old one left off. You can delete the account, and everything in it, from inside the app.",
  },
  {
    q: "Does it work offline?",
    a: "Identification needs a connection, since the analysis runs on a server rather than on your phone. Your saved history is a tap away whenever you are back online.",
  },
  {
    q: "Is it on Android?",
    a: "Not yet — Budget Plant ID runs on iPhone, iPad, Mac with Apple silicon and Vision Pro today. Email us if you would like to hear about it when that changes.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open the Buy Credits tab and tap the restore icon in the top bar. Anything bought with your Apple Account is validated again and returned to your balance.",
  },
] as const;
