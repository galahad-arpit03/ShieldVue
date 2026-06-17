import { Button } from "@/Common/UI/Button/Button";
import { ArrowRight } from "lucide-react";

export default function EnterpriseCTA() {
  return (
    <section className="bg-white py-16">
      <div className="shield-container">
        <div className="relative rounded-xl bg-slate-900 overflow-hidden shadow-2xl px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-20">
          
          {/* Abstract Security Visualization BG */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-md blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-md blur-[80px] -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.03]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Understand Your Software Supply Chain?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Book a Personalized Demo to see how ShieldVUE can automate your SBOMs, map vulnerabilities, and ensure enterprise-grade compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="h-11 px-6 rounded-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-6 rounded-md text-sm font-medium border border-white/20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white flex items-center justify-center gap-2 shadow-lg">
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
