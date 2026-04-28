'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ChevronRight,
  Cpu,
  Eye,
  MapPin,
  Phone,
  Radar,
  ShieldCheck,
  UserRoundCheck,
  Waves,
  Wifi,
} from 'lucide-react';

const experienceAreas = [
  'Corporate and boardroom security for mergers, acquisitions, and intellectual property',
  'Aircraft and marine TSCM for private jets, chartered aircraft, and luxury yachts',
  'Government and VIP protection for high-clearance audits and sensitive environments',
];

const teamMembers = [
  {
    name: 'Wahid Shaikh',
    role: 'CEO and TSCM Lead',
    summary:
      'Over 12 years of experience in data leakage prevention, cyber security, corporate security, and technical surveillance counter-measures.',
    image: '/images/wahib.png',
  },
  {
    name: 'RK Chaudhry',
    role: 'Senior Technical Expert',
    summary:
      'A veteran specialist with 15+ years of experience in high-level bug sweeping, technical counter-intelligence, debugging, and privacy protection.',
    image: '/images/rk.png',
  },
  {
    name: 'Prasanna Venkatesan',
    role: 'Risk and Cyber Specialist',
    summary:
      'USA-educated professional with 13+ years of experience, backed by ISO 27001 and CRISP-focused risk and information security expertise.',
    image: '/images/author-5.png',
  },
  {
    name: 'Dev Dhankar',
    role: 'Ethical Hacker',
    summary:
      'Focused on network vulnerability analysis, penetration testing, and detection of IP-based surveillance threats across connected environments.',
    image: '/images/author-6.png',
  },
];

const equipment = [
  {
    title: 'Spectrum Analyzers',
    detail: '100Hz to 24GHz detection for unauthorized RF, Bluetooth, Wi-Fi, and cellular bursts.',
    icon: Radar,
  },
  {
    title: 'NLJD Systems',
    detail: 'Find hidden electronics even when devices are switched off or running in sleep mode.',
    icon: Cpu,
  },
  {
    title: 'Thermal Imaging',
    detail: 'FLIR-assisted scans to isolate heat signatures from miniature bugs concealed in interiors.',
    icon: Eye,
  },
  {
    title: 'Telephone and Line Analyzers',
    detail: 'Identify wiretaps, line tampering, and on-hook audio leakage in landlines and VoIP setups.',
    icon: Waves,
  },
  {
    title: 'Cellular Activity Monitors',
    detail: 'Monitor 3G, 4G, and 5G GSM bug activity and GPS tracker signaling patterns.',
    icon: Activity,
  },
  {
    title: 'Pinhole Lens Detectors',
    detail: 'Optical tools that pinpoint covert cameras hidden inside fixtures and furniture.',
    icon: Wifi,
  },
];

const processSteps = [
  {
    title: 'Threat Assessment',
    detail: 'We map risks to your profile, location, use case, and exposure level before the sweep begins.',
  },
  {
    title: 'Physical and Visual Inspection',
    detail: 'A room-by-room and asset-by-asset inspection identifies suspicious modifications and concealment points.',
  },
  {
    title: 'Electronic Sweep',
    detail: 'Full-spectrum RF analysis, NLJD scanning, and tactical testing uncover active and dormant devices.',
  },
  {
    title: 'Cyber TSCM',
    detail: 'We audit Wi-Fi networks, smart devices, and rogue access points for digital surveillance risks.',
  },
  {
    title: 'Detailed Reporting',
    detail: 'Every assignment concludes with a professional report covering findings, vulnerabilities, and hardening advice.',
  },
];

