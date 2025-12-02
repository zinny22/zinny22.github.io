"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Folder, Github, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop functionality, real-time updates, and team workspaces.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather Forecast",
    description:
      "A beautiful weather application providing detailed forecasts, interactive maps, and severe weather alerts.",
    tags: ["Vue.js", "OpenWeather API", "Chart.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a responsive design.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Folder className="h-3 w-3 mr-2" />
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and a learning opportunity.
          </p>
        </div>

        <div className="grid gap-8 tablet:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="relative aspect-video bg-muted/50 w-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    {/* Placeholder visual */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-point/10" />
                    <Folder className="h-16 w-16 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div
                        className="flex gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
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
                      <h4 className="font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Links</h4>
                      <div className="flex gap-4">
                        <Button asChild size="sm">
                          <Link href={project.link} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
