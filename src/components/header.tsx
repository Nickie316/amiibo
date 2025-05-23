'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useCart } from "@/store/useCart"

export const Header = () => {
   const cart = useCart()

   return (
      <header className="flex justify-between items-center w-full px-10 py-4 bg-red-nitendo">
         <Image
            src={'/amiibo.png'}
            width={100}
            height={100}
            alt="Logo Amiibo" />

         <Button
            onClick={() => cart.setOpen(true)}
            className="bg-blue-border-nitendo cursor-pointer hover:bg-blue-border-nitendo/90">
            Carrinho
         </Button>
      </header>
   )
}