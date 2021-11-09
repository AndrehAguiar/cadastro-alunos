import { Router } from 'express'

import loginRequired from '../middlewares/login-Required'
import pictureController from '../controllers/Picture-controller'

const ROUTER = new Router()

ROUTER.post('/', loginRequired, pictureController.store)

export default ROUTER
