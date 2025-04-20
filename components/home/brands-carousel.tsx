"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIsMobile } from "@/lib/hooks/use-media-query"
import { BRANDS } from "@/lib/constants"

interface BrandsCarouselProps {
  title?: string
  description?: string
  brands?: typeof BRANDS
  className?: string
}

export function BrandsCarousel({
  title = "برندهای برتر",
  description = "ما با معتبرترین برندهای جهانی همکاری می‌کنیم",
  brands = BRANDS,
  className,
}: BrandsCarouselProps) {
  const isMobile = useIsMobile()

  return (
    <Section className={cn("bg-muted/30", className)}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>{title}</Heading>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">{description}</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          slidesToScroll: isMobile ? 2 : 3,
        }}
        className="w-full"
      >
        <CarouselContent>
          {brands.map((brand) => (
            <CarouselItem key={brand.id} className={cn(isMobile ? "basis-1/3" : "basis-1/4 md:basis-1/5 lg:basis-1/6")}>
              <Card className="flex items-center justify-center p-4 h-24 transition-all hover:shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src={brand.logo || "/placeholder.svg?height=60&width=120"}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -right-4 bg-background border shadow-sm" />
        <CarouselNext className="hidden md:flex -left-4 bg-background border shadow-sm" />
      </Carousel>
    </Section>
  )
}

