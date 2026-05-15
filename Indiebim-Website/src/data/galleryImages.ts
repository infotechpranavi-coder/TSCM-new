export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

function gallerySrc(folder: 'gallery' | 'new', filename: string): string {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

const galleryFilenames = [
  'WhatsApp Image 2026-05-12 at 5.33.56 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.34.27 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.37.02 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.37.02 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.37.03 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.12 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.13 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.13 PM (2).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.13 PM (3).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.13 PM (4).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.13 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.14 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.14 PM (2).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.14 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.15 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.15 PM (2).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.15 PM (3).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.15 PM (4).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.15 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.16 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.16 PM (2).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.16 PM (3).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.16 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.17 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.42.17 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.48.04 PM.jpeg',
  'WhatsApp Image 2026-05-12 at 5.48.05 PM (1).jpeg',
  'WhatsApp Image 2026-05-12 at 5.48.05 PM (2).jpeg',
  'WhatsApp Image 2026-05-12 at 5.48.05 PM (3).jpeg',
  'WhatsApp Image 2026-05-12 at 5.48.05 PM.jpeg',
] as const;

const newGalleryFilenames = [
  'IMG_0503 (1).jpg',
  'IMG_0503.jpg',
  'IMG_0515.jpg',
  'IMG_0516.jpg',
  'IMG_0518.jpg',
  'IMG_0519.jpg',
] as const;

const galleryEntries = [
  ...galleryFilenames.map((filename) => ({ folder: 'gallery' as const, filename })),
  ...newGalleryFilenames.map((filename) => ({ folder: 'new' as const, filename })),
];

export const galleryImages: GalleryImage[] = galleryEntries.map(({ folder, filename }, index) => ({
  src: gallerySrc(folder, filename),
  alt: `TSCM field operation ${index + 1}`,
  title: `Field Operation ${index + 1}`,
}));

export const galleryPreviewImages = galleryImages.slice(0, 5);
