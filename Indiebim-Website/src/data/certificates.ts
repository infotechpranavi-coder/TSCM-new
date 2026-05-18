export type CertificateImage = {
  src: string;
  alt: string;
  title: string;
};

function certificateSrc(filename: string): string {
  return `/certificates/${encodeURIComponent(filename)}`;
}

const certificateFilenames = [
  {
    file: '20220619233645_Wahid_Ali_Shaikh__Certificate_page-0001.jpg',
    title: 'Wahid Ali Shaikh — Professional Certificate',
  },
  {
    file: 'GAP 2206-Wahid Ali Shaikh (1)_page-0001.jpg',
    title: 'GAP 2206 — Wahid Ali Shaikh',
  },
  {
    file: 'Udemy TSCM Certificate.jpg',
    title: 'Udemy TSCM Certificate',
  },
  {
    file: 'WAC India Pledge Certificate_page-0001.jpg',
    title: 'WAC India Pledge Certificate',
  },
  {
    file: 'certificate.jpg',
    title: 'Professional Certification',
  },
  {
    file: 'certificate (1).jpg',
    title: 'Professional Certification',
  },
  {
    file: 'certificate (5).jpg',
    title: 'Professional Certification',
  },
  {
    file: 'certificate (6).jpg',
    title: 'Professional Certification',
  },
] as const;

export const certificateImages: CertificateImage[] = certificateFilenames.map(
  ({ file, title }) => ({
    src: certificateSrc(file),
    alt: title,
    title,
  })
);
