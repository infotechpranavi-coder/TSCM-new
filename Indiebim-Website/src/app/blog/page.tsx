'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronRight, ShieldCheck, Sparkles, User2 } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const roadmapPosts = [
  'How Hidden Cameras Are Commonly Concealed in Hotels and Short-Stay Apartments',
  'Why Boardrooms Need Regular TSCM Sweeps Before High-Value Meetings',
  'Vehicle Bug Sweeping and GPS Tracker Detection for Executives and Families',
  'How to Prepare Your Office for a Professional Bug Sweep Inspection',
  'Top Signs Your Workplace May Be Under Electronic Surveillance',
  'The Difference Between Basic Debugging and Full TSCM Services',
  'Why Law Firms and Litigation Teams Need Secure Meeting Environments',
  'Protecting Startups During Fundraising, Product Launches, and Due Diligence',
  'How Wi-Fi and GSM Surveillance Devices Evade Casual Detection',
  'Residential Privacy Risks During Renovation and Interior Contractor Access',
  'The Role of NLJD Technology in Discovering Dormant Surveillance Devices',
  'How to Build a Secure Room for Confidential Discussions',
  'What to Do If You Suspect Hidden Audio Recording at Home or Work',
  'Counter-Surveillance for Celebrities, Public Figures, and Family Offices',
  'Why Pharmaceutical and R&D Teams Are Prime Targets for Corporate Espionage',
  'How Frequent Travelers Can Reduce Hotel and Vehicle Surveillance Risks',
  'When to Schedule Routine TSCM Audits for Corporate and Residential Security',
];

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_46%,#f7fafc_100%)] pt-32 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_56%)]" />
        <div className="absolute right-[-10%] top-[220px] h-[340px] w-[340px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute left-[-8%] top-[520px] h-[300px] w-[300px] rounded-full bg-sky-200/30 blur-[120px]" />
        <div className="absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:88px_88px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-800 shadow-sm backdrop-blur">
              <ShieldCheck className="w-4 h-4" />
              Indiebim Blog
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-6xl">
              Catchy security reads for privacy, surveillance, and executive protection.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A sharper editorial experience built for decision-makers who want clear threat insight, modern privacy
              context, and articles worth opening all the way through.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <Link href="/" className="transition-colors hover:text-cyan-600">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold text-cyan-700">Blog</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Editorial Snapshot</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
                <p className="text-3xl font-black">{blogPosts.length}</p>
                <p className="mt-1 text-sm text-slate-300">Published posts</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-3xl font-black text-slate-950">17</p>
                <p className="mt-1 text-sm text-slate-500">Planned topics</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50/80 p-4">
              <p className="text-sm font-semibold text-slate-900">What you will find here</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Surveillance trends, TSCM explainers, privacy risk awareness, and industry-focused threat framing.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14"
        >
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-[30px] border border-white/70 bg-white/90 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative overflow-hidden px-7 py-8 md:px-10 md:py-10">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%)]" />
              <div className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                Featured Article
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  <CalendarDays className="h-4 w-4 text-cyan-600" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  <User2 className="h-4 w-4 text-cyan-600" />
                  {featuredPost.author}
                </span>
              </div>

              <h2 className="relative mt-6 max-w-3xl text-3xl font-black leading-tight text-slate-950 transition-colors group-hover:text-cyan-800 md:text-5xl">
                {featuredPost.title}
              </h2>

              <p className="relative mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {featuredPost.paragraphs[0]}
              </p>

              <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-cyan-700">
                Read full article
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="flex min-h-[260px] flex-col justify-between border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eefbff_100%)] px-7 py-8 md:px-10 lg:min-h-full lg:border-l lg:border-t-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Focus Areas
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredPost.keywords.split(',').map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[22px] border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Why this stands out</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Practical context, stronger threat framing, and an easier path from headline interest to full reading.
                </p>
              </div>
            </div>
          </Link>
        </motion.section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Latest Articles
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">More from the blog</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              A quieter, cleaner set of reads for surveillance awareness, privacy planning, and security-led decision making.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.05 }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-28" />
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                    <CalendarDays className="w-4 h-4 text-cyan-600" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                    <User2 className="w-4 h-4 text-cyan-600" />
                    {post.author}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black leading-tight text-slate-950 transition-colors group-hover:text-cyan-800">
                  {post.title}
                </h2>
                <p className="mt-4 line-clamp-4 text-slate-600 leading-7">
                  {post.paragraphs[0]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.keywords
                    .split(',')
                    .slice(0, 2)
                    .map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {keyword.trim()}
                      </span>
                    ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-cyan-700"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-20 rounded-[30px] border border-white/70 bg-white/90 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Content Roadmap
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">What comes next</h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-8">
            The next 17 blog topics below keep the publishing schedule moving while staying aligned with Indiebim&apos;s SEO targets and service positioning.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {roadmapPosts.map((title, index) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-[18px] border border-slate-100 bg-slate-50/80 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-cyan-700 ring-1 ring-slate-200">
                  {index + 1}
                </span>
                <p className="text-slate-700 leading-7">{title}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
