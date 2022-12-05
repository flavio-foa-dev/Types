import { Router } from 'express'

import CustomerController from '../controllers/customerController'

const customerControler = new CustomerController()

const router = Router()

router.get('/customer', customerControler.getAllCustomers)
router.get('/customer/:id', customerControler.getByIdCustomer)

export default router