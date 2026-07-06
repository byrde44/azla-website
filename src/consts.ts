// ── AZLA Solutions — centrale gegevens ──────────────────────────
// Pas hier alles in één keer aan; de hele site gebruikt deze waarden.

export const SITE = {
  name: 'AZLA Solutions',
  domain: 'https://www.azlasolutions.com',
  email: 'info@azlasolutions.com',
  // TODO: vervang door je echte nummer (internationaal formaat)
  phone: '+31612345678',
  phoneDisplay: '06 12 34 56 78',
  whatsapp: '31612345678',
  city: 'Krimpen aan den IJssel',
  region: 'Rotterdam en omgeving',
  tagline: 'Websites die klanten opleveren. Marketing die meetbaar werkt.',
  description:
    'AZLA Solutions is een premium webdesign- en marketingbureau in de regio Rotterdam. Wij bouwen razendsnelle websites en zorgen dat je gevonden wordt in Google én AI-zoekmachines zoals ChatGPT.',
} as const;

export const NAV = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Cases', href: '/cases' },
  { label: 'Werkwijze', href: '/over-ons#werkwijze' },
  { label: 'Blog', href: '/blog' },
  { label: 'Over ons', href: '/over-ons' },
] as const;

export const SERVICES = [
  {
    slug: 'webdesign',
    title: 'Webdesign & Development',
    short: 'Maatwerk websites die in milliseconden laden, premium ogen en bezoekers omzetten in aanvragen.',
    icon: 'design',
  },
  {
    slug: 'seo',
    title: 'SEO & AI-vindbaarheid',
    short: 'Bovenaan in Google én aanbevolen door ChatGPT, Perplexity en Gemini. Organische leads, elke maand weer.',
    icon: 'search',
  },
  {
    slug: 'social-media-advertising',
    title: 'Social Media Advertising',
    short: 'Winstgevende campagnes op Meta, Instagram en TikTok. Elke euro meetbaar terug te vinden in omzet.',
    icon: 'ads',
  },
] as const;
