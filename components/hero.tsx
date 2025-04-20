"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=800&width=1600",
      title: "تخفیف‌های ویژه تابستانه",
      description: "تا ۵۰٪ تخفیف در محصولات منتخب",
      buttonText: "مشاهده محصولات",
      buttonLink: "/offers",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      image: "/placeholder.svg?height=800&width=1600",
      title: "جدیدترین گجت‌های هوشمند",
      description: "آخرین محصولات تکنولوژی با بهترین قیمت",
      buttonText: "خرید محصولات",
      buttonLink: "/categories/electronics",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      image: "/placeholder.svg?height=800&width=1600",
      title: "مد و پوشاک ۱۴۰۳",
      description: "جدیدترین مدل‌های لباس و اکسسوری",
      buttonText: "مشاهده کالکشن",
      buttonLink: "/categories/clothing",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} z-0`}></div>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <div className="container relative z-20 h-full flex items-center">
              <div className="max-w-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-6 drop-shadow-md">{slide.description}</p>
                <Button size="lg" className="font-medium" asChild>
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn("w-3 h-3 rounded-full transition-all", index === currentSlide ? "bg-white" : "bg-white/50")}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

