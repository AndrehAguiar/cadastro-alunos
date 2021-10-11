import { Router } from 'express'
import userController from '../controllers/User.controller'

const ROUTER = new Router()

ROUTER.post('/', userController.store)

export default ROUTER
