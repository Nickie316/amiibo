import axios from "axios"

export const searchCep = async (cep: string): Promise<Address | null> => {
   const searchAddress = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

   if (!searchAddress) return null

   return searchAddress.data
}