import type React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  container?: boolean
  containerSize?: "default" | "small" | "large"
}

export function Section({ children, className, container = true, containerSize = "default", ...props }: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12 lg:py-16", className)} {...props}>
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  )
}

