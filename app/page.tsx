import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Changelog from "@/components/changelog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Harsha Tummalapalli | Software Development Engineer",
  description:
    "Portfolio of Harsha Tummalapalli, a Software Development Engineer specializing in full-stack development, scalable systems architecture, and modern web technologies.",
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
      <Changelog />
    </div>
  )
}
