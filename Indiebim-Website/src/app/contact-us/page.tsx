'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldAlert,
  ShieldCheck,
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

const contactCards = [
  {
    title: 'Headquarters',
    detail:
      'A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053',
    icon: MapPin,
  },
  {
    title: '24/7 Response Line',
    detail: '+91 9967107077',
    subDetail: 'Primary confidential response contact',
    icon: Phone,
  },
  {
    title: 'Office Line',
    detail: '022 4014 3155',
    subDetail: 'General coordination and scheduling',
    icon: Clock3,
  },
  {
    title: 'Secure Email',
    detail: 'info@indiebim.com',
    subDetail: 'For discreet written enquiries',
    icon: Mail,
  },
];

const engagementPoints = [
  'Confidential handling from first contact to final report',
  'Pan-India deployment for corporate, residential, and executive cases',
  'Structured response for TSCM, bug sweeping, and cyber TSCM enquiries',
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#f7fafc] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.8], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_50%,#020617_100%)]"
        />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-3xl pt-2">
            <motion.div
              {...heroFade}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100"
            >
              <ShieldCheck className="h-4 w-4" />
              Secure Contact
            </motion.div>

            <motion.h1
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Contact IndieBim with discretion, speed, and confidence.
            </motion.h1>

            <motion.p
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-300 sm:text-lg"
            >
              Reach our specialists for confidential TSCM, debugging, cyber TSCM, and executive privacy support.
              Every enquiry is handled as a sensitive security communication.
            </motion.p>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Mumbai HQ
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Pan-India response capability
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                TSCM, bug sweep, cyber security
              </div>
            </motion.div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.26 }}
              className="mt-8 flex items-center gap-2 text-sm text-slate-400"
            >
              <Link href="/" className="transition hover:text-cyan-300">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-cyan-300">Contact Us</span>
            </motion.div>
          </div>

          <motion.div
            {...heroFade}
            transition={{ ...heroFade.transition, delay: 0.18 }}
            className="grid gap-4 self-start"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Response Standard</p>
              <h2 className="mt-4 text-2xl font-black text-white">Sensitive enquiries are treated as operational matters.</h2>
              <div className="mt-5 space-y-3">
                {engagementPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-400">Emergency phone response</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">Mumbai</p>
                <p className="mt-1 text-sm text-slate-400">Central command base</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <motion.div
                {...fadeUp}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Contact Channels</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                  Use the channel that fits the urgency of your situation.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  For urgent concerns, call directly. For planned assessments or structured security discussions, use
                  the enquiry form so our team can prepare the right response path.
                </p>
              </motion.div>

              <div className="mt-5 grid gap-4">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const content =
                    card.title === 'Secure Email' ? (
                      <a href="mailto:info@indiebim.com" className="hover:text-cyan-700">
                        {card.detail}
                      </a>
                    ) : card.title === '24/7 Response Line' ? (
                      <a href="tel:+919967107077" className="hover:text-cyan-700">
                        {card.detail}
                      </a>
                    ) : card.title === 'Office Line' ? (
                      <a href="tel:02240143155" className="hover:text-cyan-700">
                        {card.detail}
                      </a>
                    ) : (
                      card.detail
                    );

                  return (
                    <motion.div
                      key={card.title}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">{card.title}</p>
                          <p className="mt-2 text-base font-semibold leading-7 text-slate-900">{content}</p>
                          {card.subDetail && <p className="mt-1 text-sm leading-7 text-slate-500">{card.subDetail}</p>}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              {...fadeUp}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Confidential Enquiry</p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950">Request a secure assessment.</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 shadow-sm">
                  <ShieldAlert className="h-5 w-5" />
                </div>
              </div>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Service Required</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500">
                      <option>Corporate TSCM Service</option>
                      <option>Residential TSCM Service</option>
                      <option>Cyber TSCM Service</option>
                      <option>Bug Sweeping</option>
                      <option>Aircraft or Marine Sweep</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Preferred Response</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500">
                      <option>Phone Call</option>
                      <option>Email</option>
                      <option>Either is fine</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe the location, concern, or type of assessment required..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm leading-7 text-slate-600">
                    Share only the details needed for scheduling. Highly sensitive operational specifics can be discussed
                    through a cleaner channel after first contact.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Send Secure Message
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  By submitting this form, you acknowledge that your enquiry will be handled under strict confidentiality.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
