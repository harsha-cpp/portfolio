
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "UX Design",
      description: "User-centered design approach with focus on usability and accessibility",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Frontend Dev",
      description: "Modern web technologies including React, TypeScript, and responsive design",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Research",
      description: "User research, testing, and data-driven design decisions",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Prototyping",
      description: "From wireframes to high-fidelity interactive prototypes",
    },
  ]

  return (
    <div className="w-full section-alt">
      <section id="about" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          {/* Header and cards layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side - Header */}
            <div className="lg:col-span-7">
              <div className="space-y-4 text-left mb-8">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                  About <span className="cursive-text">Me</span>
                </h2>
              </div>
              
              {/* About text */}
              <div className="space-y-6">
                <div className="space-y-4 text-left">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Harsha is a dedicated <span className="cursive-text">User Experience Designer</span> and{" "}
                    <span className="cursive-text">UX Researcher</span> with a comprehensive background in{" "}
                    <span className="cursive-text">human-centered design</span> and{" "}
                    <span className="cursive-text">design thinking methodologies</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    His design philosophy centers on <span className="cursive-text">empathetic user research</span>,{" "}
                    <span className="cursive-text">strategic problem-solving</span>, and creating{" "}
                    <span className="cursive-text">inclusive digital experiences</span> that bridge the gap 
                    between user expectations and business objectives. With a solid foundation in{" "}
                    <span className="cursive-text">frontend technologies</span> and{" "}
                    <span className="cursive-text">responsive web design</span>, he brings designs to life 
                    through clean, efficient code. He excels at transforming complex user 
                    requirements into intuitive, accessible design solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Harsha stays current with emerging <span className="cursive-text">design trends</span> and{" "}
                    <span className="cursive-text">usability best practices</span>, continuously refining his 
                    approach to deliver impactful user experiences that drive engagement and satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Feature cards starting from header level */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="group animate-in">
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/4 hover:-translate-y-1 h-full">
                      <div className="flex flex-col items-start text-left space-y-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 border border-primary/25 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
                          {feature.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-primary/90 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
