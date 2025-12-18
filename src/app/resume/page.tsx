"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Globe, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export default function ResumePage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      name: "Ziny",
      title: "프론트엔드 개발자",
      summary:
        "사용자 경험과 제품 완성도를 높이기 위해 문제를 정의하고, 데이터를 구조화하고, 유지보수 가능한 UI/상태 관리를 설계하는 프론트엔드 개발자입니다. Next.js/React 기반 웹 앱과 백오피스/어드민 구축 경험이 있으며, 성능 개선과 디자인 시스템 도입을 통해 팀 생산성을 높이는 일을 즐깁니다.",
      contact: {
        email: "hziny722@naver.com",
        website: "zinny-22.tistory.com",
        github: "github.com/zinny22",
      },
      sections: {
        summary: "요약",
        experience: "경력",
        activities: "활동",
        education: "학력",
        skills: "기술",
      },
      experience: [
        {
          company: "xinno - poppop",
          position: "블록체인 이커머스 어드민 개발자",
          period: "2024.07 - 현재",
          description: [
            "정산/결제 관리 어드민 구축: 필터링·집계·미리보기·CSV export 기능 구현",
            "구매확정 기준 정산 금액 및 매출 데이터 분류 API 설계/개발",
            "사내 어드민 초기 아키텍처 설계 및 Vercel 기반 CI/CD 파이프라인 구성(무중단 배포)",
            "디자인 시안 기반 랜딩 페이지 구현 및 반응형 레이아웃 설계(기여 100%)",
            "레거시 XML 기반 화면을 React/Next.js 기반으로 점진적 리팩토링",
          ],
        },
        {
          company: "BALANCE",
          position: "프론트엔드 개발자",
          period: "2022.12 - 2024.03",
          description: [
            "영양제 커머스 플랫폼 기능 개발 및 성능/SEO 개선",
            "기술적 SEO(동적 메타태그/사이트맵/구조화 데이터) 적용으로 6개월 내 월 유입 0 → 1만",
            "Storybook 기반 디자인 시스템 도입으로 UI 재사용성 강화 및 디자인 QA 시간 단축",
            "레거시 에디터를 React-Tiptap(WYSIWYG)으로 마이그레이션하여 콘텐츠 작성 UX 개선",
            "멀티 레포를 모노레포로 전환해 Backoffice/Commerce 간 라이브러리 버전 통일",
          ],
        },
        {
          company: "YOMANNA",
          position: "프론트엔드 개발자",
          period: "2022.05 - 2022.12",
          description: [
            "소셜 요리 서비스의 프론트엔드 정보 구조/컴포넌트 설계 및 주요 기능 구현",
            "아임포트(I’mport) 기반 인앱 결제 흐름 구현",
            "실시간 채팅 및 푸시 알림 기능 연동으로 사용자 리텐션 강화",
            "빠른 반복 배포 환경에서 요청 누락을 줄이기 위한 커뮤니케이션 워크플로우 정립",
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
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "shadcn/ui (Radix UI)",
        "Zustand",
        "Redux Toolkit",
        "React Query",
        "Storybook",
        "HTML5",
        "CSS/SCSS",
        "Styled Components",
        "Emotion",
      ],
      download: "PDF 다운로드",
    },
    en: {
      name: "Ziny",
      title: "Frontend Developer",
      summary:
        "A frontend developer focused on building maintainable UI and state architecture with a strong product mindset. Experienced in building Next.js/React web apps and internal admin tools, improving performance, and introducing design systems to increase team velocity.",
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
        skills: "Skills",
      },
      experience: [
        {
          company: "xinno - poppop",
          position: "Blockchain E-commerce Developer",
          period: "2024.07 - Present",
          description: [
            "Built an admin tool for settlement/payment management (filters, aggregation, previews, CSV export)",
            "Designed and developed APIs for settlement and sales data processing based on purchase confirmation",
            "Designed early-stage admin architecture and established CI/CD pipelines with Vercel (zero-downtime deployment)",
            "Implemented responsive landing pages based on design specs (100% contribution)",
            "Gradually refactored legacy XML-based screens to a React/Next.js architecture",
          ],
        },
        {
          company: "BALANCE",
          position: "Frontend Developer",
          period: "2022.12 - 2024.03",
          description: [
            "Built features for a supplement e-commerce platform and improved performance/SEO",
            "Increased monthly traffic from 0 to 10k in 6 months via technical SEO (Dynamic Meta Tags, Sitemap, structured data)",
            "Introduced a Storybook-based design system to improve UI consistency and reduce design QA time",
            "Migrated a legacy editor to React-Tiptap (WYSIWYG), improving content authoring UX",
            "Migrated from multi-repo to mono-repo and unified library versions across Backoffice and Commerce",
          ],
        },
        {
          company: "YOMANNA",
          position: "Frontend Developer",
          period: "2022.05 - 2022.12",
          description: [
            "Designed the frontend architecture and implemented core features for a social cooking app",
            "Implemented an in-app payment flow using I’mport",
            "Integrated real-time chat and push notifications for user engagement",
            "Improved team communication workflows to reduce missed requests in a fast-paced environment",
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
      skills: [
        "React",
        "Next.js",
        "React Native",
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
      ],
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
            <div className="flex flex-wrap gap-2">
              {t.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
