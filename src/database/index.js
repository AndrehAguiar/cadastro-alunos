import Sequelize from "sequelize"
import databaseConfig from '../config/database'
import Student from "../models/Student"
import User from "../models/User"
import Picture from "../models/Picture"

const MODELS = [Student, Picture, User];
const CONN = new Sequelize(databaseConfig)

MODELS.forEach((model) =>  model.init(CONN))
MODELS.forEach((model) => model.associate && model.associate(CONN.models))
