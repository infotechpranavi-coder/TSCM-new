import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileCode2, Map } from 'lucide-react';
import { SITE_BASE_URL, sitemapPageCount, sitemapSections } from '@/data/siteSitemap';

export const metadata: Metadata = {
  title: 'Sitemap | Indiebim TSCM',
  description:
    'Complete HTML sitemap of Indiebim TSCM — all services, city pages, blog articles, case studies, media archives, and legal pages on tscm.in.',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_35%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-[0.4] bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[72px_72px]" />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
            <Map className="h-4 w-4 text-cyan-600" />
            Sitemap
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Site map
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Browse every page on {SITE_BASE_URL.replace('https://', '')} — {sitemapPageCount} indexed
            URLs for services, resources, media, and legal information.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-800"
            >
              <FileCode2 className="h-4 w-4 text-cyan-600" />
              XML sitemap (search engines)
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Back to home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-cyan-700">
              Home
            </Link>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-cyan-700">Sitemap</span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sitemapSections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm leading-snug text-slate-600 transition-colors hover:text-cyan-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
