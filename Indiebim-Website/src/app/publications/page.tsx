import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Mouse } from 'lucide-react';
import PublicationCard from '@/components/PublicationCard';
import PressReleaseDistributionSection from '@/components/PressReleaseDistributionSection';
import { publications } from '@/data/publications';
import {
  PRESS_RELEASE_AUDIENCE_REACH,
  PRESS_RELEASE_REPORT_TITLE,
  PRESS_RELEASE_TOTAL_PLACEMENTS,
  pressReleasePlacements,
} from '@/data/pressReleaseDistribution';

export const metadata: Metadata = {
  title: 'Publications | Indiebim',
  description:
    'Press mentions and articles featuring Indiebim Technology Solutions - TSCM, counter-surveillance, and corporate security.',
};

const PLACEHOLDER_DESCRIPTION =
  'External article and press mention covering Indiebim TSCM and corporate security services.';

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
            Press release syndication with publication logos, plus curated article links. Open any item in a new tab to
            read the full piece on the publisher site.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <Mouse className="h-4 w-4 text-cyan-600" />
            Scroll inside the publication panel to browse more articles.
          </div>
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
        <PressReleaseDistributionSection
          reportTitle={PRESS_RELEASE_REPORT_TITLE}
          totalPlacements={PRESS_RELEASE_TOTAL_PLACEMENTS}
          audienceReach={PRESS_RELEASE_AUDIENCE_REACH}
          placements={pressReleasePlacements}
        />

        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-6 py-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Media showcase</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Featured publications</h2>
            </div>
            <div className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
              {publications.length} articles
            </div>
          </div>

          <div className="publication-scroll max-h-[39rem] overflow-y-auto px-6 py-6 lg:max-h-[40rem]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publications.map((item, index) => (
                <PublicationCard
                  key={item.url}
                  index={index}
                  url={item.url}
                  publisher={item.publisher}
                  title={item.title}
                  description={PLACEHOLDER_DESCRIPTION}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
