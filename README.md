# Zinny's Portfolio

Next.js 14와 Tailwind CSS로 제작된 프론트엔드 개발자 포트폴리오 웹사이트입니다.
깔끔한 디자인, 다크 모드 지원, 그리고 한국어/영어 다국어 지원을 특징으로 합니다.

🔗 **Live Demo:** [https://zinny22.github.io](https://zinny22.github.io)

## ✨ Features

- **🎨 Modern UI/UX**: Shadcn/ui와 Tailwind CSS를 활용한 심플하고 세련된 디자인
- **🌙 Dark/Light Mode**: 시스템 설정에 따른 자동 테마 감지 및 수동 토글 지원 (`next-themes`)
- **🌐 Multilingual Support**: Context API를 활용한 즉각적인 한국어/영어 전환 (Client-side i18n)
- **📱 Fully Responsive**: 모바일, 태블릿, 데스크탑에 완벽하게 대응하는 반응형 레이아웃
- **⚡ High Performance**: Next.js App Router 기반의 최적화된 성능

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (Language)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

로컬 환경에서 프로젝트를 실행하려면 아래 단계를 따르세요.

### Prerequisites

- Node.js 18.17.0 이상

### Installation

```bash
# 레포지토리 클론
git clone https://github.com/zinny22/zinny22.github.io.git

# 디렉토리 이동
cd zinny22.github.io

# 의존성 설치
npm install
# or
yarn install
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 📂 Project Structure

```
src/
├── app/              # App Router Pages
├── components/       # React Components
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Experience, etc.
│   └── ui/           # Shadcn UI Components
├── context/          # Global Context (Language, etc.)
└── lib/              # Utilities
```

## 📝 License

This project is [MIT](LICENSE) licensed.
