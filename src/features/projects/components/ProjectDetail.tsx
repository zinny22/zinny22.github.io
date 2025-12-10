"use client";

import { PROJECTS } from "@/features/projects/constants/project-data";
import { notFound, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";

export function ProjectDetail() {
  const params = useParams();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const id = params?.id as string;
  const project = PROJECTS[language].find((p) => p.id === id);

  if (!mounted) {
    return null;
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:pl-0">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid gap-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <Badge
                variant={
                  project.type === "회사 프로젝트" ? "default" : "secondary"
                }
                className="mb-2"
              >
                {project.type}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h1>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <Button asChild variant="outline" size="icon">
                  <Link href={project.github} target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button asChild variant="outline" size="icon">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Hero Image Area */}
        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted/50 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-point/10" />
          <Folder className="h-24 w-24 text-muted-foreground/20" />
        </div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            {project.details ? (
              <>
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    📌 개요
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.details.overview}
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    📌 역할
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.details.role.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    📌 주요 기능
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.details.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    📌 문제 해결 및 개선
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.details.problemSolving.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    📌 성과
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.details.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <div className="text-muted-foreground">
                상세 프로젝트 정보가 없습니다.
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details
                    ? project.details.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))
                    : project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
