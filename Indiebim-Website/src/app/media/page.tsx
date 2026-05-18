'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Camera,
  ExternalLink,
  FileText,
  Newspaper,
  ShieldCheck,
} from 'lucide-react';
import { galleryPreviewImages } from '@/data/galleryImages';
import { featuredPressImage, mediaCoverageItems } from '@/data/mediaCoverage';

const mediaSections = [
  {
    title: 'Photo Gallery',
    description:
      'Field operations, counter-surveillance environments, and on-site TSCM visuals from recent deployments.',
    href: '/gallery',
    icon: Camera,
    cta: 'View Gallery',
  },
  {
    title: 'Publications',
    description:
      'Press coverage, syndicated releases, and industry articles featuring Indiebim TSCM expertise.',
    href: '/publications',
    icon: BookOpen,
    cta: 'View Publications',
  },
  {
    title: 'Case Studies',
    description:
      'Investigation narratives across finance, law, infrastructure, hospitality, and executive security.',
    href: '/case-study',
    icon: ShieldCheck,
    cta: 'View Case Studies',
  },
  {
    title: 'Blog',
    description:
      'Insights on debugging, privacy, corporate espionage risk, and technical counter-surveillance in India.',
    href: '/blog',
    icon: FileText,
    cta: 'Read Blog',
  },
] as const;

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_55%,#f8fafc_100%)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Media</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Stories, visuals, and coverage from the field.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore Indiebim media — press features, photo galleries, publications, case studies,
            and blog updates from our counter-surveillance and TSCM operations.
          </p>
        </motion.div>
      </section>

      {/* Press & coverage */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Press</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Featured coverage
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Recent articles and print features on Wahid Shaikh, Indiebim Technology Solutions, and
            technical counter-surveillance leadership in India.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
              <Image
                src={featuredPressImage.src}
                alt={featuredPressImage.alt}
                fill
                className="bg-slate-100 object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
            <figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">
              {featuredPressImage.caption}
            </figcaption>
          </motion.figure>

          <div className="flex flex-col gap-6">
            {mediaCoverageItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-cyan-200 hover:shadow-md"
              >
                {item.imageSrc ? (
                  <div className="relative h-36 w-full border-b border-slate-100 bg-slate-100 sm:h-44">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority={index === 0}
                    />
                  </div>
                ) : null}
                <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                      {item.publisher}
                    </p>
                    {item.date ? (
                      <p className="mt-0.5 text-xs text-slate-500">{item.date}</p>
                    ) : null}
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-snug text-slate-950">{item.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-7 text-slate-600">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2.5 text-sm font-semibold text-cyan-800 transition hover:border-cyan-400 hover:bg-cyan-100"
                >
                  Read article
                  <ExternalLink className="h-4 w-4" />
                </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl border-t border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Featured</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Field operation highlights
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A curated selection from our gallery. View the full collection for every deployment
              visual.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:self-auto"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {galleryPreviewImages.map((image, index) => (
            <motion.article
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {image.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6">TSCM field operations</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
        >
          Browse by format
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {mediaSections.map((section, index) => (
            <motion.article
              key={section.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <section.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">{section.title}</h3>
              <p className="mt-3 grow text-sm leading-7 text-slate-600">{section.description}</p>
              <Link
                href={section.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
              >
                {section.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
