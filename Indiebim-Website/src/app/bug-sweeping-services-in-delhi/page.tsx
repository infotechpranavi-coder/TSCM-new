'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Home, Hotel, Car, Network, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServicePageSidebar from '@/components/ServicePageSidebar';

export default function BugSweepingServicesDelhi() {
  const city = "Delhi";

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
               Protect Your Privacy from Hidden Surveillance. Securing your personal and professional spaces in {city} from unauthorized electronic monitoring.
            </motion.p>
         </div>

         <div className="bg-white/80 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
               <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Bug Sweeping?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                     Bug sweeping, also known as Technical Surveillance Countermeasures (TSCM), is a specialized process that detects and removes unauthorized electronic surveillance devices.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                     {[
                        "Hidden cameras",
                        "Audio recording bugs",
                        "GPS trackers",
                        "Wireless transmitters",
                        "Covert eavesdropping devices"
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
                  { icon: <Building2 />, title: "Corporate Bug Sweeping", desc: "Corporate espionage is a real threat. Our experts conduct in-depth scans to detect and remove threats in offices and IT infrastructure." },
                  { icon: <Home />, title: "Residential Bug Sweeping", desc: "If you suspect hidden cameras or tracking devices in your house, our home bug sweep services will help safeguard your privacy." },
                  { icon: <Hotel />, title: "Hotel & Airbnb", desc: "Our specialized bug detection service ensures your temporary stay remains private and secure from unauthorized recording." },
                  { icon: <Car />, title: "Vehicle GPS Tracking", desc: "We locate and remove unauthorized tracking devices from cars, bikes, and commercial vehicles to ensure your movements remain covert." },
                  { icon: <Network />, title: "Cyber TSCM", desc: "Our cyber experts analyze your digital devices and networks for vulnerabilities, protecting you from cyber espionage and spyware." }
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
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Expert TSCM Professionals</h4>
                     <p className="text-slate-600">Our experienced specialists use advanced electronic detection tools to locate threats.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Cutting-Edge Technology</h4>
                     <p className="text-slate-600">We utilize RF spectrum analyzers, thermal imaging, and non-linear junction detectors.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">100% Confidentiality</h4>
                     <p className="text-slate-600">All investigations are conducted with strict confidentiality, ensuring your privacy is never compromised.</p>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                     <h4 className="text-slate-900 font-bold text-lg mb-2">Affordable and Reliable</h4>
                     <p className="text-slate-600">Get high-quality bug detection services in {city} at competitive prices.</p>
                  </div>
               </div>
            </motion.div>
            
            <ServicePageSidebar city={city} />
         </div>
      </div>
    </div>
  );
}
