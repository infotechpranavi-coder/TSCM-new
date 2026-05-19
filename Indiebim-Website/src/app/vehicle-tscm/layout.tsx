import type { Metadata } from 'next';
import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildServiceSchema, SERVICE_PAGE_SCHEMAS, SERVICE_BREADCRUMB_LABELS } from '@/data/schema/services';

const routePath = '/vehicle-tscm';

export const metadata: Metadata = {
  title: 'Vehicle TSCM Services India | GPS Tracker Detection Mumbai | Indiebim',
  description:
    'Protect your privacy on the move. Indiebim offers professional Vehicle TSCM and GPS tracker detection in Mumbai and across India. Expert bug sweeping by Israel-trained specialists.',
  keywords: [
    'Vehicle TSCM Services India',
    'GPS Tracker Detection Mumbai',
    'Car Debugging Service',
    'Bug Sweep for Vehicles',
    'Vehicle Privacy Audit',
    'Wahid Shaikh Security',
  ],
};

const schemas = [
  buildServiceSchema(SERVICE_PAGE_SCHEMAS[routePath]),
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: SERVICE_BREADCRUMB_LABELS[routePath], path: routePath },
  ]),
];

export default function SchemaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
