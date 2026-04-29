import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BatteryWarning,
  Building2,
  Eye,
  PhoneCall,
  Radio,
  ShieldAlert,
  Siren,
  Wifi,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Counter-Surveillance | Warning Signs of Bugging',
  description:
    'Learn the modern threat landscape, warning signs of covert surveillance, and what to do next if you suspect eavesdropping in your office, residence, or vehicle.',
};

const threatLandscape = [
  {
    title: 'Corporate Espionage',
    detail: 'Competitors seeking trade secrets, tender bids, internal strategy, or client lists.',
    icon: Building2,
  },
  {
    title: 'Political Surveillance',
    detail: 'Covert monitoring to gain leverage during high-pressure campaigns or negotiations.',
    icon: Radio,
  },
  {
    title: 'High-Net-Worth Individuals',
    detail: 'Exposure to blackmail, ransom risk, extortion pressure, or asset-tracking.',
    icon: ShieldAlert,
  },
  {
    title: 'Domestic Disputes',
    detail: 'Monitoring during divorce or asset division to gain an unfair legal advantage.',
    icon: AlertTriangle,
  },
];

const warningGroups = [
  {
    id: '01',
    title: 'Physical Anomalies in Your Environment',
    accent: 'from-amber-500 to-orange-500',
    icon: Eye,
    signs: [
      'Unexplained wall dust near electrical outlets or vents, suggesting recent tampering.',
      'Wall plates, light switches, or smoke detectors sitting slightly askew.',
      'New gift items such as desk clocks, power banks, or electronic accessories from an unexpected source.',
      'Small items on your desk or in your vehicle appearing displaced or missing for a short period.',
    ],
  },
  {
    id: '02',
    title: 'Technical and Electronic Interference',
    accent: 'from-cyan-500 to-sky-500',
    icon: PhoneCall,
    signs: [
      'Unusual popping, scratching, or static on mobile or landline calls that was not present before.',
      'Clicking or humming sounds on a handset while it is idle, suggesting a possible hot-mic condition.',
      'Unexplained radio or television interference when you move near certain parts of a room.',
      'A smartphone or laptop getting unusually hot or losing battery rapidly even when not in active use.',
    ],
  },
  {
    id: '03',
    title: 'Behavioral Red Flags',
    accent: 'from-indigo-500 to-violet-500',
    icon: Siren,
    signs: [
      'Competitors seem to know secret bid prices or internal strategy before anything is publicly announced.',
      'People outside your inner circle appear to know private family or business conversations.',
      'A van or utility vehicle is repeatedly parked near your office or home without visible work being done.',
      'Frequent silent or wrong-number calls where the caller hangs up the moment you answer.',
    ],
  },
  {
    id: '04',
    title: 'Security System Glitches',
    accent: 'from-rose-500 to-red-500',
    icon: Wifi,
    signs: [
      'Your alarm system or motion sensors trigger randomly without a clear cause.',
      'New unnamed Wi-Fi networks appear with strong signals near your office or residence.',
      'Network instability increases around sensitive meetings or important travel windows.',
      'Repeated small anomalies appear together even if each one seems minor in isolation.',
    ],
  },
];

const nextSteps = [
  'Stop talking. Do not discuss your suspicions inside the suspected space.',
  'Use a clean line from a location at least 100 meters away from the site.',
  'Use a secure device such as a new prepaid phone or a trusted public line.',
  'Request a professional audit so our specialists can perform a scientific clearance of your premises.',
];

export default function TechnicalCounterSurveillancePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf7fb_52%,#f8fafc_100%)] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.16),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                <ShieldAlert className="h-4 w-4" />
                Threat Intelligence Guide
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Technical Counter-Surveillance
                <span className="block text-cyan-200">Identifying the Warning Signs of Bugging</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                In 2026, eavesdropping and covert surveillance have reached a dramatic peak. Whether it is a
                high-stakes corporate merger in Bandra-Kurla Complex, a sensitive government contract in New Delhi, or
                a high-asset divorce in South Mumbai, the threat is real and the technology is affordable for
                adversaries.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                The sale of stolen intelligence is a multi-billion dollar industry. IndieBim provides the technical
                shield needed to identify these threats before they damage your reputation, competitiveness, or bottom line.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
                <Link href="/" className="transition hover:text-cyan-300">
                  Home
                </Link>
                <ArrowRight className="h-4 w-4" />
                <span className="text-cyan-300">Technical Counter-Surveillance</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Hotspots', value: 'BKC / Delhi / Mumbai' },
                { label: 'Critical Signals', value: '20 Warning Signs' },
                { label: 'Response', value: 'Professional Audit' },
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
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Modern Threat Landscape</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Why technical surveillance risk is no longer a fringe problem.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {threatLandscape.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Critical Warning Signs</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              If you notice these patterns, do not dismiss them.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              These are the physical and technical fingerprints of professional surveillance. Multiple small anomalies
              appearing together are often more important than one dramatic event.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {warningGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${group.accent}`} />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white bg-white text-cyan-700 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Group {group.id}
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">{group.title}</h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {group.signs.map((sign) => (
                      <div
                        key={sign}
                        className="flex gap-3 rounded-[1.4rem] border border-slate-200 bg-white px-4 py-4"
                      >
                        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                        <p className="text-sm leading-7 text-slate-600">{sign}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-rose-200 bg-[linear-gradient(180deg,#fff1f2_0%,#ffffff_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                <BatteryWarning className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">IndieBim Protocol</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                What to do next if even two warning signs are present.
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Do not attempt to find the device yourself. Professional bugs may include tamper alerts that notify the
                operator the moment a device is touched, allowing evidence to be wiped or tactics to change before a
                professional sweep begins.
              </p>
            </div>

            <div className="grid gap-4">
              {nextSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 font-black">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
