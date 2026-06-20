"use client";

import { motion } from "framer-motion";
import { Button } from "@/Common/UI/Button/Button";
import {
  ArrowRight,
  Boxes,
  GitBranch,
  ShieldCheck,
  Database,
} from "lucide-react";

export default function SBOMHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/sbomHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

      {/* White Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/80
          to-white/10
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-0

          h-[700px]
          w-[700px]

          rounded-full

          bg-primary/10

          blur-[180px]
        "
      />

      <div className="shield-container relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            SBOM Management
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              mt-8

              max-w-4xl

              text-5xl
              md:text-6xl
              lg:text-7xl

              font-medium

              leading-[1.05]
              tracking-[-0.04em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Complete Visibility Into
            <br />

            Your Software
            <span className="text-primary">
              {" "}Supply Chain
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-8

              max-w-2xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            Automatically generate, manage, track, and govern
            Software Bills of Materials across source code,
            containers, binaries, packages, and CI/CD pipelines.
            Gain complete dependency visibility and maintain
            audit-ready software inventories at scale.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                border-slate-200
                bg-white/80
                backdrop-blur-sm

                text-slate-900

                hover:bg-white
                hover:text-slate-900
              "
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Metrics
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              mt-20

              grid
              gap-8

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              {
                icon: Boxes,
                value: "SBOM",
                label: "Generation",
              },
              {
                icon: Database,
                value: "100%",
                label: "Visibility",
              },
              {
                icon: GitBranch,
                value: "Version",
                label: "Tracking",
              },
              {
                icon: ShieldCheck,
                value: "Audit",
                label: "Ready",
              },
            ].map((item) => (
              <div key={item.label}>
                <item.icon className="h-5 w-5 text-primary" />

                <div
                  className="
                    mt-3

                    text-3xl
                    font-bold

                    text-slate-900
                  "
                >
                  {item.value}
                </div>

                <div
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}