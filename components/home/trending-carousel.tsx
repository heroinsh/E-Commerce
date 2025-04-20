"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { ProductCard } from "@/components/product/product-card"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIsMobile } from "@/lib/hooks/use-media-query"
import type { Product } from "@/types"

interface TrendingCarouselProps {
  title?: string
  description?: string
  products: Product[]
  viewAllLink?: string
  viewAllText?: string
  className?: string
}

export function TrendingCarousel({
  title = "محصولات پرطرفدار",
  description = "محصولات محبوب و پرفروش ما",
  products,
  viewAllLink = "/products",
  viewAllText = "مشاهده همه محصولات",
  className,
}: TrendingCarouselProps) {
  const isMobile = useIsMobile()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Get unique tags from products
  const tags = Array.from(new Set(products.filter((product) => product.tag).map((product) => product.tag as string)))

  // Filter products based on active tag
  const filteredProducts = activeTag ? products.filter((product) => product.tag === activeTag) : products

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "پرفروش":
        return "bg-blue-500 hover:bg-blue-600"
      case "محبوب":
        return "bg-purple-500 hover:bg-purple-600"
      case "پیشنهاد ویژه":
        return "bg-red-500 hover:bg-red-600"
      case "جدید":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <Section className={className}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <Heading>{title}</Heading>
          <p className="text-muted-foreground mt-1 md:text-lg">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTag(null)}
            className="rounded-full"
          >
            همه
          </Button>
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTag(tag)}
              className={cn("rounded-full", activeTag === tag && getTagColor(tag))}
            >
              {tag}
            </Button>
          ))}
        </div>
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
          {filteredProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className={cn(isMobile ? "basis-full sm:basis-1/2" : "basis-1/2 md:basis-1/3 lg:basis-1/4")}
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -right-4 bg-background border shadow-sm" />
        <CarouselNext className="hidden md:flex -left-4 bg-background border shadow-sm" />
      </Carousel>

      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg" asChild>
          <Link href={viewAllLink}>{viewAllText}</Link>
        </Button>
      </div>
    </Section>
  )
}

