'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, CreditCard, FileText, RotateCcw } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Booking and Mobilization Advance',
    paragraphs: [
      'To secure a professional sweep or audit, a mobilization advance is required.',
      'This advance covers the scheduling of our USA and Israel-trained experts and the logistics of transporting specialized gear such as spectrum analyzers and NLJDs to your site in Mumbai, Delhi, Bangalore, or other Indian metros.',
      'The mobilization advance is non-refundable once the team has been dispatched or travel arrangements such as flights and hotels have been booked.',
    ],
  },
  {
    number: '02',
    title: 'Cancellation by the Client',
    paragraphs: [
      'If you cancel at least 48 hours before the scheduled sweep, any amount paid above mobilization and logistics costs will be refunded.',
      'If cancellation occurs within 24 to 48 hours of the scheduled service, a cancellation fee of 25 percent of the total project value will be charged to cover the opportunity cost of the technical team.',
      'If cancellation occurs within 24 hours of the scheduled time, or once the IndieBim team has arrived on site in Mumbai, Pune, Gurgaon, or another location, no refund will be issued.',
    ],
  },
  {
    number: '03',
    title: 'Rescheduling Policy',
    paragraphs: [
      'A one-time rescheduling is permitted at no extra cost if the request is made at least 24 hours in advance.',
      'Requests made within 24 hours of the service may incur a nominal recalibration and logistics fee.',
    ],
  },
  {
    number: '04',
    title: 'Refund Eligibility and Process',
    paragraphs: [
      'Once a TSCM sweep has been conducted and a Technical Vulnerability Report has been issued, the service is considered fulfilled. Refunds cannot be claimed based on the findings of the sweep, including cases where no bugs are found. The fee covers the expert audit process and the technical assurance delivered.',
      'If a technical malfunction on our end prevents completion of the sweep, IndieBim will either reschedule the engagement at our cost or provide a full refund of the unearned portion of the fee.',
      'Approved refunds will be processed through the original payment method within 7 to 10 working days in line with Indian banking standards.',
    ],
  },
  {
    number: '05',
    title: 'Force Majeure',
    paragraphs: [
      'IndieBim Technology Solutions Private Limited is not liable for delays or cancellations caused by acts of God, government restrictions such as sudden lockdowns in Indian cities, or civil unrest.',
      'In such cases, we will work with the client to reschedule the mission at the earliest safe opportunity.',
    ],
  },
  {
    number: '06',
    title: 'Dispute Resolution',
    paragraphs: [
      'Any disputes regarding refunds shall be governed by the laws of the Republic of India.',
      'All such disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
    ],
  },
];

export default function RefundPolicyPage() {
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
              <RotateCcw className="h-4 w-4" />
              Refund and Cancellation Policy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              The refund framework for specialized TSCM and cyber security deployments.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              Because IndieBim operates with high-demand specialists and calibrated international-grade equipment, our
              refund and cancellation process follows a structured deployment policy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Mobilization-based billing
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Pan-India deployment terms
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
              <span className="text-cyan-700">Refund & Cancellation Policy</span>
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
                <CreditCard className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Payment Structure</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Mobilization advances, logistics handling, and fulfillment status determine refund eligibility.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Client Clarity</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The policy covers cancellations, rescheduling, force majeure, refund timing, and dispute resolution.
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
