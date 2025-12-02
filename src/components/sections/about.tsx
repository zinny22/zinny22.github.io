"use client";

import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layout,
  Sparkles,
  Terminal,
  User2,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const skills = [
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
];

export function About() {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: (
        <>
          Turning Complex Problems into{" "}
          <span className="text-primary">Simple Solutions</span>
        </>
      ),
      description: (
        <>
          작은 규모의 스타트업에서 기획부터 배포까지 전 단계에 참여하며
          성장했습니다.
          <br />
          더 좋은 사용자 경험을 제공하기 위해 고민하고, 토론하는 것을
          좋아합니다.
          <br />
          <br />
          한 줄의 코드를 작성하더라도 의미 있는 코드를 작성하는 것을 중요하게
          생각합니다.
          <br />
          새로운 도전을 즐기며, 밝은 에너지로 팀을 감싸며 아름다운 인터페이스를
          만드는 것을 좋아합니다.
        </>
      ),
    },
    en: {
      title: (
        <>
          Turning Complex Problems into{" "}
          <span className="text-primary">Simple Solutions</span>
        </>
      ),
      description: (
        <>
          I have grown by participating in all stages from planning to
          deployment in small-scale startups.
          <br />
          I enjoy thinking about and discussing ways to provide better user
          experiences.
          <br />
          <br />
          I believe in writing meaningful code, even if it's just a single line.
          <br />I enjoy taking on new challenges, surrounding the team with
          bright energy, and creating beautiful interfaces.
        </>
      ),
    },
  };

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container grid gap-12 lg:grid-cols-2 items-center w-full">
        {/* Left Side: Visual/Stats Card */}
        <div className="relative flex justify-center w-full max-w-md">
          {/* Decorative blobs */}
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-point/20 blur-3xl"></div>

          <div className="relative w-full !max-w-md overflow-hidden rounded-xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-point"></div>
            <div className="p-8 space-y-8">
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
                  <Terminal className="h-4 w-4" />
                  <span>whoami</span>
                </div>
                <h3 className="text-2xl font-bold">Zinny</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Code2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Clean Code</p>
                    <p className="text-xs text-muted-foreground">
                      Maintainable & Scalable
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Layout className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Responsive Design</p>
                    <p className="text-xs text-muted-foreground">
                      Mobile-First Approach
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-md bg-background">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Modern UI/UX</p>
                    <p className="text-xs text-muted-foreground">
                      Interactive Experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8 min-w-0">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
              <User2 className="h-3 w-3 mr-2" />
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {content[language].title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {content[language].description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Database className="h-5 w-5" /> Tech Stack
            </h3>

            {/* Mobile View: Static Grid */}
            <div className="flex flex-wrap gap-2 md:hidden">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Desktop View: Animated Scroll */}
            <div className="relative hidden w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:flex md:shadow-xl">
              <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
                <div className="flex w-max animate-scroll flex-nowrap gap-4 py-4 hover:[animation-play-state:paused]">
                  {[...skills, ...skills].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-md py-2 px-4 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-default whitespace-nowrap"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
