import type { Metadata } from 'next';
import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildMediaNewsArticleSchema } from '@/data/schema/special';

export const metadata: Metadata = {
  title: 'Media | Indiebim',
  description:
    'Indiebim media hub — photo gallery, publications, case studies, and blog coverage from TSCM and counter-surveillance operations.',
};

const schemas = [
  buildMediaNewsArticleSchema(),
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Media', path: '/media' },
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
