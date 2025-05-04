"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/#web-stories", label: "WEB STORIES" },
  { href: "/#blogs", label: "BLOGS" },
  { href: "/#services", label: "OUR SERVICES" },
  { href: "/#contact", label: "CONTACT" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="relative h-9 w-9 text-foreground" onClick={() => setOpen(!open)}>
        <Menu className={`h-5 w-5 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
        <X className={`absolute h-5 w-5 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm"
          >
            <ScrollArea className="h-full py-6 pl-6">
              <div className="flex flex-col space-y-4">
                <div className="mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Hospital Talks Logo"
                    width={360}
                    height={300}
                    className="h-12 w-auto"
                  />
                </div>
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="text-foreground font-medium text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="pt-4"
                >
                  <Button className="w-full bg-[#006400] text-white hover:bg-[#004d00]">Subscribe</Button>
                </motion.div>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
