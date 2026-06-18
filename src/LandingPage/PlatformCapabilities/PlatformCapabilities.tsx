import { Database, FileCode2, Radar, ArrowLeftRight, FileText, Boxes } from "lucide-react";

export default function PlatformCapabilities() {
  const capabilities = [
    {
      icon: <FileCode2 className="w-6 h-6" />,
      title: "SBOM Generation",
      description: "Automatically extract and generate standardized Software Bills of Materials (SPDX, CycloneDX) during CI/CD build pipelines."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SBOM Repository",
      description: "Store, version, and manage all your SBOMs in a centralized, searchable, and highly secure enterprise repository."
    },
    {
      icon: <Radar className="w-6 h-6" />,
      title: "Vulnerability Mapping",
      description: "Correlate discovered components against global vulnerability databases (NVD) to highlight active risks in real-time."
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Version Comparison",
      description: "Compare different software versions to track component drift, identify introduced risks, and ensure stable releases."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reporting & Audit",
      description: "Generate executive-ready reports and compliance documentation for internal audits and external regulatory requests."
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Gain global visibility across all applications, teams, and environments to monitor open-source usage and license compliance."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of tools built to secure, govern, and audit your entire software supply chain lifecycle.
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
                <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
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
