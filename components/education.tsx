import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div className="w-full section-alt">
      <section id="education" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12">
            {/* Left-aligned header */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                <span className="cursive-text">Education</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Academic foundation building expertise in computer science and design thinking
              </p>
            </div>

            <div className="max-w-4xl">
              <div className="group animate-in">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/4">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 border border-primary/25 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
                        <GraduationCap className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-primary/90 transition-colors duration-300">
                          Bachelor of Technology: Computer Science Engineering
                        </h3>
                        <p className="text-lg text-muted-foreground mt-2">
                          Vellore Institute of Technology, Amaravati
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/15 border border-primary/30 text-primary-foreground rounded-full">
                          2023 - 2027
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Currently pursuing a comprehensive Computer Science Engineering program with a focus on software development,
                        algorithms, data structures, and system design. Building a strong foundation in computer science
                        principles while developing expertise in <span className="cursive-text">UX/UI design</span>, <span className="cursive-text">user research methodologies</span>, and <span className="cursive-text">frontend development</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
