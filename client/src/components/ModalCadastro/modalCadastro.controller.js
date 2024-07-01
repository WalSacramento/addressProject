import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAddressStore } from '../../services/store/Address.store'
import { useState } from 'react'


export function useModalCadastroController(setIsOpen) {

  const { createAddress, addresses } = useAddressStore()
  const [cep, setCep] = useState('');

  const schema = yup
    .object({
      cep: yup
        .string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .test('unique-cep', 'CEP já cadastrado', value => {
          // Verifica se o CEP já existe no array de endereços
          return !addresses.some(address => address.cep === value);
        })
    })
    .required()

  function maskCEP(value) {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{5})(\d)/, '$1-$2') // Insere hífen após o quinto dígito
      .substring(0, 9); // Limita a 9 caracteres
  }

  const handleCepChange = (event) => {
    const maskedCep = maskCEP(event.target.value);
    setCep(maskedCep);
  };


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
    errors,
    cep,
    handleCepChange
  }
}