import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Ban,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clapperboard,
  FileWarning,
  Landmark,
  Lock,
  Phone,
  Radio,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TSCM Myths vs. Reality | IndieBim',
  description:
    'Separate Hollywood fiction from 2026 TSCM reality. Pre-sweep protocol, ITSAR and DoT regulatory context, and how IndieBim approaches scientific counter-surveillance.',
};

const mythRealityPairs = [
  {
    myth: 'I’ll hear a clicking sound or static on the line if I’m bugged.',
    reality:
      'Modern 2026 digital bugs are completely silent. They use encrypted data bursts that do not interfere with call quality.',
    icon: Radio,
  },
  {
    myth: 'I can use a mobile app to find hidden cameras.',
    reality:
      'Phone apps only find basic, unsecured consumer Wi-Fi cameras. They cannot detect hard-wired, professionally encrypted, or non-transmitting (store-and-forward) devices.',
    icon: Smartphone,
  },
  {
    myth: 'If the room is swept once, I’m safe forever.',
    reality:
      'A sweep is a point-in-time snapshot. Surveillance is often opportunistic—planted just before a major board meeting or after a cleaning crew has visited.',
    icon: ShieldCheck,
  },
];

const preSweepSteps = [
  {
    title: 'The golden rule',
    body: 'Never discuss your suspicions in the area you think is bugged.',
    icon: Ban,
    tone: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Secure communication',
    body: 'Contact IndieBim from a public location or using a brand-new burner phone and SIM card.',
    icon: Phone,
    tone: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Business as usual',
    body: 'Do not change your behavior. If someone realizes you are onto them, they may remotely deactivate the bug—making it harder (though not impossible) for professional equipment to find.',
    icon: Building2,
    tone: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Limit need to know',
    body: 'Only the absolute minimum number of people—ideally just the CEO or Head of Security—should know a sweep is scheduled.',
    icon: Users,
    tone: 'from-emerald-500 to-teal-500',
  },
];

export default function TscmMythsVsRealityPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_42%,#f8fafc_100%)] pb-24 pt-32 text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Hero */}
      <section className="relative border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_10%_-20%,rgba(34,211,238,0.12),transparent),radial-gradient(ellipse_70%_50%_at_95%_0%,rgba(99,102,241,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
            <Clapperboard className="h-4 w-4 text-cyan-600" />
            Trust &amp; clarity
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            TSCM myths vs.{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
              reality
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Many clients hesitate because of what they have seen in films. Clearing that up builds immediate trust in a
            professional, scientific approach—not drama, evidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-cyan-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="font-medium text-cyan-700">TSCM Myths vs. Reality</span>
          </div>
        </div>
      </section>

      {/* Myth vs Reality */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">What Hollywood gets wrong</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Three myths we hear in almost every briefing
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {mythRealityPairs.map((pair, i) => {
            const Icon = pair.icon;
            return (
              <article
                key={i}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative border-b border-slate-100 bg-gradient-to-br from-rose-50/90 to-orange-50/50 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-rose-700">
                      <FileWarning className="h-3.5 w-3.5" />
                      Myth
                    </div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm ring-1 ring-rose-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-bold leading-snug text-slate-900">&ldquo;{pair.myth}&rdquo;</p>
                  </div>
                  <div className="relative bg-gradient-to-br from-cyan-50/50 to-white p-6 sm:p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-800">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Reality
                    </div>
                    <p className="text-base leading-relaxed text-slate-700 sm:text-[1.05rem]">{pair.reality}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pre-Sweep Protocol */}
      <section className="relative border-y border-slate-200 bg-white/80 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-800">
              <Lock className="h-3.5 w-3.5" />
              Client action plan
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Pre-sweep protocol</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical steps so you can reach us without tipping off anyone monitoring your space.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {preSweepSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:bg-white hover:shadow-md"
                >
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${step.tone}`} />
                  <div className="flex gap-4 pl-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm ring-1 ring-slate-200/80">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Step {i + 1}</p>
                      <h3 className="mt-1 text-xl font-black text-slate-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{step.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2026 Regulatory */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.2)]">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <Landmark className="h-4 w-4" />
                2026 India regulatory update
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                The expert edge: telecom security &amp; ITSAR
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Under the{' '}
                <strong className="font-semibold text-white">Telecom Security Amendment Rules (2026)</strong>, the
                Indian government has tightened{' '}
                <strong className="font-semibold text-cyan-200">ITSAR</strong>—Indian Telecommunication Security
                Assurance Requirements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Many low-cost imported communication devices—routers, VoIP phones, Wi-Fi access points—now face mandatory
                security certification expectations in India. Uncertified gear is not only a technical risk; it can sit in
                a grey zone on legal compliance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">IndieBim value</p>
                  <p className="mt-3 text-lg font-bold leading-snug text-white">
                    We do not only hunt bugs—we help audit whether your hardware posture aligns with{' '}
                    <span className="text-cyan-200">2026 Department of Telecommunications (DoT)</span> expectations.
                  </p>
                </div>
              </div>
              <Link
                href="/compliance-corner"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Read Compliance Corner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            Book a confidential consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/technical-counter-surveillance"
            className="text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-cyan-700 hover:underline"
          >
            Technical counter-surveillance overview
          </Link>
        </div>
      </section>
    </div>
  );
}
