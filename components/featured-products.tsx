import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "هدفون بی‌سیم",
      price: "۱,۲۰۰,۰۰۰",
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "ساعت هوشمند",
      price: "۲,۵۰۰,۰۰۰",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "دوربین دیجیتال",
      price: "۵,۸۰۰,۰۰۰",
      rating: 4.2,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "لپ‌تاپ گیمینگ",
      price: "۳۵,۰۰۰,۰۰۰",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">محصولات ویژه</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              محصولات پرفروش و محبوب ما را ببینید
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>
                <p className="font-bold text-lg mt-2">{product.price} تومان</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">افزودن به سبد خرید</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">مشاهده همه محصولات</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

