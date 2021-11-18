import multer from "multer";
import { randomUUID } from "crypto";
import { extname, resolve } from 'path';

const randomID = () => randomUUID();

export default {
  fileFiler: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'))
    }
    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${randomID()}-${Date.now()}${extname(file.originalname)}`);
    },
  }),
}
