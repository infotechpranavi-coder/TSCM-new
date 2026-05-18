export type SiteRedirect = {
  source: string;
  destination: string;
};

/** Legacy URL → canonical URL (301 Moved Permanently for SEO). */
export const legacyRedirects: SiteRedirect[] = [
  {
    source: '/membership-detectives-association',
    destination: '/membership',
  },
  {
    source: '/clienttestimonial',
    destination: '/client-testimonial',
  },
  {
    source: '/case-study-1',
    destination: '/case-study/corporate-espionage-mumbai-financial-hub',
  },
  {
    source: '/case-study-2',
    destination: '/case-study/protecting-intellectual-property-bengaluru',
  },
];

export function getNextConfigRedirects() {
  const rules = legacyRedirects.map(({ source, destination }) => ({
    source,
    destination,
    statusCode: 301 as const,
  }));

  for (const { source, destination } of legacyRedirects) {
    rules.push({
      source: `${source}/`,
      destination,
      statusCode: 301,
    });
  }

  rules.push({
    source: '/:path+/',
    destination: '/:path+',
    statusCode: 301,
  });

  return rules;
}
