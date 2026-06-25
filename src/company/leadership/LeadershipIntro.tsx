"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
  },
  {
    icon: Users,
    title: "Customer Focused",
  },
  {
    icon: Target,
    title: "Long-Term Vision",
  },
];

export default function LeadershipIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[650px]
          w-[650px]

          rounded-full

          bg-primary/5

          blur-[170px]
        "
      />

      <div className="shield-container relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              Leadership Philosophy
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
              Building The Future Of
              <span className="text-primary">
                {" "}Software Supply Chain Security
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
              At ShieldVUE, our leadership team is driven by a shared
              vision to help organizations build secure, transparent,
              and resilient software ecosystems. We combine deep
              security expertise with a commitment to innovation,
              enabling enterprises to confidently manage software
              supply chain risks while meeting evolving compliance
              requirements.
            </p>

            {/* Values */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
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
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="
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
                src="/images/leadership-intro.png"
                alt="ShieldVUE Leadership"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}