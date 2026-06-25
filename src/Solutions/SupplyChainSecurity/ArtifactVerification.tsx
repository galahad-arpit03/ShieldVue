"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, FileCode, ShieldAlert, Lock } from "lucide-react";
import Image from "next/image";

export default function ArtifactVerification() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Zero-Trust Verification",
      icon: ShieldCheck,
      content: "Cryptographically verify the provenance and integrity of every artifact before it enters your production environment, ensuring absolute trust.",
    },
    {
      title: "Build Integrity",
      icon: FileCode,
      content: "Prevent tampering during the CI/CD build phase by signing components and enforcing reproducible build standards.",
    },
    {
      title: "Policy Enforcement",
      icon: ShieldAlert,
      content: "Block unverified artifacts automatically at the registry level before they can be deployed or executed.",
    },
    {
      title: "Continuous Auditing",
      icon: Lock,
      content: "Maintain an immutable, cryptographically verifiable audit trail of all artifact deployments for rapid compliance checks and forensic analysis.",
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white border-y border-slate-100">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sidebar Image */}
          <div className="order-2 lg:order-1 relative bg-white rounded-md min-h-[300px] lg:min-h-[450px] flex items-center justify-center shadow-lg overflow-hidden group">
            <Image 
              src="/slide/image.png"
              alt="Artifact Verification and Zero Trust"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Accordion List */}
          <div className="order-1 lg:order-2">
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-8 leading-[1.1]">
              Artifact Verification
            </h2>

            <div className="space-y-3">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;
                return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden border rounded-md transition-all duration-300 group ${isActive ? 'border-primary/40 bg-white shadow-lg shadow-primary/5' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'}`}
                >
                  {/* Left accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-slate-200'}`} />
                  
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex items-center justify-between p-4 pl-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400 group-hover:text-primary/60 group-hover:bg-primary/5'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {item.title}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-200'}`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-[4.5rem] pr-8 text-slate-600 leading-relaxed text-base">
                          {item.content}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              )})}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
