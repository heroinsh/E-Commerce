import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface CategoriesGridProps {
  title?: string
  description?: string
  categories?: typeof PRODUCT_CATEGORIES
  layout?: "grid" | "carousel"
  className?: string
}

export function CategoriesGrid({
  title = "دسته‌بندی‌های محصولات",
  description = "محصولات مورد نظر خود را در دسته‌بندی‌های مختلف جستجو کنید",
  categories = PRODUCT_CATEGORIES,
  layout = "grid",
  className,
}: CategoriesGridProps) {
  const displayCategories = categories.slice(0, 6)

  return (
    <Section className={className}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>{title}</Heading>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {displayCategories.map((category) => (
          <Link key={category.id} href={category.href} className="block h-full">
            <Card className="overflow-hidden h-full transition-all hover:shadow-md group">
              <AspectRatio ratio={1} className="bg-muted/30">
                <Image
                  src={category.image || "/placeholder.svg?height=200&width=200"}
                  alt={category.name}
                  fill
                  className={cn("object-cover transition-transform duration-500 group-hover:scale-110")}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md shadow-sm">
                    <h3 className="font-medium text-center">{category.name}</h3>
                  </div>
                </div>
              </AspectRatio>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}