const ethicsSections = [
  {
    title: 'Pan-India Confidentiality and Strategic Discretion',
    points: [
      'Mobile elite units support rapid deployment to Delhi, Hyderabad, Chennai, and Pune for high-stakes protection.',
      'We operate with discretion in sensitive residential zones such as Lutyens Delhi and Jubilee Hills, as well as corporate hubs like BKC and Whitefield.',
      'Specialized TSCM equipment transport is managed under strict security protocols so the mission remains covert from start to finish.',
    ],
  },
  {
    title: 'Legal Integrity Under the Indian Constitution',
    points: [
      'We uphold the Supreme Court of India recognition of privacy as a fundamental right and help clients exercise that right.',
      'Our debugging processes are aligned with the Information Technology Act, 2000 and structured to support proper evidence handling.',
      'IndieBim is strictly a counter-measures firm and does not provide hacker-for-hire services or illegal surveillance support.',
    ],
  },
  {
    title: 'International Technology, Indian Expertise',
    points: [
      'Our methodology is shaped by USA and Israel training, adapted to the Indian radio frequency and surveillance environment.',
      'We deploy military-grade NLJD systems and 24GHz spectrum analyzers to address 5G and AI-driven bugging risks in tier-1 cities.',
      'We provide factual, data-driven findings and never rely on fear-driven upselling.',
    ],
  },
  {
    title: 'Professionalism Without Borders',
    points: [
      'We maintain a strict no-conflict policy against representing opposing parties in the same corporate or legal dispute.',
      'The same IndieBim standard applies whether the project involves a startup in Pune or a government-affiliated environment in Delhi.',
      'Every project is overseen from Mumbai to maintain a single point of high-level accountability for pan-India operations.',
    ],
  },
];

const trustStats = [
  { value: '2019', label: 'Established' },
  { value: '15+', label: 'Years Team Experience' },
  { value: '24GHz', label: 'RF Sweep Capability' },
  { value: 'Mumbai', label: 'Headquartered' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const heroFade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01 },
};

