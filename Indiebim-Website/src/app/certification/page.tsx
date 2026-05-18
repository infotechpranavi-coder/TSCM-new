'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificateImages } from '@/data/certificates';

export default function CertificationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[520px] w-full bg-linear-to-b from-cyan-100/60 via-white to-transparent" />
        <div className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[340px] w-[340px] rounded-full bg-amber-400/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700"
          >
            <Award className="h-4 w-4" />
            Certification
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-4xl font-black leading-tight text-slate-900 md:text-6xl"
          >
            Certification &
            <span className="block bg-linear-to-r from-cyan-700 via-sky-600 to-amber-500 bg-clip-text text-transparent">
              Professional Assurance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Official certificates and training credentials held by our team in TSCM and
            counter-surveillance.
          </motion.p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {certificateImages.map((certificate, index) => (
            <motion.article
              key={certificate.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="relative bg-slate-100 p-3 sm:p-4">
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
