import { useEffect, useState } from 'react';
import { useAddressStore } from '../../services/store/Address.store';


export function useModalFilterAddressesController() {

  const [search, setSearch] = useState('');

  const { addresses, setFilteredAddresses, filteredAddresses, deleteAddress } = useAddressStore();

  const onSearch = () => {
    const filteredAddresses = addresses.filter(address => address.cep.includes(search));
    setFilteredAddresses(filteredAddresses);
  };

  useEffect(() => {
    if (search) {
      onSearch();
    }
  }, [search]);

  const deleteSelectedAddress = async (id) => {
    deleteAddress(id)
  }

  return {
    filteredAddresses,
    setSearch,
    deleteSelectedAddress
  }
}