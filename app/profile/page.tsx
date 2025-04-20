import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Box, CreditCard, Heart, LogOut, Settings, ShoppingBag, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">حساب کاربری من</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="تصویر کاربر" />
                <AvatarFallback>کاربر</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">علی محمدی</CardTitle>
              <CardDescription>ali@example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <nav className="flex flex-col space-y-1">
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/profile">
                  <User className="ml-2 h-4 w-4" />
                  پروفایل
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/profile/orders">
                  <ShoppingBag className="ml-2 h-4 w-4" />
                  سفارش‌های من
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/profile/addresses">
                  <Box className="ml-2 h-4 w-4" />
                  آدرس‌های من
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/wishlist">
                  <Heart className="ml-2 h-4 w-4" />
                  لیست علاقه‌مندی‌ها
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/profile/payment-methods">
                  <CreditCard className="ml-2 h-4 w-4" />
                  روش‌های پرداخت
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/profile/settings">
                  <Settings className="ml-2 h-4 w-4" />
                  تنظیمات
                </Link>
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="ml-2 h-4 w-4" />
                خروج از حساب کاربری
              </Button>
            </nav>
          </CardContent>
        </Card>

        <div className="md:col-span-3 space-y-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">اطلاعات شخصی</TabsTrigger>
              <TabsTrigger value="orders">سفارش‌های اخیر</TabsTrigger>
              <TabsTrigger value="addresses">آدرس‌های من</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات شخصی</CardTitle>
                  <CardDescription>اطلاعات شخصی خود را مدیریت کنید</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">نام</Label>
                      <Input id="firstName" placeholder="نام خود را وارد کنید" defaultValue="علی" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">نام خانوادگی</Label>
                      <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" defaultValue="محمدی" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        defaultValue="ali@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره موبایل</Label>
                      <Input id="phone" placeholder="شماره موبایل خود را وارد کنید" defaultValue="۰۹۱۲۳۴۵۶۷۸۹" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">تاریخ تولد</Label>
                    <Input id="birthdate" placeholder="تاریخ تولد خود را وارد کنید" defaultValue="۱۳۷۰/۰۶/۱۵" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">انصراف</Button>
                  <Button>ذخیره تغییرات</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>سفارش‌های اخیر</CardTitle>
                  <CardDescription>لیست سفارش‌های اخیر شما</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted/50 p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">سفارش #۱۲۳۴۵</p>
                          <p className="text-sm text-muted-foreground">تاریخ: ۱۴۰۲/۰۳/۱۵</p>
                        </div>
                        <div className="text-left">
                          <Badge className="bg-green-500 hover:bg-green-600">تحویل شده</Badge>
                          <p className="text-sm mt-1">مبلغ: ۲,۵۰۰,۰۰۰ تومان</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center">
                          <div className="relative h-16 w-16 ml-3">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="تصویر محصول"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">هدفون بی‌سیم سونی</h3>
                            <p className="text-sm text-muted-foreground">تعداد: ۱</p>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/profile/orders/12345">مشاهده جزئیات</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted/50 p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">سفارش #۱۲۳۴۶</p>
                          <p className="text-sm text-muted-foreground">تاریخ: ۱۴۰۲/۰۲/۲۰</p>
                        </div>
                        <div className="text-left">
                          <Badge className="bg-blue-500 hover:bg-blue-600">در حال ارسال</Badge>
                          <p className="text-sm mt-1">مبلغ: ۴,۸۰۰,۰۰۰ تومان</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center">
                          <div className="relative h-16 w-16 ml-3">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="تصویر محصول"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">گوشی موبایل سامسونگ</h3>
                            <p className="text-sm text-muted-foreground">تعداد: ۱</p>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/profile/orders/12346">مشاهده جزئیات</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/profile/orders">مشاهده همه سفارش‌ها</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>آدرس‌های من</CardTitle>
                  <CardDescription>آدرس‌های خود را مدیریت کنید</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold">منزل</h3>
                            <Badge className="mr-2">پیش‌فرض</Badge>
                          </div>
                          <p className="mt-2">علی محمدی</p>
                          <p className="text-muted-foreground">تهران، خیابان ولیعصر، کوچه بهار، پلاک ۱۲، واحد ۳</p>
                          <p className="text-muted-foreground">کد پستی: ۱۲۳۴۵۶۷۸۹۰</p>
                          <p className="text-muted-foreground">شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            ویرایش
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            حذف
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">محل کار</h3>
                          <p className="mt-2">علی محمدی</p>
                          <p className="text-muted-foreground">تهران، خیابان شریعتی، خیابان ملک، پلاک ۴۵، طبقه ۲</p>
                          <p className="text-muted-foreground">کد پستی: ۹۸۷۶۵۴۳۲۱۰</p>
                          <p className="text-muted-foreground">شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            ویرایش
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            حذف
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">افزودن آدرس جدید</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

