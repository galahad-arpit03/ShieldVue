"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <section ref={containerRef} className="relative bg-white pt-32 pb-24 md:pb-48 lg:pt-48 lg:pb-64 min-h-[100vh] flex flex-col justify-center">
      {/* Light Enterprise Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-100 origin-top"
          style={{ y: yBg, scale: 1.1 }}
        >
          <Image
            src="/landing/hero2.png"
            alt="Abstract Software Supply Chain Visualization"
            fill
            className="object-cover object-right"
            priority
            unoptimized
          />
          {/* Gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-[130%]" />
        </motion.div>
      </div>

      <div className="shield-container relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
               
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.02em] text-slate-900 font-['Clash_Grotesk']">
              Know Your Software <br className="hidden sm:block" />
              <span className="text-primary font-medium">Supply Chain.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl leading-8 text-slate-600">
              Gain complete visibility into software components, vulnerabilities,
              cryptographic assets, and compliance risks before they become business problems.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-11 px-6 rounded-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border-0">
                Book Demo
              </Button>

              <Button size="lg" variant="outline" className="h-11 px-6 rounded-md text-sm font-medium border border-slate-200 text-slate-800 bg-white/50 backdrop-blur-md hover:bg-white/80 flex items-center gap-2 shadow-sm">
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Product Preview with Parallax */}
          <motion.div 
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            style={{ y: yMockup }}
          >
          </motion.div>
        </div>
      </div>

      {/* 3 Overlapping Glassmorphic Cards with Parallax */}
      <motion.div 
        className="relative mt-16 md:absolute md:left-0 md:right-0 md:-bottom-36 z-20 mx-auto w-full px-4 sm:px-6 lg:px-8 shield-container"
        style={{ y: yCards }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-8 md:pb-0">
          {/* Card 1: Primary Color */}
          <div className="flex flex-col justify-between items-start bg-primary/70 backdrop-blur-2xl border border-white/20 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-white transform transition-all duration-300 md:hover:-translate-y-2 hover:bg-primary/80">
            <div>
              <h3 className="text-xl font-medium mb-2">Comprehensive Visibility</h3>
              <p className="text-sm leading-relaxed text-white/90">Monitor your entire software supply chain in real-time.</p>
            </div>
            <a href="#" className="text-sm font-medium mt-4 hover:underline flex items-center gap-1">Learn More <ArrowRight className="h-4 w-4" /></a>
          </div>
          {/* Card 2: White Color */}
          <div className="flex flex-col justify-between items-start bg-white/50 backdrop-blur-2xl border border-white/60 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-slate-800 transform transition-all duration-300 md:hover:-translate-y-2 hover:bg-white/60">
            <div>
              <h3 className="text-xl font-medium mb-2">Vulnerability Management</h3>
              <p className="text-sm leading-relaxed text-slate-700">Identify and remediate risks before they impact operations.</p>
            </div>
            <a href="#" className="text-sm font-medium mt-4 text-primary hover:underline flex items-center gap-1">View Services <ArrowRight className="h-4 w-4" /></a>
          </div>
          {/* Card 3: White Color */}
          <div className="flex flex-col justify-between items-start bg-white/50 backdrop-blur-2xl border border-white/60 rounded-lg p-8 min-h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-slate-800 transform transition-all duration-300 md:hover:-translate-y-2 hover:bg-white/60">
            <div>
              <h3 className="text-xl font-medium mb-2">Automated Compliance</h3>
              <p className="text-sm leading-relaxed text-slate-700">Ensure adherence to industry standards effortlessly.</p>
            </div>
            <a href="#" className="text-sm font-semibold mt-4 text-primary hover:underline flex items-center gap-1">Discover Options <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
