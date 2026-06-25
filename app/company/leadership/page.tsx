import LeadershipIntro from "@/company/leadership/LeadershipIntro";
import LeadershipGrid from "@/company/leadership/LeadershipGrid";
import CTA from "@/company/leadership/CTA";
import LeadershipHero from "@/company/leadership/leadershipHero";

export default function LeadershipPage() {
  return (
    <main className="overflow-x-hidden">
      <LeadershipHero />
      <LeadershipIntro />
      <LeadershipGrid />
      <CTA />
    </main>
  );
}