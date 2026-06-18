"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ShieldCheck,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function DemoForm() {
  return (
    <section id="demo-form" className="relative overflow-hidden bg-slate-50 py-32">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:36px_36px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[600px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-md

          bg-primary/5

          blur-[160px]
        "
      />

      <div className="shield-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-6 h-fit"
          >
            {/* <div
              className="
                inline-flex
                items-center
                rounded-md

                border
                border-primary/20

                bg-primary/5

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              Book Your Personalized Demo
            </div> */}

            <h2
              className="
                mt-8

                text-5xl
                font-extrabold

                tracking-tight

                text-slate-900
              "
            >
              See ShieldVUE
              <br />
              In Action
            </h2>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
              "
            >
              Discover how leading enterprises gain complete
              visibility into software components, vulnerabilities,
              cryptographic assets and compliance posture.
            </p>

            <div className="mt-12 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Live Platform Walkthrough",
                },
                {
                  icon: Users,
                  title: "Tailored To Your Use Case",
                },
                {
                  icon: Clock3,
                  title: "30 Minute Expert Session",
                },
                {
                  icon: Calendar,
                  title: "Response Within 24 Hours",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-md

                      bg-white

                      border
                      border-slate-200

                      shadow-sm
                    "
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <span
                    className="
                      font-medium
                      text-slate-700
                    "
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-slate-200

              bg-white

              p-8
              md:p-10

              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                right-0
                top-0

                h-64
                w-64

                rounded-md

                bg-primary/10

                blur-3xl
              "
            />

            <div className="relative z-10">
              <h3
                className="
                  text-2xl
                  font-bold

                  text-slate-900
                "
              >
                Schedule Your Demo
              </h3>

              <p className="mt-2 text-slate-500">
                Fill out the form and our team will contact you.
              </p>

              <form className="mt-10 grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Full Name"
                  className="
                    rounded-md
                    border
                    border-slate-200

                    bg-white

                    px-5
                    py-4

                    outline-none

                    transition-all

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                  "
                />

                <input
                  placeholder="Business Email"
                  type="email"
                  className="
                    rounded-md
                    border
                    border-slate-200

                    bg-white

                    px-5
                    py-4

                    outline-none

                    transition-all

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                  "
                />

                <input
                  placeholder="Company Name"
                  className="
                    rounded-md
                    border
                    border-slate-200

                    px-5
                    py-4

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10

                    outline-none
                  "
                />

                <input
                  placeholder="Phone Number"
                  className="
                    rounded-md
                    border
                    border-slate-200

                    px-5
                    py-4

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10

                    outline-none
                  "
                />

                <select
                  className="
                    rounded-md
                    border
                    border-slate-200

                    px-5
                    py-4

                    md:col-span-2

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10

                    outline-none
                  "
                >
                  <option>Select Area of Interest</option>
                  <option>SBOM Management</option>
                  <option>CBOM Discovery</option>
                  <option>Vulnerability Intelligence</option>
                  <option>Compliance Reporting</option>
                  <option>Supply Chain Security</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="
                    rounded-md
                    border
                    border-slate-200

                    px-5
                    py-4

                    md:col-span-2

                    resize-none

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10

                    outline-none
                  "
                />

                <Button
                  size="lg"
                  className="
                    h-14

                    md:col-span-2

                    rounded-md

                    bg-primary

                    text-white

                    hover:bg-primary/90
                  "
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Trust Bar */}
              <div
                className="
                  mt-8

                  flex
                  flex-wrap
                  gap-4

                  border-t
                  border-slate-200

                  pt-6

                  text-sm
                  text-slate-500
                "
              >

              </div>
            </div>
          </motion.div>
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

          bg-white

          -skew-y-3
        "
      />
    </section>
  );
}