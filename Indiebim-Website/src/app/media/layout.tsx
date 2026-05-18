import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media | Indiebim',
  description:
    'Indiebim media hub — photo gallery, publications, case studies, and blog coverage from TSCM and counter-surveillance operations.',
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
