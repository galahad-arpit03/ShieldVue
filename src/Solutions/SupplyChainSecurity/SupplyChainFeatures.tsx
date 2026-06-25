"use client";

import { m } from "framer-motion";
import { FileCode, Lock, Activity } from "lucide-react";

export default function SupplyChainFeatures() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4">
            Advanced Supply Chain Capabilities
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          
          {/* Feature 1 - Large Card spanning 2 columns */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-md p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Permanent Purple Beam of Light (Top-Right to Bottom-Left) */}
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-primary/[0.02] to-transparent pointer-events-none" />
            <div className="absolute -top-48 -right-32 w-[120%] h-[150%] bg-gradient-to-bl from-primary/20 via-transparent to-transparent blur-[100px] pointer-events-none transform rotate-12" />
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <FileCode className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">Automated SBOM Generation</h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl relative z-10">
              Track every component seamlessly. Automatically generate standardized Software Bills of Materials directly from your source code and CI/CD pipelines. Gain profound visibility into open-source libraries, direct and transitive dependencies, and third-party components to ensure full regulatory compliance and mitigate supply chain risks at scale.
            </p>
          </m.div>

          {/* Feature 2 - Tall Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-primary text-white rounded-md p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute right-0 top-0 opacity-20 w-32 h-32 bg-primary rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cryptographic BOMs (CBOM)</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Prepare for post-quantum cryptographic standards by discovering and cataloging all cryptographic assets.
              </p>
            </div>
          </m.div>

          {/* Feature 3 - Wide bottom card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-white rounded-md p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Permanent Purple Beam of Light (Top-Right to Bottom-Left) */}
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-primary/[0.02] to-transparent pointer-events-none" />
            <div className="absolute -top-48 -right-32 w-[80%] h-[150%] bg-gradient-to-bl from-primary/20 via-transparent to-transparent blur-[100px] pointer-events-none transform rotate-12" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Continuous Monitoring</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Security doesn't stop after deployment. ShieldVUE provides real-time alerts for supply chain anomalies, new CVEs, and dependency drift, ensuring your application remains secure post-production.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Real-time CVE Matching",
                  "Zero-Day Alerting",
                  "Dependency Drift Detection",
                  "License Compliance Checks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
