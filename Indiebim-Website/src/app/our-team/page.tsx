'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  MapPin,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
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

const leadership = [
  {
    name: 'Wahid Shaikh',
    role: 'CEO and TSCM Expert',
    image: '/images/wahib.png',
    summary:
      'Bringing 12+ years of experience across Data Leakage Protection, Privacy Prevention, and Cyber Security. His expertise bridges the gap between physical debugging and digital information security.',
    label: 'Executive Lead',
  },
  {
    name: 'RK Chaudhry',
    role: 'Senior TSCM Expert',
    image: '/images/rk.png',
    summary:
      'A veteran in the field with 15+ years of experience in high-level bug sweeping, corporate investigation, and technical counter-intelligence.',
    label: 'Field Intelligence',
  },
  {
    name: 'Prasanna Venkatesan',
    role: 'Cyber Security and Risk',
    image: '/images/author-5.png',
    summary:
      'Educated and trained in the USA with 13+ years of experience and certifications including ISO 27001 Lead Auditor and CRISP.',
    label: 'Cyber Risk',
  },
];

const tacticalSupport = [
  {
    name: 'Munir Ahmed',
    role: 'Technical and Tactical Sweep Support',
    image: '/images/munir.png',
    summary:
      'Focused on the physical and electronic execution of sweeps, with 4 years of specialized experience in debugging and corporate security.',
  },
  {
    name: 'Dev Dhankar',
    role: 'Ethical Hacker',
    image: '/images/author-6.png',
    summary:
      'Educated in the USA and brings the red-team perspective by identifying how attackers exploit network and web application vulnerabilities to plant digital bugs.',
  },
];

const specializations = [
  {
    title: 'In-Conference Monitoring',
    detail:
      'Live monitoring during corporate board meetings to detect active transmissions such as laser or infrared eavesdropping while they happen.',
    icon: Radar,
  },
  {
    title: 'Cyber TSCM',
    detail:
      'Focused coverage of Wi-Fi, Bluetooth, cellular networks, IMSI catchers, and other wireless vulnerabilities that traditional detectives may overlook.',
    icon: Target,
  },
  {
    title: 'Multi-Platform Sweeps',
    detail:
      'Operational experience across offices, aircraft inspections, and marine or watercraft debugging for high-profile clients.',
    icon: BriefcaseBusiness,
  },
];

const trustStats = [
  { value: '2019', label: 'Established' },
  { value: '15+', label: 'Years Core Experience' },
  { value: 'Mumbai', label: 'Rapid Response Base' },
  { value: 'High-Security', label: 'Client Environments' },
];

