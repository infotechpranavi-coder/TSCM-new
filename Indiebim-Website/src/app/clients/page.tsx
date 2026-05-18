'use client';

import { motion } from 'framer-motion';
import { Building2, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { ClientLogo } from '@/components/ClientLogo';
import { clients } from '@/data/clients';

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
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
              {' '}
              privacy-first protection
            </span>
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
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { label: 'Clients Listed', value: String(clients.length).padStart(2, '0'), icon: Building2 },
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-black text-slate-950">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.section>

        <section className="mt-14">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Featured Clients</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Corporate partners & brand logos
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client, index) => (
              <motion.article
                key={`${client.name}-${client.domain ?? index}`}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.28, delay: (index % 10) * 0.04 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[9.5rem] flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="flex h-16 w-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3">
                    <ClientLogo
                      name={client.name}
                      logo={client.logo}
                      domain={client.domain}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-black leading-6 text-slate-950">{client.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 opacity-0 transition group-hover:opacity-100">
                      Visit site
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
