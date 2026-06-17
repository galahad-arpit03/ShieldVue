import Image from "next/image";

export default function ProcessFlow() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="shield-container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Platform Workflow
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How ShieldVUE Secures Your Ecosystem
          </h3>
        </div>
        <div className="relative w-full">
          <Image
            src="/landing/flow2.png"
            alt="ShieldVUE Process Flow"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
