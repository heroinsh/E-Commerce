"use client"

import { useState, useEffect } from "react"

// Simple media query hook that works for any breakpoint
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Update the state initially
    setMatches(media.matches)

    // Define a listener for changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add the listener
    media.addEventListener("change", listener)

    // Remove the listener on cleanup
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

// Pre-defined hooks for common breakpoints
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)")
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)")
}

export function useIsLargeDesktop() {
  return useMediaQuery("(min-width: 1280px)")
}

