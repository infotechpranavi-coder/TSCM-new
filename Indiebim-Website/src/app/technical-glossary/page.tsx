import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Cpu,
  Radio,
  ScanSearch,
  ShieldCheck,
  Thermometer,
  Waves,
  Wifi,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TSCM Technical Glossary | IndieBim',
  description:
    'A client guide to professional counter-measures, explaining RF spectrum, NLJD, burst transmission, carrier current bugs, TDR, thermal imaging, and more.',
};

const glossaryTerms = [
  {
    id: '01',
    term: 'RF Spectrum (Radio Frequency)',
    icon: Radio,
    detail:
      'The electromagnetic field used by wireless devices to transmit data. In a professional sweep, we analyze frequencies from 10 kHz to 24 GHz. While most bugs in India operate in common Wi-Fi or cellular bands, high-end espionage uses ultra-high frequencies to avoid detection.',
  },
  {
    id: '02',
    term: 'NLJD (Non-Linear Junction Detector)',
    icon: Cpu,
    detail:
      'A specialized device used to find electronics even when they are switched off. It works by emitting a signal and looking for a harmonic return, the unique physical signature of the silicon found in all transistors and microchips.',
  },
  {
    id: '03',
    term: 'Burst Transmission',
    icon: Activity,
    detail:
      'A sophisticated eavesdropping tactic where a device records audio for a long period, compresses the file, and bursts the data to a receiver in a fraction of a second. These are nearly impossible to find with standard handheld scanners but are captured by our real-time spectrum analyzers.',
  },
  {
    id: '04',
    term: 'Carrier Current Bug',
    icon: Waves,
    detail:
      'A device that does not use radio waves but instead transmits audio data through a building’s existing AC power lines. This allows a spy to listen from a completely different room or floor by simply plugging a receiver into a wall outlet.',
  },
  {
    id: '05',
    term: 'Harmonic Analysis (2nd & 3rd)',
    icon: ScanSearch,
    detail:
      'The method an NLJD uses to tell the difference between a real bug and scrap metal. The 2nd harmonic indicates a man-made electronic junction, while the 3rd harmonic indicates a natural metallic junction such as a rusted nail or floor grid. Our expertise ensures we do not waste time on false positives.',
  },
  {
    id: '06',
    term: 'TDR (Time Domain Reflectometry)',
    icon: Wifi,
    detail:
      'A technique used to find physical taps on hidden telephone or data cables. By sending an electrical pulse down a wire, we can identify where a splice or unauthorized device has been attached, down to the centimeter.',
  },
  {
    id: '07',
    term: 'Radiometric Thermal Imaging',
    icon: Thermometer,
    detail:
      'The use of high-sensitivity infrared cameras to detect the micro-heat signatures produced by electronic components. Since hidden cameras and microphones generate heat, we can see them through fabric, wood, or inside plastic casings.',
  },
  {
    id: '08',
    term: 'Spread Spectrum (FHSS/DSSS)',
    icon: Radio,
    detail:
      'A method of transmitting a signal across many different frequencies simultaneously or hopping between them rapidly. This makes the signal look like background noise to a basic detector, but our equipment is designed to de-mask these hidden signals.',
  },
  {
    id: '09',
    term: 'Parasitic Tap',
    icon: ShieldCheck,
    detail:
      'An eavesdropping device that steals power directly from the phone line or electrical wire it is monitoring. These never run out of battery and can stay active for years if not professionally detected.',
  },
  {
    id: '10',
    term: 'Near-Field Detection',
    icon: ScanSearch,
    detail:
      'The process of scanning the immediate area within a few feet of a target object for low-power signals. This is essential for finding bugs that only transmit a short distance to a receiver hidden in a nearby room or vehicle.',
  },
];

export default function TechnicalGlossaryPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef7fb_52%,#f8fafc_100%)] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%)] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_26%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">
                <ShieldCheck className="h-4 w-4" />
                Client Guide
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                TSCM Technical Glossary
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700">
                  A Client&apos;s Guide to Professional Counter-Measures
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                At IndieBim Technology Solutions Private Limited, we use international military-grade terminology and
                equipment. This glossary is designed to help our corporate and private clients in Mumbai, Delhi, and
                Bangalore understand the technical concepts behind our elite debugging services.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                <Link href="/" className="transition hover:text-cyan-700">
                  Home
                </Link>
                <ArrowRight className="h-4 w-4" />
                <span className="text-cyan-700">Technical Glossary</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Scan Range', value: '10 kHz - 24 GHz' },
                { label: 'Audience', value: 'Corporate + Private' },
                { label: 'Use Case', value: 'Client Education' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-800">{item.label}</p>
                  <p className="mt-3 text-lg font-black text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Glossary Terms</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Ten concepts clients should understand before a professional sweep.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              These definitions explain how advanced surveillance devices operate and how professional counter-measure
              teams detect them in real-world environments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {glossaryTerms.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/60 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Term {item.id}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">{item.term}</h3>
                      <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{item.detail}</p>
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
