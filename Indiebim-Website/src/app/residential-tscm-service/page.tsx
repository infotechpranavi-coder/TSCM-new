'use client';

import { motion } from 'framer-motion';
import { Home, EyeOff, ShieldCheck, Zap, Lock, ChevronRight, Video, MicOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResidentialTSCMService() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/50 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
               Residential <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">TSCM Services</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed"
            >
               Protecting Your Privacy at Home. In today&apos;s digital age, ensuring the privacy of your home is just as critical as securing your workplace.
            </motion.p>
         </div>

         {/* Hero Image */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-20 shadow-2xl"
         >
            <Image
               src="/images/inner-banner-1-1-1.jpg"
               alt="Residential TSCM Security Expert"
               fill
               className="object-cover object-center"
               sizes="(max-width: 768px) 100vw, 1280px"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
               <div className="p-8 md:p-14">
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-3">Home Security</p>
                  <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md leading-tight">Your Home Deserves <span className="text-cyan-400">Zero Compromise</span> on Privacy</h2>
               </div>
            </div>
         </motion.div>

         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
               <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Residential TSCM Service?</h2>
               <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6"></div>
               <p className="text-slate-600 leading-relaxed text-lg">
                  Residential TSCM (Technical Surveillance Countermeasures) is a specialized service that detects and neutralizes unauthorized surveillance threats in your home. 
               </p>
               <p className="text-slate-600 leading-relaxed text-lg">
                  These threats can include hidden cameras, audio bugs, and other electronic devices designed to monitor your activities without consent.
               </p>
               
               <div className="pt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Our Expertise in Residential TSCM</h3>
                  <p className="text-slate-600 leading-relaxed">
                     At Technical Surveillance Counter Measure Services, we combine advanced technology with expert knowledge to deliver effective Residential TSCM solutions. Our team conducts comprehensive physical and electronic inspections of your property, including bedrooms, living areas, and personal workspaces.
                  </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl"
            >
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Choose Us?</h2>
               <div className="space-y-6">
                  {[
                     { icon: <ShieldCheck />, title: "Prevent Privacy Breaches", desc: "Detect and eliminate hidden surveillance devices in your home." },
                     { icon: <Lock />, title: "Protect Personal Information", desc: "Safeguard sensitive conversations and activities." },
                     { icon: <EyeOff />, title: "Peace of Mind", desc: "Enjoy your home without worrying about unauthorized monitoring." }
                  ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-cyan-500/50 group-hover:bg-cyan-50 transition-colors">
                           <div className="text-cyan-600 w-5 h-5">{item.icon}</div>
                        </div>
                        <div>
                           <h4 className="text-slate-900 font-bold text-base mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>

         <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-12 bg-white/80 rounded-3xl border border-slate-200 p-8 md:p-12 items-center">
               <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Key Features of Our Service</h2>
                  <ul className="space-y-4">
                     {[
                        "Detection of wireless and wired surveillance devices",
                        "Thorough room-by-room sweeps",
                        "Advanced scanning tools for modern threats",
                        "Confidential and discreet service"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                           <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                           {feat}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="lg:w-1/3 grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 text-center">
                     <Video className="w-8 h-8 text-cyan-600" />
                     <span className="text-slate-900 text-sm font-bold">Hidden Cameras</span>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 text-center translate-y-6">
                     <MicOff className="w-8 h-8 text-cyan-600" />
                     <span className="text-slate-900 text-sm font-bold">Audio Bugs</span>
                  </div>
               </div>
            </div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
         >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Secure Your Home Today</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               Don’t compromise your privacy. Trust our Residential TSCM Services to keep your home safe from surveillance threats. Contact us today to schedule a consultation and protect what matters most.
            </p>
            <Link href="/contact-us" className="inline-flex px-8 py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2">
               Schedule a Home Sweep <ChevronRight className="w-5 h-5" />
            </Link>
         </motion.div>
      </div>
    </div>
  );
}
