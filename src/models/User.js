import  Sequelize, { Model }  from "sequelize"
import bcryptjs from "bcryptjs"

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 15],
            msg: 'O Campo nome deve conter entre 3 e 15 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          name:'users.email',
          msg: 'E-mail já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 15],
            msg: 'A senha deve conter entre 6 e 15 caracteres'
          }
        }
      },
    },
    {
      sequelize,
    })

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8)
      }
    })

    return this
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash)
  }
}
