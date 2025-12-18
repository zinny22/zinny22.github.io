"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProjectDetail } from "@/features/projects/components/ProjectDetail";

interface ProjectQueryModalProps {
  enabled?: boolean;
}

export function ProjectQueryModal({ enabled = true }: ProjectQueryModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectId = useMemo(() => {
    const id = searchParams?.get("project");
    return id || null;
  }, [searchParams]);

  const open = enabled && mounted && pathname === "/" && !!projectId;

  if (!open) return null;

  return (
    <Dialog
      open
      onOpenChange={(nextOpen) => {
        if (nextOpen) return;

        const next = new URLSearchParams(searchParams?.toString());
        next.delete("project");

        const qs = next.toString();
        const href = qs ? `/?${qs}#projects` : "/#projects";
        router.push(href, { scroll: false });
      }}
    >
      <DialogContent className="max-w-5xl w-[calc(100vw-2rem)] p-0 rounded-lg">
        <div className="max-h-[85vh] overflow-auto">
          <ProjectDetail
            showBackButton={false}
            projectId={projectId ?? undefined}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
