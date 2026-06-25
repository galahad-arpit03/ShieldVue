"use client";

import { m } from "framer-motion";
import {
  KeyRound,
  Shield,
  Lock,
  Network,
  GitBranch,
  Cpu,
} from "lucide-react";

const capabilities = [
  {
    icon: KeyRound,
    title: "Algorithm Discovery",
    description:
      "Automatically identify cryptographic algorithms used across applications, libraries, containers, and infrastructure.",
    className: "lg:col-span-2",
  },
  {
    icon: Shield,
    title: "Certificate Discovery",
    description:
      "Locate certificates and trust chains across environments.",
    className: "",
  },
  {
    icon: Lock,
    title: "Key Inventory",
    description:
      "Maintain visibility into cryptographic key usage and ownership.",
    className: "",
  },
  {
    icon: Network,
    title: "Protocol Detection",
    description:
      "Discover cryptographic protocols and communication dependencies.",
    className: "lg:col-span-2",
  },
  {
    icon: GitBranch,
    title: "Crypto Dependency Mapping",
    description:
      "Track cryptographic dependencies across applications and third-party components.",
    className: "",
  },
  {
    icon: Cpu,
    title: "Quantum Readiness Assessment",
    description:
      "Identify algorithms that may require migration for future quantum-safe compliance.",
    className: "",
  },
];

export default function CryptoCapabilities() {
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
        {/* Heading */}
        <div className="max-w-3xl">
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
            Complete Cryptographic
            <span className="text-primary">
              {" "}Asset Visibility
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
            Discover, inventory, analyze, and govern cryptographic
            assets across your software ecosystem through a
            centralized CBOM platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="
            mt-8 md:mt-16

            grid
            gap-6

            lg:grid-cols-4
          "
        >
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
                delay: index * 0.05,
              }}
              className={`
                group

                relative

                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                p-8

                transition-all
                duration-300

                hover:border-primary/20
                hover:shadow-xl

                ${capability.className}
              `}
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
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}