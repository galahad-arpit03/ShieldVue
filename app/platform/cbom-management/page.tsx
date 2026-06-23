import CTA from "@/cbom/ CTA";
import CBOMHero from "@/cbom/cbomHero";
import CryptoCapabilities from "@/cbom/CryptoCapabilities";
import CryptoInventory from "@/cbom/CryptoInventory";
import RepositorySection from "@/cbom/RepositorySection";
import SupportedFormats from "@/cbom/SupportedFormats";
import WhatIsCBOM from "@/cbom/WhatIsCBOM";
import Workflow from "@/cbom/Workflow";


export default function PlatformOverviewPage() {
  return (
    <main className="overflow-x-hidden">
                <CBOMHero/>
        <WhatIsCBOM/>
        <CryptoCapabilities/>
        {/* <CryptoInventory/> */}
        <RepositorySection/>
        <SupportedFormats/>
        <Workflow/>
        <CTA/>
        


          </main>
  );
}