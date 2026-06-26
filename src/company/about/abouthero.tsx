"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
<section ref={containerRef}
  className="
    relative
    overflow-hidden

    min-h-[760px]

    pt-40
    pb-32
  "
>
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <m.div className="absolute inset-0 z-0 origin-top" style={{ y: yBg, scale: 1.1 }}>
<Image
                    src="/images/about-hero3.png"
                    alt="ShieldVUE Office"
                    fill
                    sizes="100vw"
                    className="
            object-cover
            object-[82%_center]
            select-none
            pointer-events-none
          "
                />
</m.div>
            </div>

            {/* Main Left Gradient */}
            <div
                className="
          absolute
          inset-0
          z-[1]

bg-gradient-to-r
from-white
via-white
via-[5%]
via-transparent
to-transparent
        "
            />

            {/* Bottom Fade */}
            <div
                className="
          absolute
          inset-0
          z-[2]

          bg-gradient-to-t
          from-white/70
          via-transparent
          to-transparent
        "
            />

            {/* Purple Ambient Glow */}
            <div
                className="
          absolute
          left-0
          top-0
          z-[3]

          h-[650px]
          w-[650px]

          rounded-full

          bg-primary/10

          blur-[150px]
        "
            />

            {/* Content */}
            <div className="shield-container relative z-10">
                <div className="max-w-4xl">

                    {/* Heading */}
                    <m.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
              max-w-5xl

              text-5xl
              md:text-6xl
              lg:text-7xl

              font-medium

              leading-[1.05]
              tracking-[-0.04em]

              text-slate-950

              font-['Clash_Grotesk']

              drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]
            "
                    >
                        Building Trust In
                        <br />
                        Modern Software{" "}
                        <span
                            className="
                text-primary
                drop-shadow-[0_2px_10px_rgba(255,255,255,0.55)]
              "
                        >
                            Supply Chains
                        </span>
                    </m.h1>

                    {/* Description */}
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                        className="
              mt-8

              max-w-2xl

              text-lg
              leading-8

              font-medium

              text-slate-700

              drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)]
            "
                    >
                        ShieldVUE empowers organizations with complete visibility into
                        software components, vulnerabilities, cryptographic assets,
                        and compliance posture through a unified software supply chain
                        security platform.
                    </m.p>

                    {/* CTA */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
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

                bg-primary

                text-white

                shadow-lg
                shadow-primary/25

                hover:bg-primary/90
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

                border
                border-slate-200

                bg-white/90
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
                    </m.div>

                    {/* Stats
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.35,
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

                    text-slate-950

                    drop-shadow-[0_2px_8px_rgba(255,255,255,0.65)]
                  "
                                >
                                    {item.value}
                                </div>

                                <div
                                    className="
                    mt-2

                    text-sm
                    font-medium

                    text-slate-700
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