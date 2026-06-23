"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckSquare, FileKey } from "lucide-react";

export default function SupportedFrameworks() {
  const frameworks = [
    { title: "NIST SSDF", icon: Shield, desc: "Map your software supply chain directly to NIST Secure Software Development Framework requirements." },
    { title: "Executive Order 14028", icon: FileText, desc: "Generate compliant SBOMs necessary for selling software to the US Federal Government." },
    { title: "CIS Controls", icon: CheckSquare, desc: "Enforce Center for Internet Security best practices for software inventories automatically." },
    { title: "Custom Policies", icon: FileKey, desc: "Create and enforce proprietary internal security and licensing policies with ease." },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
            Built for Modern <span className="text-primary">Regulations</span>
          </h2>
          <p className="text-lg text-slate-600">
            Out-of-the-box support for the most stringent federal and commercial security frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
          {frameworks.map((fw, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-md p-8 flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-primary transition-colors duration-500" />
              
              {/* Background Gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                  <fw.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                  {fw.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {fw.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
