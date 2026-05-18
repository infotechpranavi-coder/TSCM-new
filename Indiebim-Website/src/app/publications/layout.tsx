import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildPublicationsNewsArticleSchema } from '@/data/schema/special';

const schemas = [
  buildPublicationsNewsArticleSchema(),
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Publications', path: '/publications' },
  ]),
];

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
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
