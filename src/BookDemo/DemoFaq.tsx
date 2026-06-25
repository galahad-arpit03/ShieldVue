"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical demo take?",
    answer:
      "Most ShieldVUE demos take between 30 and 45 minutes, including a live platform walkthrough and a Q&A session with our experts.",
  },
  {
    question: "Who should attend the demo from our side?",
    answer:
      "We recommend including stakeholders from your security, compliance, and engineering teams to ensure all perspectives are covered during the session.",
  },
  {
    question: "What happens after I book a demo?",
    answer:
      "You will receive a calendar invitation with a meeting link. One of our pre-sales engineers or sales representatives will also reach out to understand your specific requirements beforehand.",
  },
  {
    question: "How do I reschedule or cancel my demo?",
    answer:
      "You can easily reschedule or cancel using the links provided in your calendar invitation, or by directly replying to the confirmation email.",
  },
  {
    question: "Is there any commitment or cost after the demo?",
    answer:
      "No. The demo is completely free of charge, obligation-free, and designed to help you evaluate whether ShieldVUE aligns with your security and compliance goals.",
  },
];

export default function DemoFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
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

                text-2xl md:text-4xl
                md:text-5xl

                font-medium

                tracking-[-0.46px]
                leading-[1.1]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
            Frequently Asked <span className="text-primary">Questions</span>
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
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <m.div
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

                  rounded-md

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

                    px-6
                    py-4

                    text-left
                  "
                >
                  <h3
                    className="
                      pr-8

                      text-lg
                      font-medium
                      font-['Clash_Grotesk']

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
                    <m.div
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

                          px-6
                          py-4
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
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>


    </section>
  );
}