"use client";

import { Badge } from "@/components/ui/badge";
import { Rocket, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Activities() {
  const { language } = useLanguage();

  const activities = {
    ko: [
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
    en: [
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
  };

  const content = {
    ko: {
      title: "Activities",
      subtitle: "다양한 경험을 통해 성장했습니다.",
      label: "Activities",
    },
    en: {
      title: "Activities",
      subtitle: "I grew through various experiences.",
      label: "Activities",
    },
  };

  return (
    <section
      id="activities"
      className="relative py-24 sm:py-32 overflow-hidden bg-secondary/20"
    >
      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Rocket className="h-3 w-3 mr-2" />
            {content[language].label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-primary">Activities</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto w-full">
          {activities[language].map((activity, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      {activity.name}
                    </CardTitle>
                    <p className="text-primary font-medium text-sm">
                      {activity.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Calendar className="h-4 w-4" />
                  {activity.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary/50 flex-shrink-0" />
                      <span className="leading-tight">{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
