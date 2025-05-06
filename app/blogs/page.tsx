"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { structuredBlogArticles } from "@/lib/blog-data"

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

export default function BlogsPage() {
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
              className="text-center mb-10"
            >
              <Link href="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Latest Articles</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Stay informed with our latest healthcare insights and expert advice.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {structuredBlogArticles.map((blog) => (
                <motion.div key={blog.id} variants={staggerItem}>
                  <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-xl border-0 shadow-md">
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={blog.featuredImage || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-4 left-4 bg-[#FF8C00] text-black">Healthcare</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardDescription className="text-sm font-medium text-muted-foreground mb-2">
                        {blog.date} • {blog.readTime}
                      </CardDescription>
                      <CardTitle className="text-xl mb-2 group-hover:text-[#006400] transition-colors">
                        {blog.title}
                      </CardTitle>
                      <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Link href={`/blogs/${blog.id}`}>
                        <Button className="bg-[#FF8C00] text-black hover:bg-[#E67E00] shadow-md hover:shadow-lg transition-all duration-300">
                          Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
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