import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAddressStore } from '../../services/store/Address.store'


export function useModalCadastroController(setIsOpen) {

  const { createAddress } = useAddressStore()

  const schema = yup
    .object({
      cep: yup
        .string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    })
    .required()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema) // Integrando o esquema de validação do Yup
  })

  const onSubmit = data => {
    createAddress(data)
    setIsOpen(false) // Fecha o modal após o envio
    reset()
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}