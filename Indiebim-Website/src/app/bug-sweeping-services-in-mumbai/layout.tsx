import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildServiceSchema, SERVICE_PAGE_SCHEMAS, SERVICE_BREADCRUMB_LABELS } from '@/data/schema/services';

const routePath = '/bug-sweeping-services-in-mumbai';

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
