import SupplyChainHero from "@/Solutions/SupplyChainSecurity/SupplyChainHero";
import SupplyChainOverview from "@/Solutions/SupplyChainSecurity/SupplyChainOverview";
import SupplyChainFeatures from "@/Solutions/SupplyChainSecurity/SupplyChainFeatures";
import ArtifactVerification from "@/Solutions/SupplyChainSecurity/ArtifactVerification";
import SupplyChainBenefits from "@/Solutions/SupplyChainSecurity/SupplyChainBenefits";
import SupplyChainCTA from "@/Solutions/SupplyChainSecurity/SupplyChainCTA";

export const metadata = {
  title: "Software Supply Chain Security | ShieldVUE",
  description: "Secure every link in your software supply chain with comprehensive SBOM management, zero-trust architecture, and continuous artifact verification.",
};

export default function SupplyChainSecurityPage() {
  return (
    <>
            <main className="bg-white">
        <SupplyChainHero />
        <SupplyChainOverview />
        <SupplyChainFeatures />
        <ArtifactVerification />
        <SupplyChainBenefits />
        <SupplyChainCTA />
      </main>
          </>
  );
}
