'use client';

import { motion } from 'framer-motion';
import { Home, EyeOff, ShieldCheck, Lock, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBugSweep() {
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
               Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Bug Sweep</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
               Protecting Your Privacy at Home. Your home is your sanctuary, a space where privacy and security should never be compromised.
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
               alt="Home Bug Sweep Expert"
               fill
               className="object-cover object-center"
               sizes="(max-width: 768px) 100vw, 1280px"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
               <div className="p-8 md:p-14">
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-3">Home Protection</p>
                  <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md leading-tight">We Sweep. We Detect. We <span className="text-cyan-400">Protect Your Home.</span></h2>
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
               <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Home Bug Sweep?</h2>
               <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6"></div>
               <p className="text-slate-600 leading-relaxed text-lg">
                  A Home Bug Sweep is a specialized service aimed at detecting and removing covert surveillance devices from your residence. 
               </p>
               <p className="text-slate-600 leading-relaxed text-lg">
                  Whether it’s hidden cameras in living areas or audio bugs in private spaces, our experts use advanced technology to identify and neutralize any threats.
               </p>
               
               <div className="pt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Our Home Bug Sweep Services</h3>
                  <p className="text-slate-600 leading-relaxed">
                     At Technical Surveillance Counter Measure Services, we provide comprehensive Home Bug Sweep solutions tailored to your needs. Our experts conduct detailed inspections of every room, ensuring complete coverage and security.
                  </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl"
            >
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Why You Need a Home Bug Sweep</h2>
               <div className="space-y-6">
                  {[
                     { icon: <ShieldCheck />, title: "Detect Hidden Devices", desc: "Identify bugs, cameras, and transmitters in your home." },
                     { icon: <Lock />, title: "Protect Personal Conversations", desc: "Ensure your private discussions remain confidential." },
                     { icon: <Users />, title: "Prevent Privacy Breaches", desc: "Safeguard your family from unwanted monitoring." },
                     { icon: <EyeOff />, title: "Secure Peace of Mind", desc: "Live without fear of being watched or recorded." }
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

         <div className="mb-24 mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Features of Our Service</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  "Detection of audio and video surveillance devices",
                  "Advanced scanning for wireless and wired bugs",
                  "Discreet and thorough inspections",
                  "Detailed reports and actionable recommendations"
               ].map((feat, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/80 border border-slate-200 p-6 rounded-2xl text-center hover:border-cyan-500/30 transition-all"
                  >
                     <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600 font-bold">
                        {i + 1}
                     </div>
                     <p className="text-slate-700 font-medium">{feat}</p>
                  </motion.div>
               ))}
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
               Don’t let your privacy be compromised. Protect your personal space with our trusted Home Bug Sweep services. Contact Technical Surveillance Counter Measure Services today to schedule an inspection and safeguard your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
               <Link href="/contact-us" className="inline-flex px-8 py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2">
                  Enquiry Now <ChevronRight className="w-5 h-5" />
               </Link>
               <a href="tel:+919967107077" className="inline-flex px-8 py-4 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all border border-slate-200 items-center justify-center">
                  Call +91 9967107077
               </a>
            </div>
         </motion.div>
      </div>
    </div>
  );
}
