import { ShieldAlert, FileCheck, Eye, LockKeyhole, HeartHandshake, Zap } from "lucide-react";

export default function BusinessOutcomes() {
  const outcomes = [
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Reduce Security Risk",
      metric: "85%",
      label: "Faster vulnerability identification"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Accelerate Compliance",
      metric: "10x",
      label: "Faster audit reporting"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Improve Visibility",
      metric: "100%",
      label: "Supply chain component mapping"
    },
    {
      icon: <LockKeyhole className="w-5 h-5" />,
      title: "Strengthen Governance",
      metric: "Zero",
      label: "Unauthorized packages deployed"
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Increase Customer Trust",
      metric: "SSDF",
      label: "Compliant by default"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Faster Incident Response",
      metric: "< 1h",
      label: "Zero-day impact assessment"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Measurable Business Outcomes
          </h2>
          <p className="text-lg text-slate-600">
            ShieldVUE isn&apos;t just about security—it&apos;s about enabling engineering velocity while ensuring enterprise-grade safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  {outcome.icon}
                </div>
                <h3 className="font-semibold text-slate-800">
                  {outcome.title}
                </h3>
              </div>
              
              <div className="text-4xl font-extrabold text-primary mb-2">
                {outcome.metric}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
