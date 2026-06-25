import Image from "next/image";
import { Landmark, Umbrella, HeartPulse, Building2, Cloud, Server, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Industries() {
  return (
    <section className="bg-slate-50 py-10 md:py-16 md:py-32 relative overflow-hidden border-y border-slate-200">
      <div className="shield-container relative z-10">
        <div className="max-w-3xl mb-8 md:mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-6">
            Securing Regulated Industries
          </h2> 
          <p className="text-md md:text-lg text-slate-600 font-light leading-relaxed">
            ShieldVUE is trusted by organizations operating in sectors where security, compliance, and absolute software transparency are non-negotiable.
          </p>
        </div>

        {/* Reference Image Bento Grid (3x3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[220px]">
          
          {/* Card 1: Healthcare (Tall - Left) */}
          <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-white to-[#7755BE]/10 rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex flex-col hover:border-[#7755BE]/40 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/healthcare_3d_purple.png" 
                alt="Healthcare Security" 
                fill 
                className="object-cover object-center mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 mt-auto p-6 pt-32 bg-gradient-to-t from-white via-white/90 to-transparent">
              <div className="w-10 h-10 rounded-full bg-[#7755BE]/10 flex items-center justify-center text-[#7755BE] mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-[#7755BE] transition-colors">Healthcare</h3>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                Ensure HIPAA compliance and secure embedded software supply chains for critical medical devices. Automatically scan third-party dependencies in health monitoring systems.
              </p>
            </div>
          </div>

          {/* Card 2: Banking (Wide - Top Right) */}
          <div className="md:col-span-2 md:row-span-1 bg-white rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/banking_3d_purple.png" 
                alt="Banking Tech" 
                fill 
                className="object-cover object-right mix-blend-multiply opacity-95 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10 p-6 w-full md:w-[70%] bg-gradient-to-r from-white via-white/90 to-transparent flex flex-col justify-center h-full">
              <div className="max-w-sm">
                {/* <div className="w-10 h-10 rounded-full bg-[#7755BE]/10 flex items-center justify-center text-[#7755BE] mb-4">
                  <Landmark className="w-5 h-5" />
                </div> */}
                <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-[#7755BE] transition-colors">
                  BFSI
                </h3>
                <p className="text-slate-800 font-light leading-relaxed text-sm mb-2">
                  Meet strict OCC guidelines and secure automated financial software pipelines.
                </p>
                <div className="hidden md:flex flex-col gap-1 mt-3">
                  {['Automated OSS compliance', 'Zero-day vulnerability alerts', 'Secure vendor workflows'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-[#7755BE]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Government (Square - Middle 1) */}
          <div className="md:col-span-1 md:row-span-1 bg-gradient-to-b from-white to-[#7755BE]/10 rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex flex-col hover:border-[#7755BE]/40 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/government_3d_purple.png" 
                alt="Government Security" 
                fill 
                className="object-cover object-center mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 mt-auto p-6 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent">
              <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-[#7755BE] transition-colors">Government</h3>
              <p className="text-slate-800 font-light leading-relaxed text-sm">
                Comply with Executive Order 14028 and FedRAMP SBOM mandates effortlessly.
              </p>
            </div>
          </div>

          {/* Card 4: Insurance (Square - Middle 2) */}
          <div className="md:col-span-1 md:row-span-1 bg-gradient-to-b from-white to-[#7755BE]/10 rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex flex-col hover:border-[#7755BE]/40 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/insurance_3d_purple.png" 
                alt="Insurance Tech" 
                fill 
                className="object-cover object-center mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 mt-auto p-6 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent">
              <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-[#7755BE] transition-colors">Insurance</h3>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                Protect sensitive policyholder data and audit third-party components.
              </p>
            </div>
          </div>

          {/* Card 5: SaaS Providers (Wide - Bottom Left) */}
          <div className="md:col-span-2 md:row-span-1 bg-white rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex hover:border-[#7755BE]/40 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/saas_3d_purple.png" 
                alt="SaaS Security" 
                fill 
                className="object-cover object-right mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 p-6 w-full md:w-[70%] bg-gradient-to-r from-white via-white/90 to-transparent flex flex-col justify-center h-full">
              <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-[#7755BE] transition-colors">
                SaaS Providers
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-sm mb-3">
                Build trust with enterprise buyers by proactively proving application security posture.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Multi-tenant isolation', 'SOC 2 evidence'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 text-xs">
                    <ShieldCheck className="w-3 h-3 text-[#7755BE]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6: Enterprise IT (Square - Bottom Right) */}
          <div className="md:col-span-1 md:row-span-1 bg-gradient-to-b from-white to-[#7755BE]/10 rounded-md border border-slate-200 shadow-sm relative overflow-hidden group flex flex-col hover:border-[#7755BE]/40 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/landing/enterprise_3d_purple.png" 
                alt="Enterprise IT" 
                fill 
                className="object-cover object-center mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 mt-auto p-6 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent">
              <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-[#7755BE] transition-colors">Enterprise IT</h3>
              <p className="text-slate-600 font-light  leading-relaxed text-sm">
                Govern internal development teams and audit vendor software securely.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
