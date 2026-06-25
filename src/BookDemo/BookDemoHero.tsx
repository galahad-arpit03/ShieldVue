"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function BookDemoHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-40 pb-8 md:pb-16 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/book_demo/contact_us_hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        {/* Left Content Readability Gradient */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r from-white via-white/50 to-transparent
          "
        />
      </div>

      <div className="shield-container relative z-10">
        <div className="min-h-[80vh] flex items-center">
          <m.div
            className="max-w-3xl"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Eyebrow */}
            {/* <div
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
              Book a Personalized Demo
            </div> */}

            {/* Heading */}
            <h1
              className="
                mt-8
                text-6xl
                lg:text-7xl

                font-medium

                leading-[1.05]
                tracking-[-0.04em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              See
              <span className="text-primary">
                {" "}ShieldVUE
              </span>
              <br />
              In Action
            </h1>

            {/* Description */}
            <p
              className="
                mt-8

                max-w-2xl

                text-xl
                leading-9

                text-slate-600
              "
            >
              Discover how security, compliance and engineering teams
              gain complete visibility into software components,
              vulnerabilities, cryptographic assets and software
              supply chain risks using ShieldVUE.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="
    h-12
    px-7

    bg-primary

    text-white

    shadow-xl
    shadow-primary/30

    hover:bg-primary/90
  "
              >
                <a href="#demo-form">
                  Schedule Demo
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  h-12
                  px-7

                  border-slate-300

                  bg-white/80

                  text-slate-800

                  backdrop-blur-md

                  hover:bg-white
                "
              >
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 md:mt-16 grid max-w-2xl grid-cols-3 gap-8">
              {/* <div>
                <div className="text-xl md:text-3xl font-bold text-slate-900">
                  SBOM
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Software Visibility
                </div>
              </div>

              <div>
                <div className="text-xl md:text-3xl font-bold text-slate-900">
                  CBOM
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Crypto Discovery
                </div>
              </div>

              <div>
                <div className="text-xl md:text-3xl font-bold text-slate-900">
                  NIST
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Compliance Ready
                </div>
              </div> */}
            </div>
          </m.div>
        </div>
      </div>

    </section>
  );
}