"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Expand } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Project } from "@/lib/data"

export default function ProjectGallery({
  projectName,
  gallery,
}: {
  projectName: string
  gallery: NonNullable<Project["gallery"]>
}) {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const image = gallery.images[selected]
  const counter = `${String(selected + 1).padStart(2, "0")} / ${String(gallery.images.length).padStart(2, "0")}`
  const step = (direction: number) => {
    setSelected((current) => (current + direction + gallery.images.length) % gallery.images.length)
  }

  function navigation() {
    return (
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="mr-2 text-xs text-muted-foreground font-space-grotesk tabular-nums" aria-live="polite">
          {counter}
        </span>
        <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className="h-11 w-11 inline-flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className="h-11 w-11 inline-flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <section className="py-8 border-b border-border/30" aria-labelledby="project-gallery-heading">
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start gap-6 lg:gap-8">
          <div className="min-w-0 lg:py-3">
            <h2 id="project-gallery-heading" className="font-funnel-display text-[1.3125rem] md:text-[1.625rem] font-semibold text-foreground tracking-tight">
              Project gallery
            </h2>
            <div className="mt-5" aria-live="polite">
              <h3 className="text-base font-medium text-foreground">{image.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{image.caption}</p>
            </div>
            <div className="mt-5">{navigation()}</div>
            {gallery.note && <p className="mt-4 text-xs text-muted-foreground">{gallery.note}</p>}
          </div>

          <div className="min-w-0">
            <figure className="border border-border/60 bg-card/30">
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={`Expand screenshot: ${image.title}`}
                  aria-haspopup="dialog"
                  className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                >
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 66vw, 100vw" className="h-auto w-full" />
                  <span aria-hidden="true" className="absolute right-3 top-3 inline-flex items-center gap-2 border border-border bg-background/90 px-3 py-2 text-xs text-foreground/80 group-hover:text-primary transition-colors">
                    <Expand className="h-3.5 w-3.5" />
                    Expand
                  </span>
                </button>
              </DialogTrigger>
              <figcaption className="sr-only">{image.title}: {image.caption}</figcaption>
            </figure>

            <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2" aria-label={`${projectName} screenshots`}>
              {gallery.images.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  aria-label={`Show ${screenshot.title}`}
                  aria-pressed={index === selected}
                  onClick={() => setSelected(index)}
                  className={`min-w-0 border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === selected ? "border-primary" : "border-border/60 hover:border-border"}`}
                >
                  <Image src={screenshot.src} alt="" width={screenshot.width} height={screenshot.height} sizes="(max-width: 640px) 33vw, (min-width: 1024px) 140px, 200px" className={`h-auto w-full transition-opacity ${index === selected ? "opacity-100" : "opacity-80 hover:opacity-100"}`} />
                  <span className={`block truncate px-2 py-2 text-[11px] ${index === selected ? "text-primary" : "text-muted-foreground"}`}>{screenshot.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogContent
          className="w-[96vw] max-w-[1600px] max-h-[94dvh] overflow-y-auto gap-0 p-0"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault()
              step(event.key === "ArrowLeft" ? -1 : 1)
            }
          }}
        >
          <div className="p-4 pr-12 border-b border-border">
            <DialogTitle>{image.title}</DialogTitle>
            <DialogDescription className="mt-2">{image.caption}</DialogDescription>
          </div>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="96vw" className="w-full h-auto max-h-[calc(94dvh-12rem)] object-contain" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4">
            <a href={image.src} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline underline-offset-4">
              Open original ↗
            </a>
            {navigation()}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
