"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Database,
  Radar,
  Boxes,
  ShieldCheck,
  FileText,
} from "lucide-react";

const capabilities = [
  {
    title: "SBOM Generation",
    description:
      "Automatically discover components and generate accurate Software Bills of Materials across source code, containers, binaries, packages, and CI/CD pipelines.",
    icon: FileCode2,
    image: "/images/ChatGPT Image Jun 24, 2026, 11_53_05 AM.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "SBOM Repository",
    description:
      "Maintain a centralized, version-controlled repository of SBOMs with complete traceability and lifecycle visibility.",
    icon: Database,
    image: "/images/ChatGPT Image Jun 24, 2026, 12_35_27 PM.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Vulnerability Mapping",
    description:
      "Continuously correlate software components with CVEs, threat intelligence, and risk context in real time.",
    icon: Radar,
    image: "/images/ChatGPT Image Jun 24, 2026, 12_39_13 PM.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Inventory Management",
    description:
      "Build a complete inventory of applications, dependencies, environments, and software assets across your organization.",
    icon: Boxes,
    image: "/images/ChatGPT Image Jun 24, 2026, 12_41_39 PM.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Governance & Policy Enforcement",
    description:
      "Apply compliance policies, licensing controls, and security standards consistently across the software lifecycle.",
    icon: ShieldCheck,
    image: "/images/ChatGPT Image Jun 24, 2026, 12_43_58 PM.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Deliver executive dashboards, compliance evidence, and audit-ready reporting from a single source of truth.",
    icon: FileText,
    image: "/images/ChatGPT Image Jun 24, 2026, 12_46_29 PM.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-16">
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
        <div className="mx-auto mb-10 md:mb-20 max-w-3xl text-center">
          <h2
            className="
              text-2xl md:text-4xl
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

                  hover:border-primary/30
                  hover:shadow-xl

                  ${capability.className}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className={`
                      h-full
                      w-full

                      ${isWide
                        ? "object-cover object-right"
                        : "object-cover object-center"
                      }

                      opacity-95

                      group-hover:scale-105

                      transition-transform
                      duration-700
                    `}
                  />
                </div>

                {/* Wide Cards */}
                {isWide ? (
                  <div
                    className="
                      relative
                      z-10

                      h-full

                      flex
                      items-end

                      p-8

                      bg-gradient-to-r
                      from-white
                      via-white/92
                      to-transparent
                    "
                  >
                    <div className="max-w-md">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center

                          rounded-xl

                          bg-primary/10

                          text-primary

                          mb-4
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3
                        className="
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
                    </div>
                  </div>
                ) : (
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0

                      z-10

                      p-6
                      pt-24

bg-gradient-to-t
from-white
via-white/60
to-transparent
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-xl

                        bg-primary/10

                        text-primary

                        mb-4
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-medium

                        text-slate-900
                      "
                    >
                      {capability.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-sm
                        leading-6

                        text-slate-600
                      "
                    >
                      {capability.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}