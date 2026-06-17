"use client";

export default function LogoMarquee() {
  const logos = [
    "ENTERPRISE",
    "FINTECH",
    "HEALTHCARE",
    "DEFENSE",
    "GOVERNMENT",
    "SaaS",
  ];

  return (
    <section className="border-y border-white/10 bg-black py-8">
      <div className="shield-container overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-zinc-500 text-lg font-semibold tracking-widest"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}