import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  Camera,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy is a Right Manifesto | IndieBim',
  description:
    'Explore IndieBim Technology Solutions Private Limited’s Privacy is a Right Manifesto, safe living guide, privacy literacy advocacy, and support framework for victims of corporate and domestic espionage.',
};

const manifestoSections = [
  {
    id: '01',
    title: 'The "Privacy is a Right" Manifesto',
    icon: ShieldCheck,
    tone: 'from-cyan-500 to-sky-500',
    intro:
      'In 2026, privacy is no longer a luxury reserved for the elite; it is a fundamental constitutional right protected under the Digital Personal Data Protection framework.',
    points: [
      '**IndieBim Technology Solutions Private Limited** believes every individual across Mumbai, Delhi, and all of India deserves a life free from illegal intrusion and covert monitoring.',
      '**IndieBim Technology Solutions Private Limited** operates strictly as a technical shield focused on the detection, identification, and neutralization of surveillance threats.',
      'We do not provide services to plant bugs, conduct illegal eavesdropping, or assist in unauthorized spying. Our technology and expertise are built solely to protect, never to invade.',
    ],
  },
  {
    id: '02',
    title: 'The "Safe Living" Individual Guide',
    icon: Lock,
    tone: 'from-indigo-500 to-violet-500',
    intro:
      'Society is safer when individuals are empowered with technical knowledge. This guide helps the general public protect personal spaces from common surveillance threats.',
    points: [
      'The flashlight test: inspect hotel rooms, changing areas, or private rentals for the tell-tale reflection of a hidden camera lens using simple light-source techniques.',
      'App hygiene: audit mobile devices for stalkerware or applications with unauthorized background access to your microphone, camera, and location.',
      'The new gift rule: be cautious of unsolicited electronic gifts. Trojan Horse listening devices are frequently hidden in digital clocks, power banks, or USB chargers.',
      'The IndieBim community promise: if you are a victim of stalking or harassment and lack the resources for a professional sweep, **IndieBim Technology Solutions Private Limited** offers a free 10-minute safety consultation to help secure your immediate environment.',
    ],
  },
  {
    id: '03',
    title: 'Privacy for the Next Generation',
    icon: Users,
    tone: 'from-emerald-500 to-teal-500',
    intro:
      'As leaders in technical security, we believe in teaching the next generation about digital and physical boundaries to foster a safer future.',
    points: [
      '**IndieBim Technology Solutions Private Limited** advocates for privacy literacy in Indian schools and homes.',
      'Education over fear: children should understand that their personal space is their own and recognize when privacy may be compromised without consent.',
      'Building a culture of consent: recording or monitoring someone without explicit permission, whether in a classroom, home, or private setting, is a violation of human respect and dignity.',
    ],
  },
  {
    id: '04',
    title: 'Supporting Victims of Corporate and Domestic Espionage',
    icon: HeartHandshake,
    tone: 'from-rose-500 to-orange-500',
    intro:
      'Behind every unauthorized device there is usually a human story of broken trust. The objective is not only technical recovery, but emotional and legal restoration.',
    points: [
      'Restoring peace of mind: our goal is not just to find a hidden piece of silicon, but to restore the sense of safety that was stolen from you.',
      'Legal empowerment: following a sweep, **IndieBim Technology Solutions Private Limited** provides detailed technical forensic reports that can support legal teams with scientific evidence and professional findings.',
      'We help clients move from uncertainty and fear toward clarity, documentation, and decisive action.',
    ],
  },
];

const footerActions = [
  {
    label: 'Free 10-Min Safety Consultation',
    detail: 'Support for individuals facing stalking, harassment, or immediate privacy anxiety.',
    icon: Sparkles,
  },
  {
    label: 'Safe Living Guidance',
    detail: 'Practical steps for hidden-camera awareness, app hygiene, and everyday caution.',
    icon: Camera,
  },
  {
    label: 'Privacy Literacy Mission',
    detail: 'Advocating for consent, boundaries, and technical awareness in homes and schools.',
    icon: BookOpenCheck,
  },
];

function renderPoint(point: string) {
  const parts = point.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default function PrivacyIsARightPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef7fb_52%,#f8fafc_100%)] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%)] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.1),transparent_24%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">
                <ShieldCheck className="h-4 w-4" />
                Public Interest Manifesto
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Privacy is a Right
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700">
                  The Manifesto for Safer Living and Human Dignity
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                <strong className="font-semibold text-slate-950">IndieBim Technology Solutions Private Limited</strong>{' '}
                believes privacy is not a luxury product. It is a basic human and constitutional right that deserves active
                protection.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                This page brings together our ethical stance, public safety guidance, education mission, and victim-support
                philosophy into one clear statement of purpose.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                <Link href="/" className="transition hover:text-cyan-700">
                  Home
                </Link>
                <ArrowRight className="h-4 w-4" />
                <span className="text-cyan-700">Privacy is a Right</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Principle', value: 'Protect, Never Invade' },
                { label: 'Public Promise', value: 'Free 10-Min Safety Call' },
                { label: 'Focus', value: 'Rights + Safety + Consent' },
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
          <div className="grid gap-5">
            {manifestoSections.map((section) => {
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
                      <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950">{section.title}</h2>
                    </div>

                    <div>
                      <p className="rounded-[1.4rem] border border-slate-100 bg-slate-50 px-5 py-4 text-sm leading-8 text-slate-700 sm:text-base">
                        {section.intro}
                      </p>
                      <div className="mt-5 grid gap-4">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="flex gap-3 rounded-[1.4rem] border border-slate-100 bg-white px-4 py-4"
                          >
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                            <p className="text-sm leading-7 text-slate-600 sm:text-base">{renderPoint(point)}</p>
                          </div>
                        ))}
                      </div>
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
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Community Commitment</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The practical promises behind the manifesto.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {footerActions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white text-cyan-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-7 py-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Secure Next Step</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Contact us securely if your privacy, dignity, or safety may already be at risk.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
              Whether you need a professional sweep, a safety consultation, or technical evidence for legal support,
              <strong className="font-semibold text-white"> IndieBim Technology Solutions Private Limited</strong> is ready
              to help you act calmly and professionally.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Contact Us Securely
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
