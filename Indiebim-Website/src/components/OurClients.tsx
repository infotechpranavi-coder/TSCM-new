'use client';

import Link from 'next/link';
import { homepageCarouselClients } from '@/data/clients';
import { ClientLogo } from '@/components/ClientLogo';

export function OurClients() {
  const items = [...homepageCarouselClients, ...homepageCarouselClients];

  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Our Clients</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Trusted by leading organizations
            </h2>
          </div>
          <Link
            href="/clients"
            className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-cyan-200 hover:text-cyan-700"
          >
            View all clients
          </Link>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="client-marquee flex w-max items-center gap-10 py-2">
            {items.map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-4 transition hover:border-cyan-200 hover:bg-white hover:shadow-sm"
                title={client.name}
              >
                <ClientLogo
                  name={client.name}
                  logo={client.logo}
                  className="max-h-12 w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
