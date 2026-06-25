"use client";

import { m } from "framer-motion";
import {
  Eye,
  Activity,
  Building2,
  BrainCircuit,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Complete Visibility",
    description:
      "Gain a unified view of software components, dependencies, vulnerabilities, and cryptographic assets across your organization.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Monitor newly disclosed vulnerabilities, software changes, and emerging threats in real time.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    description:
      "Designed to support large-scale software ecosystems with centralized inventory and governance.",
  },
  {
    icon: BrainCircuit,
    title: "Actionable Intelligence",
    description:
      "Transform complex software composition data into meaningful security insights and prioritized actions.",
  },
  {
    icon: ShieldCheck,
    title: "Open Standards",
    description:
      "Built around industry standards including SPDX, CycloneDX, OWASP, and NIST for maximum interoperability.",
  },
  {
    icon: FileCheck2,
    title: "Audit Ready",
    description:
      "Accelerate compliance with centralized reporting, policy enforcement, and audit-ready documentation.",
  },
];

export default function WhyChooseShieldVUE() {
  return (
    <section className="py-12 md:py-24 bg-white border-y border-slate-100">
      <div className="shield-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            Why We{" "}
            <span className="text-primary">
              Choose "ShieldVUE"
            </span>
          </h2>
{/* 
          <p className="text-lg text-slate-600">
            Empower development, security, and compliance teams with
            complete software supply chain visibility, intelligent risk
            analysis, and enterprise-grade governance.
          </p> */}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-10">
          {reasons.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex-shrink-0 flex items-center justify-center transition-all duration-100 shadow-sm">
                <item.icon className="w-6 h-6 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}