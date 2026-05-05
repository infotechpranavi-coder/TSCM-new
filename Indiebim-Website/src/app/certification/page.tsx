'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck, CheckCircle2, ClipboardCheck, Globe2, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Professional Standards',
    description: 'Our work is guided by documented operating procedures, structured reporting, and consistent quality benchmarks across assignments.',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: 'Ethics & Confidentiality',
    description: 'Every engagement is handled with discretion, privacy-first practices, and strict attention to ethical investigative conduct.',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: 'Operational Readiness',
    description: 'Field processes, evidence handling, and client communication follow a disciplined workflow designed for reliability and trust.',
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
];

const highlights = [
  'Quality-focused investigative process',
  'Confidential client handling standards',
  'Professional reporting and documentation',
  'Responsive support for sensitive cases',
];

export default function CertificationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[520px] w-full bg-gradient-to-b from-cyan-100/60 via-white to-transparent" />
        <div className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[340px] w-[340px] rounded-full bg-amber-400/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-18 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700"
          >
            <Award className="h-4 w-4" />
            Certification
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-4xl font-black leading-tight text-slate-900 md:text-6xl"
          >
            Certification &
            <span className="block bg-gradient-to-r from-cyan-700 via-sky-600 to-amber-500 bg-clip-text text-transparent">
              Professional Assurance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            This page highlights the professional principles, quality expectations, and operating standards that support our investigative and counter-surveillance services.
          </motion.p>
        </div>

        <div className="mb-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Why certification matters</h2>
                <p className="text-sm text-slate-500">Built for trust, consistency, and accountability</p>
              </div>
            </div>
            <p className="mb-6 text-slate-600 leading-relaxed">
              In privacy-sensitive work, clients need more than claims. A strong certification-focused presentation helps communicate discipline, credibility, and commitment to recognized standards in process, ethics, and client delivery.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950 p-8 text-white shadow-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Core Promise</p>
            <h2 className="mb-4 text-3xl font-bold">Professional quality backed by disciplined execution</h2>
            <p className="mb-8 leading-relaxed text-slate-300">
              Our certification page is designed to reinforce confidence for clients evaluating service credibility, process maturity, and operational professionalism.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-sm font-semibold text-white">Documentation</div>
                <div className="mt-1 text-sm text-slate-300">Clear reporting, structured findings, and dependable communication.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-sm font-semibold text-white">Integrity</div>
                <div className="mt-1 text-sm text-slate-300">Ethical conduct and confidentiality-centered case handling.</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
