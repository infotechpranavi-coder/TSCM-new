import { SCHEMA_IDS, SERVICE_EQUIPMENT, SITE_URL } from './site';

type ServiceSchemaInput = {
  path: string;
  name: string;
  description: string;
  withEquipment?: boolean;
};

export function buildServiceSchema({
  path,
  name,
  description,
  withEquipment = true,
}: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${path}/#subservice`,
    name,
    provider: {
      '@id': SCHEMA_IDS.organization,
    },
    description,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  if (withEquipment) {
    schema.knowsAbout = [...SERVICE_EQUIPMENT];
  }

  return schema;
}

export const SERVICE_PAGE_SCHEMAS: Record<string, ServiceSchemaInput> = {
  '/corporate-tscm-service': {
    path: '/corporate-tscm-service',
    name: 'Corporate TSCM & Counter-Espionage Sweeps',
    description:
      'High-end corporate bug sweeping and technical surveillance counter-measures executed by trained specialists.',
  },
  '/residential-tscm-service': {
    path: '/residential-tscm-service',
    name: 'Residential TSCM Service',
    description:
      'Professional residential bug sweeping and privacy protection for homes, estates, and private family environments.',
  },
  '/cyber-tscm-service': {
    path: '/cyber-tscm-service',
    name: 'Cyber TSCM Service',
    description:
      'On-site cellular forensic scans and sophisticated malware detection to discover hidden tracking applications or mobile wiretapping tools.',
    withEquipment: false,
  },
  '/tscm-services': {
    path: '/tscm-services',
    name: 'TSCM Services',
    description:
      'Comprehensive technical surveillance counter-measures for corporate, residential, and executive environments across India.',
  },
  '/counter-surveillance': {
    path: '/counter-surveillance',
    name: 'Counter-Surveillance Services',
    description:
      'Professional counter-surveillance sweeps to detect unauthorized audio, video, and RF monitoring in sensitive spaces.',
  },
  '/bug-sweep': {
    path: '/bug-sweep',
    name: 'Bug Sweep Services',
    description:
      'Physical and technical bug sweeping to locate illicit electronic surveillance devices in offices, homes, and vehicles.',
  },
  '/eavesdropping-detection': {
    path: '/eavesdropping-detection',
    name: 'Eavesdropping Detection',
    description:
      'Specialist eavesdropping detection using spectrum analysis, NLJD, and physical inspection protocols.',
  },
  '/business-bug-sweep': {
    path: '/business-bug-sweep',
    name: 'Business Bug Sweep',
    description:
      'Business-focused electronic debugging and bug sweep services for offices, boardrooms, and commercial premises.',
    withEquipment: false,
  },
  '/home-bug-sweep': {
    path: '/home-bug-sweep',
    name: 'Home Bug Sweep',
    description:
      'Discreet home bug sweeping for private residences, apartments, and family living spaces.',
    withEquipment: false,
  },
  '/debugging-services': {
    path: '/debugging-services',
    name: 'Debugging Services',
    description:
      'Advanced debugging services to locate concealed transmitters, compromised devices, and surveillance hardware.',
    withEquipment: false,
  },
  '/vehicle-tscm': {
    path: '/vehicle-tscm',
    name: 'Vehicle TSCM',
    description:
      'Professional Vehicle TSCM and GPS tracker detection for executive cars, corporate fleets, and hired vehicles across India.',
    withEquipment: false,
  },
  '/technical-counter-surveillance': {
    path: '/technical-counter-surveillance',
    name: 'Technical Counter-Surveillance',
    description:
      'Technical counter-surveillance assessments using professional TSCM methodology and calibrated detection equipment.',
    withEquipment: false,
  },
  '/warning-signs-of-bugging': {
    path: '/warning-signs-of-bugging',
    name: 'Warning Signs of Bugging',
    description:
      'Guidance and professional assessment when you suspect unauthorized surveillance or hidden listening devices.',
    withEquipment: false,
  },
  '/tscm-services-in-mumbai': {
    path: '/tscm-services-in-mumbai',
    name: 'TSCM Services in Mumbai',
    description: 'Professional TSCM and bug sweep services deployed across Mumbai and the MMR.',
  },
  '/tscm-services-in-delhi': {
    path: '/tscm-services-in-delhi',
    name: 'TSCM Services in Delhi',
    description: 'Corporate and residential TSCM services for Delhi NCR and surrounding regions.',
  },
  '/tscm-services-in-bangalore': {
    path: '/tscm-services-in-bangalore',
    name: 'TSCM Services in Bangalore',
    description: 'TSCM and counter-surveillance support for Bangalore technology and corporate sectors.',
  },
  '/tscm-services-in-ahmedabad': {
    path: '/tscm-services-in-ahmedabad',
    name: 'TSCM Services in Ahmedabad',
    description: 'Professional bug sweeping and TSCM deployment in Ahmedabad and Gujarat.',
  },
  '/tscm-services-in-pune': {
    path: '/tscm-services-in-pune',
    name: 'TSCM Services in Pune',
    description: 'TSCM services for Pune corporate hubs, residences, and executive travel environments.',
  },
  '/bug-sweeping-services-in-mumbai': {
    path: '/bug-sweeping-services-in-mumbai',
    name: 'Bug Sweeping Services in Mumbai',
    description: 'Rapid-response bug sweeping for Mumbai offices, homes, and high-profile venues.',
  },
  '/bug-sweeping-services-in-delhi': {
    path: '/bug-sweeping-services-in-delhi',
    name: 'Bug Sweeping Services in Delhi',
    description: 'Bug sweep and debugging services across Delhi NCR.',
  },
  '/bug-sweeping-services-in-bangalore': {
    path: '/bug-sweeping-services-in-bangalore',
    name: 'Bug Sweeping Services in Bangalore',
    description: 'Bug sweeping for Bangalore startups, enterprises, and private clients.',
  },
  '/bug-sweeping-services-in-ahmedabad': {
    path: '/bug-sweeping-services-in-ahmedabad',
    name: 'Bug Sweeping Services in Ahmedabad',
    description: 'Professional bug sweep services in Ahmedabad and nearby industrial corridors.',
  },
  '/bug-sweeping-services-in-pune': {
    path: '/bug-sweeping-services-in-pune',
    name: 'Bug Sweeping Services in Pune',
    description: 'Bug sweeping and TSCM support for Pune corporate and residential clients.',
  },
};

