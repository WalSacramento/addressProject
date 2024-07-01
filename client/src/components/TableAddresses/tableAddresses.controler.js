import { useEffect } from "react";
import { useAddressStore } from "../../services/store/Address.store";

export function useTableAddressesController() {

  const { getAddresses, addresses, deleteAddress } = useAddressStore()

  useEffect(() => {
    getAddresses()
  }, [getAddresses])

  const deleteSelectedAddress = async (id) => {
    deleteAddress(id)
  }

  return {
    addresses,
    deleteSelectedAddress
  }
}