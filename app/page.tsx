
import Hero from "@/LandingPage/Hero/Hero";
import TheProblem from "@/LandingPage/TheProblem/TheProblem";
import dynamic from "next/dynamic";

const ProductScreenshots = dynamic(() => import("@/LandingPage/ProductScreenshots/ProductScreenshots"));
const ProcessFlow = dynamic(() => import("@/LandingPage/ProcessFlow/ProcessFlow"));
const SbomCbom = dynamic(() => import("@/LandingPage/SbomCbom/SbomCbom"));
const PlatformCapabilities = dynamic(() => import("@/LandingPage/PlatformCapabilities/PlatformCapabilities"));
const WhatShieldVUESolves = dynamic(() => import("@/LandingPage/WhatShieldVUESolves/WhatShieldVUESolves"));
const BusinessOutcomes = dynamic(() => import("@/LandingPage/BusinessOutcomes/BusinessOutcomes"));
const Industries = dynamic(() => import("@/LandingPage/Industries/Industries"));
const EnterpriseCTA = dynamic(() => import("@/LandingPage/EnterpriseCTA/EnterpriseCTA"));

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