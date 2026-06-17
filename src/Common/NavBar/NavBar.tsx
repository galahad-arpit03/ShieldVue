"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { navigation } from "./NavBarData";
import { Button } from "@/Common/UI/Button/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="shield-container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tight font-heading">
            <span className="text-white">Shield</span>
            <span className="text-violet-400">VUE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((group) => (
            <div key={group.title} className="group relative">
              <button
                className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  text-zinc-400
                  transition-colors
                  hover:text-white
                "
              >
                {group.title}
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown */}
              <div
                className="
                  invisible
                  absolute
                  left-0
                  top-full
                  mt-4
                  w-72
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111111]
                  p-3
                  opacity-0
                  shadow-2xl
                  backdrop-blur-xl
                  transition-all
                  duration-200
                  group-hover:visible
                  group-hover:opacity-100
                "
              >
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      text-zinc-400
                      transition-all
                      hover:bg-white/5
                      hover:text-violet-400
                    "
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            className="
              rounded-full
              border-0

              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600

              px-6

              text-white

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
            "
          >
            Book A Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="
            rounded-lg
            p-2
            text-white
            transition-colors
            hover:bg-white/5
            lg:hidden
          "
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}