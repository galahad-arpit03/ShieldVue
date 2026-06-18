"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    icon: FileCode2,
    title: "SBOM Visibility",
    description:
      "Understand every software component, dependency and package powering your applications.",
  },
  {
    icon: KeyRound,
    title: "CBOM Discovery",
    description:
      "Inventory cryptographic assets, certificates and algorithms across environments.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Intelligence",
    description:
      "Identify vulnerable components and prioritize remediation efforts with confidence.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Readiness",
    description:
      "Prepare for audits with automated reporting and software supply chain governance.",
  },
];

export default function DemoBenefits() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-32">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
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
              mt-8

              text-4xl
              font-extrabold

              tracking-tight

              text-slate-900

              md:text-5xl
            "
          >
            What You'll See During
            <br />
            Your Demo
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            A guided walkthrough of ShieldVUE's most powerful
            capabilities for software visibility, vulnerability
            management and compliance readiness.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-4">
          {items.map((item, index) => (
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden

                rounded-[28px]

                border
                border-slate-300/80

                bg-white/90 backdrop-blur-sm

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:border-primary/20
                hover:shadow-xl
              "
            >
              {/* Hover Glow */}
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
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-primary/10

                    bg-primary/5

                    text-primary
                  "
                >
                  <item.icon className="h-7 w-7" />
                </div>

                <h3
                  className="
                    mt-8

                    text-xl
                    font-bold

                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4

                    leading-7

                    text-slate-600
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-8

                    flex
                    items-center
                    gap-2

                    text-sm
                    font-semibold

                    text-primary

                    opacity-0

                    transition-all
                    duration-300

                    group-hover:opacity-100
                    group-hover:translate-x-1
                  "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}