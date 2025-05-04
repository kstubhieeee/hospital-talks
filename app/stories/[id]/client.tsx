"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import ReactMarkdown from "react-markdown"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function StoryClient({ story }: { story: any }) {
  if (!story) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Story not found</p>
      </div>
    )
  }

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
              className="max-w-3xl mx-auto"
            >
              <Link href="/stories">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Stories
                </Button>
              </Link>

              <div className="mb-8">
                <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg mb-6">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{story.title}</h1>
              </div>

              <article className="prose prose-green max-w-none">
                <ReactMarkdown>{story.content}</ReactMarkdown>
              </article>

              <div className="mt-12 pt-6 border-t">
                <Link href="/stories">
                  <Button variant="outline" className="mr-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Stories
                  </Button>
                </Link>
              </div>
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