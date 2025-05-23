'use client'

import { useCart } from "@/store/useCart"
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer"
import { use, useEffect, useState } from "react"
import { ProductCartItem } from "./productCartItem"
import { EmptyCart } from "./cartEmpty"
import { OrderPrice } from "./orderPrice"
import { CartActions } from "./cartActions"

export const Cart = () => {
   const cart = useCart()
   const [open, setOpen] = useState(cart.open)

   useEffect(() => {
      cart.loadCart()
   }, [])

   useEffect(() => {
      setOpen(cart.open)
   }, [cart])

   return (
      <Drawer
         direction="right"
         open={open}
         onOpenChange={open => cart.setOpen(open)}>
         <DrawerContent className="p-4 bg-sc-nitendo">
            <DrawerTitle className="text-center text-red-nitendo mb-4">Meu carrinho</DrawerTitle>

            <div className="flex flex-col flex-1 justify-between overflow-y-auto">
               {cart.cart.length === 0 && <EmptyCart />}

               <div className="flex flex-col gap-4">
                  {cart.cart.map((item, index) => (
                     <ProductCartItem key={`${item.name} - ${item.version}`} item={item} index={index} />
                  ))}
               </div>

               {cart.cart.length > 0 && (
                  <div className="flex flex-col gap-2">
                     <OrderPrice />

                     <CartActions />
                  </div>
               )}
            </div>
         </DrawerContent>
      </Drawer>
   )
}