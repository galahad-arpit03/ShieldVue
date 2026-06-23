import Footer from "@/Common/Footer/Footer";
import Navbar from "@/Common/NavBar/NavBar";
import ComplianceHero from "@/ComplianceGovernance/ComplianceHero";
import GovernanceCapabilities from "@/ComplianceGovernance/GovernanceCapabilities";
import WhatIsCompliance from "@/ComplianceGovernance/WhatIsCompliance";
import Workflow from "@/ComplianceGovernance/Workflow";
import AuditReporting from "@/ComplianceGovernance/ AuditReporting";
import CTA from "@/ComplianceGovernance/CTA";

export default function PlatformOverviewPage() {
  return (
    <main className="overflow-x-hidden">
    <ComplianceHero/>
    <WhatIsCompliance/>
    <GovernanceCapabilities/>
    <Workflow/>
    <AuditReporting/>
    <CTA/>
    </main>
  );
}