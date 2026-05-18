export type SiteRedirect = {
  source: string;
  destination: string;
};

/**
 * Legacy URL → canonical URL (301 Moved Permanently for SEO).
 * Used by next.config.ts via getNextConfigRedirects().
 */
export const legacyRedirects: SiteRedirect[] = [
  // Homepage
  { source: '/home', destination: '/' },
  { source: '/index', destination: '/' },

  // Company pages
  { source: '/about', destination: '/about-us' },
  { source: '/team', destination: '/our-team' },
  { source: '/equipment', destination: '/our-equipments' },
  { source: '/equipments', destination: '/our-equipments' },
  { source: '/myths', destination: '/tscm-myths-vs-reality' },
  { source: '/ethics', destination: '/our-ethics' },
  { source: '/certifications', destination: '/certification' },
  { source: '/memberships', destination: '/membership' },
  { source: '/industries', destination: '/industries-we-serve' },
  {
    source: '/membership-detectives-association',
    destination: '/membership',
  },

  // TSCM services
  { source: '/services', destination: '/tscm-services' },
  { source: '/tscm', destination: '/tscm-services' },
  { source: '/corporate-tscm', destination: '/corporate-tscm-service' },
  { source: '/residential-tscm', destination: '/residential-tscm-service' },
  { source: '/cyber-tscm', destination: '/cyber-tscm-service' },

  // Bug sweep services
  { source: '/bug-sweep-services', destination: '/bug-sweep' },
  { source: '/sweep', destination: '/bug-sweep' },
  { source: '/business-sweep', destination: '/business-bug-sweep' },
  { source: '/home-sweep', destination: '/home-bug-sweep' },
  { source: '/residential-bug-sweep', destination: '/home-bug-sweep' },
  { source: '/debugging', destination: '/debugging-services' },

  // Specialized services
  { source: '/eavesdropping', destination: '/eavesdropping-detection' },
  {
    source: '/counter-surveillance-services',
    destination: '/counter-surveillance',
  },
  { source: '/surveillance', destination: '/counter-surveillance' },

  // Location — TSCM services
  { source: '/tscm-mumbai', destination: '/tscm-services-in-mumbai' },
  { source: '/tscm-delhi', destination: '/tscm-services-in-delhi' },
  { source: '/tscm-bangalore', destination: '/tscm-services-in-bangalore' },
  { source: '/tscm-ahmedabad', destination: '/tscm-services-in-ahmedabad' },
  { source: '/tscm-pune', destination: '/tscm-services-in-pune' },

  // Location — bug sweep services
  {
    source: '/bug-sweep-mumbai',
    destination: '/bug-sweeping-services-in-mumbai',
  },
  { source: '/bug-sweep-pune', destination: '/bug-sweeping-services-in-pune' },
  { source: '/bug-sweep-delhi', destination: '/bug-sweeping-services-in-delhi' },
  {
    source: '/bug-sweep-bangalore',
    destination: '/bug-sweeping-services-in-bangalore',
  },
  {
    source: '/bug-sweep-ahmedabad',
    destination: '/bug-sweeping-services-in-ahmedabad',
  },

  // Content & resources
  { source: '/cases', destination: '/case-study' },
  { source: '/case-studies', destination: '/case-study' },
  { source: '/testimonials', destination: '/client-testimonial' },
  { source: '/reviews', destination: '/client-testimonial' },
  { source: '/clienttestimonial', destination: '/client-testimonial' },
  { source: '/faqs', destination: '/faq' },
  { source: '/contact', destination: '/contact-us' },
  { source: '/get-quote', destination: '/contact-us' },
  { source: '/quote', destination: '/contact-us' },
  { source: '/blogs', destination: '/blog' },
  { source: '/photos', destination: '/gallery' },
  { source: '/press', destination: '/media' },
  { source: '/news', destination: '/media' },
  { source: '/our-clients', destination: '/clients' },
  {
    source: '/case-study-1',
    destination: '/case-study/corporate-espionage-mumbai-financial-hub',
  },
  {
    source: '/case-study-2',
    destination: '/case-study/protecting-intellectual-property-bengaluru',
  },

  // Educational pages
  { source: '/glossary', destination: '/technical-glossary' },
  { source: '/warning-signs', destination: '/warning-signs-of-bugging' },
  { source: '/privacy', destination: '/privacy-is-a-right' },
  { source: '/compliance', destination: '/compliance-corner' },
  { source: '/protocol', destination: '/client-protocol' },
  {
    source: '/technical-surveillance',
    destination: '/technical-counter-surveillance',
  },

  // Legal pages
  { source: '/privacy-policy-page', destination: '/privacy-policy' },
  { source: '/terms', destination: '/terms-of-service' },
  { source: '/terms-and-conditions', destination: '/terms-of-service' },
  { source: '/refund', destination: '/refund-and-cancellation-policy' },
  {
    source: '/cancellation-policy',
    destination: '/refund-and-cancellation-policy',
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
