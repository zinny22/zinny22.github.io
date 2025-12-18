"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../types";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 group relative">
      <Link
        href={`/?project=${project.id}#projects`}
        scroll={false}
        className="absolute inset-0 z-0"
        aria-label={`View ${project.title}`}
      />

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div className="relative aspect-video bg-muted/50 w-full overflow-hidden flex items-center justify-center">
          <div className="absolute top-3 right-3 z-10">
            <Badge
              variant={
                project.type === "회사 프로젝트" ? "default" : "secondary"
              }
            >
              {project.type}
            </Badge>
          </div>

          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-point/10" />
              <Folder className="h-16 w-16 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
            </>
          )}
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex gap-2 pointer-events-auto">
              {project.github && (
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary"
                >
                  <Link href={project.github} target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary"
                >
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/50 hover:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
