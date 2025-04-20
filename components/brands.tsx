import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Brands() {
  const brands = [
    { name: "سامسونگ", logo: "/placeholder.svg?height=60&width=120" },
    { name: "اپل", logo: "/placeholder.svg?height=60&width=120" },
    { name: "شیائومی", logo: "/placeholder.svg?height=60&width=120" },
    { name: "سونی", logo: "/placeholder.svg?height=60&width=120" },
    { name: "ال جی", logo: "/placeholder.svg?height=60&width=120" },
    { name: "هواوی", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold">برندهای برتر</h2>
          <p className="text-muted-foreground md:text-lg">ما با معتبرترین برندهای جهانی همکاری می‌کنیم</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <Card key={index} className="flex items-center justify-center p-4 h-24">
              <div className="relative h-full w-full">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

