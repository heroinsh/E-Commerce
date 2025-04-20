// Product categories
export const PRODUCT_CATEGORIES = [
  {
    id: "electronics",
    name: "الکترونیک",
    href: "/categories/electronics",
    image: "/images/categories/electronics.jpg",
    subcategories: [
      { id: "mobile", name: "موبایل و تبلت", href: "/categories/electronics/mobile" },
      { id: "laptop", name: "لپ تاپ و کامپیوتر", href: "/categories/electronics/laptop" },
      { id: "camera", name: "دوربین", href: "/categories/electronics/camera" },
      { id: "audio", name: "هدفون و اسپیکر", href: "/categories/electronics/audio" },
      { id: "accessories", name: "لوازم جانبی", href: "/categories/electronics/accessories" },
    ],
  },
  {
    id: "clothing",
    name: "پوشاک",
    href: "/categories/clothing",
    image: "/images/categories/clothing.jpg",
    subcategories: [
      { id: "men", name: "مردانه", href: "/categories/clothing/men" },
      { id: "women", name: "زنانه", href: "/categories/clothing/women" },
      { id: "kids", name: "بچگانه", href: "/categories/clothing/kids" },
      { id: "sports", name: "ورزشی", href: "/categories/clothing/sports" },
      { id: "accessories", name: "اکسسوری", href: "/categories/clothing/accessories" },
    ],
  },
  {
    id: "home-appliances",
    name: "لوازم خانگی",
    href: "/categories/home-appliances",
    image: "/images/categories/home-appliances.jpg",
    subcategories: [
      { id: "kitchen", name: "آشپزخانه", href: "/categories/home-appliances/kitchen" },
      { id: "refrigerator", name: "یخچال و فریزر", href: "/categories/home-appliances/refrigerator" },
      { id: "laundry", name: "شستشو و نظافت", href: "/categories/home-appliances/laundry" },
      { id: "tv", name: "صوتی و تصویری", href: "/categories/home-appliances/tv" },
      { id: "heating", name: "سرمایش و گرمایش", href: "/categories/home-appliances/heating" },
    ],
  },
  {
    id: "beauty-health",
    name: "زیبایی و سلامت",
    href: "/categories/beauty-health",
    image: "/images/categories/beauty-health.jpg",
    subcategories: [
      { id: "skincare", name: "مراقبت پوست", href: "/categories/beauty-health/skincare" },
      { id: "makeup", name: "آرایشی", href: "/categories/beauty-health/makeup" },
      { id: "haircare", name: "مراقبت مو", href: "/categories/beauty-health/haircare" },
      { id: "perfume", name: "عطر و ادکلن", href: "/categories/beauty-health/perfume" },
      { id: "health", name: "بهداشت و سلامت", href: "/categories/beauty-health/health" },
    ],
  },
  {
    id: "sports",
    name: "ورزش و سرگرمی",
    href: "/categories/sports",
    image: "/images/categories/sports.jpg",
    subcategories: [
      { id: "equipment", name: "لوازم ورزشی", href: "/categories/sports/equipment" },
      { id: "clothing", name: "پوشاک ورزشی", href: "/categories/sports/clothing" },
      { id: "shoes", name: "کفش ورزشی", href: "/categories/sports/shoes" },
      { id: "supplements", name: "مکمل‌های ورزشی", href: "/categories/sports/supplements" },
      { id: "outdoor", name: "ورزش‌های هوازی", href: "/categories/sports/outdoor" },
    ],
  },
  {
    id: "books",
    name: "کتاب و لوازم تحریر",
    href: "/categories/books",
    image: "/images/categories/books.jpg",
    subcategories: [
      { id: "fiction", name: "کتاب‌های داستانی", href: "/categories/books/fiction" },
      { id: "non-fiction", name: "کتاب‌های غیرداستانی", href: "/categories/books/non-fiction" },
      { id: "academic", name: "کتاب‌های دانشگاهی", href: "/categories/books/academic" },
      { id: "stationery", name: "لوازم تحریر", href: "/categories/books/stationery" },
      { id: "art", name: "هنر و سرگرمی", href: "/categories/books/art" },
    ],
  },
]

// Brands
export const BRANDS = [
  { id: "samsung", name: "سامسونگ", logo: "/images/brands/samsung.jpg" },
  { id: "apple", name: "اپل", logo: "/images/brands/apple.jpg" },
  { id: "xiaomi", name: "شیائومی", logo: "/images/brands/xiaomi.jpg" },
  { id: "sony", name: "سونی", logo: "/images/brands/sony.jpg" },
  { id: "lg", name: "ال جی", logo: "/images/brands/lg.jpg" },
  { id: "huawei", name: "هواوی", logo: "/images/brands/huawei.jpg" },
  { id: "nike", name: "نایک", logo: "/images/brands/nike.jpg" },
  { id: "adidas", name: "آدیداس", logo: "/images/brands/adidas.jpg" },
]

// Site settings
export const SITE_CONFIG = {
  name: "فروشگاه آنلاین",
  description: "فروشگاه آنلاین با هزاران محصول متنوع و ارسال سریع به سراسر کشور",
  url: "https://shop.example.com",
  supportPhone: "۰۲۱-۱۲۳۴۵۶۷۸",
  supportHours: "۲۴ ساعته، ۷ روز هفته",
  supportEmail: "info@example.com",
  address: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
  socials: {
    instagram: "https://instagram.com/onlinestore",
    twitter: "https://twitter.com/onlinestore",
    facebook: "https://facebook.com/onlinestore",
    youtube: "https://youtube.com/onlinestore",
  },
  payment: {
    methods: ["آنلاین", "کارت به کارت", "پرداخت در محل"],
    gateways: ["زرین‌پال", "پی‌پینگ", "آیدی‌پی", "نکست‌پی"],
  },
  shipping: {
    express: "ارسال سریع (۱ تا ۲ روز کاری)",
    standard: "ارسال عادی (۳ تا ۵ روز کاری)",
    freeThreshold: 500000, // رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
  },
}

// Format price in toman
export function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

// Convert English numbers to Persian
export function toPersianNumber(num: number | string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return String(num).replace(/[0-9]/g, (digit) => persianDigits[Number.parseInt(digit)])
}

// Generate placeholder image for given dimensions
export function placeholderImage(width: number, height: number) {
  return `/placeholder.svg?height=${height}&width=${width}`
}

