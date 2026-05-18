import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';

const schemas = [
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'TSCM Myths vs Reality', path: '/tscm-myths-vs-reality' },
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
