"use client";

import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layout,
  Sparkles,
  Terminal,
  User2,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ABOUT_TEXTS, SKILLS } from "@/features/about/constants/about-data";

export function About() {
  const { language } = useLanguage();
  const texts = ABOUT_TEXTS[language];

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container grid gap-12 lg:grid-cols-2 items-center w-full">
        {/* Left Side: Visual/Stats Card */}
        <div className="relative flex justify-center w-full max-w-md">
          {/* Decorative blobs */}
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-point/20 blur-3xl"></div>

          <div className="relative w-full !max-w-md overflow-hidden rounded-xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-point"></div>
            <div className="p-8 space-y-8">
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
                  <Terminal className="h-4 w-4" />
                  <span>whoami</span>
                </div>
                <h3 className="text-2xl font-bold">Zinny</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Code2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Clean Code</p>
                    <p className="text-xs text-muted-foreground">
                      Maintainable & Scalable
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Layout className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Responsive Design</p>
                    <p className="text-xs text-muted-foreground">
                      Mobile-First Approach
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Modern UI/UX</p>
                    <p className="text-xs text-muted-foreground">
                      Interactive Experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8 min-w-0">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium sm:text-sm sm:px-3 sm:py-1 bg-secondary text-secondary-foreground w-fit">
              <User2 className="h-3 w-3 mr-2" />
              About Me
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {texts.titlePrefix}{" "}
              <span className="text-primary">{texts.titleHighlight}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line sm:text-lg">
              {texts.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight flex items-center gap-2 sm:text-xl">
              <Database className="h-4 w-4 sm:h-5 sm:w-5" /> Tech Stack
            </h3>

            {/* Mobile View: Static Grid */}
            <div className="flex flex-wrap gap-2 md:hidden">
              {SKILLS.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Desktop View: Animated Scroll */}
            <div className="relative hidden w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:flex md:shadow-xl">
              <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
                <div className="flex w-max animate-scroll flex-nowrap gap-4 py-4 hover:[animation-play-state:paused]">
                  {[...SKILLS, ...SKILLS].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-md py-2 px-4 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-default whitespace-nowrap"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
