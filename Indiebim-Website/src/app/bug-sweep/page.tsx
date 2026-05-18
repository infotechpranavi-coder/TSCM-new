'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, ChevronRight, Home, ScanSearch } from 'lucide-react';

const bugSweepServices = [
  {
    id: 'business-bug-sweep',
    title: 'Business bug sweep',
    description:
      'Offices, boardrooms, and workspaces—professional sweeps to find covert microphones, cameras, and unauthorized transmitters.',
    href: '/business-bug-sweep',
    icon: Building2,
  },
  {
    id: 'home-bug-sweep',
    title: 'Home bug sweep',
    description:
      'Residences and private spaces—discreet technical inspections so conversations and family life stay protected.',
    href: '/home-bug-sweep',
    icon: Home,
  },
  {
    id: 'debugging-services',
    title: 'Debugging services',
    description:
      'Structured electronic and physical debugging across multiple environments, with clear findings and next-step guidance.',
    href: '/debugging-services',
    icon: ScanSearch,
  },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' as const },
};

export default function BugSweepPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[720px] w-[720px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-100/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-[0_0_28px_rgba(6,182,212,0.18)]"
          >
            <ScanSearch className="h-10 w-10 text-cyan-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            Bug{' '}
            <span className="bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Sweep</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Choose the environment you need to protect. Each option opens a dedicated page with scope, process, and how
            Indiebim can help.
          </motion.p>
        </div>

        <motion.nav
          {...fadeUp}
          className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur"
          aria-label="Bug sweep services on this page"
        >
          {bugSweepServices.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 capitalize transition hover:bg-cyan-50 hover:text-cyan-800"
            >
              {s.title}
            </a>
          ))}
        </motion.nav>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {bugSweepServices.map((service, index) => {
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
                  <h2 className="mt-5 text-xl font-bold capitalize text-slate-900">{service.title}</h2>
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

        <motion.div
          {...fadeUp}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl"
        >
          <div className="absolute inset-0 opacity-35">
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
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Book a sweep</p>
              <p className="mt-2 max-w-xl text-lg font-semibold text-white">
                Share your location type and timeline—we will align the right team and equipment for your assignment.
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
