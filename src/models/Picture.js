import  Sequelize, { Model }  from "sequelize";

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
    },
    {
      sequelize,
      tableName: 'pictures'
    })
    return this
  }

  static associate(models) {
    if(models){
      const { Student } = models
      this.belongsTo(Student, { foreignKey: 'student_id' })
    }
  }
}
