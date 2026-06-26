"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/Common/UI/Button/Button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export default function SBOMHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-28 md:pt-40 pb-8 md:pb-16">
      {/* Background Image */}
      <m.div className="absolute inset-0 z-0 origin-top" style={{ y: yBg, scale: 1.1 }}>
<Image
        src="/images/sbom-hero.png"
        alt="ShieldVUE SBOM"
        fill
        priority
        className="object-cover object-[right_center] -z-10"
      />
</m.div>

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
          {/* <m.div
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
          </m.div> */}

          {/* Heading */}
          <m.h1
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

              text-3xl md:text-5xl
              md:text-6xl
              lg:text-7xl

              font-medium

              leading-[1.05]
              tracking-[-0.04em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Know Every Component
            <br />

            {/* Your Software */}
            <span className="text-primary">
              {" "}In Your Software

            </span>
          </m.h1>

          {/* Description */}
          <m.p
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
          </m.p>

          {/* CTA */}
          <m.div
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
            className="mt-10 flex flex-row gap-3"
          >
            <Button
              size="lg"
              className="
                h-11
                flex-1 sm:flex-none
                px-3 sm:px-6
                rounded-md
                text-xs sm:text-sm
                font-semibold

                bg-primary
                hover:bg-primary/90

                text-white

                shadow-lg
                shadow-primary/20

                border-0
              "
            >
              <Link href="/contact-us">
                Request Demo
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                h-11
                flex-1 sm:flex-none
                px-3 sm:px-6
                rounded-md
                text-xs sm:text-sm
                font-medium

                border
                border-slate-200

                text-slate-800

                bg-white/50

                backdrop-blur-md

                hover:bg-white/80

                flex

                items-center

                justify-center

                gap-1 sm:gap-2

                shadow-sm
              "
            >
              View Documentation
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </m.div>

          {/* Metrics
          <m.div
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
              mt-10 md:mt-20

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

                    text-xl md:text-3xl
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
          </m.div> */}
        </div>
      </div>
    </section>
  );
}