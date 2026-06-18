"use client";

import { useState, useEffect, useMemo } from "react";
import { Shield, Zap, Cloud, Lock, FileCheck, ArrowRight } from "lucide-react";

export default function WhatShieldVUESolves() {
  const [activeTab, setActiveTab] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = useMemo(() => [
    {
      id: 0,
      name: "AI Scanning",
      content: {
        title: "SECURITY SCANNING",
        description: "Securing your source code and dependencies from the latest threats. Built for Zero Trust and powered by advanced AI, the ShieldVUE platform proactively monitors, analyzes, and prevents sophisticated vulnerabilities in real time, enabling secure growth for your engineering teams.",
        metric1: "95%",
        metric1Label: "FASTER REMEDIATION",
        metric2: "Zero",
        metric2Label: "FALSE POSITIVES",
        cta: "Explore Scanning Security",
        cards: [
          {
            title: "Gartner.",
            description: "2025 Gartner® Magic Quadrant™ for Application Security Testing"
          },
          {
            title: "Forrester",
            description: "The Forrester Wave™: Software Composition Analysis Solutions"
          },
          {
            title: "Gartner.",
            description: "Gartner® Peer Insights™ Customers' Choice"
          },
          {
            title: "IDC",
            description: "IDC MarketScape: Worldwide DevSecOps Leader"
          }
        ]
      }
    },
    {
      id: 1,
      name: "SBOM & CBOM",
      content: {
        title: "SBOM MANAGEMENT",
        description: "Gain complete transparency into your software supply chain. Automatically generate, manage, and distribute standard-compliant SBOMs and CBOMs at machine speed without slowing down your release cycles.",
        metric1: "100%",
        metric1Label: "SUPPLY CHAIN VISIBILITY",
        metric2: "10x",
        metric2Label: "FASTER AUDITS",
        cta: "Explore SBOM Platform",
        cards: [
          {
            title: "SPDX Certified",
            description: "Fully compliant with the latest SPDX standard formats"
          },
          {
            title: "CycloneDX",
            description: "Native support for advanced CycloneDX component graphs"
          },
          {
            title: "Gartner.",
            description: "Recognized in Hype Cycle for Supply Chain Security"
          },
          {
            title: "CISA",
            description: "Aligned with CISA standard requirements for SBOMs"
          }
        ]
      }
    },
    {
      id: 2,
      name: "Risk Mapping",
      content: {
        title: "REAL-TIME VULNERABILITY MAPPING",
        description: "Correlate discovered open-source components against global vulnerability databases (NVD) in real-time. Instantly pinpoint active risks and affected applications when a new zero-day emerges.",
        metric1: "< 1h",
        metric1Label: "ZERO-DAY ASSESSMENT",
        metric2: "24/7",
        metric2Label: "THREAT MONITORING",
        cta: "Explore Vulnerability Mapping",
        cards: [
          {
            title: "Gartner.",
            description: "2025 Gartner® Magic Quadrant™ for Risk Management"
          },
          {
            title: "Forrester",
            description: "The Forrester Wave™: Vulnerability Risk Management"
          },
          {
            title: "Gartner.",
            description: "Cool Vendor in Supply Chain Security"
          },
          {
            title: "Frost & Sullivan",
            description: "Technology Innovation Leadership Award"
          }
        ]
      }
    },
    {
      id: 3,
      name: "CI/CD Governance",
      content: {
        title: "ZERO-TRUST CI/CD GOVERNANCE",
        description: "Enforce strict policy controls directly inside your build pipelines. Block non-compliant, outdated, or explicitly risky packages from ever entering your secure development lifecycle.",
        metric1: "100%",
        metric1Label: "PIPELINE COVERAGE",
        metric2: "Zero",
        metric2Label: "UNAUTHORIZED DEPLOYS",
        cta: "Explore CI/CD Governance",
        cards: [
          {
            title: "Gartner.",
            description: "2025 Gartner® Magic Quadrant™ for CI/CD Security"
          },
          {
            title: "Forrester",
            description: "The Forrester Wave™: Continuous Delivery and Release Automation"
          },
          {
            title: "Gartner.",
            description: "Gartner® Magic Quadrant™ for DevOps Platforms"
          },
          {
            title: "IDC",
            description: "IDC MarketScape: DevSecOps Portfolio"
          }
        ]
      }
    },
    {
      id: 4,
      name: "Compliance",
      content: {
        title: "ENTERPRISE COMPLIANCE AUTOMATION",
        description: "Deliver secure-by-design software that inherently meets stringent regulatory frameworks. Automate evidence gathering and ensure you remain compliant with SSDF, SOC2, and ISO standards by default.",
        metric1: "SSDF",
        metric1Label: "COMPLIANT BY DEFAULT",
        metric2: "ISO",
        metric2Label: "27001 READY",
        cta: "Explore Compliance",
        cards: [
          {
            title: "Gartner.",
            description: "2025 Gartner® Magic Quadrant™ for IT Vendor Risk Management"
          },
          {
            title: "Forrester",
            description: "The Forrester Wave™: Governance, Risk, And Compliance"
          },
          {
            title: "Gartner.",
            description: "Gartner® Magic Quadrant™ for IT Risk Management"
          },
          {
            title: "KuppingerCole",
            description: "Leadership Compass for Policy Based Access Control"
          }
        ]
      }
    }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const activeData = tabs[activeTab].content;

  return (
    <section className="bg-slate-50 py-24 relative">
      <div className="shield-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            What ShieldVUE Solves
          </h2>
          <p className="text-lg text-slate-600">
            Transform decentralized, risky software pipelines into a highly visible, strictly governed, and automated repository.
          </p>
        </div>

        {/* Navigation */}
        <div 
          className="sticky z-50 bg-slate-50/90 backdrop-blur-md flex flex-wrap justify-between border-b border-slate-200 mb-12 gap-y-2 transition-[top] duration-300"
          style={{ top: isNavVisible ? '64px' : '0px' }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center px-4 py-5 whitespace-nowrap transition-all duration-300 font-medium ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Content Section Container (Single View with Slide Animation) */}
        <div className="overflow-hidden w-full relative min-h-[500px]">
          <div 
            key={activeTab} 
            className="animate-in slide-in-from-right-16 fade-in duration-500 fill-mode-forwards"
          >
            <h2 className="text-2xl md:text-5xl font-normal font-['Clash_Grotesk'] text-primary mb-8">
              {activeData.title}
            </h2>

            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left side info */}
              <div className="lg:col-span-5">
                <p className="text-slate-800 mb-12 text-md leading-relaxed">
                  {activeData.description}
                </p>
                
                <div className="flex gap-16 mb-12">
                   <div>
                     <div className="text-4xl font-bold text-slate-900 mb-2">{activeData.metric1}</div>
                     <div className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">{activeData.metric1Label}</div>
                   </div>
                   <div>
                     <div className="text-4xl font-extrabold text-slate-900 mb-2">{activeData.metric2}</div>
                     <div className="text-xs font-semibold text-slate-500 uppercase tracking-[0.1em]">{activeData.metric2Label}</div>
                   </div>
                </div>
                
                <button className="bg-primary text-white font-normal py-4 px-8 rounded-md flex items-center gap-3 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  {activeData.cta} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Right side cards grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none overflow-hidden">
                  <div className="w-[200%] h-full flex gap-4 -skew-x-[30deg] transform -translate-x-1/4">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-[1px] h-full bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
                    ))}
                  </div>
                </div>

                {activeData.cards.map((card, cIdx) => (
                  <div key={cIdx} className="p-6 rounded-md border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all duration-500 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                    <div className="relative z-10">
                      <h4 className="text-2xl font-semibold text-slate-800 mb-2 font-['Manrope']">{card.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
