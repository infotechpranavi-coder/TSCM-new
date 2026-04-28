'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ChevronRight,
  CheckCircle2,
  Lock,
  Radar,
  ScanSearch,
  ShieldCheck,
} from 'lucide-react';

const detectionAreas = [
  'Office cabins and boardrooms',
  'Homes and executive residences',
  'Hotel rooms and temporary stay spaces',
  'Vehicles and travel-linked environments',
  'Meeting venues and conference spaces',
];

const serviceCoverage = [
  'Detection of wired and wireless surveillance devices',
  'Room-by-room electronic sweeps',
  'RF scanning for hidden transmitters',
  'Physical checks for covert cameras and microphones',
  'Professional and discreet execution',
  'Post-survey guidance for continued privacy protection',
];

export default function DebuggingServices() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ce8e80a_1px,transparent_1px),linear-gradient(to_bottom,#0ce8e80a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Debugging <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Advanced privacy and security support focused on identifying and eliminating hidden surveillance devices before they compromise your environment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-20 shadow-2xl"
        >
          <Image
            src="/images/inner-banner-1-1-1.jpg"
            alt="Debugging Services Expert"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-14">
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-3">Bug Detection</p>
              <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md leading-tight">
                Expert <span className="text-cyan-400">Debugging</span> with state-of-the-art equipment.
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What are debugging services?</h2>
            <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6" />
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Debugging services involve the detection and removal of covert surveillance devices, including hidden microphones, covert cameras, tracking systems, and illicit transmitters. These services are used to secure homes, offices, vehicles, and other sensitive environments from unauthorized monitoring.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              The purpose is not only to find devices, but to restore confidence in the privacy of the environment where important personal, legal, financial, or corporate discussions take place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 md:p-10 rounded-3xl text-white"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 mb-4">Our approach</p>
            <h2 className="text-3xl font-bold mb-5">Thorough inspection, technical accuracy, and discreet execution.</h2>
            <p className="text-slate-300 leading-8 text-base mb-5">
              At Technical Surveillance Counter Measure Services, we use highly trained professionals and advanced technology to deliver professional debugging support. Our process is designed to identify even sophisticated surveillance threats that may be missed by casual checks or consumer-grade tools.
            </p>
            <p className="text-slate-300 leading-8 text-base">
              Each survey is handled with discretion and methodical coverage so the environment can be checked without creating unnecessary noise around a sensitive issue.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 mb-4">Common coverage areas</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {detectionAreas.map((item) => (
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
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 mb-4">What our service includes</p>
            <ul className="space-y-4">
              {serviceCoverage.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why you may need debugging services</h2>
            {[
              { icon: <Radar />, title: 'Detect Hidden Devices', desc: 'Identify unauthorized surveillance equipment before it gathers more information.' },
              { icon: <Lock />, title: 'Protect Confidential Information', desc: 'Safeguard sensitive conversations, legal matters, financial details, and business strategy.' },
              { icon: <Activity />, title: 'Prevent Espionage', desc: 'Reduce the risk of competitive spying, targeted intrusion, or personal privacy compromise.' },
              { icon: <ShieldCheck />, title: 'Restore Peace of Mind', desc: 'Regain confidence that your environment is secure, private, and under your control.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white/90 p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-200">
                  <div className="text-cyan-600 w-5 h-5">{item.icon}</div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700 mb-4">Operational focus</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">A debugging survey is about more than device detection.</h2>
            <p className="text-slate-600 leading-8 text-base mb-5">
              Effective debugging work also helps reveal whether the environment itself has become vulnerable to intrusion through poor access control, suspicious objects, unusual electronics, or unexplained behavioural indicators that suggest surveillance pressure.
            </p>
            <p className="text-slate-600 leading-8 text-base">
              That makes debugging services useful not just after you discover a problem, but when you want assurance before a sensitive meeting, an executive stay, a legal strategy session, a negotiation, or an internal investigation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-t from-cyan-950/20 to-white p-10 rounded-3xl border border-cyan-500/10"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            <ScanSearch className="h-7 w-7" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Safeguard your privacy today</h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Don&apos;t let unauthorized surveillance compromise your security. Trust our debugging services to help ensure your environment is professionally checked, discreetly handled, and better protected.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link
              href="/contact-us"
              className="inline-flex px-8 py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2"
            >
              Enquiry Now <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919967107077"
              className="inline-flex px-8 py-4 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all border border-slate-200 items-center justify-center"
            >
              Call +91 9967107077
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
