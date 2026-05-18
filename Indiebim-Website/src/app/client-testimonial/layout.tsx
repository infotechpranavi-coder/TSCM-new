import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { corporateReviewSchema } from '@/data/schema/special';

const schemas = [
  corporateReviewSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Client Testimonials', path: '/client-testimonial' },
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
