import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "UI/UX Designer & Frontend Developer Intern",
      company: "Netts Mobility",
      period: "Feb 2025 - May 2025",
      location: "Remote",
      achievements: [
        "Designed and developed the base UI/UX for the company website using React and Next.js, ensuring a responsive, accessible, and visually engaging user experience",
        "Created and implemented the frontend for 15+ pages of the mobile app, focusing on intuitive navigation and user flows for swapping station operations",
        "Conducted user research to understand the needs of EV users and translated insights into functional frontend components and user interfaces",
        "Collaborated closely with the engineering team to implement UI components efficiently, maintaining design consistency and code quality across platforms",
        "Deployed the application using modern deployment practices and supported brand identity development by aligning web and app visuals with startup goals",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              <span className="cursive-text">Experience</span>
            </h2>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 mb-6">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Website Link Button */}
                    <div className="flex justify-start">
                      <a
                        href="https://netts.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
                      >
                        <ExternalLink className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                        Visit Website
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
