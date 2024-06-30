import { Router } from 'express';
import AddressController from './controller/AddressController.js';

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

router.route('/address')
  .post(AddressController.createAddress)
  .get(AddressController.listAddresses)

router.route('/address/:id')
  .get(AddressController.showAddress)
  .put(AddressController.updateAddress)
  .delete(AddressController.deleteAddress)

export { router };

