"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { structuredBlogArticles } from "@/lib/blog-data"

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function LatestArticlesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="blogs" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-repeat opacity-5" />
      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionHeading
            title="Latest Articles"
            description="Stay informed with our latest healthcare insights and expert advice."
            badge="Blogs"
          />

          <div className="w-full max-w-6xl mx-auto px-8 sm:px-10 md:px-12 relative">
            <Carousel className="w-full" opts={{ align: isMobile ? "start" : "center" }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {structuredBlogArticles.map((blog) => (
                  <CarouselItem key={blog.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
                    <motion.div variants={staggerItem}>
                      <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-xl border-0 shadow-md">
                        <CardHeader className="p-0">
                          <div className="relative h-36 md:h-48 w-full overflow-hidden">
                            <Image
                              src={blog.featuredImage || "/placeholder.svg"}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#FF8C00] text-black text-xs md:text-sm">Healthcare</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-3 md:p-6">
                          <CardDescription className="text-xs md:text-sm font-medium text-muted-foreground mb-1 md:mb-2">
                            {blog.date} • {blog.readTime}
                          </CardDescription>
                          <CardTitle className="text-base md:text-xl mb-1 md:mb-2 group-hover:text-[#006400] transition-colors line-clamp-2">
                            {blog.title}
                          </CardTitle>
                          <p className="line-clamp-2 md:line-clamp-3 text-xs md:text-sm text-muted-foreground">{blog.excerpt}</p>
                        </CardContent>
                        <CardFooter className="px-3 pb-3 pt-0 md:px-6 md:pb-6">
                          <Link href={`/blogs/${blog.id}`}>
                            <Button className="bg-[#FF8C00] text-black hover:bg-[#E67E00] shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm py-1 h-8 md:h-10">
                              Read Article{" "}
                              <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 px-1 sm:px-2">
                <CarouselPrevious className="relative left-0 h-8 w-8 md:h-10 md:w-10 bg-white/90 text-[#006400] hover:bg-[#006400] hover:text-white border-[#006400]" />
                <CarouselNext className="relative right-0 h-8 w-8 md:h-10 md:w-10 bg-white/90 text-[#006400] hover:bg-[#006400] hover:text-white border-[#006400]" />
              </div>
            </Carousel>
          </div>
          
          <div className="text-center pt-4 md:pt-8">
            <Link href="/blogs">
              <Button className="mt-4 px-6 py-2 bg-[#006400] text-white hover:bg-[#004d00] shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                View All Blogs <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 