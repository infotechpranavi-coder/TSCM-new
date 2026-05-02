'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type PublicationCardProps = {
  title: string;
  description?: string;
  url: string;
  index?: number;
};

export default function PublicationCard({ title, description, url, index = 0 }: PublicationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px', amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-0 transition-[box-shadow,border-color] duration-500 hover:border-cyan-300/80 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12),0_0_0_1px_rgba(34,211,238,0.12)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.07] via-transparent to-indigo-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -left-[40%] top-0 h-full w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">
        <h2 className="min-h-0 flex-1 text-lg font-bold leading-snug tracking-tight text-slate-900 text-balance transition-colors duration-300 group-hover:text-cyan-950 line-clamp-4">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 line-clamp-2">
            {description}
          </p>
        ) : null}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-sm font-semibold text-cyan-800 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-100 hover:shadow-md hover:shadow-cyan-500/15"
        >
          Read More
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
