import { Layers, KeyRound, Check } from "lucide-react";

export default function SbomCbom() {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Beyond the Standard SBOM
          </h2>
          <p className="text-lg text-slate-600">
            While others stop at software dependencies, ShieldVUE looks deeper into your cryptographic posture to prepare you for the post-quantum era.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SBOM Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-md blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center mb-8">
              <Layers className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Software Bill of Materials (SBOM)
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A comprehensive inventory of all open-source and third-party software components, libraries, and frameworks that make up your application.
            </p>

            <ul className="space-y-4">
              {[
                "Dependency Trees & Nested Graphs",
                "Open Source License Tracking",
                "Automated Vulnerability (CVE) Mapping",
                "Component Version Drift Analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CBOM Card */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-md blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-md flex items-center justify-center mb-8">
              <KeyRound className="w-7 h-7 text-indigo-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Cryptography Bill of Materials (CBOM)
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              A specialized inventory of all cryptographic assets, algorithms, and certificates used across your codebase to identify quantum vulnerabilities.
            </p>

            <ul className="space-y-4">
              {[
                "Algorithm Discovery (RSA, AES, SHA)",
                "Key Length & Cipher Suite Validation",
                "Hardcoded Secret Detection",
                "Post-Quantum Cryptography Readiness"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-indigo-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
