'use client'
import { useCart } from "@/store/useCart"
import { Button } from "./ui/button"

type Props = {
   item: CartItem
}
export const Counter = ({ item }: Props) => {
   const { addToCart, removeItemQuantityCart, removeItemCart } = useCart()

   return (
      <div className="flex">
         <Button
            onClick={() => removeItemQuantityCart(item.name)}
            className="flex justify-center items-center w-[24px] h-[24px] text-white font-bold rounded-l-rm rounded-r-none bg-red-nitendo hover:bg-red-nitendo/90">
            -
         </Button>

         <span className="flex justify-center items-center w-[24px] h-[24px] text-black font-bold bg-slate-200">
            {item.quantity}
         </span>

         <Button
            onClick={() => addToCart(item)}
            className="flex justify-center items-center w-[24px] h-[24px] text-white font-bold rounded-l-none rounded-r-md bg-blue-border-nitendo hover:bg-blue-border-nitendo/90">
            <p>+</p>
         </Button>
      </div>
   )
}