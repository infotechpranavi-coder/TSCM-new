'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const industryCount = new Set(caseStudies.map((study) => study.industry)).size;
  const cardImages = ['/images/tscm.jpg', '/images/bug.jpg', '/images/support.jpg', '/images/why-us.jpeg'];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 pt-24 sm:pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,440px)]"
          >
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
                <ShieldCheck className="w-4 h-4" />
                Real-World Investigations
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Counter-Surveillance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">
                  Case Studies
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Explore real-world TSCM, bug sweeping, and espionage response operations across finance,
                law, infrastructure, advanced R&D, executive residences, hospitality, and critical
                national assets.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {[
                  { label: 'Case Studies', value: `${caseStudies.length}`, icon: ShieldCheck },
                  { label: 'Industries Covered', value: `${industryCount}`, icon: Briefcase },
                  { label: 'High-Risk Locations', value: 'Nationwide', icon: MapPin },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <item.icon className="w-5 h-5 text-cyan-300" />
                    <p className="mt-4 text-sm font-medium text-slate-400">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/banner-2-5-1.jpg"
                    alt="Counter surveillance investigation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 440px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Security Intelligence
                    </p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                      Nationwide TSCM operations with clear investigative storytelling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cyan-700">
                <Sparkles className="w-4 h-4" />
                Investigation Library
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Structured for fast scanning
              </h2>
            </div>
            <p className="max-w-2xl text-slate-600 leading-7">
              Each case highlights the operating environment, threat pattern, investigative method,
              and hardening outcome so visitors can quickly understand the scope of work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.32) }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_16px_48px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(14,116,144,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />

                <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-[18px]">
                  <Image
                    src={cardImages[index % cardImages.length]}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Study {study.id}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="max-w-full truncate rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {study.industry}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                  {study.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{study.summary}</p>

                <div className="mt-4 grid gap-2">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Service
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-5 text-slate-700">{study.service}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Location
                    </p>
                    <p className="mt-1.5 inline-flex items-start gap-2 text-sm font-medium leading-5 text-slate-700">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                      <span className="line-clamp-2">{study.location}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="line-clamp-1 text-xs leading-5 text-slate-500">{study.subjectMatterExpert}</p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Read More</p>
                    <p className="mt-0.5 text-xs text-slate-500">Open full case</p>
                  </div>
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan-700 hover:shadow-[0_12px_30px_rgba(8,145,178,0.28)]"
                  >
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
