import { EyeOff, ShieldAlert, FileSearch, Scale } from "lucide-react";

export default function TheProblem() {
  const problems = [
    {
      icon: <EyeOff className="w-8 h-8 text-primary" />,
      title: "Limited Software Visibility",
      description: "Organizations lack a clear, centralized inventory of the software components, libraries, and frameworks powering their applications."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "Open Source Security Risks",
      description: "Unpatched vulnerabilities in open-source dependencies introduce critical attack vectors that remain undetected until exploitation."
    },
    {
      icon: <FileSearch className="w-8 h-8 text-amber-500" />,
      title: "Manual Tracking Challenges",
      description: "Relying on spreadsheets and manual audits to track software bills of materials (SBOMs) is slow, error-prone, and unscalable."
    },
    {
      icon: <Scale className="w-8 h-8 text-indigo-500" />,
      title: "Growing Compliance Requirements",
      description: "Regulatory frameworks and enterprise policies increasingly mandate strict software supply chain documentation and risk governance."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            The Software Supply Chain Blindspot
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Modern applications are built on thousands of dependencies. Without proper governance, this complexity introduces severe operational and security risks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="shield-card p-8 flex flex-col items-start"
            >
              <div className="p-3 bg-slate-50 rounded-lg mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
