'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Phone,
  Radio,
  Radar,
  ScanSearch,
  Shield,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

const builtForActive = [
  'Wide-frequency spectrum scanning',
  'Trained RF detection specialists',
  'Source confirmation, not just alerts',
];

const signalPoints = [
  'Frequency and strength profiling',
  'False-positive filtering',
  'Verified source identification',
];

const wirelessSteps = [
  {
    title: 'RF Sweep',
    desc: 'Identifies suspicious transmissions in the target area.',
  },
  {
    title: 'Source Location',
    desc: 'Narrows down where emissions may originate.',
  },
  {
    title: 'Device Review',
    desc: 'Correlates signal findings with physical inspection.',
  },
];

const equipment = [
  {
    icon: Radar,
    title: 'Spectrum Tools',
    desc: 'Wide-frequency review for active emissions.',
  },
  {
    icon: ScanSearch,
    title: 'Near-field Probes',
    desc: 'Close-range source tracing.',
  },
  {
    icon: Radio,
    title: 'Detection Receivers',
    desc: 'Portable checks across rooms and fixtures.',
  },
];

const benefits = [
  {
    title: 'Privacy Protection',
    desc: 'Reduce the risk of conversations, documents and movements being exposed.',
  },
  {
    title: 'Business Confidence',
    desc: 'Protect board decisions, negotiations and sensitive commercial information.',
  },
  {
    title: 'Clear Next Steps',
    desc: 'Receive practical recommendations after the inspection is complete.',
  },
];

export default function RfBugDetectionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f8fb] pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
        <div className="absolute bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-blue-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-cyan-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/bug-sweep" className="transition hover:text-cyan-700">
            Bug Sweep
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-cyan-700">RF Bug Detection</span>
        </div>

        {/* Hero */}
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <Radio className="h-4 w-4" />
              RF Bug Detection Services
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              RF Bug Detection Services
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              RF bug detection focuses on wireless transmissions that may indicate active listening devices, cameras or
              covert transmitters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Schedule RF Sweep
              </Link>
              <a
                href="tel:+919967107077"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
              >
                <Phone className="h-4 w-4" />
                +91 99671 07077
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
          >
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src="/images/3-1-1.jpg"
                alt="RF bug detection services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Spectrum to source
                </p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                  Detect wireless emissions, filter false positives, and confirm the physical device behind the signal.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* RF Threats */}
        <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">RF Threats</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">RF Threats</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              RF threats include wireless microphones, hidden cameras, GSM devices, Wi-Fi devices and transmitters
              concealed in objects or fixtures. These devices can transmit audio or video continuously without any
              visible trace.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-8"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
              <Wifi className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Built for Active Threats</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Indiebim uses calibrated RF detection equipment to catch transmissions that ordinary inspection would
              miss, then physically locates the source so it can be removed or neutralised.
            </p>
            <div className="mt-6 space-y-3">
              {builtForActive.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        {/* Signal Analysis */}
        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:order-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">From Signal to Source</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A signal reading on its own isn&apos;t enough — our analysts trace strength and frequency patterns back to
              a physical location, confirming whether a real device is present before any remedial action is
              recommended.
            </p>
            <div className="mt-6 space-y-3">
              {signalPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Signal Analysis</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Signal Analysis</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We review signal behavior, strength, frequency characteristics and likely source locations. Each detected
              signal is assessed to separate genuine threats from harmless background transmissions.
            </p>
          </motion.article>
        </section>

        {/* Wireless Detection */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Wireless Detection</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Wireless Detection</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Our wireless detection process moves from broad signal sweep to precise device identification, leaving no
            active transmitter unaccounted for.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {wirelessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Equipment Used */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Equipment Used</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Equipment Used</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Indiebim field teams carry a combination of specialised RF detection tools suited to different ranges,
            environments and signal types.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Benefits</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">Benefits</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Clearing active RF threats from a space means every conversation that happens there afterward stays where it
            belongs — private.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[28px] border border-white/70 bg-white/95 p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Clear the airwaves</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Find and confirm active RF threats before they capture a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Schedule a professional RF bug detection sweep for your office, boardroom, residence or meeting venue.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
            >
              Enquiry Now
            </Link>
            <a
              href="tel:+919967107077"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
            >
              Call +91 9967107077
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
