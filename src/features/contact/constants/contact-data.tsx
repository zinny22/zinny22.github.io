import { BookOpen, Github, Linkedin, Mail } from "lucide-react";

export const CONTACT_CONTENT = {
  ko: {
    label: "Contact",
    titlePrefix: "함께",
    titleHighlight: "이야기 해볼까요?",
    description: "현재 새로운 기회를 찾고 있습니다.",
    subDescription:
      "새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 언제든 연락주세요!",
    constacts: [
      {
        url: "https://github.com/zinny22",
        title: "github.com/zinny22",
        description: "프로젝트 코드 보기",
        icon: <Github className="w-6 h-6" />,
      },
      {
        url: "https://www.linkedin.com/in/%ED%98%9C%EC%A7%84-%EC%9E%A5-10893b237/",
        title: "LinkedIn Profile",
        description: "링크드인 확인하기",
        icon: <Linkedin className="w-6 h-6" />,
      },
      {
        url: "https://zinny-22.tistory.com/",
        title: "zinny22.tistory.com",
        description: "티스토리 방문하기",
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        url: "hziny722@naver.com",
        title: "hziny722@naver.com",
        description: "이메일로 문의하기",
        icon: <Mail className="w-6 h-6" />,
      },
    ],
  },
  en: {
    label: "Contact",
    titlePrefix: "Let's Chat",
    titleHighlight: "Together",
    description:
      "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!",
    subDescription: "",
    constacts: [
      {
        url: "https://github.com/zinny22",
        title: "github.com/zinny22",
        description: "View project code",
        icon: <Github className="w-6 h-6" />,
      },
      {
        url: "https://www.linkedin.com",
        title: "LinkedIn Profile",
        description: "Check career information",
        icon: <Linkedin className="w-6 h-6" />,
      },
      {
        url: "https://zinny22.tistory.com",
        title: "zinny22.tistory.com",
        description: "Visit development blog",
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        url: "hziny722@naver.com",
        title: "hziny722@naver.com",
        description: "Contact by email",
        icon: <Mail className="w-6 h-6" />,
      },
    ],
  },
};
