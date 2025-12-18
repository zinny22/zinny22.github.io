"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import MenuItem from "../ui/menuItem";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#experience", hash: "#experience", label: "Experience" },
  { href: "/#projects", hash: "#projects", label: "Projects" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className=" flex h-14 items-center justify-between tablet:px-8 px-4">
        <div className="flex items-center gap-x-6">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block text-xl">ziny</span>
          </Link>

          <nav className="hidden tablet:flex items-center gap-6 text-sm font-medium pt-1">
            {menuItems.map((item) => (
              <MenuItem key={item.label} href={item.href} label={item.label} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
              title={language === "ko" ? "Switch to English" : "한국어로 전환"}
            >
              <span className="font-bold text-xs">
                {language === "ko" ? "KR" : "EN"}
              </span>
            </Button>
            <ModeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="tablet:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "tablet:hidden overflow-hidden transition-all duration-500",
          isMenuOpen ? "max-h-[400px] overflow-auto border-t" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-y-4 p-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              href={item.href}
              label={item.label}
              isSelected={item.hash ? hash === item.hash : false}
              onClick={() => {
                setTimeout(() => setIsMenuOpen(false), 200);
              }}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
