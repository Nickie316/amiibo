import Link from "next/link"

export const Footer = () => {
   return (
      <footer className="flex justify-center items-center w-full font-bold p-4 bg-blue-nitendo">
         Codado com 💗 por
         <Link
            className="ml-2 text-red-nitendo"
            href={'https://www.linkedin.com/in/douglas-suzuki/'}
            target="_blank"> Doug</Link>
      </footer>
   )
}