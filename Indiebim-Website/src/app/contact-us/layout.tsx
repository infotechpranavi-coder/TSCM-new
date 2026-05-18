import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { contactPageSchema } from '@/data/schema/special';

const schemas = [
  contactPageSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Contact Us', path: '/contact-us' },
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
