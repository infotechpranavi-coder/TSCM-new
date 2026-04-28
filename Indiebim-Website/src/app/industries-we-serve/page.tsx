'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Phone,
  Sparkles,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const heroFade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const industries = [
  {
    name: 'Aviation',
    image: '/images/banner-2-5-1.jpg',
    label: 'High Mobility',
    summary: 'Aircraft, charter movement, and executive travel environments where conversations happen in transit.',
    detail:
      'Aircraft inspections demand a higher level of expertise to detect bugging devices and surveillance equipment inside cabins, refits, charter jets, and executive airframes.',
  },
  {
    name: 'Banking & Finance',
    image: '/images/tscm.jpg',
    label: 'High Sensitivity',
    summary: 'Rooms handling deal flow, compliance discussions, board material, and financial strategy.',
    detail:
      'Financial institutions need disciplined counter-surveillance in executive rooms, due-diligence spaces, and confidential review environments.',
  },
  {
    name: 'Government',
    image: '/images/inner-banner-1-1-1.jpg',
    label: 'Protected Briefings',
    summary: 'Assignments where privacy, protocol, and controlled communications matter at every stage.',
    detail:
      'Government-related work requires reliable sweep methodology, discreet operating procedure, and calm execution in sensitive administrative spaces.',
  },
  {
    name: 'Healthcare',
    image: '/images/why-us.jpeg',
    label: 'Critical Trust',
    summary: 'Executive offices, medical leadership rooms, and sensitive patient-data discussion zones.',
    detail:
      'Healthcare organizations often need privacy protection where legal sensitivity, patient confidentiality, and institutional reputation intersect.',
  },
  {
    name: 'Corporate & C-Suite',
    image: '/images/3-1-1.jpg',
    label: 'Boardroom Risk',
    summary: 'Leadership teams, investors, legal counsel, and strategic meetings that cannot leak.',
    detail:
      'Boardrooms and executive suites are prime targets for technical eavesdropping when mergers, disputes, investigations, or leadership transitions are in motion.',
  },
  {
    name: 'Defence & Space',
    image: '/images/13-1.jpg',
    label: 'Mission Critical',
    summary: 'Programs that demand tighter procedural discipline and stronger technical scrutiny.',
    detail:
      'Defence and advanced technical sectors need teams that can work around sensitive infrastructure without reducing the assignment to cosmetic scanning.',
  },
];

