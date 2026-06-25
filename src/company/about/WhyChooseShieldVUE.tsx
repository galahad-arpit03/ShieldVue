"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Activity,
  Building2,
  BrainCircuit,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Complete Visibility",
    description:
      "Gain a unified view of software components, dependencies, vulnerabilities, and cryptographic assets across your organization.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Monitor newly disclosed vulnerabilities, software changes, and emerging threats in real time.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    description:
      "Designed to support large-scale software ecosystems with centralized inventory and governance.",
  },
  {
    icon: BrainCircuit,
    title: "Actionable Intelligence",
    description:
      "Transform complex software composition data into meaningful security insights and prioritized actions.",
  },
  {
    icon: ShieldCheck,
    title: "Open Standards",
    description:
      "Built around industry standards including SPDX, CycloneDX, OWASP, and NIST for maximum interoperability.",
  },
  {
    icon: FileCheck2,
    title: "Audit Ready",
    description:
      "Accelerate compliance with centralized reporting, policy enforcement, and audit-ready documentation.",
  },
];

export default function WhyChooseShieldVUE() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
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

      {/* Ambient Glow */}
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
            Why ShieldVUE
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
            Why Organizations
            <span className="text-primary">
              {" "}Choose ShieldVUE
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
            Empower development, security, and compliance teams with
            complete software supply chain visibility, intelligent risk
            analysis, and enterprise-grade governance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
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

                    h-48
                    w-48

                    rounded-full

                    bg-primary/10

                    blur-[90px]

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

                      text-xl

                      font-medium

                      text-slate-900
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-sm
                      leading-7

                      text-slate-600
                    "
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="
            mx-auto
            mt-20

            max-w-5xl

            rounded-md

            border
            border-primary/10

            bg-gradient-to-r
            from-primary/5
            via-white
            to-primary/5

            px-8
            py-10

            text-center
          "
        >
          <h3
            className="
              text-2xl
              md:text-3xl

              font-medium

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            One Platform.
            <span className="text-primary">
              {" "}Complete Software Supply Chain Visibility.
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-5

              max-w-3xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            From software inventories and SBOMs to vulnerability
            intelligence, cryptographic assets, and compliance reporting,
            ShieldVUE brings every critical capability together into a
            unified enterprise platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}