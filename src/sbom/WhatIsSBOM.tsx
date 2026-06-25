"use client";

import { m } from "framer-motion";
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
    <section className="relative overflow-hidden bg-white py-10 md:py-16">
      <div className="shield-container">
        <div className="grid gap-20 items-center lg:grid-cols-2">
          {/* Left Content */}
          <m.div
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

                text-2xl md:text-4xl
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

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A Software Bill of Materials (SBOM) is a complete inventory
              of all software components, libraries, dependencies, and
              packages used within an application.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              It provides organizations with the visibility needed to
              identify vulnerabilities, manage supply chain risks,
              meet compliance requirements, and maintain control over
              rapidly evolving software ecosystems.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              ShieldVUE automatically generates and manages SBOMs
              across source code, containers, binaries, packages,
              and CI/CD pipelines while maintaining centralized
              governance and traceability.
            </p>
          </m.div>

          {/* Right Visual */}
          <m.div
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
              <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-50 p-8">
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

                <div className="mt-6 space-y-4">
                  {benefits.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-base font-medium text-slate-900">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini Flow */}
                <div className="mt-8 rounded-md border border-slate-200 bg-white p-4">
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
          </m.div>
        </div>
      </div>
    </section>
  );
}               