"use client"

import { motion } from "framer-motion"

export default function Timeline() {
  const events = [
    {
      time: "2:00 PM",
      title: "Guest Arrival",
      description: "Guests begin to arrive and are seated",
      icon: "🚗",
    },
    {
      time: "3:00 PM",
      title: "Ceremony",
      description: "Wedding ceremony begins",
      icon: "💍",
    },
    {
      time: "4:00 PM",
      title: "Cocktail Hour",
      description: "Enjoy drinks and hors d'oeuvres while the wedding party takes photos",
      icon: "🥂",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-light via-primary to-blue-DEFAULT -translate-x-1/2"></div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`will-change-transform relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline dot */}
              <motion.div
                className="will-change-transform absolute left-4 md:left-1/2 w-8 h-8 rounded-full -translate-x-1/2 z-10 flex items-center justify-center"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, #4682b4, #87cefa)"
                      : "linear-gradient(135deg, #87cefa, #4682b4)",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05 + 0.2,
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">
                  {event.icon}
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                className={`will-change-transform md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left" : "md:pl-12 text-right"}`}
                initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05 + 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="text-xl font-medium text-white">{event.time}</div>
              </motion.div>

              {/* Content */}
              <motion.div
                className={`will-change-transform md:w-1/2 pl-16 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 text-right"}`}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05 + 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-light/20">
                  <h3 className="text-lg font-medium">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

