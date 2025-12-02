import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Laptop, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="container grid gap-12 tablet:grid-cols-2 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building <span className="text-primary">Digital</span> <br />
            Experiences That <span className="text-point">Matter</span>
          </h1>

          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Hi, I'm <span className="font-semibold text-foreground">Zinny</span>
            . I craft accessible, pixel-perfect, and performant web experiences
            using modern frontend technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://github.com/zinny22" target="_blank">
                <Github className="h-4 w-4" /> Github Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Code Visualization */}
        <div className="hidden tablet:flex justify-center relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          {/* Decorative elements behind the card */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl bg-point/20 blur-2xl"></div>
          <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-xl bg-primary/20 blur-2xl"></div>

          <div className="w-full max-w-md rounded-xl border bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/50">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 opacity-50">
                <Terminal className="h-3 w-3" />
                <span className="text-xs font-mono">developer.tsx</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-muted-foreground">
                <span className="text-purple-500">const</span>{" "}
                <span className="text-blue-500">Zinny</span>{" "}
                <span className="text-purple-500">=</span>{" "}
                <span className="text-yellow-500">{"{"}</span>
              </div>
              <div className="pl-4">
                role: <span className="text-green-500">"Frontend Dev"</span>,
              </div>
              <div className="pl-4">
                skills: <span className="text-yellow-500">["</span>
                <span className="text-green-500">React</span>
                <span className="text-yellow-500">", "</span>
                <span className="text-green-500">Next.js</span>
                <span className="text-yellow-500">", "</span>
                <span className="text-green-500">TypeScript</span>
                <span className="text-yellow-500">"]</span>,
              </div>
              <div className="pl-4">
                passion: <span className="text-purple-500">true</span>,
              </div>
              <div className="pl-4">
                code: <span className="text-purple-500">()</span>{" "}
                <span className="text-purple-500">=&gt;</span>{" "}
                <span className="text-yellow-500">{"{"}</span>
              </div>
              <div className="pl-8">
                <span className="text-purple-500">return</span>{" "}
                <span className="text-green-500">"High Quality Web"</span>;
              </div>
              <div className="pl-4 text-yellow-500">{"}"}</div>
              <div className="text-yellow-500">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
