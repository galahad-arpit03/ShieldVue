"use client";

import { m } from "framer-motion";
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="text-left">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
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
            </m.h2>
          </div>

          <div className="text-left">
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
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
            </m.p>
          </div>
        </div>

        {/* Values */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                  gap-4
                  rounded-xl
                  border
                  border-slate-200/60
                  bg-white/50
                  backdrop-blur-sm
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                  hover:shadow-primary/5
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary/10
                    to-primary/5
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-primary
                    group-hover:text-white
                    shadow-inner
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                <span
                  className="
                    text-base
                    font-bold
                    tracking-tight
                    text-slate-800
                  "
                >
                  {item.title}
                </span>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}