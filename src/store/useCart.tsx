import { clearStorage, compareHours, getStorage, saveHours, saveStorage } from "@/lib/storage";
import { clear } from "console";
import { create } from "zustand";

type CartStore = {
   open: boolean
   setOpen: (open: boolean) => void

   cart: CartItem[]

   loadCart: () => void
   addToCart: (item: CartItem) => void
   removeItemQuantityCart: (name: string) => void
   removeItemCart: (name: string, version: number) => void
   cartValue: () => number

   clearCart: () => void
}
export const useCart = create<CartStore>((set, get) => ({
   open: false,
   setOpen: (open: boolean) => set(state => ({ ...state, open })),

   cart: [],

   loadCart() {
      let storage = getStorage('cart')
      let data: CartItem[] = []
      const spent15Minutes = compareHours('hours')

      // if (storage && spent15Minutes === false) {
      if (storage) {
         data = storage
         set(state => ({ ...state, cart: data }))
      }
   },

   addToCart: (item: CartItem) => set(state => {
      let cloneCart = [...state.cart]

      // Aqui retorna o index do item, se ele não exitir ele retorna -1
      const itemIndex = cloneCart.findIndex((cartItem) => cartItem.name === item.name && cartItem.version === item.version)

      // Caso nao o item não existe no carrinho ele adiciona
      if (itemIndex === -1) {
         cloneCart.push(item)

         saveStorage('cart', cloneCart)
         // saveHours('hours')

         return { ...state, cart: cloneCart }
      }

      // Caso o item já existe no carrinho, ele apanas aumenta a quatidade
      const itemCart = cloneCart[itemIndex]

      cloneCart[itemIndex] = {
         ...itemCart,
         quantity: itemCart.quantity + 1
      }

      saveStorage('cart', cloneCart)
      // saveHours('hours')

      return { ...state, cart: cloneCart }
   }),

   removeItemQuantityCart: (name: string) => set(state => {
      const cloneCart = [...state.cart]

      // Aqui retorna o index do item, se ele não exitir ele retorna -1
      const itemIndex = cloneCart.findIndex((cartItem) => cartItem.name === name)

      // O item selecionado
      const itemCart = cloneCart[itemIndex]

      // Caso o item já existe no carrinho, ele remove 1 da quatidade
      if (itemCart.quantity >= 1) {
         cloneCart[itemIndex] = {
            ...itemCart,
            quantity: itemCart.quantity - 1
         }
      }

      if (cloneCart[itemIndex].quantity === 0) {
         const filtredItems = cloneCart.filter((item) => item.name !== name)

         saveStorage('cart', cloneCart)
         // saveHours('hours')
         return { ...state, cart: filtredItems }
      }

      saveStorage('cart', cloneCart)
      // saveHours('hours')

      return { ...state, cart: cloneCart }
   }),

   removeItemCart: (name: string, version: number) => set(state => {
      const cloneCart = [...state.cart]

      // Caso o item já existe no carrinho, ele remove 1 da quatidade
      const filtredItems = cloneCart.filter((item) => !(item.name === name && item.version == version))

      saveStorage('cart', filtredItems)
      // saveHours('hours')

      return { ...state, cart: filtredItems }
   }),

   cartValue: () => get().cart.reduce((total, item) => total + (item.price * item.quantity), 0),

   clearCart: () => set(state => {
      clearStorage('cart')
      return { ...state, cart: [] }
   })
}));