import Hero from "@/Overview/Hero";
// import PlatformHighlights from "@/Overview/PlatformHighlights";
import CapabilitiesGrid from "@/Overview/CapabilitiesGrid";
// import CapabilitySection from "@/Overview/CapabilitySection";
import Workflow from "@/Overview/Workflow";
import BusinessOutcomes from "@/Overview/BusinessOutcomes";
import CTA from "@/Overview/CTA";
import PlatformDemo from "@/Overview/PlatformDemo";

export default function PlatformOverviewPage() {
  return (
    <main className="overflow-x-hidden">
              <Hero />

      {/* <PlatformHighlights /> */}
      <PlatformDemo />

     

      {/* <CapabilitySection /> */}

      <Workflow />

      <BusinessOutcomes />
       <CapabilitiesGrid />

      <CTA />
      <footer/>
    </main>
  );
}