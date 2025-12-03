"use client";

import { Badge } from "@/components/ui/badge";
import { Database, MapPin, User2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  ABOUT_TEXTS,
  PROFILE_INFO,
  SKILLS,
} from "@/features/about/constants/about-data";
import { Card } from "@/components/ui/card";

export function About() {
  const { language } = useLanguage();
  const texts = ABOUT_TEXTS[language];
  const profile = PROFILE_INFO[language];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 overflow-hidden container"
    >
      <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
        <User2 className="h-3 w-3 mr-2" />
        About Me
      </div>

      <div>
        <div className="grid gap-y-8 gap-x-24 tablet:grid-cols-[1fr_30%] items-start w-full py-10">
          <div className="grid gap-y-4 order-2 tablet:order-1 ">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {texts.titlePrefix}{" "}
              <span className="text-primary">{texts.titleHighlight}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line sm:text-lg">
              {texts.description}
            </p>
          </div>

          <Card className="w-full gird divide-y shadow-md order-1 tablet:order-2 ">
            <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-primary to-point p-[2px] shrink-0">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <span className="text-4xl select-none">👩🏻‍💻</span>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <div>
                  <h3 className="text-xl font-bold">ziny</h3>
                  <p className="text-sm text-primary font-medium">
                    {profile.role}
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x">
              <div className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
                <span className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {profile.years}
                </span>
                <span className="text-xs text-muted-foreground">
                  {profile.yearsLabel}
                </span>
              </div>

              <div className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
                <span className="text-2xl font-bold group-hover:text-point transition-colors">
                  {profile.projects}
                </span>
                <span className="text-xs text-muted-foreground">
                  {profile.projectsLabel}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="pt-16 grid gap-y-3">
          <h3 className="text-lg font-semibold tracking-tight flex items-center gap-2 sm:text-xl">
            <Database className="h-4 w-4 sm:h-5 sm:w-5" /> Tech Stack
          </h3>

          <div className="relative tablet:block hidden w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:flex md:shadow-xl">
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

          <div className="flex tablet:hidden flex-wrap gap-2 md:hidden">
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
        </div>
      </div>
    </section>
  );
}
