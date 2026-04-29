import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  EyeOff,
  Lock,
  PhoneCall,
  ShieldCheck,
  Siren,
  Waypoints,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Protocol | IndieBim Silent Response Guide',
  description:
    'What to do if you suspect eavesdropping in your boardroom, residence, or vehicle. Follow IndieBim’s Silent Response Protocol to protect evidence and avoid alerting an adversary.',
};

const protocolSteps = [
  {
    id: '01',
    title: 'The Golden Rule: Maintain Normalcy',
    icon: EyeOff,
    tone: 'from-amber-500 to-orange-500',
    points: [
      'Do not alert the adversary. Continue your daily routine as if nothing is wrong. Do not change your schedule or stop holding meetings in the suspected area.',
      'Never discuss your suspicions, the possibility of a bug, or your intent to hire a TSCM firm while inside the suspected location, your car, or near your mobile phone.',
    ],
  },
  {
    id: '02',
    title: 'Establish a Clean Communication Channel',
    icon: Waypoints,
    tone: 'from-cyan-500 to-sky-500',
    points: [
      'Do not use suspect devices. Avoid your office landline, personal mobile phone, or home Wi-Fi network.',
      'Go off-grid. Leave the suspected area and move to a public park, busy mall, or hotel lobby at least 200 meters away.',
      'Use a safe device, ideally a brand-new burner phone with a fresh SIM card or a trusted device belonging to someone completely outside your professional circle.',
    ],
  },
  {
    id: '03',
    title: 'Strategic Contact with IndieBim',
    icon: PhoneCall,
    tone: 'from-indigo-500 to-violet-500',
    points: [
      'During the initial call, be prepared to provide the size of the area in square feet and the nature of your suspicion.',
      'Avoid key words. Even on a safe line, keep the initial conversation brief and use a cover story if needed, such as a technical infrastructure audit.',
      'Limit the circle of trust. Only one or two people in your organization should know about the sweep because many leaks are internal and advance notice increases the risk of device removal.',
    ],
  },
  {
    id: '04',
    title: 'Pre-Sweep Preparation',
    icon: Lock,
    tone: 'from-emerald-500 to-teal-500',
    points: [
      'Do not search for the bug yourself. Touching a device may destroy DNA evidence or trigger a silent alert that notifies the spy.',
      'Do not use consumer detectors. Cheap handheld spy-finders often emit signals that professional bugs can detect, causing them to go dormant to evade military-grade equipment.',
      'Ensure our team has full access to all relevant areas, including server rooms, electrical closets, and false ceilings, ideally during late-night or weekend dark hours to maintain discretion.',
    ],
  },
  {
    id: '05',
    title: 'If You Find a Device Before We Arrive',
    icon: AlertTriangle,
    tone: 'from-rose-500 to-red-500',
    points: [
      'Stop and step away. Do not touch it and do not photograph it with a flash.',
      'If you found it accidentally, make a mundane comment such as calling the electrician for a faulty socket tomorrow, then walk away.',
      'Contact us immediately from your safe device and safe location to report that the threat has been physically localized.',
    ],
  },
];

export default function ClientProtocolPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf7fb_52%,#f8fafc_100%)] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_26%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-100">
                <Siren className="h-4 w-4" />
                High Priority Guide
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Client Protocol
                <span className="block text-cyan-200">What to Do if You Suspect Eavesdropping</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                This is the most important piece of content for a worried client. It is designed to move people from
                panic to professional action. In the 2026 security landscape, an adversary may remotely wipe a device
                if they know it is being hunted, so the first 60 minutes matter.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Follow the IndieBim Silent Response Protocol to protect the integrity of the space, preserve evidence,
                and keep your team one step ahead.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
                <Link href="/" className="transition hover:text-cyan-300">
                  Home
                </Link>
                <ArrowRight className="h-4 w-4" />
                <span className="text-cyan-300">Client Protocol</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">Silent Response Protocol</p>
              <h2 className="mt-4 text-2xl font-black text-white">First-response discipline determines investigative success.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Reaction Window', value: 'First 60 Minutes' },
                  { label: 'Safe Distance', value: '200+ Meters' },
                  { label: 'Trusted Contacts', value: '1-2 People Max' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-black text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Response Sequence</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Follow these steps calmly, quietly, and without improvising.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Each step is designed to reduce the chance of alerting an adversary, preserve evidence, and prepare the
              environment for a professional counter-surveillance response.
            </p>
          </div>

          <div className="grid gap-5">
            {protocolSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${step.tone}`} />
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/60 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative grid gap-5 lg:grid-cols-[220px_1fr]">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Step {step.id}
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">{step.title}</h3>
                    </div>
                    <div className="grid gap-4">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex gap-3 rounded-[1.4rem] border border-slate-100 bg-slate-50 px-4 py-4"
                        >
                          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
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
    </div>
  );
}
