'use client'
import Image from "next/image"
import { useState } from "react"

type Props = {
   image: string
   name: string
   selected: number
   setSelected: (selected: number) => void
}
export const ProductImages = ({ image, name, selected, setSelected }: Props) => {
   return (
      <div
         className={`flex flex-col items-center w-auto sm:w-[50%] p-4 gap-2 border border-red-nitendo rounded-md`}>

         <div className={`flex flex-col items-center w-full p-4 border border-blue-nitendo rounded-md
         ${selected === 1 && 'bg-transparent'}
         ${selected === 2 && 'bg-red-300'}
         ${selected === 3 && 'bg-green-300'}
         ${selected === 4 && 'bg-blue-300'}
         `}>
            <Image
               src={image}
               alt={name}
               width={100}
               height={100}
               className={`w-full h-full`}
            />
         </div>

         <div className="flex gap-4">
            <div
               className={`flex justify-center w-full border rounded p-1 bg-transparent ${selected === 1 && 'border-red-border-nitendo'}`}
               onClick={() => setSelected(1)}>
               <Image
                  src={image}
                  alt={name}
                  width={24}
                  height={24}
               />
            </div>

            <div
               className={`flex justify-center w-full border rounded p-1 bg-red-300 ${selected === 2 && 'border-red-border-nitendo'}`}
               onClick={() => setSelected(2)}>
               <Image
                  src={image}
                  alt={name}
                  width={24}
                  height={24}
               />
            </div>

            <div
               className={`flex justify-center w-full border rounded p-1 bg-green-300 ${selected === 3 && 'border-red-border-nitendo'}`}
               onClick={() => setSelected(3)}>
               <Image
                  src={image}
                  alt={name}
                  width={24}
                  height={24}
               />
            </div>

            <div
               className={`flex justify-center w-full border rounded p-1 bg-blue-300 ${selected === 4 && 'border-red-border-nitendo'}`}
               onClick={() => setSelected(4)}>
               <Image
                  src={image}
                  alt={name}
                  width={24}
                  height={24}
               />
            </div>
         </div>
      </div>
   )
}