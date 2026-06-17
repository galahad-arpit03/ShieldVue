"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Type } from "lucide-react";

const FONTS = [
  { label: "Inter", value: "font-inter" },
  { label: "Clash Grotesk", value: "font-clash" },
  { label: "Sora", value: "font-sora" },
  { label: "IBM Plex Sans", value: "font-ibm" },
  { label: "Manrope", value: "font-manrope" },
];

export default function FontSwitcher() {
  const [activeFont, setActiveFont] = useState<string>("font-inter");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedFont = localStorage.getItem("shieldvue-font");
    if (savedFont && FONTS.some(f => f.value === savedFont)) {
      setActiveFont(savedFont);
    }
  }, []);

  const handleFontChange = (fontClass: string) => {
    // Remove all possible font classes from html
    FONTS.forEach(f => document.documentElement.classList.remove(f.value));
    
    // Add the new one
    document.documentElement.classList.add(fontClass);
    localStorage.setItem("shieldvue-font", fontClass);
    setActiveFont(fontClass);
    setIsOpen(false);
  };

  const activeLabel = FONTS.find(f => f.value === activeFont)?.label || "Inter";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
      >
        <Type className="h-4 w-4 text-violet-400" />
        <span>{activeLabel}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-48 overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl backdrop-blur-xl">
          <div className="p-1">
            {FONTS.map((font) => (
              <button
                key={font.value}
                onClick={() => handleFontChange(font.value)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  activeFont === font.value 
                    ? "bg-violet-500/20 text-violet-300" 
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                } ${font.value}`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
