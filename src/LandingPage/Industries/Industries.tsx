import { Landmark, Umbrella, HeartPulse, Building2, Cloud, Server } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Banking & Finance",
      description: "Meet strict OCC guidelines and secure financial software pipelines."
    },
    {
      icon: <Umbrella className="w-8 h-8" />,
      title: "Insurance",
      description: "Protect sensitive policyholder data and audit third-party components."
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Healthcare",
      description: "Ensure HIPAA compliance and secure medical device software supply chains."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Government",
      description: "Comply with Executive Order 14028 and FedRAMP SBOM mandates."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS Providers",
      description: "Build trust with enterprise buyers by proving application security."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Enterprise IT",
      description: "Govern internal development teams and vendor software securely."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Securing Highly Regulated Industries
          </h2>
          <p className="text-lg text-slate-600">
            ShieldVUE is trusted by organizations where security and compliance are non-negotiable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <div key={index} className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-slate-400 mb-6">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {ind.title}
              </h3>
              <p className="text-slate-600">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
