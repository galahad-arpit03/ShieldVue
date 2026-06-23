"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Code to Cloud Pipeline",
    image: "/solutions/slide-c2c-light.png",
    status: "Pipeline Secured & Verified"
  },
  {
    title: "Cryptographic artifact signing & verification",
    image: "/solutions/slide-crypto-light.png",
    status: "Artifacts Cryptographically Signed"
  },
  {
    title: "Automated tampering detection",
    image: "/solutions/slide-tamp-light.png",
    status: "Anomalies Isolated Automatically"
  },
  {
    title: "Deep dependency tree analysis",
    image: "/solutions/slide-dep-light.png",
    status: "Dependencies Mapped & Validated"
  }
];

export default function SupplyChainOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6 leading-[1.1]">
              Complete Visibility from Code to Cloud
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Modern software relies heavily on third-party components and complex deployment pipelines. ShieldVUE automatically maps your entire software supply chain, giving you unparalleled, real-time visibility into every dependency, library, and artifact that enters your production environment.
            </p>
            <ul className="space-y-4">
              {[
                "Cryptographic artifact signing & verification",
                "Automated tampering detection",
                "Deep dependency tree analysis",
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 font-medium transition-colors duration-300 ${
                    currentSlide === index + 1 ? "text-primary" : "text-slate-700"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    currentSlide === index + 1 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-primary/10 text-primary"
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Diagram / Graphic Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-md overflow-hidden  flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                 <Image 
                   src={slides[currentSlide].image} 
                   alt={slides[currentSlide].title}
                   fill 
                   className="object-cover"
                   priority
                 />
              </motion.div>
            </AnimatePresence>

             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             {/* Navigation Arrows */}
             <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 z-20"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             
             <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 z-20"
             >
                <ChevronRight className="w-6 h-6" />
             </button>

             {/* Slide Indicators */}
             <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
               {slides.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentSlide(idx)}
                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
                     currentSlide === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                   }`}
                 />
               ))}
             </div>

             {/* Decorative floating glass card */}
             {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)] shrink-0" />
                  <span className="font-semibold text-sm tracking-wide text-white drop-shadow-md">
                    {slides[currentSlide].status}
                  </span>
                </div>
             </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
