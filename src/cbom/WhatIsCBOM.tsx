"use client";

import { motion } from "framer-motion";
import {
  KeyRound,
  ShieldCheck,
  Lock,
  Search,
} from "lucide-react";

const benefits = [
  {
    icon: KeyRound,
    title: "Cryptographic Visibility",
  },
  {
    icon: Search,
    title: "Algorithm Discovery",
  },
  {
    icon: Lock,
    title: "Crypto Governance",
  },
  {
    icon: ShieldCheck,
    title: "Quantum Readiness",
  },
];

export default function WhatIsCBOM() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="shield-container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
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
            <h2
              className="
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
                {" "}Cryptographic Bill of Materials?
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
              A Cryptographic Bill of Materials (CBOM) provides a
              complete inventory of cryptographic assets used across
              software applications, libraries, containers, and
              infrastructure environments.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              It identifies cryptographic algorithms, certificates,
              keys, protocols, and cryptographic dependencies,
              enabling organizations to understand where encryption
              is used and where risks may exist.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              ShieldVUE automatically discovers cryptographic assets,
              centralizes inventory management, and helps security
              teams prepare for algorithm migrations, compliance
              requirements, and future quantum-era risks.
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

                rounded-md

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
                  CBOM Benefits
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

                          rounded-md

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

                    rounded-md

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

                      text-slate-700
                    "
                  >
                    <span>Algorithms</span>
                    <span>→</span>
                    <span>CBOM</span>
                    <span>→</span>
                    <span>Governance</span>
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