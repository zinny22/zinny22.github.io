import { ReactNode } from "react";

export interface AboutContent {
  title: ReactNode;
  description: ReactNode;
}

export const SKILLS = [
  "React",
  "Next.js",
  "React Native",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "TypeScript",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "Vercel",
  "GitHub Actions",
  "Datadog",
  "Git",
  "DataGrip",
  "Storybook",
  "Redux Toolkit",
  "Shadcn/UI",
];

export const ABOUT_TEXTS = {
  ko: {
    titlePrefix: "복잡한 시스템을",
    titleHighlight: "직관적인 인터페이스로",
    description: `비효율을 못 참아 직접 도구를 만듭니다.
반복되는 사내 업무를 해결하기 위해 노코드(No-code) 에디터와 어드민을 직접 개발해 운영 효율을 극대화합니다.

프론트엔드를 넘어 서비스의 E2E(End-to-End)를 구현합니다.
Next.js와 NestJS를 활용해 API 설계부터 DB 모델링까지 주도하며, 하나의 온전한 서비스를 구축합니다.

사용자 경험(UX)과 개발자 경험(DX)을 모두 고민합니다.
고객을 위한 0.1초 렌더링 최적화와 동료를 위한 디자인 시스템 및 자동화 도구 도입을 즐깁니다.

수치로 증명하는 성장을 지향합니다.
단순 개발을 넘어 'SEO 유입 1만', '로딩 속도 98% 단축' 등 확실한 비즈니스 성과를 만들어내는 메이커입니다.`,
  },
  en: {
    titlePrefix: "Turning Complex Problems into",
    titleHighlight: "Simple Solutions",
    description: `I build tools to eliminate inefficiency.
I maximize operational efficiency by developing no-code editors and admin systems to solve repetitive internal tasks.

I implement E2E services beyond the frontend.
I lead everything from API design to DB modeling using Next.js and NestJS, building complete, end-to-end services.

I care about both User Experience (UX) and Developer Experience (DX).
I enjoy optimizing for 0.1s rendering for customers and introducing design systems and automation tools for teammates.

I aim for growth proven by metrics.
Beyond simple development, I am a maker who delivers clear business results, such as '10k organic SEO traffic' and '98% reduction in loading speed'.`,
  },
};

export const PROFILE_INFO = {
  ko: {
    role: "Full-stack Scope 프론트엔드 개발자",
    location: "서울, 대한민국",
    years: "3년",
    yearsLabel: "경력",
    projects: "4+",
    projectsLabel: "프로젝트",
  },
  en: {
    role: "Frontend Developer (Full-stack Scope)",
    location: "Seoul, Republic of Korea",
    years: "3+",
    yearsLabel: "Years of Exp",
    projects: "4+",
    projectsLabel: "Projects",
  },
};
