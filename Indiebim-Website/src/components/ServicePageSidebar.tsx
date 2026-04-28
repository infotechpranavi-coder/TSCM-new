'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

interface ServicePageSidebarProps {
  city?: string;
}

export default function ServicePageSidebar({ city = "India" }: ServicePageSidebarProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
      {/* Banner image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src="/images/inner-banner-1-1-1.jpg"
          alt="Professional TSCM Security Expert"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
            Counter-Intelligence Expert
          </p>
          <p className="text-white font-bold text-lg leading-tight">
            Ready to Secure {city}
          </p>
        </div>
      </div>

      {/* CTA Content */}
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Your Privacy Today!</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          If you suspect unauthorized surveillance in your home, office, or vehicle — act now. Our TSCM experts in {city} respond within 24–48 hours.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-3"
        >
          Enquiry Now
        </Link>
        <a
          href="tel:+919967107077"
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold hover:border-cyan-500/50 hover:text-cyan-600 transition-all"
        >
          <Phone className="w-4 h-4" />
          +91 99671 07077
        </a>
      </div>
    </div>
  );
}
