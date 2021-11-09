import User from '../models/User'

class UserController {

  async store(req, res){
    try {
      const newUser = await User.create(req.body)
      const { id, name, email } = newUser
      return res.status(201).json({ id, name, email })
    }catch(err){
      console.log(err.message)
      return res.status(400).json({
        errors: err.errors.map(e => e.message),
      })
    }
  }

  async index(req, res){
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email']})
      return res.status(200).json(users)
    }catch(err){
      console.log(err.message)
      return res.status(400).json({
        errors:['Usuário não encontrado.'],
      })
    }
  }

  async show(req, res){
    try {
      const user = await User.findByPk(req.params.id)
      const { id, name, email } = user
      if(!user){
        return res.status(400).json({
          errors:['Usuário não encontrado.'],
        })
      }

      return res.status(200).json({ id, name, email })

    }catch(err){
      console.log(err.message)
      return res.json(null)
    }
  }

  async update(req, res){
    try {
      const user = await User.findByPk(req.userId)
      if(!user){
        return res.status(400).json({
          errors:['Usuário não encontrado.'],
        })
      }

      const userUpdated = await user.update(req.body)
      const { id, name, email } = userUpdated
      return res.status(200).json({ id, name, email })
    }catch(err){
      console.log(err.message)
      return res.status(400).json({
        errors:err.errors.map((e) => e.message),
      })
    }
  }

  async delete(req, res){
    try {

      const user = await User.findByPk(req.userId)

      if(!user){
        return res.status(400).json({
          errors:['Usuário não encontrado.'],
        })
      }

      await user.destroy()

      return res.status(200).json(user)
    }catch(err){
      console.log(err.message)
      return res.status(400).json({
        errors:err.errors.map((e) => e.message),
      })
    }
  }
}
export default new UserController()
