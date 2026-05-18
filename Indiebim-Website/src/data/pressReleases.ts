export type PressReleaseAuthor = {
  type: 'Organization' | 'Person';
  name: string;
};

export type PressReleaseItem = {
  slug: string;
  schemaType: 'NewsArticle' | 'PressRelease';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PressReleaseAuthor;
  category: 'announcement' | 'coverage';
  paragraphs: string[];
  externalUrl?: string;
  syndicationNote?: string;
};

export const pressReleases: PressReleaseItem[] = [
  {
    slug: 'indiebim-announces-advanced-tscm-capabilities',
    schemaType: 'NewsArticle',
    headline:
      'Indiebim Technology Solutions Expands Israel and USA Trained Corporate Sweeping Infrastructure',
    description:
      'Indiebim Technology Solutions announces a significant technical upgrade to its TSCM division, integrating advanced military-grade spectrum analyzers for corporate espionage defense.',
    image: '/HI-28%20(2)_page-0001.jpg',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    author: { type: 'Organization', name: 'Indiebim Corporate Communications' },
    category: 'announcement',
    paragraphs: [
      'Indiebim Technology Solutions Private Limited today announced a major expansion of its Technical Surveillance Counter-Measures (TSCM) infrastructure, integrating Israel and USA trained methodologies with next-generation spectrum analysis and non-linear junction detection platforms.',
      'The upgrade strengthens corporate boardroom sweeps, executive travel security, and high-risk M&A environments where legacy RF scanners fail to detect burst transmitters and dormant semiconductor circuits.',
      '“Corporate espionage in India is increasingly technical,” said Wahid Shaikh, Founder and Technical Surveillance Specialist at Indiebim. “Our clients require calibrated equipment, disciplined sweep protocols, and reporting that stands up to board-level scrutiny—not fear-based sales pitches.”',
      'The enhanced division deploys military-grade spectrum analyzers, NLJD systems, thermal imaging, and cellular forensic workflows across Mumbai, Delhi NCR, Bangalore, Pune, and Ahmedabad.',
      'Indiebim TSCM services remain available for confidential enquiries through the official media room and contact channels at tscm.in.',
    ],
  },
  {
    slug: 'building-indias-most-trusted-corporate-security-ecosystem',
    schemaType: 'PressRelease',
    headline:
      "Building India's Most Trusted Corporate Security Ecosystem — Official Press Release",
    description:
      'Indiebim Technology Solutions announces a nationwide press initiative positioning credible TSCM, counter-surveillance, and corporate security standards for Indian enterprises.',
    image: '/TSCM.jpeg',
    datePublished: '2026-05-06',
    dateModified: '2026-05-15',
    author: { type: 'Organization', name: 'Indiebim Corporate Communications' },
    category: 'announcement',
    syndicationNote:
      'Syndicated across 108+ digital publications with a combined audience reach exceeding 74 million readers.',
    paragraphs: [
      'Indiebim Technology Solutions Private Limited (CIN: U74999MH2019PTC331875) has issued a corporate press release outlining its mission to build India’s most trusted corporate security ecosystem—anchored in Technical Surveillance Counter-Measures (TSCM), ethical debugging, and intelligence-led risk advisory.',
      'The release highlights Indiebim’s Credibility First approach: transparent scope, calibrated equipment, and professional reporting rather than alarmist claims. Services span corporate bug sweeps, residential TSCM, cyber device forensics, and counter-espionage support for regulated industries.',
      'Founder Wahid Shaikh, whose expertise spans H S Detectives, Orion Intelligence, and Indiebim TSCM, emphasized that modern threats include burst transmitters, laser microphones, and compromised mobile endpoints—not only legacy listening devices.',
      'The announcement was distributed nationally to business, regional, and industry publications, reinforcing Indiebim’s position as a specialist TSCM provider headquartered in Mumbai with pan-India deployment capability.',
      'For official statements, media enquiries, or sweep consultations, visit tscm.in/contact-us.',
    ],
  },
  {
    slug: 'mid-day-inspiring-personalities-2026',
    schemaType: 'NewsArticle',
    headline:
      'Meet 8 Inspiring Personalities Building Legacy, Authority & Shaping the Future in 2026',
    description:
      'National Mid-Day feature on leaders driving innovation across technology, healthcare, education, media, and business — including recognition of security and intelligence expertise.',
    image: '/IMG-20260425-WA0040.jpg%20(2).jpeg',
    datePublished: '2026-04-01',
    author: { type: 'Organization', name: 'Mid-Day' },
    category: 'coverage',
    externalUrl:
      'https://www.mid-day.com/buzzfeed/article/meet-8-inspiring-personalities-building-legacy-authority-and-shaping-the-future-in-2026-9476',
    paragraphs: [
      'Mid-Day published a national feature profiling eight inspiring personalities building legacy and authority across India in 2026. The piece spotlights leaders shaping the future in technology, healthcare, education, media, and business.',
      'The coverage recognizes Wahid Shaikh and Indiebim Technology Solutions for contributions to strategic intelligence, technical surveillance counter-measures, and corporate security leadership.',
      'Indiebim hosts this archive page for reference. Read the full feature on Mid-Day using the link below.',
    ],
  },
  {
    slug: 'samacharwani-wahid-shaikh-security-intelligence',
    schemaType: 'NewsArticle',
    headline:
      'Wahid Shaikh: A Trusted Name in Strategic Intelligence and the Security Sector',
    description:
      'Samacharwani profile of Wahid Shaikh — founder of Indiebim Technology Solutions, H S Detectives, and Orion Intelligence — on TSCM, corporate security, and the Credibility First approach.',
    image: '/TSCM.jpeg',
    datePublished: '2026-05-13',
    author: { type: 'Organization', name: 'Samacharwani' },
    category: 'coverage',
    externalUrl:
      'https://samacharwani.com/2026/05/13/wahid-shaikh-indiebim-technology-solutions-security-intelligence/',
    paragraphs: [
      'Samacharwani published an in-depth profile of Wahid Shaikh, describing his work across strategic intelligence, TSCM, and the broader corporate security sector in India.',
      'The article connects Indiebim Technology Solutions with H S Detectives and Orion Intelligence, outlining a Credibility First philosophy focused on ethical debugging, spectrum analysis, and boardroom-ready reporting.',
      'This page is Indiebim’s on-site archive of the coverage. Visit Samacharwani for the complete article.',
    ],
  },
];

export function getPressReleaseBySlug(slug: string): PressReleaseItem | undefined {
  return pressReleases.find((item) => item.slug === slug);
}

export function getPressReleasesByCategory(
  category: PressReleaseItem['category']
): PressReleaseItem[] {
  return pressReleases.filter((item) => item.category === category);
}
