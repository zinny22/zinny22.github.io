"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Github, Mail, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { CONTACT_CONTENT } from "@/features/contact/constants/contact-data";

export function Contact() {
  const { language } = useLanguage();
  const content = CONTACT_CONTENT[language];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid gap-12 tablet:grid-cols-2 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium sm:text-sm sm:px-3 sm:py-1 bg-secondary text-secondary-foreground w-fit">
              <MessageSquare className="h-3 w-3 mr-2" />
              {content.label}
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {content.titlePrefix}{" "}
              <span className="text-primary">{content.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md sm:text-xl">
              {content.description}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:hziny722@naver.com">
                  <Mail className="h-4 w-4" /> {content.button}
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon">
                  <Link
                    href="https://github.com/zinny22"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link
                    href="https://zinny-22.tistory.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="sr-only">Tistory Blog</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Decorative blobs */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-full bg-point/20 blur-3xl"></div>

            <Card className="relative w-full max-w-md bg-card/50 backdrop-blur-sm border-muted/50">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{content.cardTitle}</h3>
                  <p className="text-sm text-muted-foreground">
                    {content.cardDescription}
                  </p>
                </div>
                <div className="w-full p-4 rounded-lg bg-muted/50 text-sm font-mono text-left break-all">
                  hziny722@naver.com
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
