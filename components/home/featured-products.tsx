"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { ProductGrid } from "@/components/product/product-grid"
import type { Product } from "@/types"

interface FeaturedProductsProps {
  title?: string
  description?: string
  products: Product[]
  viewAllLink?: string
  viewAllText?: string
  className?: string
}

export function FeaturedProducts({
  title = "محصولات ویژه",
  description = "محصولات پرفروش و محبوب ما را ببینید",
  products,
  viewAllLink = "/products",
  viewAllText = "مشاهده همه محصولات",
  className,
}: FeaturedProductsProps) {
  const [activeTab, setActiveTab] = useState<string>("all")

  // Create unique list of categories from products
  const categories = Array.from(new Set(products.map((product) => product.categoryId)))

  // Filter products based on active tab
  const filteredProducts =
    activeTab === "all" ? products : products.filter((product) => product.categoryId === activeTab)

  return (
    <Section className={className}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <Heading>{title}</Heading>
          <p className="text-muted-foreground mt-1 md:text-lg">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("all")}
            className="rounded-full"
          >
            همه
          </Button>
          {categories.map((categoryId) => {
            const category = products.find((product) => product.categoryId === categoryId)
            if (!category) return null

            return (
              <Button
                key={categoryId}
                variant={activeTab === categoryId ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(categoryId)}
                className="rounded-full"
              >
                {categoryId}
              </Button>
            )
          })}
        </div>
      </div>

      <ProductGrid products={filteredProducts} columns={4} />

      <div className="flex justify-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link href={viewAllLink}>{viewAllText}</Link>
        </Button>
      </div>
    </Section>
  )
}

