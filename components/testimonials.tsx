import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "علی رضایی",
      avatar: "/placeholder.svg?height=60&width=60",
      role: "خریدار",
      content:
        "من از کیفیت محصولات و سرعت ارسال بسیار راضی هستم. پشتیبانی عالی و پاسخگویی سریع از ویژگی‌های بارز این فروشگاه است.",
      rating: 5,
    },
    {
      id: 2,
      name: "مریم احمدی",
      avatar: "/placeholder.svg?height=60&width=60",
      role: "خریدار",
      content:
        "تنوع محصولات بسیار خوب است و قیمت‌ها نسبت به بازار مناسب‌تر است. بسته‌بندی محصولات هم بسیار عالی و مرتب است.",
      rating: 4,
    },
    {
      id: 3,
      name: "محمد حسینی",
      avatar: "/placeholder.svg?height=60&width=60",
      role: "خریدار",
      content:
        "من چندین بار از این فروشگاه خرید کرده‌ام و همیشه از کیفیت محصولات و خدمات راضی بوده‌ام. قطعاً خرید از این فروشگاه را به دوستانم پیشنهاد می‌کنم.",
      rating: 5,
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold">نظرات مشتریان</h2>
          <p className="text-muted-foreground md:text-lg">مشتریان ما درباره تجربه خرید از فروشگاه چه می‌گویند</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden ml-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/40" />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

