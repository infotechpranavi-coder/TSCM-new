/** Google Analytics 4 measurement ID — loaded on every page via root layout. */
export const GA_MEASUREMENT_ID = 'G-N89NS5XSZF';

export function pageview(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}
