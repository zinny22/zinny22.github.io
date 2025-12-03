"use client";

import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { Experience } from "../types";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative tablet:border-l tablet:border-border/60 pl-0 tablet:pl-6 pb-10 last:pb-0">
      <div className="hidden tablet:block absolute -left-[6px] top-5 h-3 w-3 rounded-full bg-primary shadow-sm" />

      <div className="flex flex-col gap-4 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full">
          <div className="flex gap-4 items-start">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Building2 className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
              <div>
                <h3 className="text-xl font-semibold pb-1">
                  {experience.position}
                </h3>
                <p
                  className={cn(
                    "text-muted-foreground font-medium",
                    experience.url &&
                      "underline hover:text-primary cursor-pointer"
                  )}
                  onClick={() => window.open(experience.url, "_blank")}
                >
                  {experience.company}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit sm:whitespace-nowrap">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-800 leading-relaxed text-sm">
          {experience.summary}
        </p>
      </div>

      <div className="pl-0 sm:pl-[4.5rem] grid gap-y-6 pt-4">
        <div className="grid gap-y-10">
          {experience.projects.map((project, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {project.title}
                </p>

                {(project.period || project.contribution) && (
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    {project.period && (
                      <p className="inline-flex items-center rounded-full bg-muted/60 px-2.5 py-0.5">
                        {project.period}
                      </p>
                    )}
                    {project.contribution && (
                      <p className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5">
                        {project.contribution}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <ul className="grid gap-y-2 px-5">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-10">
        {experience.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-secondary/50 hover:bg-secondary transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
