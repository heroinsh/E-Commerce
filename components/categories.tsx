import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "الکترونیک",
      image: "/placeholder.svg?height=200&width=200",
      count: "۱۲۵ محصول",
    },
    {
      id: 2,
      name: "پوشاک",
      image: "/placeholder.svg?height=200&width=200",
      count: "۲۳۰ محصول",
    },
    {
      id: 3,
      name: "لوازم خانگی",
      image: "/placeholder.svg?height=200&width=200",
      count: "۹۵ محصول",
    },
    {
      id: 4,
      name: "زیبایی و سلامت",
      image: "/placeholder.svg?height=200&width=200",
      count: "۱۸۰ محصول",
    },
    {
      id: 5,
      name: "ورزشی",
      image: "/placeholder.svg?height=200&width=200",
      count: "۷۵ محصول",
    },
    {
      id: 6,
      name: "کتاب و لوازم تحریر",
      image: "/placeholder.svg?height=200&width=200",
      count: "۱۱۰ محصول",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">دسته‌بندی‌های محصولات</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              محصولات مورد نظر خود را در دسته‌بندی‌های مختلف جستجو کنید
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

