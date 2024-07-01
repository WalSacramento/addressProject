import { create } from 'zustand'
import { createNewAddress, deleteAddress, getAllAddresses, updateAddress } from '../requests/address'

export const useAddressStore = create((set) => ({
  addresses: [],
  isisLoading: false,
  filteredAddresses: [],
  getAddresses: async () => {
    set({ isLoading: true })
    const addresses = await getAllAddresses()
    set({ addresses, isLoading: false })
  },
  deleteAddress: async (id) => {
    set({ isLoading: true })
    await deleteAddress(id)
    const addresses = await getAllAddresses()
    set({ addresses, isLoading: false })
  },
  setAddresses: (addresses) => {
    set({ addresses })
  },
  createAddress: async (data) => {
    set({ isLoading: true })
    await createNewAddress(data)
    const addresses = await getAllAddresses()
    set({ addresses, isLoading: false })
  },
  updateAddress: async (id, data) => {
    set({ isLoading: true })
    await updateAddress(id, data)
    const addresses = await getAllAddresses()
    set({ addresses, isLoading: false })
  },
  setFilteredAddresses: (addresses) => {
    console.log(addresses, "filtered addresses")
    set({ filteredAddresses: addresses })
  },
}))