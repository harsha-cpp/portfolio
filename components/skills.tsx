import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      category: "UX Design",
      skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "FigJam"],
    },
    {
      category: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    },
    {
      category: "User Research",
      skills: ["User Interviews", "Usability Testing", "A/B Testing", "Surveys", "Analytics", "Personas"],
    },
    {
      category: "Prototyping",
      skills: ["Figma", "Framer", "Principle", "After Effects", "Lottie", "Interactive Prototypes"],
    },
    {
      category: "Design Systems",
      skills: ["Component Libraries", "Design Tokens", "Style Guides", "Documentation", "Accessibility"],
    },
  ]

  return (
    <div className="w-full section-alt">
      <section id="skills" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12">
            {/* Left-aligned header */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                Skills <span className="cursive-text">& Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A comprehensive toolkit for creating exceptional user experiences and bringing designs to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="group animate-in">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/4 hover:-translate-y-1 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary/90 transition-colors duration-300">
                          {category.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/25 text-white rounded-full hover:border-primary/40 hover:from-primary/20 hover:to-primary/15 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
