"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"

/* eslint-disable @next/next/no-img-element */

function BiomeLogo({ className }: { className?: string }) {
  return (
    <img
      src="https://biomejs.dev/img/favicon.svg"
      alt="Biome"
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}

function EncoreLogo({ className }: { className?: string }) {
  return (
    <img
      src="https://user-images.githubusercontent.com/78424526/214602214-52e0483a-b5fc-4d4c-b03e-0b7b23e012df.svg"
      alt="Encore"
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 18C36 8.059 27.941 0 18 0S0 8.059 0 18c0 8.983 6.584 16.42 15.188 17.78V23.203h-4.57V18h4.57v-3.965c0-4.512 2.687-7.004 6.8-7.004 1.97 0 4.031.351 4.031.351v4.43h-2.27c-2.237 0-2.934 1.388-2.934 2.812V18h4.993l-.798 5.203h-4.195V35.78C29.416 34.42 36 26.983 36 18Z"
        fill="#0866FF"
      />
      <path
        d="M24.99 23.203 25.788 18H20.82v-3.376c0-1.424.694-2.812 2.93-2.812h2.27v-4.43s-2.06-.351-4.03-.351c-4.114 0-6.801 2.492-6.801 7.004V18h-4.57v5.203h4.57V35.78a18.14 18.14 0 0 0 5.625 0V23.203h4.195Z"
        fill="#fff"
      />
    </svg>
  )
}

const contributions = [
  {
    pr: "#10568",
    url: "https://github.com/biomejs/biome/pull/10568",
    logo: <BiomeLogo className="h-5 w-5 object-contain" />,
    org: "Biome",
    desc: "Linter / Formatter toolchain",
  },
  {
    pr: "#2471",
    url: "https://github.com/encoredev/encore/pull/2471",
    logo: <EncoreLogo className="h-5 w-5 object-contain" />,
    org: "Encore",
    desc: "Backend framework",
  },
  {
    pr: "#1969",
    url: "https://github.com/facebook/yoga/pull/1969",
    logo: <FacebookLogo className="h-5 w-5 object-contain flex-shrink-0" />,
    org: "Meta",
    desc: "Layout engine (React Native)",
  },
]

export default function MobileOSS() {
  return (
    <section className="lg:hidden px-4 pb-16 pt-2">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="container mx-auto">
        <p className="text-[10px] font-medium text-primary font-space-grotesk tracking-widest uppercase mb-4">
          Open Source
        </p>
        <div className="space-y-2">
          {contributions.map((c) => (
            <Link
              key={c.pr}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-4 py-3.5 bg-card border border-border/40 hover:border-border transition-colors duration-200"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-secondary/60 border border-border/40">
                  {c.logo}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-foreground font-medium leading-tight truncate">
                    {c.org}
                  </p>
                  <p className="text-[11px] text-muted-foreground/60 mt-0.5 leading-tight truncate">
                    {c.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[11px] font-space-grotesk text-muted-foreground/50 tabular-nums">
                  {c.pr}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground/30 group-hover:text-primary transition-colors duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
