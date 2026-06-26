import { Database, FileCode2, Radar, ArrowLeftRight, FileText, Boxes } from "lucide-react";

export default function PlatformCapabilities() {
  const capabilities = [
    {
      icon: <FileCode2 className="w-6 h-6" />,
      title: "SBOM Generation",
      description: "Automatically generate standardized SBOMs from Source Code, Containers, Binaries, Packages, and CI/CD Pipelines."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SBOM Repository",
      description: "Centralized Storage, Version Management, Searchable Repository, and Audit Ready Records."
    },
    {
      icon: <Radar className="w-6 h-6" />,
      title: "Vulnerability Mapping",
      description: "CVE Mapping, Real-Time Threat Intelligence, Risk Prioritization, and Dependency Tracking."
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Application Inventory, Component Inventory, Environment Tracking, and comprehensive Asset Visibility."
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Governance & Policy",
      description: "License Compliance, Security Policy Enforcement, Build Gate Controls, and Risk Governance."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reporting & Analytics",
      description: "Executive Dashboards, Compliance Reports, Risk Reports, and Audit Reports."
    }
  ];

  return (
    <section className="bg-white pt-12 pb-8 md:pt-24 md:pb-12">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            ShieldVUE Platform
          </h2>
          <p className="text-lg text-slate-600">
            An integrated platform for software composition analysis, vulnerability intelligence, compliance governance, and cryptographic asset management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-10">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="group flex items-start gap-5"
            >
              {/* Icon Container - No border, soft background */}
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex-shrink-0 flex items-center justify-center transition-all duration-100 shadow-sm">
                {/* Clone the icon to apply conditional classes if needed, or just rely on CSS inheritance */}
                <div className="[&>svg]:w-6 [&>svg]:h-6 transition-colors duration-300">
                  {cap.icon}
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-small text-[15px]">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
