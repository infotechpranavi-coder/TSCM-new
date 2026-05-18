import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';

const schemas = [
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Technical Glossary', path: '/technical-glossary' },
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
