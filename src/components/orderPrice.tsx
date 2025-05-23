'use client'
import { formatPrice } from "@/lib/formatPrice"
import { useCart } from "@/store/useCart"
import { useState } from "react"

export const OrderPrice = () => {
   const cart = useCart()
   const [shipping, setShipping] = useState(10)

   return (
      <div className="mt-4 p-2 border-y border-t-red-border-nitendo border-b-blue-border-nitendo">
         <div className="flex flex-col justify-end items-end sm:flex-row sm:justify-between mb-2">
            <p className={`text-sm font-bold text-blue-nitendo`}>
               Valor dos Produtos: {formatPrice(cart.cartValue())}
            </p>

            <p className={`text-sm font-bold text-blue-nitendo`}>
               Frete: {formatPrice(shipping)}
            </p>
         </div>

         <p className={`text-end font-bold text-red-nitendo`}>
            Total: {formatPrice(cart.cartValue() + shipping)}
         </p>
      </div>
   )
}