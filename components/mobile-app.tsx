import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MobileApp() {
  return (
    <section className="py-12 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">اپلیکیشن موبایل فروشگاه</h2>
            <p className="text-muted-foreground md:text-lg">
              با نصب اپلیکیشن موبایل فروشگاه، سریع‌تر و آسان‌تر خرید کنید. از تخفیف‌های ویژه اپلیکیشن و امکانات منحصر به
              فرد آن بهره‌مند شوید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex items-center justify-center gap-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Google Play" width={24} height={24} />
                دانلود از گوگل پلی
              </Button>
              <Button className="flex items-center justify-center gap-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="App Store" width={24} height={24} />
                دانلود از اپ استور
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image src="/placeholder.svg?height=600&width=400" alt="اپلیکیشن موبایل" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

