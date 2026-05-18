import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, CalendarDays, ExternalLink, Megaphone, Newspaper } from 'lucide-react';
import { pressReleases, getPressReleaseBySlug } from '@/data/pressReleases';
import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildPressReleaseArticleSchema } from '@/data/schema/special';

type PressReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pressReleases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PressReleasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);
  if (!release) return { title: 'Press Release | Indiebim' };

  return {
    title: `${release.headline} | Indiebim Media`,
    description: release.description,
  };
}

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);

  if (!release) {
    notFound();
  }

  const articleSchema = buildPressReleaseArticleSchema({
    slug: release.slug,
    schemaType: release.schemaType,
    headline: release.headline,
    description: release.description,
    image: release.image,
    datePublished: release.datePublished,
    dateModified: release.dateModified,
    authorType: release.author.type,
    authorName: release.author.name,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Media', path: '/media' },
    { name: release.headline, path: `/media/${release.slug}` },
  ]);

  const isAnnouncement = release.category === 'announcement';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_35%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Media
          </Link>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
            {isAnnouncement ? (
              <Megaphone className="h-4 w-4 text-cyan-600" />
            ) : (
              <Newspaper className="h-4 w-4 text-cyan-600" />
            )}
            {isAnnouncement ? 'Corporate announcement' : 'Press coverage archive'}
          </div>

          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {release.headline}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">{release.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-cyan-600" />
              {release.datePublished}
            </span>
            <span className="font-medium text-slate-700">{release.author.name}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              {release.schemaType}
            </span>
          </div>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
            <Image
              src={release.image}
              alt={release.headline}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {release.syndicationNote ? (
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50/80 px-5 py-4 text-sm leading-7 text-cyan-900">
              {release.syndicationNote}
            </p>
          ) : null}

          <article className="prose prose-slate mt-10 max-w-none">
            {release.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-5 text-base leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </article>

          {release.externalUrl ? (
            <a
              href={release.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-6 py-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-400 hover:bg-cyan-100"
            >
              Read full article on publisher site
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}

          <div className="mt-14 border-t border-slate-200 pt-8">
            <Link
              href="/publications"
              className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
            >
              View all publications & syndication →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
