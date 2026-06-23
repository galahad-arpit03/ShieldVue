"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
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
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
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
            From Policies To
            <span className="text-primary">
              {" "}Continuous Compliance
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
            ShieldVUE continuously evaluates software assets,
            enforces governance policies, maintains audit trails,
            and generates compliance evidence required for
            regulatory and internal governance programs.
          </p>
        </div>

        {/* Workflow Image */}
        <motion.div
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
            duration: 0.7,
          }}
          className="
            mt-16

            overflow-hidden

            rounded-md

            border
            border-slate-200

            bg-white

            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
          "
        >
          <Image
            src="/images/ChatGPT Image Jun 22, 2026, 01_30_57 PM.png"
            alt="ShieldVUE Compliance Governance Workflow"
            width={1600}
            height={900}
            priority
            className="
              w-full
              h-auto
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}