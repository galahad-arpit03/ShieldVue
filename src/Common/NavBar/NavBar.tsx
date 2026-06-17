"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { navigation } from "./NavBarData";
import { Button } from "@/Common/UI/Button/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="shield-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/brand-logo/brand-logo.png" 
            alt="ShieldVUE Logo Icon" 
            width={60} 
            height={60} 
            className="h-12 w-auto object-contain"
            priority
          />
          <Image 
            src="/brand-logo/brand-bg-text.png" 
            alt="ShieldVUE Logo Text" 
            width={90} 
            height={200} 
            className="h-16 w-auto object-contain -ml-4"
            priority
          />
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
                  text-slate-600
                  transition-colors
                  hover:text-slate-900
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
                  border-slate-200
                  bg-white
                  p-3
                  opacity-0
                  shadow-xl
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
                      text-slate-600
                      transition-all
                      hover:bg-slate-50
                      hover:text-primary
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
              h-10
              px-5
              rounded-md
              text-sm
              font-semibold
              bg-primary
              text-white
              transition-all
              hover:bg-primary/90
              shadow-sm
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
            text-slate-600
            transition-colors
            hover:bg-slate-100
            lg:hidden
          "
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}