'use client';

import { motion } from 'framer-motion';
import { Building2, Search, ShieldCheck, Lock, Activity, ChevronRight, FileWarning } from 'lucide-react';
import Link from 'next/link';

export default function BusinessBugSweep() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/50 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-20 h-20 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
               <Building2 className="w-10 h-10 text-cyan-600" />
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
               Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Bug Sweep</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
               Safeguarding Your Corporate Privacy. In today’s competitive landscape, protecting confidential business information is crucial.
            </motion.p>
         </div>

         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/80 p-8 md:p-12 rounded-3xl border border-slate-200"
            >
               <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Business Bug Sweep?</h2>
               <div className="w-16 h-1 bg-cyan-600 rounded-full mb-6"></div>
               <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  A Business Bug Sweep is a specialized service designed to detect and neutralize covert surveillance devices within your premises. 
               </p>
               <p className="text-slate-600 leading-relaxed text-lg">
                  These sweeps help identify unauthorized listening devices, wireless transmitters, and other spying tools that could be compromising your privacy.
               </p>

               <div className="mt-10 pt-10 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions</h3>
                  <p className="text-slate-600 leading-relaxed">
                     At Technical Surveillance Counter Measure Services, we combine advanced equipment with expert analysis to deliver reliable Business Bug Sweep solutions. Our team conducts comprehensive inspections, ensuring every corner of your office, meeting rooms, and workspaces are free from surveillance threats.
                  </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Why You Need It</h2>
               {[
                  { icon: <Search />, title: "Detect Unauthorized Devices", desc: "Uncover hidden microphones, cameras, and tracking tools." },
                  { icon: <Lock />, title: "Protect Confidential Information", desc: "Ensure business strategies and communications remain private." },
                  { icon: <ShieldCheck />, title: "Prevent Espionage", desc: "Safeguard your organization against competitors and malicious actors." },
                  { icon: <FileWarning />, title: "Ensure Regulatory Compliance", desc: "Meet data protection and privacy standards." },
                  { icon: <Activity />, title: "Reputation Management", desc: "Avoid breaches that can tarnish your company’s credibility." }
               ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                     <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-cyan-500/50 transition-colors">
                        <div className="text-cyan-600 w-6 h-6">{item.icon}</div>
                     </div>
                     <div>
                        <h4 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>

         <div className="mb-24 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features of Our Service</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {[
                  "Thorough physical and electronic inspections",
                  "Detection of wired and wireless bugs",
                  "Advanced RF scanning for hidden devices",
                  "Discreet and professional service"
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
            className="bg-gradient-to-r from-cyan-50 to-blue-50 p-10 rounded-3xl border border-cyan-200 text-center max-w-4xl mx-auto"
         >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Secure Your Business Environment Today</h3>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
               Don’t leave your corporate privacy to chance. Trust our Business Bug Sweep services to protect your business from surveillance threats. Contact Technical Surveillance Counter Measure Services today to schedule an inspection and secure your workspace.
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
