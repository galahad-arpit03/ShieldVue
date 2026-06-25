"use client";

import { motion , m} from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Boxes,
  FileCode2,
  Lock,
} from "lucide-react";

const highlights = [
  {
    icon: FileCode2,
    title: "SBOM Intelligence",
  },
  {
    icon: Lock,
    title: "CBOM Visibility",
  },
  {
    icon: ShieldCheck,
    title: "Vulnerability Intelligence",
  },
  {
    icon: Boxes,
    title: "Compliance & Governance",
  },
];

export default function AboutShieldVUE() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-40
          top-0

          h-[600px]
          w-[600px]

          rounded-full

          bg-primary/5

          blur-[150px]
        "
      />

      <div className="shield-container relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <m.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-gradient-to-br
                from-white
                to-primary/5

                shadow-xl
              "
            >
              <Image
                src="/images/about-shieldvue.png"
                alt="About ShieldVUE"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </m.div>

          {/* Right Side */}
          <m.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* <span
              className="
                inline-flex

                rounded-full

                bg-primary/10

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              About ShieldVUE
            </span> */}

            <h2
              className="
                mt-6

                text-4xl
                md:text-5xl

                font-medium

                leading-[1.08]

                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Built For Modern
              <span className="text-primary">
                {" "}Software Security
              </span>
            </h2>

            <p
              className="
                mt-8

                text-lg
                leading-8

                text-slate-600
              "
            >
              ShieldVUE is an enterprise software supply chain security
              platform that helps organizations discover, analyze, and
              govern software components across the entire development
              lifecycle. By combining SBOM management, CBOM visibility,
              vulnerability intelligence, and compliance automation,
              ShieldVUE enables teams to strengthen security, reduce
              operational risk, and accelerate audit readiness from a
              single integrated platform.
            </p>

            {/* Highlights */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
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

                      p-4

                      shadow-sm

                      transition-all
                      duration-300

                      hover:border-primary/30
                      hover:shadow-md
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

                        bg-primary/10

                        text-primary
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold

                        text-slate-800
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}