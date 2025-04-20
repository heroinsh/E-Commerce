"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel"
import { useIsMobile } from "@/lib/hooks/use-media-query"

interface CategoriesCarouselProps {
  title?: string
  description?: string
  categories?: typeof PRODUCT_CATEGORIES
  className?: string
}

export function CategoriesCarousel({
  title = "دسته‌بندی‌های محصولات",
  description = "محصولات مورد نظر خود را در دسته‌بندی‌های مختلف جستجو کنید",
  categories = PRODUCT_CATEGORIES,
  className,
}: CategoriesCarouselProps) {
  const isMobile = useIsMobile()
  const displayCategories = categories.slice(0, 8)

  return (
    <Section className={className}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>{title}</Heading>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">{description}</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          slidesToScroll: isMobile ? 1 : 2,
        }}
        className="w-full"
      >
        <CarouselContent>
          {displayCategories.map((category) => (
            <CarouselItem
              key={category.id}
              className={cn(isMobile ? "basis-1/2" : "basis-1/3 md:basis-1/4 lg:basis-1/6")}
            >
              <Link href={category.href} className="block h-full">
                <Card className="overflow-hidden h-full transition-all hover:shadow-md group">
                  <AspectRatio ratio={1} className="bg-muted/30">
                    <Image
                      src={category.image || "/placeholder.svg?height=200&width=200"}
                      alt={category.name}
                      fill
                      className={cn("object-cover transition-transform duration-500 group-hover:scale-110")}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md shadow-sm">
                        <h3 className="font-medium text-center">{category.name}</h3>
                      </div>
                    </div>
                  </AspectRatio>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -right-4 bg-background border shadow-sm" />
        <CarouselNext className="hidden md:flex -left-4 bg-background border shadow-sm" />
        <CarouselDots className="mt-6" />
      </Carousel>
    </Section>
  )
}

