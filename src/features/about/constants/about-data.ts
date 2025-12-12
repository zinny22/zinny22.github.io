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
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "MobX",
  "Tailwind CSS",
  "Styled Components",
  "Emotion",
  "SCSS",
  "HTML5",
];

export const ABOUT_TEXTS = {
  ko: {
    titlePrefix: "복잡한 시스템을",
    titleHighlight: "직관적인 인터페이스로",
    description: `현재 (주)엑시노에서 어드민 시스템 전반을 담당하며, Next.js와 Tailwind CSS로 화면을 설계하고 NestJS로 간단한 백엔드 API도 함께 개발하고 있습니다.
기획자나 디자이너 없이 컴포넌트 구조를 직접 설계하고, 일관성 있는 UI를 구현해온 경험이 있으며 Zustand, React Query, shadcn/ui 등 최신 프론트엔드 스택을 적극적으로 사용하고 있습니다.

프리랜서 경험을 통해 요구사항 파악과 커뮤니케이션의 중요성을 체감했고, 이전 밸런스(주)에서는 커머스 플랫폼 프론트엔드 개발자로 게이미피케이션 기능과 SEO 최적화를 전담했습니다.

최근에는 백엔드 연동, 데이터 구조 설계, 푸시 알림 처리 등 다양한 영역을 맡으며 자연스럽게 풀스택 개발자로 역량을 확장하고 있습니다.`,
  },
  en: {
    titlePrefix: "Turning Complex Problems into",
    titleHighlight: "Simple Solutions",
    description: `I currently own the overall admin system at Exyno, handling screen design with Next.js and Tailwind CSS, as well as building simple backend APIs with NestJS.
I’m used to designing component structures without a dedicated designer or planner, and I actively leverage modern frontend tools such as Zustand, React Query, and shadcn/ui.

Through freelance work, I’ve learned how critical clear requirements and communication are, and at my previous role at Balance Inc., I worked as a frontend engineer on a commerce platform, focusing on gamification features and SEO optimization.

More recently, I’ve been expanding toward full stack by working on backend integration, data modeling, and push notification flows.`,
  },
};

export const PROFILE_INFO = {
  ko: {
    role: "프론트엔드 개발자",
    location: "서울, 대한민국",
    years: "3년",
    yearsLabel: "경력",
    projects: "4+",
    projectsLabel: "프로젝트",
  },
  en: {
    role: "Frontend Developer",
    location: "Seoul, Republic of Korea",
    years: "3+",
    yearsLabel: "Years of Exp",
    projects: "4+",
    projectsLabel: "Projects",
  },
};
