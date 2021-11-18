import multer from 'multer'
import multerConfig from '../config/multer-config'

import Picture from '../models/Picture'

const UPLOAD = multer(multerConfig).single('picture')

class PictureController {
  store(req, res){
    return UPLOAD(req, res, async (err) => {
      if(err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try{
      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      const picture = await Picture.create({ originalname, filename, student_id  })
      return res.json(picture)
      }catch(err){
        return res.status(400).json({
          errors: ['Student not found.'],
        })
      }
    })
  }
}
export default new PictureController()
