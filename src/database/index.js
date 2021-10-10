import Sequelize from "sequelize"
import databaseConfig from '../config/database'
import Student from "../models/Student"

const MODELS = [Student]
const CONN = new Sequelize(databaseConfig)

MODELS.forEach(model => model.init(CONN))

