"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RiskScoringEngine() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative bg-white rounded-md min-h-[300px] lg:min-h-[420px] flex items-center justify-center border border-slate-200/60 shadow-lg overflow-hidden group">
            <Image 
              src="/slide/image.png"
              alt="Context-Aware Risk Scoring"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4 leading-[1.1]">
              Context-Aware <span className="text-primary">Risk Scoring</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Not all risks are equal. ShieldVUE scores open-source packages based on community health, known vulnerabilities, and actual usage context in your app, filtering out the noise.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Active Exploitability Context
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Reachability Analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Community Maintenance Health
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
