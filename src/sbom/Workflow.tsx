"use client";

import { m } from "framer-motion";
import {
    Boxes,
    Database,
    GitBranch,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function Workflow() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-10 md:py-16">
            {/* Background */}
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
              mt-6
              text-2xl md:text-4xl
              md:text-5xl
              font-medium
              leading-[1.05]
              tracking-[-0.03em]
              text-slate-900
              font-['Clash_Grotesk']
            "
                    >
                        Automated SBOM Intelligence
                    </h2>

                    <p
                        className="
              mt-6
              text-lg
              leading-relaxed
              text-slate-600
            "
                    >
                        Automatically discover components, generate SBOMs, and maintain total supply chain visibility.
                    </p>
                </div>

                {/* Video */}
                <m.div
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
            mt-8 md:mt-16

            overflow-hidden

            rounded-md

            border
            border-slate-200

            bg-white

            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
          "
                >
                    {/* Workflow Image */}
                    <m.div
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
    mt-8 md:mt-16

    overflow-hidden

    rounded-md

    border
    border-slate-200

    bg-white

    shadow-[0_25px_80px_rgba(15,23,42,0.08)]
  "
                    >
                        <Image
                            src="/images/sbom-workflow2.png"
                            alt="ShieldVUE SBOM Workflow"
                            width={1600}
                            height={900}
                            priority
                            className="
      w-full
      h-auto
      object-contain
    "
                        />
                    </m.div>
                </m.div>

                {/* Benefits
                <div
                    className="
            mt-12

            grid
            gap-6

            md:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {[
                        {
                            icon: Boxes,
                            title: "Dependency Discovery",
                        },
                        {
                            icon: GitBranch,
                            title: "Version Tracking",
                        },
                        {
                            icon: Database,
                            title: "Central Repository",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Compliance Ready",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="
                flex
                items-center
                gap-4

                rounded-md

                border
                border-slate-200

                bg-white

                px-6
                py-5

                shadow-sm
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

                  bg-primary/5

                  text-primary
                "
                            >
                                <item.icon className="h-6 w-6" />
                            </div>

                            <span
                                className="
                  font-medium

                  text-slate-900
                "
                            >
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}