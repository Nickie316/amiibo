import { differenceInMinutes, format, getHours } from 'date-fns'

export const getStorage = (key: string) => {
   const data = localStorage.getItem(key)

   if (!data) return []

   return JSON.parse(data)
}

export const saveStorage = (key: string, data: CartItem[]) => {
   localStorage.removeItem(key)

   return localStorage.setItem(key, JSON.stringify(data))
}

export const saveHours = (key: string) => {
   localStorage.removeItem(key)

   let data = new Date().toISOString()

   return localStorage.setItem(key, data)
}

export const compareHours = (key: string) => {
   const hour = localStorage.getItem(key)

   if (!hour) return false

   const now = new Date()
   const diference = differenceInMinutes(now, new Date(hour))

   if (diference >= 15) {
      localStorage.removeItem('cart')
      localStorage.removeItem(key)
      return true
   }

   return false
}