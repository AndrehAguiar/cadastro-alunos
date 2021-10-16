import { Router } from 'express'
import userController from '../controllers/User.controller'
import loginRequired from '../middlewares/loginRequired'

const ROUTER = new Router()

ROUTER.get('/', userController.index)
ROUTER.get('/:id', userController.show)

ROUTER.post('/', userController.store)
ROUTER.put('/', loginRequired, userController.update)
ROUTER.delete('/', loginRequired, userController.delete)

export default ROUTER
