"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { webStories } from "@/components/WebStoriesSection"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function StoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center mb-10"
            >
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">All Web Stories</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore our collection of inspiring healthcare stories and experiences.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {webStories.map((story) => (
                <motion.div key={story.id} variants={staggerItem} className="group">
                  <Link href={`/stories/${story.id}`} className="block h-full">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-[#006400] transition-colors">{story.title}</h2>
                        <p className="text-gray-600 mb-4 flex-grow">{story.excerpt}</p>
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <span className="text-[#006400] font-medium group-hover:underline transition-all">
                            Read full story
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Hospital Talks. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
} 