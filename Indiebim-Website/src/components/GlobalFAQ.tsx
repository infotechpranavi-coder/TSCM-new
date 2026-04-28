'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, ShieldCheck } from 'lucide-react';

const faqItems = [
  {
    question: 'What is a bug sweeping or TSCM service?',
    answer:
      'A TSCM service checks offices, homes, meeting rooms, and vehicles for hidden microphones, cameras, trackers, and unauthorized wireless devices.',
  },
  {
    question: 'Who should book a professional sweep?',
    answer:
      'Corporate teams, executives, law firms, HNIs, and anyone handling sensitive conversations should consider a sweep when privacy or information leakage is a concern.',
  },
  {
    question: 'How long does a typical inspection take?',
    answer:
      'Most smaller sites take a few hours, while larger offices or complex environments can take longer depending on the risk level and inspection scope.',
  },
  {
    question: 'Can hidden devices be found even if they are switched off?',
    answer:
      'Yes. Professional inspections use methods that can identify dormant or non-transmitting electronics, not just active RF signals.',
  },
  {
    question: 'Do you support residential and corporate locations?',
    answer:
      'Yes. Services can be tailored for homes, boardrooms, hotel stays, executive cabins, and other privacy-sensitive spaces.',
  },
  {
    question: 'What should I do if I suspect a room is compromised?',
    answer:
      'Avoid discussing sensitive topics in that space, limit device use there, and contact a trusted specialist from a safer location for a proper assessment.',
  },
];

export default function GlobalFAQ() {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<number | null>(null);

  if (pathname === '/faq') {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ecfeff_45%,#f8fafc_100%)] py-16 sm:py-20">
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_top_left,rgba(14,116,144,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">
              <ShieldCheck className="h-4 w-4" />
              Quick FAQ
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Link
            href="/faq"
            className="hidden rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-800 sm:inline-flex"
          >
            View Full FAQ
          </Link>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div key={item.question} className="border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircleQuestion className="h-5 w-5 shrink-0 text-cyan-700" />
                    <p className="text-base font-semibold text-slate-900 sm:text-lg">{item.question}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen ? (
                  <div className="pr-8 pt-1">
                    <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/faq"
            className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-800"
          >
            View Full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
