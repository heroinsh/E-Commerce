import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold">عضویت در خبرنامه</h2>
          <p className="max-w-[600px] md:text-lg">
            با عضویت در خبرنامه ما، از آخرین محصولات، تخفیف‌ها و اخبار فروشگاه مطلع شوید.
          </p>
          <div className="flex w-full max-w-md flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary">عضویت</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

