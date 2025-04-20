import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstagramFeed() {
  const instagramPosts = [
    { id: 1, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, image: "/placeholder.svg?height=300&width=300" },
    { id: 3, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, image: "/placeholder.svg?height=300&width=300" },
    { id: 5, image: "/placeholder.svg?height=300&width=300" },
    { id: 6, image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold">ما را در اینستاگرام دنبال کنید</h2>
          <p className="text-muted-foreground md:text-lg">از آخرین محصولات و تخفیف‌های ویژه ما مطلع شوید</p>
          <Button variant="outline" className="gap-2">
            <Instagram className="h-5 w-5" />
            @onlinestore
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`اینستاگرام پست ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                <Instagram className="text-white opacity-0 transform scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

