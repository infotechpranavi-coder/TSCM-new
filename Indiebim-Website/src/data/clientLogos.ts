/** Local logo files under public/clients/logos/ (slug = domain with dots → dashes). */
export const LOCAL_CLIENT_LOGO_EXT: Record<string, 'png' | 'jpg'> = {
  'actionshoes-com': 'png',
  'aeoncredit-com-my': 'png',
  'amitek-in': 'png',
  'arcelormittal-com': 'png',
  'axisbank-com': 'png',
  'chamundaindustries-com': 'png',
  'coronaremedies-com': 'png',
  'deloitte-com': 'png',
  'dermax-com': 'png',
  'disney-com': 'png',
  'examplad-com': 'jpg',
  'hiranandani-com': 'png',
  'hotstar-com': 'png',
  'hytengineering-com': 'png',
  'ibi-group-com': 'png',
  'icicibank-com': 'png',
  'iirisconsulting-com': 'png',
  'indialawoffice-com': 'jpg',
  'infra-market': 'png',
  'jai-kisan-com': 'png',
  'jkumar-com': 'png',
  'jsw-in': 'png',
  'kailashparbat-co-in': 'png',
  'kellerwilliamsdubai-com': 'png',
  'kotak-com': 'png',
  'larsentoubro-com': 'png',
  'mariadecor-com': 'png',
  'marutisuzuki-com': 'png',
  'orion-com': 'png',
  'qlife-com': 'png',
  'quantumleap-in': 'png',
  'rblbank-com': 'png',
  'regenthotels-com': 'png',
  'saint-gobain-com': 'png',
  'shankarmultimedia-com': 'png',
  'successgyan-com': 'png',
  'thirdbridge-com': 'png',
  'tvsmotor-com': 'png',
  'upl-ltd-com': 'png',
  'urbanmoney-com': 'png',
  'wwt-com': 'png',
  'yesbank-in': 'png',
  'zenpharma-com': 'png',
};

export const CLIENT_PLACEHOLDER_LOGO = '/clients/logos/placeholder-building.png';

/** Clients without a brand logo file use the shared building icon. */
export const PLACEHOLDER_LOGO_DOMAINS = new Set([
  'avantgroup.co.in',
  'indexlogistics.in',
]);

export function domainToLogoSlug(domain: string): string {
  return domain.replace(/\./g, '-');
}

export function getLocalClientLogo(domain: string): string | null {
  if (PLACEHOLDER_LOGO_DOMAINS.has(domain)) {
    return CLIENT_PLACEHOLDER_LOGO;
  }

  const slug = domainToLogoSlug(domain);
  const ext = LOCAL_CLIENT_LOGO_EXT[slug];
  if (!ext) return null;
  return `/clients/logos/${slug}.${ext}`;
}

export const homepageClientDomains: Record<string, string> = {
  'L&T': 'larsentoubro.com',
  'Axis Bank': 'axisbank.com',
  'Kailash Parbat': 'kailashparbat.co.in',
  'Yes Bank': 'yesbank.in',
  'Saint-Gobain': 'saint-gobain.com',
  'Urban Money': 'urbanmoney.com',
};
