import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, ChevronRight, ShieldCheck, Sparkles, User2 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const keywordTags = post.keywords.split(',').map((keyword) => keyword.trim());
  const readingTime = Math.max(
    3,
    Math.ceil(post.paragraphs.join(' ').split(/\s+/).filter(Boolean).length / 180)
  );

  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-cyan-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-cyan-700 font-semibold">{post.title}</span>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="rounded-[24px] border border-white/70 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur">
            <div className="px-7 py-8 md:px-12 md:py-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800">
                <ShieldCheck className="h-4 w-4" />
                Indiebim Security Brief
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <User2 className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <Sparkles className="h-4 w-4" />
                  {readingTime} min read
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] text-slate-950 md:text-6xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {post.paragraphs[0]}
              </p>

              <div className="mt-10 rounded-[20px] border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Focus Areas
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {keywordTags.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 space-y-7">
                {post.paragraphs.slice(1).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`max-w-3xl text-[17px] leading-8 text-slate-700 ${
                      index === 0 ? 'border-l-2 border-cyan-500 pl-5 text-slate-800' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-200 pt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
                >
                  Contact Indiebim for a confidential consultation
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300 hover:text-cyan-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all blogs
                </Link>
              </div>
            </div>
          </article>

          <aside className="h-fit rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Article Snapshot
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-[18px] border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">Published</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{post.date}</p>
              </div>

              <div className="rounded-[18px] border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">Author</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{post.author}</p>
              </div>

              <div className="rounded-[18px] border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">Reading Time</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{readingTime} minutes</p>
              </div>
            </div>

            <div className="mt-6 rounded-[20px] border border-cyan-100 bg-cyan-50/70 p-5">
              <p className="text-sm font-semibold text-slate-900">Need a private consultation?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Indiebim handles sensitive corporate, residential, and executive sweeps with discretion.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition-colors hover:bg-slate-900 hover:text-white"
              >
                Talk to the team
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
