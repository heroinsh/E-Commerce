import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SpecialOffers() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">پیشنهادات ویژه</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              تخفیف‌های ویژه و محدود ما را از دست ندهید
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative">
              <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">۳۰٪ تخفیف</Badge>
              <div className="relative h-60 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="تخفیف ویژه گوشی هوشمند"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">گوشی هوشمند سامسونگ گلکسی</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="line-through text-muted-foreground">۱۲,۰۰۰,۰۰۰ تومان</p>
                  <p className="font-bold text-lg text-red-500">۸,۴۰۰,۰۰۰ تومان</p>
                </div>
                <div className="mt-4">
                  <Button className="w-full">مشاهده و خرید</Button>
                </div>
              </CardContent>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative">
              <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">۴۵٪ تخفیف</Badge>
              <div className="relative h-60 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="تخفیف ویژه لپ‌تاپ"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">لپ‌تاپ ایسوس مدل VivoBook</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="line-through text-muted-foreground">۳۲,۰۰۰,۰۰۰ تومان</p>
                  <p className="font-bold text-lg text-red-500">۱۷,۶۰۰,۰۰۰ تومان</p>
                </div>
                <div className="mt-4">
                  <Button className="w-full">مشاهده و خرید</Button>
                </div>
              </CardContent>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative">
              <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">۲۵٪ تخفیف</Badge>
              <div className="relative h-60 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="تخفیف ویژه هدفون"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">هدفون بی‌سیم سونی</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="line-through text-muted-foreground">۲,۸۰۰,۰۰۰ تومان</p>
                  <p className="font-bold text-lg text-red-500">۲,۱۰۰,۰۰۰ تومان</p>
                </div>
                <div className="mt-4">
                  <Button className="w-full">مشاهده و خرید</Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

