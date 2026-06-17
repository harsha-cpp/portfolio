"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { NAV_ITEMS, SPECIAL_PAGES } from "@/lib/data"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"

  const determineActiveSection = useCallback(() => {
    const sections = NAV_ITEMS.map((item) =>
      item.href === "/" ? "home" : item.href.replace("/#", "")
    )
    const allSections = [...sections, "open-source"]

    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    if (isNearBottom) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        if (rect.top <= window.innerHeight) {
          return "contact"
        }
      }
    }

    for (let i = allSections.length - 1; i >= 0; i--) {
      const section = document.getElementById(allSections[i])
      if (section) {
        const rect = section.getBoundingClientRect()
        const threshold = 150
        if (rect.top <= threshold && rect.bottom >= threshold) {
          const sectionId = allSections[i]
          if (sectionId === "open-source") return "projects"
          if (!sections.includes(sectionId)) return "home"
          return sectionId
        }
      }
    }
    return "home"
  }, [])

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setActiveSection(determineActiveSection())
    }

    window.addEventListener("scroll", handleScroll)
    setScrolled(window.scrollY > 10)
    setActiveSection(determineActiveSection())

    return () => window.removeEventListener("scroll", handleScroll)
  }, [determineActiveSection, isHome])

  useEffect(() => {
    if (!isHome) {
      setScrolled(false)
    }
  }, [isHome])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome) {
      e.preventDefault()
      const targetId = href === "/" ? "home" : href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        })
        setActiveSection(targetId)
        if (isOpen) setIsOpen(false)
      }
    } else {
      if (isOpen) setIsOpen(false)
    }
  }

  const getNavItemActive = (href: string) => {
    if (!isHome) return false
    const sectionId = href === "/" ? "home" : href.replace("/#", "")
    return activeSection === sectionId
  }

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all duration-300", scrolled && "scrolled")}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold text-foreground">harsha.</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative flex space-x-4 items-center">
            {[
              ...NAV_ITEMS.map((item) => ({
                name: item.name,
                href: item.href,
                type: "scroll" as const,
              })),
              ...SPECIAL_PAGES.slice(0, 1).map((page) => ({
                name: page.name,
                href: page.href,
                type: "page" as const,
              })),
            ].map((item, index) => {
              const isActive =
                item.type === "scroll"
                  ? getNavItemActive(item.href)
                  : pathname === item.href || pathname === item.href + "/"

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  {isActive && item.type === "scroll" && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Link
                    href={item.href}
                    onClick={item.type === "scroll" ? (e) => handleNavClick(e, item.href) : undefined}
                    className={cn(
                      "text-sm font-medium transition-colors px-3 py-2 relative",
                      isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground",
                    )}
                    style={isActive && item.type === "page" ? { color: "hsl(172 50% 45%)" } : undefined}
                  >
                    {item.name}
                    {isActive && item.type === "scroll" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/60"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {isActive && item.type === "page" && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="relative"
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </Button>
        </div>
      </div>

      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container py-4 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = getNavItemActive(item.href)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2 px-3",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}

            {SPECIAL_PAGES.slice(0, 1).map((page) => {
              const isActivePage = pathname === page.href

              return (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2 px-3",
                    isActivePage
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  {page.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
