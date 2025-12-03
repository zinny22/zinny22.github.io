"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { HERO_CONTENT } from "@/features/hero/constants/hero-data";

export function Hero() {
  const { language } = useLanguage();
  const content = HERO_CONTENT[language];

  const [typedPrefix, setTypedPrefix] = useState("");
  const [typedHighlight1, setTypedHighlight1] = useState("");
  const [typedMiddle, setTypedMiddle] = useState("");
  const [typedHighlight2, setTypedHighlight2] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [isCodeTyping, setIsCodeTyping] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const fullCode = `const ziny = {\n  role: "Frontend Developer",\n  skills: ["React", "Next.js", "Nest.js"],\n  passion: true,\n  code: () => {\n    return "High Quality Web";\n  },\n}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 768px)");
    const update = (matches: boolean) => setIsTablet(matches);

    update(mql.matches);

    const handler = (e: MediaQueryListEvent) => update(e.matches);
    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    // On tablet and above, title is static (no typing)
    const prefix = content.titlePrefix;
    const highlight1 = content.titleHighlight1;
    const middle = content.titleMiddle;
    const highlight2 = content.titleHighlight2;

    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setTypedPrefix(prefix);
      setTypedHighlight1(highlight1);
      setTypedMiddle(middle);
      setTypedHighlight2(highlight2);
      setIsTyping(false);
      return;
    }

    setTypedPrefix("");
    setTypedHighlight1("");
    setTypedMiddle("");
    setTypedHighlight2("");
    setIsTyping(true);

    const totalLength =
      prefix.length +
      1 +
      highlight1.length +
      1 +
      middle.length +
      1 +
      highlight2.length;

    let index = 0;

    const interval = setInterval(() => {
      index += 1;

      const prefixEnd = Math.min(index, prefix.length);
      const afterPrefix = Math.max(index - prefix.length - 1, 0);

      const highlight1End = Math.min(afterPrefix, highlight1.length);
      const afterHighlight1 = Math.max(afterPrefix - highlight1.length - 1, 0);

      const middleEnd = Math.min(afterHighlight1, middle.length);
      const afterMiddle = Math.max(afterHighlight1 - middle.length - 1, 0);

      const highlight2End = Math.min(afterMiddle, highlight2.length);

      setTypedPrefix(prefix.slice(0, prefixEnd));
      setTypedHighlight1(highlight1.slice(0, highlight1End));
      setTypedMiddle(middle.slice(0, middleEnd));
      setTypedHighlight2(highlight2.slice(0, highlight2End));

      if (index >= totalLength) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [
    content.titlePrefix,
    content.titleHighlight1,
    content.titleMiddle,
    content.titleHighlight2,
  ]);

  useEffect(() => {
    // Character-by-character typing for code block on tablet and above
    if (!isTablet) {
      setTypedCode(fullCode);
      setIsCodeTyping(false);
      return;
    }

    setTypedCode("");
    setIsCodeTyping(true);

    let index = 0;
    const speed = 30;

    const id = setInterval(() => {
      index += 1;
      setTypedCode(fullCode.slice(0, index));

      if (index >= fullCode.length) {
        clearInterval(id);
        setIsCodeTyping(false);
      }
    }, speed);

    return () => {
      clearInterval(id);
    };
  }, [language, fullCode, isTablet]);

  return (
    <div className="container w-full min-h-[60vh] grid gap-12 tablet:grid-cols-2 items-center justify-center overflow-hidden pt-20 pb-10 md:pt-32 md:pb-16">
      <div className="flex flex-col items-start text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium sm:text-sm sm:px-3 sm:py-1 bg-secondary text-secondary-foreground gap-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse whitespace-nowrap" />
          <p>{content.status}</p>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl min-h-[72px] transition-all">
          <span className="block pb-1">
            {typedPrefix}{" "}
            <span className="text-primary">{typedHighlight1}</span>
          </span>
          <span className="block">
            {typedMiddle} <span className="text-point">{typedHighlight2}</span>
          </span>
        </h1>

        <p className="max-w-[600px] text-muted-foreground text-base sm:text-xl">
          {content.descriptionPrefix}
          <span className="font-semibold text-foreground px-2">
            {content.name}
          </span>
          {content.descriptionSuffix}
        </p>

        <div className="flex flex-col sm:flex-row tablet:w-fit w-full gap-4 pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/resume">
              <ArrowRight className="h-4 w-4" />
              {content.viewResume}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://github.com/zinny22" target="_blank">
              <Github className="h-4 w-4" /> {content.githubProfile}
            </Link>
          </Button>
        </div>
      </div>

      <div className="hidden tablet:flex justify-center relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        <div className="absolute right-10 -top-0 h-24 w-24 rounded-xl bg-point/30 blur-2xl" />
        <div className="absolute -left-0 -bottom-0 h-24 w-24 rounded-xl bg-primary/20 blur-2xl" />

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
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-white">
            {isCodeTyping ? (
              <pre className="whitespace-pre text-left text-muted-foreground">
                {typedCode}
                <span className="inline-block w-[1px] h-[1em] align-middle bg-foreground animate-pulse" />
              </pre>
            ) : (
              <>
                <div className="text-muted-foreground">
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-blue-500">ziny</span>{" "}
                  <span className="text-purple-500">=</span>{" "}
                  <span className="text-yellow-500">{"{"}</span>
                </div>
                <div className="pl-4">
                  role:{" "}
                  <span className="text-green-500">"Frontend Developer"</span>,
                </div>
                <div className="pl-4">
                  skills: <span className="text-yellow-500">["</span>
                  <span className="text-green-500">React</span>
                  <span className="text-yellow-500">", "</span>
                  <span className="text-green-500">Next.js</span>
                  <span className="text-yellow-500">", "</span>
                  <span className="text-green-500">Nest.js</span>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
