import { PROJECTS } from "@/features/projects/constants/project-data";
import { ProjectDetail } from "@/features/projects/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.ko.map((project) => ({
    id: project.id || "not-found",
  }));
}

export default function ProjectPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <div className="fixed inset-0 -z-50 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <ProjectDetail />
    </main>
  );
}
