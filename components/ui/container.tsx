import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "default" | "small" | "large"
}

export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        {
          "max-w-screen-2xl": size === "large",
          "max-w-screen-xl": size === "default",
          "max-w-screen-lg": size === "small",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

