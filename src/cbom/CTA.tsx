import SharedCTA from "@/Common/UI/CTA/CTA";

export default function CTA() {
  return (
    <SharedCTA
      heading={
        <>
          Gain Complete Visibility Into <br className="hidden sm:block" /> <span className="text-primary"> Your Cryptographic Assets </span>
        </>
      }
      content="Discover cryptographic algorithms, certificates, keys, and protocols across your software ecosystem. Build comprehensive CBOMs, reduce cryptographic risk, and prepare for the transition to quantum-safe security."
    />
  );
}
