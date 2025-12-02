import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    period: "2021 - Present",
    description:
      "Leading the frontend team in building scalable web applications. Focusing on performance optimization and developer experience.",
    achievements: [
      "Improved core web vitals by 40% through code splitting and image optimization",
      "Established a component library used by 5+ different products",
      "Mentored 3 junior developers to senior level",
      "Led the migration from legacy React class components to functional components with Hooks",
    ],
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "Jest"],
  },
  {
    company: "Creative Agency",
    position: "Frontend Developer",
    period: "2019 - 2021",
    description:
      "Collaborated with designers to implement pixel-perfect UIs for various high-profile clients.",
    achievements: [
      "Developed award-winning marketing sites with complex animations using GSAP",
      "Reduced client feedback cycles by 30% through improved prototyping workflows",
      "Implemented accessibility features to meet WCAG 2.1 AA standards",
    ],
    skills: ["Vue.js", "SCSS", "JavaScript", "GSAP", "Figma"],
  },
  {
    company: "StartUp Hub",
    position: "Junior Developer",
    period: "2018 - 2019",
    description:
      "Assisted in developing the MVP for a fintech product. Maintained legacy code and fixed bugs.",
    achievements: [
      "Built the initial dashboard UI using React and Redux",
      "Integrated 3rd party payment gateways (Stripe, PayPal)",
      "Participated in daily standups and bi-weekly sprint planning",
    ],
    skills: ["React", "Redux", "CSS3", "Git"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Briefcase className="h-3 w-3 mr-2" />
            Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work <span className="text-primary">History</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and the companies I've had the privilege to
            work with.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-10">
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((exp, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 last:border-0"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col w-full pr-4 text-left gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full justify-between">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {exp.position}
                          </h3>
                          <p className="text-muted-foreground font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit whitespace-nowrap ml-16 sm:ml-0">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-16 text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-0 sm:pl-[4.5rem] space-y-6 pb-6">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Key
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
