"use client";

import { useState, useEffect, useMemo } from "react";



export default function WhatShieldVUESolves() {
  const [activeTab, setActiveTab] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = useMemo(() => [
    {
      id: 0,
      name: "SBOM Management",
      content: {
        title: "SBOM MANAGEMENT",
        description: "Gain complete transparency into your software supply chain. Automatically generate standardized SBOMs from source code, containers, and pipelines. Capture versions, licenses, and metadata in standard formats at machine speed.",
        metric1: "100%",
        metric1Label: "COMPONENT INVENTORY",
        metric2: "Zero",
        metric2Label: "BLIND SPOTS",
        cta: "Explore SBOM Management",
        link: "/platform/sbom-management",
        cards: [
          {
            title: "Automated Generation",
            description: "Supports source code, binaries, containers, and manifests across multi-language stacks."
          },
          {
            title: "Multiple Formats",
            description: "Native support for industry standard formats including SPDX, CycloneDX, and JSON."
          },
          {
            title: "Version Tracking",
            description: "Maintain historical SBOM tracking to ensure complete component traceability."
          },
          {
            title: "Repository Integration",
            description: "Secure, centralized, and versioned SBOM storage that is audit-ready for compliance."
          }
        ]
      }
    },
    {
      id: 1,
      name: "Vulnerability Intelligence",
      content: {
        title: "VULNERABILITY INTELLIGENCE",
        description: "Correlate discovered open-source components against global vulnerability databases (NVD) in real-time. Instantly pinpoint active risks and affected applications across direct and transitive dependencies when a new CVE emerges.",
        metric1: "Real-Time",
        metric1Label: "THREAT MONITORING",
        metric2: "Fast",
        metric2Label: "IMPACT ANALYSIS",
        cta: "Explore Vulnerability Intelligence",
        link: "/platform/vulnerability-intelligence",
        cards: [
          {
            title: "CVE Mapping",
            description: "Continuous and automated mapping of SBOM components to the latest CVEs."
          },
          {
            title: "Risk Prioritization",
            description: "Intelligent risk scoring and impact analysis to focus on the most critical threats."
          },
          {
            title: "Deep Dependency Scans",
            description: "Comprehensive coverage of both direct and deeply nested transitive dependencies."
          },
          {
            title: "Continuous Monitoring",
            description: "Always-on real-time visibility into your security exposure and attack surface."
          }
        ]
      }
    },
    {
      id: 2,
      name: "Inventory Management",
      content: {
        title: "INVENTORY MANAGEMENT",
        description: "Maintain a centralized inventory of all applications and components. Gain global visibility across all teams and environments to monitor open-source usage, enforce license compliance, and detect orphaned components.",
        metric1: "Global",
        metric1Label: "VISIBILITY",
        metric2: "100%",
        metric2Label: "ASSET TRACKING",
        cta: "Explore Inventory Management",
        link: "",
        cards: [
          {
            title: "Application Inventory",
            description: "Centralized tracking and visualization of all enterprise applications and services."
          },
          {
            title: "Component Tracking",
            description: "Detailed inventory of open-source libraries, frameworks, and third-party code."
          },
          {
            title: "Environment Visibility",
            description: "Track component deployments across Dev, QA, and Production environments."
          },
          {
            title: "Historical Audits",
            description: "Detect unused and orphaned components over time to reduce technical debt."
          }
        ]
      }
    },
    {
      id: 3,
      name: "Version Comparison",
      content: {
        title: "VERSION COMPARISON",
        description: "Compare software versions and vulnerabilities across projects. Track component additions, removals, and upgrades to ensure full software composition traceability and secure release governance.",
        metric1: "Track",
        metric1Label: "COMPONENT DRIFT",
        metric2: "Secure",
        metric2Label: "RELEASE GOVERNANCE",
        cta: "Explore Version Comparison",
        link: "",
        cards: [
          {
            title: "Compare Releases",
            description: "SBOM versioning comparisons across continuous builds and production releases."
          },
          {
            title: "Component Changes",
            description: "Instantly track dependency additions, removals, and critical upgrades."
          },
          {
            title: "Vulnerability Diffs",
            description: "Compare the security posture and CVE differences between two software versions."
          },
          {
            title: "Release Governance",
            description: "Automated governance with shift-left security to prevent risky deployments."
          }
        ]
      }
    },
    {
      id: 4,
      name: "Access & Configuration",
      content: {
        title: "ACCESS & CONFIGURATION",
        description: "Enforce strict security controls with Role-Based Access Control (RBAC) and centralized agent visibility. Maintain comprehensive audit logs to ensure your DevSecOps pipeline remains secure and compliant.",
        metric1: "RBAC",
        metric1Label: "STRICT CONTROLS",
        metric2: "Audit",
        metric2Label: "COMPLIANCE READY",
        cta: "Explore Access Management",
        link: "",
        cards: [
          {
            title: "User Management",
            description: "Granular Role-Based Access Control (RBAC) tailored for enterprise DevSecOps teams."
          },
          {
            title: "Agent Management",
            description: "Centralized visibility and lifecycle control over all distributed scanning agents."
          },
          {
            title: "Audit Logs",
            description: "Comprehensive tracking of system changes, policy updates, and user actions."
          },
          {
            title: "Security Controls",
            description: "Enforce strict compliance standards and organizational security policies globally."
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
    <section className="bg-slate-50 pt-8 pb-12 md:pt-12 md:pb-24 relative">
      <div className="shield-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            What ShieldVUE Solves
          </h2>
          <p className="text-lg text-slate-600">
            Transform decentralized, risky software pipelines into a highly visible, strictly governed, and automated repository.
          </p>
        </div>

        {/* Navigation */}
        <div
          className="sticky z-50 bg-slate-50/90 backdrop-blur-md flex overflow-x-auto hide-scrollbar snap-x snap-mandatory md:justify-between border-b border-slate-200 mb-6 md:mb-12 gap-x-2 transition-[top] duration-300"
          style={{ top: isNavVisible ? '64px' : '0px' }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center px-4 py-4 md:py-5 whitespace-nowrap transition-all duration-300 font-medium flex-shrink-0 snap-center ${isActive
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-slate-500 hover:text-slate-900 border-b-2 border-transparent'
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
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left side info */}
              <div className="lg:col-span-5">
                <h2 className="text-2xl md:text-5xl font-normal font-['Clash_Grotesk'] text-primary mb-8 mt-0 pt-0">
                  {activeData.title}
                </h2>
                <p className="text-slate-800 mb-6 md:mb-12 text-md leading-relaxed">
                  {activeData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mb-6 md:mb-12">
                  <div>
                    <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">{activeData.metric1}</div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">{activeData.metric1Label}</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2">{activeData.metric2}</div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.1em]">{activeData.metric2Label}</div>
                  </div>
                </div>


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
                      <h4 className="text-xl font-normal text-slate-40 mb-2 font-['Manrope']">{card.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{card.description}</p>
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
