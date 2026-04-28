'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  EyeOff,
  Lock,
  Radar,
  Radio,
  UserCheck,
} from 'lucide-react';

const concerns = [
  'Illegal eavesdropping risks',
  'Suspicious following or hostile observation',
  'Compromised meetings and conversations',
  'Data and communication exposure',
];

const coverage = [
  'Counter-surveillance support',
  'TSCM-led threat detection',
  'Electronic eavesdropping checks',
  'Privacy and asset protection guidance',
  'Discreet, ethical, tailored service delivery',
];

export default function CounterSurveillancePage() {
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
          <span className="text-cyan-700 font-semibold">Counter Surveillance</span>
        </div>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <EyeOff className="h-4 w-4" />
              Counter Surveillance
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Protect your meetings, information, assets, and privacy from hostile surveillance.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Are you worried about being a victim of eavesdropping? Do you feel followed, watched, or under the eye of a spy? Are your meetings, conversations, and data truly secure? If you are constantly concerned about bugging or illegal listening devices, our counter-surveillance support is designed for exactly that situation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <Radar className="h-4 w-4 text-cyan-600" />
                Threat detection
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <Radio className="h-4 w-4 text-cyan-600" />
                TSCM methods
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <Lock className="h-4 w-4 text-cyan-600" />
                Privacy assurance
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
                src="/images/8-1.jpg"
                alt="Counter surveillance service"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Read More</p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                  Counter-surveillance measures built to help reduce unwanted intrusion, criminal monitoring, and hostile observation wherever you are.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">How it helps</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Our experts help protect your interests and your peace of mind.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              IndieBim experts have the answer to these problems. Our counter-surveillance services are designed to help protect your interests and restore confidence in the security of your surroundings, whether the concern is criminal intrusion, competitor-led monitoring, or other hostile surveillance activity.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We guide and support you in securing your privacy, assets, conversations, and sensitive information against unwanted threats. The goal is not only to detect suspicious activity, but to create a stronger defensive posture around the environments and communication channels you rely on.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Typical concerns</p>
            <div className="mt-5 space-y-3">
              {concerns.map((item) => (
                <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Technology and methods</p>
            <h2 className="mt-3 text-3xl font-bold">Advanced TSCM techniques for hybrid surveillance threats.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Our counter-surveillance experts use the latest TSCM technologies and techniques to respond to threats posed by even highly advanced electronic eavesdropping methods. That includes modern hybrid threats where surveillance risk spans physical space, wireless activity, and technical concealment.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Every engagement is approached with discretion and professionalism, with measures scaled to the environment and the level of threat rather than relying on a one-size-fits-all process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {coverage.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <UserCheck className="h-5 w-5" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Service standard</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Ethical, discreet, professional, and tailored to your needs.</h2>
          <p className="mt-5 max-w-3xl mx-auto text-base leading-8 text-slate-600">
            Our services are built to keep your communications, information, assets, intelligence, and reputation protected at the highest confidential standards. The focus is always on ethical execution, proportional response, and privacy-led support that matches your real-world needs.
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
