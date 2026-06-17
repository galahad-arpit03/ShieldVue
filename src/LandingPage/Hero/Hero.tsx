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
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900 pt-32 pb-32 lg:pt-48 lg:pb-48 min-h-[85vh] flex items-center">
      {/* Dark Enterprise Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-80 origin-top"
        style={{ y: yBg, scale: 1.1 }}
      >
        <Image
          src="/images/hero_bg_dark_enterprise.png"
          alt="Abstract Software Supply Chain Visualization"
          fill
          className="object-cover object-right"
          priority
          unoptimized
        />
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </motion.div>

      <div className="shield-container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
               
            <motion.h1 variants={itemVariants} className="text-6xl font-extrabold leading-[72px] tracking-[-0.03em] text-white">
              Know Your Software <br />
              <span className="text-primary-foreground">Supply Chain.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-xl leading-8 text-slate-400">
              Gain complete visibility into software components, vulnerabilities,
              cryptographic assets, and compliance risks before they become business problems.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-11 px-6 rounded-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border-0">
                Book Demo
              </Button>

              <Button size="lg" variant="outline" className="h-11 px-6 rounded-md text-sm font-medium border border-white/20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white flex items-center gap-2 shadow-lg">
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
            {/* <div className="relative rounded-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden aspect-[1.3] bg-transparent">
              <Image
                src="/images/hero_dashboard_dark.png"
                alt="ShieldVUE Dashboard showcasing SBOM Graph, Dependency Tree, and KPIs"
                fill
                className="object-cover scale-[1.18] object-center"
                priority
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
