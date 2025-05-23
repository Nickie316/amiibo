import { useCart } from "@/store/useCart"
import { Button } from "./ui/button"
import { toast } from "sonner"

export const CartActions = () => {
   const { clearCart } = useCart()

   const handleFinishOrder = () => {
      toast.success('Comprar em finalização ...')
   }

   return (
      <div className="flex flex-col sm:flex-row justify-between items-center p-2 gap-4 border-b">
         <Button
            onClick={clearCart}
            className="w-full bg-red-nitendo text-white hover:bg-red-nitendo/90 sm:flex-1">
            Limpar carrinho
         </Button>

         <Button
            className="w-full bg-blue-border-nitendo text-white hover:bg-blue-border-nitendo/90 sm:flex-1"
            onClick={handleFinishOrder}>
            Finalizar compra
         </Button>
      </div>
   )
}