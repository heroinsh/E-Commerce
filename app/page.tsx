import { Hero } from "@/components/home/hero"
import { CategoriesCarousel } from "@/components/home/categories-carousel"
import { ProductsCarousel } from "@/components/home/products-carousel"
import { TrendingCarousel } from "@/components/home/trending-carousel"
import { SpecialOffers } from "@/components/home/special-offers"
import { Features } from "@/components/home/features"
import { BrandsCarousel } from "@/components/home/brands-carousel"
import { PRODUCT_CATEGORIES } from "@/lib/constants"

// Sample product data - in a real app, this would come from an API or database
const sampleProducts = [
  {
    id: 1,
    name: "هدفون بی‌سیم سونی مدل WH-1000XM4",
    slug: "sony-wh-1000xm4",
    price: 8500000,
    originalPrice: 10200000,
    rating: 4.8,
    reviewCount: 256,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    tag: "پرفروش",
    categoryId: "الکترونیک",
    brandId: "sony",
  },
  {
    id: 2,
    name: "گوشی موبایل سامسونگ مدل Galaxy S21",
    slug: "samsung-galaxy-s21",
    price: 24500000,
    originalPrice: 28000000,
    rating: 4.5,
    reviewCount: 189,
    image: "/placeholder.svg?height=300&width=300",
    tag: "محبوب",
    categoryId: "الکترونیک",
    brandId: "samsung",
  },
  {
    id: 3,
    name: "لپ‌تاپ اپل مدل MacBook Air M1",
    slug: "apple-macbook-air-m1",
    price: 45000000,
    originalPrice: 48000000,
    rating: 4.9,
    reviewCount: 320,
    image: "/placeholder.svg?height=300&width=300",
    categoryId: "الکترونیک",
    brandId: "apple",
  },
  {
    id: 4,
    name: "ساعت هوشمند اپل واچ سری ۷",
    slug: "apple-watch-series-7",
    price: 15800000,
    originalPrice: 18500000,
    rating: 4.7,
    reviewCount: 142,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    tag: "جدید",
    categoryId: "الکترونیک",
    brandId: "apple",
  },
  {
    id: 5,
    name: "دوربین دیجیتال کانن مدل EOS 90D",
    slug: "canon-eos-90d",
    price: 35000000,
    originalPrice: 38000000,
    rating: 4.6,
    reviewCount: 98,
    image: "/placeholder.svg?height=300&width=300",
    categoryId: "الکترونیک",
    brandId: "canon",
  },
  {
    id: 6,
    name: "تبلت سامسونگ مدل Galaxy Tab S7",
    slug: "samsung-galaxy-tab-s7",
    price: 18500000,
    originalPrice: 21000000,
    rating: 4.4,
    reviewCount: 76,
    image: "/placeholder.svg?height=300&width=300",
    categoryId: "الکترونیک",
    brandId: "samsung",
  },
  {
    id: 7,
    name: "اسپیکر بلوتوثی جی‌بی‌ال مدل Charge 5",
    slug: "jbl-charge-5",
    price: 4200000,
    originalPrice: 4800000,
    rating: 4.3,
    reviewCount: 112,
    image: "/placeholder.svg?height=300&width=300",
    tag: "پیشنهاد ویژه",
    categoryId: "الکترونیک",
    brandId: "jbl",
  },
  {
    id: 8,
    name: "کنسول بازی سونی مدل PlayStation 5",
    slug: "sony-playstation-5",
    price: 28000000,
    originalPrice: 32000000,
    rating: 4.9,
    reviewCount: 215,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    tag: "جدید",
    categoryId: "الکترونیک",
    brandId: "sony",
  },
  {
    id: 9,
    name: "پیراهن مردانه طرح چهارخانه",
    slug: "mens-checkered-shirt",
    price: 850000,
    originalPrice: 1200000,
    rating: 4.2,
    reviewCount: 45,
    image: "/placeholder.svg?height=300&width=300",
    categoryId: "پوشاک",
    brandId: "local",
  },
  {
    id: 10,
    name: "کفش ورزشی نایک مدل Air Max",
    slug: "nike-air-max",
    price: 3200000,
    originalPrice: 3800000,
    rating: 4.7,
    reviewCount: 87,
    image: "/placeholder.svg?height=300&width=300",
    tag: "محبوب",
    categoryId: "پوشاک",
    brandId: "nike",
  },
  {
    id: 11,
    name: "یخچال و فریزر ساید بای ساید ال جی",
    slug: "lg-side-by-side-refrigerator",
    price: 52000000,
    originalPrice: 58000000,
    rating: 4.6,
    reviewCount: 34,
    image: "/placeholder.svg?height=300&width=300",
    categoryId: "لوازم خانگی",
    brandId: "lg",
  },
  {
    id: 12,
    name: "ماشین لباسشویی سامسونگ ظرفیت 9 کیلوگرم",
    slug: "samsung-washing-machine-9kg",
    price: 24500000,
    originalPrice: 27000000,
    rating: 4.5,
    reviewCount: 29,
    image: "/placeholder.svg?height=300&width=300",
    tag: "پیشنهاد ویژه",
    categoryId: "لوازم خانگی",
    brandId: "samsung",
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesCarousel categories={PRODUCT_CATEGORIES} />
      <ProductsCarousel
        title="محصولات ویژه"
        description="محصولات پرفروش و محبوب ما را ببینید"
        products={sampleProducts.filter((p) => p.categoryId === "الکترونیک")}
        viewAllLink="/categories/electronics"
        viewAllText="مشاهده همه محصولات الکترونیک"
      />
      <SpecialOffers products={sampleProducts} />
      <TrendingCarousel products={sampleProducts} />
      <Features />
      <BrandsCarousel />
    </>
  )
}

