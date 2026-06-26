import SharedCTA from "@/Common/UI/CTA/CTA";

export default function CTA() {
  return (
    <SharedCTA
      heading={
        <>
          Let&apos;s Build A More <br className="hidden sm:block" /> Secure Software Future <span className="text-primary"> Together </span>
        </>
      }
      content="Connect with the ShieldVUE team to discover how our leadership, expertise, and platform can help strengthen your software supply chain security strategy."
    />
  );
}
