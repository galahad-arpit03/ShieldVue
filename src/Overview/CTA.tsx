"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
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
            py-12
            md:px-12
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
              h-[400px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary/10
              blur-[100px]
            "
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
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
                mt-4
                max-w-3xl
                text-base
                leading-relaxed
                text-slate-600
              "
            >
              Discover how ShieldVUE helps organizations gain complete
              visibility into software components, vulnerabilities,
              cryptographic assets, and compliance risks through a
              single integrated platform.
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
                  h-11
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
                  h-11
                  px-8
                  rounded-md
                  border-slate-300
                  bg-white
                  text-slate-800
                  hover:bg-slate-50
                "
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Sales <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}