export interface Category {
  id: string
  name: string
  href: string
  image?: string
  subcategories?: SubCategory[]
}

export interface SubCategory {
  id: string
  name: string
  href: string
}

export interface Brand {
  id: string
  name: string
  logo: string
}

export interface Product {
  id: number | string
  name: string
  slug: string
  price: number
  originalPrice?: number
  discount?: string
  rating: number
  reviewCount: number
  image: string
  images?: string[]
  isNew?: boolean
  tag?: string
  categoryId: string
  brandId: string
  description?: string
  features?: string[]
  inStock?: boolean
  stockCount?: number
  colors?: ProductColor[]
  specifications?: ProductSpecification[]
}

export interface ProductColor {
  id: string
  name: string
  value: string
}

export interface ProductSpecification {
  name: string
  value: string
}

export interface Review {
  id: number | string
  name: string
  avatar?: string
  rating: number
  date: string
  comment: string
}

export interface CartItem {
  productId: number | string
  name: string
  price: number
  quantity: number
  image: string
  color?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  phone?: string
  isLoggedIn: boolean
}

export interface Address {
  id: string
  title: string
  fullName: string
  province: string
  city: string
  address: string
  postalCode: string
  phone: string
  isDefault: boolean
}

export interface Order {
  id: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled"
  items: CartItem[]
  totalPrice: number
  shipping: number
  discount?: number
  address: Address
  paymentMethod: "online" | "card" | "cash"
  trackingCode?: string
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  link?: string
}

