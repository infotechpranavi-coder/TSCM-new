import { blogPosts } from '@/data/blogPosts';
import { caseStudies } from '@/data/caseStudies';
import { pressReleases } from '@/data/pressReleases';

export const SITE_BASE_URL = 'https://www.tscm.in';

export type SitemapLink = {
  href: string;
  label: string;
};

export type SitemapSection = {
  title: string;
  links: SitemapLink[];
};

const link = (path: string, label: string): SitemapLink => ({
  href: path,
  label,
});

export const sitemapSections: SitemapSection[] = [
  {
    title: 'Main',
    links: [
      link('/', 'Home'),
      link('/about-us', 'About Us'),
      link('/our-team', 'Our Team'),
      link('/contact-us', 'Contact Us'),
      link('/clients', 'Clients'),
      link('/faq', 'FAQ'),
    ],
  },
  {
    title: 'TSCM Services',
    links: [
      link('/tscm-services', 'TSCM Services'),
      link('/corporate-tscm-service', 'Corporate TSCM Service'),
      link('/residential-tscm-service', 'Residential TSCM Service'),
      link('/cyber-tscm-service', 'Cyber TSCM Service'),
      link('/counter-surveillance', 'Counter-Surveillance'),
      link('/eavesdropping-detection', 'Eavesdropping Detection'),
      link('/technical-counter-surveillance', 'Technical Counter-Surveillance'),
      link('/warning-signs-of-bugging', 'Warning Signs of Bugging'),
    ],
  },
  {
    title: 'Bug Sweep Services',
    links: [
      link('/bug-sweep', 'Bug Sweep'),
      link('/business-bug-sweep', 'Business Bug Sweep'),
      link('/home-bug-sweep', 'Home Bug Sweep'),
      link('/debugging-services', 'Debugging Services'),
      link('/vehicle-tscm', 'Vehicle TSCM'),
    ],
  },
  {
    title: 'TSCM by City',
    links: [
      link('/tscm-services-in-mumbai', 'TSCM Services Mumbai'),
      link('/tscm-services-in-delhi', 'TSCM Services Delhi'),
      link('/tscm-services-in-bangalore', 'TSCM Services Bangalore'),
      link('/tscm-services-in-ahmedabad', 'TSCM Services Ahmedabad'),
      link('/tscm-services-in-pune', 'TSCM Services Pune'),
    ],
  },
  {
    title: 'Bug Sweep by City',
    links: [
      link('/bug-sweeping-services-in-mumbai', 'Bug Sweeping Mumbai'),
      link('/bug-sweeping-services-in-delhi', 'Bug Sweeping Delhi'),
      link('/bug-sweeping-services-in-bangalore', 'Bug Sweeping Bangalore'),
      link('/bug-sweeping-services-in-ahmedabad', 'Bug Sweeping Ahmedabad'),
      link('/bug-sweeping-services-in-pune', 'Bug Sweeping Pune'),
    ],
  },
  {
    title: 'Company & Trust',
    links: [
      link('/our-ethics', 'Our Ethics'),
      link('/our-equipments', 'Our Equipments'),
      link('/certification', 'Certification'),
      link('/membership', 'Membership'),
      link('/industries-we-serve', 'Industries We Serve'),
      link('/client-testimonial', 'Client Testimonials'),
      link('/compliance-corner', 'Compliance Corner'),
      link('/client-protocol', 'Client Protocol'),
    ],
  },
  {
    title: 'Resources',
    links: [
      link('/blog', 'Blog'),
      link('/case-study', 'Case Studies'),
      link('/technical-glossary', 'Technical Glossary'),
      link('/tscm-myths-vs-reality', 'TSCM Myths vs Reality'),
      link('/privacy-is-a-right', 'Privacy Is a Right'),
      link('/gallery', 'Gallery'),
    ],
  },
  {
    title: 'Media & Publications',
    links: [
      link('/media', 'Media Room'),
      link('/publications', 'Publications'),
      ...pressReleases.map((item) =>
        link(`/media/${item.slug}`, item.headline)
      ),
    ],
  },
  {
    title: 'Blog Articles',
    links: blogPosts.map((post) => link(`/blog/${post.slug}`, post.title)),
  },
  {
    title: 'Case Studies',
    links: caseStudies.map((study) => link(`/case-study/${study.slug}`, study.title)),
  },
  {
    title: 'Legal',
    links: [
      link('/privacy-policy', 'Privacy Policy'),
      link('/terms-of-service', 'Terms of Service'),
      link('/refund-and-cancellation-policy', 'Refund & Cancellation Policy'),
    ],
  },
];

export const sitemapPageCount = sitemapSections.reduce(
  (total, section) => total + section.links.length,
  0
);
