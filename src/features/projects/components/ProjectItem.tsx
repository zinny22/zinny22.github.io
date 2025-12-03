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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import { Project, ProjectContent } from "../types";

interface ProjectItemProps {
  project: Project;
  content: ProjectContent;
}

export function ProjectItem({ project, content }: ProjectItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <div className="relative aspect-video bg-muted/50 w-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-point/10" />
            <Folder className="h-16 w-16 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
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
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <Folder className="h-20 w-20 text-muted-foreground/20" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">{content.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">{content.links}</h4>
              <div className="flex gap-4">
                <Button asChild size="sm">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> {content.liveDemo}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> {content.github}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
