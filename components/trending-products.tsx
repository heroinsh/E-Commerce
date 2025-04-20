"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TrendingProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      id: 1,
      name: "هدفون بی‌سیم سونی مدل WH-1000XM4",
      price: "۸,۵۰۰,۰۰۰",
      originalPrice: "۱۰,۲۰۰,۰۰۰",
      discount: "۱۷٪",
      rating: 4.8,
      reviewCount: 256,
      image: "/placeholder.svg?height=300&width=300",
      tag: "پرفروش",
    },
    {
      id: 2,
      name: "گوشی موبایل سامسونگ مدل Galaxy S21",
      price: "۲۴,۵۰۰,۰۰۰",
      originalPrice: "۲۸,۰۰۰,۰۰۰",
      discount: "۱۲٪",
      rating: 4.5,
      reviewCount: 189,
      image: "/placeholder.svg?height=300&width=300",
      tag: "محبوب",
    },
    {
      id: 3,
      name: "لپ‌تاپ اپل مدل MacBook Air M1",
      price: "۴۵,۰۰۰,۰۰۰",
      originalPrice: "۴۸,۰۰۰,۰۰۰",
      discount: "۶٪",
      rating: 4.9,
      reviewCount: 320,
      image: "/placeholder.svg?height=300&width=300",
      tag: "پیشنهاد ویژه",
    },
    {
      id: 4,
      name: "ساعت هوشمند اپل واچ سری ۷",
      price: "۱۵,۸۰۰,۰۰۰",
      originalPrice: "۱۸,۵۰۰,۰۰۰",
      discount: "۱۵٪",
      rating: 4.7,
      reviewCount: 142,
      image: "/placeholder.svg?height=300&width=300",
      tag: "جدید",
    },
    {
      id: 5,
      name: "دوربین دیجیتال کانن مدل EOS 90D",
      price: "۳۵,۰۰۰,۰۰۰",
      originalPrice: "۳۸,۰۰۰,۰۰۰",
      discount: "۸٪",
      rating: 4.6,
      reviewCount: 98,
      image: "/placeholder.svg?height=300&width=300",
      tag: "پرفروش",
    },
    {
      id: 6,
      name: "تبلت سامسونگ مدل Galaxy Tab S7",
      price: "۱۸,۵۰۰,۰۰۰",
      originalPrice: "۲۱,۰۰۰,۰۰۰",
      discount: "۱۲٪",
      rating: 4.4,
      reviewCount: 76,
      image: "/placeholder.svg?height=300&width=300",
      tag: "محبوب",
    },
    {
      id: 7,
      name: "اسپیکر بلوتوثی جی‌بی‌ال مدل Charge 5",
      price: "۴,۲۰۰,۰۰۰",
      originalPrice: "۴,۸۰۰,۰۰۰",
      discount: "۱۲٪",
      rating: 4.3,
      reviewCount: 112,
      image: "/placeholder.svg?height=300&width=300",
      tag: "پیشنهاد ویژه",
    },
    {
      id: 8,
      name: "کنسول بازی سونی مدل PlayStation 5",
      price: "۲۸,۰۰۰,۰۰۰",
      originalPrice: "۳۲,۰۰۰,۰۰۰",
      discount: "۱۲٪",
      rating: 4.9,
      reviewCount: 215,
      image: "/placeholder.svg?height=300&width=300",
      tag: "جدید",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 330 // Approximately the width of a card + gap

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

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
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">محصولات پرطرفدار</h2>
            <p className="text-muted-foreground mt-1">محصولات محبوب و پرفروش ما</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/products">مشاهده همه محصولات</Link>
          </Button>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 space-x-4 space-x-reverse"
          >
            {products.map((product) => (
              <Card key={product.id} className="min-w-[280px] max-w-[280px] flex-shrink-0 overflow-hidden">
                <div className="relative pt-4">
                  {product.discount && (
                    <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">
                      {product.discount} تخفیف
                    </Badge>
                  )}
                  {product.tag && (
                    <Badge className={`absolute top-2 left-2 z-10 ${getTagColor(product.tag)}`}>{product.tag}</Badge>
                  )}
                  <Link href={`/products/${product.id}`} className="relative block h-48 w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>
                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-medium line-clamp-2 min-h-[48px] hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="mt-3">
                    {product.originalPrice && (
                      <span className="block text-sm text-muted-foreground line-through">
                        {product.originalPrice} تومان
                      </span>
                    )}
                    <span className="font-bold text-lg">{product.price} تومان</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/products/${product.id}`}>مشاهده محصول</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full h-10 w-10 shadow-md hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full h-10 w-10 shadow-md hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

