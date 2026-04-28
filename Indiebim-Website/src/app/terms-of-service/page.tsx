'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, FileText, Scale, ShieldCheck } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Scope of Services',
    paragraphs: [
      'IndieBim provides specialized Technical Surveillance Counter Measures, Bug Sweeping, and Cyber Security Audits.',
      'Our services are strictly defensive. We do not provide illegal wiretapping, active spying, or hacker-for-hire services.',
      'While our experts, including USA and Israel-trained specialists, use military-grade equipment, the client acknowledges that TSCM is a point-in-time assessment. Security can be compromised after our team leaves if new threats are introduced.',
    ],
  },
  {
    number: '02',
    title: 'Client Representations and Warranties',
    paragraphs: [
      'By engaging IndieBim Technology Solutions Private Limited, the client warrants that they have the legal authority or ownership of the premises and devices being swept, whether in Mumbai, Pune, Delhi NCR, or elsewhere in India.',
      'The client further warrants that the service is not being sought to obstruct any ongoing legal investigation by Indian law enforcement agencies, including the Crime Branch or CBI.',
      'The client agrees to provide our team with safe and unhindered access to the target area at the scheduled time.',
    ],
  },
  {
    number: '03',
    title: 'Confidentiality and Non-Disclosure',
    paragraphs: [
      'Both parties agree to keep all aspects of the engagement confidential. This includes IndieBim proprietary search and detection methodologies and the client’s sensitive security findings.',
      'The client shall not disclose the identities or technical tactics of our specialists, including cyber security experts and ex-law enforcement consultants, to any third party without written consent.',
    ],
  },
  {
    number: '04',
    title: 'Professional Fees and Deployment',
    paragraphs: [
      'For projects outside the Mumbai Metropolitan Region, including Bangalore, Hyderabad, or Chennai, additional mobilization and specialized equipment transport charges may apply.',
      'A standard mobilization advance is required to secure the deployment of our technical teams.',
      'Due to the specialized nature of equipment calibration and expert scheduling, cancellations within 24 hours of a scheduled sweep may incur a service fee.',
    ],
  },
  {
    number: '05',
    title: 'Limitation of Liability',
    paragraphs: [
      'IndieBim uses international-standard equipment such as NLJD systems and spectrum analyzers, but we are not liable for security breaches occurring after a clearance certificate has been issued.',
      'We are not responsible for pre-existing damage to hardware or infrastructure discovered during inspection of cables, wall plates, furniture, or related fixtures.',
    ],
  },
  {
    number: '06',
    title: 'Legal Compliance and Governing Law',
    paragraphs: [
      'These terms are governed by the laws of the Republic of India and the Information Technology Act, 2000.',
      'Any disputes arising from services provided by IndieBim shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
    ],
  },
  {
    number: '07',
    title: 'Reporting and Evidence',
    paragraphs: [
      'Upon completion, IndieBim provides a Technical Vulnerability Report.',
      'If illegal devices are found, IndieBim will follow standard evidence-handling protocols. However, the decision to report findings to the police remains the client’s responsibility unless otherwise mandated by Indian law.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f7fafc] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.82], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_24%)]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div className="max-w-3xl pt-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800"
            >
              <FileText className="h-4 w-4" />
              Terms and Conditions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Terms governing professional TSCM and debugging engagements across India.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              These terms and conditions define the professional relationship between IndieBim Technology Solutions
              Private Limited and clients engaging our services through `tscm.in`.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Effective Date: March 2026
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Pan-India service framework
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-8 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-cyan-700">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-cyan-700">Terms & Conditions</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="grid gap-4 self-start"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Service Use</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Defensive-only service model with confidentiality, legal authority, and deployment conditions clearly defined.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 shadow-sm">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Jurisdiction</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Governed by Indian law with exclusive jurisdiction in Mumbai, Maharashtra.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-black text-cyan-700 shadow-sm">
                    {section.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
