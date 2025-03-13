"use client"

import { motion } from "framer-motion"

interface DecorativeElementProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
}

export default function DecorativeElement({ position }: DecorativeElementProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0"
      case "top-right":
        return "top-0 right-0"
      case "bottom-left":
        return "bottom-0 left-0"
      case "bottom-right":
        return "bottom-0 right-0"
      case "top-center":
        return "top-0 left-1/2 -translate-x-1/2"
      case "bottom-center":
        return "bottom-0 left-1/2 -translate-x-1/2"
      default:
        return "top-0 left-0"
    }
  }

  const getRandomShape = () => {
    const shapes = [
      // Heart
      <svg key="heart" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary/20">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>,

      // Flower
      <svg key="flower" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary/20">
        <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M15.9,8.1C15.5,7.7 14.8,7.8 14.4,8.2C14,8.6 13.9,9.3 14.3,9.7C14.7,10.1 15.4,10 15.8,9.6C16.2,9.2 16.3,8.5 15.9,8.1M15.9,15.9C16.3,15.5 16.2,14.8 15.8,14.4C15.4,14 14.7,13.9 14.3,14.3C13.9,14.7 14,15.4 14.4,15.8C14.8,16.2 15.5,16.3 15.9,15.9M9.1,15.9C9.5,16.3 10.2,16.2 10.6,15.8C11,15.4 11.1,14.7 10.7,14.3C10.3,13.9 9.6,14 9.2,14.4C8.8,14.8 8.7,15.5 9.1,15.9M9.1,8.1C8.7,8.5 8.8,9.2 9.2,9.6C9.6,10 10.3,10.1 10.7,9.7C11.1,9.3 11,8.6 10.6,8.2C10.2,7.8 9.5,7.7 9.1,8.1M6,12C6,13.1 6.9,14 8,14C9.1,14 10,13.1 10,12C10,10.9 9.1,10 8,10C6.9,10 6,10.9 6,12M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M12,16C10.9,16 10,16.9 10,18C10,19.1 10.9,20 12,20C13.1,20 14,19.1 14,18C14,16.9 13.1,16 12,16Z" />
      </svg>,

      // Ring
      <svg
        key="ring"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/20"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
      </svg>,

      // Cake
      <svg key="cake" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary/20">
        <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.12,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
      </svg>,
    ]

    return shapes[Math.floor(Math.random() * shapes.length)]
  }

  return (
    <div className={`absolute ${getPositionClasses()} opacity-50 pointer-events-none z-0`}>
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {getRandomShape()}
      </motion.div>
    </div>
  )
}

