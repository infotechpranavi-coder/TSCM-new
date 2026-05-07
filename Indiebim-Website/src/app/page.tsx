'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Radio,
  Search,
  Lock,
  ShieldCheck,
  Star,
  Building2,
  Home as HomeIcon,
  EyeOff,
  ArrowRight,
} from 'lucide-react';
import { galleryImages } from '@/data/galleryImages';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const heroSlides = [
    {
      eyebrow: 'Active Sweep',
      title: 'Counter-Surveillance',
      text: 'Real-world detection support for corporate, residential, and executive environments.',
      image: '/images/banner-2-5-1.jpg',
      href: '/counter-surveillance',
      highlights: ['Executive travel checks', 'Live threat detection', 'Discreet deployment'],
    },
    {
      eyebrow: 'Privacy Check',
      title: 'Bug Sweep',
      text: 'Targeted technical inspection for hidden devices, suspicious signals, and compromised spaces.',
      image: '/images/bug.jpg',
      href: '/business-bug-sweep',
      highlights: ['Office and home sweeps', 'Hidden device detection', 'Signal analysis'],
    },
    {
      eyebrow: 'Secure Venue',
      title: 'TSCM Coverage',
      text: 'Minimal disruption, fast response, and discreet protection for sensitive meetings and travel stays.',
      image: '/images/tscm.jpg',
      href: '/cyber-tscm-service',
      highlights: ['Meeting room protection', 'Hybrid cyber checks', 'Rapid response teams'],
    },
  ];

  const testimonials = [
    {
      name: "Ganesh Tiwari",
      text: "Your work is commendable; may you always progress further.",
      tag: "Operational Trust"
    },
    {
      name: "Anju Yadav",
      text: "Very good company. Highly recommended for debugging services.",
      tag: "Debugging Services"
    },
    {
      name: "Tanveer Solanki",
      text: "Highly professional team and good knowledge about the work. Very helpful and very supportive.",
      tag: "Professional Support"
    },
    {
      name: "Sourav Bijlani",
      text: "Very helpful and supportive. Highly recommended for everyone.",
      tag: "Client Confidence"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollServicesLeft, setCanScrollServicesLeft] = useState(false);
  const [canScrollServicesRight, setCanScrollServicesRight] = useState(true);
  const activeHero = heroSlides[activeSlide];
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const servicesAutoScrollFrameRef = useRef<number | null>(null);
  const servicesAutoScrollPauseUntilRef = useRef(0);
  const servicesHoveredRef = useRef(false);
  const pauseServicesAutoScroll = (duration = 2200) => {
    servicesAutoScrollPauseUntilRef.current = Date.now() + duration;
  };

  const updateServicesScrollState = () => {
    const el = servicesScrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const hasOverflow = maxScrollLeft > 8;
    setCanScrollServicesLeft(hasOverflow);
    setCanScrollServicesRight(hasOverflow);
  };

  const scrollServices = (dir: 'left' | 'right') => {
    const el = servicesScrollRef.current;
    if (!el) return;
    pauseServicesAutoScroll();
    const delta = dir === 'left' ? -Math.min(el.clientWidth * 0.8, 360) : Math.min(el.clientWidth * 0.8, 360);
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const handleServicesWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const el = servicesScrollRef.current;
    if (!el) return;

    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    pauseServicesAutoScroll();
    el.scrollBy({ left: event.deltaY, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const el = servicesScrollRef.current;
    if (!el) return;

    updateServicesScrollState();
    el.addEventListener('scroll', updateServicesScrollState, { passive: true });
    window.addEventListener('resize', updateServicesScrollState);

    return () => {
      el.removeEventListener('scroll', updateServicesScrollState);
      window.removeEventListener('resize', updateServicesScrollState);
    };
  }, []);

  useEffect(() => {
    const el = servicesScrollRef.current;
    if (!el) return;

    let previousTime = performance.now();

    const step = (currentTime: number) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const isPaused = servicesHoveredRef.current || Date.now() < servicesAutoScrollPauseUntilRef.current;
      const delta = currentTime - previousTime;
      previousTime = currentTime;

      if (!isPaused && maxScrollLeft > 0) {
        el.scrollLeft += delta * 0.035;

        if (el.scrollLeft >= maxScrollLeft) {
          el.scrollLeft = 0;
        }
      }

      servicesAutoScrollFrameRef.current = window.requestAnimationFrame(step);
    };

    servicesAutoScrollFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (servicesAutoScrollFrameRef.current !== null) {
        window.cancelAnimationFrame(servicesAutoScrollFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO — light, minimal */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f0f9ff_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(34,211,238,0.16),transparent),radial-gradient(ellipse_60%_40%_at_90%_20%,rgba(99,102,241,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 shadow-sm"
              >
                <ShieldAlert className="h-4 w-4" />
                TSCM · Counter-surveillance · Debugging
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]"
              >
                Privacy that holds up where it matters—starting with{' '}
                <span className="text-cyan-600">professional</span>{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeHero.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-700"
                  >
                    {activeHero.title.toLowerCase()}
                  </motion.span>
                </AnimatePresence>
                .
              </motion.h1>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSlide}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {activeHero.text}
                </motion.p>
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-xl text-sm leading-7 text-slate-500"
              >
                International-standard sweeps for boardrooms, residences, travel, and executive spaces—handled with
                discretion from first call to final report.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeHero.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-cyan-700"
                >
                  Get a confidential quote
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={activeHero.href}
                  className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-300 hover:text-cyan-800"
                >
                  {activeHero.eyebrow} — learn more
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-200/80 pt-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Typical response</p>
                  <p className="mt-1 text-2xl font-black text-slate-950">24–48 hrs</p>
                </div>
                <div className="hidden h-10 w-px bg-slate-200 sm:block" aria-hidden />
                <div className="flex items-center gap-3">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index ? 'w-8 bg-cyan-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Show ${slide.title}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-800"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-800"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <span className="pl-1 text-sm tabular-nums text-slate-500">
                    {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-200/50 via-transparent to-indigo-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_28px_80px_-20px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[4/5] max-h-[min(72vh,520px)] w-full sm:aspect-[5/6]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeHero.image}
                        alt={activeHero.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 44vw"
                        priority={activeSlide === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {activeHero.eyebrow}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">Focus</p>
                    <p className="mt-2 text-2xl font-bold leading-tight">{activeHero.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section className="relative z-10 overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5fbff_48%,#eef7fb_100%)] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6rem] top-10 h-56 w-56 rounded-full bg-cyan-200/45 blur-3xl" />
          <div className="absolute right-[-4rem] top-1/3 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Core Response Tracks</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Three focused ways we secure exposed environments.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Each service line is built for a different stage of risk: proactive detection, targeted device discovery,
                and rapid on-site response when the situation needs immediate control.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
              {[
                { label: 'Coverage', value: 'Pan-India' },
                { label: 'Response', value: '24-48 hrs' },
                { label: 'Focus', value: 'TSCM + Debugging' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-black text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative grid gap-8 md:grid-cols-3"
          >
            {[
              {
                title: "TSCM",
                icon: <Radio className="w-8 h-8 text-indigo-600" />,
                desc: "Technical surveillance countermeasures (TSCM) describes the action of sweeping for devices that may be spying on you.",
                image: "/images/tscm.jpg",
                href: "/tscm-services-in-delhi",
                tone: "from-indigo-500 via-sky-500 to-cyan-400",
                accent: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
                kicker: "Signal Intelligence",
                stat: "24GHz Scan Range",
              },
              {
                title: "BUG SWEEP",
                icon: <Search className="w-8 h-8 text-emerald-500" />,
                desc: "Bug Sweeping is all about debugging. It's a physical and technical countermeasures survey used to locate illicit electronic devices.",
                image: "/images/bug.jpg",
                href: "/business-bug-sweep",
                tone: "from-emerald-500 via-teal-500 to-cyan-400",
                accent: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
                kicker: "Targeted Discovery",
                stat: "Room-by-Room Sweep",
              },
              {
                title: "SUPPORT",
                icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
                desc: "We can be on-site within 24 to 48 hours after receipt of your Service Agreement to secure your critical environments.",
                image: "/images/support.jpg",
                href: "/contact-us",
                tone: "from-rose-500 via-orange-500 to-amber-400",
                accent: "bg-rose-50 text-rose-700 border-rose-200/80",
                kicker: "Rapid Deployment",
                stat: "24-48 Hr Response",
              }
            ].map((feature, i) => (
              <motion.article
                key={i}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 shadow-[0_20px_55px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_75px_rgba(14,116,144,0.16)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${feature.tone}`} />
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.75)_100%)]" />
                  <div className="absolute left-5 top-5">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur ${feature.accent}`}>
                      <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                      {feature.kicker}
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/35 text-white backdrop-blur-md">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-slate-950">{feature.title}</h3>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Structured protection service
                      </p>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {feature.stat}
                    </div>
                  </div>
                  <p className="mt-5 min-h-[96px] text-sm leading-7 text-slate-600">
                    {feature.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Readiness</p>
                      <p className="mt-1 text-sm text-slate-500">Discreet field support and technical reporting</p>
                    </div>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-600 hover:gap-3"
                    >
                      Explore
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-cyan-200/70" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-4">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Are You Being <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Secretly Watched?</span>
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Do you suspect your office, home, car, mobile, or laptop has been compromised? Does your business not feel right? Do you sometimes doubt being &apos;watched&apos; secretly? 
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Or, more still, you feel a potential victim of corporate espionage? We are your solution to all your answers and doubts. Delivering the Best Security Solutions to our clients.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Nationwide fast response times",
                  "Expert ex-military & intelligence personnel",
                  "Advanced military-grade detection equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-600 shrink-0">
                      <Lock className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/about-us" 
                className="px-6 py-3 rounded-lg bg-slate-200 text-slate-900 font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                Learn More About Us
              </Link>
            </motion.div>
            
            {/* Visual element - Real why-us photo */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative flex justify-center items-center"
            >
               <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 z-10 pointer-events-none rounded-3xl"></div>
                 <Image
                   src="/images/why-us.jpeg"
                   alt="Why Choose Indiebim"
                   width={400}
                   height={560}
                   className="w-full h-auto object-cover"
                 />
               </div>
               {/* Floating badge */}
               <div className="absolute -bottom-4 -right-4 md:right-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-xl z-20">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Response Time</p>
                 <p className="text-2xl font-extrabold text-cyan-600">24–48 hrs</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES — minimal horizontal strip */}
      <section className="border-y border-slate-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl font-black tracking-tight text-cyan-600 md:text-6xl lg:text-7xl lg:leading-[0.95]">
                Services
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
                Discreet TSCM, debugging, and counter-surveillance for boardrooms, homes, and travel—where a single leak
                costs more than a sweep ever will.
              </p>
            </motion.div>
            <div className="flex shrink-0 items-center gap-2 md:pb-1">
              <button
                type="button"
                onClick={() => scrollServices('left')}
                disabled={!canScrollServicesLeft}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Scroll services left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollServices('right')}
                disabled={!canScrollServicesRight}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Scroll services right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/80 to-transparent" />
            <div
              ref={servicesScrollRef}
              onWheel={handleServicesWheel}
              onMouseEnter={() => {
                servicesHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                servicesHoveredRef.current = false;
                pauseServicesAutoScroll(500);
              }}
              onTouchStart={() => pauseServicesAutoScroll(2800)}
              onPointerDown={() => pauseServicesAutoScroll(2800)}
              className="flex cursor-grab gap-4 overflow-x-auto pb-2 pt-1 scroll-smooth pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing"
            >
              {[
              {
                title: 'Eavesdropping detection',
                desc: 'RF, lines, and venue checks when sensitive conversations need a clean bill of health.',
                href: '/eavesdropping-detection',
                icon: Radio,
                iconWrap: 'bg-violet-50 text-violet-600',
              },
              {
                title: 'Corporate TSCM',
                desc: 'Boardrooms and offices swept for illicit transmitters, dormant devices, and hybrid threats.',
                href: '/corporate-tscm-service',
                icon: Building2,
                iconWrap: 'bg-sky-50 text-sky-600',
              },
              {
                title: 'Counter-surveillance',
                desc: 'When you need clarity on hostile observation, travel risk, or compromised meetings.',
                href: '/counter-surveillance',
                icon: EyeOff,
                iconWrap: 'bg-rose-50 text-rose-600',
              },
              {
                title: 'Debugging & sweeps',
                desc: 'Structured bug sweeps using professional-grade gear—not consumer spy toys.',
                href: '/debugging-services',
                icon: Search,
                iconWrap: 'bg-teal-50 text-teal-600',
              },
              {
                title: 'Residential TSCM',
                desc: 'Homes and private spaces checked with the same rigour as corporate sites.',
                href: '/residential-tscm-service',
                icon: HomeIcon,
                iconWrap: 'bg-amber-50 text-amber-600',
              },
              {
                title: 'Cyber TSCM',
                desc: 'Network-adjacent and hybrid threats reviewed alongside physical sweep coverage.',
                href: '/cyber-tscm-service',
                icon: Lock,
                iconWrap: 'bg-cyan-50 text-cyan-700',
              },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="min-w-[min(100%,280px)] max-w-[280px] snap-start"
                  >
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/80 hover:shadow-[0_20px_40px_-18px_rgba(8,145,178,0.2)]"
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconWrap} transition group-hover:scale-105`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{item.desc}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition group-hover:gap-2">
                        View
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 md:text-left">
            Pan-India deployment · Typical response window 24–48 hrs · Confidential by default
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_46%,#ecfeff_100%)] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-3rem] top-16 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-12 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Gallery</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A quick look inside our media gallery.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Browse recent visuals from our counter-surveillance, bug sweep, and technical security environments.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:self-auto"
            >
              View Full Media
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {galleryImages.map((image, index) => (
              <motion.article
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Photo {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6">{image.title}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-4">Client Testimonials</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Leaders</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-slate-900 font-bold">Excellent</span>
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-slate-600 text-sm">Based on 22 reviews</span>
              </div>
              <Link
                href="/clienttestimonial"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                View Full Client Testimonial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {review.tag}
                </div>
                  <div className="mb-4 flex text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm leading-7 text-slate-700 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-600">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{review.name}</h5>
                      <p className="text-slate-500 text-xs">Verified by Google</p>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
