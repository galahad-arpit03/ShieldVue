"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function CTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="shield-container">
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
          className="
            relative

            overflow-hidden

            rounded-md

            bg-gradient-to-br
            from-slate-100/80
            to-slate-200/40

            backdrop-blur-2xl

            border
            border-white/60

            shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]

            px-6
            py-12

            sm:px-12
            sm:py-16

            md:px-16

            lg:px-20
          "
        >
          {/* Background Effects */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Purple Ray */}
            <div
              className="
                absolute

                -top-[20%]
                left-[-20%]

                md:left-[10%]

                w-[150%]
                md:w-[80%]

                h-[140%]

                bg-gradient-to-b
                from-primary/20
                via-primary/5
                to-transparent

                -rotate-[15deg]

                blur-2xl

                transform-gpu
              "
            />

            {/* Ambient Glow */}
            <div
              className="
                absolute

                top-0
                right-0

                w-[300px]
                md:w-[500px]

                h-[300px]
                md:h-[500px]

                rounded-full

                bg-primary/10

                blur-[80px]
                md:blur-[100px]

                translate-x-1/3
                -translate-y-1/3
              "
            />

            <div
              className="
                absolute

                bottom-0
                left-0

                w-[250px]
                md:w-[400px]

                h-[250px]
                md:h-[400px]

                rounded-full

                bg-indigo-400/10

                blur-[60px]
                md:blur-[80px]

                -translate-x-1/3
                translate-y-1/3
              "
            />

            {/* Dot Pattern */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_center,#cbd5e1_1px,transparent_1px)]
                bg-[length:24px_24px]

                md:bg-[length:32px_32px]

                opacity-40
              "
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl

                font-medium

                text-slate-900

                mb-4

                tracking-tight

                font-['Clash_Grotesk']

                leading-[1.2]
              "
            >
              Gain Complete Visibility Into
              <br className="hidden sm:block" />
              <span className="text-primary">
                Your Cryptographic Assets
              </span>
            </h2>

            <p
              className="
                text-base
                sm:text-lg

                text-slate-600

                mb-8

                leading-relaxed

                max-w-2xl

                mx-auto
              "
            >
              Discover cryptographic algorithms, certificates,
              keys, and protocols across your software ecosystem.
              Build comprehensive CBOMs, reduce cryptographic risk,
              and prepare for the transition to quantum-safe security.
            </p>

            <div
              className="
                flex
                flex-col

                sm:flex-row

                justify-center

                gap-4
              "
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
                "
              >
                <Link href="/book-demo">
                  Book Demo
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  w-full
                  sm:w-auto

                  h-12
                  px-8

                  rounded-md

                  text-sm
                  font-medium

                  border
                  border-slate-300

                  text-slate-700

                  bg-white/80

                  hover:bg-white
                  hover:text-slate-900

                  flex
                  items-center
                  justify-center
                  gap-2

                  shadow-sm

                  transition-all
                "
              >
                <Link href="/overview">
                  Explore Platform
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}