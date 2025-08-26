"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="pt-4 pb-12 md:pt-8 md:pb-20 flex items-center min-h-[75vh] relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-full 2xl:px-8">
          <div className="space-y-4">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-left">
                <motion.span 
                  className="font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap font-funnel-display cursor-pointer inline-block"
                  style={{color: 'hsl(0 65% 55%)'}}
                  whileHover={{
                    scale: 1.01,
                    letterSpacing: "0.02em",
                    color: 'hsl(0 70% 60%)',
                    textShadow: '0 0 30px hsl(0 65% 55% / 0.3)'
                  }}
                  transition={{ 
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                >
                  Harsha Tummalapalli
                </motion.span>
                <br />
                Software Development Engineer
                <br />
                Frontend Developer
                <br />
                UI/UX Developer
              </h1>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Passionate about building <span className="cursive-text">scalable</span>, <span className="cursive-text">efficient</span>, and{" "}
                <span className="cursive-text">robust software solutions</span>. His strengths lie in <span className="cursive-text">system design</span>,{" "}
                <span className="cursive-text">full-stack development</span>, <span className="cursive-text">performance optimization</span>, and{" "}
                <span className="cursive-text">clean architecture</span>. He brings a{" "}
                <span className="cursive-text">problem-solving mindset</span> to every project, ensuring that{" "}
                <span className="cursive-text">technical excellence</span> drives innovative and maintainable solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="btn-primary rounded-full px-8 text-base">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
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
                <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sriharshatummalapalli@gmail.com" target="_blank" rel="noopener noreferrer">
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