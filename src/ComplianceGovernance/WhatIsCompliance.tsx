"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Lock,
  ClipboardCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
  },
  {
    icon: Lock,
    title: "Access Governance",
  },
  {
    icon: FileCheck,
    title: "Audit Readiness",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
  },
];

export default function WhatIsCompliance() {
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
              What Is
              <span className="text-primary">
                {" "}Compliance &
                Governance?
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
              Compliance and governance ensure that software
              development, deployment, and operations follow
              organizational policies, industry regulations,
              and security best practices.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              As software supply chains become more complex,
              organizations require continuous oversight,
              policy enforcement, access controls, audit
              evidence, and compliance monitoring to reduce
              risk and maintain trust.
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              ShieldVUE centralizes governance controls,
              audit readiness, compliance reporting,
              and policy enforcement into a single
              platform that enables organizations to
              operate securely and confidently.
            </p>
          </motion.div>

          {/* Right Visual Card */}
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
                  Governance Benefits
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
                    <span>Policies</span>
                    <span>→</span>
                    <span>Controls</span>
                    <span>→</span>
                    <span>Compliance</span>
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