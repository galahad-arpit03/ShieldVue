import Link from "next/link";
import Navbar from "@/Common/NavBar/NavBar";
import Footer from "@/Common/Footer/Footer";
import { Button } from "@/Common/UI/Button/Button";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-slate-50 py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)] bg-[length:36px_36px]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

        <div className="shield-container relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
            <ShieldAlert className="w-10 h-10 text-primary relative z-10" />
          </div>

          <h1 className="text-8xl font-bold text-slate-200 font-['Clash_Grotesk'] mb-4 select-none">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Clash_Grotesk'] mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been removed, renamed, or didn't exist in the first place.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">
              <Link href="/book-demo">
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
