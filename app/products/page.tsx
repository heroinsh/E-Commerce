import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Filter, GridIcon, List } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">صفحه اصلی</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 lg:w-1/5 hidden md:block">
          <ProductFilters />
        </div>

        <div className="md:w-3/4 lg:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">همه محصولات</h1>
              <p className="text-muted-foreground mt-1">نمایش ۱-۲۴ از ۱۲۸ محصول</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="w-full sm:w-auto">
                <ProductSort />
              </div>
              <div className="hidden md:flex border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" />
                <Button variant="ghost" size="icon" className="rounded-none rounded-l-md">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <ProductGrid />

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">صفحه قبل</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                4
              </Button>
              <Button variant="outline" size="icon">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">صفحه بعد</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

