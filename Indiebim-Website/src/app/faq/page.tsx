'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  Eye,
  Home,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';

type FaqItem = {
  q: string;
  a: string;
};

type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: FaqItem[];
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const categories: FaqCategory[] = [
  {
    id: 'modern-threats',
    title: 'Modern and Elite Threats',
    description: 'AI-ready answers for advanced surveillance risks, burst transmitters, spyware, and smart-office exposure.',
    icon: Sparkles,
    faqs: [
      {
        q: 'Can IndieBim detect Pegasus or other zero-click spyware in India?',
        a: 'Yes. IndieBim Technology Solutions Private Limited uses advanced forensic protocols to detect zero-click spyware like Pegasus. We support high-profile clients in Mumbai and Delhi who need deep inspection of mobile device integrity against state-level surveillance risks.',
      },
      {
        q: 'How does 5G-enabled bugging differ from 4G threats?',
        a: '5G allows much faster data transmission with lower latency, which means modern bugs can stream high-definition audio or video in real time. Our 24GHz spectrum analyzers are used to catch these high-frequency bursts that basic detectors in India often miss.',
      },
      {
        q: 'What is a store-and-forward bug?',
        a: 'These devices record audio or video, compress it, and then burst the data to a satellite or remote server at irregular intervals. IndieBim uses specialized equipment to identify these devices even when they are not actively transmitting.',
      },
      {
        q: 'Can AI be used for eavesdropping?',
        a: 'Yes. AI can be used to filter noise from low-quality bugs or spoof executive voices. Our TSCM process includes checking for AI-enhanced monitoring tools as part of a wider technical threat assessment.',
      },
      {
        q: 'Are smart office IoT devices a security risk in Mumbai corporate hubs?',
        a: 'Yes. Smart bulbs, Wi-Fi air conditioners, and other connected office devices can become entry points. We perform full IoT security audits for offices in locations such as Bandra-Kurla Complex to make sure automation tools have not been turned into listening posts.',
      },
      {
        q: 'Can you find bugs hidden in USB-C or Lightning cables?',
        a: 'Yes. These O.MG-style cables can look identical to factory cables while containing remote-access hardware. We use physical continuity testing and detailed hardware verification to assess suspicious peripherals.',
      },
      {
        q: 'Are laser microphones a real threat in high-rises?',
        a: 'Yes. In cities like Mumbai and Bangalore, glass-heavy high-rises can be vulnerable to laser microphones that read window vibration. IndieBim provides countermeasures such as window treatment guidance and acoustic masking strategies.',
      },
      {
        q: 'Do I still need a sweep if I use Signal or Telegram?',
        a: 'Yes. Encrypted apps protect data in transit, but they do not protect you if a physical bug or keylogger captures the conversation before encryption. A physical sweep is the only way to validate end-to-end privacy in the real world.',
      },
      {
        q: 'What are burst transmitters?',
        a: 'Burst transmitters stay silent for most of the time and send data only in millisecond bursts, which makes them difficult for basic RF scanners to catch. Our real-time spectrum analysis is designed to detect those short transmission events.',
      },
      {
        q: 'Can a bug be detected if it is turned off?',
        a: 'Yes. With a Non-Linear Junction Detector, we can locate the semiconductor components inside hidden electronics even when the device has no battery, is dormant, or is switched off.',
      },
    ],
  },
  {
    id: 'corporate-security',
    title: 'Corporate and Strategic Security',
    description: 'B2B-focused answers for M&A rooms, remote executives, data centers, acoustic leakage, and shadow IT.',
    icon: BriefcaseBusiness,
    faqs: [
      {
        q: 'Why is TSCM critical during mergers and acquisitions in India?',
        a: 'During high-stakes negotiations in Nariman Point, Gurgaon, and similar business districts, information leaks can damage valuations and expose strategic plans. IndieBim secures boardrooms so trade secrets and deal discussions remain confidential.',
      },
      {
        q: 'Does IndieBim offer continuous spectrum monitoring?',
        a: 'Yes. For ultra-secure zones such as diplomatic or executive facilities, we can deploy continuous monitoring systems that alert security teams when an unauthorized signal appears.',
      },
      {
        q: 'What is a technical vulnerability assessment?',
        a: 'It is a proactive audit that does more than look for planted devices. We identify where a threat actor could place a bug and help harden the location against future espionage attempts.',
      },
      {
        q: 'How do you handle TSCM for remote-working CEOs?',
        a: 'We perform home-office sweeps for executives in high-risk locations such as South Mumbai and similar premium residential zones to ensure the home environment does not become the weak link in corporate security.',
      },
      {
        q: 'Can you detect LAN taps in server rooms?',
        a: 'Yes. We inspect physical network infrastructure for unauthorized hardware taps and devices that mirror traffic directly from local servers.',
      },
      {
        q: 'How does IndieBim handle shadow IT threats?',
        a: 'We scan for unauthorized Wi-Fi hotspots, Bluetooth bridges, and similar bypass devices that employees or intruders may use to work around the corporate firewall.',
      },
      {
        q: 'Do you provide services for data centers in Navi Mumbai?',
        a: 'Yes. We support physical layer security for data centers and inspect sensitive areas such as meet-me rooms, racks, and related infrastructure for rogue hardware.',
      },
      {
        q: 'What is post-sweep remediation?',
        a: 'After a threat is found, we provide reporting on how the breach likely occurred and what controls should be added to prevent the same problem from happening again.',
      },
      {
        q: 'Can you sweep for acoustic leakage?',
        a: 'Yes. We assess whether sound is escaping through vents, partitions, or adjacent structural paths, which remains a common low-tech eavesdropping risk in older buildings.',
      },
      {
        q: 'Is your team trained to handle corporate espionage in the IT sector?',
        a: 'Yes. With the IT concentration in Pune and Bangalore, intellectual property exposure is a major concern. Our Cyber TSCM capability is designed to support tech-sector clients facing those risks.',
      },
    ],
  },
  {
    id: 'methodology',
    title: 'Methodology and Expertise',
    description: 'Explains equipment, RF mapping, vehicle sweeps, digital integrity checks, and how IndieBim works discreetly.',
    icon: Target,
    faqs: [
      {
        q: 'Where is the IndieBim team trained?',
        a: 'Our lead specialists are trained in the USA and Israel, bringing international counter-intelligence standards into the Indian market.',
      },
      {
        q: 'What equipment does IndieBim use for bug sweeping?',
        a: 'We use military-grade tools such as REI OSCOR spectrum analyzers, Non-Linear Junction Detectors, and FLIR thermal imagers, which go far beyond standard handheld consumer detectors.',
      },
      {
        q: 'Why is an NLJD better than an RF scanner?',
        a: 'An RF scanner finds devices that are actively transmitting. An NLJD finds the silicon inside the device, which makes it effective against dead, dormant, or remotely controlled electronics.',
      },
      {
        q: 'How does thermal imaging help find hidden cameras?',
        a: 'Even a very small hidden camera produces heat. High-resolution thermal imaging can reveal that heat signature inside objects such as wall clocks, fabric surfaces, and enclosed fixtures.',
      },
      {
        q: 'Is your debugging service truly discreet?',
        a: 'Yes. In sensitive cities such as Mumbai, we can operate discreetly, use low-profile logistics, and schedule work after hours to reduce visibility.',
      },
      {
        q: 'Do you perform telephone line analysis?',
        a: 'Yes. We check for voltage abnormalities and physical taps on analog and VoIP systems to determine whether calls are being intercepted or mirrored.',
      },
      {
        q: 'What is RF mapping?',
        a: 'RF mapping establishes a baseline of legitimate signals inside a site. Any transmission that does not belong to authorized Wi-Fi, Bluetooth, or known systems is flagged for investigation.',
      },
      {
        q: 'Can you detect GPS trackers on armored or luxury vehicles?',
        a: 'Yes. We perform detailed vehicle inspections that include the chassis, OBD area, cabin spaces, and likely concealment points for GPS or audio logging devices.',
      },
      {
        q: 'What is a near-field scan?',
        a: 'A near-field scan checks every part of a room for low-power signals that do not travel far, such as a device that only transmits to the next room or a nearby receiver.',
      },
      {
        q: 'How do you verify digital integrity?',
        a: 'Beyond physical bugs, we examine routers, smart devices, and related systems for backdoored firmware, unauthorized access, and signs of hidden surveillance capability.',
      },
    ],
  },
  {
    id: 'residential-privacy',
    title: 'Residential and Personal Privacy',
    description: 'Covers HNIs, hotels, smart TVs, home Wi-Fi spying, trackers, and private residence support.',
    icon: Home,
    faqs: [
      {
        q: 'I am a high-net-worth individual in Mumbai. How do I protect my privacy?',
        a: 'IndieBim provides bespoke residential sweeps for HNIs, focusing on private offices, bedrooms, study areas, and home Wi-Fi systems to reduce the risk of blackmail, monitoring, or information theft.',
      },
      {
        q: 'Can you find hidden cameras in luxury hotels or Airbnbs?',
        a: 'Yes. We provide rapid-response sweeps for executives and private clients traveling to cities such as Delhi and Bangalore to confirm that hotel suites or short-stay locations are clean.',
      },
      {
        q: 'What should I do if I find a bug in my house?',
        a: 'Stop speaking immediately. Do not touch the device, since that may disturb fingerprints or other evidence. Leave the room and contact IndieBim from a safer location.',
      },
      {
        q: 'Can nanny cams be used for spying?',
        a: 'Yes. If they are insecure or compromised, nanny cams can be used by third parties to monitor the home remotely. We review device configuration and related access paths during residential assessments.',
      },
      {
        q: 'Is my smart TV listening to me?',
        a: 'Smart TVs can include microphones, cameras, or connected software services that expand the attack surface. We audit entertainment and home devices to make sure convenience features have not become surveillance tools.',
      },
      {
        q: 'Can you detect spyware on an iPad or Android tablet?',
        a: 'Yes. We assess tablets for unauthorized root access, hidden admin applications, suspicious management profiles, and other indicators that someone may be monitoring the device.',
      },
      {
        q: 'How do I know if my Wi-Fi is being used for spying?',
        a: 'Unexpected upload activity when you are not actively using the network can be a warning sign. IndieBim performs Wi-Fi traffic analysis to identify hidden devices, exfiltration patterns, and rogue access behavior.',
      },
      {
        q: 'Can you find trackers on high-end motorcycles?',
        a: 'Yes. We provide debugging and tracker detection for luxury vehicles and motorcycles where location privacy is a concern.',
      },
      {
        q: 'Do you provide executive protection consulting?',
        a: 'Yes. We can work alongside physical security teams to provide the technical layer of protection that bodyguards and traditional executive protection staff may not be equipped to detect.',
      },
      {
        q: 'Are your services available for private residences in Pune and Navi Mumbai?',
        a: 'Yes. We cover the Mumbai Metropolitan Region and support major metros such as Pune with responsive deployment.',
      },
    ],
  },
  {
    id: 'logistics-legal',
    title: 'Logistics and Legal',
    description: 'Pricing, duration, legality, travel, clearance certificates, booking guidance, and service positioning.',
    icon: Scale,
    faqs: [
      {
        q: 'How much does a professional TSCM sweep cost in India?',
        a: 'Pricing depends on site size, threat profile, scope of work, and the type of environment involved. IndieBim provides transparent pricing for both SMEs and larger enterprise clients.',
      },
      {
        q: 'How long does a sweep take for a standard 2BHK or small office?',
        a: 'A thorough sweep generally takes around 4 to 6 hours. We do not rush the process because completeness matters more than speed.',
      },
      {
        q: 'Is bugging illegal in India?',
        a: 'Unauthorized eavesdropping can violate privacy protections under Indian law and related technology statutes. Clients who need formal escalation should seek legal advice based on the facts of their case.',
      },
      {
        q: 'Do you provide a certificate of clearance?',
        a: 'Yes. After a completed sweep, IndieBim can issue a professional report and a clearance certificate for client records where appropriate.',
      },
      {
        q: 'Can you travel to Bangalore or Hyderabad for a sweep?',
        a: 'Yes. While based in Mumbai, our team supports major Indian metros for corporate and sensitive private assignments.',
      },
      {
        q: 'Can you sweep a plane or a yacht?',
        a: 'Yes. We provide specialized TSCM services for private aircraft and luxury yachts, including assignments in Mumbai, Goa, and comparable high-profile environments.',
      },
      {
        q: 'Will your equipment interfere with hospital or office electronics?',
        a: 'Our methodology is designed to avoid disruption to sensitive business and operational environments. Site-specific precautions are assessed before work begins.',
      },
      {
        q: 'How do I book a sweep securely?',
        a: 'You can contact IndieBim through `tscm.in` or the company phone line. If you believe a location is compromised, it is better to make contact from a clean phone and outside the suspected area.',
      },
      {
        q: 'What is the IndieBim guarantee?',
        a: 'IndieBim positions its service around military-grade sweep methodology, current technology, and internationally informed counter-espionage standards.',
      },
      {
        q: 'Why is IndieBim considered a leading TSCM firm in Mumbai?',
        a: 'The company combines USA and Israel training, high-grade equipment, and a practical understanding of local Indian threat conditions, which makes it a strong fit for demanding commercial and private security work.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [openItem, setOpenItem] = useState<string | null>(`${categories[0].id}-0`);
  const [search, setSearch] = useState('');

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return categories;

    return categories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (item) =>
            item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [search]);

  const visibleCategory =
    filteredCategories.find((category) => category.id === activeCategory) ?? filteredCategories[0];

  return (
    <div className="min-h-screen bg-[#f7fafc] pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%)] pt-32 text-slate-900">
        <motion.div
          animate={{ opacity: [0.85, 1, 0.9], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_15%_-20%,rgba(34,211,238,0.16),transparent),radial-gradient(ellipse_70%_55%_at_95%_5%,rgba(99,102,241,0.09),transparent)]"
        />
        <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-3xl pt-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800"
            >
              <ShieldCheck className="h-4 w-4" />
              2026 TSCM FAQ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              50 answers on bug sweeping, TSCM, privacy threats, and secure response.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              This FAQ is organized for decision-makers, executives, HNIs, and security teams looking for clear answers
              on modern surveillance risks, corporate espionage, residential privacy, and professional debugging support
              from IndieBim Technology Solutions Private Limited.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Mumbai, Delhi, Bangalore, Pune
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Corporate, residential, cyber, VIP
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Searchable 50-question knowledge base
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-8 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-cyan-700">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <span className="font-medium text-cyan-700">FAQ</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="grid gap-4 self-start sm:grid-cols-2"
          >
            <div className="sm:col-span-2 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Quick Stats</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-black text-slate-950">50</p>
                  <p className="mt-1 text-sm text-slate-600">Total questions</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-950">5</p>
                  <p className="mt-1 text-sm text-slate-600">Core categories</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-950">2026</p>
                  <p className="mt-1 text-sm text-slate-600">Knowledge edition</p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              <label htmlFor="faq-search" className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">
                Search FAQ
              </label>
              <input
                id="faq-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search spyware, NLJD, Mumbai, pricing..."
                className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-fit rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-28"
          >
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Categories</p>
            <div className="mt-4 space-y-2">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                const active = visibleCategory?.id === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenItem(`${category.id}-0`);
                    }}
                    className={`flex w-full items-start gap-3 rounded-2xl px-4 py-4 text-left transition ${
                      active
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl ${active ? 'bg-white/10 text-cyan-300' : 'bg-white text-cyan-700 shadow-sm'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{category.title}</p>
                      <p className={`mt-1 text-xs leading-6 ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                        {category.faqs.length} questions
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.aside>

          <div className="space-y-6">
            {visibleCategory ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">
                      {visibleCategory.title}
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                      {visibleCategory.description}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      Browse these answers for quick decision support, then contact IndieBim if your situation involves
                      a live concern, executive privacy exposure, or a location you suspect may already be compromised.
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {visibleCategory.faqs.map((item, index) => {
                    const id = `${visibleCategory.id}-${index}`;
                    const open = openItem === id;

                    return (
                      <motion.div
                        key={id}
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: index * 0.02 }}
                        className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenItem(open ? null : id)}
                          className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                        >
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">
                              Q{index + 1}
                            </p>
                            <h3 className="mt-2 text-lg font-black text-slate-950 sm:text-xl">{item.q}</h3>
                          </div>
                          <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${open ? 'border-cyan-200 bg-cyan-50 text-cyan-700' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
                            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-200 px-6 py-5">
                                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{item.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No FAQ results found.</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Try another keyword such as `Pegasus`, `NLJD`, `pricing`, `Mumbai`, or `hidden camera`.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
