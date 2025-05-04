"use client"

import type React from "react"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${montserrat.variable}`}>
      <body className="font-montserrat">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}
