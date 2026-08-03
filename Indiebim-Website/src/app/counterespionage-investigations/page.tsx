'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Eye,
  FileSearch,
  Lock,
  Phone,
  Shield,
  ShieldAlert,
  ShieldCheck,
  UserX,
} from 'lucide-react';

const internalThreatPoints = [
  'Confidential case handling',
  'Non-disruptive investigation methods',
  'Evidence-backed conclusions',
];

const corporateLeakPoints = [
  'Root-cause leak analysis',
  'Practical containment steps',
  'Long-term safeguard recommendations',
];

const processSteps = [
  {
    title: 'Confidential intake',
    desc: 'We begin with a private discussion to understand your concerns, the suspected scope of exposure and any constraints on the investigation.',
  },
  {
    title: 'Risk and site assessment',
    desc: 'Our team evaluates the physical and organizational layout to identify where sensitive information is most likely at risk.',
  },
  {
    title: 'Technical inspection',
    desc: 'Specialized equipment and manual checks are used to detect devices, vulnerabilities and unusual activity across the assessed area.',
  },
  {
    title: 'Findings and controls',
    desc: 'You receive a clear summary of what was found, along with prioritized recommendations to prevent future exposure.',
  },
];

const counterIntelligence = [
  {
    icon: Eye,
    title: 'Threat Awareness',
    desc: 'Understanding who may target information and how.',
  },
  {
    icon: Lock,
    title: 'Secure Procedures',
    desc: 'Improving meeting and document handling discipline.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Controls',
    desc: 'Reducing exposure through inspection and monitoring.',
  },
];

const benefits = [
  {
    title: 'Privacy Protection',
    desc: 'Reduce the risk of conversations, documents and movements being exposed.',
  },
  {
    title: 'Business Confidence',
    desc: 'Protect board decisions, negotiations and sensitive commercial information.',
  },
  {
    title: 'Clear Next Steps',
    desc: 'Receive practical recommendations after the inspection is complete.',
  },
];

export default function CounterespionageInvestigationsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f8fb] pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
        <div className="absolute bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-blue-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-cyan-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/tscm-services" className="transition hover:text-cyan-700">
            TSCM Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-cyan-700">Counterespionage Investigations</span>
        </div>

        {/* Hero */}
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <ShieldAlert className="h-4 w-4" />
              Counterespionage Investigations
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Counterespionage Investigations
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Counterespionage investigations help identify how information is being exposed and how to prevent further
              compromise.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Start Investigation
              </Link>
              <a
                href="tel:+919967107077"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
              >
                <Phone className="h-4 w-4" />
                +91 99671 07077
              </a>
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
                alt="Counterespionage investigations"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Discreet & structured</p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                  Identify exposure pathways, contain the risk, and strengthen lasting counter-intelligence habits.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Internal Threats */}
        <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Internal Threats</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Internal Threats</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Organizations can face risks from insiders, unauthorized access, compromised spaces or poorly controlled
              sensitive meetings. Early identification of these gaps prevents small lapses from turning into major
              information breaches.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-8"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
              <UserX className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">A Measured Response</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Indiebim investigates internal threats with discretion, avoiding disruption to day-to-day operations while
              gathering the technical evidence leadership needs to act decisively.
            </p>
            <div className="mt-6 space-y-3">
              {internalThreatPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        {/* Corporate Leaks */}
        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:order-1"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <FileSearch className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Closing the Gaps</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Once a leak pathway is identified, our team works with your organization to close it permanently,
              combining technical fixes with procedural recommendations that hold up over time.
            </p>
            <div className="mt-6 space-y-3">
              {corporateLeakPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Corporate Leaks</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Corporate Leaks</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We help examine technical and environmental routes through which confidential information may be leaving
              the organization. This includes reviewing communication channels, physical access points and electronic
              vulnerabilities.
            </p>
          </motion.article>
        </section>

        {/* Investigation Process */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Investigation Process</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Investigation Process</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A disciplined process keeps the engagement discreet, structured and useful.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Counter Intelligence */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Counter Intelligence</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Counter Intelligence</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Beyond detection, a strong counter intelligence posture builds lasting habits that keep sensitive
            information protected day to day.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {counterIntelligence.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Benefits</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Benefits</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A thorough counterespionage investigation gives leadership the clarity and confidence to operate without
            fear of hidden exposure.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[28px] border border-white/70 bg-white/95 p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Ready to act</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Identify exposure pathways before they become lasting damage.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Schedule a discreet counterespionage investigation for your organization and receive clear, actionable
            findings.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
