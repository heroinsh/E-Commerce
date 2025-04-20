import { ProductCard } from "@/components/product/product-card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductGridProps {
  products: Product[]
  loading?: boolean
  columns?: 2 | 3 | 4 | 5
  variant?: "default" | "compact"
  className?: string
}

export function ProductGrid({
  products,
  loading = false,
  columns = 4,
  variant = "default",
  className,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        {
          "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5": columns === 5,
          "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns === 4,
          "grid-cols-2 sm:grid-cols-2 md:grid-cols-3": columns === 3,
          "grid-cols-1 sm:grid-cols-2": columns === 2,
        },
        className,
      )}
    >
      {loading
        ? Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="h-[200px] w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-8 w-full" />
              </div>
            ))
        : products.map((product) => <ProductCard key={product.id} product={product} variant={variant} />)}
    </div>
  )
}

