import CTA from "@/sbom/CTA";
import RepositorySection from "@/sbom/RepositorySection";
import SBOMHero from "@/sbom/sbomhero";
import SupportedFormats from "@/sbom/SupportedFormats";
import WhatIsSBOM from "@/sbom/WhatIsSBOM";
import Workflow from "@/sbom/Workflow";

export default function PlatformOverviewPage() {
  return (
    <main className="overflow-x-hidden">
              <SBOMHero />
      <WhatIsSBOM/>
      <SupportedFormats/>
      <Workflow/>
      <RepositorySection/>
      <CTA/>


          </main>
  );
}