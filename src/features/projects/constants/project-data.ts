import { Project, ProjectContent } from "../types";

export const PROJECTS: Record<"ko" | "en", Project[]> = {
  ko: [
    {
      id: "admin-system",
      title: "어드민 정산·결제 관리 시스템 구현",
      description:
        "회계/자금팀 요청으로 구축된 정산 및 결제 관리 어드민 시스템입니다. 복잡한 정산 로직을 자동화하고, 다양한 필터링과 데이터 시각화를 통해 업무 효율성을 극대화했습니다.",
      tags: ["Next.js", "Tailwind CSS", "Zustand", "Nest.js"],
      link: "#",
      github: "#",
      type: "회사 프로젝트",
      company: "xinno (poppop)",
      period: "약 3주",
      contribution: "100%",
      icon: "💳",
      details: {
        overview:
          "회계/자금팀 요청으로 구매/취소 데이터를 기준으로 정산 금액을 집계하고, 관리자가 UI 상에서 확인할 수 있는 어드민 시스템이 필요했습니다.",
        role: [
          "Next.js 기반 프론트엔드/백엔드(BFF) 구현",
          "정산 로직 설계 및 구현",
          "데이터 시각화 및 UI 개발",
        ],
        stack: ["Next.js", "Tailwind CSS", "Zustand", "Nest.js"],
        features: [
          "구매/취소 데이터 기반 정산 금액 집계",
          "다양한 기준(구매일, PG결제일 등)에 따른 필터링",
          "정산 금액(판매가, 수수료, 공급가, 포인트, 쿠폰 등) 합산 및 미리보기",
          "CSV 엑셀 다운로드 기능",
        ],
        problem: [
          "구매 및 취소 상태에 따라 정산 금액 계산 로직이 복잡함 (ex. 확정 상태, 미정산, 취소 등)",
          "회계팀이 원하는 기준(구매일 기준, PG결제 기준 등)에 따라 필터링이 필요",
          "다양한 정산 금액(판매가, 수수료, 공급가, 포인트, 쿠폰 등)의 합산 및 미리보기가 어려움",
        ],
        solution: [
          "회계팀과 협의하여 정산 로직 정의 (미정산 vs 정산 구분, 수수료율 정책 등)",
          "purchaseId 기준으로 주문/취소 데이터 조회 및 정산 금액 계산 API 구현",
          "중첩된 데이터 구조에서 필요한 값을 추출하고 포맷팅하여 CSV 및 UI 출력에 사용",
          "GiftCard 등의 특수 항목은 따로 추출하여 giftCardInfo로 분리해 직관적으로 표현",
        ],
        achievements: [
          "팀 내 회계 담당자가 별도 엑셀 계산 없이 UI에서 바로 정산 결과 확인 가능",
          "복잡한 취소/수정 로직도 반영하여 운영 중 오류 없음",
          "추후 회계 자동화와 연계 가능한 데이터 구조 설계 완료",
        ],
      },
    },
    {
      id: "admin-initial-setup",
      title: "사내 어드민 시스템 초기 구축",
      description:
        "기획/디자인 없이 초기 어드민 시스템을 구축하며, UI/UX 설계부터 배포 파이프라인까지 주도적으로 수행한 프로젝트입니다.",
      tags: ["Next.js", "Zustand", "Shadcn/UI", "Nest.js"],
      link: "#",
      github: "#",
      type: "회사 프로젝트",
      company: "xinno (poppop)",
      period: "약 1.5개월",
      contribution: "프론트 100% / 백엔드 40%",
      icon: "🏗️",
      details: {
        overview:
          "서비스의 관리자 화면을 처음부터 구축하는 작업으로, 초기에는 디자인이나 기획서 없이 개발자가 구조와 흐름을 정해야 했습니다.",
        role: [
          "관리자 페이지 초기 아키텍처 및 폴더 구조 설계",
          "Next.js + NestJS 기반 풀스택 개발",
          "Shadcn/ui 기반 공통 컴포넌트 라이브러리 구축",
          "CI/CD 파이프라인 구축",
        ],
        stack: [
          "Next.js",
          "Zustand",
          "Shadcn/UI",
          "Nest.js",
          "Prisma",
          "Vercel",
        ],
        features: [
          "상품/주문/정산/쿠폰 관리 기능",
          "공통 UI 컴포넌트 (테이블, 필터 등)",
          "GitHub Actions 기반 CI/CD",
        ],
        problem: [
          "초기 기획/디자인 없음 → 구조와 컴포넌트 UI를 직접 설계해야 함",
          "관리자 페이지에 걸맞는 일관된 UI/UX가 필요",
          "CI/CD 파이프라인 및 Vercel 환경 세팅이 미흡함",
        ],
        solution: [
          "주요 도메인(상품 관리, 주문 관리, 정산, 쿠폰 등) 별 정보 구조를 정리하고 UX 흐름 도식화",
          "shadcn/ui 기반 디자인 시스템 정의: 버튼, 테이블, 필터, 셀렉트 등 공통 UI 컴포넌트화",
          "NestJS + Prisma 기반 API 설계 및 DB 모델 구조 정의",
          "vercel.json 설정과 GitHub Actions 연동을 통해 무중단 배포 환경 구축",
        ],
        achievements: [
          "실무 팀의 피드백을 빠르게 반영하며 완성도 높은 MVP 관리자 시스템 완성",
          "새로운 도메인 추가 시에도 공통 구조와 UI 컴포넌트를 활용하여 빠른 개발 가능",
        ],
      },
    },
    {
      id: "react-context-optimization",
      title: "리액트 Context API 최적화",
      description:
        "백오피스 성능 개선을 위해 Context API를 최적화하고 상태 관리 전략을 재수립하여 렌더링 성능을 획기적으로 개선한 프로젝트입니다.",
      tags: ["React 18", "Zustand", "MobX"],
      link: "#",
      github: "#",
      type: "회사 프로젝트",
      company: "레인트",
      period: "약 2주",
      contribution: "100%",
      icon: "🧪",
      details: {
        overview:
          "성능 저하 이슈로 인해 특정 백오피스 화면의 렌더링 시간이 8초 이상 걸리는 문제가 발생했습니다.",
        role: [
          "프론트엔드 성능 최적화",
          "상태 관리 아키텍처 재설계",
          "레거시 코드 리팩토링",
        ],
        stack: ["React 18", "Zustand", "MobX"],
        features: [
          "Context API 분리 및 최적화",
          "불필요한 리렌더링 방지",
          "전역 상태 관리 마이그레이션 (Context → Zustand)",
        ],
        problem: [
          "하나의 전역 Context에 모든 상태가 몰려 있었고, 사소한 변경에도 전체 리렌더 발생",
          "성능 최적화를 위한 분리 기준이 명확하지 않았음",
        ],
        solution: [
          "Context를 기능별로 분리: 사용자 정보, 필터 값, 목록 상태 등으로 나누고 필요 시만 구독",
          "React.memo와 useMemo, useCallback으로 리렌더링 최소화",
          "Zustand로 일부 전역 상태를 옮겨 SSR 호환성과 퍼포먼스 개선",
        ],
        achievements: [
          "특정 화면의 초기 로딩 속도가 8초 → 0.1초 수준으로 대폭 개선",
          "팀 내 전역 상태 관리 방식의 기준을 마련하고 문서화",
        ],
      },
    },
    {
      id: "storybook-design-system",
      title: "Storybook 및 디자인 시스템 도입",
      description:
        "디자인과 개발 간의 간극을 줄이고 개발 생산성을 높이기 위해 Storybook 기반의 디자인 시스템을 구축하고 워크플로우를 개선한 프로젝트입니다.",
      tags: ["React", "Storybook", "Tailwind CSS"],
      link: "#",
      github: "#",
      type: "회사 프로젝트",
      company: "BALANCE",
      period: "약 2~3주",
      contribution: "50%",
      icon: "🌐",
      details: {
        overview:
          "프론트와 디자인 간 컴포넌트 불일치 문제와 QA 소요가 커서, 공통 디자인 시스템 도입이 요구됨.",
        role: [
          "Storybook 환경 구축 및 유지보수",
          "공통 컴포넌트 설계 및 개발",
          "자동화 테스트 및 배포 파이프라인 구성",
        ],
        stack: ["React", "Storybook", "Tailwind CSS"],
        features: [
          "UI 컴포넌트 문서화",
          "디자인 시스템 가이드라인 수립",
          "자동 스냅샷 테스트",
        ],
        problem: [
          "컴포넌트 재사용 불가 → 유사한 컴포넌트가 중복 생성",
          "디자이너가 실제 구현 결과를 보기 어렵고 커뮤니케이션 병목 발생",
        ],
        solution: [
          "Storybook을 도입해 UI를 문서화하고, 디자이너가 직접 확인할 수 있도록 설정",
          "공통 버튼, 모달, 입력창 등을 기반으로 디자인 시스템 레이어 정립",
          "배포 스크립트와 자동 스냅샷 테스트를 추가하여 품질 관리",
        ],
        achievements: [
          "동일 컴포넌트 재사용률 증가 → 개발 속도 향상",
          "디자이너와의 협업 프로세스 간소화 → QA 시간 단축",
        ],
      },
    },
  ],
  en: [
    {
      id: "admin-system",
      title: "Admin Settlement & Payment Management System",
      description:
        "An admin system built for settlement and payment management at the request of the Finance team. Automated complex settlement logic and maximized operational efficiency through various filtering and data visualization.",
      tags: ["Next.js", "Tailwind CSS", "Zustand", "Nest.js"],
      link: "#",
      github: "#",
      type: "Company Project",
      company: "xinno (poppop)",
      period: "~3 weeks",
      contribution: "100%",
      icon: "💳",
      details: {
        overview:
          "Needed an admin system where the Finance/Treasury team could aggregate settlement amounts based on purchase/cancellation data and verify them via UI.",
        role: [
          "Next.js based Frontend/Backend (BFF) implementation",
          "Settlement logic design and implementation",
          "Data visualization and UI development",
        ],
        stack: ["Next.js", "Tailwind CSS", "Zustand", "Nest.js"],
        features: [
          "Settlement amount aggregation based on purchase/cancellation data",
          "Filtering by various criteria (purchase date, PG payment date, etc.)",
          "Aggregation and preview of settlement amounts (sales price, commission, supply price, points, coupons, etc.)",
          "CSV Excel download function",
        ],
        problem: [
          "Complex settlement calculation logic depending on purchase and cancellation status (e.g., confirmed, unsettled, cancelled)",
          "Need for filtering based on criteria desired by the finance team (purchase date vs PG payment date)",
          "Difficulty in summing up and previewing various settlement amounts (sales price, commission, supply price, points, coupons)",
        ],
        solution: [
          "Defined settlement logic in consultation with the finance team (unsettled vs settled distinction, commission rate policies)",
          "Implemented API to retrieve order/cancellation data by purchaseId and calculate settlement amounts",
          "Extracted and formatted necessary values from nested data structures for CSV and UI output",
          "Extracted special items like GiftCards separately into giftCardInfo for intuitive display",
        ],
        achievements: [
          "Enabled finance staff to check settlement results directly in UI without separate Excel calculations",
          "No errors in operation by reflecting complex cancellation/modification logic",
          "Completed data structure design compatible with future accounting automation",
        ],
      },
    },
    {
      id: "admin-initial-setup",
      title: "Admin System Initial Setup",
      description:
        "Built the initial admin system from scratch without design specs, leading everything from UI/UX design to deployment pipelines.",
      tags: ["Next.js", "Zustand", "Shadcn/UI", "Nest.js"],
      link: "#",
      github: "#",
      type: "Company Project",
      company: "xinno (poppop)",
      period: "~1.5 months",
      contribution: "Frontend 100% / Backend 40%",
      icon: "🏗️",
      details: {
        overview:
          "Established the admin dashboard from scratch. Initially without design or specifications, requiring the developer to define the structure and flow.",
        role: [
          "Initial architecture & folder structure design",
          "Full-stack development (Next.js + NestJS)",
          "Built common component library based on Shadcn/ui",
          "CI/CD pipeline setup",
        ],
        stack: [
          "Next.js",
          "Zustand",
          "Shadcn/UI",
          "Nest.js",
          "Prisma",
          "Vercel",
        ],
        features: [
          "Management for Products, Orders, Settlements, Coupons",
          "Common UI Components (Tables, Filters, etc.)",
          "CI/CD via GitHub Actions",
        ],
        problem: [
          "No initial design/specs → Had to design structure and UI components directly",
          "Needed consistent UI/UX suitable for admin pages",
          "Lack of CI/CD pipeline and Vercel setup",
        ],
        solution: [
          "Organized information structure for key domains (Product, Order, Settlement, Coupon) and mapped UX flows",
          "Defined design system based on shadcn/ui: standardized buttons, tables, filters, selects",
          "Designed API and DB models using NestJS + Prisma",
          "Established continuous deployment using vercel.json and GitHub Actions",
        ],
        achievements: [
          "Completed high-quality MVP admin system by quickly reflecting team feedback",
          "Enabled rapid development for new domains using shared structures and UI components",
        ],
      },
    },
    {
      id: "react-context-optimization",
      title: "React Context API Optimization",
      description:
        "Optimized Context API and restructured state management to drastically improve rendering performance of back-office screens.",
      tags: ["React 18", "Zustand", "MobX"],
      link: "#",
      github: "#",
      type: "Company Project",
      company: "Raint",
      period: "~2 weeks",
      contribution: "100%",
      icon: "🧪",
      details: {
        overview:
          "Addressed a performance issue where specific back-office screens took over 8 seconds to render.",
        role: [
          "Frontend Performance Optimization",
          "State Management Architecture Redesign",
          "Legacy Code Refactoring",
        ],
        stack: ["React 18", "Zustand", "MobX"],
        features: [
          "Context API Splitting & Optimization",
          "Prevention of Unnecessary Re-renders",
          "Global State Migration (Context → Zustand)",
        ],
        problem: [
          "All states were concentrated in a single global Context, causing full re-renders on minor changes",
          "Lack of clear criteria for separation for performance optimization",
        ],
        solution: [
          "Split Context by function: separated user info, filter values, list states, etc., and subscribed only when necessary",
          "Minimized re-renders using React.memo, useMemo, and useCallback",
          "Migrated some global states to Zustand to improve SSR compatibility and performance",
        ],
        achievements: [
          "Drastically improved initial loading speed of specific screens from 8s to 0.1s",
          "Established and documented standards for global state management within the team",
        ],
      },
    },
    {
      id: "storybook-design-system",
      title: "Storybook & Design System Implementation",
      description:
        "Built a Storybook-based design system to bridge the gap between design and development and improve productivity.",
      tags: ["React", "Storybook", "Tailwind CSS"],
      link: "#",
      github: "#",
      type: "Company Project",
      company: "BALANCE",
      period: "~2-3 weeks",
      contribution: "50%",
      icon: "🌐",
      details: {
        overview:
          "Required the introduction of a common design system due to component inconsistencies between frontend and design, and high QA overhead.",
        role: [
          "Storybook environment setup & maintenance",
          "Common component design & development",
          "Automated testing & deployment pipeline setup",
        ],
        stack: ["React", "Storybook", "Tailwind CSS"],
        features: [
          "UI Component Documentation",
          "Design System Guidelines",
          "Automated Snapshot Testing",
        ],
        problem: [
          "Reusability issues → Duplicate creation of similar components",
          "Designers found it difficult to see actual implementation results, causing communication bottlenecks",
        ],
        solution: [
          "Introduced Storybook to document UI and allow designers to verify directly",
          "Established a design system layer based on common buttons, modals, inputs, etc.",
          "Added deployment scripts and automated snapshot tests for quality control",
        ],
        achievements: [
          "Increased reuse rate of identical components → Improved development speed",
          "Simplified collaboration process with designers → Reduced QA time",
        ],
      },
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
    overview: "📌 개요",
    role: "📌 역할",
    features: "📌 주요 기능",
    problem: "⚠️ 문제 상황",
    solution: "🔧 해결 방안 및 구현 내용",
    achievements: "✅ 성과",
    problemSolving: "📌 문제 해결 및 개선",
    company: "Company",
    period: "Period",
    contribution: "Contribution",
  },
  en: {
    sectionTitle: "Featured Projects",
    sectionSubtitle:
      "Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.",
    technologies: "Technologies",
    links: "Links",
    liveDemo: "Live Demo",
    github: "GitHub",
    overview: "📌 Overview",
    role: "📌 Role",
    features: "📌 Key Features",
    problem: "⚠️ Problem",
    solution: "🔧 Solution",
    achievements: "✅ Achievements",
    problemSolving: "📌 Problem Solving",
    company: "Company",
    period: "Period",
    contribution: "Contribution",
  },
};
