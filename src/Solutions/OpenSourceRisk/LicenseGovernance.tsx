import { Scale, CheckCircle, XCircle, Check } from "lucide-react";
import Image from "next/image";

export default function LicenseGovernance() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="shield-container text-center max-w-5xl mx-auto">
       
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4 leading-[1.1]">
          Automated <span className="text-primary">License Compliance</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          Automatically detect restrictive open-source licenses and enforce your organization's legal policies before code is merged.
        </p>

        {/* Comparison Grid (Glassmorphism Layout) */}
        <div className="rounded-md shadow-2xl relative overflow-hidden group text-left">
          {/* Background Image stretching across both sides */}
          <Image 
            src="/solutions/slide-crypto-light.png" 
            alt="License Compliance Illustration" 
            fill 
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row p-4 lg:p-8 gap-4 lg:gap-6">
            
            {/* Left Card: Permissive (White Glass) */}
            <div className="flex-1 bg-white/85 backdrop-blur-md border border-white/50 rounded-md p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-md border border-slate-200 rounded-lg shadow-sm flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Manrope'] tracking-wide">
                  Permissive Licenses
                </h3>
                <p className="text-slate-700 font-light mb-5 leading-relaxed text-sm">
                  Approved licenses that allow for free usage and distribution within commercial software without requiring codebase exposure.
                </p>

                <ul className="space-y-2.5">
                  {[
                    "MIT License",
                    "Apache 2.0",
                    "BSD 3-Clause",
                    "ISC License"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-normal text-sm">
                      <div className="w-4 h-4 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Restrictive (Purple Glass) */}
            <div className="flex-1 bg-gradient-to-br from-[#7755BE]/95 via-[#5c3c9c]/95 to-[#3a1d6e]/95 backdrop-blur-md border border-white/20 rounded-md p-6 shadow-xl relative overflow-hidden">
              {/* Subtle animated pattern/glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Soft inner glow to give it a premium feel */}
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] translate-y-1/3 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-['Manrope'] tracking-wide">
                  Restrictive Licenses
                </h3>
                <p className="text-white/80 font-light mb-5 leading-relaxed text-sm">
                  Copyleft and viral licenses that are automatically flagged to prevent forced open-sourcing of your proprietary code.
                </p>

                <ul className="space-y-2.5">
                  {[
                    "GPL v3.0 & v2.0",
                    "AGPL",
                    "SSPL",
                    "Elastic License"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-normal text-sm">
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
