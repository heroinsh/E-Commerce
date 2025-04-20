import Link from "next/link"
import Image from "next/image"
import { CreditCard, Truck, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckoutPage() {
  // در یک پروژه واقعی، اطلاعات سبد خرید از API یا state دریافت می‌شود
  const cartItems = [
    {
      id: 1,
      name: "هدفون بی‌سیم سونی مدل WH-1000XM4",
      price: "۸,۵۰۰,۰۰۰",
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "گوشی موبایل سامسونگ مدل Galaxy S21",
      price: "۲۴,۵۰۰,۰۰۰",
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const subtotal = "۳۳,۰۰۰,۰۰۰"
  const shipping = "رایگان"
  const discount = "۲,۰۰۰,۰۰۰"
  const total = "۳۱,۰۰۰,۰۰۰"

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">تکمیل سفارش</h1>
        <div className="mr-auto flex items-center text-sm text-gray-500">
          <Link href="/cart" className="hover:text-primary">
            سبد خرید
          </Link>
          <ChevronLeft className="h-4 w-4 mx-1" />
          <span className="font-medium text-primary">تکمیل سفارش</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">اطلاعات شخصی</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">نام</Label>
                <Input id="firstName" placeholder="نام خود را وارد کنید" />
              </div>
              <div>
                <Label htmlFor="lastName">نام خانوادگی</Label>
                <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
              </div>
              <div>
                <Label htmlFor="phone">شماره موبایل</Label>
                <Input id="phone" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
              </div>
              <div>
                <Label htmlFor="email">ایمیل (اختیاری)</Label>
                <Input id="email" type="email" placeholder="example@gmail.com" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">آدرس تحویل سفارش</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="province">استان</Label>
                  <Input id="province" placeholder="استان خود را وارد کنید" />
                </div>
                <div>
                  <Label htmlFor="city">شهر</Label>
                  <Input id="city" placeholder="شهر خود را وارد کنید" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">آدرس کامل</Label>
                <Textarea id="address" placeholder="آدرس دقیق خود را وارد کنید" />
              </div>
              <div>
                <Label htmlFor="postalCode">کد پستی</Label>
                <Input id="postalCode" placeholder="کد پستی ۱۰ رقمی" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">روش ارسال</h2>
            <RadioGroup defaultValue="express">
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="express" id="express" />
                <Label htmlFor="express" className="flex items-center">
                  <Truck className="ml-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">ارسال سریع (۱ تا ۲ روز کاری)</p>
                    <p className="text-sm text-gray-500">تحویل توسط پست پیشتاز</p>
                  </div>
                  <span className="mr-auto text-green-600">رایگان</span>
                </Label>
              </div>
              <Separator className="my-3" />
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal" className="flex items-center">
                  <Truck className="ml-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">ارسال عادی (۳ تا ۵ روز کاری)</p>
                    <p className="text-sm text-gray-500">تحویل توسط پست سفارشی</p>
                  </div>
                  <span className="mr-auto text-green-600">رایگان</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">روش پرداخت</h2>
            <Tabs defaultValue="online">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="online">پرداخت آنلاین</TabsTrigger>
                <TabsTrigger value="cod">پرداخت در محل</TabsTrigger>
              </TabsList>
              <TabsContent value="online" className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center p-3 border rounded-lg">
                    <RadioGroup defaultValue="online-payment">
                      <div className="flex items-center">
                        <RadioGroupItem value="online-payment" id="online-payment" />
                        <Label htmlFor="online-payment" className="flex items-center mr-2">
                          <CreditCard className="ml-2 h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">پرداخت آنلاین</p>
                            <p className="text-sm text-gray-500">پرداخت از طریق درگاه بانکی</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="border rounded p-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=30&width=50" alt="بانک ملت" width={50} height={30} />
                    </div>
                    <div className="border rounded p-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=30&width=50" alt="بانک سامان" width={50} height={30} />
                    </div>
                    <div className="border rounded p-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=30&width=50" alt="بانک پارسیان" width={50} height={30} />
                    </div>
                    <div className="border rounded p-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=30&width=50" alt="بانک ملی" width={50} height={30} />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cod" className="pt-4">
                <div className="flex items-center p-3 border rounded-lg">
                  <RadioGroup defaultValue="cod-payment">
                    <div className="flex items-center">
                      <RadioGroupItem value="cod-payment" id="cod-payment" />
                      <Label htmlFor="cod-payment" className="flex items-center mr-2">
                        <CreditCard className="ml-2 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">پرداخت در محل</p>
                          <p className="text-sm text-gray-500">پرداخت هنگام تحویل سفارش</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 sticky top-20">
            <h2 className="text-lg font-bold mb-4">خلاصه سفارش</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className="relative h-16 w-16 ml-3">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">تعداد: {item.quantity}</p>
                    <p className="text-sm font-bold">{item.price} تومان</p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">جمع سبد خرید</span>
                <span>{subtotal} تومان</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">هزینه ارسال</span>
                <span className="text-green-600">{shipping}</span>
              </div>
              {discount && (
                <div className="flex justify-between">
                  <span className="text-gray-600">تخفیف</span>
                  <span className="text-red-600">- {discount} تومان</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-bold">
                <span>مبلغ قابل پرداخت</span>
                <span>{total} تومان</span>
              </div>
            </div>
            <Button className="w-full mt-6" size="lg">
              پرداخت و ثبت سفارش
            </Button>
            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>با ثبت سفارش، شما شرایط و قوانین فروشگاه را می‌پذیرید.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

