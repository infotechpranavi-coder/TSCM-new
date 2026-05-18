import { SITE_URL } from './site';

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? `${SITE_URL}${item.path}` : SITE_URL,
    })),
  };
}
