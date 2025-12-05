"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { CONTACT_CONTENT } from "@/features/contact/constants/contact-data";
import { Card } from "@/components/ui/card";

export function Contact() {
  const { language } = useLanguage();
  const content = CONTACT_CONTENT[language];

  return (
    <section
      id="contact"
      className="relative py-24 tablet:py-32 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 text-center flex flex-col items-center pb-9">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
            <MessageSquare className="h-3 w-3 mr-2" />
            {content.label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter tablet:text-4xl laptop:text-5xl">
            {content.titlePrefix}{" "}
            <span className="text-primary">{content.titleHighlight}</span>
          </h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground laptop:text-xl">
            <p>{content.description}</p>
            <p>{content.subDescription}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 grid-cols-1 tablet:grid-cols-2">
          {content.constacts.map((contact) => (
            <Link
              key={contact.title}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="flex items-center gap-4 p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0 text-muted-foreground group-hover:text-primary">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                    {contact.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {contact.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
