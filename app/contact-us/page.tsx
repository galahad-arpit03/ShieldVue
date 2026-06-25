
import BookDemoHero from "@/BookDemo/BookDemoHero";
import DemoBenefits from "@/BookDemo/DemoBenefits";
import DemoForm from "@/BookDemo/DemoForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us / Book Demo",
  description: "Get in touch with the ShieldVUE team or schedule a personalized enterprise demo today.",
};


export default function BookDemoPage() {
  return (
    <>
      
      <main>
        {/* <BookDemoHero /> */}
        {/* <DemoBenefits /> */}
        <DemoForm />
      </main>

          </>
  );
}