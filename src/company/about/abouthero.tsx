"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/ChatGPT Image Jun 22, 2026, 04_12_49 PM.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

      {/* White Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/85
          to-white/15
        "
      />

      {/* Ambient Glow */}
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
          {/* Breadcrumb */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2

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
            Company
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

              max-w-5xl

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
            Building Trust In
            <br />

            Modern Software
            <span className="text-primary">
              {" "}Supply Chains
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
            ShieldVUE empowers organizations with complete visibility
            into software components, vulnerabilities, cryptographic
            assets, and compliance posture through a unified software
            supply chain security platform.
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
            <Button
              asChild
              size="lg"
              className="
                h-11
                px-6

                rounded-md

                text-sm
                font-semibold

                bg-primary
                hover:bg-primary/90

                text-white

                shadow-lg
                shadow-primary/20
              "
            >
              <Link href="/book-demo">
                Book A Demo
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                h-11
                px-6

                rounded-md

                text-sm
                font-medium

                border
                border-slate-200

                bg-white/60

                backdrop-blur-md

                hover:bg-white

                flex
                items-center
                gap-2
              "
            >
              <Link href="/platform/overview">
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
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
                value: "SBOM",
                label: "Management",
              },
              {
                value: "CBOM",
                label: "Visibility",
              },
              {
                value: "CVE",
                label: "Intelligence",
              },
              {
                value: "Enterprise",
                label: "Governance",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="
                    text-3xl
                    font-bold

                    text-slate-900
                  "
                >
                  {item.value}
                </div>

                <div
                  className="
                    mt-2

                    text-sm

                    text-slate-500
                  "
                >
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}