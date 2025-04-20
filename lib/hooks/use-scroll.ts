"use client"

import { useState, useEffect } from "react"

interface ScrollOptions {
  threshold?: number
}

export function useScroll({ threshold = 100 }: ScrollOptions = {}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return scrolled
}

