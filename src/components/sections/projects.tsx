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
import { useLanguage } from "@/components/language-provider";

export function Projects() {
  const { language } = useLanguage();

  const projects = {
    ko: [
      {
        title: "E-commerce Admin System",
        description:
          "정산 및 결제 관리를 위한 종합 어드민 대시보드입니다. CI/CD 파이프라인, 반응형 UI, Shadcn/ui 기반의 커스텀 컴포넌트 라이브러리를 포함합니다.",
        tags: ["Next.js", "TypeScript", "Nest.js", "Zustand", "Shadcn/ui"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Supplement Commerce Platform",
        description:
          "SEO와 성능에 초점을 맞춘 영양제 커머스 플랫폼입니다. 기술적 SEO를 통해 월간 트래픽 1만 명을 달성했으며, 레거시 시스템을 모던 기술 스택으로 마이그레이션했습니다.",
        tags: ["Next.js", "React-Tiptap", "Storybook", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Social Cooking App",
        description:
          "요리를 주제로 한 소셜 네트워킹 애플리케이션입니다. 아임포트 결제, 실시간 채팅, 푸시 알림 시스템을 특징으로 합니다.",
        tags: ["React Native", "Next.js", "Redux Toolkit", "Styled-components"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Portfolio Website",
        description:
          "Next.js 14와 Tailwind CSS로 제작된 모던 개발자 포트폴리오입니다. 부드러운 애니메이션, 다크 모드, 반응형 디자인을 특징으로 합니다.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://zinny22.github.io",
        github: "https://github.com/zinny22/zinny22.github.io",
      },
    ],
    en: [
      {
        title: "E-commerce Admin System",
        description:
          "A comprehensive admin dashboard for settlement and payment management. Features include CI/CD pipelines, responsive UI, and a custom component library built with Shadcn/ui.",
        tags: ["Next.js", "TypeScript", "Nest.js", "Zustand", "Shadcn/ui"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Supplement Commerce Platform",
        description:
          "An e-commerce platform focused on SEO and performance. Achieved 10k monthly traffic through technical SEO and migrated legacy systems to modern tech stacks.",
        tags: ["Next.js", "React-Tiptap", "Storybook", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Social Cooking App",
        description:
          "A social networking application centered around cooking. Features in-app payments (I'mport), real-time chat, and push notification systems.",
        tags: ["React Native", "Next.js", "Redux Toolkit", "Styled-components"],
        link: "#",
        github: "https://github.com/zinny22",
      },
      {
        title: "Portfolio Website",
        description:
          "A modern developer portfolio built with Next.js 14 and Tailwind CSS. Features smooth animations, a dark mode, and a responsive design.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://zinny22.github.io",
        github: "https://github.com/zinny22/zinny22.github.io",
      },
    ],
  };

  const content = {
    ko: {
      sectionTitle: "Featured Projects",
      sectionSubtitle:
        "제가 작업한 주요 프로젝트들입니다. 각각의 프로젝트는 새로운 도전과 배움의 기회였습니다.",
      technologies: "Technologies",
      links: "Links",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
    en: {
      sectionTitle: "Featured Projects",
      sectionSubtitle:
        "Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.",
      technologies: "Technologies",
      links: "Links",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
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
            {content[language].sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-8 tablet:grid-cols-2">
          {projects[language].map((project, index) => (
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
                      <h4 className="font-medium mb-2">
                        {content[language].technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        {content[language].links}
                      </h4>
                      <div className="flex gap-4">
                        <Button asChild size="sm">
                          <Link href={project.link} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />{" "}
                            {content[language].liveDemo}
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />{" "}
                            {content[language].github}
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