const companyOverview = [
  'Incorporated in 2019 with a core team bringing 15+ years of industry experience.',
  'Headquartered in Andheri West, Mumbai for fast-response deployments across major commercial hubs.',
  'Known for supporting corporates and government-related entities during sensitive security audits.',
  'Often cited for military and government agency backgrounds that align with clearance-level work.',
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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{text}</p>
    </div>
  );
}

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] pb-24 text-slate-900">
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
          <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="max-w-3xl">
              <motion.div
                {...heroFade}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800"
              >
                <Users className="h-4 w-4" />
                Our Team
              </motion.div>

              <motion.h1
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.08 }}
                className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
              >
                Modern security work needs a team that looks sharp and thinks sharper.
              </motion.h1>

              <motion.p
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.14 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Indiebim brings together technical counter-surveillance, cyber risk awareness, and field execution in one compact, high-trust team built for sensitive environments.
              </motion.p>

              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.2 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-cyan-600" />
                  TSCM and counter-surveillance specialists
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  <MapPin className="h-4 w-4 text-cyan-600" />
                  Andheri West, Mumbai
                </div>
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
                <span className="text-cyan-700">Our Team</span>
              </motion.div>
            </div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.18 }}
              className="grid gap-4 md:grid-cols-[1.3fr_0.7fr] lg:grid-cols-1"
            >
              <div className="overflow-hidden rounded-[26px] border border-white/70 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.07)]">
                <div className="relative h-[300px]">
                  <Image
                    src="/images/3-1-1.jpg"
                    alt="Indiebim team profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Team Profile</p>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                      Leadership, tactical sweep operators, and cyber specialists working in sync across high-security assignments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {trustStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22 }}
                    className="rounded-[20px] border border-white/70 bg-white/90 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            label="Leadership"
            title="The core people behind the work."
            text="The team combines executive judgment, field-tested counter-surveillance experience, and cyber risk awareness, creating a stronger response profile than a standard security vendor."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {leadership.map((member, index) => (
              <motion.article
                key={member.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[26px] border border-white/70 bg-white/95 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="bg-[linear-gradient(180deg,#effcff_0%,#f8fafc_100%)] px-6 pt-6">
                  <div className="relative mx-auto h-[300px] w-full max-w-[220px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 1280px) 33vw, 220px"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
                    <Sparkles className="h-3.5 w-3.5" />
                    {member.label}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{member.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/70 py-16 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionIntro
                label="Support Crew"
                title="Execution support with technical depth."
                text="Beyond leadership, the team includes specialists focused on on-ground sweep operations and red-team thinking, which helps bridge physical and network-led surveillance risks."
              />

              <div className="mt-8 grid gap-4">
                {tacticalSupport.map((member, index) => (
                  <motion.article
                    key={member.name}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="grid overflow-hidden rounded-[22px] border border-white/70 bg-white/95 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:grid-cols-[160px_1fr]"
                  >
                    <div className="bg-[linear-gradient(180deg,#f0fdfa_0%,#f8fafc_100%)] p-4">
                      <div className="relative mx-auto h-40 w-full max-w-[122px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain object-bottom"
                          sizes="(max-width: 768px) 100vw, 122px"
                        />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Support 0{index + 1}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-slate-950">{member.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">{member.role}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{member.summary}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <motion.div
              {...fadeUp}
              className="rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.15)] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Field Advantage</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">
                Physical sweeps and cyber awareness work best when they are not separated.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                This overlap helps Indiebim spot planted hardware, compromised infrastructure, and network-assisted monitoring with more confidence and speed.
              </p>

              <div className="mt-8 space-y-4">
                {companyOverview.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            label="Specializations"
            title="Where the team adds the most value."
            text="Indiebim is positioned for assignments where timing, discretion, and technical depth all need to show up together."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {specializations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[22px] border border-white/70 bg-white/95 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fcff_0%,#ffffff_48%,#eef7fb_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />
              <div className="absolute inset-y-0 left-[30%] hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
            </div>

            <div className="relative grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#06131d_0%,#0f2432_100%)] p-8 text-white lg:border-b-0 lg:border-r lg:border-slate-800/80 lg:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white/10 text-cyan-200 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                  <BadgeCheck className="h-8 w-8" />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                  Professional Note
                </p>
                <p className="mt-3 max-w-[16rem] text-sm leading-7 text-slate-300">
                  Sensitive work is judged by restraint, process integrity, and how calmly a team performs under pressure.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                      Operating Signal
                    </p>
                    <p className="mt-1 text-sm text-white">Clearance-minded execution</p>
                  </div>
                  <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                      Team Standard
                    </p>
                    <p className="mt-1 text-sm text-white">Discreet, documented, accountable</p>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-800 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  Team Credibility
                </div>
                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-[2.85rem]">
                  Sensitive assignments need more than credentials. They need discipline.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Indiebim is often cited for having team members with military and government agency backgrounds, reinforcing the operational discipline expected in high-security environments.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[18px] border border-white/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Mindset</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Mission-first decision making</p>
                  </div>
                  <div className="rounded-[18px] border border-white/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Method</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Structured sweep execution</p>
                  </div>
                  <div className="rounded-[18px] border border-white/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Outcome</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Higher trust in critical rooms</p>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-[0_16px_35px_rgba(8,145,178,0.25)]"
                >
                  Connect with the team
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
