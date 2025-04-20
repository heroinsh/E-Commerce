import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 ml-2">
                <Image src="/placeholder.svg?height=32&width=32" alt="لوگو فروشگاه" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">فروشگاه آنلاین</span>
            </Link>
            <p className="text-muted-foreground">
              فروشگاه آنلاین، ارائه دهنده انواع کالاهای دیجیتال، خانگی، پوشاک و... با بهترین کیفیت و قیمت مناسب. ما به
              دنبال ارائه بهترین تجربه خرید آنلاین برای مشتریان خود هستیم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">اینستاگرام</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">توییتر</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فیسبوک</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">یوتیوب</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">دسترسی سریع</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-primary">
                صفحه اصلی
              </Link>
              <Link href="/products" className="hover:text-primary">
                محصولات
              </Link>
              <Link href="/categories" className="hover:text-primary">
                دسته‌بندی‌ها
              </Link>
              <Link href="/offers" className="hover:text-primary">
                تخفیف‌ها و پیشنهادها
              </Link>
              <Link href="/bestsellers" className="hover:text-primary">
                پرفروش‌ترین‌ها
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">خدمات مشتریان</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/faq" className="hover:text-primary">
                سوالات متداول
              </Link>
              <Link href="/shipping" className="hover:text-primary">
                روش‌های ارسال
              </Link>
              <Link href="/returns" className="hover:text-primary">
                شرایط بازگشت کالا
              </Link>
              <Link href="/privacy" className="hover:text-primary">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="hover:text-primary">
                قوانین و مقررات
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">اطلاعات تماس</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@example.com</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-medium mb-2">روش‌های پرداخت</h4>
              <div className="flex gap-2">
                <div className="border rounded p-1 w-12 h-8 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=20&width=30" alt="پرداخت" width={30} height={20} />
                </div>
                <div className="border rounded p-1 w-12 h-8 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=20&width=30" alt="پرداخت" width={30} height={20} />
                </div>
                <div className="border rounded p-1 w-12 h-8 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=20&width=30" alt="پرداخت" width={30} height={20} />
                </div>
                <div className="border rounded p-1 w-12 h-8 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=20&width=30" alt="پرداخت" width={30} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© ۱۴۰۳ فروشگاه آنلاین. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              حریم خصوصی
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              قوانین و مقررات
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary">
              نقشه سایت
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

