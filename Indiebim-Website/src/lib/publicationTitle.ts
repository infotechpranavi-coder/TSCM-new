const SMALL_WORDS = new Set(['a', 'an', 'and', 'or', 'for', 'in', 'on', 'at', 'to', 'the', 'of']);

function formatWord(raw: string, index: number): string {
  const lower = raw.toLowerCase();
  if (lower === 'indiebim') return 'IndieBim';
  if (lower === 'tscm') return 'TSCM';
  if (lower === 'mumbais') return "Mumbai's";
  if (index > 0 && SMALL_WORDS.has(lower)) return lower;
  if (!raw) return raw;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function headlineFromPublicationUrl(url: string): string {
  try {
    const { pathname } = new URL(url);
    let path = pathname.replace(/\/+$/, '');
    const idx = path.indexOf('index.php/');
    if (idx !== -1) {
      path = path.slice(idx + 'index.php/'.length);
    }
    const segments = path.split('/').filter(Boolean);
    const slug = segments[segments.length - 1] ?? '';
    const normalized = slug.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!normalized) return 'Publication';

    const words = normalized.split(' ');
    let title = words.map((w, i) => formatWord(w, i)).join(' ');
    title = title.replace(/\bMumbais\b/g, "Mumbai's");
    return title;
  } catch {
    return 'Publication';
  }
}
