'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BarChart3, ExternalLink, Megaphone, Radio } from 'lucide-react';
import type { PressPlacement } from '@/data/pressReleaseDistribution';

function PlacementCard({ placement }: { placement: PressPlacement }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <a
      href={placement.view_release_link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
    >
      <div className="relative mx-auto flex h-14 w-full max-w-[9rem] items-center justify-center">
        {!logoFailed ? (
          <Image
            src={`/publication_logos/${placement.logo_file}`}
            alt=""
            fill
            className="object-contain object-center"
            sizes="144px"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="rounded-md border border-dashed border-slate-200 bg-slate-50 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Logo
          </span>
        )}
      </div>
      <p className="mt-2 line-clamp-2 min-h-[2.25rem] text-center text-[11px] font-semibold leading-snug text-slate-800">
        {placement.publication}
      </p>
      <span className="mt-auto inline-flex items-center justify-center gap-1 pt-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-700">
        View release
        <ExternalLink className="h-3 w-3 opacity-80" aria-hidden />
      </span>
    </a>
  );
}

type PressReleaseDistributionSectionProps = {
  reportTitle: string;
  totalPlacements: number;
  audienceReach: string;
  placements: PressPlacement[];
};

export default function PressReleaseDistributionSection({
  reportTitle,
  totalPlacements,
  audienceReach,
  placements,
}: PressReleaseDistributionSectionProps) {
  return (
    <div className="mb-16 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Press release distribution</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{reportTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              One syndicated story across digital placements nationwide. Each tile opens the live article on the
              publisher site; the publication logo appears when the matching file is present under{' '}
              <span className="font-mono text-xs text-slate-500">public/publication_logos</span>.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
            <div className="flex items-center gap-2 rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3">
              <Megaphone className="h-5 w-5 text-cyan-700" />
              <div>
                <p className="text-lg font-black text-slate-950">{totalPlacements}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-800">Placements</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Radio className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-lg font-black text-slate-950">{audienceReach}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Est. reach</p>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:col-span-1">
              <BarChart3 className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm font-bold text-slate-800">Syndicated campaign</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="publication-scroll max-h-[42rem] overflow-y-auto px-4 py-6 sm:px-6 lg:max-h-[44rem]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {placements.map((p) => (
            <PlacementCard key={p.id} placement={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
