"use client";

import { Badge } from "@/components/ui/badge";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { Experience, ExperienceContent } from "../types";

interface ExperienceItemProps {
  experience: Experience;
  content: ExperienceContent;
  value: string;
}

export function ExperienceItem({
  experience,
  content,
  value,
}: ExperienceItemProps) {
  return (
    <AccordionItem value={value} className="border-border/50 last:border-0">
      <AccordionTrigger className="hover:no-underline py-6">
        <div className="flex flex-col w-full pr-4 text-left gap-4">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full justify-between">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{experience.position}</h3>
                <p className="text-muted-foreground font-medium">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit whitespace-nowrap ml-16 sm:ml-0">
              <Calendar className="h-4 w-4" />
              {experience.period}
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed pl-16 text-sm sm:text-base">
            {experience.description}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pl-0 sm:pl-[4.5rem] space-y-6 pb-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
              {content.keyAchievements}
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
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
      </AccordionContent>
    </AccordionItem>
  );
}
