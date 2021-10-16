import User from '../models/User'

class UserController {
  async store(req, res){
    try {
      const NEW_USER = await User.create(req.body)
      return res.status(201).json(NEW_USER)
    }catch(err){
      console.log(err)
      return res.status(400).json({
        errors: err.errors.map(e => e.message),
      })
    }
  }

  async index(req, res){
    try {
      const users = await User.findAll()
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
      const { id } = req.params
      if(!id) {
        return res.status(400).json({
          errors:['ID não enviado.'],
        })
      }
      const user = await User.findByPk(id)
      if(!user){
        return res.status(400).json({
          errors:['Usuário não encontrado.'],
        })
      }

      return res.status(200).json(user)
    }catch(err){
      console.log(err.message)
      return res.json(null)
    }
  }

  async update(req, res){
    try {
      const { id } = req.params
      if(!id) {
        return res.status(400).json({
          errors:['ID não enviado.'],
        })
      }
      const user = await User.findByPk(id)
      if(!user){
        return res.status(400).json({
          errors:['Usuário não encontrado.'],
        })
      }

      const newUser = await user.update(req.body)

      return res.status(200).json(newUser)
    }catch(err){
      console.log(err.message)
      return res.status(400).json({
        errors:err.errors.map((e) => e.message),
      })
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params
      if(!id) {
        return res.status(400).json({
          errors:['ID não enviado.'],
        })
      }

      const user = await User.findByPk(id)

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
