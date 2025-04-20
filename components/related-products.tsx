import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function RelatedProducts() {
  const products = [
    {
      id: 1,
      name: "هدفون بی‌سیم سونی مدل WH-CH510",
      price: "۲,۵۰۰,۰۰۰",
      rating: 4.2,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "هدفون بی‌سیم اپل مدل AirPods Pro",
      price: "۹,۸۰۰,۰۰۰",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "هدفون بی‌سیم بیتس مدل Studio3",
      price: "۷,۲۰۰,۰۰۰",
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "هدفون بی‌سیم جی‌بی‌ال مدل T450BT",
      price: "۳,۵۰۰,۰۰۰",
      rating: 4.0,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-sm line-clamp-2 h-10">{product.name}</h3>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{product.rating}</span>
              </div>
              <p className="font-bold text-base mt-2">{product.price} تومان</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" size="sm" asChild>
                <Link href={`/products/${product.id}`}>مشاهده محصول</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

