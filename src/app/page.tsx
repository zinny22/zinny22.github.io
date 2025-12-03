import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities1";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects1";
import { Contact } from "@/components/sections/Contact1";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <div className="fixed inset-0 -z-50 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <Hero />
      <About />
      <Experience />
      <Activities />
      <Projects />
      <Contact />
    </main>
  );
}
