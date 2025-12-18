"use client";

import {
  PROJECTS,
  PROJECT_CONTENT,
} from "@/features/projects/constants/project-data";
import { notFound, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4 pointer-events-auto"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

interface ProjectDetailProps {
  showBackButton?: boolean;
  projectId?: string;
}

export function ProjectDetail({
  showBackButton = true,
  projectId,
}: ProjectDetailProps) {
  const params = useParams();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const id = projectId ?? (params?.id as string);
  const project = PROJECTS[language].find((p) => p.id === id);
  const content = PROJECT_CONTENT[language];

  if (!mounted) {
    return null;
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      {showBackButton && (
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
      )}

      <div className="grid gap-8">
        {/* 프로젝트 정보 */}
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <Badge
                variant={
                  project.type === "회사 프로젝트" ||
                  project.type === "Company Project"
                    ? "default"
                    : "secondary"
                }
                className="mb-2"
              >
                {project.type}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl flex items-center gap-3">
                {project.icon && <span>{project.icon}</span>}
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
          <p className="text-md text-muted-foreground">
            {renderTextWithLinks(project.description)}
          </p>
        </div>

        {/* 썸네일 */}
        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted/50 flex items-center justify-center relative">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-point/10" />
              <Folder className="h-24 w-24 text-muted-foreground/20" />
            </>
          )}
        </div>

        {/* 프로젝트 메타데이터 */}
        {(project.company || project.period || project.contribution) && (
          <div className="flex flex-wrap items-center gap-2">
            {project.company && (
              <Badge
                variant="secondary"
                className="max-w-full whitespace-normal break-words h-auto px-3 py-1.5 gap-2 inline-flex items-center"
              >
                <span className="text-[11px] font-medium text-muted-foreground">
                  {content.company}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.company}
                </span>
              </Badge>
            )}
            {project.period && (
              <Badge
                variant="secondary"
                className="max-w-full whitespace-normal break-words h-auto px-3 py-1.5 gap-2 inline-flex items-center"
              >
                <span className="text-[11px] font-medium text-muted-foreground">
                  {content.period}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.period}
                </span>
              </Badge>
            )}
            {project.contribution && (
              <Badge
                variant="secondary"
                className="max-w-full whitespace-normal break-words h-auto px-3 py-1.5 gap-2 inline-flex items-center"
              >
                <span className="text-[11px] font-medium text-muted-foreground">
                  {content.contribution}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.contribution}
                </span>
              </Badge>
            )}
          </div>
        )}

        {/* 메인 컨텐츠 */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            {project.details ? (
              <>
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {content.overview}
                  </h2>
                  <p className="leading-relaxed text-foreground">
                    {renderTextWithLinks(project.details.overview)}
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {content.role}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {project.details.role.map((item, index) => (
                      <li key={index}>{renderTextWithLinks(item)}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {content.features}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {project.details.features.map((item, index) => (
                      <li key={index}>{renderTextWithLinks(item)}</li>
                    ))}
                  </ul>
                </section>

                {project.details.problem &&
                  project.details.problem.length > 0 && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {content.problem}
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        {project.details.problem.map((item, index) => (
                          <li key={index}>{renderTextWithLinks(item)}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                {project.details.solution &&
                  project.details.solution.length > 0 && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {content.solution}
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        {project.details.solution.map((item, index) => (
                          <li key={index}>{renderTextWithLinks(item)}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                {project.details.problemSolving &&
                  project.details.problemSolving.length > 0 && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {content.problemSolving}
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        {project.details.problemSolving.map((item, index) => (
                          <li key={index}>{renderTextWithLinks(item)}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {content.achievements}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {project.details.achievements.map((item, index) => (
                      <li key={index}>{renderTextWithLinks(item)}</li>
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
                <h3 className="font-semibold mb-3">{content.technologies}</h3>
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
