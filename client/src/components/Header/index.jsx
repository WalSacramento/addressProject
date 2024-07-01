import ModalCadastroEndereco from '../ModalCadastro'
import ModalFilterAddresses from '../ModalFilterAddresses'

export default function Header() {
  return (
    <header className="flex justify-between w-full max-w-6xl p-4 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-2xl font-bold text-gray-800">Address Manager</h1>
      <div className="flex gap-4">
        <ModalFilterAddresses />
        <ModalCadastroEndereco />
      </div>
    </header>
  )
}
