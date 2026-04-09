import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Changelog from "@/components/changelog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Harsha Tummalapalli | Software Development Engineer",
  description:
    "Harsha Tummalapalli — Full-stack engineer. TypeScript, Go, PostgreSQL, AWS, Azure. Founder & CTO at Memolane.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
      <Changelog />
    </div>
  )
}
