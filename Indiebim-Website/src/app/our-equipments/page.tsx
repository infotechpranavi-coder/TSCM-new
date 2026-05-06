'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Eye,
  Flame,
  MapPinned,
  Radar,
  Search,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Waves,
  Wifi,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const heroFade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const categories = [
  {
    title: 'Radio Frequency Detection',
    badge: 'RF Grid',
    summary:
      'Built for active transmissions, burst traffic, rogue Wi-Fi, Bluetooth chatter, and covert cellular activity that shows up only in short windows.',
    accent: 'cyan',
    items: [
      {
        name: 'Spectrum Analyzer',
        model: 'REI OSCOR Green/Blue or MESA 2.0',
        icon: Radar,
        desc: 'Scans up to 24GHz to expose unauthorized signals, transient bursts, Bluetooth, Wi-Fi, and suspicious cellular emissions.',
      },
      {
        name: 'Near-Field Broadband Receiver',
        model: 'ANDRE Deluxe',
        icon: Search,
        desc: 'Helps pinpoint localized transmitters hidden close to meeting tables, wall panels, seating, or fixtures.',
      },
      {
        name: 'Cellular Activity Monitor',
        model: 'WAM-X25',
        icon: Activity,
        desc: 'Tracks 2G, 3G, 4G, and 5G activity often associated with SMS-based bugs, trackers, and covert relay devices.',
      },
    ],
  },
  {
    title: 'Dormant and Hidden Electronics',
    badge: 'Dormant Sweep',
    summary:
      'Designed to uncover electronics even when they are powered down, asleep, battery-starved, or waiting for the right trigger to transmit.',
    accent: 'emerald',
    items: [
      {
        name: 'Non-Linear Junction Detector',
        model: 'ORION 2.4 HX',
        icon: Cpu,
        desc: 'Detects semiconductor components inside walls, furniture, decor, or cavities where hidden microphones are physically planted.',
      },
      {
        name: 'Thermal Imaging Camera',
        model: 'FLIR',
        icon: Flame,
        desc: 'Surfaces minute heat signatures from concealed active circuits behind finishes, upholstery, fixtures, and appliances.',
      },
      {
        name: 'Optical Lens Finder',
        model: 'Pinhole Camera Detection',
        icon: Eye,
        desc: 'Uses reflected light to reveal pinhole lenses from hidden cameras even when the hardware is extremely compact.',
      },
    ],
  },
  {
    title: 'Wired and Infrastructure Analysis',
    badge: 'Hardline Check',
    summary:
      'Focused on physical lines, electrical points, ducts, and structural spaces where parasitic or hardwired surveillance can hide in plain sight.',
    accent: 'amber',
    items: [
      {
        name: 'Telephone and Line Analyzer',
        model: 'TALAN 3.0',
        icon: Waves,
        desc: 'Checks landlines and VoIP infrastructure for taps, line anomalies, leakage, and signs of signal manipulation.',
      },
      {
        name: 'Borescope and Endoscope',
        model: 'Inspection Probe',
        icon: Search,
        desc: 'Inspects vents, cavities, ceiling voids, and tight recesses without destructive teardown during the sweep.',
      },
      {
        name: 'Outlet and Wiring Testers',
        model: 'Infrastructure Testing Tools',
        icon: ShieldCheck,
        desc: 'Validates sockets and wiring points for tampering, parasitic devices, and unauthorized power draw from the building system.',
      },
    ],
  },
  {
    title: 'Cyber TSCM and Proximity Threats',
    badge: 'Wireless Net',
    summary:
      'Covers connected devices that store, relay, sync, or upload information later, including trackers and hidden wireless bridge points.',
    accent: 'violet',
    items: [
      {
        name: 'Wi-Fi Hunter and Analyzer',
        model: 'Rogue Wi-Fi Detection',
        icon: Wifi,
        desc: 'Finds hidden access points and store-and-forward devices that upload captured data only when conditions are safe.',
      },
      {
        name: 'Bluetooth Logger Detection',
        model: 'Tag and Beacon Discovery',
        icon: Smartphone,
        desc: 'Identifies concealed Bluetooth tags and beacons such as AirTags or Tile-type devices used for tracking or persistence.',
      },
    ],
  },
];

const quickStats = [
  { value: '24GHz', label: 'RF scanning ceiling' },
  { value: '4', label: 'Detection layers' },
  { value: 'Boardrooms to vehicles', label: 'Deployment range' },
];

