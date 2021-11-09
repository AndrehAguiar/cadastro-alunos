import Student from '../models/Student'

class AlunoController {
  async index(req, res){
    const students = await Student.findAll()
    res.status(200).json(students)
  }

  async show(req, res){
    try{
      const { id } = req.params

      if(!id){
        return res.status(400).json({
          errors:['Faltando ID']
        })
      }

      const student = await Student.findByPk(id)

      if(!student){
        return res.status(400).json({
          errors:['Faltando ID']
        })
      }
      return res.status(200).json(student)

    }catch(err){
      return res.status(400).json({
        errors:err.errors.map((e) => e.message)
      })
    }
  }

  async store(req, res){
    try{

      const student = await Student.create(req.body)

      return res.status(201).json(student)

    }catch(err){
      return res.status(400).json({
        errors:err.errors.map((e) => e.message)
      })
    }
  }

  async update(req, res){
    try{
      const { id } = req.params

      if(!id){
        return res.status(400).json({
          errors:['Faltando ID']
        })
      }

      const student = await Student.findByPk(id)

      if(!student){
        return res.status(400).json({
          errors:['Usuário não encontrado!']
        })
      }

      const studentUpdated = await student.update(req.body)

      return res.status(200).json(studentUpdated)

    }catch(err){
      return res.status(400).json({
        errors:err.errors.map((e) => e.message)
      })
    }
  }

  async delete(req, res){
    try{
      const { id } = req.params

      if(!id){
        return res.status(400).json({
          errors:['Faltando ID']
        })
      }

      const student = await Student.findByPk(id)

      if(!student){
        return res.status(400).json({
          errors:['Usuário não encontrado!']
        })
      }
      await student.destroy()
      return res.status(200).json({ deleted: student })

    }catch(err){
      return res.status(400).json({
        errors:err.errors.map((e) => e.message)
      })
    }
  }
}
export default new AlunoController()
