import { create } from "zustand"
import { persist } from "zustand/middleware"

interface WishlistState {
  items: Array<number | string>
  add: (productId: number | string) => void
  remove: (productId: number | string) => void
  toggle: (productId: number | string) => void
  clear: () => void
  has: (productId: number | string) => boolean
  count: () => number
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (productId) => {
        const currentItems = get().items
        if (!currentItems.includes(productId)) {
          set({ items: [...currentItems, productId] })
        }
      },

      remove: (productId) => {
        set({
          items: get().items.filter((id) => id !== productId),
        })
      },

      toggle: (productId) => {
        const currentItems = get().items
        if (currentItems.includes(productId)) {
          get().remove(productId)
        } else {
          get().add(productId)
        }
      },

      clear: () => {
        set({ items: [] })
      },

      has: (productId) => {
        return get().items.includes(productId)
      },

      count: () => {
        return get().items.length
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
)

