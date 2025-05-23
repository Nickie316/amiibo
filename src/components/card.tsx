'use client'
import { Amiibo } from "@/types/amiibo"
import Image from "next/image"

type Props = {
   data: Amiibo
   index: number
}
export const Card = ({ data, index }: Props) => {
   return (
      <div
         className={`flex flex-col justify-between w-[200px] h-[272px] p-4 gap-4 border rounded-md hover:bg-black/10 hover:cursor-pointer ${index % 2 === 0 ? 'border-blue-nitendo' : 'border-red-nitendo'}`}>
         <div className="flex justify-center">
            <Image
               src={data.image}
               alt={data.character}
               width={100}
               height={100}
               className="h-full" />
         </div>

         <div className="text-center">
            <p className="font-bold truncate">{data.name}</p>
            <p className={`text-sm font-bold ${index % 2 === 0 ? 'text-blue-nitendo' : 'text-red-nitendo'}`}>
               {`R$ 30,00`}
            </p>
         </div>
      </div>
   )
}