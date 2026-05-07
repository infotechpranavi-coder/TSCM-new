import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H16V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H7.5v3h2.4v7h3.6Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5A1.94 1.94 0 1 0 6.94 4.62a1.94 1.94 0 0 0 0 3.88ZM5.25 9.75h3.38V21H5.25V9.75Zm5.5 0h3.24v1.54h.05c.45-.85 1.55-1.74 3.2-1.74 3.42 0 4.06 2.25 4.06 5.17V21h-3.38v-5.56c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V21h-3.38V9.75Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white pb-8 pt-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/45 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* Brand */}
          <div className="space-y-4 xl:col-span-2">
            <Link href="/" className="group inline-flex flex-col items-center gap-1.5 text-center">
              <div className="relative block leading-none text-center">
                <Image
                  src="/images/logo-1.png"
                  alt="Indiebim"
                  width={140}
                  height={50}
                  className="mx-auto h-10 w-auto object-contain"
                />
              </div>
              <span className="text-center text-[11px] font-medium uppercase leading-tight tracking-[0.24em] text-slate-400">
                Since 2019
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              International-standard TSCM and bug sweep services delivered by professionals trained in the USA and Israel.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/bugsweepers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/indiebim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">TSCM Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/corporate-tscm-service" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Corporate TSCM Services
                </Link>
              </li>
              <li>
                <Link href="/residential-tscm-service" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Residential TSCM Services
                </Link>
              </li>
              <li>
                <Link href="/cyber-tscm-service" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Cyber TSCM Services
                </Link>
              </li>
              <li>
                <Link href="/tscm-services-in-mumbai" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Services in Mumbai
                </Link>
              </li>
              <li>
                <Link href="/tscm-services-in-delhi" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Services in Delhi
                </Link>
              </li>
              <li>
                <Link href="/tscm-services-in-bangalore" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Services in Bangalore
                </Link>
              </li>
              <li>
                <Link href="/tscm-services-in-ahmedabad" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Services in Ahmedabad
                </Link>
              </li>
              <li>
                <Link href="/tscm-services-in-pune" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Services in Pune
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Bug Sweep</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business-bug-sweep" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Business Bug Sweep
                </Link>
              </li>
              <li>
                <Link href="/home-bug-sweep" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Home Bug Sweep
                </Link>
              </li>
              <li>
                <Link href="/debugging-services" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Debugging Services
                </Link>
              </li>
              <li>
                <Link href="/bug-sweeping-services-in-mumbai" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Bug Sweeping Services in Mumbai
                </Link>
              </li>
              <li>
                <Link href="/bug-sweeping-services-in-pune" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Bug Sweeping Services in Pune
                </Link>
              </li>
              <li>
                <Link href="/bug-sweeping-services-in-delhi" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Bug Sweeping Services in Delhi
                </Link>
              </li>
              <li>
                <Link href="/bug-sweeping-services-in-bangalore" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Bug Sweeping Services in Bangalore
                </Link>
              </li>
              <li>
                <Link href="/bug-sweeping-services-in-ahmedabad" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Bug Sweeping Services in Ahmedabad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/our-ethics" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Our Ethics
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/certification" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Certification
                </Link>
              </li>
              <li>
                <Link href="/industries-we-serve" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/client-testimonial" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Client Testimonial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/compliance-corner" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Compliance Corner
                </Link>
              </li>
              <li>
                <Link href="/privacy-is-a-right" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Privacy is a Right
                </Link>
              </li>
              <li>
                <Link href="/client-protocol" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Client Protocol
                </Link>
              </li>
              <li>
                <Link href="/technical-counter-surveillance" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Technical Counter-Surveillance
                </Link>
              </li>
              <li>
                <Link href="/warning-signs-of-bugging" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Warning Signs of Bugging
                </Link>
              </li>
              <li>
                <Link href="/tscm-myths-vs-reality" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  TSCM Myths vs. Reality
                </Link>
              </li>
              <li>
                <Link href="/technical-glossary" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Technical Glossary
                </Link>
              </li>
              <li>
                <Link href="/our-equipments" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Our Equipments
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-slate-600 transition-colors hover:text-cyan-700">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 grid gap-8 rounded-[1.8rem] border border-slate-200 bg-slate-950 px-6 py-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Contact</p>
            <h3 className="mt-3 text-xl font-bold">Indiebim Technology Solutions Private Limited</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span>
                  A/514, Crystal Plaza, New Link Road, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra
                  400053
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
                <a href="mailto:info@indiebim.com" className="transition-colors hover:text-cyan-200">
                  info@indiebim.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
                <a href="tel:+919967107077" className="transition-colors hover:text-cyan-200">
                  +91 9967107077
                </a>
              </li>
            </ul>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex h-fit items-center justify-center self-start rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-300 lg:self-center"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} Indiebim. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-slate-900">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-and-cancellation-policy" className="transition-colors hover:text-slate-900">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


