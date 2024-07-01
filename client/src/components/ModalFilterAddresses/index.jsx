import { useState } from 'react'
import { useModalFilterAddressesController } from './modalFilterAddresses.controller'
import ModalUpdateEndereco from '../ModalUpdate'

export default function ModalFilterAddresses() {
  const [isOpen, setIsOpen] = useState(false)

  const { setSearch, filteredAddresses, deleteSelectedAddress } =
    useModalFilterAddressesController()

  return (
    <>
      <button
        className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:border-black"
        onClick={() => setIsOpen(true)}
      >
        Pesquisar endereço por CEP
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto flex w-screen bg-black bg-opacity-50 ">
          <div className="relative p-8 w-9/12 m-auto flex-col flex rounded-lg bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl py-6">Pesquisar endereço por CEP</h2>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <input
              type="text"
              name="search"
              placeholder="Buscar endereço por CEP"
              className="border border-gray-300 rounded-lg p-2 mr-2"
              onChange={e => setSearch(e.target.value)}
            />
            <table className="rounded-md border-gray-300 w-full mt-6">
              <thead className="border-b-2">
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
                {filteredAddresses && filteredAddresses.length > 0 ? (
                  filteredAddresses.map(address => (
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
        </div>
      )}
    </>
  )
}
