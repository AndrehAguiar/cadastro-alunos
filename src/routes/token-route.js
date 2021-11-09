import { Router } from 'express'
import tokenController from '../controllers/Token-controller'

const ROUTER = new Router()

ROUTER.post('/', tokenController.store)

export default ROUTER
