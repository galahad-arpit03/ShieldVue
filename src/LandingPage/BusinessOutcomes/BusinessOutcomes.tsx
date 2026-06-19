import { ShieldAlert, FileCheck, Eye, LockKeyhole, HeartHandshake, Zap, Wrench } from "lucide-react";

export default function BusinessOutcomes() {
  const outcomes = [
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Reduce Security Risk",
      metric: "85%",
      label: "Faster vulnerability identification",
      description: "Proactively identify and remediate critical CVEs before they reach production, dramatically shrinking your attack surface."
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Accelerate Compliance",
      metric: "10x",
      label: "Faster audit reporting",
      description: "Automate evidence gathering and generate real-time compliance artifacts, turning weeks of audit prep into minutes."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Improve Visibility",
      metric: "100%",
      label: "Supply chain component mapping",
      description: "Gain comprehensive, real-time insight into every open-source library and third-party dependency across your ecosystem."
    },
    {
      icon: <LockKeyhole className="w-5 h-5" />,
      title: "Strengthen Governance",
      metric: "Zero",
      label: "Unauthorized packages deployed",
      description: "Enforce strict policy controls and block non-compliant or risky packages from entering your secure development lifecycle."
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Increase Customer Trust",
      metric: "SSDF",
      label: "Compliant by default",
      description: "Deliver secure-by-design software that inherently meets SSDF standards, providing your enterprise clients with provable security."
    },
    // {
    //   icon: <Zap className="w-5 h-5" />,
    //   title: "Faster Incident Response",
    //   metric: "< 1h",
    //   label: "Zero-day impact assessment",
    //   description: "Instantly pinpoint affected applications when a new zero-day vulnerability emerges, enabling immediate remediation and patching."
    // },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Auto Remediation",
      metric: "90%",
      label: "Automated vulnerability patching",
      description: "Automatically generate and apply secure code fixes and patches, drastically reducing the window of exposure for critical vulnerabilities."
    }
  ];

  return (
    <section 
      className="bg-white py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/landing/outcome-bg.png')" }}
    >
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            Measurable Business Outcomes
          </h2>
          <p className="text-lg text-slate-600">
            ShieldVUE isn&apos;t just about security—it&apos;s about enabling engineering velocity while ensuring enterprise-grade safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="relative overflow-hidden p-6 rounded-lg border border-slate-200 bg-purple-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              {/* Primary Color Beam / Glow */}
              <div className="absolute top-0 right-0 w-128 h-128 bg-primary/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500"></div>

              {/* Background Number */}
              <div className="absolute -right-5 font-['Clash_Grotesk'] top-0 text-[140px] leading-none font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
                {index + 1}
              </div>

              {/* <h3 className="relative z-10 font-bold text-slate-800 text-lg mb-6">
                {outcome.title}
              </h3> */}
              
              <div className="relative z-10 text-4xl   font-bold text-primary mb-2">
                {outcome.metric}
              </div>
              <div className="relative z-10 text-sm font-medium font-['Manrope'] text-slate-500 uppercase tracking-wide mb-4">
                {outcome.label}
              </div>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
