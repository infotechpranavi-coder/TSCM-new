import { ORG_IMAGE, POSTAL_ADDRESS, SCHEMA_IDS, SITE_URL } from './site';

export const corporateReviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  '@id': `${SITE_URL}/#tscm-review-01`,
  itemReviewed: {
    '@type': 'Service',
    name: 'Corporate TSCM Boardroom Sweep',
    provider: {
      '@id': SCHEMA_IDS.corporateEntity,
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  author: {
    '@type': 'Organization',
    name: 'Head of Corporate Security, Financial Services Hub',
  },
  reviewBody:
    'Indiebim executed an incredibly thorough technical sweep of our executive floor. Their use of advanced spectrum analyzers and NLJD equipment identified legacy vulnerabilities immediately. Absolute professionals.',
  publisher: {
    '@id': SCHEMA_IDS.corporateEntity,
  },
};

/** FAQ text copied from /faq page (logistics-legal category) — on-page match required. */
export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a professional TSCM sweep cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on site size, threat profile, scope of work, and the type of environment involved. Indiebim provides transparent pricing for both SMEs and larger enterprise clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a sweep take for a standard 2BHK or small office?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough sweep generally takes around 4 to 6 hours. We do not rush the process because completeness matters more than speed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide a certificate of clearance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After a completed sweep, Indiebim can issue a professional report and a clearance certificate for client records where appropriate.',
      },
    },
  ],
};

export const aboutPageSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/about-us/#profile`,
      mainEntity: {
        '@id': SCHEMA_IDS.executiveFounder,
      },
    },
    {
      '@type': 'Person',
      '@id': SCHEMA_IDS.executiveFounder,
      name: 'Wahid Shaikh',
      jobTitle: 'Founder & Technical Surveillance Specialist',
      worksFor: {
        '@id': SCHEMA_IDS.organization,
      },
      description:
        'Lead technical surveillance counter-measures expert specializing in high-end electronic bug sweeping, spectrum analysis, and counter-espionage infrastructure.',
      knowsAbout: [
        'Technical Surveillance Counter-Measures (TSCM)',
        'Counter-Espionage Strategy',
        'Radio Frequency Security',
        'Electronic Debugging',
      ],
      sameAs: [
        'https://www.hsdetectives.com',
        'https://www.wahidshaikh.com',
        'https://www.linkedin.com/in/wahidshaikh',
      ],
    },
  ],
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact-us/#contact`,
  url: `${SITE_URL}/contact-us`,
  name: 'Contact Indiebim TSCM',
  description: 'Contact Indiebim Technology Solutions for TSCM, bug sweeping, and cyber TSCM enquiries.',
  mainEntity: {
    '@id': SCHEMA_IDS.organization,
  },
  about: {
    '@id': SCHEMA_IDS.organization,
  },
};

export const organizationContactPoint = {
  '@type': 'ContactPoint',
  telephone: '+91-9967107077',
  email: 'info@indiebim.com',
  contactType: 'customer service',
  areaServed: 'IN',
  availableLanguage: ['English', 'Hindi'],
};

export function buildMediaNewsArticleSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${SITE_URL}/media/#news`,
    headline: 'Indiebim TSCM — Press and Media Coverage',
    description:
      'Press features and media coverage of Indiebim Technology Solutions, Wahid Shaikh, and TSCM services in India.',
    image: [`${SITE_URL}/HI-28%20(2)_page-0001.jpg`],
    datePublished: '2026-04-01',
    dateModified: '2026-05-15',
    author: {
      '@id': SCHEMA_IDS.executiveFounder,
      name: 'Wahid Shaikh',
    },
    publisher: {
      '@type': 'Organization',
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: ORG_IMAGE,
      },
    },
    mainEntityOfPage: `${SITE_URL}/media`,
  };
}

export function buildPublicationsNewsArticleSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${SITE_URL}/publications/#news`,
    headline: 'Indiebim Publications and Press Distribution',
    description:
      'Publications, press releases, and media placements for Indiebim Technology Solutions Private Limited.',
    image: [ORG_IMAGE],
    datePublished: '2026-01-01',
    dateModified: '2026-05-15',
    publisher: {
      '@type': 'Organization',
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
    },
    mainEntityOfPage: `${SITE_URL}/publications`,
  };
}

const MONTH_TO_ISO: Record<string, string> = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

export function parseDisplayDateToIso(displayDate: string): string {
  const [month, year] = displayDate.trim().split(/\s+/);
  const monthNumber = MONTH_TO_ISO[month];
  if (!monthNumber || !year) return '2026-01-01';
  return `${year}-${monthNumber}-01`;
}

export function buildBlogPostingSchema(input: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}/blog/${input.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: input.headline,
    description: input.description,
    image: [ORG_IMAGE],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      '@id': SCHEMA_IDS.executiveFounder,
      name: 'Wahid Shaikh',
    },
    publisher: {
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
    },
  };
}

export function buildPressReleaseArticleSchema(input: {
  slug: string;
  schemaType: 'NewsArticle' | 'PressRelease';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorType: 'Organization' | 'Person';
  authorName: string;
}) {
  const url = `${SITE_URL}/media/${input.slug}`;
  const imageUrl = input.image.startsWith('http') ? input.image : `${SITE_URL}${input.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': input.schemaType,
    '@id': `${url}/#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: input.headline,
    description: input.description,
    image: [imageUrl],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': input.authorType,
      name: input.authorName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: ORG_IMAGE,
      },
    },
  };
}

export function buildCaseStudyArticleSchema(input: {
  slug: string;
  headline: string;
  description: string;
}) {
  const url = `${SITE_URL}/case-study/${input.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: input.headline,
    description: input.description,
    image: [ORG_IMAGE],
    author: {
      '@id': SCHEMA_IDS.executiveFounder,
      name: 'Wahid Shaikh',
    },
    publisher: {
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
    },
  };
}
