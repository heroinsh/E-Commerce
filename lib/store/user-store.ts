import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User, Notification, Address } from "@/types"

interface UserState {
  user: User | null
  notifications: Notification[]
  addresses: Address[]
  login: (userData: User) => void
  logout: () => void
  addAddress: (address: Address) => void
  updateAddress: (id: string, data: Partial<Address>) => void
  removeAddress: (id: string) => void
  setDefaultAddress: (id: string) => void
  addNotification: (notification: Notification) => void
  markNotificationAsRead: (id: string) => void
  markAllNotificationsAsRead: () => void
  clearNotifications: () => void
  getUnreadCount: () => number
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      notifications: [],
      addresses: [],

      login: (userData) => {
        set({ user: { ...userData, isLoggedIn: true } })
      },

      logout: () => {
        set({ user: null })
      },

      addAddress: (address) => {
        const currentAddresses = get().addresses
        // If it's the first address or marked as default, set others to non-default
        if (address.isDefault || currentAddresses.length === 0) {
          set({
            addresses: [...currentAddresses.map((a) => ({ ...a, isDefault: false })), { ...address, isDefault: true }],
          })
        } else {
          set({ addresses: [...currentAddresses, address] })
        }
      },

      updateAddress: (id, data) => {
        const currentAddresses = get().addresses
        // If making this the default address, update all others
        if (data.isDefault) {
          set({
            addresses: currentAddresses.map((address) => ({
              ...address,
              isDefault: address.id === id ? true : false,
            })),
          })
        } else {
          set({
            addresses: currentAddresses.map((address) => (address.id === id ? { ...address, ...data } : address)),
          })
        }
      },

      removeAddress: (id) => {
        const currentAddresses = get().addresses
        const removedAddress = currentAddresses.find((a) => a.id === id)
        const newAddresses = currentAddresses.filter((a) => a.id !== id)

        // If we removed the default address and have others, make another one default
        if (removedAddress?.isDefault && newAddresses.length > 0) {
          newAddresses[0].isDefault = true
        }

        set({ addresses: newAddresses })
      },

      setDefaultAddress: (id) => {
        set({
          addresses: get().addresses.map((address) => ({
            ...address,
            isDefault: address.id === id,
          })),
        })
      },

      addNotification: (notification) => {
        set({
          notifications: [notification, ...get().notifications],
        })
      },

      markNotificationAsRead: (id) => {
        set({
          notifications: get().notifications.map((notification) =>
            notification.id === id ? { ...notification, read: true } : notification,
          ),
        })
      },

      markAllNotificationsAsRead: () => {
        set({
          notifications: get().notifications.map((notification) => ({ ...notification, read: true })),
        })
      },

      clearNotifications: () => {
        set({ notifications: [] })
      },

      getUnreadCount: () => {
        return get().notifications.filter((n) => !n.read).length
      },
    }),
    {
      name: "user-storage",
    },
  ),
)

