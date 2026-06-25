"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  FileCheck,
  ClipboardCheck,
  ShieldCheck,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Audit Ready Evidence",
    description:
      "Maintain complete audit trails and evidence required for internal and external compliance reviews.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Monitoring",
    description:
      "Continuously evaluate software assets and governance controls against compliance requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Governance Visibility",
    description:
      "Track compliance posture, policy adherence, and governance effectiveness from a single dashboard.",
  },
  {
    icon: FileText,
    title: "Executive Reporting",
    description:
      "Generate audit-ready reports and governance summaries for leadership, auditors, and stakeholders.",
  },
];

export default function AuditReporting() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-16 md:py-32">
      {/* Glow */}
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
                text-2xl md:text-4xl
                md:text-5xl

                font-medium

                leading-[1.05]
                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Audit Ready Reporting
              <span className="text-primary">
                {" "}And Governance Visibility
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
              Centralize governance evidence, monitor compliance
              posture, and generate audit-ready reports that
              simplify regulatory reviews and strengthen
              organizational accountability.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((feature) => (
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

          {/* Dashboard Image */}
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
                src="/images/ui_illustration_2.png"
                alt="ShieldVUE Compliance Dashboard"
                width={1400}
                height={900}
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />
            </div>

            {/* Floating Badge */}
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
                  Compliance Status
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-primary
                  "
                >
                  Audit Ready
                </div>
              </div>
            </div>

            {/* Floating Badge */}
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
                  Governance Coverage
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-slate-900
                  "
                >
                  Centralized
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}