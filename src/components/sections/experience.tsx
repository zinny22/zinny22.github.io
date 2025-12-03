"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const { language } = useLanguage();

  const experiences = {
    ko: [
      {
        company: "xinno - poppop",
        position: "Blockchain E-commerce Developer",
        period: "2024.07 - 현재",
        description:
          "정산 및 결제 관리 시스템을 구현하고 초기 어드민 시스템 아키텍처를 구축했습니다.",
        achievements: [
          "구매확정 기준 정산 금액 및 매출 데이터 분류 API 설계 및 개발",
          "사내 어드민 시스템 초기 아키텍처 구축 및 Vercel 기반 CI/CD 파이프라인 구성 (무중단 배포)",
          "디자인 시안 기반 랜딩 페이지 구현 및 반응형 레이아웃 설계 (기여도 100%)",
          "기존 XML 기반 코드를 React/Next.js 기반으로 리팩토링",
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
        company: "BALANCE",
        position: "Frontend Developer",
        period: "2022.12 - 2024.03",
        description:
          "영양제 커머스 플랫폼을 개발하고 SEO 최적화 및 디자인 시스템 도입을 주도했습니다.",
        achievements: [
          "기술적 SEO(동적 메타태그, 사이트맵 등) 적용으로 6개월 만에 월 유입 0에서 1만으로 증가",
          "Storybook 및 디자인 시스템 도입으로 개발 속도 향상 및 디자인 QA 시간 단축",
          "기존 에디터를 React-Tiptap(위지위그)으로 마이그레이션하여 콘텐츠 퀄리티 향상",
          "멀티 레포 구조를 모노 레포로 전환하여 Backoffice와 Commerce 간 라이브러리 버전 통일",
        ],
        skills: [
          "Next.js",
          "React",
          "Storybook",
          "Tailwind CSS",
          "React-Tiptap",
        ],
      },
      {
        company: "YOMANNA",
        position: "Frontend Developer",
        period: "2022.05 - 2022.12",
        description:
          "소셜 요리 애플리케이션의 프론트엔드 전체 설계를 담당하고 주요 기능을 구현했습니다.",
        achievements: [
          "아임포트(I'mport)를 활용한 앱 내 결제 시스템 구현",
          "유저 참여 유도를 위한 실시간 채팅 및 푸시 알림 시스템 구현",
          "스타트업 환경에 맞는 효율적인 커뮤니케이션 워크플로우 정립 및 요청 누락 방지",
        ],
        skills: [
          "React.js",
          "Next.js",
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
        description:
          "Implemented settlement & payment management systems and built the initial admin system architecture from scratch.",
        achievements: [
          "Designed and developed APIs for settlement and sales data processing based on purchase confirmation",
          "Built early-stage admin system architecture and established CI/CD pipelines with Vercel for zero-downtime deployment",
          "Developed landing pages and implemented responsive UI (100% contribution)",
          "Refactored legacy XML-based code to React/Next.js based architecture",
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
        company: "BALANCE",
        position: "Frontend Developer",
        period: "2022.12 - 2024.03",
        description:
          "Developed a supplement e-commerce platform. Focused on SEO optimization and design system implementation.",
        achievements: [
          "Increased monthly traffic from 0 to 10k in 6 months through technical SEO (Dynamic Meta Tags, Sitemap, JSON-LD)",
          "Introduced Storybook and design system, improving development speed and reducing design QA time",
          "Migrated legacy editor to React-Tiptap (WYSIWYG), enhancing content quality and SEO",
          "Transitioned multi-repo structure to Mono-repo, unifying library versions between Backoffice and Commerce",
        ],
        skills: [
          "Next.js",
          "React",
          "Storybook",
          "Tailwind CSS",
          "React-Tiptap",
        ],
      },
      {
        company: "YOMANNA",
        position: "Frontend Developer",
        period: "2022.05 - 2022.12",
        description:
          "Designed and developed the entire frontend for a social cooking application from scratch.",
        achievements: [
          "Implemented in-app payment system using I'mport",
          "Developed chat features and push notification systems for user engagement",
          "Established efficient communication workflows to prevent request loss in a fast-paced startup environment",
        ],
        skills: [
          "React.js",
          "Next.js",
          "React Native",
          "Redux Toolkit",
          "Styled-components",
        ],
      },
    ],
  };

  const content = {
    ko: {
      title: "Work History",
      subtitle: "저의 경력과 함께 성장한 회사들입니다.",
      keyAchievements: "주요 성과",
    },
    en: {
      title: "Work History",
      subtitle:
        "My professional journey and the companies I've had the privilege to work with.",
      keyAchievements: "Key Achievements",
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Briefcase className="h-3 w-3 mr-2" />
            Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work <span className="text-primary">History</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content[language].subtitle}
          </p>
        </div>

        <div className="w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-10">
          <Accordion type="single" collapsible className="w-full">
            {experiences[language].map((exp, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 last:border-0"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col w-full pr-4 text-left gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full justify-between">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {exp.position}
                          </h3>
                          <p className="text-muted-foreground font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit whitespace-nowrap ml-16 sm:ml-0">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-16 text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-0 sm:pl-[4.5rem] space-y-6 pb-6">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                        {content[language].keyAchievements}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
