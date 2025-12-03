"use client";

import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Coffee,
  Database,
  Globe,
  Layout,
  MapPin,
  Sparkles,
  User2,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  ABOUT_TEXTS,
  PROFILE_INFO,
  SKILLS,
} from "@/features/about/constants/about-data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const { language } = useLanguage();
  const texts = ABOUT_TEXTS[language];
  const profile = PROFILE_INFO[language];

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container grid gap-12 lg:grid-cols-2 items-center w-full">
        {/* Left Side: Bento Grid Profile */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
          {/* Main Profile Card */}
          <Card className="col-span-2 bg-card/50 backdrop-blur-sm border-muted/50 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-primary to-point p-[2px] shrink-0">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  {/* Avatar Image or Placeholder */}
                  <span className="text-4xl select-none">👨‍💻</span>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <div>
                  <h3 className="text-xl font-bold">Zinny</h3>
                  <p className="text-sm text-primary font-medium">
                    {profile.role}
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {profile.location}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <Card className="bg-card/50 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-colors group">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
              <span className="text-2xl font-bold group-hover:text-primary transition-colors">
                {profile.years}
              </span>
              <span className="text-xs text-muted-foreground">
                {profile.yearsLabel}
              </span>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-colors group">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
              <span className="text-2xl font-bold group-hover:text-point transition-colors">
                {profile.projects}
              </span>
              <span className="text-xs text-muted-foreground">
                {profile.projectsLabel}
              </span>
            </CardContent>
          </Card>

          {/* Detail Card */}
          <Card className="col-span-2 bg-muted/30 border-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-background shadow-sm">
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">{profile.detailTitle}</p>
                <p className="text-xs text-muted-foreground">
                  {profile.detailDesc}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Coffee Card (Wit) */}
          <Card className="col-span-2 bg-card/50 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Coffee className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">
                  {profile.coffeeLabel}
                </span>
              </div>
              <span className="font-mono text-lg">{profile.coffee}</span>
            </CardContent>
          </Card>
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
