export const SITE_URL = 'https://tscm.in';

export const SCHEMA_IDS = {
  corporateEntity: `${SITE_URL}/#corporate-entity`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  executiveFounder: `${SITE_URL}/#executive-founder`,
} as const;

export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress:
    'A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West',
  addressLocality: 'Mumbai',
  addressRegion: 'MH',
  postalCode: '400053',
  addressCountry: 'IN',
} as const;

export const ORG_IMAGE = `${SITE_URL}/TSCM.jpeg`;

export const SERVICE_EQUIPMENT = [
  'Non-Linear Junction Detector (NLJD)',
  'Radio Frequency Spectrum Analyzer',
  'Thermal Imaging Infared Cameras',
  'GSM and Laser Microphone Countermeasures',
  'VLF Carrier Current Detection',
] as const;
