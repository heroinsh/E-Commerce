import { Star, Truck, ShieldCheck, RotateCcw, Heart, Share2, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  // در یک پروژه واقعی، اطلاعات محصول از API یا دیتابیس دریافت می‌شود
  const product = {
    id: params.id,
    name: "هدفون بی‌سیم سونی مدل WH-1000XM4",
    price: "۸,۵۰۰,۰۰۰",
    originalPrice: "۱۰,۲۰۰,۰۰۰",
    discount: "۱۷٪",
    rating: 4.8,
    reviewCount: 256,
    stock: 12,
    colors: ["مشکی", "نقره‌ای", "آبی"],
    description:
      "هدفون بی‌سیم سونی مدل WH-1000XM4 با تکنولوژی حذف نویز پیشرفته، کیفیت صدای فوق‌العاده و باتری با دوام طولانی. این هدفون دارای قابلیت اتصال همزمان به دو دستگاه، تشخیص صدا و توقف خودکار پخش موسیقی هنگام برداشتن هدفون است.",
    features: [
      "تکنولوژی حذف نویز پیشرفته",
      "کیفیت صدای Hi-Res Audio",
      "باتری با دوام تا ۳۰ ساعت",
      "قابلیت اتصال همزمان به دو دستگاه",
      "میکروفون با کیفیت برای تماس‌های تلفنی",
      "سنسور تشخیص گذاشتن و برداشتن هدفون",
    ],
    specifications: [
      { name: "برند", value: "سونی" },
      { name: "مدل", value: "WH-1000XM4" },
      { name: "نوع اتصال", value: "بلوتوث و سیمی" },
      { name: "وزن", value: "۲۵۴ گرم" },
      { name: "مدت زمان شارژ", value: "۳ ساعت" },
      { name: "مدت زمان پخش موسیقی", value: "تا ۳۰ ساعت" },
      { name: "نسخه بلوتوث", value: "۵.۰" },
      { name: "کدک‌های پشتیبانی شده", value: "SBC, AAC, LDAC" },
      { name: "مقاومت در برابر آب", value: "ندارد" },
      { name: "گارانتی", value: "۱۸ ماه" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">صفحه اصلی</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products/category/headphones">هدفون</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} />

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-4 space-x-reverse">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="mr-2 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{product.reviewCount} دیدگاه</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                موجود در انبار
              </Badge>
            </div>
          </div>

          <div className="flex items-center">
            {product.discount && (
              <>
                <span className="text-3xl font-bold text-gray-900">{product.price} تومان</span>
                <span className="mr-2 line-through text-gray-500">{product.originalPrice} تومان</span>
                <Badge className="mr-2 bg-red-500">{product.discount} تخفیف</Badge>
              </>
            )}
          </div>

          <div className="border-t border-b py-4">
            <h3 className="font-medium mb-2">انتخاب رنگ:</h3>
            <div className="flex space-x-3 space-x-reverse">
              {product.colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    className={`h-10 w-10 rounded-full p-0 border-2 ${index === 0 ? "border-primary" : ""}`}
                  >
                    <span className="sr-only">{color}</span>
                  </Button>
                  <span className="mt-1 text-sm">{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">۱</span>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="flex-1" size="lg">
              <ShoppingCart className="ml-2 h-5 w-5" />
              افزودن به سبد خرید
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center">
              <Truck className="h-5 w-5 ml-2 text-primary" />
              <div>
                <p className="text-sm font-medium">ارسال سریع</p>
                <p className="text-xs text-gray-500">تحویل ۱ تا ۳ روز کاری</p>
              </div>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 ml-2 text-primary" />
              <div>
                <p className="text-sm font-medium">ضمانت اصالت کالا</p>
                <p className="text-xs text-gray-500">تضمین کیفیت محصولات</p>
              </div>
            </div>
            <div className="flex items-center">
              <RotateCcw className="h-5 w-5 ml-2 text-primary" />
              <div>
                <p className="text-sm font-medium">۷ روز ضمانت بازگشت</p>
                <p className="text-xs text-gray-500">بدون قید و شرط</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full justify-start mb-6 border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            توضیحات محصول
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            مشخصات فنی
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            نظرات کاربران
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-0">
          <div className="prose max-w-none">
            <p className="mb-4">{product.description}</p>
            <h3 className="text-lg font-bold mb-2">ویژگی‌های محصول:</h3>
            <ul className="space-y-1 list-disc mr-6">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-4 font-medium border">{spec.name}</td>
                    <td className="py-3 px-4 border">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-0">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">نظرات کاربران ({product.reviewCount})</h3>
              <Button>ثبت دیدگاه جدید</Button>
            </div>
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center ml-3">
                  <span className="font-bold">ر</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">رضا محمدی</h4>
                    <span className="text-sm text-gray-500">۲ هفته پیش</span>
                  </div>
                  <div className="flex mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p>
                    کیفیت صدا عالی است و حذف نویز به خوبی کار می‌کند. باتری هم دوام خوبی دارد. در کل از خرید راضی هستم.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center ml-3">
                  <span className="font-bold">م</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">مریم احمدی</h4>
                    <span className="text-sm text-gray-500">۱ ماه پیش</span>
                  </div>
                  <div className="flex mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p>طراحی زیبا و راحتی در استفاده طولانی مدت. فقط قیمت کمی بالاست ولی با توجه به کیفیت می‌ارزد.</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              مشاهده همه نظرات
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <RelatedProducts />
    </div>
  )
}

