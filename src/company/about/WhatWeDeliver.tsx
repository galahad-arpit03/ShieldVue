"use client";

import { m } from "framer-motion";
import { FileCode2, Shield, ShieldAlert, Scale } from "lucide-react";

const featured = {
//   stage: "01",
  title: "SBOM Management",
  description:
    "Generate, manage, compare, and govern Software Bills of Materials across your entire software ecosystem — from first scan to continuous tracking.",
  icon: FileCode2,
  stats: [
    { label: "Components tracked", value: "10k+" },
    { label: "Formats supported", value: "SPDX · CycloneDX" },
    { label: "Sync", value: "Real-time" },
  ],
};

const supporting = [
  {
    // stage: "02",
    title: "CBOM Management",
    description:
      "Discover cryptographic assets, encryption algorithms, certificates, and keys with complete visibility.",
    icon: Shield,
  },
  {
    // stage: "03",
    title: "Vulnerability Intelligence",
    description:
      "Continuously correlate software components with CVEs, threat intelligence, and contextual risk.",
    icon: ShieldAlert,
  },
  {
    // stage: "04",
    title: "Compliance & Governance",
    description:
      "Enforce security policies, licensing controls, and regulatory compliance from a unified platform.",
    icon: Scale,
  },
];

export default function WhatWeDeliver() {
  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden py-14 border-y">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)] bg-[length:40px_40px]" />
      <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="shield-container relative z-10">
        {/* Header */}
        <div className="mb-10 max-w-3xl text-left">
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.08] tracking-[-0.03em] text-slate-900 font-['Clash_Grotesk']">
            What We Deliver
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            ShieldVUE brings together software visibility, vulnerability
            intelligence, cryptographic analysis, and governance into one
            integrated enterprise platform.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          {/* Featured panel */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-md border border-slate-200 bg-white p-10 lg:p-12 shadow-sm"
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FeaturedIcon className="h-8 w-8" />
                </div>
                {/* <span className="font-mono text-xs tracking-wider text-primary">
                  {featured.stage}
                </span> */}
              </div>

              <h3 className="mt-8 text-3xl font-medium text-slate-900">
                {featured.title}
              </h3>

              <p className="mt-4 max-w-md text-lg leading-7 text-slate-600">
                {featured.description}
              </p>

              {/* Stat strip — snapshot of the product, not decoration */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                {featured.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-medium text-slate-900">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Supporting column */}
          <div className="flex flex-col gap-4">
            {supporting.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className="group relative flex-1 overflow-hidden rounded-md border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        {/* <span className="font-mono text-xs tracking-wider text-slate-400">
                          {item.stage}
                        </span> */}
                        <h3 className="text-lg font-medium text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[15px] leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}