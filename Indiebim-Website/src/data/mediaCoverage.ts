export type MediaCoverageItem = {
  id: string;
  publisher: string;
  title: string;
  description: string;
  url: string;
  date?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const featuredPressImage = {
  src: `/HI-28%20(2)_page-0001.jpg`,
  alt: 'Press coverage featuring Wahid Shaikh and Indiebim Technology Solutions',
  caption: 'Print and digital coverage — Indiebim TSCM and security intelligence',
};

export const mediaCoverageItems: MediaCoverageItem[] = [
  {
    id: 'mid-day-2026',
    publisher: 'Mid-Day',
    title:
      'Meet 8 Inspiring Personalities Building Legacy, Authority & Shaping the Future in 2026',
    description:
      'National feature on leaders driving innovation across technology, healthcare, education, media, and business — including recognition of security and intelligence expertise.',
    url: 'https://www.mid-day.com/buzzfeed/article/meet-8-inspiring-personalities-building-legacy-authority-and-shaping-the-future-in-2026-9476',
    date: 'April 2026',
    imageSrc: '/IMG-20260425-WA0040.jpg%20(2).jpeg',
    imageAlt: 'Mid-Day feature — Meet 8 Inspiring Personalities Building Legacy in 2026',
  },
  {
    id: 'samacharwani-wahid-shaikh',
    publisher: 'Samacharwani',
    title: 'Wahid Shaikh: A Trusted Name in Strategic Intelligence and the Security Sector',
    description:
      'Profile of Wahid Shaikh — founder of Indiebim Technology Solutions, H S Detectives, and Orion Intelligence — on TSCM, corporate security, and the Credibility First approach.',
    url: 'https://samacharwani.com/2026/05/13/wahid-shaikh-indiebim-technology-solutions-security-intelligence/',
    date: 'May 2026',
  },
];
