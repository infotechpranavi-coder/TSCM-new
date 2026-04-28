'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Lock, ShieldCheck, UserCheck } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    paragraphs: [
      'To provide elite Technical Surveillance Counter Measures and Cyber Security services, we may collect personal identity information including your name, corporate affiliation, and contact details such as email address and phone number.',
      'We may collect site-specific data including physical addresses of offices, residences, or warehouses requiring sweeps in metros such as Mumbai, Pune, or Gurgaon.',
      'Technical log data such as IP addresses and browser types may be collected when you interact with our digital platforms for security inquiries.',
      'We may also collect case-specific information regarding suspected surveillance or security breaches shared during consultation.',
    ],
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    paragraphs: [
      'Your data is used strictly to execute our defensive mandates.',
      'This includes coordinating and deploying our USA and Israel-trained expert teams to your location, generating comprehensive post-sweep technical reports and vulnerability assessments, and maintaining a secure communication channel for high-sensitivity security alerts.',
      'We never use client data for marketing or third-party profiling.',
    ],
  },
  {
    number: '03',
    title: 'Absolute Confidentiality and Data Retention',
    paragraphs: [
      'All information shared with IndieBim is treated as top secret. Our staff, including our Cyber Security Experts and Strategic Consultants, are bound by strict non-disclosure obligations.',
      'Upon successful completion of a TSCM project and delivery of the final report, we offer a zero-trace option under which project-specific digital footprints can be permanently purged from our secure servers.',
      'All digital communication and stored reports are protected using military-grade AES-256 encryption.',
    ],
  },
  {
    number: '04',
    title: 'Third-Party Disclosure',
    paragraphs: [
      'IndieBim Technology Solutions Private Limited does not sell, trade, or otherwise transfer personally identifiable information to outside parties.',
      'This does not include trusted third parties who assist us in operating our website or servicing you, provided they agree to keep this information confidential and operate under the same high ethical standards.',
    ],
  },
  {
    number: '05',
    title: 'Compliance with Indian Legal Authorities',
    paragraphs: [
      'We cooperate with Indian law enforcement, including agencies such as the Crime Branch, only when required by a valid legal warrant or as mandated by the laws of the Republic of India.',
      'Our internal consultant, K.S. Shareef, Retired DCP, Crime Branch, helps ensure our legal protocols remain beyond reproach.',
    ],
  },
  {
    number: '06',
    title: 'Cookies and Tracking',
    paragraphs: [
      'Our website, `tscm.in`, uses minimal cookies to improve user experience and analyze site traffic for SEO and AEO purposes.',
      'We do not use tracking cookies that identify individual users or their private browsing habits.',
    ],
  },
  {
    number: '07',
    title: 'Your Rights (DPDP Act Compliance)',
    paragraphs: [
      'Under Indian law, you have the right to request access to the personal data we hold about you.',
      'You may request correction of inaccuracies in the data we maintain.',
      'You may also request erasure of your data once the security mandate is complete, subject to any applicable legal retention requirements.',
    ],
  },
  {
    number: '08',
    title: 'Contact Our Privacy Officer',
    paragraphs: [
      'For any questions regarding this Privacy Policy or to discuss a sensitive security matter, please contact us through a secure and clean line as advised in our FAQ.',
      'IndieBim Technology Solutions Private Limited.',
      'Headquarters: Mumbai, Maharashtra, India.',
      'Web: `tscm.in`.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7fafc] pt-32 pb-24 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.82], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_24%)]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div className="max-w-3xl pt-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800"
            >
              <ShieldCheck className="h-4 w-4" />
              Privacy Policy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              How IndieBim collects, protects, and manages client information.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              At IndieBim Technology Solutions Private Limited, accessible via `tscm.in`, we recognize that privacy is
              the core of our business. This policy outlines how we collect, protect, and manage client information
              across India in line with the Information Technology Act, 2000 and the Digital Personal Data Protection Act.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                Last Updated: March 2026
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                IT Act and DPDP aligned
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
              <ChevronRight className="h-4 w-4" />
              <span className="text-cyan-700">Privacy Policy</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="grid gap-4 self-start"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 shadow-sm">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Confidentiality</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Client data is handled as highly confidential information with strict internal controls and restricted access.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 shadow-sm">
                <UserCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Your Rights</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clients may request access, correction, and erasure of eligible personal data in accordance with Indian law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-black text-cyan-700 shadow-sm">
                    {section.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
