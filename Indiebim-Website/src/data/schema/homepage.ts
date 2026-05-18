import { ORG_IMAGE, POSTAL_ADDRESS, SCHEMA_IDS, SITE_URL } from './site';

export const homepageSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Corporation',
      '@id': SCHEMA_IDS.corporateEntity,
      name: 'Indiebim Technology Solutions Private Limited',
      legalName: 'Indiebim Technology Solutions Private Limited',
      url: SITE_URL,
      foundingDate: '2019-10-18',
      address: POSTAL_ADDRESS,
      identifier: {
        '@type': 'PropertyValue',
        name: 'CIN',
        value: 'U74999MH2019PTC331875',
      },
      knowsAbout: [
        'Technical Surveillance Counter-Measures',
        'Information Security',
        'Corporate Counter-Espionage',
        'Electronic Bug Sweeping',
      ],
      sameAs: [
        'https://www.hsdetectives.com',
        'https://www.wahidshaikh.com',
        'https://www.osintels.com',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': SCHEMA_IDS.organization,
      name: 'Indiebim Technology Solutions Private Limited',
      alternateName: 'Indiebim TSCM Services',
      url: SITE_URL,
      image: ORG_IMAGE,
      priceRange: '$$$',
      foundingDate: '2019',
      description:
        'Specialized Technical Surveillance Counter-Measures (TSCM) and elite electronic bug sweeping division of Indiebim Technology Solutions Private Limited.',
      address: POSTAL_ADDRESS,
      telephone: '+91-9967107077',
      knowsAbout: [
        'Technical Surveillance Counter-Measures (TSCM)',
        'Electronic Bug Sweeping',
        'Audio & Video Counter-Spy Detection',
        'Corporate Espionage Mitigation',
        'Mobile Malware & Virus Forensic Scanning',
      ],
      sameAs: [
        'https://www.hsdetectives.com',
        'https://www.wahidshaikh.com',
        'https://www.orionsc.in',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': SCHEMA_IDS.website,
      url: SITE_URL,
      name: 'Indiebim TSCM',
      publisher: {
        '@id': SCHEMA_IDS.organization,
      },
    },
  ],
};
