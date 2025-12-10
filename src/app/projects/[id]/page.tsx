import { PROJECTS } from "@/features/projects/constants/project-data";
import { ProjectDetail } from "@/features/projects/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.ko.map((project) => ({
    id: project.id || "not-found",
  }));
}

export default function ProjectPage() {
  return <ProjectDetail />;
}
