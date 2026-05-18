'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  ChevronRight,
  ExternalLink,
  Home,
  Shield,
  UserSearch,
  Briefcase,
} from 'lucide-react';

const coreTscmServices = [
  {
    id: 'corporate-tscm',
    title: 'Corporate TSCM service',
    description:
      'Boardrooms, offices, and executive spaces—bug sweeps, RF analysis, and counter-espionage support for business environments.',
    href: '/corporate-tscm-service',
    icon: Building2,
  },
  {
    id: 'residential-tscm',
    title: 'Residential TSCM service',
    description:
      'Homes, home offices, and private residences—discreet technical sweeps to protect family and confidential conversations.',
    href: '/residential-tscm-service',
    icon: Home,
  },
  {
    id: 'cyber-tscm',
    title: 'Cyber TSCM service',
    description:
      'Networks, smart devices, and digital attack surfaces—technical counter-measures aligned with modern surveillance risks.',
    href: '/cyber-tscm-service',
    icon: Shield,
  },
] as const;

const personalInvestigationLinks = [
  {
    name: 'Pre-Matrimonial Investigations',
    href: 'https://www.hsdetectives.com/services/personal-investigation/pre-matrimonial-investigations-services',
  },
  {
    name: 'Post-Matrimonial Surveillance',
    href: 'https://www.hsdetectives.com/services/personal-investigation/post-matrimonial-surveillance-services',
  },
  {
    name: 'Loyalty Tests',
    href: 'https://www.hsdetectives.com/services/personal-investigation/loyalty-tests-services',
  },
  {
    name: 'Missing Person Investigations',
    href: 'https://www.hsdetectives.com/services/personal-investigation/missing-person-investigations-services',
  },
  {
    name: 'Background Checks',
    href: 'https://www.hsdetectives.com/services/personal-investigation/background-checks-services',
  },
] as const;

const corporateInvestigationLinks = [
  {
    name: 'Employee Background Verification',
    href: 'https://www.hsdetectives.com/services/corporate-investigation/employee-background-verification-services',
  },
  {
    name: 'Fraud Investigation',
    href: 'https://www.hsdetectives.com/services/corporate-fraud-investigation-services-in-mumbai',
  },
  {
    name: 'Due Diligence Services',
    href: 'https://www.hsdetectives.com/services/corporate-investigation/due-diligence-services',
  },
  {
    name: 'Asset Tracing',
    href: 'https://www.hsdetectives.com/services/corporate-investigation/asset-tracing-services',
  },
  {
    name: 'Undercover Operations',
    href: 'https://www.hsdetectives.com/services/corporate-investigation/undercover-operations-services',
  },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' as const },
};

export default function TscmServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[720px] w-[720px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-100/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-[0_0_28px_rgba(6,182,212,0.18)]"
          >
            <Shield className="h-10 w-10 text-cyan-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            TSCM{' '}
            <span className="bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Technical surveillance counter-measures, debugging, and aligned investigation capabilities—choose a service
            below to learn more or jump to investigation offerings through our partner network.
          </motion.p>
        </div>

        <motion.nav
          {...fadeUp}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur"
          aria-label="On this page"
        >
          {coreTscmServices.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
            >
              {s.title}
            </a>
          ))}
          <a
            href="#personal-investigation"
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
          >
            Personal investigation
          </a>
          <a
            href="#corporate-investigation"
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
          >
            Corporate investigation
          </a>
        </motion.nav>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {coreTscmServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="scroll-mt-36"
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-700 transition group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
                    View service
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.section
            id="personal-investigation"
            {...fadeUp}
            className="scroll-mt-36 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800">
                <UserSearch className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Personal investigation</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Delivered through H S Detectives—specialized personal and pre- and post-matrimonial support with
                  professional discretion.
                </p>
              </div>
            </div>
            <ul className="mt-8 divide-y divide-slate-100 border-t border-slate-100">
              {personalInvestigationLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 py-3.5 text-sm font-medium text-slate-800 transition hover:text-cyan-700"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            id="corporate-investigation"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
            className="scroll-mt-36 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Corporate investigation</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fraud, due diligence, asset tracing, and verification—aligned with corporate risk and compliance needs.
                </p>
              </div>
            </div>
            <ul className="mt-8 divide-y divide-slate-100 border-t border-slate-100">
              {corporateInvestigationLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 py-3.5 text-sm font-medium text-slate-800 transition hover:text-cyan-700"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.div
          {...fadeUp}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl"
        >
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/inner-banner-1-1-1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/92 to-slate-950/75" />
          <div className="relative flex flex-col items-start gap-6 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Next step</p>
              <p className="mt-2 max-w-xl text-lg font-semibold text-white">
                Not sure which service fits your situation? Tell us about your environment and we will recommend a
                scope.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-900/30 transition hover:bg-cyan-400"
            >
              Contact us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
