import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer & UI/UX Designer Intern",
      company: "Netts Mobility",
      period: "Feb 2025 - May 2025",
      location: "Bengaluru, India",
      achievements: [
        "Developed the complete frontend architecture for the company website using React and Next.js, implementing responsive design patterns, modern web development best practices, and TypeScript for type safety",
        "Built and deployed 15+ interactive screens including landing page, product showcases, EV swapping station locators, pricing tiers, about us, contact forms, and service documentation pages with optimized performance",
        "Implemented component-based architecture with React hooks, state management using Context API, and integrated RESTful APIs for dynamic content rendering and real-time data fetching",
        "Optimized website performance achieving 95+ Lighthouse scores through code splitting, lazy loading, image optimization, and implementing modern CSS techniques with Tailwind CSS",
        "Collaborated with backend engineers to integrate APIs and design efficient data flow patterns, ensuring seamless frontend-backend communication and error handling",
        "Designed user interface components and user experience flows, conducting usability testing and implementing design system principles for consistent brand representation across all screens",
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
