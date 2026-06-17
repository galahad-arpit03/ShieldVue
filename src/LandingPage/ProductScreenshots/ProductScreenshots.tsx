"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/Common/UI/Button/Button";

export default function ProductScreenshots() {
  const tabs = [
    "Dashboard",
    "Repository",
    "Vulnerability Mapping",
    "Version Comparison",
    "Reports",
    "CBOM"
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100 overflow-hidden">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Total Visibility at Your Fingertips
          </h2>
          <p className="text-lg text-slate-600">
            A meticulously designed enterprise interface that transforms complex software data into actionable intelligence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300",
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Screenshot Container */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-[2.5rem] blur-lg" />
          
          <div className="relative bg-white border border-slate-200 rounded-3xl p-2 shadow-2xl">
            <div className="bg-slate-50 rounded-md overflow-hidden border border-slate-100">
              {/* Window Controls Mock */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-white">
                <div className="w-3 h-3 rounded-md bg-red-400" />
                <div className="w-3 h-3 rounded-md bg-amber-400" />
                <div className="w-3 h-3 rounded-md bg-green-400" />
                <div className="ml-4 text-xs font-medium text-slate-400">ShieldVUE Enterprise • {activeTab}</div>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/hero_dashboard_mockup.png"
                  alt={`ShieldVUE ${activeTab} Interface`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
