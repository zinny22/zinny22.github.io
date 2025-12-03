import { Experience, ExperienceContent } from "../types";

export const EXPERIENCES: Record<"ko" | "en", Experience[]> = {
  ko: [
    {
      company: "xinno - poppop",
      position: "블록체인 e커머스 어드민 개발자",
      period: "2024.07 - 현재",
      summary:
        "블록체인 기반 e커머스 서비스의 어드민·정산·결제 관리 시스템과 일부 백엔드 API 개발을 담당하고 있습니다.",
      url: "https://www.poppop.co.kr/",
      projects: [
        {
          title: "어드민 정산·결제 관리 시스템 구현",
          period: "약 3주",
          contribution: "기여도 100%",
          bullets: [
            "회계/자금팀과 협업해 정산·결제 플로우 요구사항을 정리하고, 내부 레퍼런스 조사·분석을 바탕으로 관리 화면 기획안을 직접 작성",
            "구매확정 기준으로 주문/취소 내역을 분류하여 정산 금액 및 매출 데이터를 가공하는 API를 설계·개발",
          ],
        },
        {
          title: "사내 어드민 시스템 초기 구축",
          contribution: "기여도 100% (백엔드 아키텍처 40%)",
          bullets: [
            "디자인·기획 문서 없이 정보 구조와 화면을 직접 설계하고 어드민 UI/UX를 주도",
            "shadcn/ui 기반 디자인 시스템과 공통 컴포넌트를 정의하여 일관된 UI 제공",
            "NestJS 기반 백엔드 API 및 데이터베이스 모델링을 설계·구현하고, 어드민 시스템 아키텍처 설계에 참여",
            "Vercel 기반 자동화 CI/CD 파이프라인을 구성하여 무중단 배포·운영 환경을 정립",
          ],
        },
        {
          title: "랜딩 페이지 구축",
          period: "약 1주",
          contribution: "기여도 100%",
          bullets: [
            "제공된 디자인을 기반으로 전체 랜딩 페이지를 구현하고 모바일·데스크톱 대응 반응형 레이아웃을 설계",
            "Vercel을 활용해 배포까지 전 과정을 단독으로 수행",
          ],
        },
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "Zustand",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
    },
    {
      company: "레인트",
      position: "외주 프론트엔드 개발자",
      period: "2024.06 - 2024.12",
      summary:
        "GS리테일 상품·방송 백오피스의 XML 기반 화면을 React/Next.js 기반으로 리팩터링하고, 성능 최적화 및 신규 기능 개발을 수행했습니다.",
      projects: [
        {
          title: "GS리테일(상품) 백오피스 리팩터링",
          contribution: "기여도 100%",
          bullets: [
            "기존 XML 기반 화면을 React 기반으로 전면 리팩터링",
            "EP(엔진 페이지) 관련 신규 페이지를 설계·구현",
          ],
        },
        {
          title: "GS리테일(방송) 백오피스 리팩터링",
          contribution: "기여도 25%",
          bullets: [
            "XML 기반 방송 백오피스 화면을 Next.js 기반 코드로 마이그레이션",
            "도메인 이슈에 따라 일부 화면을 React로 전환하는 작업 진행",
          ],
        },
        {
          title: "리액트 Context API 최적화",
          contribution: "기여도 100%",
          bullets: [
            "하나의 컴포넌트에 집중되어 있던 Context를 용도별로 분리하는 구조를 제안·구현",
            "최적화 이후 특정 화면의 노출 속도를 약 8초에서 0.1초 수준으로 개선",
          ],
        },
      ],
      skills: [
        "React 18",
        "React 16",
        "Next.js",
        "RealGrid",
        "Zustand",
        "MobX",
        "Storybook",
        "TUI",
      ],
    },
    {
      company: "BALANCE",
      position: "Frontend Developer",
      period: "2022.12 - 2024.03",
      summary:
        "영양제 커머스 플랫폼을 개발하며 SEO 최적화, 디자인 시스템, 콘텐츠 도구 고도화, 모노레포 전환을 주도했습니다.(현재 카페24로 전환됨)",
      url: "https://www.balance.site/",
      projects: [
        {
          title: "검색 엔진 최적화(SEO)",
          period: "약 2주",
          contribution: "기여도 100%",
          bullets: [
            "기술 공유회를 통해 SEO의 중요성을 팀 내에 전파",
            "동적 메타태그, 시멘틱 태그, 사이트맵, JSON-LD 등을 적용하여 6개월 만에 월 유입을 0에서 1만으로 성장",
          ],
        },
        {
          title: "Storybook 및 디자인 시스템 도입",
          contribution: "기여도 50%",
          bullets: [
            "개발·디자인 직군 간 공통 컴포넌트 기반 협업 체계를 구축",
            "동일한 개발 환경과 프로세스를 정립해 불필요한 커뮤니케이션과 디자인 QA 횟수를 줄이고 개발 속도 향상",
          ],
        },
        {
          title: "콘텐츠 작성 에디터 고도화",
          period: "약 2주",
          contribution: "기여도 90%",
          bullets: [
            "기존 텍스트 중심 에디터를 React-Tiptap 기반 WYSIWYG 에디터로 마이그레이션",
            "콘텐츠 생산성과 퀄리티를 향상시켜 SEO 유입 증가에 기여",
          ],
        },
        {
          title: "V2(Next 14) 업데이트 및 모노레포 전환",
          period: "약 한 달",
          contribution: "기여도 70%",
          bullets: [
            "Backoffice(React)와 Commerce(Next 12)로 분리되어 있던 레포를 Mono-repo로 통합",
            "공동 컴포넌트를 동일 버전에서 사용할 수 있도록 환경을 정리하여 라이브러리 버전 차이로 인한 개발 리소스를 절감",
          ],
        },
        {
          title: "e커머스 사이트 전체 플로우 작업 진행",
          period: "약 한 달",
          contribution: "기여도 70%",
          bullets: [
            "MVP 이전 단계부터 참여해 e커머스 전체 플로우 및 Backoffice 작업을 지속적으로 담당 (기여도 40%)",
          ],
        },
      ],
      skills: ["Next.js", "React", "Storybook", "Tailwind CSS", "React-Tiptap"],
    },
    {
      company: "YOMANNA",
      position: "Frontend Developer",
      period: "2022.05 - 2022.12",
      summary:
        "소셜 요리 애플리케이션의 프론트엔드 전체 설계와 주요 기능 구현을 담당하며 iOS 앱스토어 출시까지 리드했습니다.",
      url: "https://apps.apple.com/kr/app/%EC%9A%94%EB%A7%8C%EB%82%98/id6444424936",
      projects: [
        {
          title: "요리 소셜링 앱 프론트엔드 설계 및 출시",
          period: "약 8개월",
          contribution: "기여도 100%",
          bullets: [
            "서비스 초기 기획 단계부터 참여해 프론트엔드 전체 설계와 구현 담당",
            "iOS 앱스토어 출시까지 전 과정 리드",
          ],
        },
        {
          title: "결제 및 알림 시스템 구현",
          contribution: "기여도 100%",
          bullets: [
            "아임포트(I'mport)를 활용한 인앱 결제 기능 구현",
            "FCM, Notifee를 활용해 채팅 기능 및 운영 인사이트를 위한 Push Notification 시스템 구현",
          ],
        },
        {
          title: "업무 프로세스 정립 (Asana 도입)",
          contribution: "기여도 100%",
          bullets: [
            "아사나(Asana)를 도입해 빠르게 변경되는 요구사항을 체계적으로 관리",
            "요청 누락을 방지하고 비효율적인 소통 방식을 개선",
          ],
        },
      ],
      skills: [
        "React.js",
        "React Native",
        "Redux Toolkit",
        "Styled-components",
      ],
    },
  ],
  en: [
    {
      company: "xinno - poppop",
      position: "Blockchain E-commerce Developer",
      period: "2024.07 - Present",
      summary:
        "Responsible for the frontend of a blockchain-based e-commerce service, including admin, settlement, and payment management systems, as well as some backend APIs.",
      url: "https://www.poppop.co.kr/",
      projects: [
        {
          title: "Settlement & payment management system",
          period: "~3 weeks",
          contribution: "100% ownership",
          bullets: [
            "Collaborated with accounting/finance teams to define settlement and payment flows and created admin UI specifications based on internal reference research",
            "Designed and developed APIs to classify and process settlement amounts and sales data based on purchase confirmation from order/cancellation history",
          ],
        },
        {
          title: "Admin system bootstrap",
          contribution: "100% ownership (40% on backend architecture)",
          bullets: [
            "Bootstrapped the internal admin system from scratch, designing information architecture and screens without any design or planning documents",
            "Defined design system and shared components using shadcn/ui for consistent UI/UX",
            "Designed and implemented backend APIs and database modeling with NestJS, contributing to the admin system architecture",
            "Set up automated CI/CD pipelines on Vercel to enable zero-downtime deployments and stable operations",
          ],
        },
        {
          title: "Landing page implementation",
          period: "~1 week",
          contribution: "100% ownership",
          bullets: [
            "Implemented the entire landing page based on provided designs",
            "Designed responsive layouts for mobile and desktop and handled deployment end-to-end",
          ],
        },
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "Zustand",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
    },
    {
      company: "Leint",
      position: "Freelance Frontend Engineer",
      period: "2024.06 - 2024.12",
      summary:
        "Refactored GS Retail's product and broadcast backoffice systems from XML-based pages to React/Next.js and performed performance optimizations and feature development.",
      projects: [
        {
          title: "GS Retail (Product) backoffice refactor",
          contribution: "100% contribution",
          bullets: [
            "Migrated legacy XML-based product management screens to React-based implementation",
            "Developed new EP (Engine Page) related pages",
          ],
        },
        {
          title: "GS Retail (Broadcast) backoffice refactor",
          contribution: "25% contribution",
          bullets: [
            "Converted XML-based broadcast backoffice screens to Next.js",
            "Partially migrated Next.js codebase to React due to domain constraints",
          ],
        },
        {
          title: "React Context API optimization",
          contribution: "100% contribution",
          bullets: [
            "Proposed and implemented splitting a monolithic context into multiple domain-specific contexts",
            "Improved screen render times from around 8 seconds to 0.1 seconds",
          ],
        },
      ],
      skills: [
        "React 18",
        "React 16",
        "Next.js",
        "RealGrid",
        "Zustand",
        "MobX",
        "Storybook",
        "TUI",
      ],
    },
    {
      company: "BALANCE",
      position: "Frontend Developer",
      period: "2022.12 - 2024.03",
      summary:
        "Developed a supplement e-commerce platform with a strong focus on SEO, design system implementation, content tooling, and mono-repo migration.",
      url: "https://www.balance.site/",
      projects: [
        {
          title: "Technical SEO",
          period: "~2 weeks",
          contribution: "100% contribution",
          bullets: [
            "Led technical SEO, including dynamic meta tags, semantic HTML, sitemap, and JSON-LD",
            "Increased monthly traffic from 0 to 10k in 6 months",
          ],
        },
        {
          title: "Storybook & design system introduction",
          contribution: "50% contribution",
          bullets: [
            "Introduced Storybook and a design system to align engineers and designers around shared components",
            "Improved development speed and reduced design QA overhead",
          ],
        },
        {
          title: "Editor migration to React-Tiptap",
          period: "~2 weeks",
          contribution: "90% contribution",
          bullets: [
            "Migrated the legacy text-based editor to a React-Tiptap WYSIWYG editor",
            "Improved content quality and SEO-driven traffic",
          ],
        },
        {
          title: "Next 14 V2 & mono-repo migration",
          period: "~1 month",
          contribution: "70% contribution",
          bullets: [
            "Upgraded the architecture to a Next 14-based mono-repo, unifying Backoffice (React) and Commerce (Next 12)",
            "Avoided duplicate work caused by differing library/framework versions and contributed continuously to both e-commerce flows and backoffice features (40% contribution)",
          ],
        },
      ],
      skills: ["Next.js", "React", "Storybook", "Tailwind CSS", "React-Tiptap"],
    },
    {
      company: "YOMANNA",
      position: "Frontend Developer",
      period: "2022.05 - 2022.12",
      summary:
        "Designed and developed the entire frontend for a social cooking application from scratch, leading it to iOS App Store launch.",
      url: "https://apps.apple.com/kr/app/%EC%9A%94%EB%A7%8C%EB%82%98/id6444424936",
      projects: [
        {
          title: "Social cooking app frontend & launch",
          period: "~8 months",
          contribution: "100% contribution",
          bullets: [
            "Led frontend architecture and implementation from initial planning",
            "Delivered the app to iOS App Store launch",
          ],
        },
        {
          title: "Payment & notification systems",
          contribution: "100% contribution",
          bullets: [
            "Implemented in-app payment system using I'mport",
            "Built push notification flows for chat and operational insights using FCM and Notifee",
          ],
        },
        {
          title: "Workflow & communication improvements (Asana)",
          contribution: "100% contribution",
          bullets: [
            "Introduced Asana to manage rapidly changing requests",
            "Reduced miscommunication and prevented request loss in a fast-paced startup environment",
          ],
        },
      ],
      skills: [
        "React.js",
        "React Native",
        "Redux Toolkit",
        "Styled-components",
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
