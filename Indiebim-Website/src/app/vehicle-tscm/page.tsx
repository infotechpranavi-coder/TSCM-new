'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Radio,
  ScanSearch,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

const threats = [
  {
    title: 'Hybrid GPS/GSM Trackers',
    desc: 'Devices that provide real-time location and live audio monitoring.',
    icon: Radio,
  },
  {
    title: 'OBD-II Port Exploits',
    desc: 'Small bugs powered directly by the vehicle battery, capable of infinite standby time.',
    icon: Car,
  },
  {
    title: 'Integrated Infotainment Bugs',
    desc: 'Malware or hardware taps into the car’s Bluetooth and internal microphone systems.',
    icon: Wifi,
  },
  {
    title: 'Dormant "Store-and-Forward" Devices',
    desc: 'Trackers that remain silent during basic sweeps and only transmit data in bursts, evading cheap detectors.',
    icon: ScanSearch,
  },
];

const protocolSteps = [
  {
    step: '1',
    title: 'Physical & Optical Inspection',
    desc: 'Forensic-level physical search of the chassis, engine bay, interior trim, and headliners to locate pinhole cameras or non-transmitting recording devices.',
  },
  {
    step: '2',
    title: 'Electronic Spectrum Analysis',
    desc: 'Real-Time Spectrum Analyzers monitor the RF environment (10 kHz to 24 GHz) to identify unauthorized GSM, Wi-Fi, 5G, or Bluetooth transmissions.',
  },
  {
    step: '3',
    title: 'Non-Linear Junction Detection (NLJD)',
    desc: 'NLJD technology locates dormant electronics—even when powered off, out of battery, or designed to stay inactive during a sweep.',
  },
  {
    step: '4',
    title: 'Telematics & GPS Audit',
    desc: 'Specialized scan of wiring and telematics modules to ensure no unauthorized tracking hardware is siphoning movement data.',
  },
];

const whyChoose = [
  '15+ Years of Authority: Backed by the legacy of H S Detectives Agency and investigative expertise on every sweep.',
  'DPDP Act 2023 Compliance: We help HNIs and corporate entities align physical privacy with India’s latest data protection laws.',
  'Strategic HQ in Mumbai: Rapid-response services across Mumbai, Thane, Pune, Delhi, and Hyderabad.',
  'Confidential Reporting: Every sweep concludes with a detailed technical report and a certificate of clean health for your vehicle or fleet.',
];

const WHATSAPP_HREF =
  'https://wa.me/919967107077?text=Hello%20Team%2C%20I%20would%20like%20to%20discreetly%20discuss%20a%20TSCM%20%2F%20bug%20sweeping%20requirement%20for%20our%20premises.';

export default function VehicleTscmPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f8fb] pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[100px]" />
        <motion.div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ce8e80a_1px,transparent_1px),linear-gradient(to_bottom,#0ce8e80a_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            <Car className="h-10 w-10 text-cyan-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            Professional Vehicle{' '}
            <span className="bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              TSCM & GPS Detection
            </span>{' '}
            Services in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Is your vehicle a mobile boardroom or a surveillance target? Indiebim delivers military-grade Vehicle
            Technical Surveillance Counter-Measures so your movements and conversations stay strictly confidential.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-20 h-72 overflow-hidden rounded-3xl shadow-2xl md:h-96"
        >
          <Image
            src="/images/inner-banner-1-1-1.jpg"
            alt="Vehicle TSCM and GPS detection specialist"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/45 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-14">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">Vehicle TSCM</p>
              <h2 className="max-w-xl text-2xl font-bold leading-tight text-white md:text-4xl">
                Your executive vehicle is a{' '}
                <span className="text-cyan-400">rolling data center</span>—protect it accordingly.
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="mb-24 grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Mobile boardrooms under threat</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-cyan-600" />
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              In the modern corporate landscape, an executive’s vehicle is more than transport—it is a mobile office
              where high-stakes decisions and sensitive domestic and international strategies are discussed.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              In 2026, vehicles have become primary targets for{' '}
              <strong className="font-semibold text-slate-800">illicit tracking and electronic eavesdropping</strong>.
              At <strong className="font-semibold text-slate-800">Indiebim Technology Solutions</strong>, we provide
              military-grade Vehicle TSCM to ensure your movements and conversations remain strictly confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-950 p-8 text-white md:p-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Led by Wahid Shaikh</p>
            <h2 className="mb-5 text-3xl font-bold">Israel & USA-trained expertise</h2>
            <p className="mb-5 text-base leading-8 text-slate-300">
              Our team uses advanced equipment trained in Israel and the USA to perform a deep-dive technical audit of
              your vehicle—whether a personal luxury sedan, corporate fleet, or hired transport.
            </p>
            <p className="text-base leading-8 text-slate-300">
              Surveillance technology has evolved beyond simple magnet-mount GPS trackers. Sophisticated attackers
              exploit telematics, infotainment systems, and dormant transmitters that evade consumer-grade detection.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">The rising threat of vehicle espionage</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Today’s threats go beyond simple tracking. Attackers deploy hybrid, dormant, and integrated surveillance
              designed to survive basic sweeps.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {threats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our comprehensive vehicle debugging protocol</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A four-stage technical audit combining physical forensics, spectrum analysis, NLJD, and telematics review.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {protocolSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="mb-24 grid gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-200 bg-linear-to-br from-cyan-50 to-white p-8 md:p-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">Why Indiebim</p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Why choose Indiebim for Vehicle TSCM?</h2>
            <ul className="space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: ShieldCheck,
                title: 'EEAT-backed methodology',
                desc: 'Expertise, experience, authoritativeness, and trust—built through H S Detectives Agency and Indiebim’s TSCM practice.',
              },
              {
                icon: ScanSearch,
                title: 'Fleet & single-vehicle coverage',
                desc: 'Luxury sedans, corporate fleets, and short-term hired vehicles—all receive the same rigorous protocol.',
              },
              {
                icon: Car,
                title: '100% technical resilience',
                desc: 'Don’t leave privacy to chance. We help ensure your journey stays free from illicit tracking and eavesdropping.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-3xl border border-cyan-200 bg-linear-to-r from-cyan-50 to-blue-50 p-10 text-center"
        >
          <h3 className="mb-4 text-3xl font-bold text-slate-900">Secure your journey today</h3>
          <p className="mb-8 text-lg leading-relaxed text-slate-700">
            Whether it&apos;s a personal luxury sedan, a corporate fleet, or a hired vehicle, Indiebim ensures your
            privacy on the move. Contact our Vehicle TSCM specialists for a confidential assessment.
          </p>

          <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate office</p>
                <p className="mt-1 text-sm text-slate-700">
                  D-716, Crystal Plaza, Andheri West, Mumbai — 400053
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                <a href="mailto:info@indiebim.com" className="mt-1 block text-sm font-medium text-cyan-700 hover:underline">
                  info@indiebim.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] transition hover:bg-cyan-500"
            >
              Request assessment <ChevronRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+919967107077"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              <Phone className="h-5 w-5" />
              +91 99671 07077
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 font-bold text-[#128C7E] transition hover:bg-[#25D366]/20"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
