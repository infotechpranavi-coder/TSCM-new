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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidHeader
          ? 'border-b border-slate-200 bg-slate-50/88 shadow-lg shadow-cyan-900/10 backdrop-blur-md'
          : 'bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-transparent'
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
              <div key={link.name} className="relative group">
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
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="w-56 bg-slate-50 border border-slate-200 rounded-xl shadow-xl overflow-hidden py-2">
                       {link.dropdown.map((dropLink) => (
                         <Link
                           key={dropLink.name}
                           href={dropLink.href}
                           className="block px-4 py-3 text-sm text-slate-700 hover:bg-white hover:text-cyan-600 transition-colors"
                         >
                           {dropLink.name}
                         </Link>
                       ))}
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
                              className="pl-6 space-y-1 overflow-hidden"
                           >
                              {link.dropdown.map(dropLink => (
                                 <Link
                                    key={dropLink.name}
                                    href={dropLink.href}
                                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-cyan-600 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                 >
                                    {dropLink.name}
                                 </Link>
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
