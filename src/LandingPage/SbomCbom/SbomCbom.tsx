import { Layers, KeyRound, Check } from "lucide-react";
import Image from "next/image";

export default function SbomCbom() {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            Beyond the Standard SBOM
          </h2>
          <p className="text-lg text-slate-600">
            While others stop at software dependencies, ShieldVUE looks deeper into your cryptographic posture to prepare you for the post-quantum era.
          </p>
        </div>

        <div className="rounded-md shadow-2xl relative overflow-hidden group">
          {/* Background Image stretching across both sides */}
          <Image 
            src="/sbom-illustration1.png" 
            alt="Software Supply Chain" 
            fill 
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
          {/* Subtle overlay to ensure the image isn't too overpowering */}
          <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row p-6 lg:p-10 gap-6 lg:gap-10">
            
            {/* Left Card: SBOM (White Glass) */}
            <div className="flex-1 bg-white/85 backdrop-blur-md border border-white/50 rounded-md p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-slate-200 rounded-lg shadow-sm flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-['Manrope'] tracking-wide">
                  Software Bill of Materials (SBOM)
                </h3>
                <p className="text-slate-700 font-light mb-6 leading-relaxed text-base">
                  A comprehensive inventory of all open-source and third-party software components, libraries, and frameworks that make up your application.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Dependency Trees & Nested Graphs",
                    "Open Source License Tracking",
                    "Automated Vulnerability (CVE) Mapping",
                    "Component Version Drift Analysis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-normal text-sm">
                      <div className="w-5 h-5 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: CBOM (Purple Glass) */}
            <div className="flex-1 bg-gradient-to-br from-[#7755BE]/95 via-[#5c3c9c]/95 to-[#3a1d6e]/95 backdrop-blur-md border border-white/20 rounded-md p-8 shadow-xl relative overflow-hidden">
              {/* Subtle animated pattern/glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Soft inner glow to give it a premium feel */}
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] translate-y-1/3 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  <KeyRound className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-['Manrope'] tracking-wide">
                  Cryptography Bill of Materials (CBOM)
                </h3>
                <p className="text-white/80 font-light mb-6 leading-relaxed text-base">
                  A specialized inventory of all cryptographic assets, algorithms, and certificates used across your codebase to identify quantum vulnerabilities.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Algorithm Discovery (RSA, AES, SHA)",
                    "Key Length & Cipher Suite Validation",
                    "Hardcoded Secret Detection",
                    "Post-Quantum Cryptography Readiness"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-normal text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                        <Check className="w-3.5 h-3.5 text-white" />
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