const trustMarkers = [
  'Live signal analysis instead of casual scanning',
  'Dormant electronics discovery beyond transmitter-only checks',
  'Physical, wired, and cyber review inside one sweep process',
];

const checklist = [
  {
    title: 'Spectrum analysis',
    text: 'Confirms the team can read real radio activity instead of waving a generic detector around the room.',
  },
  {
    title: 'NLJD capability',
    text: 'Separates teams that can locate hidden electronics from those who only find devices that are actively transmitting.',
  },
  {
    title: 'Thermal and optical checks',
    text: 'Adds visibility into concealed active circuits and pinhole cameras that may not reveal themselves through RF alone.',
  },
];

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">{label}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{text}</p>
    </div>
  );
}

function accentClasses(accent: string) {
  switch (accent) {
    case 'emerald':
      return {
        shell:
          'border-emerald-200/70 bg-[linear-gradient(135deg,#f2fbf7_0%,#ffffff_52%,#ecfdf5_100%)]',
        badge: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        line: 'from-emerald-300 via-emerald-200 to-transparent',
        glow: 'bg-emerald-200/60',
        icon: 'bg-emerald-50 text-emerald-700',
      };
    case 'amber':
      return {
        shell:
          'border-amber-200/70 bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_52%,#fffbeb_100%)]',
        badge: 'border-amber-200 bg-amber-50 text-amber-800',
        line: 'from-amber-300 via-amber-200 to-transparent',
        glow: 'bg-amber-200/60',
        icon: 'bg-amber-50 text-amber-700',
      };
    case 'violet':
      return {
        shell:
          'border-violet-200/70 bg-[linear-gradient(135deg,#f7f5ff_0%,#ffffff_52%,#f5f3ff_100%)]',
        badge: 'border-violet-200 bg-violet-50 text-violet-800',
        line: 'from-violet-300 via-violet-200 to-transparent',
        glow: 'bg-violet-200/60',
        icon: 'bg-violet-50 text-violet-700',
      };
    default:
      return {
        shell:
          'border-cyan-200/70 bg-[linear-gradient(135deg,#effcff_0%,#ffffff_52%,#ecfeff_100%)]',
        badge: 'border-cyan-200 bg-cyan-50 text-cyan-800',
        line: 'from-cyan-300 via-cyan-200 to-transparent',
        glow: 'bg-cyan-200/60',
        icon: 'bg-cyan-50 text-cyan-700',
      };
  }
}

