import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { formatPrice } from "@/lib/constants"
import type { Product } from "@/types"

interface SpecialOffersProps {
  title?: string
  description?: string
  products: Product[]
  className?: string
}

export function SpecialOffers({
  title = "پیشنهادات ویژه",
  description = "تخفیف‌های ویژه و محدود ما را از دست ندهید",
  products,
  className,
}: SpecialOffersProps) {
  // Get top 3 products with highest discount
  const topDiscountProducts = [...products]
    .filter((product) => product.originalPrice)
    .sort((a, b) => {
      const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0
      const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0
      return discountB - discountA
    })
    .slice(0, 3)

  return (
    <Section className={cn("bg-muted/50", className)}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>{title}</Heading>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {topDiscountProducts.map((product) => {
          const discount = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0

          return (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative">
                <Badge className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-600">{discount}٪ تخفیف</Badge>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={product.image || "/placeholder.svg?height=400&width=600"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="line-through text-muted-foreground">{formatPrice(product.originalPrice || 0)}</p>
                    <p className="font-bold text-lg text-red-500">{formatPrice(product.price)}</p>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full" asChild>
                      <Link href={`/products/${product.slug}`}>مشاهده و خرید</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

