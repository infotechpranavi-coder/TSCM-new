import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/data/publications';
import { headlineFromPublicationUrl } from '@/lib/publicationTitle';

export const metadata: Metadata = {
  title: 'Publications | IndieBim',
  description:
    'Press mentions and articles featuring IndieBim Technology Solutions — TSCM, counter-surveillance, and corporate security.',
};

const PLACEHOLDER_DESCRIPTION =
  'External article and press mention covering IndieBim TSCM and corporate security services.';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_35%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <section className="relative border-b border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_15%_-15%,rgba(34,211,238,0.14),transparent),radial-gradient(ellipse_55%_45%_at_92%_10%,rgba(99,102,241,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
            <BookOpen className="h-4 w-4 text-cyan-600" />
            Publications
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Press &amp; industry coverage
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Curated links to articles and listings featuring IndieBim. Open any item in a new tab to read the full piece
            on the publisher site.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-cyan-700">
              Home
            </Link>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-cyan-700">Publications</span>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((item, index) => (
            <PublicationCard
              key={item.url}
              index={index}
              url={item.url}
              title={headlineFromPublicationUrl(item.url)}
              description={PLACEHOLDER_DESCRIPTION}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
