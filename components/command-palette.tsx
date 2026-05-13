"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Command } from "cmdk"
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Copy,
  Download,
  FileText,
  Terminal,
  Clock,
  Palette,
  BookOpen,
  Search,
} from "lucide-react"
import { NAV_ITEMS, SPECIAL_PAGES, projects, SITE } from "@/lib/data"

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  About: User,
  Experience: Briefcase,
  Projects: FolderOpen,
  "Contact Me": Mail,
}

const SPECIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Uses: Terminal,
  Now: Clock,
  Colophon: Palette,
  Changelog: BookOpen,
}

export default function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((fn: () => void) => {
    setOpen(false)
    setTimeout(fn, 50)
  }, [])

  const navigateAnchor = React.useCallback(
    (href: string) => {
      if (href.startsWith("/#")) {
        if (pathname === "/") {
          const id = href.slice(2)
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: "smooth" })
          } else {
            window.location.hash = id
          }
        } else {
          router.push(href)
        }
      } else {
        router.push(href)
      }
    },
    [pathname, router]
  )

  const copyEmail = React.useCallback(() => {
    navigator.clipboard.writeText(SITE.email)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      contentClassName="relative w-full max-w-xl overflow-hidden  border border-[hsl(220_5%_14%)] bg-[hsl(220_6%_8%)] shadow-2xl shadow-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-200"
    >
      <div className="flex items-center gap-3 border-b border-[hsl(220_5%_14%)] px-4">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className="flex h-12 w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-[hsl(220_5%_14%)] bg-[hsl(220_5%_12%)] px-1.5 font-mono text-[10px] text-muted-foreground">
          ESC
        </kbd>
      </div>

      <Command.List className="max-h-[400px] overflow-y-auto overflow-x-hidden scrollbar-thin p-2">
        <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
          No results found.
        </Command.Empty>

        <Command.Group
          heading="Navigation"
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = NAV_ICONS[item.name] ?? Home
            return (
              <CommandItem
                key={item.href}
                value={`nav ${item.name}`}
                onSelect={() => runCommand(() => navigateAnchor(item.href))}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            )
          })}
        </Command.Group>

        <Command.Group
          heading="Pages"
          className="mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium"
        >
          {SPECIAL_PAGES.map((page) => {
            const Icon = SPECIAL_ICONS[page.name] ?? FileText
            return (
              <CommandItem
                key={page.href}
                value={`page ${page.name} ${page.description}`}
                onSelect={() => runCommand(() => router.push(page.href))}
              >
                <Icon className="h-4 w-4" />
                <span>{page.name}</span>
                <span className="ml-auto text-xs text-muted-foreground/70">
                  {page.description}
                </span>
              </CommandItem>
            )
          })}
        </Command.Group>

        <Command.Group
          heading="Projects"
          className="mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium"
        >
          {projects.map((project) => (
            <CommandItem
              key={project.slug}
              value={`project ${project.title} ${project.tagline} ${project.tags.join(" ")}`}
              onSelect={() =>
                runCommand(() => router.push(`/projects/${project.slug}`))
              }
            >
              <FolderOpen className="h-4 w-4" />
              <span>{project.title}</span>
              <span className="ml-auto truncate text-xs text-muted-foreground/70 max-w-[200px]">
                {project.tagline}
              </span>
            </CommandItem>
          ))}
        </Command.Group>

        <Command.Group
          heading="Links"
          className="mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium"
        >
          <CommandItem
            value="link github"
            onSelect={() => runCommand(() => window.open(SITE.github, "_blank"))}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
            <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground/60" />
          </CommandItem>
          <CommandItem
            value="link linkedin"
            onSelect={() => runCommand(() => window.open(SITE.linkedin, "_blank"))}
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
            <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground/60" />
          </CommandItem>
          <CommandItem
            value="link email"
            onSelect={() =>
              runCommand(() => window.open(`mailto:${SITE.email}`, "_blank"))
            }
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
            <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground/60" />
          </CommandItem>
          <CommandItem
            value="link twitter x"
            onSelect={() =>
              runCommand(() =>
                window.open(
                  `https://twitter.com/${SITE.twitter.replace("@", "")}`,
                  "_blank"
                )
              )
            }
          >
            <ExternalLink className="h-4 w-4" />
            <span>X (Twitter)</span>
            <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground/60" />
          </CommandItem>
        </Command.Group>

        <Command.Group
          heading="Actions"
          className="mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium"
        >
          <CommandItem
            value="action copy email"
            onSelect={() => runCommand(copyEmail)}
          >
            <Copy className="h-4 w-4" />
            <span>Copy Email</span>
            <span className="ml-auto text-xs text-muted-foreground/70">
              {SITE.email}
            </span>
          </CommandItem>
          <CommandItem
            value="action download resume cv"
            onSelect={() =>
              runCommand(() => window.open("/resume.pdf", "_blank"))
            }
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </Command.Group>
      </Command.List>

      <div className="flex items-center justify-between border-t border-[hsl(220_5%_14%)] px-4 py-2.5 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-4 select-none items-center rounded border border-[hsl(220_5%_18%)] bg-[hsl(220_5%_12%)] px-1 font-mono text-[10px]">
              ↑↓
            </kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-4 select-none items-center rounded border border-[hsl(220_5%_18%)] bg-[hsl(220_5%_12%)] px-1 font-mono text-[10px]">
              ↵
            </kbd>
            select
          </span>
        </div>
        <span className="text-muted-foreground/60">
          {SITE.name.split(" ")[0]}.dev
        </span>
      </div>
    </Command.Dialog>
  )
}

function CommandItem({
  children,
  value,
  onSelect,
}: {
  children: React.ReactNode
  value: string
  onSelect: () => void
}) {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-md border-l-2 border-transparent px-3 py-2 text-sm text-muted-foreground outline-none transition-colors duration-75 aria-selected:border-l-[hsl(172_50%_45%)] aria-selected:bg-[hsl(220_5%_12%)] aria-selected:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg:first-child]:text-muted-foreground/80 aria-selected:[&>svg:first-child]:text-[hsl(172_50%_45%)]"
    >
      {children}
    </Command.Item>
  )
}
