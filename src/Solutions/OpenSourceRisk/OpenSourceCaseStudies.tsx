"use client";

import { m } from "framer-motion";
import { Quote } from "lucide-react";

export default function OpenSourceCaseStudies() {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="shield-container text-center max-w-4xl mx-auto">
        <Quote className="w-12 h-12 text-white/30 mx-auto mb-8" />
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed font-['Clash_Grotesk'] mb-8">
            "ShieldVUE gave us immediate visibility into our sprawling open-source estate, reducing our compliance review time by 80%."
          </p>
          <div className="text-white/80 font-bold uppercase tracking-widest text-sm bg-white/10 inline-block px-4 py-2 rounded-full">
            — Tech Leader
          </div>
        </m.div>
      </div>
    </section>
  );
}
