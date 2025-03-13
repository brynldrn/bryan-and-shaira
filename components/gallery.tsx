"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 1" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 2" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 3" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 4" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 5" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Couple photo 6" },
  ]

  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1))
    } else {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1))
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
            onClick={() => setSelectedImage(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-lg font-medium">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none">
          <DialogClose className="absolute right-4 top-4 z-10">
            <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70 hover:text-white">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>

          {selectedImage !== null && (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[80vh]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 text-white hover:bg-black/70 hover:text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateGallery("prev")
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 text-white hover:bg-black/70 hover:text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateGallery("next")
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

