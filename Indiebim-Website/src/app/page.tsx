'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldAlert,
  ChevronLeft, ChevronRight, Radio, Search, Lock, ShieldCheck, Star
} from 'lucide-react';

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
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const activeHero = heroSlides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 bg-slate-950">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-all duration-1000 ${
                activeSlide === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(2,6,23,0.95)_10%,rgba(2,6,23,0.82)_38%,rgba(2,6,23,0.48)_70%,rgba(2,6,23,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_24%,rgba(244,114,182,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.24),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />
        </div>

        <div className="relative z-10">
          <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:min-h-screen lg:grid-cols-[minmax(0,1.1fr)_380px] lg:px-8 lg:pb-24">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-sm backdrop-blur-md">
                <ShieldAlert className="w-4 h-4" />
                <span>Premier Intelligence & Counter-Surveillance</span>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-6 inline-flex items-center rounded-full border border-cyan-300/20 bg-slate-950/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-md">
                {activeHero.eyebrow}
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="mt-7 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Protect confidential
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-rose-100">
                  conversations with
                </span>
                <br />
                <span className="text-cyan-200/95">
                  {activeHero.title}
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                {activeHero.text} We deliver international-standard TSCM and bug sweep support for boardrooms,
                residences, travel stays, and executive spaces where privacy cannot be left to chance.
              </motion.p>

              <motion.div variants={fadeIn} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {activeHero.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-white shadow-sm backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-9 flex flex-wrap gap-4">
                <Link 
                  href="/contact-us" 
                  className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 font-bold text-slate-950 shadow-[0_20px_45px_rgba(34,211,238,0.28)] transition-all hover:from-cyan-300 hover:to-sky-400"
                >
                  Secure Your Premise
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  href={activeHero.href}
                  className="rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-medium text-white transition-all hover:bg-white/20 backdrop-blur-md"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="grid gap-4 sm:max-w-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Rapid Support</p>
                    <p className="mt-2 text-2xl font-black text-white">24-48 hrs</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Coordinated response for sensitive homes, offices, and business travel environments.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index ? 'w-10 bg-white' : 'w-2.5 bg-white/40'
                      }`}
                      aria-label={`Show ${slide.title} slide`}
                    />
                  ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:justify-self-end"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 text-white shadow-[0_24px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
                <div className="relative h-56">
                  <Image
                    src={activeHero.image}
                    alt={activeHero.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.72)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/15 bg-slate-950/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-md">
                    Live Coverage
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Current Focus</p>
                    <h2 className="mt-2 text-2xl font-bold">{activeHero.title}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-200">{activeHero.text}</p>

                  <div className="mt-6 grid gap-3">
                    {activeHero.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm font-medium text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-slate-950/30 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Response Window</p>
                    <p className="mt-2 text-3xl font-extrabold text-white">24-48 hrs</p>
                    <p className="mt-2 text-sm text-slate-300">Fast field deployment with discreet operational handling.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section className="py-24 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "TSCM",
                icon: <Radio className="w-8 h-8 text-indigo-600" />,
                desc: "Technical surveillance countermeasures (TSCM) describes the action of sweeping for devices that may be spying on you.",
                image: "/images/tscm.jpg",
                href: "/tscm-services-in-delhi"
              },
              {
                title: "BUG SWEEP",
                icon: <Search className="w-8 h-8 text-emerald-500" />,
                desc: "Bug Sweeping is all about debugging. It's a physical and technical countermeasures survey used to locate illicit electronic devices.",
                image: "/images/bug.jpg",
                href: "/business-bug-sweep"
              },
              {
                title: "SUPPORT",
                icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
                desc: "We can be on-site within 24 to 48 hours after receipt of your Service Agreement to secure your critical environments.",
                image: "/images/support.jpg",
                href: "/contact-us"
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 group">
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                  <Link href={feature.href} className="inline-flex items-center gap-2 mt-5 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
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

      {/* SPECIALITIES */}
      <section className="overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-24 content-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Core Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">We Are Specialists In...</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
              Purpose-built protection services for executives, private clients, corporate teams, and environments
              where information exposure creates real operational risk.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Eavesdropping Detection",
                desc: "Information is extremely valuable and vulnerable, yet many organisations do very little to protect their data.",
                image: "/images/3-1-1.jpg",
                tone: "from-amber-500/90 to-orange-500/90",
                accent: "text-amber-600",
                badge: "Signal Risk",
                href: "/eavesdropping-detection"
              },
              {
                title: "Corporate Espionage Detection",
                desc: "Are you a potential victim to corporate Espionage? Also known as Industrial and Economic espionage.",
                image: "/images/4-1.jpg",
                tone: "from-violet-500/90 to-fuchsia-500/90",
                accent: "text-violet-600",
                badge: "Corporate Threat",
                href: "/corporate-tscm-service"
              },
              {
                title: "Counter Surveillance",
                desc: "Are you worried about being a victim of eavesdropping? Do you feel being followed or under the eye of a spy?",
                image: "/images/8-1.jpg",
                tone: "from-rose-500/90 to-pink-500/90",
                accent: "text-rose-600",
                badge: "Active Monitoring",
                href: "/counter-surveillance"
              },
              {
                title: "Debugging Services",
                desc: "Secure your Privacy! Debugging is an essential part of TSCM, and Indiebim experts use only advanced methods.",
                image: "/images/13-1.jpg",
                tone: "from-teal-500/90 to-cyan-500/90",
                accent: "text-teal-600",
                badge: "Privacy Recovery",
                href: "/debugging-services"
              }
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_45px_-35px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_-35px_rgba(8,145,178,0.35)]"
              >
                <div className={`absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r ${spec.tone} opacity-90`} />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${spec.tone} opacity-35`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.75)_100%)]" />
                  <div className="absolute left-5 top-5">
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                      {spec.badge}
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h4 className="text-xl font-black leading-tight text-white">{spec.title}</h4>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-[108px] text-sm leading-7 text-slate-600">{spec.desc}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={spec.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 ${spec.accent}`}
                    >
                      Explore service <ChevronRight className="w-4 h-4" />
                    </Link>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      24/7
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                  <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Professional assessment</span>
                    <span className={spec.accent}>Field ready</span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-cyan-200/60">
                </div>
              </motion.div>
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
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="mb-6 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {review.tag}
                </div>
                  <div className="flex text-yellow-500 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-8 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="text-slate-900 font-bold">{review.name}</h5>
                      <p className="text-slate-500 text-xs">Verified by Google</p>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden bg-indigo-900 border-t border-slate-200">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ opacity: [0.35, 0.7, 0.4], scale: [0.92, 1.06, 0.96] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-120px] right-[-60px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[120px] mix-blend-screen"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.35], scale: [1, 1.1, 0.98] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-[-140px] left-[-80px] h-[460px] w-[460px] rounded-full bg-fuchsia-500/20 blur-[130px] mix-blend-screen"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.45, 0.25], y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-[100px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(49,46,129,0.9)_0%,rgba(67,56,202,0.84)_52%,rgba(76,29,149,0.92)_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            animate={{ y: [0, -6, 0], filter: ['drop-shadow(0 0 0px rgba(251,113,133,0.0))', 'drop-shadow(0 0 16px rgba(251,113,133,0.65))', 'drop-shadow(0 0 0px rgba(251,113,133,0.0))'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-6 flex w-fit items-center justify-center"
          >
            <ShieldAlert className="h-16 w-16 text-rose-400" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Immediate Security Assistance?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Our teams are available 24/7. Don&apos;t let your sensitive corporate information be compromised. Secure your premises today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9967107077" 
              className="flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-8 py-4 font-bold text-white shadow-[0_0_22px_rgba(244,63,94,0.4)] transition-all hover:-translate-y-0.5 hover:bg-rose-400 hover:shadow-[0_0_32px_rgba(244,63,94,0.65)]"
            >
              Call Now: +91 9967107077
            </a>
            <Link 
              href="/contact-us" 
              className="flex items-center justify-center rounded-lg border border-white/20 bg-white/95 px-8 py-4 font-bold text-indigo-900 shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.22)]"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
