'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Ear,
  Lock,
  Phone,
  Radio,
  ScanSearch,
  ShieldCheck,
  Volume2,
  Wifi,
} from 'lucide-react';

const howItWorks = [
  'Audio bugs in chargers, adapters and stationery',
  'Compromised VOIP phones and conference equipment',
  'GSM and wireless transmitters hidden in fixtures or objects',
];

const atRisk = [
  'C-suite executives and corporate leadership teams',
  'Legal professionals handling confidential litigation',
  'Politicians, government officials and policy advisors',
];

const detectionMethods = [
  {
    icon: Radio,
    title: 'RF Spectrum Monitoring',
    desc: 'Full-band RF spectrum analysis to detect active wireless audio transmitters, GSM bugs, Wi-Fi audio devices and any unauthorized signal broadcasting from within or near the target space — including burst-transmission devices that activate only intermittently.',
  },
  {
    icon: ScanSearch,
    title: 'NLJD Physical Inspection',
    desc: 'Non-Linear Junction Detection to locate hidden electronic components — including dormant recording devices, inactive bugs and hardware not yet transmitting — embedded inside walls, furniture, objects and electrical fixtures throughout the space.',
  },
  {
    icon: Volume2,
    title: 'Audio Path & Acoustic Analysis',
    desc: 'Systematic review of all audio capture pathways — microphone positions, acoustic vulnerabilities, telephone and conferencing infrastructure — to identify both technical interception points and structural weaknesses that could be exploited for eavesdropping.',
  },
];

const wirelessPoints = [
  'Full-spectrum RF scan from 10 MHz to 12 GHz',
  'GSM, 3G, 4G and Wi-Fi audio bug detection',
  'Burst-transmission and time-delayed transmitter identification',
];

const whenFound = [
  'Device isolated, photographed and forensically documented',
  'Client briefed privately before any removal action',
  'Legal escalation pathway advised where required',
];

const audioDetection = [
  'Physical inspection of all furniture, fixtures and everyday objects',
  'NLJD scan to detect dormant or non-transmitting recording hardware',
  'Telephone, intercom and VOIP system integrity check',
];

const telecomChecks = [
  'Landline and VOIP telephone tap detection',
  'Conference bridge and speakerphone integrity check',
  'Communication line continuity and interception audit',
];

const whyChoose = [
  {
    title: 'Verified Conversation Privacy',
    desc: 'Know with certainty that your boardroom, office, home or hotel room is free from active listening devices — backed by a documented findings report, not a verbal reassurance.',
  },
  {
    title: 'Protect Strategic & Legal Advantage',
    desc: 'Prevent competitors, adversaries or bad actors from intercepting M&A discussions, legal strategy, financial decisions or personnel matters that could undermine your position if overheard.',
  },
  {
    title: 'Clear Remediation & Prevention Plan',
    desc: 'Beyond the sweep, Indiebim delivers actionable guidance — covering space hardening, communication security, staff protocols and ongoing monitoring recommendations to prevent future eavesdropping attempts.',
  },
];

