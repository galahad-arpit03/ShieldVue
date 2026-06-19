"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function PlatformDemo() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-primary/5

          blur-[180px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              text-4xl
              md:text-5xl

              font-medium

              leading-[1.1]
              tracking-[-0.02em]

              text-slate-900

              font-['Clash_Grotesk']
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
            Experience how ShieldVUE delivers software visibility,
            vulnerability intelligence, compliance governance,
            and cryptographic asset management through a single platform.
          </p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative

            mx-auto
            mt-20

            max-w-7xl
          "
        >
          {/* Outer Glow */}
          <div
            className="
              absolute
              -inset-4

              rounded-[32px]

              bg-gradient-to-r
              from-primary/10
              via-primary/5
              to-primary/10

              blur-xl
            "
          />

          {/* Video Card */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[28px]

              border
              border-slate-200

              bg-white

              shadow-[0_30px_80px_rgba(15,23,42,0.12)]
            "
          >
            {/* Browser Bar */}
            <div
              className="
                flex
                items-center

                gap-2

                border-b
                border-slate-200

                bg-slate-50

                px-6
                py-4
              "
            >
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div
                className="
                  ml-4

                  text-sm
                  font-medium

                  text-slate-500
                "
              >
                ShieldVUE Enterprise Platform
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="
                  w-full
                  h-auto
                  object-cover
                "
              >
                <source
                  src="/videos/0_Shield_Digital_3840x2160.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Optional overlay badge */}
              <div
                className="
                  absolute
                  left-6
                  top-6

                  flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/20

                  bg-black/50

                  px-4
                  py-2

                  backdrop-blur-md
                "
              >
                <PlayCircle className="h-4 w-4 text-white" />

                <span
                  className="
                    text-sm
                    font-medium

                    text-white
                  "
                >
                  Live Platform Walkthrough
                </span>
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}