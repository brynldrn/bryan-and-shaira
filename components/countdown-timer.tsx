"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!isClient) {
    return null
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="relative">
            <motion.div
              className="bg-background/80 backdrop-blur-sm w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg flex items-center justify-center text-5xl md:text-6xl font-light mb-4 border border-blue-light/20 will-change-transform"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "linear-gradient(135deg, rgba(70, 130, 180, 0.1), rgba(255, 105, 180, 0.1))",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="will-change-transform px-4 py-2 flex items-center justify-center w-full h-full"
                >
                  {value.toString().padStart(2, "0")}
                </motion.span>
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-DEFAULT rounded-full animate-ping-slow opacity-70"></div>
              <div
                className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-DEFAULT rounded-full animate-ping-slow opacity-70"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </div>
          <div className="text-xl font-medium text-muted-foreground capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

