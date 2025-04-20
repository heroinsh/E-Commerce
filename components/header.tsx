"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Heart, Phone, ChevronDown, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header className={cn("w-full z-50 transition-all duration-300", isScrolled ? "sticky top-0 shadow-sm" : "")}>
      <div className="bg-primary/5 text-gray-700 py-2 hidden md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 ml-1" />
            <span>پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸</span>
            <span className="mx-2">|</span>
            <span>۲۴ ساعته، ۷ روز هفته</span>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse text-sm">
            <Link href="/tracking" className="hover:text-primary transition-colors">
              پیگیری سفارش
            </Link>
            <span className="mx-2">|</span>
            <Link href="/faq" className="hover:text-primary transition-colors">
              سوالات متداول
            </Link>
            <span className="mx-2">|</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-background border-b">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-4">
              <div className="relative h-10 w-10 ml-2">
                <Image src="/placeholder.svg?height=40&width=40" alt="لوگو فروشگاه" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">فروشگاه آنلاین</span>
            </Link>

            <div className="hidden md:flex mr-6 relative flex-1 max-w-md">
              <Input
                type="search"
                placeholder="جستجو در بیش از ۱۰۰,۰۰۰ کالا..."
                className="pl-10 pr-4 h-11 rounded-xl border-primary/20 focus-visible:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {!isMobile && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">۲</Badge>
                      <span className="sr-only">اعلان‌ها</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-bold">اعلان‌ها</h3>
                      <Button variant="ghost" size="sm">
                        علامت‌گذاری همه به عنوان خوانده شده
                      </Button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      <div className="p-4 border-b hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Badge className="bg-blue-500 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium">سفارش شما ارسال شد</p>
                            <p className="text-sm text-muted-foreground">سفارش شماره #۱۲۳۴۵ شما با موفقیت ارسال شد.</p>
                            <p className="text-xs text-muted-foreground mt-1">۱۰ دقیقه پیش</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Badge className="bg-blue-500 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium">تخفیف ویژه محصولات الکترونیکی</p>
                            <p className="text-sm text-muted-foreground">
                              تخفیف ویژه ۳۰٪ برای محصولات الکترونیکی تا پایان هفته.
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">۲ ساعت پیش</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-t">
                      <Button variant="ghost" size="sm" className="w-full">
                        مشاهده همه اعلان‌ها
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">۲</Badge>
                  <span className="sr-only">علاقه‌مندی‌ها</span>
                </Button>
              </>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">ع‌م</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">حساب کاربری</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center p-2 border-b">
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">ع‌م</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">علی محمدی</p>
                    <p className="text-xs text-muted-foreground">ali@example.com</p>
                  </div>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/profile">پروفایل</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/orders">سفارش‌های من</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">لیست علاقه‌مندی‌ها</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 focus:text-red-500">خروج از حساب کاربری</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">۳</Badge>
                <span className="sr-only">سبد خرید</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <nav className="bg-background border-b hidden md:block">
        <div className="container">
          <ul className="flex items-center h-12 space-x-8 space-x-reverse">
            <li>
              <Link href="/" className="flex h-full items-center hover:text-primary transition-colors">
                صفحه اصلی
              </Link>
            </li>
            {categories.map((category, index) => (
              <li key={index} className="group relative h-full flex items-center">
                <Link
                  href={category.href}
                  className="flex h-full items-center hover:text-primary transition-colors group-hover:text-primary"
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4 mr-1 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="space-y-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subcategory.href}
                          className="block p-2 hover:bg-primary/5 rounded-md hover:text-primary transition-colors"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-2 border-t mt-2">
                      <Link
                        href={category.href}
                        className="block p-2 text-primary font-medium hover:bg-primary/5 rounded-md transition-colors"
                      >
                        مشاهده همه {category.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link
                href="/offers"
                className="flex h-full items-center text-red-500 font-medium hover:text-red-600 transition-colors"
              >
                تخفیف‌های ویژه
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

