export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  type: string;
  imageUrl?: string;
  icon?: string;
  company?: string;
  period?: string;
  contribution?: string;
  details?: {
    overview: string;
    role: string[];
    stack: string[];
    features: string[];
    problemSolving?: string[];
    achievements: string[];
    problem?: string[];
    solution?: string[];
  };
}

export interface ProjectContent {
  sectionTitle: string;
  sectionSubtitle: string;
  technologies: string;
  links: string;
  liveDemo: string;
  github: string;
  overview: string;
  role: string;
  features: string;
  problem: string;
  solution: string;
  achievements: string;
  problemSolving: string;
  company: string;
  period: string;
  contribution: string;
}
