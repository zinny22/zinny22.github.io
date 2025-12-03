"use client";

import { Badge } from "@/components/ui/badge";
import { Rocket, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ACTIVITIES,
  ACTIVITIES_CONTENT,
} from "@/features/activities/constants/activities-data";

export function Activities() {
  const { language } = useLanguage();
  const activities = ACTIVITIES[language];
  const content = ACTIVITIES_CONTENT[language];

  return (
    <section
      id="activities"
      className="relative py-24 sm:py-32 overflow-hidden bg-secondary/20"
    >
      <div className="container flex flex-col gap-12">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <Rocket className="h-3 w-3 mr-2" />
            {content.label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-primary">Activities</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-6 tablet:grid-cols-2 max-w-5xl mx-auto w-full">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      {activity.name}
                    </CardTitle>
                    <p className="text-primary font-medium text-sm">
                      {activity.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Calendar className="h-4 w-4" />
                  {activity.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary/50 flex-shrink-0" />
                      <span className="leading-tight">{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
