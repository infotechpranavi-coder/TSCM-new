'use client';

import { motion } from 'framer-motion';
import { Network, ShieldAlert, Cpu, Lock, ChevronRight, Activity, Smartphone, Server } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CyberTSCMService() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      {/* Abstract Digital Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
         
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ce8e80a_1px,transparent_1px),linear-gradient(to_bottom,#0ce8e80a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
               Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">TSCM Services</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed"
            >
               Advanced Protection for Digital Security. In an era where cyber threats are on the rise, safeguarding your digital assets and communication channels is critical.
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
               alt="Cyber TSCM Security Expert"
               fill
               className="object-cover object-center"
               sizes="(max-width: 768px) 100vw, 1280px"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
               <div className="p-8 md:p-14">
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-3">Digital Defence</p>
                  <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md leading-tight">From Physical Threats to <span className="text-cyan-400">Digital Intrusions</span> — We Cover Both.</h2>
               </div>
            </div>
         </motion.div>

         <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-12 rounded-3xl space-y-8"
            >
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Cyber TSCM Service?</h2>
                  <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                     Cyber TSCM (Technical Surveillance Countermeasures) is a cutting-edge solution designed to detect and mitigate threats in the digital realm. Unlike traditional TSCM services, which focus on physical surveillance, Cyber TSCM addresses vulnerabilities in your digital systems, communication networks, and connected devices.
                  </p>
               </div>

               <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Cyber TSCM Expertise</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                     At Technical Surveillance Counter Measure Services, we use advanced technology and industry best practices to deliver effective Cyber TSCM solutions. Our experts conduct a thorough analysis of your digital infrastructure to ensure complete security.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                     {[
                        { icon: <Network />, label: "Wi-Fi Networks", desc: "Securing wireless infrastructure" },
                        { icon: <Smartphone />, label: "Devices", desc: "Analyzing phones & endpoints" },
                        { icon: <Server />, label: "Systems", desc: "Checking core infrastructure" }
                     ].map((box, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all">
                           <div className="text-cyan-600 mb-3 group-hover:scale-110 transition-transform">{box.icon}</div>
                           <h4 className="text-slate-900 font-bold text-sm mb-1">{box.label}</h4>
                           <p className="text-slate-500 text-xs">{box.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 space-y-6"
            >
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Why You Need It</h2>
               {[
                  { icon: <Activity />, title: "Detect Cyber Threats", desc: "Identify spyware, malware, and unauthorized access points." },
                  { icon: <ShieldAlert />, title: "Protect Sensitive Data", desc: "Safeguard personal and professional information." },
                  { icon: <Lock />, title: "Secure Communication", desc: "Prevent eavesdropping on digital communication channels." },
                  { icon: <Cpu />, title: "Stay Ahead of Hackers", desc: "Address vulnerabilities before they can be exploited." }
               ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/80 p-6 rounded-2xl border border-slate-200 hover:bg-white transition-colors">
                     <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-200">
                        <div className="text-cyan-600 w-5 h-5">{item.icon}</div>
                     </div>
                     <div>
                        <h4 className="text-slate-900 font-bold text-base mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>

         <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features of Our Service</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {[
                  "Advanced threat detection tools",
                  "Vulnerability assessment & mitigation",
                  "Secure communication solutions",
                  "Confidential and professional service"
               ].map((feat, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium"
                  >
                     {feat}
                  </motion.div>
               ))}
            </div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto bg-gradient-to-t from-cyan-950/30 to-transparent p-10 rounded-3xl border border-cyan-500/10"
         >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Secure Your Digital Space Today</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               Protect your digital assets with our trusted Cyber TSCM Service. Safeguard your cyber environment and stay ahead of potential threats.
            </p>
            <Link href="/contact-us" className="inline-flex px-8 py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2">
               Schedule Cyber Sweep <ChevronRight className="w-5 h-5" />
            </Link>
         </motion.div>
      </div>
    </div>
  );
}
