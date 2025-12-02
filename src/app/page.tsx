import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <div className="container pb-20">
      <Hero />

      {/* Placeholder for future sections */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
