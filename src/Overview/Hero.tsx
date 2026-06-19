"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCode2,
  Radar,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const capabilities = [
    {
      icon: FileCode2,
      label: "SBOM Generation",
    },
    {
      icon: Radar,
      label: "CVE Intelligence",
    },
    {
      icon: Database,
      label: "Asset Inventory",
    },
    {
      icon: ShieldCheck,
      label: "Policy Governance",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-28">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      <div
        className="
          absolute
          right-0
          top-0

          h-[700px]
          w-[700px]

          rounded-full
          bg-primary/10

          blur-[180px]
        "
      />

      <div className="shield-container relative z-10">
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-[1fr_1.2fr]
          "
        >
          {/* LEFT CONTENT */}
          <div>
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-primary/15

                bg-primary/5

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              Platform Overview
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-8

                text-5xl
                md:text-6xl
                lg:text-7xl

                font-medium

                leading-[1.02]
                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Software Supply
              <br />
              Chain Security
              <br />
              <span className="text-primary">
                In One Platform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-8

                max-w-xl

                text-lg
                leading-8

                text-slate-600
              "
            >
              An integrated platform for software composition
              analysis, vulnerability intelligence, compliance
              governance, SBOM management, and cryptographic
              asset visibility.
            </motion.p>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-10

                flex
                flex-wrap
                gap-8
              "
            >
              <div>
                <div className="text-3xl font-bold text-primary">
                  1905+
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Components Tracked
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary">
                  294
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Vulnerabilities Mapped
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary">
                  100%
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Asset Visibility
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0

                rounded-[32px]

                bg-primary/10

                blur-3xl
              "
            />

            <div
              className="
                relative

                overflow-hidden

                rounded-[28px]

                border
                border-slate-200

                bg-white

                shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              "
            >
              {/* Browser Header */}
              <div
                className="
                  flex
                  items-center

                  gap-2

                  border-b
                  border-slate-200

                  bg-slate-50

                  px-5
                  py-4
                "
              >
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span
                  className="
                    ml-3

                    text-sm
                    font-medium

                    text-slate-500
                  "
                >
                  ShieldVUE Dashboard
                </span>
              </div>

              {/* VIDEO */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full
                  h-full
                  object-cover
                "
              >
                <source
                  src="/videos/shieldvue-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Floating Card 1 */}
            <div
              className="
                absolute

                -left-8
                top-10

                hidden
                lg:block

                rounded-xl

                border
                border-slate-200

                bg-white

                p-4

                shadow-lg
              "
            >
              <div className="text-xs text-slate-500">
                SBOM Coverage
              </div>

              <div className="mt-1 text-xl font-bold text-primary">
                100%
              </div>
            </div>

            {/* Floating Card 2 */}
            <div
              className="
                absolute

                -right-8
                bottom-12

                hidden
                lg:block

                rounded-xl

                border
                border-slate-200

                bg-white

                p-4

                shadow-lg
              "
            >
              <div className="text-xs text-slate-500">
                Active CVEs
              </div>

              <div className="mt-1 text-xl font-bold text-primary">
                294
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities Strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-24

            grid
            gap-4

            md:grid-cols-4
          "
        >
          {capabilities.map((item) => (
            <div
              key={item.label}
              className="
                flex
                items-center
                gap-4

                rounded-xl

                border
                border-slate-200

                bg-white

                p-5

                transition-all
                duration-300

                hover:border-primary/20
                hover:shadow-md
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-lg

                  bg-primary/5

                  text-primary
                "
              >
                <item.icon className="h-5 w-5" />
              </div>

              <span
                className="
                  text-sm
                  font-semibold

                  text-slate-900
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}