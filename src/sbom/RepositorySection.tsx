"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  Database,
  GitBranch,
  Search,
  ShieldCheck,
} from "lucide-react";

const repositoryFeatures = [
  {
    icon: Database,
    title: "Centralized Storage",
    description:
      "Store all generated SBOMs in a secure repository with complete lifecycle visibility.",
  },
  {
    icon: GitBranch,
    title: "Version Management",
    description:
      "Track changes across releases and maintain historical software composition records.",
  },
  {
    icon: Search,
    title: "Searchable Repository",
    description:
      "Quickly locate applications, components, dependencies, and versions across environments.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Ready Records",
    description:
      "Maintain immutable records to support compliance audits and governance requirements.",
  },
];

export default function RepositorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16">
      {/* Background Glow */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[600px]
          w-[600px]

          rounded-full

          bg-primary/5

          blur-[160px]
        "
      />

      <div className="shield-container relative z-10">
        <div
          className="
            grid
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
          {/* Left Content */}
          <m.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >


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
              Centralized SBOM
              <span className="text-primary">
                {" "}Repository &
              </span>
              <br />
              Version Governance
            </h2>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              Maintain a single source of truth for software composition
              data. Track historical changes, manage versions, search
              dependencies, and support compliance initiatives with
              audit-ready records.
            </p>

            {/* Features */}
            <div className="mt-12 space-y-6">
              {repositoryFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-md

                      bg-primary/5

                      text-primary
                    "
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold

                        text-slate-900
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        leading-7

                        text-slate-600
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </m.div>

          {/* Right Visual */}
          <m.div
            initial={{
              opacity: 0,
              x: 30,
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
                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              "
            >
              <Image
                src="/images/sbom-repository.png"
                alt="ShieldVUE Repository Dashboard"
                width={1400}
                height={900}
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />
            </div>

            {/* Floating Badge 1 */}
            <div
              className="
                absolute
                -left-8
                top-12

                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-md

                  border
                  border-slate-200

                  bg-white

                  px-5
                  py-4

                  shadow-xl
                "
              >
                <div className="text-xs text-slate-500">
                  Stored SBOMs
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-slate-900
                  "
                >
                  2,300+
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div
              className="
                absolute
                -right-8
                bottom-12

                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-md

                  border
                  border-slate-200

                  bg-white

                  px-5
                  py-4

                  shadow-xl
                "
              >
                <div className="text-xs text-slate-500">
                  Version History
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-primary
                  "
                >
                  Complete
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}