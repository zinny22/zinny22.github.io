import { Project, ProjectContent } from "../types";

export const PROJECTS: Record<"ko" | "en", Project[]> = {
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

export const PROJECT_CONTENT: Record<"ko" | "en", ProjectContent> = {
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
