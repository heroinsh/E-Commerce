"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-square overflow-hidden rounded-lg border"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="تصویر محصول"
          fill
          className={`object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
          onClick={handleNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded-md text-xs">
          <ZoomIn className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
              index === currentImage ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image || "/placeholder.svg"} alt={`تصویر ${index + 1} محصول`} fill className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  )
}

