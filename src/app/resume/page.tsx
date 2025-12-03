"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Globe, Github, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function ResumePage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      name: "Zinny",
      title: "Frontend Developer",
      summary:
        "작은 규모의 스타트업에서 기획부터 배포까지 전 단계에 참여하며 성장했습니다. 더 좋은 사용자 경험을 제공하기 위해 고민하고, 토론하는 것을 좋아합니다. 한 줄의 코드를 작성하더라도 의미 있는 코드를 작성하는 것을 중요하게 생각합니다. 새로운 도전을 즐기며, 밝은 에너지로 팀을 감싸며 아름다운 인터페이스를 만드는 것을 좋아합니다.",
      contact: {
        email: "hziny722@naver.com",
        website: "zinny-22.tistory.com",
        github: "github.com/zinny22",
      },
      experience: [
        {
          company: "xinno - poppop",
          position: "Blockchain E-commerce Developer",
          period: "2024.07 - 현재",
          description: [
            "정산 및 결제 관리 시스템을 구현하고 초기 어드민 시스템 아키텍처를 구축했습니다.",
            "구매확정 기준 정산 금액 및 매출 데이터 분류 API 설계 및 개발",
            "사내 어드민 시스템 초기 아키텍처 구축 및 Vercel 기반 CI/CD 파이프라인 구성 (무중단 배포)",
            "디자인 시안 기반 랜딩 페이지 구현 및 반응형 레이아웃 설계 (기여도 100%)",
            "기존 XML 기반 코드를 React/Next.js 기반으로 리팩토링",
          ],
        },
        {
          company: "BALANCE",
          position: "Frontend Developer",
          period: "2022.12 - 2024.03",
          description: [
            "영양제 커머스 플랫폼을 개발하고 SEO 최적화 및 디자인 시스템 도입을 주도했습니다.",
            "기술적 SEO(동적 메타태그, 사이트맵 등) 적용으로 6개월 만에 월 유입 0에서 1만으로 증가",
            "Storybook 및 디자인 시스템 도입으로 개발 속도 향상 및 디자인 QA 시간 단축",
            "기존 에디터를 React-Tiptap(위지위그)으로 마이그레이션하여 콘텐츠 퀄리티 향상",
            "멀티 레포 구조를 모노 레포로 전환하여 Backoffice와 Commerce 간 라이브러리 버전 통일",
          ],
        },
        {
          company: "YOMANNA",
          position: "Frontend Developer",
          period: "2022.05 - 2022.12",
          description: [
            "소셜 요리 애플리케이션의 프론트엔드 전체 설계를 담당하고 주요 기능을 구현했습니다.",
            "아임포트(I'mport)를 활용한 앱 내 결제 시스템 구현",
            "유저 참여 유도를 위한 실시간 채팅 및 푸시 알림 시스템 구현",
            "스타트업 환경에 맞는 효율적인 커뮤니케이션 워크플로우 정립 및 요청 누락 방지",
          ],
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
      download: "PDF 다운로드",
    },
    en: {
      name: "Zinny",
      title: "Frontend Developer",
      summary:
        "I have grown by participating in all stages from planning to deployment in small-scale startups. I enjoy thinking about and discussing ways to provide better user experiences. I believe in writing meaningful code, even if it's just a single line. I enjoy taking on new challenges, surrounding the team with bright energy, and creating beautiful interfaces.",
      contact: {
        email: "hziny722@naver.com",
        website: "zinny-22.tistory.com",
        github: "github.com/zinny22",
      },
      experience: [
        {
          company: "xinno - poppop",
          position: "Blockchain E-commerce Developer",
          period: "2024.07 - Present",
          description: [
            "Implemented settlement & payment management systems and built the initial admin system architecture from scratch.",
            "Designed and developed APIs for settlement and sales data processing based on purchase confirmation",
            "Built early-stage admin system architecture and established CI/CD pipelines with Vercel for zero-downtime deployment",
            "Developed landing pages and implemented responsive UI (100% contribution)",
            "Refactored legacy XML-based code to React/Next.js based architecture",
          ],
        },
        {
          company: "BALANCE",
          position: "Frontend Developer",
          period: "2022.12 - 2024.03",
          description: [
            "Developed a supplement e-commerce platform. Focused on SEO optimization and design system implementation.",
            "Increased monthly traffic from 0 to 10k in 6 months through technical SEO (Dynamic Meta Tags, Sitemap, JSON-LD)",
            "Introduced Storybook and design system, improving development speed and reducing design QA time",
            "Migrated legacy editor to React-Tiptap (WYSIWYG), enhancing content quality and SEO",
            "Transitioned multi-repo structure to Mono-repo, unifying library versions between Backoffice and Commerce",
          ],
        },
        {
          company: "YOMANNA",
          position: "Frontend Developer",
          period: "2022.05 - 2022.12",
          description: [
            "Designed and developed the entire frontend for a social cooking application from scratch.",
            "Implemented in-app payment system using I'mport",
            "Developed chat features and push notification systems for user engagement",
            "Established efficient communication workflows to prevent request loss in a fast-paced startup environment",
          ],
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {t.name}
              </h1>
              <p className="text-xl text-primary font-medium">{t.title}</p>
            </div>
            <Button
              className="shrink-0 gap-2 print:hidden"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4" />
              {t.download}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <BookOpen className="w-4 h-4" />
              <a
                href={`https://${t.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.website}
              </a>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
              <a
                href={`https://${t.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.github}
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-12">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              Experience
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

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full inline-block"></span>
              Skills
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
