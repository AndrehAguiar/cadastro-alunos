import  Sequelize, { Model }  from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'O nome precisa ter entre 3 e 25 caracteres'
          }
        }
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'O sobrenome precisa ter entre 3 e 25 caracteres.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "E-mail já cadastrado!"
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A idade precisa ser um número inteiro.'
          }
        }
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'O peso precisa ser um número inteiro ou decimal.'
          }
        }
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A altura precisa ser um número inteiro ou decimal.'
          }
        }
      },
    },
    {
      sequelize,
    })
    return this
  }
}
