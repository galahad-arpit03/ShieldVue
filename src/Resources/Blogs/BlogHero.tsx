"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BlogHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

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
    <section ref={containerRef} className="relative bg-white pt-32 pb-12 md:pb-24 md:pb-48 lg:pt-48 lg:pb-64 min-h-[100vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 origin-top w-full h-full"
          style={{ y: yBg, scale: 1.05 }}
        >
          <Image
            src="/blog/blog-hero.png"
            alt="ShieldVUE Blog Abstract visualization"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Enhanced gradient overlay to ensure the text remains fully readable on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-[140%]" />
        </motion.div>
      </div>

      <div className="shield-container relative z-10 w-full text-center md:text-left">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.02em] text-slate-900 font-['Clash_Grotesk']">
            Insights on <br />
            <span className="text-primary font-medium">Software Quality.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl leading-8 text-slate-600">
            Expert analysis, deep dives, and best practices for building secure, scalable, and high-performance applications in the enterprise.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="h-11 flex-1 sm:flex-none px-3 sm:px-6 rounded-md text-xs sm:text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border-0"
            >
              <Link href="/contact-us">
                Book Demo
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="whitespace-nowrap flex justify-center items-center gap-2 h-11 flex-1 sm:flex-none px-3 sm:px-6 rounded-md text-xs sm:text-sm font-medium border border-slate-200 text-slate-800 bg-white/80 backdrop-blur-md hover:bg-slate-50 flex items-center gap-2 shadow-sm">
               <Link href="/overview"  className="flex items-center justify-center gap-2 whitespace-nowrap w-full">
                 Explore Platform
                 <ArrowRight className="h-4 w-4 text-slate-600" />
               </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
