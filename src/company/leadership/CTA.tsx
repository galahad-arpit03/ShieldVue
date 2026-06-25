"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28">
      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-primary/20

          blur-[180px]
        "
      />

      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.05]

          bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      <div className="shield-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl

              font-medium

              leading-[1.05]

              tracking-[-0.03em]

              text-white

              font-['Clash_Grotesk']
            "
          >
            Let's Build A More
            <br />
            Secure Software Future
            <span className="text-primary">
              {" "}Together
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8

              max-w-2xl

              text-lg
              leading-8

              text-slate-300
            "
          >
            Connect with the ShieldVUE team to discover how our
            leadership, expertise, and platform can help strengthen
            your software supply chain security strategy.
          </p>

          <div
            className="
              mt-12

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

                rounded-md

                bg-primary

                px-7

                text-sm
                font-semibold

                text-white

                shadow-lg
                shadow-primary/30

                hover:bg-primary/90
              "
            >
              <Link href="/book-demo">
                Book A Demo
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                h-12

                rounded-md

                border
                border-white/20

                bg-white/5

                px-7

                text-sm
                font-medium

                text-white

                backdrop-blur-md

                hover:bg-white/10
              "
            >
              <Link
                href="/company/about"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}