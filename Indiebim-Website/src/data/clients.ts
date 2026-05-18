import clientsData from './clients.json';
import {
  getLocalClientLogo,
  homepageClientDomains,
} from './clientLogos';

export type ClientBrand = {
  name: string;
  website: string;
  logo: string;
  domain?: string;
};

export type LogoFallbacks = {
  clearbit: string;
  googleFavicon: string;
};

function resolveClientLogo(client: { domain?: string; logo: string }): string {
  if (client.domain) {
    const localLogo = getLocalClientLogo(client.domain);
    if (localLogo) return localLogo;
  }
  return client.logo;
}

function enrichClient<T extends ClientBrand>(
  client: T,
  domain?: string
): ClientBrand {
  const resolvedDomain = domain ?? client.domain;
  const withDomain = { ...client, domain: resolvedDomain };
  return {
    ...withDomain,
    logo: resolveClientLogo(withDomain),
  };
}

export const homepageCarouselClients: ClientBrand[] = clientsData.homepageCarousel.map(
  (client) => enrichClient(client, homepageClientDomains[client.name])
);

const CLIENTS_PAGE_EXCLUDED = new Set(['Indiebim']);

export const clients: ClientBrand[] = clientsData.clients
  .filter((client) => !CLIENTS_PAGE_EXCLUDED.has(client.name))
  .map((client) => enrichClient(client));

export const logoFallbacks: LogoFallbacks = clientsData.logoFallbacks;

/** @deprecated Use `clients` for full brand data. */
export const CLIENTS = clients.map((client) => client.name) as readonly string[];

export function getClearbitLogo(domain: string): string {
  return logoFallbacks.clearbit.replace('{domain}', domain);
}

export function getGoogleFaviconLogo(domain: string): string {
  return logoFallbacks.googleFavicon.replace('{domain}', domain);
}
