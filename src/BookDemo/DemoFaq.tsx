"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical demo take?",
    answer:
      "Most ShieldVUE demos take between 30 and 45 minutes, including a live platform walkthrough and a Q&A session with our experts.",
  },
  {
    question: "Can the demo be customized to our environment?",
    answer:
      "Absolutely. We tailor every session around your software ecosystem, security objectives, compliance requirements, and use cases.",
  },
  {
    question: "Does ShieldVUE support both SBOM and CBOM?",
    answer:
      "Yes. ShieldVUE provides complete visibility into Software Bills of Materials (SBOMs) and Cryptography Bills of Materials (CBOMs) for comprehensive supply chain security.",
  },
  {
    question: "Will we see vulnerability intelligence capabilities?",
    answer:
      "Yes. The demo includes vulnerability discovery, CVE correlation, remediation prioritization, and compliance reporting workflows.",
  },
  {
    question: "Is there any commitment after the demo?",
    answer:
      "No. The demo is completely obligation-free and designed to help you evaluate whether ShieldVUE aligns with your security and compliance goals.",
  },
];

export default function DemoFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-0

          h-[500px]
          w-[500px]

          rounded-md

          bg-primary/5

          blur-[140px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">


          <h2
            className="
              mt-8

              text-4xl
              font-extrabold

              tracking-tight

              text-slate-900

              md:text-5xl
            "
          >
            Frequently Asked
            <br />
            Questions
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            Everything you need to know before booking
            your personalized ShieldVUE demonstration.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-20 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  overflow-hidden

                  rounded-2xl

                  border
                  border-slate-200

                  bg-white

                  shadow-sm

                  transition-all
                  duration-300

                  hover:border-primary/20
                  hover:shadow-lg
                "
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    px-8
                    py-6

                    text-left
                  "
                >
                  <h3
                    className="
                      pr-8

                      text-lg
                      font-bold

                      text-slate-900
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-md

                      bg-primary/5

                      text-primary
                    "
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          border-t
                          border-slate-100

                          px-8
                          py-6
                        "
                      >
                        <p
                          className="
                            leading-8

                            text-slate-600
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slanted Divider */}
      <div
        className="
          absolute
          bottom-[-70px]
          left-0

          h-[140px]
          w-full

          bg-slate-100

          -skew-y-3
        "
      />
    </section>
  );
}