
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Modern web applications with React, Next.js, and responsive design",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design approach with focus on usability and accessibility",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "User Research",
      description: "User interviews, testing, and data-driven design decisions",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Full-stack web applications with modern deployment practices",
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
                    Harsha is a dedicated <span className="cursive-text">Software Development Engineer</span> and{" "}
                    <span className="cursive-text">Frontend Developer</span> with a comprehensive background in{" "}
                    <span className="cursive-text">UI/UX design</span> and{" "}
                    <span className="cursive-text">modern web development</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    His development philosophy centers on <span className="cursive-text">user-centered design</span>,{" "}
                    <span className="cursive-text">clean code principles</span>, and building{" "}
                    <span className="cursive-text">intuitive web applications</span> that bridge the gap 
                    between user needs and technical implementation. With expertise in{" "}
                    <span className="cursive-text">React ecosystem</span> and{" "}
                    <span className="cursive-text">frontend technologies</span>, he designs and develops 
                    responsive applications through accessible, maintainable code. He excels at transforming user 
                    requirements into engaging, functional digital experiences.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Harsha stays current with emerging <span className="cursive-text">frontend technologies</span> and{" "}
                    <span className="cursive-text">design trends</span>, continuously refining his 
                    approach to deliver impactful web solutions that enhance user experiences and drive engagement.
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
