"use client";

import { m } from "framer-motion";
import Image from "next/image";

export default function SupplyChainOverview() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
              Complete Visibility from Code to Cloud
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Modern software relies heavily on third-party components and complex deployment pipelines. ShieldVUE automatically maps your entire software supply chain, giving you unparalleled, real-time visibility into every dependency, library, and artifact that enters your production environment.
            </p>
            <ul className="space-y-4">
              {[
                "Cryptographic artifact signing & verification",
                "Automated tampering detection",
                "Deep dependency tree analysis",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-medium transition-colors duration-300 text-slate-700 hover:text-primary"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 bg-primary/10 text-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>

          {/* Static Image Display */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-md overflow-hidden w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] bg-slate-100 flex items-center justify-center group shadow-xl shadow-slate-200/50"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/supply_chain_security_overview1.png"
                alt="Software Supply Chain Security Visualization"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
