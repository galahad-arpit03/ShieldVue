import { Code2, Bot, ScanSearch, FileBox, Radar, LineChart, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <Code2 className="w-6 h-6" />, label: "Source Code" },
    { icon: <Bot className="w-6 h-6" />, label: "Scanning Agent" },
    { icon: <ScanSearch className="w-6 h-6" />, label: "Component Discovery" },
    { icon: <FileBox className="w-6 h-6" />, label: "SBOM Creation" },
    { icon: <Radar className="w-6 h-6" />, label: "Vulnerability Mapping" },
    { icon: <LineChart className="w-6 h-6" />, label: "Reporting & Governance" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            How ShieldVUE Works
          </h2>
          <p className="text-lg text-slate-600">
            A frictionless pipeline that integrates seamlessly into your existing CI/CD environments to secure your software from code to production.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center z-20">
                    {index + 1}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-md bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary group-hover:shadow-md transition-all duration-300 relative z-10">
                    {step.icon}
                  </div>

                  {/* Arrow for mobile/tablet (hidden on LG where the line exists) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 text-slate-300">
                      <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-slate-800 text-sm px-2">
                  {step.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
