"use client";

import { m } from "framer-motion";
import { DownloadCloud, FileText } from "lucide-react";

export default function RegulatoryReporting() {
  return (
    <section className="py-12 md:py-24 bg-white border-y border-slate-100">
      <div className="shield-container text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
          1-Click <span className="text-primary">Audit Evidence</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-6 md:mb-12 max-w-2xl mx-auto">
          Stop spending weeks preparing for audits. Generate comprehensive, irrefutable proof of your security posture instantly for external auditors.
        </p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-md p-8 md:p-12 border border-slate-200 shadow-lg max-w-2xl mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 opacity-70 group-hover:opacity-100 transition-opacity" />
           <FileText className="w-20 h-20 text-slate-300 mx-auto mb-6 group-hover:text-primary transition-colors duration-500" />
           <div className="h-4 w-48 bg-slate-200 rounded-md mx-auto mb-3" />
           <div className="h-3 w-64 bg-slate-200 rounded-md mx-auto mb-8" />
           
           <button className="bg-slate-900 text-white font-bold px-8 py-4 rounded-md flex items-center justify-center gap-3 mx-auto hover:bg-primary transition-colors duration-300 shadow-md">
              <DownloadCloud className="w-5 h-5" /> Export Compliance Report (PDF)
           </button>
        </m.div>
      </div>
    </section>
  );
}
