'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const heroFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const engagementPoints = [
  'Confidential handling from first contact to final report',
  'Pan-India deployment for corporate, residential, and executive cases',
  'Structured response for TSCM, bug sweeping, and cyber TSCM enquiries',
];

const serviceOptions = [
  'Corporate TSCM Service',
  'Residential TSCM Service',
  'Cyber TSCM Service',
  'Bug Sweeping',
  'Aircraft or Marine Sweep',
  'Other Enquiry',
] as const;

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] pb-24 pt-28 text-slate-900 sm:pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ecfeff_0%,#f8fafc_45%,#f1f5f9_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_0%_-10%,rgba(34,211,238,0.22),transparent),radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(99,102,241,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(100,116,139,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.09)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
          <motion.div
            {...heroFade}
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition hover:text-cyan-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-cyan-700">Contact</span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.04 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/90 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 shadow-sm backdrop-blur-sm"
              >
                <ShieldCheck className="h-4 w-4" />
                Secure contact
              </motion.div>

              <motion.h1
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.1 }}
                className="mt-6 text-balance text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
              >
                Reach IndieBim the way your situation demands.
              </motion.h1>

              <motion.p
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.16 }}
                className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Urgent concern? Call the line. Planning an assessment? Use the form. Every channel is treated as a
                sensitive security conversation.
              </motion.p>

              <motion.div
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.22 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                  href="tel:+919967107077"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition hover:bg-cyan-700 hover:shadow-cyan-700/30"
                >
                  <Phone className="h-4 w-4" />
                  Call +91 99671 07077
                </a>
                <a
                  href="mailto:info@indiebim.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50/50"
                >
                  <Mail className="h-4 w-4 text-cyan-700" />
                  Email info@indiebim.com
                </a>
              </motion.div>

              <motion.p
                {...heroFade}
                transition={{ ...heroFade.transition, delay: 0.28 }}
                className="mt-6 flex items-start gap-2 text-sm text-slate-500"
              >
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                <span>Phone line monitored for time-sensitive TSCM and debugging enquiries.</span>
              </motion.p>
            </div>

            <motion.div
              {...heroFade}
              transition={{ ...heroFade.transition, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-200/40 via-transparent to-indigo-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_32px_80px_-12px_rgba(15,23,42,0.18)]">
                <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50/80 to-white px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-800">Direct lines</p>
                  <p className="mt-1 text-sm text-slate-600">No account required. Discretion by default.</p>
                </div>
                <div className="divide-y divide-slate-100 p-2">
                  <a
                    href="tel:+919967107077"
                    className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-cyan-50/60"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">24/7 response</p>
                      <p className="mt-1 font-semibold text-slate-950">+91 99671 07077</p>
                      <p className="mt-0.5 text-sm text-slate-600">Primary confidential line</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@indiebim.com"
                    className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Secure email</p>
                      <p className="mt-1 break-all font-semibold text-slate-950">info@indiebim.com</p>
                      <p className="mt-0.5 text-sm text-slate-600">Written enquiries and scheduling</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 rounded-xl p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Headquarters</p>
                      <p className="mt-1 text-sm leading-7 text-slate-700">
                        A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West, Mumbai,
                        Maharashtra 400053
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main: sidebar + form */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:col-span-4 lg:pt-2">
            <motion.div {...fadeUp} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">How we respond</p>
              <h2 className="mt-3 text-xl font-black text-slate-950">Sensitive enquiries stay operational.</h2>
              <ul className="mt-5 space-y-3">
                {engagementPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.06 }}
              className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-2 text-cyan-300">
                <ShieldAlert className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">First contact</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                If you suspect active eavesdropping, follow our silent-response guidance before discussing details on open
                channels.
              </p>
              <Link
                href="/client-protocol"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
              >
                Read client protocol
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </aside>

          {/* Form */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.04 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-16px_rgba(15,23,42,0.12)]">
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-6 sm:px-8 sm:py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Confidential enquiry</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Request a secure assessment</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Share enough for us to route your request. Fine-grained operational detail can wait until we establish a
                  clean channel.
                </p>
              </div>

              <form className="space-y-8 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Your details</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-first" className="text-sm font-medium text-slate-700">
                        First name
                      </label>
                      <input
                        id="contact-first"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Given name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-last" className="text-sm font-medium text-slate-700">
                        Last name
                      </label>
                      <input
                        id="contact-last"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Family name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@organization.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 …"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Assignment</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-service" className="text-sm font-medium text-slate-700">
                        Service required
                      </label>
                      <select
                        id="contact-service"
                        className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:bg-white focus:ring-4"
                        defaultValue={serviceOptions[0]}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-response" className="text-sm font-medium text-slate-700">
                        Preferred response
                      </label>
                      <select
                        id="contact-response"
                        className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:bg-white focus:ring-4"
                      >
                        <option>Phone call</option>
                        <option>Email</option>
                        <option>Either is fine</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="City or region, type of space (office, residence, vehicle), and a neutral summary of the concern…"
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-500/20 transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4"
                  />
                </div>

                <div className="flex flex-col gap-4 rounded-2xl border border-cyan-100 bg-cyan-50/40 p-4 sm:flex-row sm:items-start sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-slate-700">
                    Avoid highly sensitive specifics in this first message if you are unsure about the security of this
                    device or network. We will guide you to a safer discussion path after acknowledgement.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    defaultChecked
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="contact-consent" className="text-sm leading-7 text-slate-600">
                    I understand this enquiry will be handled under strict confidentiality and used only to respond to my
                    request.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition hover:from-cyan-700 hover:to-cyan-800 hover:shadow-cyan-700/30 sm:w-auto sm:min-w-[240px]"
                >
                  <Send className="h-4 w-4" />
                  Send secure message
                </button>

                <p className="text-center text-xs leading-6 text-slate-500 sm:text-left">
                  This form does not replace emergency voice contact. For immediate risk, call{' '}
                  <a href="tel:+919967107077" className="font-medium text-cyan-700 underline-offset-2 hover:underline">
                    +91 99671 07077
                  </a>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