function SectionHeading({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">{tag}</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] pt-32 pb-18">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.8], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_24%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              {...heroFade}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800"
            >
              <ShieldCheck className="h-4 w-4" />
              About Indiebim
            </motion.div>

            <motion.h1
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Technical surveillance protection with a minimal, disciplined edge.
            </motion.h1>

            <motion.p
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              Indiebim Technology Solutions Private Limited is an internationally recognized technical security company,
              incorporated in 2019 and headquartered in Andheri West, Mumbai. We specialize in identifying and
              neutralizing sophisticated electronic threats that put corporate confidentiality, executive privacy, and
              personal security at risk.
            </motion.p>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <motion.div
                whileHover={{ y: -2, borderColor: 'rgba(8,145,178,0.35)' }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-cyan-700" />
                Andheri West, Mumbai
              </motion.div>
              <motion.div
                whileHover={{ y: -2, borderColor: 'rgba(8,145,178,0.35)' }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                <UserRoundCheck className="h-4 w-4 text-cyan-700" />
                Fortune 500, Government, VIP and C-suite coverage
              </motion.div>
            </motion.div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.26 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Book a Confidential Assessment
              </Link>
              <a
                href="tel:+919967107077"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                +91 99671 07077
              </a>
            </motion.div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.32 }}
              className="mt-8 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-cyan-700">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-cyan-700">About Us</span>
            </motion.div>
          </div>

          <motion.div
            {...heroFade}
            transition={{ ...heroFade.transition, delay: 0.18 }}
            className="grid gap-4 self-start sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="sm:col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl"
            >
              <Image
                src="/images/why-us.jpeg"
                alt="Indiebim surveillance inspection"
                width={900}
                height={620}
                className="h-[260px] w-full object-cover opacity-90 transition duration-700 hover:scale-[1.03] sm:h-[320px]"
                priority
              />
              <div className="border-t border-white/10 px-5 py-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Technical Counter-Surveillance</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Debugging services, cyber TSCM reviews, and discreet protection for sensitive environments.
                </p>
              </div>
            </motion.div>

            {trustStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                transition={{ duration: 0.22 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              {...fadeUp}
              className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-lg sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Why Choose Indiebim</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Focused on TSCM, not generic investigation work.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                With more than 15 years of combined specialist experience in our core team, Indiebim operates far
                beyond the scope of a conventional detective agency. We focus exclusively on technical surveillance
                counter-measures and debugging services where discretion, speed, and precision matter.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="grid gap-4"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Company Profile</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  We protect corporate leaders, government agencies, celebrities, and high net-worth individuals from
                  covert listening devices, unauthorized radio transmissions, GPS trackers, covert cameras, and
                  digitally assisted surveillance.
                </p>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Training</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Internationally trained specialists from USA and Israel
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Coverage</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Corporate, residential, aviation, marine, and cyber TSCM
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {experienceAreas.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">0{index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Expert Team"
            title="Internationally trained specialists with practical field experience."
            description="The Indiebim team combines TSCM, risk management, cyber defense, and ethical hacking expertise to address both physical and network-based surveillance threats."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md sm:grid-cols-[124px_1fr]"
              >
                <div className="relative h-36 bg-slate-100 sm:h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom p-3 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 124px"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{member.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Equipment and Technology"
            title="Advanced TSCM tools for active and dormant threat detection."
            description="Indiebim deploys a tactical equipment stack designed to expose both active and dormant threats across boardrooms, residences, vehicles, aircraft, yachts, and executive travel environments."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-shadow duration-300 hover:shadow-md"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Our Process</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">A structured debugging process for sensitive assignments.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Every assignment follows a disciplined protocol so findings are reliable, documented, and immediately useful for security hardening.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-0 hidden xl:block">
              <div className="absolute left-[8%] right-[8%] top-[96px] h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="absolute left-[14%] right-[14%] top-[112px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute left-[18%] right-[18%] top-[88px] h-24 rounded-full bg-cyan-400/8 blur-3xl" />
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:items-stretch">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-x-5 top-3 h-24 rounded-full bg-cyan-400/12 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-5 shadow-[0_22px_50px_rgba(2,6,23,0.26)] backdrop-blur sm:p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_34%)] opacity-80" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/30 to-cyan-300/0" />

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <motion.div
                              animate={{ opacity: [0.45, 0.95, 0.45], scale: [0.96, 1.08, 0.96] }}
                              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.18, ease: 'easeInOut' }}
                              className="absolute inset-0 rounded-2xl bg-cyan-400/40 blur-md"
                            />
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-cyan-300">
                              <span className="text-sm font-black">0{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                              Stage {index + 1}
                            </p>
                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Secure Workflow
                            </p>
                          </div>
                        </div>

                        {index < processSteps.length - 1 && (
                          <div className="hidden xl:flex flex-col items-end gap-2 text-cyan-300/70">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Next
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="h-px w-8 bg-gradient-to-r from-cyan-300/70 to-transparent" />
                              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 min-h-[76px]">
                        <h3 className="max-w-[12rem] text-[1.55rem] font-black leading-[1.08] tracking-tight text-white">
                          {step.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex flex-1 items-start gap-3 border-t border-white/8 pt-4">
                        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
                        <p className="text-[14px] leading-7 text-slate-300">{step.detail}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                        <div className="inline-flex min-w-[84px] justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Stage {index + 1}
                        </div>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12, ease: 'easeInOut' }}
                          className="h-px flex-1 bg-gradient-to-r from-cyan-300/30 to-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Ethics"
            title="The national standard for technical security in India."
            description="At IndieBim Technology Solutions Private Limited, our mission is to provide a shield of privacy across the Indian subcontinent. We do not just clear rooms. We protect the intellectual property and confidential conversations that drive India’s economy."
          />

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute right-0 top-32 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
            </div>

            <div className="relative grid gap-5 md:grid-cols-2">
              {ethicsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200/90 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
                >
                  <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <motion.div
                            animate={{ opacity: [0.45, 0.95, 0.45], scale: [0.96, 1.08, 0.96] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-2xl bg-cyan-300/35 blur-md"
                          />
                          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                            <span className="text-sm font-black">0{index + 1}</span>
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                          Ethics Pillar
                        </p>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                        Verified Standard
                      </div>
                    </div>

                    <h3 className="mt-5 max-w-[20rem] text-2xl font-black leading-tight text-slate-950">
                      {section.title}
                    </h3>

                    <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-300 via-cyan-200 to-transparent" />

                    <div className="mt-6 space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0.7, x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.18, delay: pointIndex * 0.02 }}
                          className="flex gap-3 rounded-[18px] border border-slate-100 bg-slate-50/80 px-4 py-3"
                        >
                          <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                          <p className="text-sm leading-7 text-slate-600">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="relative mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              From the Himalayas to the Indian Ocean, IndieBim is committed to securing the conversations that shape India&apos;s future. Our ethics are as robust as our technology.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
