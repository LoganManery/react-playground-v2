// Utilities
import express, {Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import https from 'https'

// Routes
import loginRoutes from './routes/login/login'
import homeRoutes from './routes/home/home'
import blogsRoutes from './routes/blogs/blogs'
import userRoutes from './routes/user/user'
import morganWinston from './helpers/morganWinston'

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
app.use('/blogs', blogsRoutes)
app.use('/user', userRoutes)

httpsServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`)
})