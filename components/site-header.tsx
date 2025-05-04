"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMotionValueEvent, useScroll } from "framer-motion"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10)
  })

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center ">
            <Image src="/images/logo.png" alt="Hospital Talks Logo" width={600} height={300} className="h-32 w-32" />
          </Link>
        </div>
        <MainNav />
        <div className="flex items-center gap-2">
          <Button className="hidden md:flex bg-[#006400] text-white hover:bg-[#004d00] transition-all duration-300 shadow-md hover:shadow-lg">
            Subscribe
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
