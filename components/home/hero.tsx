"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface Slide {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  color: string
}

interface HeroProps {
  autoplaySpeed?: number
  slides?: Slide[]
}

export function Hero({ autoplaySpeed = 5000, slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const defaultSlides: Slide[] = [
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

  const activeSlides = slides || defaultSlides

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1))
  }, [activeSlides.length])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? activeSlides.length - 1 : prev - 1))
  }, [activeSlides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNextSlide()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [autoplaySpeed, goToNextSlide, isPaused])

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        <AspectRatio ratio={16 / 7} className="md:aspect-[16/6] lg:aspect-[16/5]">
          {activeSlides.map((slide, index) => (
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
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container px-4 md:px-6">
                  <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-6 drop-shadow-md">{slide.description}</p>
                    <Button size="lg" className="font-medium" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AspectRatio>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10 shadow-md hidden sm:flex"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10 shadow-md hidden sm:flex"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

