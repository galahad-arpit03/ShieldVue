"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="shield-container">
        <div
          className="
            relative

            overflow-hidden

            rounded-md

            border
            border-slate-200

            bg-slate-50

            px-8
            py-20

            md:px-16

            shadow-sm
          "
        >
          {/* Background Pattern */}
          <div
            className="
              absolute
              inset-0

              opacity-[0.04]

              bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
              bg-[length:36px_36px]
            "
          />

          {/* Purple Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[500px]
              w-[500px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-primary/10

              blur-[120px]
            "
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2
              className="
                text-4xl
                md:text-5xl

                font-medium

                leading-[1.1]
                tracking-[-0.02em]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              Ready To Secure Your
              <br />
              Software Supply Chain?
            </h2>

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
              Discover how ShieldVUE helps organizations gain complete
              visibility into software components, vulnerabilities,
              cryptographic assets, and compliance risks through a
              single integrated platform.
            </p>

            {/* Stats */}
            <div
              className="
                mt-12

                grid

                gap-8

                sm:grid-cols-3
              "
            >
              <div>
                <div className="text-4xl font-bold text-primary">
                  100%
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Component Visibility
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary">
                  Real-Time
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Threat Intelligence
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary">
                  Audit
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Ready Reporting
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="
                mt-14

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
                  px-8

                  rounded-md

                  bg-primary

                  text-white

                  shadow-lg
                  shadow-primary/20

                  hover:bg-primary/90
                "
              >
                <Link href="/book-demo">
                  Book A Demo
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  h-12
                  px-8

                  rounded-md

                  border-slate-300

                  bg-white

                  text-slate-800

                  hover:bg-white
                "
              >
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}