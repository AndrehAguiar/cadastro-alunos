import Sequelize from "sequelize"
import databaseConfig from '../config/database'
import Student from "../models/Student"
import User from "../models/User"

const MODELS = [Student, User]
const CONN = new Sequelize(databaseConfig)

MODELS.forEach(model => model.init(CONN))

