"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

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

// Stories data that can be exported for use in the stories page
export const webStories = [
  {
    id: 1,
    title: "COVID-19 Recovery Stories",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Inspiring stories of resilience and recovery from COVID-19 patients around the world.",
    content: "# COVID-19 Recovery Stories\n\nInspiring stories of resilience and recovery from COVID-19 patients around the world. These accounts highlight the human spirit and the dedication of healthcare professionals during challenging times.\n\n## John's Journey\n\nJohn, a 45-year-old teacher, spent 30 days in the ICU. His recovery journey involved physical therapy and community support.\n\n## Maria's Experience\n\nMaria recovered at home with telemedicine support. Her story showcases how remote healthcare solutions helped patients during the pandemic.\n\n## Healthcare Heroes\n\nBehind every recovery story are dedicated healthcare professionals who worked tirelessly during the pandemic.",
  },
  {
    id: 2,
    title: "Mental Health Awareness",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Breaking down stigmas and providing resources for mental health support in communities.",
    content: "# Mental Health Awareness\n\nBreaking down stigmas and providing resources for mental health support in communities. Mental health is just as important as physical health.\n\n## Understanding Anxiety\n\nAnxiety disorders affect millions of people worldwide. Early recognition and proper support can make a significant difference.\n\n## Depression Awareness\n\nUnderstanding the signs of depression and knowing when to seek help can save lives. Community support plays a crucial role.\n\n## Resources Available\n\nMany organizations offer free or affordable mental health resources. Telemedicine has made professional help more accessible than ever before.",
  },
  {
    id: 3,
    title: "Healthcare Heroes",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Celebrating the dedication and sacrifice of healthcare professionals on the frontlines.",
    content: "# Healthcare Heroes\n\nCelebrating the dedication and sacrifice of healthcare professionals on the frontlines. These individuals have shown extraordinary courage during challenging times.\n\n## Frontline Nurses\n\nNurses have been the backbone of our healthcare system, providing direct care to patients under unprecedented circumstances.\n\n## Emergency Responders\n\nFrom paramedics to emergency room staff, these professionals have adapted quickly to changing protocols while providing lifesaving care.\n\n## Supporting Staff\n\nBehind every medical team are essential workers who keep facilities running, including janitorial staff, administrators, and technicians.",
  },
  {
    id: 4,
    title: "Advancements in Medical Technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Exploring the latest innovations in healthcare technology changing patient outcomes.",
    content: "# Advancements in Medical Technology\n\nExploring the latest innovations in healthcare technology changing patient outcomes. From AI-assisted diagnostics to robotic surgeries, technology is revolutionizing healthcare.\n\n## AI in Diagnostics\n\nArtificial intelligence is helping doctors identify diseases earlier and more accurately than ever before.\n\n## Robotic Surgery\n\nMinimally invasive procedures performed with robotic assistance are reducing recovery times and improving precision.\n\n## Telehealth Revolution\n\nThe rapid adoption of telehealth has improved access to care for rural and underserved populations.",
  },
  {
    id: 5,
    title: "Preventive Health Practices",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Simple daily habits that can significantly improve your long-term health outcomes.",
    content: "# Preventive Health Practices\n\nSimple daily habits that can significantly improve your long-term health outcomes. Prevention is always better than cure.\n\n## Nutrition Basics\n\nA balanced diet rich in fruits, vegetables, and whole grains forms the foundation of good health.\n\n## Regular Exercise\n\nJust 30 minutes of moderate activity daily can reduce the risk of numerous chronic conditions.\n\n## Mental Wellness Practices\n\nMindfulness, meditation, and adequate sleep are essential components of preventive health that are often overlooked.",
  },
];

export function WebStoriesSection() {
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
    <section id="web-stories" className="w-full py-8 md:py-16 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionHeading
            title="Web Stories"
            description="Explore our collection of engaging healthcare stories."
            badge="Featured"
          />

          <div className="w-full max-w-6xl mx-auto px-8 sm:px-10 md:px-12 relative">
            <Carousel className="w-full" opts={{ align: isMobile ? "start" : "center" }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {webStories.map((story) => (
                  <CarouselItem key={story.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
                    <motion.div className="group relative h-full" variants={staggerItem}>
                      <div className="flex flex-col items-center space-y-4 h-full p-2 md:p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#006400] transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center line-clamp-2">{story.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground text-center line-clamp-3">
                          {story.excerpt || "Inspiring stories and insights from healthcare professionals and patients."}
                        </p>
                        <Link href={`/stories/${story.id}`} className="mt-auto">
                          <Button variant="link" className="text-[#006400] group-hover:underline">
                            Read More <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
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
            <Link href="/stories">
              <Button className="mt-4 px-6 py-2 bg-[#006400] text-white hover:bg-[#004d00] shadow-md hover:shadow-lg transition-all duration-300">
                View All Stories <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 