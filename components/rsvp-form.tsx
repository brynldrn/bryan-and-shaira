"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import Confetti from "@/components/confetti"

export default function RsvpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "RSVP Submitted",
      description: "Thank you for your response! We'll send you more details soon.",
    })

    setIsSubmitting(false)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
    setEmail("")
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="inline-block text-gradient font-medium text-lg">
            Enter your email to RSVP
          </Label>
          <p className="text-muted-foreground text-sm mb-4">
            We'll send you all the details and updates about our special day
          </p>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary h-12 text-lg will-change-transform"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-lg relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 will-change-transform"
          disabled={isSubmitting}
          style={{
            background: "linear-gradient(90deg, #4682b4, #87cefa)",
          }}
        >
          <span className="relative z-10">{isSubmitting ? "Submitting..." : "RSVP Now"}</span>
          <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100"></span>
        </Button>
      </form>
    </>
  )
}

