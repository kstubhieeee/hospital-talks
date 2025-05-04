"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

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

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionHeading
            title="Our Services"
            description="Comprehensive healthcare services tailored to your needs."
            badge="Services"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                id: 1,
                title: "Medical Consultation",
                description:
                  "Expert advice from healthcare professionals tailored to your specific needs and concerns.",
                image:
                  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
              },
              {
                id: 2,
                title: "Health Education",
                description:
                  "Informative resources to improve your health knowledge and make better healthcare decisions.",
                image:
                  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
              },
              {
                id: 3,
                title: "Community Support",
                description: "Connect with others on similar health journeys and build a supportive network.",
                image:
                  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="text-center h-full group hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-md">
                  <CardHeader>
                    <div className="mx-auto relative w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#006400]/10 to-[#FF8C00]/10" />
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#006400] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-0">
                    <Button className="bg-[#006400] text-white hover:bg-[#004d00] shadow-md hover:shadow-lg transition-all duration-300">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 