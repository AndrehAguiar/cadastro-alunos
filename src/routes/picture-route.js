import { Router } from 'express'
import multer from 'multer'

import pictureController from '../controllers/Picture-controller'
import multerConfig from '../config/multer-config'

const UPLOAD = multer(multerConfig)
const ROUTER = new Router()

ROUTER.post('/', UPLOAD.single('picture'), pictureController.store)

export default ROUTER
