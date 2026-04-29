import Link from 'next/link';
import { ShieldAlert, Mail, Phone, MapPin, Globe, MessageSquare, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <ShieldAlert className="w-8 h-8 text-cyan-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900">INDIEBIM</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              We Provide International Standards TSCM & Bug Sweep Services By our professionally TSCM trained experts from the USA and Israel.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-cyan-500/20 hover:text-cyan-600 transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-cyan-500/20 hover:text-cyan-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-cyan-500/20 hover:text-cyan-600 transition-colors">
                <Briefcase className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">TSCM Services</h3>
            <ul className="space-y-3">
              <li><Link href="/corporate-tscm-service" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Corporate TSCM Services</Link></li>
              <li><Link href="/residential-tscm-service" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Residential TSCM Services</Link></li>
              <li><Link href="/cyber-tscm-service" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Cyber TSCM Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">Bug Sweep</h3>
            <ul className="space-y-3">
              <li><Link href="/business-bug-sweep" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Business Bug Sweep</Link></li>
              <li><Link href="/home-bug-sweep" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Home Bug Sweep</Link></li>
              <li><Link href="/debugging-services" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Debugging Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-is-a-right" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Privacy is a Right</Link></li>
              <li><Link href="/client-protocol" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Client Protocol</Link></li>
              <li><Link href="/compliance-corner" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Compliance Corner</Link></li>
              <li><Link href="/technical-counter-surveillance" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Technical Counter-Surveillance</Link></li>
              <li><Link href="/technical-glossary" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">Technical Glossary</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span>A/514 , Crystal Plaza , New Link Road , Veera Desai Industrial Estate, Andheri West , Mumbai , Maharashtra 400053</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-cyan-600 shrink-0" />
                <a href="mailto:info@indiebim.com" className="hover:text-cyan-600 transition-colors">info@indiebim.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-cyan-600 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919967107077" className="hover:text-cyan-600 transition-colors">+91 9967107077</a>
                  <a href="tel:02240143155" className="hover:text-cyan-600 transition-colors mt-1">022 4014 3155</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950 px-6 py-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:px-8 sm:py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Public Interest Resource</p>
              <h3 className="mt-3 text-2xl font-black leading-tight">The &ldquo;Privacy is a Right&rdquo; Manifesto</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Read IndieBim&apos;s statement on privacy, safe living, victim support, and why technical protection should never be used to invade another person&apos;s life.
              </p>
            </div>
            <Link
              href="/privacy-is-a-right"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Privacy is a Right
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            Â© {new Date().getFullYear()} Indiebim All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link>
            <Link href="/refund-and-cancellation-policy" className="hover:text-slate-900 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
