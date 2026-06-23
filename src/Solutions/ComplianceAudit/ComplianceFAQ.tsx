"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ComplianceFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ShieldVUE handle EO 14028?",
      answer: "ShieldVUE automatically generates NTIA-compliant SBOMs (in SPDX and CycloneDX formats) for every build, meeting the core requirements of Executive Order 14028 for selling software to the US government."
    },
    {
      question: "Can we define custom compliance policies?",
      answer: "Yes. Our Policy Engine allows you to define custom rules based on licenses, vulnerability CVSS scores, package age, or specific internal compliance requirements."
    },
    {
      question: "How is audit evidence secured?",
      answer: "All generated reports, SBOMs, and compliance logs are cryptographically signed and stored in a read-only, tamper-evident ledger ensuring absolute integrity during audits."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="shield-container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-12 text-center leading-[1.1]">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-md transition-colors duration-200 ${activeIndex === index ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
