"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "./NavBarData";
import { Button } from "@/Common/UI/Button/Button";
import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-slate-200 bg-white shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="shield-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 z-50" onClick={() => setIsMobileMenuOpen(false)}>
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
          {navigation.map((group) => {
            const isActiveGroup = pathname && group.items.some((item) => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
            return (
            <div key={group.title} className="group relative py-5">
              <button
                className={`
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  transition-colors
                  group-hover:text-primary
                  ${isActiveGroup ? 'text-primary' : 'text-slate-600'}
                `}
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
                    {group.items.map((item) => {
                      const isActiveItem = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                      return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          block
                          rounded-md
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-all
                          hover:bg-primary/5
                          hover:text-primary
                          hover:translate-x-1
                          ${isActiveItem ? 'bg-primary/5 text-primary translate-x-1' : 'text-slate-600'}
                        `}
                      >
                        {item.title}
                      </Link>
                    )})}
                  </div>
                </div>
              </div>
            </div>
          )})}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild
            className="whitespace-nowrap flex justify-center items-center gap-2 flex-1 sm:flex-none 
              h-10
              px-5
              rounded-md
              text-sm
              font-medium
              bg-primary
              text-white
              transition-all
              hover:bg-primary/90
              shadow-sm
            "
          >
            <Link href="/contact-us">
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="
            relative
            z-50
            rounded-lg
            p-2
            text-slate-600
            transition-colors
            hover:bg-slate-100
            lg:hidden
          "
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[64px] w-full h-[calc(100vh-64px)] bg-white z-40 lg:hidden overflow-y-auto pb-12 md:pb-24 shadow-xl"
          >
            <div className="flex flex-col px-4 py-4 gap-2">
              {navigation.map((group) => {
                const isActiveGroup = pathname && group.items.some((item) => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
                return (
                <div key={group.title} className="flex flex-col border-b border-slate-100 last:border-0 pb-2">
                  <button
                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === group.title ? null : group.title)}
                    className={`flex items-center justify-between py-3 text-base font-bold ${isActiveGroup ? 'text-primary' : 'text-slate-800'}`}
                  >
                    {group.title}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${activeMobileDropdown === group.title ? "rotate-180 text-primary" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMobileDropdown === group.title && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-1 pt-1"
                      >
                        {group.items.map((item) => {
                          const isActiveItem = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                          return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors ${isActiveItem ? 'bg-primary/5 text-primary' : 'text-slate-600'}`}
                          >
                            <ChevronRight className={`h-3.5 w-3.5 mr-2 ${isActiveItem ? 'text-primary' : 'text-primary/50'}`} />
                            {item.title}
                          </Link>
                        )})}
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              )})}

              <div className="mt-6 px-2">
                <Button
                  className="w-full h-11 rounded-lg text-sm font-bold bg-primary text-white shadow-lg shadow-primary/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact-us" className="w-full text-center flex items-center justify-center">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}