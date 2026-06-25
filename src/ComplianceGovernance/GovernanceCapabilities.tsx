"use client";

import { m } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  ClipboardCheck,
  FileText,
  Scale,
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description:
      "Define and enforce governance policies across software assets, components, and development workflows.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description:
      "Control access to SBOMs, CBOMs, reports, and governance functions using granular permissions.",
  },
  {
    icon: FileCheck,
    title: "Audit Readiness",
    description:
      "Maintain complete audit trails and evidence required for internal reviews and external assessments.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Monitoring",
    description:
      "Continuously evaluate software assets against governance policies and compliance requirements.",
  },
  {
    icon: FileText,
    title: "Compliance Reporting",
    description:
      "Generate executive, operational, and audit-ready reports with actionable compliance insights.",
  },
  {
    icon: Scale,
    title: "Governance Controls",
    description:
      "Establish centralized oversight for software supply chain risk, accountability, and operational governance.",
  },
];

export default function GovernanceCapabilities() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-16 md:py-32">
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

      <div className="shield-container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="
              text-2xl md:text-4xl
              md:text-5xl

              font-medium

              leading-[1.05]
              tracking-[-0.03em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Compliance &
            <span className="text-primary">
              {" "}Governance Capabilities
            </span>
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            Centralize policy enforcement, compliance oversight,
            audit readiness, and governance controls across
            your software supply chain.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="mt-10 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <m.div
              key={capability.title}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group

                rounded-md

                border
                border-slate-200

                bg-white

                p-8

                transition-all
                duration-300

                hover:border-primary/20
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-md

                  bg-primary/5

                  text-primary
                "
              >
                <capability.icon className="h-7 w-7" />
              </div>

              <h3
                className="
                  mt-6

                  text-xl
                  font-semibold

                  text-slate-900
                "
              >
                {capability.title}
              </h3>

              <p
                className="
                  mt-4

                  leading-7

                  text-slate-600
                "
              >
                {capability.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}