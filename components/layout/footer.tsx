import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRODUCT_CATEGORIES, SITE_CONFIG } from "@/lib/constants"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center">
              <div className="relative h-9 w-9 ml-2.5">
                <Image
                  src="/placeholder.svg?height=36&width=36"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">{SITE_CONFIG.description}</p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">اینستاگرام</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">توییتر</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">فیسبوک</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">یوتیوب</span>
                </a>
              </Button>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-3">عضویت در خبرنامه</h4>
              <div className="flex gap-2">
                <Input placeholder="ایمیل خود را وارد کنید" className="h-11" />
                <Button>عضویت</Button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-bold">دسترسی سریع</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-primary transition-colors">
                صفحه اصلی
              </Link>
              <Link href="/products" className="hover:text-primary transition-colors">
                همه محصولات
              </Link>
              <Link href="/offers" className="hover:text-primary transition-colors">
                تخفیف‌ها و پیشنهادها
              </Link>
              <Link href="/bestsellers" className="hover:text-primary transition-colors">
                پرفروش‌ترین‌ها
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
                وبلاگ
              </Link>
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-bold">دسته‌بندی‌های اصلی</h3>
            <nav className="flex flex-col space-y-3">
              {PRODUCT_CATEGORIES.slice(0, 5).map((category) => (
                <Link key={category.id} href={category.href} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-bold">خدمات مشتریان</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/faq" className="hover:text-primary transition-colors">
                سوالات متداول
              </Link>
              <Link href="/shipping" className="hover:text-primary transition-colors">
                روش‌های ارسال
              </Link>
              <Link href="/returns" className="hover:text-primary transition-colors">
                شرایط بازگشت کالا
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                قوانین و مقررات
              </Link>
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-bold">اطلاعات تماس</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{SITE_CONFIG.supportPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{SITE_CONFIG.supportEmail}</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-medium mb-3">روش‌های پرداخت</h4>
              <div className="flex gap-2 flex-wrap">
                {SITE_CONFIG.payment.gateways.map((gateway, index) => (
                  <div key={index} className="border rounded-md p-1.5 px-3 text-sm">
                    {gateway}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {year} {SITE_CONFIG.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              حریم خصوصی
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              قوانین و مقررات
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              نقشه سایت
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="border rounded-md p-2 w-16 h-12 flex items-center justify-center">
              <Image src="/placeholder.svg?height=30&width=40" alt="نماد اعتماد" width={40} height={30} />
            </div>
            <div className="border rounded-md p-2 w-16 h-12 flex items-center justify-center">
              <Image src="/placeholder.svg?height=30&width=40" alt="نشان ملی" width={40} height={30} />
            </div>
          </div>
          <p>این فروشگاه دارای نماد اعتماد الکترونیکی و مجوز کسب و کار از وزارت صنعت، معدن و تجارت می‌باشد.</p>
        </div>
      </Container>
    </footer>
  )
}

