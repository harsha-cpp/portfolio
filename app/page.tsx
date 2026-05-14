import Hero from "@/components/hero"
import Experience from "@/components/experience"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Harsha Tummalapalli",
  description:
    "Harsha Tummalapalli | Full-stack engineer. TypeScript, Go, PostgreSQL, AWS, Azure.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}
