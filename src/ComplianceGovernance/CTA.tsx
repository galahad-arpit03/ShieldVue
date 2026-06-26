import SharedCTA from "@/Common/UI/CTA/CTA";

export default function CTA() {
  return (
    <SharedCTA
      heading={
        <>
          Build Audit-Ready <br className="hidden sm:block" /> <span className="text-primary"> Compliance & Governance </span>
        </>
      }
      content="Centralize policy enforcement, compliance monitoring, governance controls, audit evidence, and reporting into a single platform designed for modern software supply chain security."
    />
  );
}
