"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DependencyMapping() {
  return (
    <section id="features" className="py-24 bg-white border-y border-slate-100">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
              Uncover Hidden <span className="text-primary">Transitive Risks</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Look beyond direct dependencies. Our engine maps your complete software tree to expose vulnerabilities nested deep within transitive open-source packages.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Multi-Level Depth Scanning
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Automated SBOM Integration
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Real-Time Exploit Path Mapping
              </li>
            </ul>
          </motion.div>

          {/* Node Graph Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-md min-h-[250px] lg:min-h-[320px] flex items-center justify-center border border-slate-200/60 shadow-lg overflow-hidden group"
          >
            <Image 
              src="/solutions/slide-dep-light.png"
              alt="Dependency Mapping and Transitive Risks"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
