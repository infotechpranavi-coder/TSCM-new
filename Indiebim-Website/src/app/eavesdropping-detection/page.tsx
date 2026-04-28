'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Ear, Lock, Radio, ScanSearch, ShieldCheck } from 'lucide-react';

const detectionPoints = [
  'Telephone and landline communication',
  'Cell phone interception risks',
  'Wi-Fi and Bluetooth exposure',
  'Fax and communication equipment vulnerabilities',
  'Office, boardroom, and private meeting conversations',
];

const serviceCoverage = [
  'Office and boardroom eavesdropping checks',
  'Telephone and communication device inspection',
  'Hotel room and residential privacy sweeps',
  'Conference and meeting venue protection',
  'Real-time monitoring and RF spectrum analysis',
];

export default function EavesdroppingDetectionPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-cyan-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-cyan-700 font-semibold">Eavesdropping Detection</span>
        </div>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <Ear className="h-4 w-4" />
              Eavesdropping Detection
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Protect sensitive conversations before they become someone else&apos;s information.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Information is extremely valuable and vulnerable, yet many organisations still do very little to protect it. It can be captured through telephone systems, cell phones, Wi-Fi, Bluetooth, fax communication, or even regular office and boardroom conversations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <Radio className="h-4 w-4 text-cyan-600" />
                RF monitoring
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <ScanSearch className="h-4 w-4 text-cyan-600" />
                Technical sweep support
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <Lock className="h-4 w-4 text-cyan-600" />
                Sensitive venue protection
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
          >
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src="/images/3-1-1.jpg"
                alt="Eavesdropping detection service"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Read More</p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                  Professional surveys for offices, boardrooms, hotel rooms, houses, and meeting spaces where sensitive discussions happen.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why it matters</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Confidential information is often exposed in ordinary spaces.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              EDS is a serious challenge for business organisations and companies trying to protect confidential and sensitive information. Our professional eavesdropping detection survey services help check and secure offices, boardrooms, telephones, and other locations where sensitive discussions are regularly held.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We use trained technical teams and sophisticated equipment for a wide range of assignments, with the goal of identifying illegal eavesdropping risks before they lead to data compromise, privacy loss, or competitive exposure.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Common risk areas</p>
            <div className="mt-5 space-y-3">
              {detectionPoints.map((item) => (
                <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Service coverage</p>
            <h2 className="mt-3 text-3xl font-bold">A full package for private venues and high-sensitivity discussions.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              We offer an inclusive package to help secure offices, houses, hotel rooms, conference spaces, and other venues where private or company-sensitive matters are discussed. Our approach is designed to support real operational confidence, not surface-level reassurance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {serviceCoverage.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[28px] border border-white/70 bg-white/95 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Live detection</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">We monitor in real time, and we detect without installing devices.</h2>
          <p className="mt-5 max-w-3xl mx-auto text-base leading-8 text-slate-600">
            We do not install listening devices. We detect them. Our team works to identify suspicious activity during events or meetings through real-time monitoring and radio frequency spectrum analysis, helping ensure that sensitive discussions stay private.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
            >
              Enquiry Now
            </Link>
            <a
              href="tel:+919967107077"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
            >
              Call +91 9967107077
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
