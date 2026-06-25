"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/Common/UI/Button/Button";
import { m, useScroll, useTransform } from "framer-motion";

export default function SupplyChainHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <section ref={containerRef} className="relative bg-white pt-32 pb-12 md:pb-24 md:pb-48 lg:pt-48 lg:pb-48 min-h-[100vh] flex flex-col justify-center border-b border-slate-100">
      {/* Light Enterprise Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <m.div
          className="absolute inset-0 z-0 opacity-100 origin-top"
          style={{ y: yBg, scale: 1.1 }}
        >
          <Image
            src="/solutions/supply-chain.png"
            alt="Software Supply Chain Visualization"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-[130%]" />
        </m.div>
      </div>

      <div className="shield-container relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Content */}
          <m.div
            className="max-w-2xl lg:max-w-none lg:col-span-7 xl:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <m.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.02em] text-slate-900 font-['Clash_Grotesk']">
              Secure Your <br />
              <span className="text-primary font-medium">Supply Chain.</span>
            </m.h1>

            <m.p variants={itemVariants} className="mt-6 text-lg sm:text-xl leading-8 text-slate-600 max-w-xl">
              Secure every link in your software supply chain with comprehensive SBOM management, zero-trust architecture, and continuous artifact verification.
            </m.p>

            <m.div variants={itemVariants} className="mt-10 flex flex-row gap-3">
              <Button asChild size="lg" className="h-11 flex-1 sm:flex-none px-3 sm:px-6 rounded-md text-xs sm:text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border-0">
                <Link href="/contact-us">Book Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 flex-1 sm:flex-none px-3 sm:px-6 rounded-md text-xs sm:text-sm font-medium border border-slate-200 text-slate-800 bg-white/50 backdrop-blur-md hover:bg-white/80 flex items-center justify-center gap-1 sm:gap-2 shadow-sm">
                <Link href="#features">
                  Explore Features <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
