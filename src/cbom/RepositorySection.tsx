"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Search,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const repositoryFeatures = [
  {
    icon: Database,
    title: "Centralized CBOM Repository",
    description:
      "Maintain a single source of truth for cryptographic assets, algorithms, certificates, and keys across the enterprise.",
  },
  {
    icon: GitBranch,
    title: "Version Tracking",
    description:
      "Track cryptographic changes across releases and maintain historical records for governance and auditing.",
  },
  {
    icon: Search,
    title: "Searchable Crypto Inventory",
    description:
      "Instantly locate algorithms, certificates, keys, and cryptographic dependencies across applications and environments.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Compliance Ready",
    description:
      "Support regulatory compliance initiatives with centralized records, governance controls, and complete traceability.",
  },
];

export default function RepositorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[600px]
          w-[600px]

          rounded-full

          bg-primary/5

          blur-[160px]
        "
      />

      <div className="shield-container relative z-10">
        <div
          className="
            grid
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2
              className="
                text-4xl
                md:text-5xl

                font-medium

                leading-[1.05]

                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Centralized CBOM
              <span className="text-primary">
                {" "}Repository &
              </span>
              <br />
              Governance
            </h2>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              Create a centralized inventory of cryptographic assets
              and maintain complete visibility into certificates,
              keys, algorithms, and dependencies across your software
              ecosystem.
            </p>

            <div className="mt-12 space-y-6">
              {repositoryFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-md

                      bg-primary/5

                      text-primary
                    "
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold

                        text-slate-900
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        leading-7

                        text-slate-600
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
            className="relative"
          >
            <div
              className="
                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              "
            >
              <Image
                src="/images/cbom-repository.png"
                alt="ShieldVUE CBOM Repository Dashboard"
                width={1400}
                height={900}
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -left-8
                top-10

                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-md

                  border
                  border-slate-200

                  bg-white

                  px-5
                  py-4

                  shadow-xl
                "
              >
                <div className="text-xs text-slate-500">
                  Crypto Assets
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-slate-900
                  "
                >
                  5,200+
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -right-8
                bottom-10

                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-md

                  border
                  border-slate-200

                  bg-white

                  px-5
                  py-4

                  shadow-xl
                "
              >
                <div className="text-xs text-slate-500">
                  Governance Status
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-primary
                  "
                >
                  Active
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}