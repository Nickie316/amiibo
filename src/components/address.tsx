type Props = {
   address: Address
}
export const AddressArea = ({ address }: Props) => {
   return (
      <div className="text-left text-sm">
         <p>
            <span className="font-bold">Endereço: </span> {address.logradouro},
         </p>

         <p>
            <span className="font-bold">Bairro:</span> {address.bairro},
         </p>

         <p>
            <span className="font-bold">Cidade:</span> {address.localidade}, Estado: {address.uf}
         </p>

         <p>
            <span className="font-bold">Frete:</span> {'R$ 10,00'}
         </p>
      </div>
   )
}