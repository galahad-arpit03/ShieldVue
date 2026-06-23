"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Database,
  Radar,
  Boxes,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    title: "SBOM Generation",
    description:
      "Automatically generate standardized Software Bills of Materials across your entire software ecosystem.",
    icon: FileCode2,
    features: [
      "Source Code",
      "Containers",
      "Binaries",
      "Packages",
      "CI/CD Pipelines",
    ],
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "SBOM Repository",
    description:
      "Centralized storage and lifecycle management for all software bill of materials records.",
    icon: Database,
    features: [
      "Centralized Storage",
      "Version Management",
      "Searchable Repository",
      "Audit Ready Records",
    ],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Vulnerability Mapping",
    description:
      "Map vulnerabilities directly to software components with continuous monitoring.",
    icon: Radar,
    features: [
      "CVE Mapping",
      "Threat Intelligence",
      "Risk Prioritization",
    ],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Inventory Management",
    description:
      "Maintain complete visibility into applications, environments, and software assets.",
    icon: Boxes,
    features: [
      "Application Inventory",
      "Component Inventory",
      "Asset Visibility",
    ],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Governance & Policy Enforcement",
    description:
      "Enforce security standards, licensing controls, and organizational governance policies.",
    icon: ShieldCheck,
    features: [
      "License Compliance",
      "Policy Enforcement",
      "Build Gate Controls",
      "Risk Governance",
    ],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Generate executive dashboards and audit-ready reports in real time.",
    icon: FileText,
    features: [
      "Executive Dashboards",
      "Compliance Reports",
      "Risk Reports",
      "Audit Reports",
    ],
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[600px]
          w-[600px]

          rounded-full

          bg-primary/5

          blur-[140px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2
            className="
              text-4xl
              md:text-5xl

              font-medium

              leading-[1.1]
              tracking-[-0.02em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Core Platform Capabilities
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            Everything required to discover, analyze, govern,
            and secure your software supply chain from a
            single integrated platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            const isWide =
              capability.className.includes("md:col-span-2");

            return (
              <motion.div
                key={capability.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`
                  group
                  relative
                  overflow-hidden

                  rounded-md

                  border
                  border-slate-200

                  bg-white

                  shadow-sm

                  transition-all
                  duration-300

                  hover:border-primary/20
                  hover:shadow-xl

                  ${capability.className}
                `}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-64
                    w-64

                    rounded-full

                    bg-primary/10

                    blur-[100px]

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Gradient Background */}
                <div
                  className={`
                    absolute
                    inset-0

                    ${
                      isWide
                        ? "bg-gradient-to-r from-white via-white to-primary/5"
                        : "bg-gradient-to-b from-white to-primary/5"
                    }
                  `}
                />

                <div className="relative z-10 flex h-full flex-col p-8">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-md

                      bg-primary/10

                      text-primary
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3
                    className="
                      mt-6

                      text-2xl
                      font-medium

                      text-slate-900
                    "
                  >
                    {capability.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-sm
                      leading-7

                      text-slate-600
                    "
                  >
                    {capability.description}
                  </p>

                  {/* Features */}
                  <div
                    className={`
                      mt-6

                      grid

                      gap-2

                      ${
                        isWide
                          ? "sm:grid-cols-2"
                          : "grid-cols-1"
                      }
                    `}
                  >
                    {capability.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2

                          text-sm

                          text-slate-700
                        "
                      >
                        <CheckCircle2
                          className="
                            h-4
                            w-4

                            flex-shrink-0

                            text-primary
                          "
                        />

                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}