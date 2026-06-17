import { Database, FileCode2, Radar, ArrowLeftRight, FileText, Boxes } from "lucide-react";

export default function PlatformCapabilities() {
  const capabilities = [
    {
      icon: <FileCode2 className="w-6 h-6 text-primary" />,
      title: "SBOM Generation",
      description: "Automatically extract and generate standardized Software Bills of Materials (SPDX, CycloneDX) during CI/CD build pipelines."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "SBOM Repository",
      description: "Store, version, and manage all your SBOMs in a centralized, searchable, and highly secure enterprise repository."
    },
    {
      icon: <Radar className="w-6 h-6 text-primary" />,
      title: "Vulnerability Mapping",
      description: "Correlate discovered components against global vulnerability databases (NVD) to highlight active risks in real-time."
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6 text-primary" />,
      title: "Version Comparison",
      description: "Compare different software versions to track component drift, identify introduced risks, and ensure stable releases."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Reporting & Audit",
      description: "Generate executive-ready reports and compliance documentation for internal audits and external regulatory requests."
    },
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      title: "Inventory Management",
      description: "Gain global visibility across all applications, teams, and environments to monitor open-source usage and license compliance."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of tools built to secure, govern, and audit your entire software supply chain lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="group shield-card p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {cap.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
