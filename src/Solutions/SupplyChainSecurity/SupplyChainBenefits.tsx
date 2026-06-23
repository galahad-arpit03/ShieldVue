"use client";

import { motion } from "framer-motion";

export default function SupplyChainBenefits() {
  const metrics = [
    { value: "99%", label: "Reduction in Manual Tracking" },
    { value: "100%", label: "CI/CD Pipeline Coverage" },
    { value: "Zero", label: "Unknown Dependencies" },
  ];

  return (
    <section className="py-8 md:py-10 bg-white relative">
      {/* Faded Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-70" />
      
      <div className="shield-container relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-primary/20">
          {metrics.map((metric, index) => (
            <div key={index} className="pt-6 lg:pt-0 px-8">
              <div className="text-5xl md:text-6xl font-medium font-['Clash_Grotesk'] text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-base md:text-lg text-slate-800 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Faded Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-70" />
    </section>
  );
}
