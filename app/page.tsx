"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ServicesSection } from "@/components/ServicesSection"
import { LatestArticlesSection } from "@/components/LatestArticlesSection"
import { WebStoriesSection } from "@/components/WebStoriesSection"
import { AboutMeSection } from "@/components/AboutMeSection"
import { ContactSection } from "@/components/ContactSection"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Cover Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Hospital Talks Cover"
              fill
              className="object-cover brightness-[0.25]"
              priority
            />
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-4">
                <Badge className="bg-[#006400] hover:bg-[#004d00] text-white px-4 py-1 text-sm">Welcome</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  HOSPITAL TALKS
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Your source for healthcare insights, stories, and services.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button className="bg-[#006400] text-white hover:bg-[#004d00] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg">
                  Get Started
                </Button>
                <Button className="bg-[#FF8C00] text-black hover:bg-[#E67E00] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <LatestArticlesSection />

        <WebStoriesSection />

        <ServicesSection />

        <AboutMeSection />

        <ContactSection />
      </main>

      <footer className="w-full border-t py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Hospital Talks Logo"
                  width={400}
                  height={60}
                  className="h-32 w-32"
                />
              </Link>
              <p className="text-muted-foreground">
                Your source for healthcare insights, stories, and services. We're dedicated to providing valuable
                information and support.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <div className="grid gap-3">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/#blogs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blogs
                </Link>
                <Link href="/#web-stories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Stories
                </Link>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Services
                </Link>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Subscribe</h3>
              <p className="text-muted-foreground mb-4">Stay updated with our latest articles and news.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006400] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-[#006400] text-white hover:bg-[#004d00]">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">© 2025 Hospital Talks. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
