import { useState } from 'react'
import { useModalCadastroController } from './modalCadastro.controller'

export default function ModalCadastroEndereco() {
  const [isOpen, setIsOpen] = useState(false)

  const { errors, handleSubmit, onSubmit, register } =
    useModalCadastroController(setIsOpen)

  return (
    <>
      <button
        className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:border-black"
        onClick={() => setIsOpen(true)}
      >
        Adicionar Endereço
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto flex w-screen bg-black bg-opacity-50 ">
          <div className="relative p-8 w-6/12 m-auto flex-col flex rounded-lg bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Cadastro de Endereço</h2>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-row flex-wrap items-center justify-center w-full pt-4 space-x-2"
            >
              <div className="w-9/12">
                <label>Rua</label>
                <input
                  {...register('street', { required: true })}
                  className="w-full p-2 border rounded"
                />
                {errors.street && (
                  <span className="text-red-500">Este campo é obrigatório</span>
                )}
              </div>
              <div className="w-3/12">
                <label>Número</label>
                <input
                  {...register('number', { required: true })}
                  className="w-full p-2 border rounded"
                />
                {errors.number && (
                  <span className="text-red-500">Este campo é obrigatório</span>
                )}
              </div>
              <div className="w-6/12">
                <label>Bairro</label>
                <input
                  {...register('neighborhood')}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-6/12">
                <label>Cidade</label>
                <input
                  {...register('city', { required: true })}
                  className="w-full p-2 border rounded"
                />
                {errors.city && (
                  <span className="text-red-500">Este campo é obrigatório</span>
                )}
              </div>

              <div className="w-3/12">
                <label>CEP</label>
                <input
                  {...register('cep')}
                  className={`w-full p-2 border ${
                    errors.cep ? 'border-red-500' : 'border-gray-300'
                  } rounded`}
                />
                {errors.cep && (
                  <p className="text-red-500">{errors.cep.message}</p>
                )}
              </div>
              <div className="w-6/12">
                <label>Estado</label>
                <select
                  {...register('state', { required: true })}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
                {errors.state && (
                  <span className="text-red-500">Este campo é obrigatório</span>
                )}
              </div>
              <div className="w-3/12">
                <label>Complemento</label>
                <input
                  {...register('complement')}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex items-center justify-end w-full">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
