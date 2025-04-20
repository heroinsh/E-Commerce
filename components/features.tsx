import { Truck, ShieldCheck, RotateCcw, CreditCard } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "ارسال سریع و رایگان",
      description: "برای سفارش‌های بالای ۵۰۰ هزار تومان",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "ضمانت اصالت کالا",
      description: "تضمین کیفیت تمامی محصولات",
    },
    {
      icon: <RotateCcw className="h-10 w-10" />,
      title: "۷ روز ضمانت بازگشت",
      description: "بدون قید و شرط، بدون پرسش",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "پرداخت امن",
      description: "درگاه پرداخت مطمئن و رمزنگاری شده",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

