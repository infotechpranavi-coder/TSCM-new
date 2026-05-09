'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ShieldAlert, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-white pb-24 pt-28 text-slate-900 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Reach Indiebim the way your situation demands.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            Urgent concern? Call the line. Planning an assessment? Use the form. Every channel is treated as a sensitive security conversation.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Contact Information & Response Protocol */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8 rounded-2xl bg-slate-50 p-8 sm:p-10"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>
              <p className="mt-2 text-slate-600">
                Reach out to us through any of the following channels. We typically respond within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Primary confidential line</p>
                    <a href="tel:+919967107077" className="mt-1 block text-slate-600 hover:text-cyan-600 transition-colors">
                      +91 99671 07077
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Secure email</p>
                    <a href="mailto:info@indiebim.com" className="mt-1 block text-slate-600 hover:text-cyan-600 transition-colors">
                      info@indiebim.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Headquarters</p>
                    <p className="mt-1 text-slate-600">
                      A/514, Crystal Plaza, New Link Road,<br />
                      Veera Desai Industrial Estate, Andheri West,<br />
                      Mumbai, Maharashtra 400053
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h4 className="font-semibold text-slate-900">How we respond</h4>
              <ul className="mt-4 space-y-3">
                {engagementPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-600">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">Request a secure assessment</h2>
              <p className="mt-2 text-sm text-slate-600">
                Share enough for us to route your request. Fine-grained operational detail can wait until we establish a clean channel.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2 mb-4">Your details</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-first" className="text-xs font-semibold text-slate-700">First name</label>
                    <input
                      id="contact-first"
                      type="text"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Given name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-last" className="text-xs font-semibold text-slate-700">Last name</label>
                    <input
                      id="contact-last"
                      type="text"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Family name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="name@organization.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="+91 …"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2 mb-4">Assignment</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700">Service required</label>
                    <select
                      id="contact-service"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      defaultValue={serviceOptions[0]}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-response" className="text-xs font-semibold text-slate-700">Preferred response</label>
                    <select
                      id="contact-response"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    >
                      <option>Phone call</option>
                      <option>Email</option>
                      <option>Either is fine</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="City or region, type of space, and a neutral summary..."
                />
              </div>

              <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-xs text-amber-800 leading-relaxed">
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
                <label htmlFor="contact-consent" className="text-sm text-slate-600 leading-relaxed">
                  I understand this enquiry will be handled under strict confidentiality and used only to respond to my request.
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Send secure message
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                This form does not replace emergency voice contact. For immediate risk, call{' '}
                <a href="tel:+919967107077" className="font-semibold text-cyan-700 hover:underline whitespace-nowrap">+91 99671 07077</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

