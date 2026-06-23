"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  KeyRound,
  ShieldCheck,
  Search,
} from "lucide-react";

const inventoryFeatures = [
  {
    icon: Database,
    title: "Centralized Crypto Inventory",
    description:
      "Maintain a complete inventory of cryptographic assets across applications, environments, and infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Key & Certificate Tracking",
    description:
      "Track cryptographic keys, certificates, ownership, expiration dates, and usage history.",
  },
  {
    icon: Search,
    title: "Search & Discovery",
    description:
      "Quickly locate cryptographic algorithms, assets, certificates, and dependencies across environments.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    description:
      "Support audit requirements, cryptographic governance initiatives, and policy enforcement programs.",
  },
];

export default function CryptoInventory() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-0
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
          {/* Left Visual */}
          <motion.div
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
                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              "
            >
              <Image
                src="/images/cbom-dashboard.png"
                alt="ShieldVUE Cryptographic Asset Inventory"
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
                -right-8
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
                  Crypto Assets
                </div>

                <div
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-primary
                  "
                >
                  5,200+
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
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
              duration: 0.6,
            }}
          >
            <h2
              className="
                text-4xl
                md:text-5xl

                font-medium

                leading-[1.05]

                tracking-[-0.03em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Centralized
              <span className="text-primary">
                {" "}Cryptographic Inventory
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
              Gain complete visibility into cryptographic assets,
              algorithms, certificates, and keys through a unified
              inventory and governance platform.
            </p>

            <div className="mt-12 space-y-8">
              {inventoryFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    flex
                    gap-5
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}