"use client";

import { motion , m} from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Leadership Member",
    role: "Founder & Chief Executive Officer",
    image: "/images/leadership-placeholder.png",
    description:
      "Driving the vision and strategy behind ShieldVUE, focused on delivering next-generation software supply chain security solutions.",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Leadership Member",
    role: "Chief Technology Officer",
    image: "/images/leadership-placeholder.png",
    description:
      "Leading product architecture, platform engineering, and innovation across SBOM, CBOM, and vulnerability intelligence.",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Leadership Member",
    role: "Head of Product",
    image: "/images/leadership-placeholder.png",
    description:
      "Building intuitive enterprise experiences that simplify software visibility, governance, and compliance.",
    linkedin: "#",
    email: "#",
  },
];

export default function LeadershipGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
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
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          {/* <span
            className="
              inline-flex
              rounded-full
              bg-primary/10
              px-4
              py-2
              text-sm
              font-medium
              text-primary
            "
          >
            Meet Our Team
          </span> */}

          <h2
            className="
              mt-6

              text-4xl
              md:text-5xl

              font-medium

              leading-[1.08]
              tracking-[-0.03em]

              text-slate-900

              font-['Clash_Grotesk']
            "
          >
            Leadership
            <span className="text-primary">
              {" "}Team
            </span>
          </h2>

          <p
            className="
              mt-6

              text-lg
              leading-8

              text-slate-600
            "
          >
            Experienced leaders bringing together expertise in software
            engineering, cybersecurity, enterprise platforms, and product
            innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <m.div
              key={leader.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="
                group

                overflow-hidden

                rounded-md

                border
                border-slate-200

                bg-white

                shadow-sm

                transition-all
                duration-300

                hover:border-primary/30
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-slate-900/20
                    to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="
                    text-2xl
                    font-medium

                    text-slate-900
                  "
                >
                  {leader.name}
                </h3>

                <div
                  className="
                    mt-2

                    text-sm
                    font-semibold

                    text-primary
                  "
                >
                  {leader.role}
                </div>

                <p
                  className="
                    mt-5

                    text-sm
                    leading-7

                    text-slate-600
                  "
                >
                  {leader.description}
                </p>

                {/* Social */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={leader.linkedin}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-md

                      bg-primary/10

                      text-primary

                      transition-colors

                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href={leader.email}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-md

                      bg-primary/10

                      text-primary

                      transition-colors

                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}