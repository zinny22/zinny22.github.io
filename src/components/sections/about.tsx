import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Layout,
  Sparkles,
  Terminal,
  User2,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Git",
  "Figma",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Side: Visual/Stats Card */}
        <div className="relative flex justify-center">
          {/* Decorative blobs */}
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-point/20 blur-3xl"></div>

          <Card className="relative w-full max-w-md overflow-hidden border-muted/50 bg-card/50 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-point"></div>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <Terminal className="h-4 w-4" />
                  <span>whoami</span>
                </div>
                <h3 className="text-2xl font-bold">Zinny</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>

              <div className="space-y-4">
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
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
              <User2 className="h-3 w-3 mr-2" />
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Turning Complex Problems into{" "}
              <span className="text-primary">Simple Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Zinny, a frontend developer with a passion for creating
              intuitive and dynamic user experiences. I specialize in building
              modern web applications using the latest technologies.
              <br />
              <br />I love solving complex problems and turning ideas into
              reality through code. When I'm not coding, you can find me
              exploring new design trends or learning about the latest
              advancements in web development.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Database className="h-5 w-5" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-md py-2 px-4 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
