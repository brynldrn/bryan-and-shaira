"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function AnimatedSection({ children, delay = 0, direction = "up" }: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 }
      case "down":
        return { opacity: 0, y: -30 }
      case "left":
        return { opacity: 0, x: 30 }
      case "right":
        return { opacity: 0, x: -30 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 30 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth acceleration/deceleration
      }}
      className="will-change-transform will-change-opacity"
    >
      {children}
    </motion.div>
  )
}

