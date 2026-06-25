"use client";

import { m } from "framer-motion";
import { GitPullRequest, XCircle, Search } from "lucide-react";

export default function PolicyEnforcement() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
              Shift-Left <span className="text-primary">Governance</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Automatically block non-compliant code, missing SBOMs, or unauthorized licenses from progressing through your CI/CD pipelines. Security shouldn't be an afterthought.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] rounded-md p-8 shadow-2xl border border-white/10 text-white font-mono text-sm relative overflow-hidden group"
          >
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-[500px] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none opacity-50" />
             
             <div className="relative z-10">
               {/* Vertical Pipeline Line */}
               <div className="absolute left-[23px] top-4 bottom-12 w-0.5 bg-slate-800" />

               {/* Step 1 */}
               <m.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="flex items-start gap-6 mb-8 relative"
               >
                 <div className="w-12 h-12 rounded-md bg-[#161b22] border border-white/10 flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                   <GitPullRequest className="w-5 h-5 text-slate-400" />
                 </div>
                 <div className="flex-1 bg-[#161b22] border border-white/5 rounded-md p-4 mt-1 flex justify-between items-center group-hover:border-white/10 transition-colors">
                   <span className="text-slate-300 font-medium tracking-wide text-xs md:text-sm">git push origin main</span>
                   <span className="text-slate-500 text-xs">00:00s</span>
                 </div>
               </m.div>

               {/* Step 2 */}
               <m.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.6 }}
                 className="flex items-start gap-6 mb-8 relative"
               >
                 <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_15px_rgba(var(--color-primary),0.2)]">
                   <div className="w-3 h-3 bg-primary rounded-md animate-pulse" />
                 </div>
                 <div className="flex-1 bg-gradient-to-r from-primary/10 to-[#161b22] border border-primary/20 rounded-md p-4 mt-1 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-primary font-bold">Scanning Dependencies</span>
                     <span className="text-primary/80 text-xs flex items-center gap-1"><Search className="w-3 h-3" /> Running</span>
                   </div>
                   <div className="w-full bg-black/50 h-1.5 rounded-md overflow-hidden">
                     <m.div 
                       initial={{ width: "0%" }}
                       whileInView={{ width: "100%" }}
                       transition={{ duration: 2, delay: 0.6 }}
                       className="h-full bg-primary"
                     />
                   </div>
                 </div>
               </m.div>

               {/* Step 3 (Blocked) */}
               <m.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 2.8 }}
                 className="flex items-start gap-6 relative"
               >
                 <div className="w-12 h-12 rounded-md bg-[#161b22] border border-primary/50 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_15px_rgba(var(--color-primary),0.4)]">
                   <XCircle className="w-5 h-5 text-primary" />
                 </div>
                 <div className="flex-1 bg-gradient-to-r from-[#161b22] to-[#161b22] border border-primary/30 rounded-md p-4 mt-1 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-white font-bold tracking-wide">License Validation</span>
                     <span className="text-primary font-bold text-xs uppercase tracking-wider">Blocked</span>
                   </div>
                   <div className="p-3 bg-primary/10 rounded-md border border-primary/20">
                     <p className="text-slate-400 text-[13px] leading-relaxed">
                       Restrictive license detected in <span className="text-primary font-bold">faker.js</span>.<br/>
                       Violates policy: [POL-003] No GPL v3.0.
                     </p>
                   </div>
                 </div>
               </m.div>

             </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
