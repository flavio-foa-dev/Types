import { Router } from 'express'

import CustomerController from '../controllers/customerController'

const customerControler = new CustomerController()

const router = Router()

router.get('/customer', customerControler.getAllCustomers)
router.get('/customer/:id', customerControler.getByIdCustomer)
router.post('/customer', customerControler.saveCustomer)
router.put('/customer/:id', customerControler.updateCustomer)
router.delete('/customer/:id', customerControler.deleteCustomer)

export default router