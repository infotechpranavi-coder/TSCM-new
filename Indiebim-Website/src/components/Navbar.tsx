'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavDropdownLeaf = {
  name: string;
  href: string;
  external?: boolean;
};

type NavDropdownItem = NavDropdownLeaf | { name: string; nested: NavDropdownLeaf[] };

function hasNested(item: NavDropdownItem): item is { name: string; nested: NavDropdownLeaf[] } {
  return 'nested' in item && Array.isArray(item.nested);
}

function getNestedLeaves(
  dropdown: NavDropdownItem[],
  parentNavName: string,
  nestedMenuKey: string
): NavDropdownLeaf[] | null {
  for (const item of dropdown) {
    if (hasNested(item) && `${parentNavName}::${item.name}` === nestedMenuKey) {
      return item.nested;
    }
  }
  return null;
}

function dropdownHasNested(dropdown: NavDropdownItem[]) {
  return dropdown.some(hasNested);
}

const NAV_LINKS: Array<{
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
}> = [
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
      { name: 'Warning Signs of Bugging', href: '/warning-signs-of-bugging' },
      { name: 'TSCM Myths vs. Reality', href: '/tscm-myths-vs-reality' },
      { name: 'Technical Glossary', href: '/technical-glossary' },
      { name: 'Our Equipments', href: '/our-equipments' },
      { name: 'Industries we serve', href: '/industries-we-serve' },
      { name: 'Clients', href: '/clients' },
      { name: 'Client Testimonial', href: '/client-testimonial' },
    ]
  },
  { 
    name: 'TSCM Services', 
    href: '/tscm-services',
    dropdown: [
      {
        name: 'Personal investigation',
        nested: [
          {
            name: 'Pre-Matrimonial Investigations',
            href: 'https://www.hsdetectives.com/services/personal-investigation/pre-matrimonial-investigations-services',
            external: true,
          },
          {
            name: 'Post-Matrimonial Surveillance',
            href: 'https://www.hsdetectives.com/services/personal-investigation/post-matrimonial-surveillance-services',
            external: true,
          },
          {
            name: 'Loyalty Tests',
            href: 'https://www.hsdetectives.com/services/personal-investigation/loyalty-tests-services',
            external: true,
          },
          {
            name: 'Missing Person Investigations',
            href: 'https://www.hsdetectives.com/services/personal-investigation/missing-person-investigations-services',
            external: true,
          },
          {
            name: 'Background Checks',
            href: 'https://www.hsdetectives.com/services/personal-investigation/background-checks-services',
            external: true,
          },
        ],
      },
      {
        name: 'Corporate investigation',
        nested: [
          {
            name: 'Employee Background Verification',
            href: 'https://www.hsdetectives.com/services/corporate-investigation/employee-background-verification-services',
            external: true,
          },
          {
            name: 'Fraud Investigation',
            href: 'https://www.hsdetectives.com/services/corporate-fraud-investigation-services-in-mumbai',
            external: true,
          },
          {
            name: 'Due Diligence Services',
            href: 'https://www.hsdetectives.com/services/corporate-investigation/due-diligence-services',
            external: true,
          },
          {
            name: 'Asset Tracing',
            href: 'https://www.hsdetectives.com/services/corporate-investigation/asset-tracing-services',
            external: true,
          },
          {
            name: 'Undercover Operations',
            href: 'https://www.hsdetectives.com/services/corporate-investigation/undercover-operations-services',
            external: true,
          },
        ],
      },
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
  { name: 'Publications', href: '/publications' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  /** Which parent nav + nested label is expanded (e.g. "TSCM Services::Personal investigation") */
  const [nestedMenuKey, setNestedMenuKey] = useState<string | null>(null);
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

  useEffect(() => {
    if (!mobileMenuOpen) setNestedMenuKey(null);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setNestedMenuKey(null);
  }, [openDropdown]);

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
          <Link
            href="/"
            className="group flex min-w-0 max-w-[min(100%,11rem)] flex-col items-start justify-center gap-1 self-stretch py-1 sm:max-w-none sm:pr-2"
          >
            <div className="relative block w-full leading-none">
              <Image
                src="/images/logo-1.png"
                alt="Indiebim - Your Privacy Protector"
                width={140}
                height={50}
                className="h-8 w-auto object-contain object-left sm:h-9 lg:h-10"
                priority
              />
            </div>
            <span
              className={`block w-full text-left text-[10px] font-medium uppercase leading-tight tracking-[0.24em] sm:text-[11px] ${
                useLightNav ? 'text-white/75' : 'text-slate-500 group-hover:text-slate-700'
              }`}
            >
              Since 2019
            </span>
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
                  <div
                    className="pointer-events-none absolute left-0 top-full z-50 max-w-[calc(100vw-2rem)] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                    onMouseLeave={() => setNestedMenuKey(null)}
                  >
                    {dropdownHasNested(link.dropdown) ? (
                      <div className="flex min-w-0 max-w-full max-h-[min(70vh,520px)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                        <div className="min-w-0 w-80 max-w-[min(20rem,100%)] shrink-0 overflow-x-hidden overflow-y-auto border-r border-slate-200 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          {link.dropdown.map((dropLink, index) => {
                            const prev = index > 0 ? link.dropdown[index - 1] : undefined;
                            const afterNested =
                              prev !== undefined && hasNested(prev) && !hasNested(dropLink);
                            if (hasNested(dropLink)) {
                              const nestedKey = `${link.name}::${dropLink.name}`;
                              const active = nestedMenuKey === nestedKey;
                              return (
                                <button
                                  key={dropLink.name}
                                  type="button"
                                  onMouseEnter={() => setNestedMenuKey(nestedKey)}
                                  onFocus={() => setNestedMenuKey(nestedKey)}
                                  onClick={() => setNestedMenuKey((k) => (k === nestedKey ? null : nestedKey))}
                                  className={`flex w-full min-w-0 items-center justify-between gap-2 border-t border-slate-100 px-4 py-3 text-left text-sm font-medium transition-colors first:border-t-0 ${
                                    active
                                      ? 'bg-cyan-50 text-cyan-900'
                                      : 'text-slate-800 hover:bg-slate-50'
                                  }`}
                                  aria-expanded={active}
                                  aria-haspopup="true"
                                >
                                  <span className="min-w-0 break-words pr-1">{dropLink.name}</span>
                                  <ChevronRight
                                    className={`h-4 w-4 shrink-0 transition-transform ${active ? 'translate-x-0.5 text-cyan-700' : 'text-slate-400'}`}
                                    aria-hidden
                                  />
                                </button>
                              );
                            }
                            if (dropLink.external) {
                              return (
                                <a
                                  key={dropLink.name}
                                  href={dropLink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex min-w-0 items-center gap-2 px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-700 ${afterNested ? 'border-t border-slate-200' : ''}`}
                                >
                                  <span className="min-w-0 flex-1 break-words">{dropLink.name}</span>
                                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={dropLink.name}
                                href={dropLink.href}
                                className={`block min-w-0 break-words px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-700 ${afterNested ? 'border-t border-slate-200' : ''}`}
                              >
                                {dropLink.name}
                              </Link>
                            );
                          })}
                        </div>
                        <AnimatePresence mode="wait">
                          {(() => {
                            const sideLinks =
                              nestedMenuKey &&
                              getNestedLeaves(link.dropdown, link.name, nestedMenuKey);
                            if (!sideLinks) return null;
                            return (
                              <motion.div
                                key={nestedMenuKey}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.18, ease: 'easeOut' }}
                                className="flex w-72 min-w-0 max-w-[min(18rem,calc(100vw-20rem))] shrink-0 flex-col overflow-x-hidden overflow-y-auto border-l border-cyan-200/60 bg-[linear-gradient(180deg,#f0fdfa_0%,#ffffff_55%)] py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                              >
                                <p className="break-words px-4 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-800">
                                  {nestedMenuKey.split('::')[1] ?? 'Services'}
                                </p>
                                <div className="min-w-0 pb-2">
                                  {sideLinks.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex min-w-0 items-center gap-2 border-t border-slate-100/90 px-4 py-2.5 text-sm text-slate-700 transition-colors first:border-t-0 hover:bg-cyan-50/80 hover:text-cyan-800"
                                    >
                                      <span className="min-w-0 flex-1 break-words leading-snug">{sub.name}</span>
                                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            );
                          })()}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="w-80 min-w-0 max-w-[min(20rem,100%)] max-h-[min(70vh,520px)] overflow-y-auto overflow-x-hidden rounded-xl border border-slate-200 bg-white shadow-lg [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="min-w-0 py-2">
                          {link.dropdown.map((dropLink) => {
                            if (dropLink.external) {
                              return (
                                <a
                                  key={dropLink.name}
                                  href={dropLink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex min-w-0 items-center gap-2 px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-700"
                                >
                                  <span className="min-w-0 flex-1 break-words">{dropLink.name}</span>
                                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={dropLink.name}
                                href={dropLink.href}
                                className="block min-w-0 break-words px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-700"
                              >
                                {dropLink.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
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
                              className="mt-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
                           >
                              {link.dropdown.map((dropLink, index) => {
                                 const prevM = index > 0 ? link.dropdown[index - 1] : undefined;
                                 const afterNestedM =
                                    prevM !== undefined && hasNested(prevM) && !hasNested(dropLink);
                                 return (
                                 <motion.div
                                    key={dropLink.name}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.16 }}
                                 >
                                   {hasNested(dropLink) ? (
                                      <div className="border-t border-slate-200 first:border-t-0">
                                         <button
                                            type="button"
                                            onClick={() => {
                                               const nestedKey = `${link.name}::${dropLink.name}`;
                                               setNestedMenuKey((k) => (k === nestedKey ? null : nestedKey));
                                            }}
                                            className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-cyan-600"
                                            aria-expanded={nestedMenuKey === `${link.name}::${dropLink.name}`}
                                         >
                                            <span>{dropLink.name}</span>
                                            <ChevronRight
                                               className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                                                  nestedMenuKey === `${link.name}::${dropLink.name}`
                                                     ? 'rotate-90 text-cyan-700'
                                                     : ''
                                               }`}
                                               aria-hidden
                                            />
                                         </button>
                                         <AnimatePresence initial={false}>
                                            {nestedMenuKey === `${link.name}::${dropLink.name}` && (
                                               <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.2 }}
                                                  className="overflow-hidden bg-white/80"
                                               >
                                                  {dropLink.nested.map((sub) => (
                                                     <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 border-t border-slate-100 px-3 py-3 pl-5 text-sm font-medium text-slate-600 transition-colors hover:bg-cyan-50/60 hover:text-cyan-700"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                     >
                                                        <span className="min-w-0 flex-1">{sub.name}</span>
                                                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                                                     </a>
                                                  ))}
                                               </motion.div>
                                            )}
                                         </AnimatePresence>
                                      </div>
                                   ) : dropLink.external ? (
                                      <a
                                         href={dropLink.href}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className={`flex items-center gap-2 px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-cyan-600 ${afterNestedM ? 'border-t border-slate-200' : ''}`}
                                         onClick={() => setMobileMenuOpen(false)}
                                      >
                                         <span className="min-w-0 flex-1">{dropLink.name}</span>
                                         <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                                      </a>
                                   ) : (
                                      <Link
                                         href={dropLink.href}
                                         className={`block px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-cyan-600 ${afterNestedM ? 'border-t border-slate-200' : ''}`}
                                         onClick={() => setMobileMenuOpen(false)}
                                      >
                                         {dropLink.name}
                                      </Link>
                                   )}
                                 </motion.div>
                              );
                              })}
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
