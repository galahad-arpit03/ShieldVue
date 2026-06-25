import Link from "next/link";
import { Button } from "@/Common/UI/Button/Button";
import { ArrowRight } from "lucide-react";

export default function ComplianceCTA() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="shield-container">
        <div className="relative rounded-md bg-gradient-to-br from-slate-100/80 to-slate-200/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden py-10 md:py-16 px-6 md:px-16 text-center">
          {/* Purple Ray & Glass Abstract BG */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-[20%] left-[-20%] md:left-[10%] w-[150%] md:w-[80%] h-[140%] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent -rotate-[15deg] blur-2xl transform-gpu" />
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-400/10 rounded-full blur-[60px] md:blur-[80px] -translate-x-1/3 translate-y-1/3" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4 leading-tight">
              Turn Compliance from a Roadblock into an Enabler.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Book a Personalized Demo to see how ShieldVUE can automate your regulatory reporting and ensure continuous NIST and EO 14028 compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md font-semibold px-8 h-12 shadow-lg shadow-primary/20">
                <Link href="/contact-us">Book Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md font-medium px-8 h-12 flex items-center gap-2 shadow-sm">
                <Link href="/contact">
                  Contact Sales <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
