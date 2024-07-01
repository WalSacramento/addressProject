import { api } from "../api/api"

export const createNewAddress = async (address) => {
  try {
    const response = await api.post('/address', address)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllAddresses = async () => {
  try {
    const response = await api.get('/address')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteAddress = async (id) => {
  try {
    const response = await api.delete(`/address/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateAddress = async (id, address) => {
  try {
    const response = await api.put(`/address/${id}`, address)
    return response.data
  } catch (error) {
    console.error(error)
  }
}