export const SERVICE_BREADCRUMB_LABELS: Record<string, string> = {
  '/corporate-tscm-service': 'Corporate TSCM',
  '/residential-tscm-service': 'Residential TSCM',
  '/cyber-tscm-service': 'Cyber TSCM',
  '/tscm-services': 'TSCM Services',
  '/counter-surveillance': 'Counter-Surveillance',
  '/bug-sweep': 'Bug Sweep',
  '/eavesdropping-detection': 'Eavesdropping Detection',
  '/business-bug-sweep': 'Business Bug Sweep',
  '/home-bug-sweep': 'Home Bug Sweep',
  '/debugging-services': 'Debugging Services',
  '/vehicle-tscm': 'Vehicle TSCM',
  '/technical-counter-surveillance': 'Technical Counter-Surveillance',
  '/warning-signs-of-bugging': 'Warning Signs of Bugging',
  '/tscm-services-in-mumbai': 'TSCM Services Mumbai',
  '/tscm-services-in-delhi': 'TSCM Services Delhi',
  '/tscm-services-in-bangalore': 'TSCM Services Bangalore',
  '/tscm-services-in-ahmedabad': 'TSCM Services Ahmedabad',
  '/tscm-services-in-pune': 'TSCM Services Pune',
  '/bug-sweeping-services-in-mumbai': 'Bug Sweeping Mumbai',
  '/bug-sweeping-services-in-delhi': 'Bug Sweeping Delhi',
  '/bug-sweeping-services-in-bangalore': 'Bug Sweeping Bangalore',
  '/bug-sweeping-services-in-ahmedabad': 'Bug Sweeping Ahmedabad',
  '/bug-sweeping-services-in-pune': 'Bug Sweeping Pune',
};
