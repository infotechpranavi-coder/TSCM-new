export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

function imageSrc(folder: string, filename: string): string {
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
  'WhatsApp Image 2026-05-18 at 1.14.00 PM.jpeg',
  'WhatsApp Image 2026-05-18 at 1.14.18 PM.jpeg',
] as const;

function toGalleryImages(
  folder: string,
  filenames: readonly string[],
  startIndex: number
): GalleryImage[] {
  return filenames.map((filename, index) => {
    const number = startIndex + index + 1;
    return {
      src: imageSrc(folder, filename),
      alt: `TSCM field operation ${number}`,
      title: `Field Operation ${number}`,
    };
  });
}

export const galleryImages: GalleryImage[] = [
  ...toGalleryImages('gallery', galleryFilenames, 0),
  ...toGalleryImages('newgallery', newGalleryFilenames, galleryFilenames.length),
];

const homeGalleryPreviewNumbers = [1, 3, 7, 10, 26] as const;

export const galleryPreviewImages: GalleryImage[] = homeGalleryPreviewNumbers.map(
  (number) => galleryImages[number - 1]
);

/** Gallery indices used on /industries-we-serve (ops 1, 3, 7, 10, 26, 31). */
export const industriesGalleryImageIndices = [0, 2, 6, 9, 25, 30] as const;

export const industriesGalleryImages: GalleryImage[] = industriesGalleryImageIndices.map(
  (index) => galleryImages[index]
);
