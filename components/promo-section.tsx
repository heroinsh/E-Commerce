import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function PromoSection() {
  const promos = [
    {
      title: "تخفیف ویژه گوشی‌های هوشمند",
      description: "تا ۳۰٪ تخفیف",
      image: "/placeholder.svg?height=200&width=400",
      link: "/categories/electronics/mobile",
      color: "from-blue-500/80 to-indigo-500/80",
    },
    {
      title: "لوازم خانگی",
      description: "تا ۲۵٪ تخفیف",
      image: "/placeholder.svg?height=200&width=400",
      link: "/categories/home-appliances",
      color: "from-green-500/80 to-teal-500/80",
    },
    {
      title: "لوازم آرایشی و بهداشتی",
      description: "تا ۴۰٪ تخفیف",
      image: "/placeholder.svg?height=200&width=400",
      link: "/categories/beauty-health",
      color: "from-pink-500/80 to-rose-500/80",
    },
  ]

  return (
    <section className="py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promos.map((promo, index) => (
            <Link key={index} href={promo.link} className="group relative overflow-hidden rounded-xl h-48">
              <Image
                src={promo.image || "/placeholder.svg"}
                alt={promo.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-tr", promo.color)}></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-white/90">{promo.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

