import User from '../models/User'

class UserController {
  async store(req, res){
    try {
      const NEW_USER = await User.create(req.body)
      res.status(201).json(NEW_USER)
    }catch(err){
      console.log(err);
      res.status(400).json({
        errors: err.errors.map(e => e.message),
      })
    }
  }
}
export default new UserController()
