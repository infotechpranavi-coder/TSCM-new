'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, Send, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const WHATSAPP_HREF =
  'https://wa.me/919967107077?text=Hello%20Team%2C%20I%20would%20like%20to%20discreetly%20discuss%20a%20TSCM%20%2F%20bug%20sweeping%20requirement%20for%20our%20premises.';
const MAPS_URL = 'https://maps.app.goo.gl/jRzPx1emjyTgTUzN9?g_st=iwb';
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=A%2F514%2C+Crystal+Plaza%2C+New+Link+Road%2C+Veera+Desai+Industrial+Estate%2C+Andheri+West%2C+Mumbai%2C+Maharashtra+400053&hl=en&z=16&output=embed';

function createCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b, answer: a + b };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

type Captcha = { a: number; b: number; answer: number };

export default function ContactUs() {
  const [captcha, setCaptcha] = useState<Captcha | null>(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(createCaptcha());
    setCaptchaInput('');
    setCaptchaError('');
  }, []);

  const captchaLabel = captcha
    ? `What is ${captcha.a} + ${captcha.b}?`
    : 'Solve the calculation below';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    if (!captcha) {
      setCaptchaError('Security check is still loading. Please wait a moment.');
      return;
    }

    const parsed = Number.parseInt(captchaInput.trim(), 10);
    if (Number.isNaN(parsed) || parsed !== captcha.answer) {
      setCaptchaError('Incorrect answer. Please solve the calculation and try again.');
      return;
    }
    setCaptchaError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      service: String(formData.get('service') ?? ''),
      preferredResponse: String(formData.get('preferredResponse') ?? ''),
      message: String(formData.get('message') ?? ''),
      consent: formData.get('consent') === 'on',
      captcha: { a: captcha.a, b: captcha.b, answer: parsed },
    };

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setSubmitError(data.error ?? 'Unable to send your message. Please try again.');
        return;
      }

      setSubmitSuccess(true);
      form.reset();
      refreshCaptcha();
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C7E]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">WhatsApp (discreet enquiries)</p>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-slate-600 hover:text-cyan-600 transition-colors"
                    >
                      Message on WhatsApp
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2 mb-4">Your details</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-first" className="text-xs font-semibold text-slate-700">First name</label>
                    <input
                      id="contact-first"
                      name="firstName"
                      type="text"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
                      placeholder="Given name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-last" className="text-xs font-semibold text-slate-700">Last name</label>
                    <input
                      id="contact-last"
                      name="lastName"
                      type="text"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
                      placeholder="Family name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
                      placeholder="name@organization.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700">Phone</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
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
                      name="service"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
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
                      name="preferredResponse"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
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
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
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
                  name="consent"
                  type="checkbox"
                  defaultChecked
                  required
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 disabled:opacity-60"
                />
                <label htmlFor="contact-consent" className="text-sm text-slate-600 leading-relaxed">
                  I understand this enquiry will be handled under strict confidentiality and used only to respond to my request.
                </label>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <label htmlFor="contact-captcha" className="text-xs font-semibold text-slate-700">
                  Security check
                </label>
                <p className="mt-1 text-sm text-slate-600">{captchaLabel}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <input
                    id="contact-captcha"
                    type="number"
                    inputMode="numeric"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      if (captchaError) setCaptchaError('');
                    }}
                    className="w-28 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Answer"
                    required
                    disabled={!captcha || isSubmitting}
                    aria-invalid={captchaError ? true : undefined}
                    aria-describedby={captchaError ? 'contact-captcha-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 hover:underline"
                  >
                    New question
                  </button>
                </div>
                {captchaError ? (
                  <p id="contact-captcha-error" className="mt-2 text-xs text-red-600" role="alert">
                    {captchaError}
                  </p>
                ) : null}
              </div>

              {submitError ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {submitError}
                </p>
              ) : null}

              {submitSuccess ? (
                <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
                  Thank you. Your message was sent securely. We will respond within 24 hours.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={!captcha || isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send secure message'}
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                This form does not replace emergency voice contact. For immediate risk, call{' '}
                <a href="tel:+919967107077" className="font-semibold text-cyan-700 hover:underline whitespace-nowrap">+91 99671 07077</a>.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
          aria-labelledby="location-heading"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="location-heading" className="text-2xl font-bold text-slate-950">
                Visit our Mumbai office
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Crystal Plaza, Andheri West — use the map preview below or open directions in Google Maps.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-cyan-700 shadow-sm transition hover:border-cyan-200 hover:bg-cyan-50"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <iframe
              title="Indiebim headquarters on Google Maps"
              src={MAP_EMBED_SRC}
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <motion.div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West, Mumbai 400053
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-cyan-700 hover:underline"
              >
                Get directions
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

