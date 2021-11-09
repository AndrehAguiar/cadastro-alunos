import { Router } from 'express'
import studentController from '../controllers/Student-controller'

import loginRequired from "../middlewares/login-Required"

const ROUTER = new Router()

ROUTER.get('/', studentController.index)
ROUTER.get('/:id', studentController.show)
ROUTER.post('/', loginRequired, studentController.store)
ROUTER.put('/:id', loginRequired, studentController.update)
ROUTER.delete('/:id', loginRequired, studentController.delete)

export default ROUTER
