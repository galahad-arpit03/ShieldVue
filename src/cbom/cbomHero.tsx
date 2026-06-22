"use client";

import { motion } from "framer-motion";
import { Button } from "@/Common/UI/Button/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CBOMHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/cbom-hero.png')",
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

            Your
            <span className="text-primary">
              {" "}Cryptographic Assets
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
            Automatically discover, inventory, monitor, and govern
            cryptographic algorithms, certificates, keys, protocols,
            and cryptographic dependencies across your software ecosystem.
            Build cryptographic agility, reduce risk, and prepare for
            post-quantum security challenges with complete visibility.
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

                border-0
              "
            >
              <Link href="/book-demo">
                Request Demo
              </Link>
            </Button>

            <Button
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

                text-slate-800

                bg-white/50

                backdrop-blur-md

                hover:bg-white/80

                flex
                items-center
                gap-2

                shadow-sm
              "
            >
              View Documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}