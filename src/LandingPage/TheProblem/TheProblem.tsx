"use client";

import { Eye, ShieldAlert, Key, Scale, FileCheck, Globe } from "lucide-react";
import { m } from "framer-motion";

export default function TheProblem() {
  const problems = [
    {
      icon: <Eye className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Complete Software Transparency",
      description: "Gain comprehensive, real-time visibility into every proprietary and third-party component utilized across your entire application ecosystem."
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Continuous Vulnerability Intelligence",
      description: "Stay proactively informed about emerging CVEs, zero-day threats, and critical vulnerabilities affecting your exact technology stack."
    },
    {
      icon: <Key className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Cryptographic Governance",
      description: "Continuously monitor and enforce standards for encryption algorithms, keys, certificates, and cryptographic libraries."
    },
    {
      icon: <Scale className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Automated Compliance",
      description: "Seamlessly meet complex regulatory mandates, industry frameworks, and continuous audit requirements with automated reporting."
    },
    {
      icon: <FileCheck className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Policy Enforcement",
      description: "Apply strict security governance and automated enforcement controls seamlessly throughout your continuous integration and deployment pipelines."
    },
    {
      icon: <Globe className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Enterprise Scalability",
      description: "Effortlessly manage, secure, and scale application portfolios across distributed multi-cloud environments and disparate business units."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="bg-white pt-40 pb-24 lg:pt-56 lg:pb-32 relative">
      <div className="shield-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <m.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk']">
                  Why <br className="hidden lg:block" />Organizations <br className="hidden lg:block" /> Need <br className="hidden lg:block" /> <span className="text-primary">ShieldVUE.</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                  Modern applications rely heavily on open-source and third-party software components, creating complex security, compliance, and visibility challenges.
                </p>
              </m.div>
            </div>
          </div>

          {/* Right Column: Stacked Problem Cards */}
          <m.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problems.map((problem, index) => (
              <m.div 
                key={index} 
                variants={itemVariants}
                className="group bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start rounded-md shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className={`p-4 rounded-md shrink-0 transition-colors duration-300 ${problem.bgClass} group-hover:bg-primary/10 group-hover:shadow-inner`}>
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>

        </div>
      </div>
    </section>
  );
}
