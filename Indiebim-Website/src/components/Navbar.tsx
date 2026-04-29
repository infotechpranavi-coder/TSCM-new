'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'Our Company', 
    href: '/about-us',
    dropdown: [
      { name: 'Our Team', href: '/our-team' },
      { name: 'Our Ethics', href: '/our-ethics' },
      { name: 'Client Protocol', href: '/client-protocol' },
      { name: 'Compliance Corner', href: '/compliance-corner' },
      { name: 'Privacy is a Right', href: '/privacy-is-a-right' },
      { name: 'Technical Counter-Surveillance', href: '/technical-counter-surveillance' },
      { name: 'Technical Glossary', href: '/technical-glossary' },
      { name: 'Our Equipments', href: '/our-equipments' },
      { name: 'Industries we serve', href: '/industries-we-serve' },
      { name: 'Client Testimonial', href: '/client-testimonial' },
    ]
  },
  { 
    name: 'TSCM Services', 
    href: '/tscm-services',
    dropdown: [
      { name: 'Corporate tscm service', href: '/corporate-tscm-service' },
      { name: 'Residential TSCM Service', href: '/residential-tscm-service' },
      { name: 'Cyber TSCM Service', href: '/cyber-tscm-service' },
      { name: 'TSCM Services in Mumbai', href: '/tscm-services-in-mumbai' },
      { name: 'TSCM Services in Delhi', href: '/tscm-services-in-delhi' },
      { name: 'TSCM Services in Bangalore', href: '/tscm-services-in-bangalore' },
      { name: 'TSCM Services in Ahmedabad', href: '/tscm-services-in-ahmedabad' },
      { name: 'TSCM Services in Pune', href: '/tscm-services-in-pune' },
    ]
  },
  { 
    name: 'Bug Sweep', 
    href: '/bug-sweep',
    dropdown: [
      { name: 'Business Bug Sweep', href: '/business-bug-sweep' },
      { name: 'Home Bug Sweep', href: '/home-bug-sweep' },
      { name: 'Debugging Services', href: '/debugging-services' },
      { name: 'Bug Sweeping Services in Pune', href: '/bug-sweeping-services-in-pune' },
      { name: 'Bug Sweeping Services in Mumbai', href: '/bug-sweeping-services-in-mumbai' },
      { name: 'Bug Sweeping Services in Delhi', href: '/bug-sweeping-services-in-delhi' },
      { name: 'Bug Sweeping Services in Bangalore', href: '/bug-sweeping-services-in-bangalore' },
      { name: 'Bug Sweeping Services in Ahmedabad', href: '/bug-sweeping-services-in-ahmedabad' },
    ]
  },
  { name: 'Case Studies', href: '/case-study' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isHomePage = pathname === '/';
  const useLightNav = isHomePage && !isScrolled && !mobileMenuOpen;
  const useSolidHeader = !isHomePage || isScrolled || mobileMenuOpen;

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDropdownMeta = (name: string) => {
    if (name === 'Our Company') {
      return { eyebrow: 'Information Hub' };
    }

    if (name === 'TSCM Services') {
      return { eyebrow: 'Technical Coverage' };
    }

    return { eyebrow: 'Debugging Services' };
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidHeader
          ? 'border-b border-slate-200/90 bg-white/96 shadow-lg shadow-slate-900/10 backdrop-blur-md'
          : 'border-b border-white/10 bg-gradient-to-b from-slate-950/92 via-slate-950/58 to-slate-950/8 backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/logo-1.png"
                alt="Indiebim - Your Privacy Protector"
                width={140}
                height={50}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="group relative"
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                    useLightNav
                      ? 'text-white hover:text-cyan-200'
                      : 'text-slate-700 hover:text-cyan-600'
                  } ${isActiveLink(link.href) ? (useLightNav ? 'text-cyan-100' : 'text-cyan-700') : ''}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                      isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    } ${useLightNav ? 'bg-white' : 'bg-cyan-500'
                    }`}
                  ></span>
                </Link>

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="w-72 overflow-hidden rounded-[1.4rem] border border-slate-200/90 bg-white/96 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                      <div className="border-b border-slate-200 bg-slate-50/90 px-4 py-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">
                          {getDropdownMeta(link.name).eyebrow}
                        </p>
                      </div>

                      <div className="grid gap-1.5 p-2.5">
                        {link.dropdown.map((dropLink, index) => (
                          <Link
                            key={dropLink.name}
                            href={dropLink.href}
                            className="group/item flex items-center justify-between rounded-xl border border-transparent bg-white px-3.5 py-3 text-sm text-slate-700 transition-all hover:border-cyan-200 hover:bg-slate-50 hover:shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors group-hover/item:bg-cyan-50 group-hover/item:text-cyan-700">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="font-medium">{dropLink.name}</span>
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-all group-hover/item:translate-x-1 group-hover/item:text-cyan-600">
                              Open
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-all hover:from-indigo-600 hover:to-violet-700 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
            >
              Get Secure
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors ${
              useLightNav ? 'text-white hover:text-cyan-200' : 'text-slate-700 hover:text-slate-900'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-200 bg-white lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                     <Link
                        href={link.href}
                        className={`block flex-grow rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                          isActiveLink(link.href)
                            ? 'bg-cyan-50 text-cyan-700'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-600'
                        }`}
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                     >
                        {link.name}
                     </Link>
                     {link.dropdown && (
                        <button 
                           onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                           className="p-3 text-slate-600 hover:text-cyan-600"
                        >
                           <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                     )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                     <AnimatePresence>
                        {openDropdown === link.name && (
                           <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-2"
                           >
                              <div className="px-2 pb-2 pt-1">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
                                  {getDropdownMeta(link.name).eyebrow}
                                </p>
                              </div>
                              {link.dropdown.map((dropLink, index) => (
                                 <motion.div
                                    key={dropLink.name}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.16, delay: index * 0.02 }}
                                 >
                                   <Link
                                      href={dropLink.href}
                                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-cyan-600"
                                      onClick={() => setMobileMenuOpen(false)}
                                   >
                                      <span>{dropLink.name}</span>
                                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                        Go
                                      </span>
                                   </Link>
                                 </motion.div>
                              ))}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
