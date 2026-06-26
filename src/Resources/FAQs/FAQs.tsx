"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Lock, DollarSign, Sliders, Calendar } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

const categories = [
  { id: "getting-started", title: "Getting Started", icon: Zap, articleCount: 5 },
  { id: "security", title: "Security", icon: Lock, articleCount: 8 },
  { id: "demo", title: "Book a Demo", icon: Calendar, articleCount: 5 },
  { id: "pricing", title: "Pricing & Billing", icon: DollarSign, articleCount: 6 },
  { id: "integrations", title: "Integrations", icon: Sliders, articleCount: 12 },
];

const faqsByCategory: Record<string, { question: string; answer: string }[]> = {
  "getting-started": [
    {
      question: "How quickly can I get started with the AI platform?",
      answer: "You can get started immediately after signing up. Our onboarding process typically takes less than 15 minutes, allowing you to connect your repositories and start scanning right away."
    },
    {
      question: "Is my data secure and compliant with regulations?",
      answer: "Yes, we adhere to strict enterprise security standards including SOC 2 Type II compliance. All data is encrypted at rest and in transit."
    },
    {
      question: "What kind of ROI can I expect from implementing your AI platform?",
      answer: "Most customers see a 40% reduction in time spent on manual vulnerability triage and compliance reporting within the first month of deployment."
    },
    {
      question: "Can the AI platform integrate with my existing tools?",
      answer: "Absolutely. We offer native integrations with GitHub, GitLab, Bitbucket, Jira, and major CI/CD providers to fit seamlessly into your existing workflows."
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer: "No deep technical expertise is required for the day-to-day use of the platform. We designed the interface to be intuitive for both security engineers and compliance managers."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "Upon cancellation, you have a 30-day window to export your data. After that, all customer data is permanently and securely deleted from our systems."
    },
    {
      question: "How does pricing scale as my business grows?",
      answer: "Our pricing is tiered based on the number of active repositories or developers. We offer transparent scaling plans so you only pay for what you use."
    }
  ],
  "security": [
    {
      question: "What encryption standards do you use?",
      answer: "We use AES-256 for data at rest and TLS 1.3 for data in transit, ensuring the highest level of security for your code and metadata."
    },
    {
      question: "Are you SOC 2 compliant?",
      answer: "Yes, we maintain SOC 2 Type II compliance. Our report is available upon request for enterprise customers."
    }
  ],
  "pricing": [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day fully featured free trial so you can evaluate the platform with your own data."
    },
    {
      question: "Can I pay annually?",
      answer: "Yes, annual billing is available and includes a 20% discount compared to month-to-month billing."
    }
  ],
  "integrations": [
    {
      question: "Do you support Azure DevOps?",
      answer: "Yes, we have full support for Azure DevOps including repository scanning and pipeline integration."
    },
    {
      question: "Is there an API available?",
      answer: "Yes, all enterprise plans include access to our robust REST API for custom automation and reporting."
    }
  ],
  "demo": [
    {
      question: "How long does a typical demo take?",
      answer: "Most ShieldVUE demos take between 30 and 45 minutes, including a live platform walkthrough and a Q&A session with our experts."
    },
    {
      question: "Who should attend the demo from our side?",
      answer: "We recommend including stakeholders from your security, compliance, and engineering teams to ensure all perspectives are covered during the session."
    },
    {
      question: "What happens after I book a demo?",
      answer: "You will receive a calendar invitation with a meeting link. One of our pre-sales engineers or sales representatives will also reach out to understand your specific requirements beforehand."
    },
    {
      question: "How do I reschedule or cancel my demo?",
      answer: "You can easily reschedule or cancel using the links provided in your calendar invitation, or by directly replying to the confirmation email."
    },
    {
      question: "Is there any commitment or cost after the demo?",
      answer: "No. The demo is completely free of charge, obligation-free, and designed to help you evaluate whether ShieldVUE aligns with your security and compliance goals."
    }
  ]
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentFaqs = faqsByCategory[activeCategory] || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 opacity-70 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="shield-container relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl pt-14 mx-auto mb-8 md:mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Frequently Asked Questions
          </div> */}
          
          <h1 className="text-3xl md:text-5xl font-medium text-slate-900 mb-4 font-['Clash_Grotesk']">
            Got Questions? <br />
            <span className="text-primary">We&apos;ve Got Answers</span>
          </h1>
          
          <p className="text-slate-500 text-lg">
            Everything you need to know about our AI platform, from getting started to advanced integrations.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start max-w-6xl mx-auto">
          
          {/* Left Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4 font-['Clash_Grotesk']">Browse by Category</h3>
              <div className="flex flex-col gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <m.button
                      key={category.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setOpenIndex(null);
                      }}
                      className={`relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? "border-primary/20 shadow-sm" 
                          : "bg-white border-slate-200 hover:border-primary/30 hover:bg-slate-50"
                      }`}
                    >
                      {isActive && (
                        <m.div
                          layoutId="activeCategoryBg"
                          className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-slate-100 text-slate-500"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className={`text-lg font-medium font-['Clash_Grotesk'] transition-colors ${isActive ? "text-primary" : "text-slate-900"}`}>
                            {category.title}
                          </h4>
                          <span className="text-xs text-slate-400 font-medium">{category.articleCount} answers</span>
                        </div>
                      </div>
                      <m.div
                        animate={{ rotate: isActive ? 0 : -90 }}
                        transition={{ duration: 0.3 }}
                        className={`relative z-10 ${isActive ? "text-primary" : "text-slate-300"}`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </m.div>
                    </m.button>
                  );
                })}
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-primary rounded-2xl p-6 text-white shadow-xl shadow-primary/20">
              <h4 className="text-xl font-medium mb-2 font-['Clash_Grotesk']">Still have questions?</h4>
              <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-slate-50 font-semibold py-6" asChild>
                <a href="mailto:support@apmosys.com">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:w-2/3">
            <m.div layout className="flex flex-col gap-3 min-h-[400px]">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="flex flex-col gap-3"
                >
                  {currentFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    
                    return (
                      <m.div 
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={faq.question}
                        className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                          isOpen ? "border-primary/30 shadow-md" : "border-slate-200"
                        }`}
                      >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className={`text-lg font-medium font-['Clash_Grotesk'] pr-8 ${isOpen ? "text-primary" : "text-slate-800"}`}>
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : "text-slate-400"
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-6 text-slate-600 leading-8 border-t border-slate-100 pt-4 mt-1">
                              {faq.answer}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </m.div>
                  );
                })}
                </m.div>
              </AnimatePresence>
            </m.div>
          </div>

        </div>
      </div>
    </div>
  );
}
