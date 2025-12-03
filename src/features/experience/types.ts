export interface ExperienceProject {
  title: string;
  period?: string;
  contribution?: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  summary: string;
  projects: ExperienceProject[];
  skills: string[];
  url?: string;
}

export interface ExperienceContent {
  title: string;
  subtitle: string;
  keyAchievements: string;
}
