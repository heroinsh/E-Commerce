import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // در یک پروژه واقعی، اطلاعات سبد خرید از API یا state دریافت می‌شود
  const cartItems = [
    {
      id: 1,
      name: "هدفون بی‌سیم سونی مدل WH-1000XM4",
      price: "۸,۵۰۰,۰۰۰",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "گوشی موبایل سامسونگ مدل Galaxy S21",
      price: "۲۴,۵۰۰,۰۰۰",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const subtotal = "۳۳,۰۰۰,۰۰۰"
  const shipping = "رایگان"
  const discount = "۲,۰۰۰,۰۰۰"
  const total = "۳۱,۰۰۰,۰۰۰"

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">سبد خرید</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-4 font-medium">محصول</th>
                      <th className="text-center py-4 font-medium">تعداد</th>
                      <th className="text-center py-4 font-medium">قیمت</th>
                      <th className="text-center py-4 font-medium">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="relative h-16 w-16 ml-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center border rounded-md">
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">{item.price} تومان</td>
                        <td className="py-4 text-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex">
                  <Input placeholder="کد تخفیف" className="rounded-l-none" />
                  <Button className="rounded-r-none">اعمال کد</Button>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/products">
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  ادامه خرید
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 sticky top-20">
              <h2 className="text-lg font-bold mb-4">خلاصه سفارش</h2>
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
              <Button className="w-full mt-6" size="lg" asChild>
                <Link href="/checkout">تکمیل فرآیند خرید</Link>
              </Button>
              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>با تکمیل سفارش، شما شرایط و قوانین فروشگاه را می‌پذیرید.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">سبد خرید شما خالی است</h2>
          <p className="text-gray-500 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
          <Button asChild>
            <Link href="/products">مشاهده محصولات</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

