import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container max-w-5xl">
        <div className="grid gap-12 tablet:grid-cols-2 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground w-fit">
              <MessageSquare className="h-3 w-3 mr-2" />
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground md:text-xl leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to say hi, I'll try my best
              to get back to you!
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:contact@example.com">
                  <Mail className="h-4 w-4" /> Say Hello
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
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
                  <h3 className="text-xl font-bold">Send me a message</h3>
                  <p className="text-sm text-muted-foreground">
                    I usually respond within 24 hours
                  </p>
                </div>
                <div className="w-full p-4 rounded-lg bg-muted/50 text-sm font-mono text-left break-all">
                  contact@example.com
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
