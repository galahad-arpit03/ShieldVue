"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(104,67,183,0.08),transparent_70%)]
        "
      />

      <div className="shield-container relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative

            overflow-hidden

            rounded-[36px]

            border
            border-slate-200

            bg-gradient-to-br
            from-primary/[0.03]
            via-white
            to-primary/[0.06]

            px-8
            py-16

            md:px-16
            md:py-20

            text-center

            shadow-[0_25px_80px_rgba(15,23,42,0.06)]
          "
        >

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-8

              max-w-4xl

              text-4xl
              md:text-5xl

              font-medium

              leading-[1.05]

              tracking-[-0.03em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Gain Complete Visibility Into
            <span className="text-primary">
              {" "}Every Software Component
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6

              max-w-3xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            Automatically generate SBOMs, discover dependencies,
            track software changes, and maintain centralized
            governance across your software supply chain with
            ShieldVUE.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-10

              flex
              flex-wrap
              justify-center

              gap-4
            "
          >
            <Button
              asChild
              size="lg"
              className="
                h-12
                px-7
              "
            >
              <Link href="/book-demo">
                Schedule A Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="
                h-12
                px-7
              "
            >
              <Link href="/overview">
                Explore Platform
              </Link>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}