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
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import { useCartStore } from "@/lib/store/cart-store"
import { formatPrice } from "@/lib/constants"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  variant?: "default" | "compact"
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const wishlistStore = useWishlistStore()
  const cartStore = useCartStore()
  const isInWishlist = wishlistStore.has(product.id)

  const toggleWishlist = () => {
    wishlistStore.toggle(product.id)
    toast({
      title: isInWishlist ? "از لیست علاقه‌مندی‌ها حذف شد" : "به لیست علاقه‌مندی‌ها اضافه شد",
      description: isInWishlist ? "محصول از لیست علاقه‌مندی‌های شما حذف شد." : "محصول به لیست علاقه‌مندی‌های شما اضافه شد.",
    })
  }

  const addToCart = () => {
    cartStore.addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })

    toast({
      title: "به سبد خرید اضافه شد",
      description: `${product.name} به سبد خرید شما اضافه شد.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card
      className={cn(
        "group overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md",
        variant === "compact" ? "h-full" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pt-3">
        {discount > 0 && (
          <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">{discount}٪ تخفیف</Badge>
        )}
        {product.isNew && <Badge className="absolute top-2 left-2 z-10 bg-green-500 hover:bg-green-600">جدید</Badge>}
        {product.tag && (
          <Badge
            className={cn(
              "absolute top-2 left-2 z-10",
              product.isNew ? "top-10" : "top-2",
              product.tag === "پرفروش"
                ? "bg-blue-500 hover:bg-blue-600"
                : product.tag === "محبوب"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : product.tag === "پیشنهاد ویژه"
                    ? "bg-amber-500 hover:bg-amber-600"
                    : "bg-gray-500 hover:bg-gray-600",
            )}
          >
            {product.tag}
          </Badge>
        )}

        <Link href={`/products/${product.slug}`} className="block overflow-hidden">
          <AspectRatio ratio={1} className="bg-muted/30">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className={cn(
                "object-contain p-3 transition-transform duration-500",
                isHovered ? "scale-110" : "scale-100",
              )}
            />
          </AspectRatio>
        </Link>

        <div
          className={cn(
            "absolute top-2 left-1/2 -translate-x-1/2 flex gap-1.5 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
          )}
        >
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md" onClick={toggleWishlist}>
            <Heart className={cn("h-4 w-4", isInWishlist ? "fill-red-500 text-red-500" : "")} />
            <span className="sr-only">افزودن به علاقه‌مندی‌ها</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full shadow-md"
            onClick={() => {
              // Quick view functionality would go here
              toast({
                title: "مشاهده سریع",
                description: `مشاهده سریع ${product.name}`,
              })
            }}
          >
            <Eye className="h-4 w-4" />
            <span className="sr-only">مشاهده سریع</span>
          </Button>
        </div>
      </div>

      <CardContent className={cn("p-4", variant === "compact" ? "p-3" : "p-4")}>
        <Link href={`/products/${product.slug}`}>
          <h3
            className={cn(
              "font-medium line-clamp-2 min-h-[48px] hover:text-primary transition-colors",
              variant === "compact" ? "text-sm min-h-[40px]" : "",
            )}
          >
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  variant === "compact" ? "h-3 w-3" : "",
                  i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300",
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        <div className="mt-3">
          {product.originalPrice && (
            <span className="block text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="font-bold text-lg">{formatPrice(product.price)}</span>
        </div>
      </CardContent>

      <CardFooter className={cn("p-4 pt-0", variant === "compact" ? "p-3 pt-0" : "p-4 pt-0")}>
        <Button className="w-full gap-2" size={variant === "compact" ? "sm" : "default"} onClick={addToCart}>
          <ShoppingCart className={cn("h-4 w-4", variant === "compact" ? "h-3.5 w-3.5" : "")} />
          افزودن به سبد
        </Button>
      </CardFooter>
    </Card>
  )
}

