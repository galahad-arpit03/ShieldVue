import AboutShieldVUE from "@/company/about/AboutShieldVUE";
import WhatWeDeliver from "@/company/about/WhatWeDeliver";
import WhyChooseShieldVUE from "@/company/about/WhyChooseShieldVUE";
import CTA from "@/company/about/CTA";
import AboutHero from "@/company/about/abouthero";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <AboutShieldVUE />
      <WhatWeDeliver />
      <WhyChooseShieldVUE />
      <CTA />
    </main>
  );
}