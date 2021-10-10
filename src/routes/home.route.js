import { Router } from 'express'

const ROUTER = new Router()

ROUTER.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

export default ROUTER
