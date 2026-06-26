import SharedCTA from "@/Common/UI/CTA/CTA";

export default function CTA() {
  return (
    <SharedCTA
      heading={
        <>
          Secure Your Software <br className="hidden sm:block" /> Supply Chain With <span className="text-primary"> ShieldVUE </span>
        </>
      }
      content="Discover how ShieldVUE helps organizations achieve complete software visibility, vulnerability intelligence, cryptographic asset discovery, and compliance governance through one unified enterprise platform."
    />
  );
}
