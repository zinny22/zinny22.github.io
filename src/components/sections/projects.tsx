"use client";

import { Folder } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  PROJECTS,
  PROJECT_CONTENT,
} from "@/features/projects/constants/project-data";
import { ProjectItem } from "@/features/projects/components/ProjectItem";

export function Projects() {
  const { language } = useLanguage();
  const projects = PROJECTS[language];
  const content = PROJECT_CONTENT[language];

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium sm:text-sm sm:px-3 sm:py-1 bg-secondary text-secondary-foreground w-fit">
            <Folder className="h-3 w-3 mr-2" />
            Portfolio
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-xl">
            {content.sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-8 tablet:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}