const sectors = [
  {
    name: 'Communications',
    detail: 'Secure discussions around networks, media handling, broadcasting, and strategic information flow.',
  },
  {
    name: 'Education',
    detail: 'Leadership meetings, donor conversations, and internal investigations where discretion still matters.',
  },
  {
    name: 'Energy',
    detail: 'Infrastructure, contracts, regulatory matters, and operational planning often create high-value targets.',
  },
  {
    name: 'Entertainment',
    detail: 'Celebrity privacy, production secrecy, contract talks, and publicity-sensitive conversations need protection.',
  },
  {
    name: 'Fortune 100/500',
    detail: 'Large organizations face boardroom, legal, procurement, and executive-risk exposure at scale.',
  },
  {
    name: 'HNWI Clients',
    detail: 'Private residences, travel, staff interactions, and family-office communications need tailored sweeps.',
  },
  {
    name: 'Hospitality',
    detail: 'Hotels, suites, and event venues can host short-notice high-sensitivity meetings and VIP stays.',
  },
  {
    name: 'Logistics',
    detail: 'Supply-chain planning, routing, contracts, and partner negotiations often involve commercially sensitive data.',
  },
  {
    name: 'Marine',
    detail: 'Vessels and port-side operations need physical, wireless, and compartment-aware sweep planning.',
  },
  {
    name: 'Non-Profit',
    detail: 'Grant strategy, leadership issues, partner due diligence, and sensitive advocacy work require confidentiality.',
  },
  {
    name: 'Petrochemical',
    detail: 'High-value industrial environments combine operational sensitivity with infrastructure-related risk.',
  },
  {
    name: 'Residential',
    detail: 'Homes, estates, and private family settings need discreet, non-disruptive privacy checks.',
  },
  {
    name: 'Small Business',
    detail: 'Founders and smaller teams still face leaks around pricing, hiring, disputes, and local competition.',
  },
  {
    name: 'Yachting Industry',
    detail: 'Yachts combine mobility, privacy expectations, guest traffic, and compact spaces that merit specialist review.',
  },
];

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [activeSector, setActiveSector] = useState(sectors[0]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f8fc] pb-24 text-slate-900">
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_28%),linear-gradient(180deg,#edf5fb_0%,#f5f8fc_56%,#ffffff_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="max-w-3xl">
              <motion.div
                {...heroFade}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm backdrop-blur"
              >
                <Sparkles className="h-4 w-4" />
                Industries We Serve
              </motion.div>

              <motion.h1
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.08 }}
                className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
              >
                Privacy protection shaped for sectors where information moves fast and trust breaks faster.
              </motion.h1>

              <motion.p
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.14 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Indiebim supports corporate, institutional, high-mobility, and high-sensitivity environments where
                conversations, negotiations, and protected operations need stronger counter-surveillance discipline.
              </motion.p>

              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.2 }}
                className="mt-8 flex items-center gap-2 text-sm text-slate-500"
              >
                <Link href="/" className="transition hover:text-cyan-700">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-700">Industries We Serve</span>
              </motion.div>
            </div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.18 }}
              className="overflow-hidden rounded-[32px] border border-white/80 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur"
            >
              <div className="relative h-[280px] sm:h-[340px]">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.72))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Featured Sector
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">{activeIndustry.name}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{activeIndustry.detail}</p>
                </div>
              </div>
              <div className="grid gap-3 border-t border-slate-200/80 bg-white p-5 sm:grid-cols-2 sm:p-6">
                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Focus Signal</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{activeIndustry.label}</p>
                </div>
                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Why It Matters</p>
                  <p className="mt-2 text-sm text-slate-700">{activeIndustry.summary}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="mb-8 max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">Visual Showcase</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Click a sector card to spotlight how the risk profile changes.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              These cards are designed to feel more like featured sectors than a plain list, with richer visuals and a
              live detail panel that updates when you select one.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const isActive = activeIndustry.name === industry.name;

              return (
                <motion.button
                  key={industry.name}
                  type="button"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveIndustry(industry)}
                  className={`group relative overflow-hidden rounded-[28px] border text-left shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all ${
                    isActive
                      ? 'border-cyan-300 ring-2 ring-cyan-200'
                      : 'border-white/80 hover:border-cyan-200'
                  }`}
                >
                  <div className="relative h-[320px]">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.82))]" />
                    <div className="absolute inset-x-0 top-0 p-5">
                      <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {industry.label}
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">{industry.summary}</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur transition group-hover:bg-cyan-400/80 group-hover:text-slate-950">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-stretch">
            <motion.div
              {...fadeUp}
              className="flex h-full flex-col rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_55%,#eef7fb_100%)] p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">Operational Note</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  Sensitive industries need more than a generic room scan.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Aircraft inspections, executive meetings, legal review spaces, mobile leadership environments, and
                  sensitive institutional facilities all create different surveillance exposure patterns. The sweep plan
                  should adapt to the environment instead of pretending every site behaves the same way.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/90 bg-white/90 p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Exposure Type
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">
                      Mobile, executive, and institutional risk patterns
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/90 bg-white/90 p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Sweep Priority
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">
                      Match the environment before selecting the process
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col justify-end gap-4">
                <div className="rounded-[26px] border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Current Spotlight</p>
                  <p className="mt-3 text-2xl font-semibold">{activeIndustry.name}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{activeIndustry.detail}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      Sector Signal
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">{activeIndustry.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{activeIndustry.summary}</p>
                  </div>
                  <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      Response Style
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">Discreet, technical, and environment-led</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Sweep planning changes based on movement, room profile, and how information is handled onsite.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.04)] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Additional Sectors</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => {
                  const isActive = activeSector.name === sector.name;

                  return (
                    <motion.button
                      key={sector.name}
                      type="button"
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      onClick={() => setActiveSector(sector)}
                      className={`group flex items-center gap-3 rounded-[18px] border px-4 py-3 text-left shadow-sm transition-all ${
                        isActive
                          ? 'border-cyan-300 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_100%)] ring-2 ring-cyan-100 shadow-[0_14px_30px_rgba(8,145,178,0.12)]'
                          : 'border-white bg-white hover:border-cyan-200 hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]'
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all ${
                          isActive
                            ? 'bg-cyan-500 text-white shadow-[0_10px_24px_rgba(6,182,212,0.28)]'
                            : 'bg-cyan-50 text-cyan-700 group-hover:bg-cyan-100'
                        }`}
                      >
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-medium transition-colors ${
                            isActive ? 'text-slate-950' : 'text-slate-800'
                          }`}
                        >
                          {sector.name}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Selected Sector
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSector.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="mt-3"
                  >
                    <p className="text-lg font-semibold text-slate-950">{activeSector.name}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{activeSector.detail}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden py-8 text-white sm:py-10"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(135deg,#04111f_0%,#07192b_54%,#0f172a_100%)]" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_85%_22%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]" />
            <div className="absolute inset-0 rounded-[2.5rem] opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            <div className="relative grid gap-10 px-7 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_290px] lg:items-start lg:px-10">
              <div className="relative">
                <div className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-cyan-300/0 lg:block" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  About Indiebim
                </p>
                <h3 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Professional TSCM support for organizations that cannot afford casual security assumptions.
                </h3>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  We provide professional TSCM services for corporations, businesses, government agencies, and
                  non-profits. Our specialists use high-grade equipment and a practical, disciplined approach that is
                  designed for sensitive environments rather than symbolic scanning.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Approach</p>
                    <p className="mt-2 text-sm text-white">Practical and discreet</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Coverage</p>
                    <p className="mt-2 text-sm text-white">Corporate, government, NGOs</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Standard</p>
                    <p className="mt-2 text-sm text-white">High-grade equipment</p>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-white/10 pt-6 lg:border-t-0 lg:pl-8">
                <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/12 to-white/0 lg:block" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Start Securely</p>
                <p className="mt-3 text-lg font-bold text-white">Choose how you want to connect with our team.</p>

                <div className="mt-6 flex flex-col gap-4">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center justify-between border-b border-cyan-300/40 pb-4 text-base font-semibold text-white transition hover:border-cyan-200"
                  >
                    <span>Hire a TSCM Specialist</span>
                    <ArrowUpRight className="h-5 w-5 text-cyan-200 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>

                  <a
                    href="tel:+919967107077"
                    className="inline-flex items-center justify-between border-b border-white/15 pb-4 text-base font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-200" />
                      Let&apos;s Talk Today
                    </span>
                    <span className="text-sm text-cyan-200">Call now</span>
                  </a>

                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Best For</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Sensitive boardrooms, high-trust offices, government-linked spaces, and leadership environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
