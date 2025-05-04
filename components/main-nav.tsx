"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/#web-stories", label: "WEB STORIES" },
  { href: "/#blogs", label: "BLOGS" },
  { href: "/#services", label: "OUR SERVICES" },
  { href: "/#contact", label: "CONTACT" },
]

export function MainNav() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  // Set initial active item based on pathname
  React.useEffect(() => {
    const active = navItems.find(
      (item) => pathname === item.href || (pathname !== "/" && item.href !== "/" && pathname.startsWith(item.href)),
    )
    setActiveItem(active?.href || "/")
  }, [pathname])

  return (
    <nav className="hidden md:flex items-center gap-6 relative">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "font-medium text-sm transition-colors hover:text-foreground relative py-2",
            activeItem === item.href ? "text-foreground" : "text-muted-foreground",
          )}
          onClick={() => setActiveItem(item.href)}
        >
          {item.label}
          {activeItem === item.href && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006400]"
              layoutId="navbar-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Link>
      ))}
    </nav>
  )
}
