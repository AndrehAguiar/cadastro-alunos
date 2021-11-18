import  Sequelize, { Model }  from "sequelize";
import appConfig from "../config/appConfig";

export default class Picture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório'
          },
        },
      },
      student_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório'
          },
        },
      },
      uri: {
        type: Sequelize.VIRTUAL,
        get(){
          return `${ appConfig.uri }/${ this.getDataValue('filename') }`
        }
      },
    },
    {
      sequelize,
      tableName: 'pictures'
    })
    return this
  }
  static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'student_id', targetKey: 'id' })
  }

}
