"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 50000000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const brands = [
    { id: "samsung", label: "سامسونگ" },
    { id: "apple", label: "اپل" },
    { id: "xiaomi", label: "شیائومی" },
    { id: "sony", label: "سونی" },
    { id: "lg", label: "ال جی" },
    { id: "huawei", label: "هواوی" },
  ]

  const colors = [
    { id: "black", label: "مشکی", color: "bg-black" },
    { id: "white", label: "سفید", color: "bg-white border" },
    { id: "gray", label: "خاکستری", color: "bg-gray-500" },
    { id: "blue", label: "آبی", color: "bg-blue-500" },
    { id: "red", label: "قرمز", color: "bg-red-500" },
    { id: "green", label: "سبز", color: "bg-green-500" },
  ]

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]))
  }

  const clearAllFilters = () => {
    setPriceRange([0, 50000000])
    setSelectedBrands([])
    setSelectedColors([])
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  const hasActiveFilters =
    selectedBrands.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 50000000

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">فیلترها</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 text-xs">
            پاک کردن همه
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedBrands.map((brand) => {
            const brandLabel = brands.find((b) => b.id === brand)?.label
            return (
              <Badge key={brand} variant="outline" className="rounded-full px-3 py-1">
                {brandLabel}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleBrand(brand)}
                  className="h-4 w-4 mr-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">حذف</span>
                </Button>
              </Badge>
            )
          })}

          {selectedColors.map((color) => {
            const colorItem = colors.find((c) => c.id === color)
            return (
              <Badge key={color} variant="outline" className="rounded-full px-3 py-1">
                {colorItem?.label}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleColor(color)}
                  className="h-4 w-4 mr-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">حذف</span>
                </Button>
              </Badge>
            )
          })}

          {(priceRange[0] > 0 || priceRange[1] < 50000000) && (
            <Badge variant="outline" className="rounded-full px-3 py-1">
              قیمت: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setPriceRange([0, 50000000])}
                className="h-4 w-4 mr-1 hover:bg-transparent"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">حذف</span>
              </Button>
            </Badge>
          )}
        </div>
      )}

      <Accordion type="multiple" defaultValue={["price", "brand", "color"]} className="w-full">
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger>محدوده قیمت</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 50000000]}
                value={priceRange}
                min={0}
                max={50000000}
                step={1000000}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between text-sm">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand" className="border-b">
          <AccordionTrigger>برند</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={() => toggleBrand(brand.id)}
                  />
                  <Label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                    {brand.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color" className="border-b">
          <AccordionTrigger>رنگ</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <div key={color.id} className="flex flex-col items-center gap-1" onClick={() => toggleColor(color.id)}>
                  <div
                    className={`h-8 w-8 rounded-full cursor-pointer ${color.color} ${
                      selectedColors.includes(color.id) ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                  />
                  <span className="text-xs">{color.label}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability" className="border-b">
          <AccordionTrigger>وضعیت موجودی</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="available" />
                <Label htmlFor="available" className="text-sm cursor-pointer">
                  فقط کالاهای موجود
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="discount" />
                <Label htmlFor="discount" className="text-sm cursor-pointer">
                  فقط کالاهای دارای تخفیف
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">اعمال فیلترها</Button>
    </div>
  )
}

