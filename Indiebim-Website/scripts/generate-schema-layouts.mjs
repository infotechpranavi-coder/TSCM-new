import fs from 'fs';
import path from 'path';

const appDir = 'src/app';

const layoutFooter = `
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
`;

function writeLayout(folder, header, schemasBody) {
  const dir = path.join(appDir, folder);
  if (!fs.existsSync(dir)) {
    console.warn('skip missing', folder);
    return;
  }
  fs.writeFileSync(path.join(dir, 'layout.tsx'), `${header}\n\n${schemasBody}\n${layoutFooter}`);
}

function breadcrumbLayout(folder, label, routePath) {
  writeLayout(
    folder,
    "import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';",
    `const schemas = [
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: '${label}', path: '${routePath}' },
  ]),
];`
  );
}

function serviceLayout(folder, routePath, withReview = false) {
  const reviewImport = withReview
    ? "import { corporateReviewSchema } from '@/data/schema/special';\n"
    : '';
  const reviewLine = withReview ? '\n  corporateReviewSchema,' : '';
  writeLayout(
    folder,
    `import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildServiceSchema, SERVICE_PAGE_SCHEMAS, SERVICE_BREADCRUMB_LABELS } from '@/data/schema/services';
${reviewImport}`.trim(),
    `const routePath = '${routePath}';

const schemas = [
  buildServiceSchema(SERVICE_PAGE_SCHEMAS[routePath]),${reviewLine}
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: SERVICE_BREADCRUMB_LABELS[routePath], path: routePath },
  ]),
];`
  );
}

const breadcrumbOnly = [
  ['clients', 'Clients', '/clients'],
  ['certification', 'Certification', '/certification'],
  ['industries-we-serve', 'Industries We Serve', '/industries-we-serve'],
  ['gallery', 'Gallery', '/gallery'],
  ['blog', 'Blog', '/blog'],
  ['case-study', 'Case Studies', '/case-study'],
  ['our-team', 'Our Team', '/our-team'],
  ['our-equipments', 'Our Equipments', '/our-equipments'],
  ['membership', 'Membership', '/membership'],
  ['our-ethics', 'Our Ethics', '/our-ethics'],
  ['privacy-policy', 'Privacy Policy', '/privacy-policy'],
  ['terms-of-service', 'Terms of Service', '/terms-of-service'],
  ['refund-and-cancellation-policy', 'Refund & Cancellation', '/refund-and-cancellation-policy'],
  ['compliance-corner', 'Compliance Corner', '/compliance-corner'],
  ['client-protocol', 'Client Protocol', '/client-protocol'],
  ['technical-glossary', 'Technical Glossary', '/technical-glossary'],
  ['tscm-myths-vs-reality', 'TSCM Myths vs Reality', '/tscm-myths-vs-reality'],
  ['privacy-is-a-right', 'Privacy Is a Right', '/privacy-is-a-right'],
];

for (const [folder, label, route] of breadcrumbOnly) {
  breadcrumbLayout(folder, label, route);
}

const serviceRoutes = [
  'corporate-tscm-service',
  'residential-tscm-service',
  'cyber-tscm-service',
  'tscm-services',
  'counter-surveillance',
  'bug-sweep',
  'eavesdropping-detection',
  'business-bug-sweep',
  'home-bug-sweep',
  'debugging-services',
  'technical-counter-surveillance',
  'warning-signs-of-bugging',
  'tscm-services-in-mumbai',
  'tscm-services-in-delhi',
  'tscm-services-in-bangalore',
  'tscm-services-in-ahmedabad',
  'tscm-services-in-pune',
  'bug-sweeping-services-in-mumbai',
  'bug-sweeping-services-in-delhi',
  'bug-sweeping-services-in-bangalore',
  'bug-sweeping-services-in-ahmedabad',
  'bug-sweeping-services-in-pune',
];

for (const folder of serviceRoutes) {
  serviceLayout(folder, `/${folder}`, folder === 'corporate-tscm-service');
}

writeLayout(
  'faq',
  `import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { faqPageSchema } from '@/data/schema/special';`,
  `const schemas = [
  faqPageSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'FAQ', path: '/faq' },
  ]),
];`
);

writeLayout(
  'about-us',
  `import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { aboutPageSchemaGraph } from '@/data/schema/special';`,
  `const schemas = [
  aboutPageSchemaGraph,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'About Us', path: '/about-us' },
  ]),
];`
);

writeLayout(
  'client-testimonial',
  `import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { corporateReviewSchema } from '@/data/schema/special';`,
  `const schemas = [
  corporateReviewSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Client Testimonials', path: '/client-testimonial' },
  ]),
];`
);

writeLayout(
  'contact-us',
  `import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { contactPageSchema } from '@/data/schema/special';`,
  `const schemas = [
  contactPageSchema,
  buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Contact Us', path: '/contact-us' },
  ]),
];`
);

fs.writeFileSync(
  path.join(appDir, 'media', 'layout.tsx'),
  `import type { Metadata } from 'next';
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
${layoutFooter}`
);

console.log('Done');
