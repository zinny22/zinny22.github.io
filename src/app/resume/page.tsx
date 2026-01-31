"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Globe, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export default function ResumePage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      name: "장혜진",
      title: "Frontend Developer (Full-stack Scope)",
      summary:
        "프론트엔드를 넘어 서비스의 E2E(End-to-End)를 구현하는 메이커입니다. Next.js와 NestJS를 활용해 API 설계부터 DB 모델링까지 주도하며, 반복되는 비효율을 해결하기 위해 사내 자동화 도구와 어드민 시스템을 독자적으로 구축하는 데 강점이 있습니다. 사용자 경험(UX) 최적화와 비즈니스 성과를 창출하는 기술 도입에 집중합니다.",
      contact: {
        email: "hziny722@naver.com",
        website: "zinny-22.tistory.com",
        github: "github.com/zinny22",
      },
      sections: {
        summary: "Summary",
        experience: "Experience",
        activities: "Activities",
        education: "Education",
        skills: "Tech Stack",
      },
      experience: [
        {
          company: "(주)비단팝팝 | PopPop",
          position: "Frontend Developer (Full-stack Scope)",
          period: "2024.07 - 현재",
          description: [
            "Next.js(FE)와 NestJS(BE)를 활용해 서비스 통합 관리자(Admin) 시스템을 E2E로 구축",
            "초기 기획/디자인 부재 환경에서 정보 구조(IA) 설계부터 DB 모델링, API 구현까지 전 과정 주도",
            "반복되는 마케팅/운영 업무 해결을 위한 사내 자동화 도구 독자 개발 및 운영 효율 극대화",
            "Vercel 기반 자동화 CI/CD 파이프라인 구축 및 무중단 배포 환경 정립",
          ],
        },
        {
          company: "레인트 | Raint",
          position: "외주 프론트엔드 개발자",
          period: "2024.06 - 2024.12",
          description: [
            "Monolithic Context 구조 개선 및 Zustand 도입으로 불필요한 리렌더링 해결",
            "화면 렌더링 속도를 8s에서 0.1s로 약 98% 단축하여 사용자 경험 개선",
            "XML 기반 대규모 백오피스 시스템을 Modern Web(React, Next.js) 환경으로 마이그레이션",
          ],
        },
        {
          company: "밸런스 | BALANCE",
          position: "프론트엔드 개발자",
          period: "2022.12 - 2024.03",
          description: [
            "기술적 SEO(SSR, 동적 메타태그 등) 적용으로 월 자연 유입 0에서 10,000명 달성",
            "Mono-repo(Turborepo) 도입으로 코드 중복 제거 및 라이브러리 관리 효율화",
            "Storybook 기반 디자인 시스템 구축으로 디자인-개발 협업 프로세스 최적화",
            "React-Tiptap 기반 위지윅(WYSIWYG) 에디터 고도화로 콘텐츠 제작 생산성 향상",
          ],
        },
        {
          company: "요만나 | YOMANNA",
          position: "프론트엔드 개발자",
          period: "2022.05 - 2022.12",
          description: [
            "React Native 기반 소셜 요리 앱 1인 개발 및 iOS 앱 스토어 출시 전 과정 리드",
            "Redux Toolkit 상태 관리 및 Iamport 결제 모듈, FCM 푸시 알림 시스템 구축",
          ],
        },
      ],
      activities: [
        {
          name: "팀스파르타 로켓단 2기 ~ 3기",
          role: "하이퍼캐주얼 게임 제작 프로젝트",
          period: "2022.05 - 2022.07",
          description: [
            "Unity를 사용한 하이퍼캐주얼 게임 제작 경험",
            "2D와 3D 두 가지 타입의 게임 기획, 제작 및 배포 경험",
          ],
        },
        {
          name: "스파르타코딩클럽 항해99 5기",
          role: "웹 개발자 양성 부트캠프 - 프론트엔드 과정",
          period: "2022.01 - 2022.04",
          description: [
            "총 5회 팀 프로젝트 진행 (미니 프로젝트 3회, 클론 코딩, 최종 프로젝트)",
            "마지막 프로젝트에서 팀장을 맡아 팀 리딩 및 개발, 비개발군과의 협업 경험",
          ],
        },
      ],
      education: [
        {
          school: "한국방송통신대학",
          major: "컴퓨터과학과",
          period: "2025.03 - (재학중)",
          status: "",
        },
        {
          school: "대진대학교",
          major: "국제 통상학과",
          period: "2015.03 - 2020.03",
          status: "졸업",
        },
        {
          school: "쑤저우대학교",
          major: "중어중문학",
          period: "2016.03 - 2020.03",
          status: "수료",
        },
      ],
      skills: {
        Frontend: [
          "Next.js",
          "React",
          "React Native",
          "TypeScript",
          "Zustand",
          "React Query",
          "Tailwind CSS",
          "Shadcn/UI",
        ],
        "Backend & Infra": [
          "NestJS",
          "Prisma",
          "Vercel",
          "GitHub Actions",
          "Git",
          "Datadog",
        ],
        Database: ["PostgreSQL", "MySQL", "Redis", "DataGrip"],
      },
      download: "PDF 다운로드",
    },
    en: {
      name: "Ziny",
      title: "Frontend Developer (Full-stack Scope)",
      summary:
        "A maker who implements service E2E (End-to-End) beyond the frontend. I lead everything from API design to DB modeling using Next.js and NestJS, with a strength in independently building internal automation tools and admin systems to solve repetitive inefficiencies. I focus on optimizing User Experience (UX) and introducing technologies that create business results.",
      contact: {
        email: "hziny722@naver.com",
        website: "zinny-22.tistory.com",
        github: "github.com/zinny22",
      },
      sections: {
        summary: "Summary",
        experience: "Experience",
        activities: "Activities",
        education: "Education",
        skills: "Tech Stack",
      },
      experience: [
        {
          company: "(주)비단팝팝 | PopPop",
          position: "Frontend Developer (Full-stack Scope)",
          period: "2024.07 - Present",
          description: [
            "Built service integrated administrator (Admin) systems E2E using Next.js(FE) and NestJS(BE)",
            "Led the entire process from information structure design to DB modeling and API implementation in an environment without initial planning/design",
            "Independently developed internal automation tools to maximize operational efficiency for repetitive marketing/operations tasks",
            "Established a stable operating environment and zero-downtime deployment by building an automated CI/CD pipeline based on Vercel",
          ],
        },
        {
          company: "Leint | Raint",
          position: "Freelance Frontend Engineer",
          period: "2024.06 - 2024.12",
          description: [
            "Solved unnecessary re-rendering by improving monolithic context structure and introducing Zustand",
            "Improved user experience by shortening screen rendering speed from 8s to 0.1s (approx. 98% reduction)",
            "Migrated large-scale XML-based legacy back-office systems to a Modern Web environment (React, Next.js)",
          ],
        },
        {
          company: "BALANCE",
          position: "Frontend Developer",
          period: "2022.12 - 2024.03",
          description: [
            "Achieved 10,000 monthly organic traffic (0 to 10k) through technical SEO (SSR, Dynamic Meta Tags, etc.)",
            "Eliminated code duplication and improved library management efficiency by introducing Mono-repo (Turborepo)",
            "Optimized design-development collaboration by building a Storybook-based design system",
            "Improved content production productivity by advancing a React-Tiptap based WYSIWYG editor",
          ],
        },
        {
          company: "YOMANNA",
          position: "Frontend Developer",
          period: "2022.05 - 2022.12",
          description: [
            "Led the entire process of solo development and iOS App Store launch of a React Native-based social cooking app",
            "Built Redux Toolkit-based state management, Iamport payment module, and FCM push notification systems",
          ],
        },
      ],
      activities: [
        {
          name: "Team Sparta Rocket Dan 2nd ~ 3rd Batch",
          role: "Hyper-casual Game Development Project",
          period: "May 2022 - Jul 2022",
          description: [
            "Experience in creating hyper-casual games using Unity",
            "Experience in planning, developing, and deploying both 2D and 3D games",
          ],
        },
        {
          name: "Sparta Coding Club Hanghae99 5th Batch",
          role: "Web Developer Bootcamp - Frontend Course",
          period: "Jan 2022 - Apr 2022",
          description: [
            "Conducted 5 team projects (3 mini-projects, clone coding, final project)",
            "Led the team in the final project, gaining experience in team leading, development, and collaboration with non-developers",
          ],
        },
      ],
      education: [
        {
          school: "Korea National Open University",
          major: "Computer Science",
          period: "Mar 2025 - Present",
          status: "",
        },
        {
          school: "Daejin University",
          major: "International Trade",
          period: "Mar 2015 - Mar 2020",
          status: "Graduated",
        },
        {
          school: "Soochow University",
          major: "Chinese Language and Literature",
          period: "Mar 2016 - Mar 2020",
          status: "Certificate",
        },
      ],
      skills: {
        Frontend: [
          "Next.js",
          "React",
          "React Native",
          "TypeScript",
          "Zustand",
          "React Query",
          "Tailwind CSS",
          "Shadcn/UI",
        ],
        "Backend & Infra": [
          "NestJS",
          "Prisma",
          "Vercel",
          "GitHub Actions",
          "Git",
          "Datadog",
        ],
        Database: ["PostgreSQL", "MySQL", "Redis", "DataGrip"],
      },
      download: "Download PDF",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-background shadow-xl rounded-lg overflow-hidden border border-border/50">
        {/* Header Section */}
        <div className="bg-primary/5 p-8 sm:p-12 border-b border-border/50">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-[1fr_auto] gap-6">
              <div className="min-w-0">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {t.name}
                </h1>
                <p className="text-xl text-primary font-medium">{t.title}</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground justify-items-start">
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors min-w-0">
                    <Mail className="w-4 h-4 shrink-0" />
                    <a className="truncate" href={`mailto:${t.contact.email}`}>
                      {t.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors min-w-0">
                    <Globe className="w-4 h-4 shrink-0" />
                    <a
                      className="truncate"
                      href={`https://${t.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.contact.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors min-w-0 sm:col-span-2">
                    <Github className="w-4 h-4 shrink-0" />
                    <a
                      className="truncate"
                      href={`https://${t.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.contact.github}
                    </a>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-3">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border border-border/50 bg-secondary/40">
                  <Image
                    src="/assets/ziny.png"
                    alt={t.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Button
                  variant="secondary"
                  className="gap-2 print:hidden w-32 sm:w-40 justify-center h-9 text-sm"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4" />
                  {t.download}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-12">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              {t.sections.summary}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              {t.sections.experience}
            </h2>
            <div className="space-y-8">
              {t.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border/50 last:border-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <div className="text-primary font-medium mb-1">
                      {exp.company}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Activities */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              {t.sections.activities}
            </h2>
            <div className="space-y-8">
              {t.activities.map((activity, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border/50 last:border-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {activity.name}
                    </h3>
                    <div className="text-primary font-medium mb-1">
                      {activity.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.period}
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-muted-foreground">
                    {activity.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              {t.sections.education}
            </h2>
            <div className="space-y-6">
              {t.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {edu.school}
                    </h3>
                    <div className="text-muted-foreground">
                      {edu.major}{" "}
                      {edu.status && (
                        <span className="text-sm text-muted-foreground/80">
                          ({edu.status})
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-full inline-block sm:block w-fit mt-2 sm:mt-0">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              {t.sections.skills}
            </h2>
            <div className="space-y-6">
              {Object.entries(t.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(skills as string[]).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
