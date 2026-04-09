export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "Go", "JavaScript", "Python", "Swift", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Gin", "Fiber", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Vercel", "Cloudflare", "CI/CD"],
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    },
  ]

  return (
    <section id="skills" className="py-20 w-full relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              Skills <span className="cursive-text">& Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Full-stack development, scalable architecture, and user-centered design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-5 rounded-xl bg-card/60 border border-border/50 transition-colors duration-200 hover:border-border"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-px w-6 bg-primary/60 rounded-full" />
                    <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground rounded-full transition-colors duration-200 hover:text-foreground hover:border-border/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
