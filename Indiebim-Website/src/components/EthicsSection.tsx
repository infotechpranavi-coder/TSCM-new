'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { ethicsCommitments, ethicsPrinciples, ethicsSections } from '@/data/ethicsSections';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

type EthicsSectionProps = {
  className?: string;
};

export default function EthicsSection({ className = '' }: EthicsSectionProps) {
  return (
    <section className={`border-t border-slate-200 bg-slate-50 py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Our Ethics</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            The national standard for technical security in India.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At IndieBim Technology Solutions Private Limited, our mission is to provide a shield of privacy across
            the Indian subcontinent. We do not just clear rooms. We protect the intellectual property and confidential
            conversations that drive India&apos;s economy.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            From the corporate boardrooms of Gurgaon to the tech corridors of Bengaluru and the financial heart of
            Mumbai, our ethical standards remain unwavering.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {ethicsPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Principle
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-950">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{principle.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Ethics Promise
            </div>
            <h3 className="mt-4 text-2xl font-black leading-tight">How we hold ourselves accountable on every assignment.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our standards are not marketing statements. They guide how we assess threats, handle findings, protect
              sensitive information, and advise clients under pressure.
            </p>

            <div className="mt-6 space-y-3">
              {ethicsCommitments.slice(0, 3).map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute right-0 top-32 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
          </div>

          <div className="relative grid gap-5 md:grid-cols-2">
            {ethicsSections.map((section, index) => (
              <motion.div
                key={section.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200/90 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
              >
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <motion.div
                          animate={{ opacity: [0.45, 0.95, 0.45], scale: [0.96, 1.08, 0.96] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
                          className="absolute inset-0 rounded-2xl bg-cyan-300/35 blur-md"
                        />
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                          <span className="text-sm font-black">0{index + 1}</span>
                        </div>
                      </div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                        Ethics Pillar
                      </p>
                    </div>

                    <div className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:flex">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                      Verified Standard
                    </div>
                  </div>

                  <h3 className="mt-5 max-w-[20rem] text-2xl font-black leading-tight text-slate-950">
                    {section.title}
                  </h3>

                  <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-300 via-cyan-200 to-transparent" />

                  <div className="mt-6 space-y-4">
                    {section.points.map((point, pointIndex) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0.7, x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.18, delay: pointIndex * 0.02 }}
                        className="flex gap-3 rounded-[18px] border border-slate-100 bg-slate-50/80 px-4 py-3"
                      >
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                        <p className="text-sm leading-7 text-slate-600">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.18 }}
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Operational Commitments</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
              What clients can expect from our conduct and communication.
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ethicsCommitments.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="flex gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50 px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          whileHover={{ y: -4 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <p className="text-sm leading-8 text-slate-300 sm:text-base">
            From the Himalayas to the Indian Ocean, IndieBim is committed to securing the conversations that shape
            India&apos;s future. Our ethics are as robust as our technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
