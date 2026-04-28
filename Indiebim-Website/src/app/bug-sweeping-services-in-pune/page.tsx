'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Home, Hotel, Car, Network, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServicePageSidebar from '@/components/ServicePageSidebar';

export default function BugSweepingServicesPune() {
  const city = "Pune";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/50 via-transparent to-transparent"></div>
         <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 mb-8 font-medium"
            >
               <MapPin className="w-5 h-5" /> Operation Zone: {city}
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
               Bug Sweeping Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">{city}</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
               Protect Your Privacy with Expert TSCM Solutions. Ensuring that your personal and business environments in {city} are free from hidden surveillance threats.
            </motion.p>
         </div>

         <div className="bg-white/80 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
               <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Bug Sweeping?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                     Bug sweeping, also known as Technical Surveillance Countermeasures (TSCM), is a specialized security service that detects and removes covert electronic surveillance devices.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                     {[
                        "Hidden cameras",
                        "Audio recording bugs",
                        "GPS tracking devices",
                        "Wireless transmitters",
                        "Spyware and cyber threats"
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
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Bug Sweeping Services in {city}</h2>
               <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { icon: <Building2 />, title: "Corporate Bug Sweeping", desc: "Corporate espionage is a serious concern. Our services detect and remove threats ensuring boardrooms and networks remain secure." },
                  { icon: <Home />, title: "Residential Bug Sweeping", desc: "Privacy at home is crucial. Our home bug sweeping services thoroughly inspect your residence, giving you peace of mind." },
                  { icon: <Hotel />, title: "Hotel & Airbnb", desc: "Travelers face security risks. Our hotel bug sweep service ensures your temporary stay is free from unauthorized surveillance." },
                  { icon: <Car />, title: "Vehicle GPS Tracking", desc: "If you suspect tracking, our service will scan and remove hidden tracking devices from your vehicle." },
                  { icon: <Network />, title: "Digital Bug Sweeping", desc: "Cyber threats put personal and business data at risk. Our digital services identify and eliminate vulnerabilities." }
               ].map((srv, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-cyan-500/30 hover:bg-white/90 transition-all group"
                  >
                     <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:border-cyan-500/30 transition-colors">
                        <div className="text-cyan-600 w-7 h-7">{srv.icon}</div>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>

         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Choose Our Bug Sweeping Services in {city}?</h2>
               <div className="space-y-6">
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Highly Trained TSCM Experts</h4>
                     <p className="text-slate-600">Our specialists are skilled in electronic counter-surveillance and bug detection.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Advanced Detection Equipment</h4>
                     <p className="text-slate-600">We use RF spectrum analyzers, thermal imaging, and non-linear junction detectors.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Complete Confidentiality</h4>
                     <p className="text-slate-600">Your privacy is our top priority, and all investigations are conducted discreetly.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Affordable & Reliable</h4>
                     <p className="text-slate-600">Our bug sweeping services in {city} are competitively priced without compromising on quality.</p>
                  </div>
               </div>
            </motion.div>
            
            <ServicePageSidebar city={city} />
         </div>
      </div>
    </div>
  );
}
