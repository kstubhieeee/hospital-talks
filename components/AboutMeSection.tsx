"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function AboutMeSection() {
  return (
    <section id="about-me" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006400]">
            Know About Me
          </h2>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden  border-4 border-[#006400] shadow-xl">
              <Image
                src="/owner.png"
                alt="Mukul Sharma"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-[#006400] mb-4">Mukul Sharma</h3>
            <p className="text-gray-700 leading-relaxed">
              Hi, I am Mukul Sharma a healthcare operations leader with 20+ years of hands-on experience across hospital administration, operations, liaison, project execution, and quality accreditation (NABH, JCI). 
              An alumnus of IIM Ahmedabad, Hospital Operations at top hospitals across India, bringing systems, standards, and people together to drive patient-centric care.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through HospitalTalks.com, I share insights, real-world experiences, and training solutions to help hospitals improve quality, compliance, and efficiency. Whether it's setting up a new hospital, streamlining operations, or preparing for NABH, I believe in practical, results-driven approaches that make a real impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 