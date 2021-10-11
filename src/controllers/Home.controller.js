import Student from '../models/Student'

class HomeController {
  async index(req, res){
    const NEW_STUDENT = await Student.create({
      name: "André",
      surname: "Aguiar",
      email: "andreaguiar.g@gmail.com",
      age: 39,
      weight: 85,
      height: 172
    })
    res.json(NEW_STUDENT)
  }
}
export default new HomeController()
