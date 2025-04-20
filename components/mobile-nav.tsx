"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User, Menu, X, Heart, Home, ChevronLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"

export function MobileNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useMobile()

  if (!isMobile) return null

  const categories = [
    {
      name: "الکترونیک",
      href: "/categories/electronics",
      subcategories: [
        { name: "موبایل و تبلت", href: "/categories/electronics/mobile" },
        { name: "لپ تاپ", href: "/categories/electronics/laptop" },
        { name: "دوربین", href: "/categories/electronics/camera" },
        { name: "هدفون و هندزفری", href: "/categories/electronics/headphones" },
        { name: "لوازم جانبی", href: "/categories/electronics/accessories" },
      ],
    },
    {
      name: "پوشاک",
      href: "/categories/clothing",
      subcategories: [
        { name: "مردانه", href: "/categories/clothing/men" },
        { name: "زنانه", href: "/categories/clothing/women" },
        { name: "بچگانه", href: "/categories/clothing/kids" },
        { name: "ورزشی", href: "/categories/clothing/sports" },
        { name: "اکسسوری", href: "/categories/clothing/accessories" },
      ],
    },
    {
      name: "لوازم خانگی",
      href: "/categories/home-appliances",
      subcategories: [
        { name: "یخچال و فریزر", href: "/categories/home-appliances/refrigerator" },
        { name: "ماشین لباسشویی", href: "/categories/home-appliances/washing-machine" },
        { name: "جاروبرقی", href: "/categories/home-appliances/vacuum-cleaner" },
        { name: "آشپزخانه", href: "/categories/home-appliances/kitchen" },
        { name: "صوتی و تصویری", href: "/categories/home-appliances/audio-video" },
      ],
    },
    {
      name: "زیبایی و سلامت",
      href: "/categories/beauty-health",
      subcategories: [
        { name: "لوازم آرایشی", href: "/categories/beauty-health/makeup" },
        { name: "عطر و ادکلن", href: "/categories/beauty-health/perfume" },
        { name: "مراقبت پوست", href: "/categories/beauty-health/skincare" },
        { name: "مراقبت مو", href: "/categories/beauty-health/haircare" },
        { name: "لوازم بهداشتی", href: "/categories/beauty-health/personal-care" },
      ],
    },
    {
      name: "ورزشی",
      href: "/categories/sports",
      subcategories: [
        { name: "پوشاک ورزشی", href: "/categories/sports/clothing" },
        { name: "کفش ورزشی", href: "/categories/sports/shoes" },
        { name: "لوازم ورزشی", href: "/categories/sports/equipment" },
        { name: "مکمل‌های ورزشی", href: "/categories/sports/supplements" },
        { name: "دوچرخه", href: "/categories/sports/bicycle" },
      ],
    },
  ]

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-40 md:hidden">
        <div className="grid grid-cols-5 h-16">
          <Link href="/" className="flex flex-col items-center justify-center">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">خانه</span>
          </Link>
          <Link href="/categories" className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-grid"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <span className="text-xs mt-1">دسته‌بندی</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center justify-center w-full">
                <Menu className="h-5 w-5" />
                <span className="text-xs mt-1">منو</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b flex items-center">
                  <Avatar className="h-10 w-10 ml-3">
                    <AvatarFallback className="bg-primary/10 text-primary">ع‌م</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">علی محمدی</p>
                    <p className="text-xs text-muted-foreground">ali@example.com</p>
                  </div>
                </div>
                <div className="overflow-y-auto flex-1">
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Input placeholder="جستجو..." className="pl-10 pr-4" />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/" className="flex items-center p-2 hover:bg-muted rounded-md">
                      <Home className="ml-2 h-5 w-5" />
                      صفحه اصلی
                    </Link>
                    <Link href="/offers" className="flex items-center p-2 hover:bg-muted rounded-md text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                      تخفیف‌های ویژه
                    </Link>
                  </div>
                  <div className="p-2">
                    <p className="px-2 py-1 text-sm font-medium text-muted-foreground">دسته‌بندی‌ها</p>
                    <Accordion type="multiple" className="w-full">
                      {categories.map((category, index) => (
                        <AccordionItem key={index} value={`category-${index}`} className="border-b-0">
                          <AccordionTrigger className="py-2 px-2 hover:bg-muted rounded-md">
                            {category.name}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <div className="pr-4 border-r mr-2 mt-1">
                              {category.subcategories.map((subcategory, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subcategory.href}
                                  className="flex items-center py-2 px-2 hover:bg-muted rounded-md text-sm"
                                >
                                  <ChevronLeft className="ml-1 h-4 w-4" />
                                  {subcategory.name}
                                </Link>
                              ))}
                              <Link
                                href={category.href}
                                className="flex items-center py-2 px-2 hover:bg-muted rounded-md text-sm text-primary font-medium"
                              >
                                مشاهده همه {category.name}
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div className="p-2 border-t">
                    <p className="px-2 py-1 text-sm font-medium text-muted-foreground">حساب کاربری</p>
                    <Link href="/profile" className="flex items-center p-2 hover:bg-muted rounded-md">
                      <User className="ml-2 h-5 w-5" />
                      پروفایل
                    </Link>
                    <Link href="/profile/orders" className="flex items-center p-2 hover:bg-muted rounded-md">
                      <ShoppingCart className="ml-2 h-5 w-5" />
                      سفارش‌های من
                    </Link>
                    <Link href="/wishlist" className="flex items-center p-2 hover:bg-muted rounded-md">
                      <Heart className="ml-2 h-5 w-5" />
                      علاقه‌مندی‌ها
                    </Link>
                    <button className="flex items-center p-2 hover:bg-muted rounded-md text-red-500 w-full text-right">
                      <LogOut className="ml-2 h-5 w-5" />
                      خروج از حساب کاربری
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/wishlist" className="flex flex-col items-center justify-center relative">
            <Heart className="h-5 w-5" />
            <Badge className="absolute top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
              ۲
            </Badge>
            <span className="text-xs mt-1">علاقه‌مندی</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">حساب من</span>
          </Link>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between p-3 bg-background border-b">
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
          <Search className="h-5 w-5" />
        </Button>

        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 ml-1">
            <Image src="/placeholder.svg?height=32&width=32" alt="لوگو فروشگاه" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg">فروشگاه آنلاین</span>
        </Link>

        <Link href="/cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">۳</Badge>
        </Link>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="relative flex-1">
                <Input type="search" placeholder="جستجو در محصولات..." className="pl-10 pr-4" autoFocus />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm font-medium mb-2">جستجوهای اخیر</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 ml-2 text-muted-foreground" />
                    <span>هدفون بی‌سیم</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 ml-2 text-muted-foreground" />
                    <span>گوشی سامسونگ</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 ml-2 text-muted-foreground" />
                    <span>لپ تاپ گیمینگ</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-sm font-medium mb-2">دسته‌بندی‌های محبوب</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 4).map((category, index) => (
                  <Link key={index} href={category.href} className="p-2 border rounded-md hover:bg-muted text-center">
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

