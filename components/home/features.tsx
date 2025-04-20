import type React from "react"
import { Truck, ShieldCheck, RotateCcw, CreditCard } from "lucide-react"
import { Section } from "@/components/ui/section"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesProps {
  features?: Feature[]
  className?: string
}

export function Features({ features, className }: FeaturesProps) {
  const defaultFeatures: Feature[] = [
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

  const displayFeatures = features || defaultFeatures

  return (
    <Section className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {displayFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-muted bg-background/50 hover:border-primary/20 hover:bg-primary/5 transition-colors"
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

