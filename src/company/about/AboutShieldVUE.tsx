"use client";

import { m } from "framer-motion";
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

          rounded-md

          bg-primary/5

          blur-[150px]
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
              Built For Modern
              <span className="text-primary"> Software Security</span>
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
              ShieldVUE is an enterprise software supply chain security
              platform that helps organizations discover, analyze, and
              govern software components across the entire development
              lifecycle. By combining SBOM management, CBOM visibility,
              vulnerability intelligence, and compliance automation,
              ShieldVUE enables teams to strengthen security, reduce
              operational risk, and accelerate audit readiness from a
              single integrated platform.
            </m.p>
          </div>
        </div>

        {/* Highlights */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item, index) => {
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
                  rounded-md
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
                    rounded-md
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