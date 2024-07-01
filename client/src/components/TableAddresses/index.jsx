import ModalUpdateEndereco from '../ModalUpdate'
import { useTableAddressesController } from './tableAddresses.controler'

export default function TableAddresses() {
  const { addresses, deleteSelectedAddress } = useTableAddressesController()

  return (
    <div className="w-10/12 overflow-x-auto bg-white shadow-md rounded-md flex flex-col items-center justify-center p-6 my-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-700">Endereços</h2>
      <table className="rounded-md border-gray-300 w-9/12 mt-6">
        <thead className='border-b-2'>
          <tr>
            <th className="px-4 py-2 text-gray-500">CEP</th>
            <th className="px-4 py-2 text-gray-500">Rua</th>
            <th className="px-4 py-2 text-gray-500">Número</th>
            <th className="px-4 py-2 text-gray-500">Complemento</th>
            <th className="px-4 py-2 text-gray-500">Bairro</th>
            <th className="px-4 py-2 text-gray-500">Cidade</th>
            <th className="px-4 py-2 text-gray-500">Estado</th>
            <th className="px-4 py-2 text-gray-500">Ações</th>
          </tr>
        </thead>
        <tbody>
          {addresses && addresses.length > 0 ? (
            addresses.map(address => (
              <tr key={address.id}>
                <td className="p-2">{address.cep}</td>
                <td className="p-2">{address.street}</td>
                <td className="p-2">{address.number}</td>
                <td className="p-2">{address.complement}</td>
                <td className="p-2">{address.neighborhood}</td>
                <td className="p-2">{address.city}</td>
                <td className="p-2">{address.state}</td>
                <td className="p-2 flex justify-center">
                  <ModalUpdateEndereco id={address.id} />
                  <button
                    className="border rounded-lg p-2 bg-red-500 text-white hover:bg-white hover:text-black hover:border-black"
                    onClick={() => {
                      deleteSelectedAddress(address.id)
                    }}
                  >
                    <span className="material-symbols-outlined">
                      delete_forever
                    </span>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="p-2">
                Nenhum endereço encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
