"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { ProductCard } from "@/components/product/product-card"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIsMobile } from "@/lib/hooks/use-media-query"
import type { Product } from "@/types"

interface ProductsCarouselProps {
  title: string
  description?: string
  products: Product[]
  viewAllLink?: string
  viewAllText?: string
  className?: string
}

export function ProductsCarousel({
  title,
  description,
  products,
  viewAllLink = "/products",
  viewAllText = "مشاهده همه محصولات",
  className,
}: ProductsCarouselProps) {
  const isMobile = useIsMobile()

  return (
    <Section className={className}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <Heading>{title}</Heading>
          {description && <p className="text-muted-foreground mt-1 md:text-lg">{description}</p>}
        </div>

        {viewAllLink && (
          <Button variant="outline" asChild>
            <Link href={viewAllLink}>{viewAllText}</Link>
          </Button>
        )}
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
          {products.map((product) => (
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

      {viewAllLink && (
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" asChild>
            <Link href={viewAllLink}>{viewAllText}</Link>
          </Button>
        </div>
      )}
    </Section>
  )
}

