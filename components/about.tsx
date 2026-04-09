export default function About() {
  return (
    <section id="about" className="py-20 w-full relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              About <span className="cursive-text">Me</span>
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-stack engineer who ships end-to-end. From database schema design
              and Go APIs to React frontends and cloud infrastructure. Currently Founder & CTO
              at <span className="cursive-text">Memolane</span>, where I designed the architecture,
              built the recruitment platform, hired 11 people, and set up the engineering org from scratch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Before that, I wrote backend services in Go handling 10K+ concurrent users
              at Digital Fortress and shipped 15+ screens as a UX designer at Netts Mobility.
              I work across <span className="cursive-text">TypeScript</span>,{" "}
              <span className="cursive-text">Go</span>,{" "}
              <span className="cursive-text">PostgreSQL</span>,{" "}
              <span className="cursive-text">Redis</span>,{" "}
              <span className="cursive-text">AWS</span>, and{" "}
              <span className="cursive-text">Azure</span>, and I care about getting things deployed, not just built.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Third-year CS undergrad at VIT Amaravati. I build open-source tools, run hackathons,
              and spend my time figuring out how to make software that actually works at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
