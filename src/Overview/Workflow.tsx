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
    title: "Collect Assets",
    description:
      "Ingest source code, containers, binaries, packages, and CI/CD pipeline artifacts.",
  },
  {
    icon: Boxes,
    title: "Generate SBOMs",
    description:
      "Automatically build standardized Software Bills of Materials across environments.",
  },
  {
    icon: Database,
    title: "Centralize Inventory",
    description:
      "Store applications, components, versions, and dependencies in a searchable repository.",
  },
  {
    icon: Radar,
    title: "Map Vulnerabilities",
    description:
      "Correlate software components against CVEs and real-time threat intelligence feeds.",
  },
  {
    icon: ShieldCheck,
    title: "Enforce Governance",
    description:
      "Apply policies, license controls, build gates, and compliance requirements.",
  },
  {
    icon: FileText,
    title: "Report & Audit",
    description:
      "Generate executive dashboards, audit reports, compliance reports, and risk analytics.",
  },
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      {/* Pattern */}
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
          left-1/2
          top-1/2

          h-[600px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-primary/5

          blur-[160px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
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
            A unified workflow that transforms software artifacts into
            actionable security, compliance, and governance intelligence.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-24">
          <div className="relative">
            {/* Desktop Line */}
            <div
              className="
                absolute
                left-0
                right-0
                top-10

                hidden
                lg:block

                h-px

                bg-slate-200
              "
            />

            <div className="grid gap-8 lg:grid-cols-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
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
                  className="
                    relative

                    flex
                    flex-col
                    items-center

                    text-center
                  "
                >
                  {/* Step Number */}
                  <div
                    className="
                      absolute
                      -top-4
                      right-1/2

                      translate-x-1/2

                      flex
                      h-8
                      w-8
                      items-center
                      justify-center

                      rounded-full

                      bg-slate-900

                      text-xs
                      font-bold

                      text-white

                      shadow-lg
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-20
                      w-20
                      items-center
                      justify-center

                      rounded-md

                      border
                      border-slate-200

                      bg-white

                      shadow-sm

                      transition-all
                      duration-300

                      hover:border-primary/20
                      hover:shadow-lg
                    "
                  >
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6

                      text-lg
                      font-bold

                      text-slate-900
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3

                      text-sm
                      leading-7

                      text-slate-600
                    "
                  >
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index !== workflowSteps.length - 1 && (
                    <div className="mt-6 lg:hidden">
                      <ArrowRight className="h-5 w-5 rotate-90 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-24

            rounded-md

            border
            border-slate-200

            bg-white

            p-10

            text-center

            shadow-sm
          "
        >
          <h3
            className="
              text-2xl

              font-medium

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            End-to-End Software Supply Chain Visibility
          </h3>

          <p
            className="
              mx-auto
              mt-4

              max-w-4xl

              text-slate-600
              leading-8
            "
          >
            From software composition analysis and vulnerability intelligence
            to governance enforcement and compliance reporting, ShieldVUE
            provides a single platform for securing the modern software
            supply chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}