"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-10 w-10 rounded-full bg-[#006400] text-white shadow-lg hover:bg-[#004d00]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  )
}
