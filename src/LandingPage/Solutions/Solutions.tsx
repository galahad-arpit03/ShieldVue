import { CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const capabilities = [
    {
      title: "SBOM Management",
      description: "Automate the generation, collection, and continuous monitoring of Software Bills of Materials across your entire portfolio."
    },
    {
      title: "CBOM Management",
      description: "Discover and catalog cryptographic assets to prepare for post-quantum security requirements and ensure algorithm compliance."
    },
    {
      title: "Vulnerability Intelligence",
      description: "Map known vulnerabilities (CVEs) directly to your active components with real-time risk scoring and prioritization."
    },
    {
      title: "Compliance Governance",
      description: "Enforce internal security policies and meet regulatory standards (NIST, Executive Orders) automatically."
    },
    {
      title: "Centralized Repository",
      description: "Maintain a single source of truth for all software supply chain artifacts, accessible to security, engineering, and audit teams."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Graphic */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            {/* Custom SVG Visualization: Chaos to Order */}
            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left Side: Chaos */}
              <circle cx="80" cy="120" r="16" fill="#CBD5E1" opacity="0.6" />
              <circle cx="120" cy="80" r="12" fill="#94A3B8" opacity="0.6" />
              <circle cx="60" cy="200" r="20" fill="#EF4444" opacity="0.2" />
              <circle cx="140" cy="180" r="14" fill="#94A3B8" opacity="0.6" />
              <circle cx="100" cy="260" r="18" fill="#F59E0B" opacity="0.2" />
              <circle cx="150" cy="280" r="12" fill="#CBD5E1" opacity="0.6" />
              
              <path d="M80 120 L120 80 M60 200 L140 180 M100 260 L150 280 M80 120 L140 180 M120 80 L150 280" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

              {/* Middle: The Engine */}
              <rect x="180" y="160" width="40" height="80" rx="8" fill="#6843B7" />
              <path d="M140 180 C160 180 160 200 180 200" stroke="#6843B7" strokeWidth="2" opacity="0.5" />
              <path d="M150 280 C165 280 165 220 180 220" stroke="#6843B7" strokeWidth="2" opacity="0.5" />

              {/* Right Side: Ordered Repository */}
              <rect x="260" y="100" width="100" height="40" rx="6" fill="#F8FAFC" stroke="#6843B7" strokeWidth="2" />
              <circle cx="280" cy="120" r="6" fill="#6843B7" />
              <rect x="295" y="116" width="50" height="8" rx="4" fill="#CBD5E1" />

              <rect x="260" y="160" width="100" height="40" rx="6" fill="#F8FAFC" stroke="#4F46E5" strokeWidth="2" />
              <circle cx="280" cy="180" r="6" fill="#4F46E5" />
              <rect x="295" y="176" width="40" height="8" rx="4" fill="#CBD5E1" />

              <rect x="260" y="220" width="100" height="40" rx="6" fill="#F8FAFC" stroke="#6843B7" strokeWidth="2" />
              <circle cx="280" cy="240" r="6" fill="#6843B7" />
              <rect x="295" y="236" width="45" height="8" rx="4" fill="#CBD5E1" />

              <rect x="260" y="280" width="100" height="40" rx="6" fill="#F8FAFC" stroke="#10B981" strokeWidth="2" />
              <circle cx="280" cy="300" r="6" fill="#10B981" />
              <rect x="295" y="296" width="35" height="8" rx="4" fill="#CBD5E1" />

              <path d="M220 200 L260 120 M220 200 L260 180 M220 200 L260 240 M220 200 L260 300" stroke="#6843B7" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>

          {/* Right: Capabilities */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              What ShieldVUE Solves
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Transform decentralized, risky software pipelines into a highly visible, strictly governed, and automated repository.
            </p>

            <div className="space-y-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-slate-600">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
