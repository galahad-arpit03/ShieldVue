
import Hero from "@/LandingPage/Hero/Hero";
import TheProblem from "@/LandingPage/TheProblem/TheProblem";
import Solutions from "@/LandingPage/Solutions/Solutions";
import PlatformCapabilities from "@/LandingPage/PlatformCapabilities/PlatformCapabilities";
import ProductScreenshots from "@/LandingPage/ProductScreenshots/ProductScreenshots";
import ProcessFlow from "@/LandingPage/ProcessFlow/ProcessFlow";
import SbomCbom from "@/LandingPage/SbomCbom/SbomCbom";
import BusinessOutcomes from "@/LandingPage/BusinessOutcomes/BusinessOutcomes";
import Industries from "@/LandingPage/Industries/Industries";
import EnterpriseCTA from "@/LandingPage/EnterpriseCTA/EnterpriseCTA";
import WhatShieldVUESolves from "@/LandingPage/WhatShieldVUESolves/WhatShieldVUESolves";

export default function Home() {
  return (
    <>
      
      <main className="bg-brand-bg text-brand-body">
        <Hero />
        <TheProblem />
        <ProductScreenshots />
        <ProcessFlow />
        <SbomCbom />
        <PlatformCapabilities />
        {/* <Solutions /> */}
        <WhatShieldVUESolves />
        <BusinessOutcomes />
        <Industries />
        <EnterpriseCTA />
      </main>

          </>
  );
}