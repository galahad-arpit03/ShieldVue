"use client";

import { motion } from "framer-motion";
import {
    Boxes,
    Database,
    GitBranch,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function Workflow() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-32">
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

              text-4xl
              md:text-5xl

              font-medium

              leading-[1.05]

              tracking-[-0.03em]

              text-slate-900

              font-['Clash_Grotesk']
            "
                    >
                        From Software Assets
                        <span className="text-primary">
                            {" "}To Governed SBOM Intelligence
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
                        Watch how ShieldVUE automatically discovers components,
                        generates SBOMs, tracks versions, and maintains
                        centralized software supply chain visibility.
                    </p>
                </div>

                {/* Video */}
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

            rounded-[32px]

            border
            border-slate-200

            bg-white

            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
          "
                >
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

    rounded-[32px]

    border
    border-slate-200

    bg-white

    shadow-[0_25px_80px_rgba(15,23,42,0.08)]
  "
                    >
                        <Image
                            src="/images/ChatGPT Image Jun 20, 2026, 04_20_20 PM.png"
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
                    </motion.div>
                </motion.div>

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

                rounded-2xl

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

                  rounded-xl

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