"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block text-xl">ziny</span>
          </Link>
          <nav className="hidden tablet:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/#about"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Resume
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
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
            asChild
            variant="default"
            size="sm"
            className="hidden tablet:flex"
          >
            <Link href="mailto:contact@example.com">Hire Me</Link>
          </Button>
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
      {isMenuOpen && (
        <div className="tablet:hidden border-t p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
