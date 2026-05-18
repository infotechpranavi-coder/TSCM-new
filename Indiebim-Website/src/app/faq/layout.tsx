import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { faqPageSchema } from '@/data/schema/special';

const schemas = [
  faqPageSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'FAQ', path: '/faq' },
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
