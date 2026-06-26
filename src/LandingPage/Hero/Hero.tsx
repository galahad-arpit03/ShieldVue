"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/Common/UI/Button/Button";
import { m, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yMockup = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "-60px"]);

  // Staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
  };

  return (
    <section ref={containerRef} className="relative bg-white pt-32 pb-12 md:pb-24 md:pb-48 lg:pt-48 lg:pb-64 min-h-[100vh] flex flex-col justify-center">
      {/* Light Enterprise Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <m.div
          className="absolute inset-0 z-0 opacity-100 origin-top"
          style={{ y: yBg, scale: 1.1 }}
        >
          <Image
            src="/landing/hero_bg.png"
            alt="Abstract Software Supply Chain Visualization"
            fill
            sizes="100vw"
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
            {/* Eyebrow */}

            <m.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.02em] text-slate-900 font-['Clash_Grotesk']">
              <span className="md:whitespace-nowrap">Know Your Software</span> <br />
              <span className="text-primary font-medium md:whitespace-nowrap">Supply Chain.</span>
            </m.h1>

            <m.p variants={itemVariants} className="mt-6 text-lg sm:text-lg leading-8 text-slate-600">
              Gain complete visibility into software components, vulnerabilities, cryptographic assets, and compliance risks through a unified Software Bill of Materials (SBOM) and Cybersecurity Governance Platform.
            </m.p>

            <m.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-11 px-6 rounded-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border-0"
              >
                <Link href="/contact-us">
                  Book Demo
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-11 px-6 rounded-md text-sm font-medium border border-slate-200 text-slate-800 bg-white/50 backdrop-blur-md hover:bg-white/80 shadow-sm">
                 <Link href="/platform/overview" className="flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto">
                  Explore Platform
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                 </Link>
              </Button>
            </m.div>
          </m.div>

          {/* Right Product Preview with Parallax */}
          <m.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            style={{ y: yMockup }}
          >
          </m.div>
        </div>
      </div>

      {/* 3 Overlapping Glassmorphic Cards with Parallax */}
      <m.div
        className="relative mt-8 md:mt-16 md:absolute md:left-0 md:right-0 md:-bottom-24 lg:-bottom-36 z-20 mx-auto w-full px-4 sm:px-6 lg:px-8 shield-container"
        style={{ y: yCards }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-8 md:pb-0">
          {/* Card 1: Primary Color */}
          <div className="flex flex-col justify-between items-start bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-3xl border border-white/20 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-white transform transition-all duration-300 md:hover:-translate-y-2">
            <div>
              <h3 className="text-xl font-medium mb-2">Automated SBOM Generation</h3>
              <p className="text-sm leading-relaxed text-white/90">Automatically generate standardized SBOMs directly from source code and CI/CD pipelines.</p>
            </div>
            <a href="#" className="text-sm font-medium mt-4 hover:underline flex items-center gap-1">Learn More <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
          </div>
          {/* Card 2: White Color */}
          <div className="flex flex-col justify-between items-start bg-white/50 backdrop-blur-2xl border border-white/60 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-slate-800 transform transition-all duration-300 md:hover:-translate-y-2 hover:bg-white/60">
            <div>
              <h3 className="text-xl font-medium mb-2">Continuous Vulnerability Mapping</h3>
              <p className="text-sm leading-relaxed text-slate-700">Correlate components against global vulnerability databases to highlight active risks in real-time.</p>
            </div>
            <a href="#" className="text-sm font-medium mt-4 text-primary hover:underline flex items-center gap-1">View Features <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
          </div>
          {/* Card 3: White Color */}
          <div className="flex flex-col justify-between items-start bg-white/50 backdrop-blur-2xl border border-white/60 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-slate-800 transform transition-all duration-300 md:hover:-translate-y-2 hover:bg-white/60">
            <div>
              <h3 className="text-xl font-medium mb-2">Compliance Ready</h3>
              <p className="text-sm leading-relaxed text-slate-700">Meet regulatory requirements instantly with audit-ready reporting and strict governance.</p>
            </div>
            <a href="#" className="text-sm font-semibold mt-4 text-primary hover:underline flex items-center gap-1">Discover Options <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
          </div>
        </div>
      </m.div>
    </section>
  );
}
