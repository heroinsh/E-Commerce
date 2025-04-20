"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

export function ProductGrid() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<number[]>([])

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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
    },
    {
      id: 9,
      name: "ماوس گیمینگ لاجیتک مدل G502 HERO",
      price: "۲,۵۰۰,۰۰۰",
      originalPrice: "۲,۸۰۰,۰۰۰",
      discount: "۱۱٪",
      rating: 4.7,
      reviewCount: 324,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "کیبورد مکانیکی ریزر مدل BlackWidow V3",
      price: "۳,۸۰۰,۰۰۰",
      originalPrice: "۴,۲۰۰,۰۰۰",
      discount: "۱۰٪",
      rating: 4.6,
      reviewCount: 187,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "هدست گیمینگ هایپرایکس مدل Cloud Alpha",
      price: "۳,۲۰۰,۰۰۰",
      originalPrice: "۳,۶۰۰,۰۰۰",
      discount: "۱۱٪",
      rating: 4.5,
      reviewCount: 156,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "مانیتور گیمینگ ایسوس مدل TUF Gaming VG27AQ",
      price: "۱۲,۵۰۰,۰۰۰",
      originalPrice: "۱۴,۰۰۰,۰۰۰",
      discount: "۱۱٪",
      rating: 4.8,
      reviewCount: 92,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        toast({
          title: "از لیست علاقه‌مندی‌ها حذف شد",
          description: "محصول از لیست علاقه‌مندی‌های شما حذف شد.",
        })
        return prev.filter((id) => id !== productId)
      } else {
        toast({
          title: "به لیست علاقه‌مندی‌ها اضافه شد",
          description: "محصول به لیست علاقه‌مندی‌های شما اضافه شد.",
        })
        return [...prev, productId]
      }
    })
  }

  const addToCart = (productName: string) => {
    toast({
      title: "به سبد خرید اضافه شد",
      description: `${productName} به سبد خرید شما اضافه شد.`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
        >
          <div className="relative pt-4">
            {product.discount && (
              <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">
                {product.discount} تخفیف
              </Badge>
            )}
            {product.isNew && (
              <Badge className="absolute top-2 left-2 z-10 bg-green-500 hover:bg-green-600">جدید</Badge>
            )}
            <Link href={`/products/${product.id}`} className="relative block h-48 w-full overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full shadow-md"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart className={cn("h-4 w-4", wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "")} />
                <span className="sr-only">افزودن به علاقه‌مندی‌ها</span>
              </Button>
              <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md">
                <Eye className="h-4 w-4" />
                <span className="sr-only">مشاهده سریع</span>
              </Button>
            </div>
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
                <span className="block text-sm text-muted-foreground line-through">{product.originalPrice} تومان</span>
              )}
              <span className="font-bold text-lg">{product.price} تومان</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full gap-2" onClick={() => addToCart(product.name)}>
              <ShoppingCart className="h-4 w-4" />
              افزودن به سبد
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

