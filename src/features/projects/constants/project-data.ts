import { Project, ProjectContent } from "../types";

export const PROJECTS: Record<"ko" | "en", Project[]> = {
  ko: [
    {
      id: "admin-system",
      title: "사내 어드민 시스템 개발",
      description:
        "정산 및 결제 관리를 위한 종합 어드민 대시보드입니다. CI/CD 파이프라인, 반응형 UI, Shadcn/ui 기반의 커스텀 컴포넌트 라이브러리를 포함합니다.",
      tags: ["Next.js", "TypeScript", "Nest.js", "Zustand", "Shadcn/ui"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "회사 프로젝트",
      details: {
        overview:
          "운영팀/고객센터/회계팀에서 사용하는 통합 대시보드를 단독으로 설계 및 개발했습니다.",
        role: [
          "Next.js 기반 프론트엔드 전체 개발",
          "공통 UI 컴포넌트(shadcn 기반) 설계 및 구축",
          "Zustand/React Query 상태 관리 구조 도입",
          "NestJS + Prisma 기반 API 일부 직접 구현",
          "정산/매출/결제/취소 로직 정의 및 개선",
          "기획/디자인 없이 IA 설계 및 UX 플로우 정의",
        ],
        stack: [
          "Next.js(App Router)",
          "TypeScript",
          "React Query",
          "Zustand",
          "Tailwind",
          "shadcn/UI",
          "NestJS",
          "Prisma",
          "PostgreSQL",
          "Vercel",
          "AWS",
        ],
        features: [
          "정산 대시보드 (전월·당월 취소 구분 로직 포함)",
          "대량 FCM 푸시 전송 시스템",
          "회원/결제/주문/이벤트 관리",
          "SSE 기반 리워드 진행률 실시간 표시",
          "엑셀 다운로드 시스템",
        ],
        problemSolving: [
          "토스 취소 데이터 누락 문제 해결 → 로직 리팩터링 및 재발 방지",
          "결제 취소 처리 중 정산 데이터 누락 버그 분석 및 복구 프로세스 추가",
          "대용량 테이블 렌더링 최적화 → 로딩 시간 40% 단축",
        ],
        achievements: [
          "운영팀 월 40시간 업무 절감",
          "오류성 정산 데이터 90% 감소",
          "배포 리드타임 50% 단축",
        ],
      },
    },
    {
      id: "supplement-commerce",
      title: "Supplement Commerce Platform",
      description:
        "SEO와 성능에 초점을 맞춘 영양제 커머스 플랫폼입니다. 기술적 SEO를 통해 월간 트래픽 1만 명을 달성했으며, 레거시 시스템을 모던 기술 스택으로 마이그레이션했습니다.",
      tags: ["Next.js", "React-Tiptap", "Storybook", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "회사 프로젝트",
    },
    {
      id: "social-cooking",
      title: "Social Cooking App",
      description:
        "요리를 주제로 한 소셜 네트워킹 애플리케이션입니다. 아임포트 결제, 실시간 채팅, 푸시 알림 시스템을 특징으로 합니다.",
      tags: ["React Native", "Next.js", "Redux Toolkit", "Styled-components"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "개인 프로젝트",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "Next.js 14와 Tailwind CSS로 제작된 모던 개발자 포트폴리오입니다. 부드러운 애니메이션, 다크 모드, 반응형 디자인을 특징으로 합니다.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://zinny22.github.io",
      github: "https://github.com/zinny22/zinny22.github.io",
      type: "개인 프로젝트",
    },
  ],
  en: [
    {
      id: "admin-system",
      title: "E-commerce Admin System",
      description:
        "A comprehensive admin dashboard for settlement and payment management. Features include CI/CD pipelines, responsive UI, and a custom component library built with Shadcn/ui.",
      tags: ["Next.js", "TypeScript", "Nest.js", "Zustand", "Shadcn/ui"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "회사 프로젝트",
    },
    {
      id: "supplement-commerce",
      title: "Supplement Commerce Platform",
      description:
        "An e-commerce platform focused on SEO and performance. Achieved 10k monthly traffic through technical SEO and migrated legacy systems to modern tech stacks.",
      tags: ["Next.js", "React-Tiptap", "Storybook", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "회사 프로젝트",
    },
    {
      id: "social-cooking",
      title: "Social Cooking App",
      description:
        "A social networking application centered around cooking. Features in-app payments (I'mport), real-time chat, and push notification systems.",
      tags: ["React Native", "Next.js", "Redux Toolkit", "Styled-components"],
      link: "#",
      github: "https://github.com/zinny22",
      type: "개인 프로젝트",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with Next.js 14 and Tailwind CSS. Features smooth animations, a dark mode, and a responsive design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://zinny22.github.io",
      github: "https://github.com/zinny22/zinny22.github.io",
      type: "개인 프로젝트",
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
