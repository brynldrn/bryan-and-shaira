"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingHeartsProps {
  count?: number
  speed?: number
}

export default function FloatingHearts({ count = 20, speed = 1 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      rotation: number
      color: string
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const colors = [
      "rgba(70, 130, 180, 0.7)", // steel blue
      "rgba(173, 216, 230, 0.7)", // light blue
      "rgba(135, 206, 250, 0.7)", // light sky blue
      "rgba(30, 144, 255, 0.7)", // dodger blue
      "rgba(100, 149, 237, 0.7)", // cornflower blue
    ]

    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: (Math.random() * 10 + 15) / speed,
    }))

    setHearts(newHearts)
  }, [count, speed])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute will-change-transform"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.sin(heart.id) * 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.22, 1, 0.36, 1],
            y: {
              duration: heart.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
            className="will-change-transform"
          >
            <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill={heart.color} stroke="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

