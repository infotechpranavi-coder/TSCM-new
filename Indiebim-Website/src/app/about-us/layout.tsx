import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { aboutPageSchemaGraph } from '@/data/schema/special';

const schemas = [
  aboutPageSchemaGraph,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'About Us', path: '/about-us' },
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
