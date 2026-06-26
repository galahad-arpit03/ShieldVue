import SharedCTA from "@/Common/UI/CTA/CTA";

export default function CTA() {
  return (
    <SharedCTA
      heading={
        <>
          Gain Complete Visibility Into <br className="hidden sm:block" /> <span className="text-primary"> Every Software Component </span>
        </>
      }
      content="Automatically generate SBOMs, discover dependencies, track software changes, and maintain centralized governance across your software supply chain with ShieldVUE."
    />
  );
}
