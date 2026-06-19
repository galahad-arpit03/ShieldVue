"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  FileCheck,
  Eye,
  LockKeyhole,
  HeartHandshake,
  Zap,
} from "lucide-react";

const outcomes = [
  {
    icon: ShieldAlert,
    metric: "85%",
    title: "Faster Vulnerability Identification",
    description:
      "Automatically correlate software components with known CVEs and prioritize remediation before vulnerabilities impact production systems.",
  },
  {
    icon: FileCheck,
    metric: "10x",
    title: "Faster Audit Preparation",
    description:
      "Generate audit-ready reports and compliance evidence instantly for regulatory and customer security requirements.",
  },
  {
    icon: Eye,
    metric: "100%",
    title: "Software Visibility",
    description:
      "Maintain a complete inventory of applications, components, dependencies, and cryptographic assets across environments.",
  },
  {
    icon: LockKeyhole,
    metric: "Zero",
    title: "Governance Gaps",
    description:
      "Enforce policies, build gates, and compliance controls across development pipelines with centralized governance.",
  },
  {
    icon: HeartHandshake,
    metric: "SSDF",
    title: "Compliance Ready",
    description:
      "Support secure software development practices aligned with modern compliance and supply chain security frameworks.",
  },
  {
    icon: Zap,
    metric: "<1h",
    title: "Impact Assessment",
    description:
      "Rapidly identify affected applications and dependencies when new vulnerabilities or security advisories emerge.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
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

          h-[500px]
          w-[500px]

          rounded-full

          bg-primary/5

          blur-[140px]
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
            Measurable Business Outcomes
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            ShieldVUE helps organizations reduce software supply chain risk,
            improve compliance readiness, and gain complete visibility into
            software assets across the enterprise.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
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
                y: -8,
              }}
              className="
                group
                relative

                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:border-primary/20
                hover:shadow-xl
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0

                  h-40
                  w-40

                  rounded-full

                  bg-primary/10

                  blur-3xl

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                {/* Icon */}
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
                  <item.icon className="h-6 w-6" />
                </div>

                {/* Metric */}
                <div
                  className="
                    mt-8

                    text-5xl

                    font-bold

                    text-primary
                  "
                >
                  {item.metric}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4

                    text-xl

                    font-bold

                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4

                    text-slate-600

                    leading-7
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
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
            mt-20

            rounded-md

            border
            border-slate-200

            bg-slate-50

            p-10

            text-center
          "
        >
          <div
            className="
              text-2xl
              md:text-3xl

              font-medium

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Visibility. Governance. Intelligence.
          </div>

          <p
            className="
              mx-auto
              mt-4

              max-w-3xl

              text-slate-600
              leading-8
            "
          >
            ShieldVUE combines SBOM management, vulnerability intelligence,
            inventory tracking, governance controls, and reporting into a
            unified enterprise platform for software supply chain security.
          </p>
        </motion.div>
      </div>
    </section>
  );
}