"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

export default function BlogClient({ blog }: { blog: any }) {
  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Article not found</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <Link href="/blogs">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                </Button>
              </Link>

              <div className="mb-8">
                <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <Badge className="absolute top-4 left-4 bg-[#FF8C00] text-black">Healthcare</Badge>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    {blog.date} • {blog.readTime}
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{blog.title}</h1>
                <p className="text-xl text-gray-500 mb-8">{blog.excerpt}</p>
              </div>

              <article className="prose prose-green max-w-none">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
              </article>

              <div className="mt-12 pt-6 border-t">
                <Link href="/blogs">
                  <Button variant="outline" className="mr-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
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