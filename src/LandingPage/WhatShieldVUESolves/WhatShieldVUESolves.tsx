"use client";

import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function WhatShieldVUESolves() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(
    () => [
      {
        id: 0,
        name: "AI Scanning",
        content: {
          title: "SECURITY SCANNING",
          description:
            "Securing your source code and dependencies from the latest threats. Built for Zero Trust and powered by advanced AI, the ShieldVUE platform proactively monitors, analyzes, and prevents sophisticated vulnerabilities in real time, enabling secure growth for your engineering teams.",
          metric1: "95%",
          metric1Label: "FASTER REMEDIATION",
          metric2: "Zero",
          metric2Label: "FALSE POSITIVES",
          cta: "Explore Scanning Security",
          cards: [
            {
              title: "Gartner.",
              description:
                "2025 Gartner® Magic Quadrant™ for Application Security Testing",
            },
            {
              title: "Forrester",
              description:
                "The Forrester Wave™: Software Composition Analysis Solutions",
            },
            {
              title: "Gartner.",
              description:
                "Gartner® Peer Insights™ Customers' Choice",
            },
            {
              title: "IDC",
              description:
                "IDC MarketScape: Worldwide DevSecOps Leader",
            },
          ],
        },
      },
      {
        id: 1,
        name: "SBOM & CBOM",
        content: {
          title: "SBOM MANAGEMENT",
          description:
            "Gain complete transparency into your software supply chain. Automatically generate, manage, and distribute standard-compliant SBOMs and CBOMs at machine speed without slowing down your release cycles.",
          metric1: "100%",
          metric1Label: "SUPPLY CHAIN VISIBILITY",
          metric2: "10x",
          metric2Label: "FASTER AUDITS",
          cta: "Explore SBOM Platform",
          cards: [
            {
              title: "SPDX Certified",
              description:
                "Fully compliant with the latest SPDX standard formats",
            },
            {
              title: "CycloneDX",
              description:
                "Native support for advanced CycloneDX component graphs",
            },
            {
              title: "Gartner.",
              description:
                "Recognized in Hype Cycle for Supply Chain Security",
            },
            {
              title: "CISA",
              description:
                "Aligned with CISA standard requirements for SBOMs",
            },
          ],
        },
      },
      {
        id: 2,
        name: "Risk Mapping",
        content: {
          title: "REAL-TIME VULNERABILITY MAPPING",
          description:
            "Correlate discovered open-source components against global vulnerability databases (NVD) in real-time. Instantly pinpoint active risks and affected applications when a new zero-day emerges.",
          metric1: "< 1h",
          metric1Label: "ZERO-DAY ASSESSMENT",
          metric2: "24/7",
          metric2Label: "THREAT MONITORING",
          cta: "Explore Vulnerability Mapping",
          cards: [
            {
              title: "Gartner.",
              description:
                "2025 Gartner® Magic Quadrant™ for Risk Management",
            },
            {
              title: "Forrester",
              description:
                "The Forrester Wave™: Vulnerability Risk Management",
            },
            {
              title: "Gartner.",
              description:
                "Cool Vendor in Supply Chain Security",
            },
            {
              title: "Frost & Sullivan",
              description:
                "Technology Innovation Leadership Award",
            },
          ],
        },
      },
      {
        id: 3,
        name: "CI/CD Governance",
        content: {
          title: "ZERO-TRUST CI/CD GOVERNANCE",
          description:
            "Enforce strict policy controls directly inside your build pipelines. Block non-compliant, outdated, or explicitly risky packages from ever entering your secure development lifecycle.",
          metric1: "100%",
          metric1Label: "PIPELINE COVERAGE",
          metric2: "Zero",
          metric2Label: "UNAUTHORIZED DEPLOYS",
          cta: "Explore CI/CD Governance",
          cards: [
            {
              title: "Gartner.",
              description:
                "2025 Gartner® Magic Quadrant™ for CI/CD Security",
            },
            {
              title: "Forrester",
              description:
                "The Forrester Wave™: Continuous Delivery and Release Automation",
            },
            {
              title: "Gartner.",
              description:
                "Gartner® Magic Quadrant™ for DevOps Platforms",
            },
            {
              title: "IDC",
              description:
                "IDC MarketScape: DevSecOps Portfolio",
            },
          ],
        },
      },
      {
        id: 4,
        name: "Compliance",
        content: {
          title: "ENTERPRISE COMPLIANCE AUTOMATION",
          description:
            "Deliver secure-by-design software that inherently meets stringent regulatory frameworks. Automate evidence gathering and ensure you remain compliant with SSDF, SOC2, and ISO standards by default.",
          metric1: "SSDF",
          metric1Label: "COMPLIANT BY DEFAULT",
          metric2: "ISO",
          metric2Label: "27001 READY",
          cta: "Explore Compliance",
          cards: [
            {
              title: "Gartner.",
              description:
                "2025 Gartner® Magic Quadrant™ for IT Vendor Risk Management",
            },
            {
              title: "Forrester",
              description:
                "The Forrester Wave™: Governance, Risk, And Compliance",
            },
            {
              title: "Gartner.",
              description:
                "Gartner® Magic Quadrant™ for IT Risk Management",
            },
            {
              title: "KuppingerCole",
              description:
                "Leadership Compass for Policy Based Access Control",
            },
          ],
        },
      },
    ],
    []
  );

  const activeContent = tabs[activeTab].content;

return (
  <section className="bg-slate-50 py-24 relative overflow-hidden">
    <div className="shield-container relative z-10">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk'] text-slate-900 mb-4">
          What ShieldVUE Solves
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed font-['Inter']">
          Transform decentralized, risky software pipelines into a highly visible,
          governed and automated security ecosystem.
        </p>
      </div>

      {/* Navigation */}
      <div className="sticky top-20 z-30 bg-slate-50/90 backdrop-blur-md border-b border-slate-200 mb-16">
        <div className="flex flex-wrap justify-between">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-5 transition-all duration-300 font-medium font-['Inter'] ${
                activeTab === idx
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
        >
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk'] text-primary mb-8">
                {activeContent.title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-12 font-['Inter']">
                {activeContent.description}
              </p>

              <div className="flex gap-16 mb-12">
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2 font-['Inter']">
                    {activeContent.metric1}
                  </div>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] font-['Inter']">
                    {activeContent.metric1Label}
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2 font-['Inter']">
                    {activeContent.metric2}
                  </div>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] font-['Inter']">
                    {activeContent.metric2Label}
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-md flex items-center gap-3 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 font-medium font-['Inter']">
                {activeContent.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative">
              {activeContent.cards.map((card, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-md border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold font-['Manrope'] text-slate-900 mb-2">
                      {card.title}
                    </h4>

                    <p className="text-base text-slate-600 leading-relaxed font-['Inter']">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);
}