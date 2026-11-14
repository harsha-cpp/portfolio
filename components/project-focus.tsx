const colors = [
  "hsl(var(--primary))",
  "hsl(172 30% 65%)",
  "hsl(172 28% 28%)",
]

export default function ProjectFocus({ areas }: { areas: string[] }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const segment = circumference / areas.length

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative h-28 w-28 flex-shrink-0">
          <svg
            viewBox="0 0 112 112"
            className="h-full w-full"
            role="img"
            aria-label={`Project categories: ${areas.join(", ")}. Equal segments represent overlapping categories.`}
          >
            <circle cx="56" cy="56" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="10" />
            {areas.map((area, index) => (
              <circle
                key={area}
                cx="56"
                cy="56"
                r={radius}
                fill="none"
                stroke={colors[index % colors.length]}
                strokeWidth="10"
                strokeDasharray={`${segment - 5} ${circumference - segment + 5}`}
                strokeDashoffset={-index * segment}
                transform="rotate(-90 56 56)"
              />
            ))}
          </svg>
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-xs font-medium text-foreground">
            {areas[0]}
          </span>
        </div>
        <ul className="space-y-2 text-xs text-foreground/80">
          {areas.map((area, index) => (
            <li key={area} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 flex-shrink-0" style={{ backgroundColor: colors[index % colors.length] }} />
              {area}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Overlapping categories</p>
    </div>
  )
}
