import { Router } from 'express'
import userController from '../controllers/User.controller'

const ROUTER = new Router()

ROUTER.post('/', userController.store)
ROUTER.get('/', userController.index)
ROUTER.get('/:id', userController.show)
ROUTER.put('/:id', userController.update)
ROUTER.delete('/:id', userController.delete)

export default ROUTER
