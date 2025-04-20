"use client"

import type React from "react"

import { useEffect, useRef } from "react"

type EventHandler<T extends Event = Event> = (event: T) => void

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: EventHandler<WindowEventMap[K]>,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
  eventName: K,
  handler: EventHandler<HTMLElementEventMap[K]>,
  element: React.RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: EventHandler<DocumentEventMap[K]>,
  element: React.RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void

/**
 * Custom hook for handling event listeners
 */
export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KD extends keyof DocumentEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: KW | KH | KD,
  handler: EventHandler<WindowEventMap[KW] | HTMLElementEventMap[KH] | DocumentEventMap[KD]>,
  element?: React.RefObject<T | Document> | undefined,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a reference that stores the handler
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Document | Window = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) return

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => savedHandler.current(event)

    targetElement.addEventListener(eventName, listener, options)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}

