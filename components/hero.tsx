"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="pt-4 pb-12 md:pt-8 md:pb-20 flex items-center min-h-[75vh] relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-4">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-left">
                <span className="font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap italic" style={{color: 'hsl(0 65% 55%)'}}>Harsha Tummalapalli</span>
                <br />
                User Experience Designer
                <br />
                UX Researcher
                <br />
                Jr Frontend Developer
              </h1>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Passionate about crafting <span className="cursive-text">clean</span>, <span className="cursive-text">responsive</span>, and{" "}
                <span className="cursive-text">user-friendly interfaces</span>. His strengths lie in <span className="cursive-text">UX research</span>,{" "}
                <span className="cursive-text">wireframing</span>, <span className="cursive-text">prototyping</span>, and{" "}
                <span className="cursive-text">visual storytelling</span>. He brings a{" "}
                <span className="cursive-text">design-thinking approach</span> to every project, ensuring that{" "}
                <span className="cursive-text">user needs</span> guide aesthetic and functional decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="btn-primary rounded-full px-8 text-base">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="https://github.com/harsha-cpp" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="https://www.linkedin.com/in/sri-harsha-tummalapalli/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact@harshatummalapalli.tech" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
