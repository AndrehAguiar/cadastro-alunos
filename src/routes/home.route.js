import { Router } from 'express'
import homeController from '../controllers/Home.controller'

const ROUTER = new Router()

ROUTER.get('/', homeController.index)

export default ROUTER
