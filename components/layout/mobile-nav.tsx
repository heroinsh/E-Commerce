"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User, Menu, X, Heart, Home, ChevronLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/lib/hooks/use-media-query"
import { useCartStore } from "@/lib/store/cart-store"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import { useUserStore } from "@/lib/store/user-store"
import { PRODUCT_CATEGORIES, SITE_CONFIG } from "@/lib/constants"

export function MobileNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useIsMobile()
  const totalItems = useCartStore((state) => state.totalItems())
  const wishlistCount = useWishlistStore((state) => state.count())
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)
  const [searchQuery, setSearchQuery] = useState("")

  if (!isMobile) return null

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
      setIsSearchOpen(false)
    }
  }

  const recentSearches = ["هدفون بی‌سیم", "گوشی سامسونگ", "لپ تاپ گیمینگ"]

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
                  {user ? (
                    <>
                      <Avatar className="h-10 w-10 ml-3">
                        {user.avatar ? (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        ) : (
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {user.name.substring(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full">
                      <Button asChild className="w-full">
                        <Link href="/login">ورود / ثبت‌نام</Link>
                      </Button>
                    </div>
                  )}
                </div>
                <div className="overflow-y-auto flex-1">
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Input
                        placeholder="جستجو..."
                        className="pl-10 pr-4"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && searchQuery.trim()) {
                            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
                          }
                        }}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/" className="flex items-center p-2.5 hover:bg-muted rounded-md">
                      <Home className="ml-2.5 h-5 w-5" />
                      صفحه اصلی
                    </Link>
                    <Link href="/offers" className="flex items-center p-2.5 hover:bg-muted rounded-md text-red-500">
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
                        className="ml-2.5"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                      تخفیف‌های ویژه
                    </Link>
                    <Link href="/products" className="flex items-center p-2.5 hover:bg-muted rounded-md">
                      <ShoppingCart className="ml-2.5 h-5 w-5" />
                      همه محصولات
                    </Link>
                    <Link href="/blog" className="flex items-center p-2.5 hover:bg-muted rounded-md">
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
                        className="ml-2.5"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6Z" />
                      </svg>
                      وبلاگ
                    </Link>
                  </div>
                  <div className="p-2">
                    <p className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground">دسته‌بندی‌ها</p>
                    <Accordion type="multiple" className="w-full">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <AccordionItem key={category.id} value={`category-${category.id}`} className="border-b-0">
                          <AccordionTrigger className="py-2.5 px-2.5 hover:bg-muted rounded-md">
                            {category.name}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <div className="pr-4 border-r mr-2.5 mt-1">
                              {category.subcategories?.map((subcategory) => (
                                <Link
                                  key={subcategory.id}
                                  href={subcategory.href}
                                  className="flex items-center py-2.5 px-2.5 hover:bg-muted rounded-md text-sm"
                                >
                                  <ChevronLeft className="ml-1.5 h-4 w-4" />
                                  {subcategory.name}
                                </Link>
                              ))}
                              <Link
                                href={category.href}
                                className="flex items-center py-2.5 px-2.5 hover:bg-muted rounded-md text-sm text-primary font-medium"
                              >
                                مشاهده همه {category.name}
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  {user && (
                    <div className="p-2 border-t">
                      <p className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground">حساب کاربری</p>
                      <Link href="/profile" className="flex items-center p-2.5 hover:bg-muted rounded-md">
                        <User className="ml-2.5 h-5 w-5" />
                        پروفایل
                      </Link>
                      <Link href="/profile/orders" className="flex items-center p-2.5 hover:bg-muted rounded-md">
                        <ShoppingCart className="ml-2.5 h-5 w-5" />
                        سفارش‌های من
                      </Link>
                      <Link href="/wishlist" className="flex items-center p-2.5 hover:bg-muted rounded-md">
                        <Heart className="ml-2.5 h-5 w-5" />
                        علاقه‌مندی‌ها
                      </Link>
                      <button
                        className="flex items-center p-2.5 hover:bg-muted rounded-md text-red-500 w-full text-right"
                        onClick={logout}
                      >
                        <LogOut className="ml-2.5 h-5 w-5" />
                        خروج از حساب کاربری
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/wishlist" className="flex flex-col items-center justify-center relative">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <Badge className="absolute top-0.5 -right-0.5 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                {wishlistCount}
              </Badge>
            )}
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
          <div className="relative h-8 w-8 ml-1.5">
            <Image src="/placeholder.svg?height=32&width=32" alt={SITE_CONFIG.name} fill className="object-contain" />
          </div>
          <span className="font-bold text-lg">{SITE_CONFIG.name}</span>
        </Link>

        <Link href="/cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0">
              {totalItems}
            </Badge>
          )}
        </Link>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="p-4 flex flex-col h-full">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="جستجو در محصولات..."
                  className="pl-10 pr-4"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button type="button" variant="ghost" size="icon" className="ml-2" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </form>
            <div className="border-t pt-4">
              <p className="text-sm font-medium mb-2.5">جستجوهای اخیر</p>
              <div className="space-y-1.5">
                {recentSearches.map((term, index) => (
                  <div key={index} className="flex items-center justify-between p-2.5 hover:bg-muted rounded-md">
                    <div
                      className="flex items-center flex-1 cursor-pointer"
                      onClick={() => {
                        window.location.href = `/search?q=${encodeURIComponent(term)}`
                      }}
                    >
                      <Search className="h-4 w-4 ml-2.5 text-muted-foreground" />
                      <span>{term}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-sm font-medium mb-2.5">دسته‌بندی‌های محبوب</p>
              <div className="grid grid-cols-2 gap-2.5">
                {PRODUCT_CATEGORIES.slice(0, 4).map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="p-2.5 border rounded-md hover:bg-muted text-center"
                  >
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