const faqs = [
  {
    q: 'Can eavesdropping happen without any visible devices in the room?',
    a: 'Absolutely. Many of the most effective eavesdropping devices are hidden inside fully functioning objects — power adapters, wall clocks, USB hubs, picture frames, smoke detectors and even potted plants. They are designed to be visually invisible. Only professional detection equipment combined with physical inspection can reliably locate them.',
  },
  {
    q: 'What specific recommendations do you provide after the sweep?',
    a: 'Every Indiebim engagement ends with a confidential findings report that includes: a list of all devices or anomalies discovered, their probable installation method and timeline, a risk rating for the space, and a practical remediation plan covering physical security hardening, communication protocol changes and staff access controls to prevent recurrence.',
  },
  {
    q: 'How confidential is the eavesdropping detection service?',
    a: 'Completely confidential. Indiebim teams arrive in plain clothing and unmarked vehicles. All pre-engagement communication is handled through secure channels. Findings are delivered verbally or via encrypted report — never sent over standard email. We sign NDAs on request and no third party is informed of the engagement at any stage.',
  },
  {
    q: 'Which cities across India do you provide eavesdropping detection services?',
    a: 'Indiebim provides eavesdropping detection services across all major Indian cities including Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Chandigarh, Jaipur, Lucknow and more. We also support international travel assignments for clients requiring detection services at overseas locations.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900 sm:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-cyan-600 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base sm:leading-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EavesdroppingDetectionPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
        <div className="absolute bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-blue-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-cyan-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/tscm-services" className="transition hover:text-cyan-700">
            TSCM Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-cyan-700">Eavesdropping Detection</span>
        </div>

        {/* Hero */}
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <Ear className="h-4 w-4" />
              Eavesdropping Detection Services
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Professional electronic eavesdropping detection across India
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Indiebim provides professional electronic eavesdropping detection across India — identifying hidden
              listening devices, covert audio transmitters, compromised phones and room microphones before your
              confidential conversations are captured and exploited.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Schedule Detection
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
                alt="Eavesdropping detection service"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Multi-layer detection
                </p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-100">
                  RF scanning, NLJD inspection and acoustic pathway analysis for offices, homes and hotel venues.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Understanding threats */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Understanding Eavesdropping Threats
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">
            How Electronic Eavesdropping Works in the Real World
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Electronic eavesdropping today goes far beyond simple hidden microphones. Attackers use GSM-enabled audio
            bugs embedded inside power adapters, modified conference phones, compromised USB devices, room transmitters
            hidden in everyday objects and even software-based interception on unprotected communication lines. Any
            space where sensitive conversations occur is a potential target.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Wifi className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is at risk */}
        <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Targeted risk</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Who Is Most at Risk from Eavesdropping?</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Eavesdropping attacks are not random — they are targeted. Corporate executives discussing M&A deals,
              lawyers handling sensitive litigation, politicians in strategy meetings, HR teams managing personnel
              disputes and high-net-worth individuals in family legal matters are among the most frequently targeted.
              The risk escalates in shared spaces, rented offices and hotel meeting rooms where physical access cannot
              be controlled.
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">High-risk profiles</p>
            <div className="mt-5 space-y-3">
              {atRisk.map((item) => (
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

        {/* Detection methods */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            How We Detect Eavesdropping Devices
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">
            Our Eavesdropping Detection Methods & Technology
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Indiebim uses a multi-layer detection approach combining electronic scanning, physical inspection and
            acoustic analysis — because no single method catches every type of eavesdropping threat.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {detectionMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{method.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Wireless eavesdropping */}
        <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Wireless Eavesdropping Detection
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Detecting Wireless & RF-Based Listening Devices
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Wireless eavesdropping devices are the most common threat in corporate and executive environments. They
              transmit captured audio via GSM networks, Wi-Fi, Bluetooth or dedicated RF frequencies — often disguised
              inside functioning everyday objects. Indiebim uses professional-grade spectrum analyzers to scan every
              frequency band, detect transmission patterns and isolate suspicious signals in real time, even when
              devices are programmed to transmit in short, irregular bursts to avoid detection.
            </p>
            <div className="mt-6 space-y-3">
              {wirelessPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-200 bg-slate-950 p-7 text-white sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              What Happens When a Wireless Bug Is Found?
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              When our technicians detect a suspicious signal or device, it is immediately isolated and analyzed before
              any action is taken. We document the device type, frequency, probable installation time and likely entry
              point. You are briefed privately before removal, so you can decide — with full information — how to
              proceed. In some cases, clients choose controlled disclosure or legal intervention rather than immediate
              removal.
            </p>
            <div className="mt-6 space-y-3">
              {whenFound.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Audio surveillance */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Audio Surveillance Detection
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">
            Detecting Hidden Microphones & Audio Recording Devices
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Not all eavesdropping devices transmit wirelessly. Standalone audio recorders — hidden inside books, pen
            holders, photo frames, wall sockets, smoke detectors and air purifiers — capture and store audio locally for
            later retrieval. These devices are invisible to RF scanners and require physical inspection combined with
            NLJD scanning to detect. Indiebim technicians are trained to find these devices in all concealment
            locations across offices, hotel rooms and residences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {audioDetection.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Lock className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Telephone checks */}
        <section className="mt-16 rounded-[28px] border border-white/70 bg-white/95 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-10">
          <h2 className="text-3xl font-bold text-slate-950">Telephone & Communication Line Interception Checks</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Landline tapping, VOIP interception and compromised conference bridge vulnerabilities are often overlooked
            in standard security audits. Indiebim checks the physical integrity of all telephone infrastructure, reviews
            conference equipment for hardware tampering and tests communication lines for unauthorized bridging or
            interception hardware — a critical step for legal firms, financial institutions and executive offices using
            shared telecoms infrastructure.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {telecomChecks.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Why choose */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why Choose Indiebim</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">
            What You Gain from Professional Eavesdropping Detection
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            An Indiebim eavesdropping detection engagement gives you verified assurance — not guesswork — that your
            conversations, decisions and strategies are private and protected.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 sm:text-4xl">
            Eavesdropping Detection — Expert Answers
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Clear, direct answers to the questions clients most commonly ask before scheduling an eavesdropping
            detection engagement with Indiebim.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Ready to secure your space</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Protect confidential conversations before they are exploited.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Schedule a discreet eavesdropping detection engagement for your office, boardroom, residence or hotel venue
            anywhere in India.
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
