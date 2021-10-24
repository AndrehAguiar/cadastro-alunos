import { Router } from 'express'
import alunoController from '../controllers/Aluno.controller'

import loginRequired from "../middlewares/loginRequired"

const ROUTER = new Router()

ROUTER.get('/', alunoController.index)
ROUTER.get('/:id', alunoController.show)
ROUTER.post('/', loginRequired, alunoController.store)
ROUTER.put('/:id', loginRequired, alunoController.update)
ROUTER.delete('/:id', loginRequired, alunoController.delete)

export default ROUTER
