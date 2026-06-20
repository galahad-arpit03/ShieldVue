"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  ShieldCheck,
  Search,
  GitBranch,
} from "lucide-react";

const benefits = [
  {
    icon: Boxes,
    title: "Software Transparency",
  },
  {
    icon: Search,
    title: "Dependency Visibility",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Readiness",
  },
  {
    icon: GitBranch,
    title: "Version Tracking",
  },
];

export default function WhatIsSBOM() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="shield-container">
        <div className="grid gap-20 items-center lg:grid-cols-2">
          {/* Left Content */}
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
              Understanding SBOM
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
              What Is a
              <span className="text-primary">
                {" "}Software Bill of Materials?
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
              A Software Bill of Materials (SBOM) is a complete inventory
              of all software components, libraries, dependencies, and
              packages used within an application.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              It provides organizations with the visibility needed to
              identify vulnerabilities, manage supply chain risks,
              meet compliance requirements, and maintain control over
              rapidly evolving software ecosystems.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              ShieldVUE automatically generates and manages SBOMs
              across source code, containers, binaries, packages,
              and CI/CD pipelines while maintaining centralized
              governance and traceability.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-slate-200

                bg-slate-50

                p-10
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0

                  h-60
                  w-60

                  rounded-full

                  bg-primary/10

                  blur-3xl
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    text-sm
                    font-medium

                    text-primary
                  "
                >
                  SBOM Benefits
                </div>

                <div className="mt-10 space-y-8">
                  {benefits.map((item) => (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-4
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

                          bg-white

                          shadow-sm
                        "
                      >
                        <item.icon
                          className="
                            h-5
                            w-5

                            text-primary
                          "
                        />
                      </div>

                      <div
                        className="
                          text-lg
                          font-medium

                          text-slate-900
                        "
                      >
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini Flow */}
                <div
                  className="
                    mt-12

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      text-sm
                      font-medium
                    "
                  >
                    <span>Source Code</span>
                    <span>→</span>
                    <span>SBOM</span>
                    <span>→</span>
                    <span>Visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}               