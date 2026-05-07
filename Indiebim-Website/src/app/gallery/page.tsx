import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/data/galleryImages';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#ecfeff_100%)] pb-24 pt-28">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Gallery</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            A closer look at our field work and protection environments.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore a quick visual overview of our counter-surveillance, bug sweep, and rapid-response operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Media {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">{image.title}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
