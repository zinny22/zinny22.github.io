"use client";

import { Briefcase } from "lucide-react";
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
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {content.title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content.subtitle}
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-card/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="w-full space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                experience={exp}
                content={content}
                value={`item-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
