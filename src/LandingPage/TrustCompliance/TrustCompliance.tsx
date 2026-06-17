export default function TrustCompliance() {
  const badges = [
    "ISO 27001",
    "ISO 9001",
    "ISO 20000",
    "NIST",
    "SPDX",
    "CycloneDX"
  ];

  return (
    <section className="bg-slate-50 pt-90 pb-12 border-y border-slate-100">
      <div className="shield-container">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by Enterprise Security Teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {badges.map((badge) => (
            <div 
              key={badge} 
              className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-600 font-bold tracking-tight"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
