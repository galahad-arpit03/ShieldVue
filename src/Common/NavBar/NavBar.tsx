"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { navigation } from "./NavBarData";
import { Button } from "@/Common/UI/Button/Button";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down past 50px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-slate-200 bg-white shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="shield-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/brand_logo/shieldvue_logo.png" 
            alt="ShieldVUE Logo Icon" 
            width={60} 
            height={60} 
            className="h-12 w-auto object-contain"
            priority
          />
          <Image 
            src="/brand_logo/brand_bg_text.png" 
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
            <div key={group.title} className="group relative py-5">
              <button
                className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-bold
                  text-slate-600
                  transition-colors
                  group-hover:text-primary
                "
              >
                {group.title}
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />
              </button>

              {/* Dropdown Wrapper (invisible bridge for hover) */}
              <div className="absolute left-0 top-full pt-1 invisible opacity-0 translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                <div
                  className="
                    w-72
                    rounded-md
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]
                    relative
                  "
                >
                  <div className="relative bg-white z-10 flex flex-col space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="
                          block
                          rounded-md
                          px-4
                          py-3
                          text-sm
                          font-medium
                          text-slate-600
                          transition-all
                          hover:bg-primary/5
                          hover:text-primary
                          hover:translate-x-1
                        "
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
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
           <Link href="/book-demo">
    Book A Demo
  </Link>
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