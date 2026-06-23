"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Database,
  Radar,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Code2,
    title: "Connect Repositories",
    description: "Git Repositories, Registries & Build Pipelines",
  },
  {
    icon: Boxes,
    title: "Discover Components",
    description: "Identify Packages, Dependencies & Assets",
  },
  {
    icon: Database,
    title: "Generate SBOM & CBOM",
    description: "Create Complete Software & Crypto Inventories",
  },
  {
    icon: Radar,
    title: "Identify Vulnerabilities",
    description: "CVE Correlation & Threat Intelligence",
  },
  {
    icon: ShieldCheck,
    title: "Apply Policies",
    description: "Governance, Compliance & Security Controls",
  },
  {
    icon: FileText,
    title: "Generate Reports",
    description: "Audit Evidence, Dashboards & Analytics",
  },
  {
    icon: Radar,
    title: "Continuous Monitoring",
    description: "Track Changes, Risks & New Threats",
  },
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-primary/5

          blur-[180px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Heading */}
        <div className="max-w-3xl">
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
            How ShieldVUE Works
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            Transform software artifacts into actionable security,
            compliance, and governance intelligence through a
            unified software supply chain workflow.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-24">
          {/* Desktop */}
          <div className="hidden xl:block">
            <div className="relative">
              {/* Main Line */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-[52px]

                  h-px

                  bg-gradient-to-r
                  from-slate-200
                  via-primary/30
                  to-slate-200
                "
              />

              <div className="grid grid-cols-7 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="relative text-center"
                  >
                    {/* Icon */}
                    <div
                      className="
                        relative
                        z-10

                        mx-auto

                        flex
                        h-24
                        w-24

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-slate-200

                        bg-white

                        shadow-sm
                      "
                    >
                      <step.icon className="h-9 w-9 text-primary" />
                    </div>

                    {/* Number */}
                    <div
                      className="
                        mt-6

                        text-sm
                        font-bold

                        tracking-[0.2em]

                        text-primary
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-3

                        text-lg
                        font-semibold

                        text-slate-900
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-2

                        text-sm

                        leading-6

                        text-slate-500
                      "
                    >
                      {step.description}
                    </p>

                    {index !== workflowSteps.length - 1 && (
                      <ArrowRight
                        className="
                          absolute
                          right-[-18px]
                          top-[44px]

                          h-4
                          w-4

                          text-primary
                        "
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="xl:hidden">
            <div className="mx-auto max-w-3xl">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className="
                          flex
                          h-14
                          w-14

                          items-center
                          justify-center

                          rounded-full

                          border
                          border-slate-200

                          bg-white

                          shadow-sm
                        "
                      >
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>

                      {index !== workflowSteps.length - 1 && (
                        <div
                          className="
                            h-24
                            w-px

                            bg-slate-200
                          "
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-12">
                      <div
                        className="
                          text-xs
                          font-bold

                          tracking-[0.2em]

                          text-primary
                        "
                      >
                        0{index + 1}
                      </div>

                      <h3
                        className="
                          mt-2

                          text-xl
                          font-semibold

                          text-slate-900
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2

                          text-slate-600

                          leading-7
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}