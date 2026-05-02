import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  CircleAlert,
  Clock3,
  FileCheck2,
  Gavel,
  Landmark,
  Lock,
  Shield,
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
    title: 'CCTV Hardware Rule: STQC + BIS Becomes Mandatory',
    icon: Camera,
    mandate: 'Deadline: April 1, 2026',
    points: [
      'Effective April 1, 2026, only CCTV cameras that meet Essential Requirements and carry both STQC and BIS certification can be legally sold, manufactured, or imported in India.',
      'Older systems may contain hardcoded backdoors or unencrypted firmware. The 2026 rules are intended to ensure surveillance hardware is secure by design.',
      'IndieBim provides compliance audits for existing infrastructure to identify hardware that may become unsupported or illegal for expansion after the deadline.',
    ],
  },
  {
    id: '02',
    title: 'DPDP Act: Surveillance Data Is Personal Data',
    icon: Lock,
    mandate: 'Status: Active',
    points: [
      'Surveillance footage is treated as digital personal data under the DPDP framework, making legal and technical safeguards essential.',
      'If you record employees or the public, you act as a data fiduciary and are required to implement reasonable security safeguards to prevent data breaches.',
      'Non-compliance or a data breach linked to negligent security can expose an organization to penalties up to Rs 250 crore.',
      'IndieBim includes a privacy perimeter audit in TSCM-led engagements to identify ghost signals, unauthorized network taps, and surveillance leakage risks.',
    ],
  },
  {
    id: '03',
    title: 'ITSAR & Telecom Security: DoT Tightened Controls',
    icon: Wifi,
    mandate: 'Status: Active (Jan 2026)',
    points: [
      'DoT security updates in 2026 have tightened ITSAR expectations for telecom and connected enterprise hardware.',
      'Routers, Wi-Fi access points, and VoIP systems used in corporate boardrooms and sensitive environments increasingly require security certification alignment.',
      'Many generic network devices are being flagged for unauthorized data exfiltration behavior, including foreign-server traffic patterns.',
      'IndieBim verifies that communication hardware is not only operational, but aligned with ITSAR-era security expectations for high-risk environments.',
    ],
  },
];

const summaryRows = [
  {
    requirement: 'STQC / BIS ER-Compliance',
    status: 'April 1, 2026',
    impact: 'Illegal to buy or install non-certified CCTV hardware.',
  },
  {
    requirement: 'DPDP Act Safeguards',
    status: 'Active',
    impact: 'High penalty risk for surveillance-linked data leaks and weak safeguards.',
  },
  {
    requirement: 'ITSAR Certification',
    status: 'Active (Jan 2026)',
    impact: 'Mandatory security posture alignment for corporate network and telecom hardware.',
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_40%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%)] text-slate-900 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_24%)]" />
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
                <BadgeCheck className="h-4 w-4" />
                Compliance Corner
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                India 2026 Security Mandates
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700">
                  Legal Compliance Is Now Part of Core Security
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                In 2026, security programs are evaluated not only by technical strength but by legal readiness. Non
                alignment can trigger tender rejection, procurement restrictions, system seizure risk, and serious
                liability.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                  CCTV New Rule 2026 India
                </span>
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                  STQC Mandatory for CCTV
                </span>
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                  DPDP Act Surveillance Compliance
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
                >
                  Request a Compliance Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Download 2026 Checklist
                  <FileCheck2 className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: 'Mandates in Scope', value: 'STQC, BIS, DPDP, ITSAR', icon: Landmark },
                { label: 'Risk Surface', value: 'Legal, Procurement, Security', icon: Gavel },
                { label: 'Penalty Signal', value: 'Up to Rs 250 crore', icon: CircleAlert },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-800">{stat.label}</p>
                        <p className="mt-1 text-base font-black text-slate-950">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-cyan-700" />
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">2026 Mandate Timeline</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {complianceSections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    {section.id}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black leading-tight text-slate-950">{section.title}</h3>
                <p className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {section.mandate}
                </p>
                <div className="mt-4 grid gap-3">
                  {section.points.map((point) => (
                    <div key={point} className="flex gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                      <p className="text-sm leading-7 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.9rem] border border-rose-200 bg-[linear-gradient(180deg,#fff1f2_0%,#ffffff_100%)] p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">Why this matters now</p>
            <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
              Compliance failure is no longer a minor documentation issue.
            </h3>
            <div className="mt-5 grid gap-3">
              {[
                'Tender rejection and procurement delay for enterprise/government projects.',
                'Legal exposure if surveillance data controls are weak under DPDP expectations.',
                'Operational risk from non-certified hardware and weak network integrity.',
              ].map((risk) => (
                <div key={risk} className="flex gap-2.5 rounded-xl border border-rose-100 bg-white px-3 py-3">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                  <p className="text-sm text-slate-700">{risk}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <div className="grid grid-cols-1 border-b border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.17em] text-cyan-200 md:grid-cols-[1.1fr_0.7fr_1.2fr]">
              <div className="px-5 py-4">Requirement</div>
              <div className="px-5 py-4">Deadline / Status</div>
              <div className="px-5 py-4">Impact</div>
            </div>
            {summaryRows.map((row) => (
              <div
                key={row.requirement}
                className="grid grid-cols-1 border-b border-white/10 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_1.2fr]"
              >
                <div className="px-5 py-4 text-sm font-semibold text-white">{row.requirement}</div>
                <div className="px-5 py-4 text-sm text-cyan-100">{row.status}</div>
                <div className="px-5 py-4 text-sm text-slate-300">{row.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.9rem] border border-cyan-200 bg-white p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Shield className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">IndieBim advantage</p>
            <h3 className="mt-2 text-3xl font-black leading-tight text-slate-950">
              From vendor to strategic compliance advisor.
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              We do not only identify technical threats. IndieBim delivers a technical compliance report that helps
              teams make procurement, legal, and security decisions with confidence before an audit or incident.
            </p>
          </div>

          <div className="grid gap-3">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-black text-cyan-700">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Is your organization compliant?</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Do not wait for a regulatory audit or a security breach.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
            Book a focused compliance review for CCTV, surveillance data protection, and telecom/network infrastructure.
            Get a clear roadmap to strengthen your legal and technical posture for 2026 mandates.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Compliance Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Request 2026 Checklist for CSOs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
