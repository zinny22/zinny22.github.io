"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block text-xl">ziny</span>
          </Link>
          <nav className="hidden tablet:flex items-center gap-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
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
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
