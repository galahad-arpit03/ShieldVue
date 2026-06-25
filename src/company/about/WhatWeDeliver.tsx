"use client";

import { motion , m} from "framer-motion";
import {
  FileCode2,
  Shield,
  ShieldAlert,
  Scale,
  ArrowRight,
} from "lucide-react";

const offerings = [
  {
    title: "SBOM Management",
    description:
      "Generate, manage, compare, and govern Software Bills of Materials across your entire software ecosystem.",
    icon: FileCode2,
  },
  {
    title: "CBOM Management",
    description:
      "Discover cryptographic assets, encryption algorithms, certificates, and keys with complete visibility.",
    icon: Shield,
  },
  {
    title: "Vulnerability Intelligence",
    description:
      "Continuously correlate software components with CVEs, threat intelligence, and contextual risk.",
    icon: ShieldAlert,
  },
  {
    title: "Compliance & Governance",
    description:
      "Enforce security policies, licensing controls, and regulatory compliance from a unified platform.",
    icon: Scale,
  },
];

export default function WhatWeDeliver() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
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

          h-[650px]
          w-[650px]

          rounded-full

          bg-primary/5

          blur-[150px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          {/* <span
            className="
              inline-flex

              rounded-full

              bg-primary/10

              px-4
              py-2

              text-sm
              font-medium

              text-primary
            "
          >
            Platform Capabilities
          </span> */}

          <h2
            className="
              mt-6

              text-4xl
              md:text-5xl

              font-medium

              leading-[1.08]

              tracking-[-0.03em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            What We Deliver
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            ShieldVUE brings together software visibility,
            vulnerability intelligence, cryptographic analysis,
            and governance into one integrated enterprise platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((item, index) => {
            const Icon = item.icon;

            return (
              <m.div
                key={item.title}
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
                whileHover={{
                  y: -6,
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

                    h-56
                    w-56

                    rounded-full

                    bg-primary/10

                    blur-[100px]

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex

                      h-14
                      w-14

                      items-center
                      justify-center

                      rounded-xl

                      bg-primary/10

                      text-primary
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3
                    className="
                      mt-6

                      text-2xl

                      font-medium

                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-slate-600

                      leading-7
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-8

                      inline-flex

                      items-center

                      gap-2

                      text-sm
                      font-semibold

                      text-primary
                    "
                  >
                    Learn More

                    <ArrowRight
                      className="
                        h-4
                        w-4

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}