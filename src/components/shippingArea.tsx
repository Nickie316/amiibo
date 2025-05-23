import { searchCep } from "@/lib/searchCep"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { AddressArea } from "./address"

type Props = {
   error: boolean
   setError: (error: boolean) => void
}
export const ShippingTo = ({ error, setError }: Props) => {
   const [cep, setCep] = useState('')
   const [address, setAddress] = useState<Address | null>(null)


   const handleSearchCep = async () => {
      setAddress(null)

      if (cep.length !== 8) {
         toast.error('Cep inválido')
         return
      }

      const searchAddress = await searchCep(cep)

      if (!searchAddress) {
         setError(true)
         toast.error('Cep inválido')
      }

      setAddress(searchAddress)
      setError(false)
   }
   return (
      <div className="flex flex-col gap-4">
         <input
            type="text"
            placeholder="Digite seu cep"
            className="border rounded-md p-2 w-full"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
         />

         <Button
            className="bg-blue-border-nitendo hover:bg-blue-border-nitendo/90"
            onClick={handleSearchCep}>
            Calcular Frete
         </Button>

         {cep.length === 8 && !error && address &&
            <AddressArea address={address} />
         }
      </div>
   )
}