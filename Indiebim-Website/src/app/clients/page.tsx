'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { CLIENTS } from '@/data/clients';

const cardGradients = [
  'from-cyan-500 via-sky-500 to-blue-600',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-orange-500 via-amber-500 to-yellow-400',
  'from-rose-500 via-pink-500 to-fuchsia-500',
  'from-indigo-500 via-violet-500 to-purple-500',
  'from-slate-700 via-slate-800 to-slate-950',
];

const chipLabels = [
  'Corporate',
  'Enterprise',
  'Trusted',
  'Strategic',
  'Private',
  'National',
];

function getInitials(name: string) {
  const initials = name
    .replace(/[^a-zA-Z0-9& ]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return initials || name.slice(0, 2).toUpperCase();
}

export default function ClientsPage() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#eef8ff_0%,#ffffff_38%,#f8fafc_100%)] pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:74px_74px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Trusted Client Network
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Clients who trust
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 bg-clip-text text-transparent"> privacy-first protection</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A snapshot of organizations and brands we have supported across corporate, financial,
            infrastructure, hospitality, pharma, and strategic advisory environments.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Clients Listed', value: String(CLIENTS.length).padStart(2, '0'), icon: Building2 },
            { label: 'Primary Focus', value: 'TSCM + Debugging', icon: ShieldCheck },
            { label: 'Coverage Style', value: 'Discreet Deployment', icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-slate-950">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.section>

        <section className="mt-14">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Featured Clients</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Small cards, clean logo-style display</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {CLIENTS.map((client, index) => {
              const gradient = cardGradients[index % cardGradients.length];
              const chip = chipLabels[index % chipLabels.length];

              return (
                <motion.article
                  key={client}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.28, delay: (index % 10) * 0.04 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${gradient}`} />
                  <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-slate-100/70 blur-2xl transition-transform duration-300 group-hover:scale-125" />

                  <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-lg font-black text-white shadow-lg`}>
                    {getInitials(client)}
                  </div>

                  <div className="mt-4">
                    <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {chip}
                    </div>
                    <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] text-base font-black leading-7 text-slate-950">
                      {client}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">Logo-style client marker with animated reveal and hover lift.</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    Verified showcase
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-cyan-200/80" />
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
