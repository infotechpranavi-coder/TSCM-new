'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Building2, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

const organizations = [
  {
    name: 'APDI (Association of Private Detectives & Investigators)',
    description:
      'Founded in 2005, APDI is the foremost representative body for private detectives in India. It is officially recognized by the Government of India and works closely with the Ministry of Home Affairs on legislative matters like the Private Detective Agencies (Regulation) Bill.',
    founded: '2005',
    reach: 'India (National)',
    focus: 'Government advocacy & Regulation',
    accent: 'from-amber-500 to-orange-500',
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    name: 'TPDIA (The Professional Detectives and Investigators Association)',
    description:
      'A prominent national organization with chapters across Maharashtra, Gujarat, and Tamil Nadu, focused on maintaining strict ethics and professional standards.',
    founded: 'Not specified',
    reach: 'India (Multi-state chapters)',
    focus: 'Ethics & Professional standards',
    accent: 'from-cyan-500 to-sky-600',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    name: 'NIDA (National Institute of Detectives and Investigators)',
    description:
      'Widely associated with professional training and standard-setting within the Indian investigative community.',
    founded: 'Not specified',
    reach: 'India',
    focus: 'Training & Standards',
    accent: 'from-emerald-500 to-teal-600',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    name: 'W.A.D. (World Association of Detectives)',
    description:
      'Established in 1925, W.A.D. is one of the oldest and largest global associations with members across more than 80 countries.',
    founded: '1925',
    reach: 'Global (80+ countries)',
    focus: 'Networking & International standards',
    accent: 'from-violet-500 to-indigo-600',
    icon: <Globe2 className="h-6 w-6" />,
  },
  {
    name: 'CII (Council of International Investigators)',
    description:
      'Founded in 1955, CII is known for highly selective membership and strong emphasis on integrity, trust, and expertise.',
    founded: '1955',
    reach: 'Global (Highly selective)',
    focus: 'Elite professional ethics & Trust',
    accent: 'from-fuchsia-500 to-pink-600',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    name: 'ABI (Association of British Investigators)',
    description:
      'Founded in 1913, ABI is a premier UK body with international recognition, including acknowledgment by the Law Society of England and Wales.',
    founded: '1913',
    reach: 'UK & International',
    focus: 'Professional accreditation & Self-regulation',
    accent: 'from-rose-500 to-red-600',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    name: 'WAPI (World Association of Professional Investigators)',
    description:
      'A global body covering multiple investigative domains, including public, corporate, and domestic private-sector work.',
    founded: 'Not specified',
    reach: 'Global',
    focus: 'Cross-domain investigative networking',
    accent: 'from-blue-500 to-cyan-600',
    icon: <Globe2 className="h-6 w-6" />,
  },
  {
    name: 'ASIS International (American Society for Industrial Security)',
    description:
      'A major international organization for security professionals and a key network for corporate investigators worldwide.',
    founded: 'Not specified',
    reach: 'International',
    focus: 'Security leadership & Corporate investigation network',
    accent: 'from-slate-700 to-slate-900',
    icon: <Building2 className="h-6 w-6" />,
  },
];

const stats = [
  { label: 'Organizations', value: '8' },
  { label: 'Indian Bodies', value: '3+' },
  { label: 'Global Networks', value: '5+' },
  { label: 'Core Themes', value: 'Ethics, Standards, Reach' },
];

export default function MembershipPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
          >
            <ShieldCheck className="h-4 w-4" />
            Membership Directory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-black leading-tight text-white md:text-6xl"
          >
            Investigative Organizations
            <span className="block bg-linear-to-r from-amber-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Standards, Ethics, and Global Reach
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            A modern overview of leading investigative associations and professional bodies across India and the wider international security and investigations landscape.
          </motion.p>
        </div>

        <div className="mb-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
            >
              <div className="mb-2 text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {organizations.map((organization, index) => (
            <motion.article
              key={organization.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${organization.accent}`} />

              <div className="mb-6 flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${organization.accent} text-white shadow-lg`}>
                  {organization.icon}
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Association
                </div>
              </div>

              <h2 className="mb-4 text-xl font-bold leading-snug text-white">
                {organization.name}
              </h2>

              <p className="mb-6 text-sm leading-7 text-slate-300">
                {organization.description}
              </p>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3">
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Founded</div>
                  <div className="text-sm font-medium text-white">{organization.founded}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3">
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Reach</div>
                  <div className="text-sm font-medium text-white">{organization.reach}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3">
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Focus</div>
                  <div className="text-sm font-medium text-white">{organization.focus}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
