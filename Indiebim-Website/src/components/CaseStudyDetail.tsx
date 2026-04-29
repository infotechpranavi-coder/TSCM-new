'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  MapPin,
  ShieldCheck,
  User,
} from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

type CaseStudyDetailProps = {
  study: CaseStudy;
  previousStudy?: CaseStudy;
  nextStudy?: CaseStudy;
};

export default function CaseStudyDetail({
  study,
  previousStudy,
  nextStudy,
}: CaseStudyDetailProps) {
  const overviewItems = [
    { label: 'Service', value: study.service, icon: Briefcase },
    { label: 'Location', value: study.location, icon: MapPin },
    { label: 'Industry', value: study.industry, icon: Building2 },
    { label: 'Subject Matter Expert', value: study.subjectMatterExpert, icon: User },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_22%,#eff6ff_22%,#f8fafc_100%)]">
      <section className="relative overflow-hidden border-b border-white/10 pt-24 sm:pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/case-study"
              className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
              <ShieldCheck className="w-4 h-4" />
              Case Study {study.id}
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{study.summary}</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {overviewItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                >
                  <item.icon className="w-5 h-5 text-cyan-600" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                    Service Provider
                  </p>
                  <p className="mt-1 text-base font-medium text-slate-700">{study.serviceProvider}</p>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                {study.sections.map((section, index) => (
                  <section key={section.heading} className="relative rounded-3xl bg-slate-50 p-6 sm:p-7">
                    <div className="absolute bottom-6 left-0 top-6 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-sky-600" />
                    <div className="pl-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-cyan-700 shadow-sm">
                          {index + 1}
                        </span>
                        <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
                      </div>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-4 text-slate-600 leading-8">
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets && (
                        <ul className="mt-5 grid gap-3">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 rounded-2xl bg-white px-4 py-3 text-slate-600 shadow-sm"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                              <span className="leading-7">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))}

                {study.appendix && study.appendix.length > 0 && (
                  <section className="rounded-3xl border border-cyan-100 bg-cyan-50/70 p-6 sm:p-7">
                    <h2 className="text-2xl font-semibold text-slate-900">Technical Appendix</h2>
                    <ul className="mt-5 grid gap-3">
                      {study.appendix.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl bg-white/90 px-4 py-3 text-slate-600 shadow-sm"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                          <span className="leading-7">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="bg-slate-900 px-6 py-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                  Reading Snapshot
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight">{study.title}</p>
              </div>
              <div className="space-y-5 px-6 py-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Location</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Industry</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.industry}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Service</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.service}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Subject Matter Expert
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.subjectMatterExpert}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Sections</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{study.sections.length}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Clear threat, action, findings, and outcome flow.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {previousStudy ? (
            <Link
              href={`/case-study/${previousStudy.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {previousStudy.title}
            </Link>
          ) : (
            <div />
          )}

          {nextStudy ? (
            <Link
              href={`/case-study/${nextStudy.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition-colors sm:ml-auto"
            >
              {nextStudy.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
