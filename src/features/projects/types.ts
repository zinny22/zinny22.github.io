export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  type: string;
  imageUrl?: string;
  details?: {
    overview: string;
    role: string[];
    stack: string[];
    features: string[];
    problemSolving: string[];
    achievements: string[];
  };
}

export interface ProjectContent {
  sectionTitle: string;
  sectionSubtitle: string;
  technologies: string;
  links: string;
  liveDemo: string;
  github: string;
}
