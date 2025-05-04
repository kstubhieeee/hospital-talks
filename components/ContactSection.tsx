"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-repeat opacity-5" />
      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center justify-center space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionHeading
            title="Contact Us"
            description="Get in touch with our team for any inquiries or support."
            badge="Get In Touch"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <Card className="h-full shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006400] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006400] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006400] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button className="bg-[#FF8C00] text-black hover:bg-[#E67E00] shadow-md hover:shadow-lg transition-all duration-300 mt-2">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="h-full shadow-lg border-0 bg-gradient-to-br from-[#006400]/10 to-[#FF8C00]/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006400]/10 text-[#006400] group-hover:bg-[#006400] group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 9509410820</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006400]/10 text-[#006400] group-hover:bg-[#006400] group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contact@hospitaltalks.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006400]/10 text-[#006400] group-hover:bg-[#006400] group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">Agarwal Farm, Mansarovar, Jaipur 302020 (Rajasthan) INDIA</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="w-full bg-[#006400] text-white hover:bg-[#004d00] shadow-md hover:shadow-lg transition-all duration-300">
                      View on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 