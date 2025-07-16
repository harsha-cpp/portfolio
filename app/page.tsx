import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Harsha Tummalapalli | UX Designer & Researcher",
  description:
    "Portfolio of Harsha Tummalapalli, a User Experience Designer and UX Researcher specializing in user-centered design, prototyping, and frontend development.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
