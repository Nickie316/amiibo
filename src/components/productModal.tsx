import { Amiibo } from "@/types/amiibo"
import { ProductImages } from "./productImages"
import { ShippingTo } from "./shippingArea"
import { Button } from "./ui/button"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { toast } from "sonner"
import { useState } from "react"
import { useCart } from "@/store/useCart"
import { formatPrice } from "@/lib/formatPrice"

type Props = {
   char: Amiibo
}
export const ProductModal = ({ char }: Props) => {
   const { addToCart } = useCart()

   const [selected, setSelected] = useState(1)
   const [error, setError] = useState(false)

   const handleAddToCart = () => {
      const item: CartItem = {
         name: char.name,
         image: char.image,
         quantity: 1,
         price: selected === 1 ? 30 : 35,
         version: selected
      }

      addToCart(item)

      toast.success('Produto adicionado ao carrinho')
   }

   return (
      <DialogContent className="flex max-h-[80vh] flex-col sm:flex-row overflow-y-scroll">
         <ProductImages
            image={char.image}
            name={char.name}
            selected={selected}
            setSelected={setSelected} />

         <DialogHeader className="flex justify-center flex-1">
            <DialogTitle>
               {char.name}
            </DialogTitle>

            <DialogDescription>
               {`Versão ${selected} - ${selected === 1 ? formatPrice(30) : formatPrice(35)}`}
            </DialogDescription>

            <ShippingTo error={error} setError={setError} />

            <Button
               className="bg-blue-border-nitendo mt-3 hover:bg-blue-border-nitendo/90"
               onClick={handleAddToCart}>
               Adicionar ao carrinho
            </Button>
         </DialogHeader>
      </DialogContent>
   )
}