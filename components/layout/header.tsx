"use client"

import type React from "react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/lib/hooks/use-media-query"
import { useScroll } from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { PRODUCT_CATEGORIES, SITE_CONFIG } from "@/lib/constants"
import { useCartStore } from "@/lib/store/cart-store"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import { useUserStore } from "@/lib/store/user-store"
import { useState } from "react"
import { Container } from "@/components/ui/container"

export function Header() {
  const isScrolled = useScroll({ threshold: 10 })
  const isMobile = useIsMobile()
  const totalItems = useCartStore((state) => state.totalItems())
  const wishlistCount = useWishlistStore((state) => state.count())
  const user = useUserStore((state) => state.user)
  const notifications = useUserStore((state) => state.notifications)
  const unreadCount = useUserStore((state) => state.getUnreadCount())
  const markNotificationAsRead = useUserStore((state) => state.markNotificationAsRead)
  const markAllNotificationsAsRead = useUserStore((state) => state.markAllNotificationsAsRead)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300 bg-background",
        isScrolled ? "sticky top-0 shadow-sm" : "",
      )}
    >
      <div className="bg-primary/5 text-gray-700 py-2 hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 ml-1.5" />
              <span>پشتیبانی: {SITE_CONFIG.supportPhone}</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>{SITE_CONFIG.supportHours}</span>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-sm">
              <Link href="/tracking" className="hover:text-primary transition-colors">
                پیگیری سفارش
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link href="/faq" className="hover:text-primary transition-colors">
                سوالات متداول
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link href="/contact" className="hover:text-primary transition-colors">
                تماس با ما
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-b">
        <Container>
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-4">
                <div className="relative h-10 w-10 ml-2.5">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={SITE_CONFIG.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl hidden sm:inline-block">{SITE_CONFIG.name}</span>
              </Link>

              {!isMobile && (
                <form onSubmit={handleSearch} className="hidden md:flex mr-6 relative flex-1 max-w-md">
                  <Input
                    type="search"
                    placeholder="جستجو در بیش از ۱۰۰,۰۰۰ کالا..."
                    className="pl-10 pr-4 h-11 rounded-xl border-primary/20 focus-visible:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 h-9 w-9"
                  >
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {!isMobile && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        {unreadCount > 0 && (
                          <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0">
                            {unreadCount}
                          </Badge>
                        )}
                        <span className="sr-only">اعلان‌ها</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="font-bold">اعلان‌ها</h3>
                        <Button variant="ghost" size="sm" onClick={markAllNotificationsAsRead}>
                          علامت‌گذاری همه به عنوان خوانده شده
                        </Button>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="p-4 border-b hover:bg-muted/50 transition-colors cursor-pointer"
                              onClick={() => {
                                markNotificationAsRead(notification.id)
                                if (notification.link) {
                                  window.location.href = notification.link
                                }
                              }}
                            >
                              <div className="flex items-start gap-3">
                                {!notification.read && (
                                  <Badge className="bg-blue-500 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                )}
                                <div>
                                  <p className="font-medium">{notification.title}</p>
                                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-8 text-center text-muted-foreground">اعلان جدیدی ندارید</div>
                        )}
                      </div>
                      {notifications.length > 0 && (
                        <div className="p-2 border-t">
                          <Button variant="ghost" size="sm" className="w-full">
                            مشاهده همه اعلان‌ها
                          </Button>
                        </div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/wishlist">
                    <Button variant="ghost" size="icon" className="relative">
                      <Heart className="h-5 w-5" />
                      {wishlistCount > 0 && (
                        <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0">
                          {wishlistCount}
                        </Badge>
                      )}
                      <span className="sr-only">علاقه‌مندی‌ها</span>
                    </Button>
                  </Link>
                </>
              )}

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                      <Avatar className="h-8 w-8">
                        {user.avatar ? (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        ) : (
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {user.name.substring(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span className="sr-only">حساب کاربری</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="flex items-center p-3 border-b">
                      <Avatar className="h-9 w-9 ml-2.5">
                        {user.avatar ? (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        ) : (
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {user.name.substring(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuItem asChild className="py-2.5">
                      <Link href="/profile">پروفایل</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="py-2.5">
                      <Link href="/profile/orders">سفارش‌های من</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="py-2.5">
                      <Link href="/wishlist">لیست علاقه‌مندی‌ها</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-500 focus:text-red-500 py-2.5"
                      onClick={() => useUserStore.getState().logout()}
                    >
                      خروج از حساب کاربری
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" size="sm" className="hidden md:flex" asChild>
                  <Link href="/login">ورود / ثبت‌نام</Link>
                </Button>
              )}

              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0">
                      {totalItems}
                    </Badge>
                  )}
                  <span className="sr-only">سبد خرید</span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <nav className="border-b hidden md:block">
        <Container>
          <ul className="flex items-center h-12 space-x-8 space-x-reverse">
            <li>
              <Link href="/" className="flex h-full items-center hover:text-primary transition-colors font-medium">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="flex h-full items-center hover:text-primary transition-colors font-medium"
              >
                همه محصولات
              </Link>
            </li>
            {PRODUCT_CATEGORIES.map((category) => (
              <li key={category.id} className="group relative h-full flex items-center">
                <Link
                  href={category.href}
                  className="flex h-full items-center hover:text-primary transition-colors group-hover:text-primary font-medium"
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4 mr-1 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="space-y-1">
                    {category.subcategories?.map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          href={subcategory.href}
                          className="block p-2.5 hover:bg-primary/5 rounded-md hover:text-primary transition-colors"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-2 border-t mt-2">
                      <Link
                        href={category.href}
                        className="block p-2.5 text-primary font-medium hover:bg-primary/5 rounded-md transition-colors"
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
            <li>
              <Link href="/blog" className="flex h-full items-center hover:text-primary transition-colors font-medium">
                وبلاگ
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  )
}

