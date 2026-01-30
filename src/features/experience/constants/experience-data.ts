import { Experience, ExperienceContent } from "../types";

export const EXPERIENCES: Record<"ko" | "en", Experience[]> = {
  ko: [
    {
      company: "(주)비단팝팝 | PopPop",
      position: "Frontend Developer (Full-stack Scope)",
      period: "2024.07 - 현재",
      summary:
        "기획과 디자인이 부재한 초기 환경에서 Next.js(FE)와 NestJS(BE)를 활용해 서비스 통합 관리자(Admin) 시스템을 E2E로 구축하였고, 반복되는 마케팅/운영 업무를 해결하기 위해 사내 자동화 도구를 독자적으로 개발해 운영 효율을 극대화했습니다.",
      url: "https://www.poppop.co.kr/",
      projects: [
        {
          title: "서비스 통합 관리자(Admin) 시스템 E2E 구축",
          contribution: "기여도 100% (FE) / 40% (BE Architecture)",
          bullets: [
            "Next.js(FE)와 NestJS(BE)를 활용해 초기 기획/디자인이 부재한 환경에서 정보 구조 설계부터 API 구현까지 전 과정 주도",
            "shadcn/ui 기반 디자인 시스템을 직접 배포하고 공통 컴포넌트를 정의하여 개발 생산성 확보",
            "Vercel 기반 자동화 CI/CD 파이프라인을 구축하여 무중단 배포 및 안정적인 운영 환경 정립",
          ],
        },
        {
          title: "사내 운영 자동화 도구 개발",
          contribution: "기여도 100%",
          bullets: [
            "반복되는 마케팅 및 운영 업무를 해결하기 위한 사내 자동화 툴을 독자적으로 기획 및 개발하며 운영 효율 극대화",
          ],
        },
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "Prisma",
        "Zustand",
        "Shadcn/ui",
        "Vercel",
      ],
    },
    {
      company: "레인트 | Raint",
      position: "외주 프론트엔드 개발자",
      period: "2024.06 - 2024.12",
      summary:
        "GS리테일 상품/방송 백오피스의 XML 기반 레거시 시스템을 Modern Web(React, Next.js) 환경으로 전환하고, 상태 관리 최적화를 통해 노출 속도를 98% 이상 단축했습니다.",
      projects: [
        {
          title: "리액트 렌더링 상태 성능 최적화",
          contribution: "기여도 100%",
          bullets: [
            "Monolithic Context 구조로 인한 불필요한 리렌더링 문제를 해결하기 위해 도메인 단위로 상태를 분리하고 Zustand를 도입",
            "화면 렌더링 속도를 8s → 0.1s로 단축하여 사용자 경험 대폭 개선",
          ],
        },
        {
          title: "대규모 레거시 시스템 전환",
          contribution: "기여도 100%",
          bullets: [
            "노후화된 XML 기반의 대규모 백오피스 시스템을 React, Next.js 기반의 Modern Web 환경으로 마이그레이션하여 유지보수성 확보",
            "EP(엔진 페이지) 관련 신규 도메인 설계 및 구현 주도",
          ],
        },
      ],
      skills: ["React", "Next.js", "Zustand", "MobX", "Storybook", "RealGrid"],
    },
    {
      company: "밸런스 | BALANCE",
      position: "프론트엔드 개발자",
      period: "2022.12 - 2024.03",
      summary:
        "영양제 커머스 플랫폼의 프론트엔드를 담당하며 SEO 최적화로 자연 유입 1만 명을 달성하고, 모노레포 전환 및 디자인 시스템 구축을 통해 개발 생산성을 혁신했습니다.",
      url: "https://www.balance.site/",
      projects: [
        {
          title: "SEO 최적화 및 검색 가시성 확보",
          contribution: "기여도 100%",
          bullets: [
            "Next.js의 SSR과 동적 메타태그를 적극적으로 활용해 검색 엔진 가시성을 확보",
            "월 자연 유입(Organic Traffic) 0 → 10,000명 달성으로 비즈니스 성장에 기여",
          ],
        },
        {
          title: "인프라 개선 및 디자인 시스템 구축",
          contribution: "기여도 70%",
          bullets: [
            "Mono-repo(Turborepo)를 도입하여 코드 중복을 제거하고 라이브러리 관리 효율성 증대",
            "Storybook 기반의 디자인 시스템을 구축하여 디자인-개발 협업 프로세스 최적화",
          ],
        },
        {
          title: "React-Tiptap 기반 에디터 고도화",
          contribution: "기여도 90%",
          bullets: [
            "기존 텍스트 중심 에디터를 React-Tiptap 기반의 위지윅(WYSIWYG) 에디터로 마이그레이션",
            "콘텐츠 제작 생산성을 향상시키고 SEO 최적화된 콘텐츠 발행 지원",
          ],
        },
      ],
      skills: [
        "Next.js",
        "React",
        "Turborepo",
        "Storybook",
        "Tailwind CSS",
        "React-Tiptap",
      ],
    },
    {
      company: "요만나 | YOMANNA",
      position: "프론트엔드 개발자",
      period: "2022.05 - 2022.12",
      summary:
        "소셜 요리 애플리케이션의 프론트엔드 전체 설계와 주요 기능 구현을 담당하며, 기획부터 iOS 앱스토어 출시까지 전 과정을 1인 리드했습니다.",
      url: "https://apps.apple.com/kr/app/%EC%9A%94%EB%A7%8C%EB%82%98/id6444424936",
      projects: [
        {
          title: "React Native 1인 개발 및 출시",
          contribution: "기여도 100%",
          bullets: [
            "서비스 기획 단계부터 참여하여 프론트엔드 아키텍처 설계 및 구현 전 과정 주도",
            "iOS 앱스토어 심사 및 최종 출시 성공",
          ],
        },
        {
          title: "주요 비즈니스 기능 구현",
          contribution: "기여도 100%",
          bullets: [
            "Redux Toolkit을 활용한 정밀한 전역 상태 관리 및 데이터 흐름 설계",
            "Iamport 결제 모듈 연동을 통한 인앱 결제 시스템 구축",
            "FCM 기반 푸시 알림 및 실시간 알림 시스템 구현",
          ],
        },
      ],
      skills: [
        "React Native",
        "Redux Toolkit",
        "Styled-components",
        "FCM",
        "Iamport",
      ],
    },
  ],
  en: [
    {
      company: "(주)비단팝팝 | PopPop",
      position: "Frontend Developer (Full-stack Scope)",
      period: "2024.07 - Present",
      summary:
        "In an early environment without planning and design, I built an E2E service integrated administrator (Admin) system using Next.js (FE) and NestJS (BE), and independently developed internal automation tools to maximize operational efficiency for repetitive marketing/operations tasks.",
      url: "https://www.poppop.co.kr/",
      projects: [
        {
          title:
            "Service Integrated Administrator (Admin) System E2E Implementation",
          contribution: "100% ownership (FE) / 40% (BE Architecture)",
          bullets: [
            "Led the entire process from information structure design to API implementation using Next.js(FE) and NestJS(BE) in an environment without initial planning/design",
            "Ensured development productivity by deploying a shadcn/ui-based design system and defining common components",
            "Established a stable operating environment and zero-downtime deployment by building an automated CI/CD pipeline based on Vercel",
          ],
        },
        {
          title: "Internal Operations Automation Tool Development",
          contribution: "100% ownership",
          bullets: [
            "Maximizing operational efficiency by independently planning and developing internal automation tools to solve repetitive marketing and operational tasks",
          ],
        },
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "Prisma",
        "Zustand",
        "Shadcn/ui",
        "Vercel",
      ],
    },
    {
      company: "Leint",
      position: "Freelance Frontend Engineer",
      period: "2024.06 - 2024.12",
      summary:
        "Migrated GS Retail's XML-based legacy back-office systems to a Modern Web (React, Next.js) environment and reduced rendering times by over 98% through state management optimization.",
      projects: [
        {
          title: "React Rendering Performance Optimization",
          contribution: "100% contribution",
          bullets: [
            "Solved unnecessary re-rendering issues caused by a monolithic context structure by splitting state into domain units and introducing Zustand",
            "Improved user experience by shortening screen rendering speed from 8s to 0.1s",
          ],
        },
        {
          title: "Large-scale Legacy System Migration",
          contribution: "100% contribution",
          bullets: [
            "Ensured maintainability by migrating aging XML-based large-scale back-office systems to a Modern Web environment based on React and Next.js",
            "Led the design and implementation of new domains, including Engine Pages (EP)",
          ],
        },
      ],
      skills: ["React", "Next.js", "Zustand", "MobX", "Storybook", "RealGrid"],
    },
    {
      company: "BALANCE",
      position: "Frontend Developer",
      period: "2022.12 - 2024.03",
      summary:
        "Responsible for the frontend of a supplement e-commerce platform, achieving 10k monthly organic traffic through SEO optimization, and innovating development productivity by migrating to a mono-repo and building a design system.",
      url: "https://www.balance.site/",
      projects: [
        {
          title: "SEO Optimization & Search Visibility",
          contribution: "100% contribution",
          bullets: [
            "Leveraged Next.js SSR and dynamic meta tags to ensure search engine visibility",
            "Contributed to business growth by achieving 0 to 10,000 monthly organic traffic",
          ],
        },
        {
          title: "Infrastructure Improvement & Design System",
          contribution: "70% contribution",
          bullets: [
            "Introduced Mono-repo (Turborepo) to eliminate code duplication and increase library management efficiency",
            "Optimized design-development collaboration by building a Storybook-based design system",
          ],
        },
        {
          title: "React-Tiptap Based Editor Advancement",
          contribution: "90% contribution",
          bullets: [
            "Migrated from a legacy text-based editor to a React-Tiptap based WYSIWYG editor",
            "Improved content production productivity and supported the publication of SEO-optimized content",
          ],
        },
      ],
      skills: [
        "Next.js",
        "React",
        "Turborepo",
        "Storybook",
        "Tailwind CSS",
        "React-Tiptap",
      ],
    },
    {
      company: "YOMANNA",
      position: "Frontend Developer",
      period: "2022.05 - 2022.12",
      summary:
        "Responsible for the overall frontend design and implementation of key features for a social cooking application, leading the entire process from planning to iOS App Store launch as a solo developer.",
      url: "https://apps.apple.com/kr/app/%EC%9A%94%EB%A7%8C%EB%82%98/id6444424936",
      projects: [
        {
          title: "React Native Solo Development & Launch",
          contribution: "100% contribution",
          bullets: [
            "Led the entire process from frontend architecture design to implementation from the service planning stage",
            "Succesfully navigated iOS App Store review and final launch",
          ],
        },
        {
          title: "Core Business Feature Implementation",
          contribution: "100% contribution",
          bullets: [
            "Designed precise global state management and data flow using Redux Toolkit",
            "Built an in-app payment system through Iamport payment module integration",
            "Implemented FCM-based push notifications and real-time notification systems",
          ],
        },
      ],
      skills: [
        "React Native",
        "Redux Toolkit",
        "Styled-components",
        "FCM",
        "Iamport",
      ],
    },
  ],
};

export const EXPERIENCE_CONTENT: Record<"ko" | "en", ExperienceContent> = {
  ko: {
    title: "경력",
    subtitle: "제가 함께 성장해 온 팀과 제품들입니다.",
    keyAchievements: "주요 성과",
  },
  en: {
    title: "Work History",
    subtitle:
      "My professional journey and the companies I've had the privilege to work with.",
    keyAchievements: "Key Achievements",
  },
};
