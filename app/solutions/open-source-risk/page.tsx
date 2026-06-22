import OpenSourceHero from "@/Solutions/OpenSourceRisk/OpenSourceHero";
import DependencyMapping from "@/Solutions/OpenSourceRisk/DependencyMapping";
import LicenseGovernance from "@/Solutions/OpenSourceRisk/LicenseGovernance";
import RiskScoringEngine from "@/Solutions/OpenSourceRisk/RiskScoringEngine";
import OpenSourceCaseStudies from "@/Solutions/OpenSourceRisk/OpenSourceCaseStudies";
import OpenSourceCTA from "@/Solutions/OpenSourceRisk/OpenSourceCTA";

export const metadata = {
  title: "Open Source Risk Management | ShieldVUE",
  description: "Gain total visibility into the open-source components powering your applications. Detect, monitor, and mitigate 3rd-party risks.",
};

export default function OpenSourceRiskPage() {
  return (
    <>
            <main className="bg-white">
        <OpenSourceHero />
        <DependencyMapping />
        <LicenseGovernance />
        <RiskScoringEngine />
        <OpenSourceCaseStudies />
        <OpenSourceCTA />
      </main>
          </>
  );
}
