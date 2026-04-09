import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div className="w-full section-alt">
      <section id="education" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                <span className="cursive-text">Education</span>
              </h2>
            </div>

            <div className="max-w-4xl">
              <div className="relative p-8 rounded-xl bg-card/60 border border-border/50 transition-colors duration-200 hover:border-border">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <GraduationCap className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        Bachelor of Technology in Computer Science and Engineering
                      </h3>
                      <p className="text-lg text-muted-foreground mt-1">
                        Vellore Institute of Technology, Amaravati
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-secondary/60 border border-border/40 text-muted-foreground rounded-full">
                        Sep 2023 - May 2027
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="text-foreground/80 font-medium">Coursework:</span> Web Development, Software Engineering, Data Structures and Algorithms
                      </p>
                      <p>
                        <span className="text-foreground/80 font-medium">Activities:</span> Tech Hackathons, Technical Clubs, Startup Design Projects
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