export default function OurEquipments() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] pb-24 text-slate-900">
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_24%),linear-gradient(180deg,#edf4fa_0%,#f5f8fc_52%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(180deg,rgba(15,23,42,0.04),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="max-w-3xl">
              <motion.div
                {...heroFade}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm backdrop-blur"
              >
                <ShieldCheck className="h-4 w-4" />
                Professional TSCM Equipment
              </motion.div>

              <motion.h1
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.08 }}
                className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
              >
                A tactical equipment stack built to find what casual sweep tools miss.
              </motion.h1>

              <motion.p
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.14 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Effective counter-surveillance is not one device. It is a layered process using RF analysis, dormant
                electronics detection, infrastructure inspection, and cyber-aware proximity checks in the same assignment.
              </motion.p>

              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {['RF Analysis', 'Dormant Device Discovery', 'Hardline Inspection', 'Cyber TSCM'].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {tag}
                  </div>
                ))}
              </motion.div>

              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.26 }}
                className="mt-8 flex items-center gap-2 text-sm text-slate-500"
              >
                <Link href="/" className="transition hover:text-cyan-700">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-700">Our Equipments</span>
              </motion.div>
            </div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.18 }}
              className="grid gap-4"
            >
              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.1)]">
                <div className="border-b border-slate-200 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">Command Snapshot</p>
                </div>
                <div className="grid gap-6 p-6 sm:p-7">
                  <div className="rounded-[24px] border border-cyan-100 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_100%)] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">Why this matters</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                      Professional sweeps depend on different tools for different threat behaviors.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {quickStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[20px] border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="text-lg font-semibold text-slate-950">{stat.value}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3">
                    {trustMarkers.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-slate-50/80 px-4 py-3"
                      >
                        <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            label="Detection Stack"
            title="Each layer answers a different surveillance problem."
            text="Modern bug sweeping is rarely about one obvious transmitter. The strongest teams combine multiple detection methods so active, hidden, wired, and network-assisted threats are all covered within the same sweep."
          />

          <div className="mt-12 space-y-8">
            {categories.map((category, categoryIndex) => {
              const tones = accentClasses(category.accent);

              return (
                <motion.section
                  key={category.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: categoryIndex * 0.05 }}
                  className={`relative overflow-hidden rounded-[32px] border ${tones.shell} shadow-[0_18px_60px_rgba(15,23,42,0.05)]`}
                >
                  <div className={`absolute -right-10 top-0 h-32 w-32 rounded-full blur-3xl ${tones.glow}`} />
                  <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.35fr_0.65fr] lg:p-10">
                    <div className="lg:pr-4">
                      <div className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${tones.badge}`}>
                        {category.badge}
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Category 0{categoryIndex + 1}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                        {category.title}
                      </h3>
                      <div className={`mt-5 h-px w-24 bg-gradient-to-r ${tones.line}`} />
                      <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {category.summary}
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {category.items.map((item, itemIndex) => {
                        const Icon = item.icon;

                        return (
                          <motion.article
                            key={item.name}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: itemIndex * 0.04 }}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-[26px] border border-white/80 bg-white/95 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] backdrop-blur transition-all sm:p-6"
                          >
                            <div className={`absolute -right-8 top-0 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${tones.glow} opacity-70`} />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                            <div className="relative flex h-full flex-col">
                              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-start gap-4">
                                  <div className="relative">
                                    <div className={`absolute inset-0 rounded-2xl blur-md transition-opacity duration-300 group-hover:opacity-100 ${tones.glow} opacity-60`} />
                                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/70 ${tones.icon} shadow-sm`}>
                                      <Icon className="h-5 w-5" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="inline-flex rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                      Detection Tool
                                    </div>
                                    <h4 className="mt-3 text-xl font-semibold text-slate-950">{item.name}</h4>
                                  </div>
                                </div>

                                <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
                                  {item.model}
                                </div>
                              </div>

                              <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200 via-white to-transparent" />

                              <div className="mt-5 grid flex-1 gap-4">
                                <p className="max-w-xl text-sm leading-7 text-slate-600">{item.desc}</p>

                                <div className="mt-auto rounded-[18px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(248,250,252,0.95),rgba(255,255,255,0.98))] px-4 py-3">
                                  <div className="flex items-center justify-between gap-4">
                                    <div>
                                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        System Role
                                      </p>
                                      <p className="mt-1 text-sm font-medium text-slate-900">
                                        {category.title}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                                      Active Layer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.article>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            <motion.div
              {...fadeUp}
              className="rounded-[30px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Hiring Checklist</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Ask what the sweep team can actually detect when a device is not behaving conveniently.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                A serious provider should be able to explain how their kit handles live transmissions, dormant
                electronics, hidden cameras, and infrastructure-level tampering without relying on one generic gadget.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {checklist.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[24px] border border-slate-200 bg-[#f8fbfd] p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                      <span className="text-sm font-semibold">0{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[32px] border border-rose-200 bg-[linear-gradient(135deg,#fff7f7_0%,#ffffff_54%,#fff1f2_100%)] shadow-[0_18px_60px_rgba(15,23,42,0.05)]"
          >
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="relative grid gap-0 lg:grid-cols-[0.26fr_0.74fr]">
              <div className="flex items-center justify-center border-b border-rose-200/70 bg-rose-50/80 p-8 lg:border-b-0 lg:border-r">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white text-rose-600 shadow-sm">
                  <ShieldAlert className="h-7 w-7" />
                </div>
              </div>
              <div className="p-7 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Reality Check</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  A phone app or a cheap detector wand is not a professional counter-surveillance program.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                  If someone claims to clear an office using only a smartphone application or a very low-cost handheld
                  device, the sweep is likely cosmetic. Sophisticated threats are specifically designed to evade that
                  level of checking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-[32px] border border-slate-900/10 bg-slate-950 text-white shadow-[0_22px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Need a Tactical Sweep</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Discuss the site, threat profile, and technical scope with Indiebim&apos;s team.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  The right equipment matters, but so does how it is deployed. Real TSCM work depends on trained
                  operators, disciplined process, and the ability to interpret what the tools are showing.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 p-7 sm:p-8 lg:p-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">
                  <MapPinned className="h-4 w-4 text-cyan-300" />
                  Mumbai Based Operations
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
