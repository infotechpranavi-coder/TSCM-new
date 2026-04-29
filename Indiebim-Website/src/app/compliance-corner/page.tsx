import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  FileCheck2,
  Lock,
  ShieldAlert,
  Wifi,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance Corner | India 2026 Security Mandates',
  description:
    'Navigate India’s 2026 security mandates including STQC and BIS CCTV compliance, DPDP Act safeguards, and ITSAR telecom security requirements.',
};

const complianceSections = [
  {
    id: '01',
    title: 'The April 1, 2026 CCTV Deadline (STQC & BIS)',
    icon: Camera,
    tone: 'from-cyan-500 to-sky-500',
    points: [
      'Effective April 1, 2026, only CCTV cameras that meet Essential Requirements and carry both STQC and BIS certification can be legally sold, manufactured, or imported in India.',
      'Older systems may contain hardcoded backdoors or unencrypted firmware. The 2026 rules are intended to ensure surveillance hardware is secure by design.',
      'IndieBim provides compliance audits for existing infrastructure to identify hardware that may become unsupported or unsuitable for expansion after the deadline.',
    ],
  },
  {
    id: '02',
    title: 'DPDP Act 2026: Data Privacy in Surveillance',
    icon: Lock,
    tone: 'from-indigo-500 to-violet-500',
    points: [
      'Surveillance footage is now treated as digital personal data under the DPDP framework, making legal and technical safeguards essential.',
      'If you record employees or the public, you act as a data fiduciary and are expected to implement reasonable security safeguards to prevent data breaches.',
      'IndieBim includes a privacy perimeter audit in TSCM-led engagements to identify ghost signals, unauthorized network taps, and surveillance leakage risks.',
    ],
  },
  {
    id: '03',
    title: 'ITSAR & Telecom Security (DoT Updates)',
    icon: Wifi,
    tone: 'from-emerald-500 to-teal-500',
    points: [
      'Corporate routers, Wi-Fi access points, and VoIP systems used in sensitive meeting environments increasingly face security certification expectations under Indian telecom security frameworks.',
      'Generic or poorly governed network devices may expose organizations to unauthorized data exfiltration or cross-border leakage concerns.',
      'IndieBim verifies not only whether communication hardware is functioning, but whether it is aligned with current security and integrity expectations for high-risk environments.',
    ],
  },
];

const summaryRows = [
  {
    requirement: 'STQC / BIS ER-Compliance',
    status: 'April 1, 2026',
    impact: 'Non-certified CCTV purchases or expansions create serious compliance risk.',
  },
  {
    requirement: 'DPDP Act Safeguards',
    status: 'Active',
    impact: 'Weak protection around surveillance footage can trigger major legal exposure.',
  },
  {
    requirement: 'ITSAR Certification',
    status: 'Active in 2026',
    impact: 'Corporate network and telecom hardware face stronger scrutiny and certification expectations.',
  },
];

const checklist = [
  'Review CCTV inventory for STQC and BIS alignment before any new installation or procurement.',
  'Treat surveillance footage and access controls as part of your formal privacy and data-protection posture.',
  'Audit routers, Wi-Fi, and VoIP infrastructure used in boardrooms and executive spaces.',
  'Document compliance findings in a technical report before a tender, audit, or incident response situation.',
];

export default function ComplianceCornerPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf7fb_55%,#f8fafc_100%)] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                <BadgeCheck className="h-4 w-4" />
                Strategic Advisory
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Compliance Corner
                <span className="block text-cyan-200">Navigating India&apos;s 2026 Security Mandates</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                In the Indian security market of 2026, compliance is no longer optional. For corporations, government
                agencies, and high-net-worth individuals, security now includes legal and technical compliance.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Failure to align with current standards can expose an organization to tender rejections, infrastructure
                seizures, and serious legal liability. IndieBim positions itself not just as a vendor, but as a
                strategic advisor for high-stakes technical environments.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
                <Link href="/" className="transition hover:text-cyan-300">
                  Home
                </Link>
                <ArrowRight className="h-4 w-4" />
                <span className="text-cyan-300">Compliance Corner</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Mandates', value: 'STQC / BIS / DPDP / ITSAR' },
                { label: 'Risk', value: 'Legal + Technical' },
                { label: 'Outcome', value: 'Future-Proof Shield' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.label}</p>
                  <p className="mt-3 text-lg font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Core Mandates</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The compliance areas security teams can no longer treat as optional.
            </h2>
          </div>

          <div className="grid gap-5">
            {complianceSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${section.tone}`} />
                  <div className="relative grid gap-5 lg:grid-cols-[240px_1fr]">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Section {section.id}
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">{section.title}</h3>
                    </div>

                    <div className="grid gap-4">
                      {section.points.map((point) => (
                        <div
                          key={point}
                          className="flex gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50 px-4 py-4"
                        >
                          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                          <p className="text-sm leading-7 text-slate-600">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Summary Table</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Compliance requirements at a glance.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="grid grid-cols-1 border-b border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1.1fr_0.7fr_1.2fr]">
              <div className="px-6 py-4">Requirement</div>
              <div className="px-6 py-4">Deadline / Status</div>
              <div className="px-6 py-4">Impact on Your Business</div>
            </div>
            {summaryRows.map((row) => (
              <div
                key={row.requirement}
                className="grid grid-cols-1 border-b border-white/10 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_1.2fr]"
              >
                <div className="px-6 py-5 text-sm font-semibold text-white">{row.requirement}</div>
                <div className="px-6 py-5 text-sm text-cyan-100">{row.status}</div>
                <div className="px-6 py-5 text-sm leading-7 text-slate-300">{row.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-cyan-200 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">IndieBim Advantage</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                A technical compliance report that supports security and procurement decisions.
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                IndieBim does not just search for bugs. We help organizations understand whether their wider technical
                shield is legal, supportable, and aligned with evolving compliance expectations before an audit, tender,
                or security incident exposes a weakness.
              </p>
            </div>

            <div className="grid gap-4">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 font-black text-cyan-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{item}</p>
                </div>
              ))}

              <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 px-5 py-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Suggested Lead Magnet</p>
                <h3 className="mt-3 text-xl font-black">Download the 2026 Compliance Checklist for CSOs</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  This page can support a future checklist download, trust badges, and compliance-focused SEO content
                  such as CCTV new rule 2026 India, STQC mandatory for CCTV, and DPDP Act surveillance compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
