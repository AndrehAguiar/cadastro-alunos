import dotenv from 'dotenv'
dotenv.config()

import './src/database'

import express from "express"
import homeRoutes from "./src/routes/home.route"
import userRoutes from "./src/routes/user.route"
import tokenRoutes from "./src/routes/token.route"

class App {
  constructor(){
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/user', userRoutes)
    this.app.use('/token', tokenRoutes)
  }
}

export default new App().app
