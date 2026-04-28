'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  Building2,
  ChevronRight,
  Key,
  Lock,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const exposurePoints = [
  'Corporate offices and boardrooms',
  'Residential home offices and executive spaces',
  'Hotels and private meeting venues',
  'Aircraft and travel-linked assignments',
];

const serviceCoverage = [
  'Electronic eavesdropping detection',
  'Bug sweep inspections',
  'Counter-espionage consulting',
  'Counter-surveillance support',
  'Cyber TSCM services',
  'Anti-surveillance protection',
];

export default function CorporateTSCMService() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            <Building2 className="h-10 w-10 text-cyan-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Espionage Detection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            Protecting your business from espionage risk through professional bug sweeps, eavesdropping detection, and corporate TSCM support.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 p-8 md:p-12 rounded-3xl border border-slate-200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Are you a potential victim of corporate espionage?</h2>
            <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6" />
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Corporate espionage is also known as industrial, economic, or corporate spying. Technology has taken over our economy and our business lifestyle, and we are now living in an age where homes, corporate offices, and communication systems are deeply wired into daily operations.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              That means hacking, data theft, and illegal monitoring create a high level of risk across both residential and business environments. Corporate espionage is a serious issue in India and internationally, and large companies do not hesitate to invest in securing their privacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/inner-banner-1-1-1.jpg"
              alt="Corporate espionage detection specialist"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 44vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-cyan-300 text-xs font-bold uppercase tracking-[0.24em]">Read More</p>
              <p className="mt-3 max-w-md text-white text-sm leading-7">
                Professional surveys to detect illegal eavesdropping in workplaces, homes, hotels, aircraft, and any space where sensitive conversations happen.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why your business needs this</h2>
            {[
              {
                icon: <Lock />,
                title: 'Prevent Corporate Espionage',
                desc: 'Identify and neutralize surveillance threats that may compromise privacy and business continuity.',
              },
              {
                icon: <Key />,
                title: 'Safeguard Intellectual Property',
                desc: 'Protect confidential plans, internal strategies, pricing logic, and commercially sensitive discussions.',
              },
              {
                icon: <ShieldCheck />,
                title: 'Secure Communication',
                desc: 'Reduce risk across boardroom meetings, calls, executive conversations, and remote workspaces.',
              },
              {
                icon: <BarChart3 />,
                title: 'Protect Reputation',
                desc: 'Avoid the damage that follows illegal monitoring, information leakage, and exposed corporate weakness.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-600 w-6 h-6">{item.icon}</div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 md:p-10 rounded-3xl text-white"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 mb-4">How we work</p>
            <h2 className="text-3xl font-bold mb-5">We prepare intensely and check every possible route of eavesdropping.</h2>
            <p className="text-slate-300 leading-8 text-base mb-5">
              Our expert team performs intense preparation across residential home offices and business environments. The frequency spectrum is recorded both outside and inside, helping us understand the active and hidden threat landscape before sensitive issues are discussed.
            </p>
            <p className="text-slate-300 leading-8 text-base">
              We use sophisticated equipment to counter-check every possible path of illegal eavesdropping at your workplace, home, boardrooms, hotels, aircraft, or any other location where the assignment requires protection.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 p-8 md:p-10 rounded-3xl border border-slate-200"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 mb-4">Typical exposure zones</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {exposurePoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-white p-8 md:p-10 rounded-3xl border border-cyan-200"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 mb-4">Service coverage</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceCoverage.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white/90 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What we can deliver for you</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional survey support for detecting illegal eavesdropping anywhere, anytime, with coverage tailored to business-sensitive environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Bug Sweeps',
                desc: 'Physical and technical sweeps supported by trained personnel and sophisticated equipment.',
              },
              {
                title: 'Real-Time Detection',
                desc: 'Surveys that can be performed whenever and wherever sensitive meetings or operations require protection.',
              },
              {
                title: 'Confidential Service',
                desc: 'Discreet execution across corporate, executive, and private environments where trust matters.',
              },
              {
                title: 'Counter-Espionage Consulting',
                desc: 'Advisory support for organisations facing elevated privacy, surveillance, or competitive intelligence risks.',
              },
              {
                title: 'Cyber TSCM and Anti-Surveillance',
                desc: 'Protection that considers both planted hardware and technology-assisted intrusion pathways.',
              },
              {
                title: 'Anywhere, Anytime Coverage',
                desc: 'We can perform a professional Corporate Espionage Bug Sweep and TSCM survey wherever the assignment requires.',
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-1"
              >
                <Zap className="w-8 h-8 text-cyan-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-50 to-white p-10 md:p-16 rounded-3xl border border-cyan-200 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Need a professional corporate espionage survey?</h3>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Our services support workplaces, homes, hotels, aircraft, and any venue where private discussions, business planning, or confidential strategic communication need to stay protected.
            </p>
            <h4 className="text-slate-900 font-bold text-xl mb-4">Why choose us?</h4>
            <p className="text-slate-600 mb-8 max-w-xl">
              With trained professionals, sophisticated equipment, and practical experience in detecting illegal eavesdropping, we help secure sensitive information wherever the risk needs to be checked.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex px-8 py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2"
            >
              Request Consultation <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="lg:w-80 relative h-64 rounded-2xl overflow-hidden shadow-2xl shrink-0">
            <Image
              src="/images/4-1.jpg"
              alt="Corporate espionage detection expert"
              fill
              className="object-cover object-center"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Deployment Ready</p>
              <p className="text-white font-bold text-lg leading-tight">Corporate bug sweep and TSCM support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
