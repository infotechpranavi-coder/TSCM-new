'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Home, Hotel, Car, Network, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServicePageSidebar from '@/components/ServicePageSidebar';

export default function TSCMServicesPune() {
  const city = "Pune";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent"></div>
         <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 mb-8 font-medium"
            >
               <MapPin className="w-5 h-5" /> Area of Operation: {city}
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
               TSCM Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">{city}</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
               Comprehensive Bug Sweeping & Counter-Surveillance Solutions. Providing cutting-edge counter-surveillance solutions to detect and eliminate hidden surveillance devices in {city}.
            </motion.p>
         </div>

         <div className="bg-white/80 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
               <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">What is TSCM?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                     Technical Surveillance Countermeasures (TSCM) refers to a series of specialized procedures used to detect, identify, and neutralize any unauthorized surveillance devices. Our TSCM specialists in {city} use advanced technology to perform thorough inspections.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                     {[
                        "Hidden cameras",
                        "Audio surveillance devices (bugs)",
                        "GPS trackers",
                        "Wireless transmitters",
                        "Digital threats such as spyware"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                           <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="w-full md:w-80 relative h-48 rounded-2xl overflow-hidden shadow-xl shrink-0">
                  <Image
                    src="/images/inner-banner-1-1-1.jpg"
                    alt="TSCM Expert"
                    fill
                    className="object-cover object-center"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
               </div>
            </div>
         </div>

         <div className="mb-20">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our TSCM Services in {city}</h2>
               <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { icon: <Building2 />, title: "Corporate TSCM", desc: `Organizations face the threat of corporate espionage. Our corporate services in ${city} offer comprehensive bug sweeps and counter-surveillance measures.` },
                  { icon: <Home />, title: "Residential TSCM", desc: "Your home should be a safe haven. Our residential TSCM services can detect and remove any surveillance devices, giving you peace of mind." },
                  { icon: <Hotel />, title: "Hotel & Airbnb", desc: "Hidden cameras and recording devices are a growing concern. We ensure your stay is completely private and free from threats." },
                  { icon: <Car />, title: "Vehicle GPS Tracking", desc: "We provide a thorough examination of your car, identifying and removing hidden trackers to protect your movements." },
                  { icon: <Network />, title: "Cyber TSCM", desc: "We scan for malware, spyware, and hacking attempts that could compromise your personal and professional data." }
               ].map((srv, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group"
                  >
                     <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <div className="text-cyan-600 w-7 h-7">{srv.icon}</div>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>

         <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Choose Our TSCM Services in {city}?</h2>
               <div className="space-y-6">
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Skilled Professionals</h4>
                     <p className="text-slate-600">Our team of experts is highly trained and experienced in using the latest detection methods.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Cutting-Edge Technology</h4>
                     <p className="text-slate-600">We employ RF spectrum analyzers, thermal imaging, and non-linear junction detectors.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Confidential & Discreet</h4>
                     <p className="text-slate-600">We prioritize confidentiality and discretion, ensuring all investigations are conducted privately.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Tailored Security Solutions</h4>
                     <p className="text-slate-600">Designed to address your specific corporate, residential, hotel, vehicle, or digital security needs.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Affordable & Reliable</h4>
                     <p className="text-slate-600">We offer high-quality TSCM services in {city} at competitive prices.</p>
                  </div>
               </div>
            </motion.div>
            
            <ServicePageSidebar city={city} />
         </div>
      </div>
    </div>
  );
}
