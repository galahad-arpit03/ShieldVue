import ComplianceHero from "@/Solutions/ComplianceAudit/ComplianceHero";
import SupportedFrameworks from "@/Solutions/ComplianceAudit/SupportedFrameworks";
import PolicyEnforcement from "@/Solutions/ComplianceAudit/PolicyEnforcement";

import ComplianceFAQ from "@/Solutions/ComplianceAudit/ComplianceFAQ";
import ComplianceCTA from "@/Solutions/ComplianceAudit/ComplianceCTA";

export const metadata = {
  title: "Compliance & Audit Readiness | ShieldVUE",
  description: "Automate your governance posture and ensure continuous compliance with NIST, Executive Orders, and industry standards.",
};

export default function ComplianceAuditPage() {
  return (
    <>
            <main className="bg-white">
        <ComplianceHero />
        <SupportedFrameworks />
        <PolicyEnforcement />
        {/* <RegulatoryReporting /> */}
        <ComplianceFAQ />
        <ComplianceCTA />
      </main>
          </>
  );
}
