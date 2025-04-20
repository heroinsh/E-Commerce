import type React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
  children: React.ReactNode
}

export function Heading({ as: Component = "h2", size = "xl", children, className, ...props }: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold tracking-tight",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
          "text-3xl md:text-4xl": size === "3xl",
          "text-4xl md:text-5xl lg:text-6xl": size === "4xl",
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

