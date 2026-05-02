import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BatteryWarning,
  Building2,
  Eye,
  Landmark,
  PhoneCall,
  Radio,
  ShieldAlert,
  Siren,
  Wifi,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Counter-Surveillance Warning Signs | IndieBim',
  description:
    'Learn the warning signs of bugging in 2026, understand modern surveillance risks, and follow IndieBim protocol for secure response.',
};

const threatLandscape = [
  {
    title: 'Corporate Espionage',
    detail: 'Competitors seeking trade secrets, tender bids, or client lists.',
    icon: Building2,
  },
  {
    title: 'Political Surveillance',
    detail: 'Covert monitoring to gain leverage during high-pressure campaigns or negotiations.',
    icon: Landmark,
  },
  {
    title: 'High-Net-Worth Individuals (HNI)',
    detail: 'Vulnerability to blackmail, ransom, or asset-tracking.',
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
    id: '1',
    title: 'Physical Anomalies in Your Environment',
    icon: Eye,
    signs: [
      'Unexplained wall dust near outlets or vents, suggesting recent tampering.',
      'Wall plates, light switches, or smoke detectors are slightly askew.',
      'A new desk clock, power bank, or electronic accessory arrives from an unexpected source.',
      'Small items on your desk or in your vehicle appear displaced or missing for short periods.',
    ],
  },
  {
    id: '2',
    title: 'Technical and Electronic Interference',
    icon: PhoneCall,
    signs: [
      'Unusual popping, scratching, or static on calls that was not present earlier.',
      'Clicking or humming sounds from an idle handset, suggesting possible hot-mic behavior.',
      'Radio or TV ghosting/static appears near certain zones of a room.',
      'Smartphone or laptop battery drains rapidly and devices feel unusually hot even when not in active use.',
    ],
  },
  {
    id: '3',
    title: 'Behavioral Red Flags',
    icon: Siren,
    signs: [
      'Competitors appear to know confidential bid numbers or internal strategy before announcement.',
      'People outside your trusted circle know private business or family conversations.',
      'A utility van repeatedly parks near your location with no visible work activity.',
      'Frequent wrong-number or silent calls where callers disconnect immediately.',
    ],
  },
  {
    id: '4',
    title: 'Security System Glitches',
    icon: Wifi,
    signs: [
      'Alarms and motion sensors trigger randomly without clear cause.',
      'Unnamed Wi-Fi networks appear with strong nearby signals around your office or residence.',
    ],
  },
];

const nextSteps = [
  'Stop Talking: Do not discuss your suspicions in the suspected area.',
  'Use a Clean Line: Contact IndieBim from a location at least 100 meters away from the suspected site.',
  'Use a Secure Device: Use a new prepaid phone or a public line to initiate contact.',
  'Request a Professional Audit: Our USA and Israel-trained specialists deploy military-grade spectrum analyzers for scientific clearance.',
];

export default function WarningSignsOfBuggingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf7fb_52%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%)] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.1),transparent_24%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">
              <ShieldAlert className="h-4 w-4" />
              Threat Intelligence Alert
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technical Counter-Surveillance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700">
                Identifying the Warning Signs of Bugging
              </span>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              In 2026, eavesdropping and covert surveillance have reached a dramatic peak. Whether it is a high-stakes
              corporate merger in Bandra-Kurla Complex (BKC), a sensitive government contract in New Delhi, or a
              high-asset divorce in South Mumbai, the threat is real and the technology is affordable for adversaries.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              The sale of stolen intelligence is a multi-billion dollar industry. IndieBim Technology Solutions Private
              Limited provides the technical shield you need to identify these threats before they cause irreparable
              damage to your reputation, competitiveness, and bottom line.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-cyan-700">
                Home
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span className="text-cyan-700">Warning Signs of Bugging</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">The Modern Threat Landscape</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {threatLandscape.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">20 Critical Warning Signs You Are Being Bugged</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              If you notice any of the following, do not ignore them. These are the physical and technical
              fingerprints of professional surveillance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {warningGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.id} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start gap-4">
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
                      <div key={sign} className="flex gap-3 rounded-[1.4rem] border border-slate-200 bg-white px-4 py-4">
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
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">The IndieBim Protocol</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">What to do next?</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                If you identify even two signs, your privacy may already be at risk. Do not attempt to find the device
                yourself. Professional bugs can include tamper alerts that notify operators, allowing evidence to be
                wiped or tactics to change before a professional sweep begins.
              </p>
            </div>

            <div className="grid gap-4">
              {nextSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 font-black text-cyan-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{step}</p>
                </div>
              ))}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Request Professional Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
