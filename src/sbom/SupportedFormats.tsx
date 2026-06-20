"use client";

import { motion } from "framer-motion";
import {
  FileJson,
  Shield,
  Boxes,
  CheckCircle2,
} from "lucide-react";

const formats = [
  {
    icon: Shield,
    name: "SPDX",
    description:
      "Industry-standard SBOM format maintained by the Linux Foundation for software transparency and license compliance.",
    features: [
      "License Tracking",
      "Compliance Ready",
      "Industry Standard",
    ],
  },
  {
    icon: Boxes,
    name: "CycloneDX",
    description:
      "Security-focused SBOM specification designed for vulnerability management and software supply chain security.",
    features: [
      "Security Focused",
      "Vulnerability Mapping",
      "Risk Management",
    ],
  },
  {
    icon: FileJson,
    name: "JSON",
    description:
      "Machine-readable structured format for integrations, automation pipelines, and custom workflows.",
    features: [
      "Easy Integration",
      "Automation Friendly",
      "API Ready",
    ],
  },
];

export default function SupportedFormats() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
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
        <div className="grid items-center gap-20 lg:grid-cols-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* <div
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-primary/20

                bg-primary/5

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              Multiple Format Support
            </div> */}

            <h2
              className="
                mt-6

                text-4xl
                md:text-5xl

                font-medium

                leading-[1.1]
                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Export SBOMs In
              <span className="text-primary">
                {" "}Industry Standard Formats
              </span>
            </h2>

            <p
              className="
                mt-8

                text-lg
                leading-8

                text-slate-600
              "
            >
              ShieldVUE supports globally recognized SBOM standards,
              enabling seamless interoperability across security,
              compliance, and software development ecosystems.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              Generate, export, and share Software Bills of Materials
              in the format best suited for your compliance,
              governance, and operational requirements.
            </p>
          </motion.div>

          {/* Right Formats */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {formats.map((format, index) => (
                <motion.div
                  key={format.name}
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
                    delay: index * 0.1,
                  }}
                  className="
                    group

                    rounded-[24px]

                    border
                    border-slate-200

                    bg-white

                    p-8

                    transition-all
                    duration-300

                    hover:border-primary/20
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-6

                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                    "
                  >
                    {/* Left */}
                    <div className="flex gap-5">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center

                          rounded-2xl

                          bg-primary/5

                          text-primary
                        "
                      >
                        <format.icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3
                          className="
                            text-xl
                            font-semibold

                            text-slate-900
                          "
                        >
                          {format.name}
                        </h3>

                        <p
                          className="
                            mt-3

                            max-w-xl

                            leading-7

                            text-slate-600
                          "
                        >
                          {format.description}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-3
                      "
                    >
                      {format.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            inline-flex
                            items-center
                            gap-2

                            rounded-full

                            border
                            border-slate-200

                            bg-slate-50

                            px-4
                            py-2

                            text-sm
                            font-medium

                            text-slate-700
                          "
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </div>
                      ))}
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