// Utilities
import express, { Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import https from 'https'
import multer from 'multer'

// Routes
import loginRoutes from './routes/login.js'
import homeRoutes from './routes/home.js'
import userRoutes from './routes/user.js'
import imageRoutes from './routes/images.js'
import morganWinston from './helpers/morganWinston.js'


const app = express()


dotenv.config()

if (process.env.CERT_KEY_PATH === undefined || process.env.CERT_CERT_PATH === undefined){
  throw new Error('Make sure cert paths are valid.')
}

const privateKey = fs.readFileSync(process.env.CERT_KEY_PATH, 'utf8');
const certificate = fs.readFileSync(process.env.CERT_CERT_PATH, 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);
const PORT = process.env.PORT || 3000

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

app.use(express.json())
app.use(cookieParser())
app.use(morganWinston)

app.use(cors({
  origin: 'http://localhost:5173',  // Adjust this to your frontend's address
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization'],
}));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Body: ${JSON.stringify(req.body)}`);
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Origin header:', req.headers.origin);
  console.log('Access-Control headers:', res.get('Access-Control-Allow-Origin'));
  next();
});

app.use('/login', loginRoutes)
app.use('/home', homeRoutes)
app.use('/user', userRoutes)
app.use('/images', imageRoutes)

app.use('/images', express.static('uploads'))

httpsServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`)
})

export default app