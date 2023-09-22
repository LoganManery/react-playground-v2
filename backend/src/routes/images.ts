import express, {Request, Response} from 'express'
import multer from 'multer'
import { Database } from '../database.js'
import bcrypt from 'bcrypt'
import logError from '../helpers/logError.js'

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  const filename = req.file?.originalname;
  
  // try {
  //   await pool.query('INSERT INTO images (filename) VALUES (?)', [filename]);
  //   res.send('Image uploaded and stored successfully!');
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Server Error');
  // }
});

export default router