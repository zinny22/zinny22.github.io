"use client";

import { Briefcase } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import {
  EXPERIENCES,
  EXPERIENCE_CONTENT,
} from "@/features/experience/constants/experience-data";
import { ExperienceItem } from "@/features/experience/components/ExperienceItem";

export function Experience() {
  const { language } = useLanguage();
  const experiences = EXPERIENCES[language];
  const content = EXPERIENCE_CONTENT[language];

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Briefcase className="h-3 w-3 mr-2" />
            Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work <span className="text-primary">History</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content.subtitle}
          </p>
        </div>

        <div className="w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-10">
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                experience={exp}
                content={content}
                value={`item-${index}`}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
