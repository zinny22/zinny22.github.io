import { ReactNode } from "react";

export interface AboutContent {
  title: ReactNode;
  description: ReactNode;
}

export const SKILLS = [
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

// Note: Since title and description contain JSX, we might need to handle this differently
// if we want strict separation of data and view.
// However, for now, we can export functions or objects that return these strings/nodes,
// or just keep the text in constants and the JSX structure in the component.
// The current implementation has JSX in the content object.
// To follow "pure data" in constants, we should move the strings here.

export const ABOUT_TEXTS = {
  ko: {
    titlePrefix: "Turning Complex Problems into",
    titleHighlight: "Simple Solutions",
    description: `작은 규모의 스타트업에서 기획부터 배포까지 전 단계에 참여하며 성장했습니다.
더 좋은 사용자 경험을 제공하기 위해 고민하고, 토론하는 것을 좋아합니다.

한 줄의 코드를 작성하더라도 의미 있는 코드를 작성하는 것을 중요하게 생각합니다.
새로운 도전을 즐기며, 밝은 에너지로 팀을 감싸며 아름다운 인터페이스를 만드는 것을 좋아합니다.`,
  },
  en: {
    titlePrefix: "Turning Complex Problems into",
    titleHighlight: "Simple Solutions",
    description: `I have grown by participating in all stages from planning to deployment in small-scale startups.
I enjoy thinking about and discussing ways to provide better user experiences.

I believe in writing meaningful code, even if it's just a single line.
I enjoy taking on new challenges, surrounding the team with bright energy, and creating beautiful interfaces.`,
  },
};
