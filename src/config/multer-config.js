import multer from "multer";
import { randomUUID } from "crypto";
import { extname, resolve } from 'path';

const randomID = () => randomUUID();

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${randomID()}-${Date.now()}${extname(file.originalname)}`);
    },
  }),
}
